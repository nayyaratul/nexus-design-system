// Target lightness values matching our existing scale curves (0=lightest, 100=darkest)
const TARGET_LIGHTNESS = [0.97, 0.88, 0.79, 0.70, 0.61, 0.52, 0.43, 0.35, 0.27, 0.19, 0.10];
const STEPS = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function srgbToLinear(c) {
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function linearToSrgb(c) {
  return c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
}

function hexToRgb(hex) {
  hex = hex.replace('#', '');
  return [
    parseInt(hex.slice(0, 2), 16) / 255,
    parseInt(hex.slice(2, 4), 16) / 255,
    parseInt(hex.slice(4, 6), 16) / 255,
  ];
}

function rgbToHex(r, g, b) {
  const toHex = (c) => {
    const v = Math.round(Math.max(0, Math.min(1, c)) * 255);
    return v.toString(16).padStart(2, '0').toUpperCase();
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function rgbToOklab(r, g, b) {
  const lr = srgbToLinear(r);
  const lg = srgbToLinear(g);
  const lb = srgbToLinear(b);

  const l_ = Math.cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
  const m_ = Math.cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
  const s_ = Math.cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);

  return {
    L: 0.2104542553 * l_ + 0.7936177850 * m_ - 0.0040720468 * s_,
    a: 1.9779984951 * l_ - 2.4285922050 * m_ + 0.4505937099 * s_,
    b: 0.0259040371 * l_ + 0.7827717662 * m_ - 0.8086757660 * s_,
  };
}

function oklabToRgb(L, a, b) {
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.2914855480 * b;

  const l = l_ * l_ * l_;
  const m = m_ * m_ * m_;
  const s = s_ * s_ * s_;

  const lr = +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
  const lg = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
  const lb = -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s;

  return [linearToSrgb(lr), linearToSrgb(lg), linearToSrgb(lb)];
}

function oklabToOklch(L, a, b) {
  return {
    L,
    C: Math.sqrt(a * a + b * b),
    h: Math.atan2(b, a),
  };
}

function oklchToOklab(L, C, h) {
  return { L, a: C * Math.cos(h), b: C * Math.sin(h) };
}

export function hexToOklch(hex) {
  const [r, g, b] = hexToRgb(hex);
  const lab = rgbToOklab(r, g, b);
  return oklabToOklch(lab.L, lab.a, lab.b);
}

export function oklchToHex(L, C, h) {
  const { a, b } = oklchToOklab(L, C, h);
  const [r, g, bb] = oklabToRgb(L, a, b);
  return rgbToHex(r, g, bb);
}

export function generateBrandScale(brandHex) {
  const { C, h } = hexToOklch(brandHex);
  return Object.fromEntries(
    STEPS.map((step, i) => {
      // Reduce chroma at extremes to avoid clipping
      const chromaScale = step <= 10 || step >= 90 ? 0.3 : step <= 20 || step >= 80 ? 0.7 : 1;
      return [step, oklchToHex(TARGET_LIGHTNESS[i], C * chromaScale, h)];
    })
  );
}

export function setBrandColour(brandHex) {
  const scale = generateBrandScale(brandHex);
  const root = document.documentElement;
  Object.entries(scale).forEach(([step, hex]) => {
    root.style.setProperty(`--brand-${step}`, hex);
  });
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('nexus:brandcolourchange', { detail: { hex: brandHex } }));
  }
}
