/**
 * Nexus Design System — Color Tokens
 * OKLCH-based, symmetrical dark/light theme support
 * Each scale: 11 steps (0-100), pairs mirror for theme switching
 * Grey(N) light = Grey(100-N) dark
 */

export const colorScales = {
  'neutral-grey': {
    name: 'Neutral Grey',
    description: 'Pure neutral with no undertone. Base for all UI surfaces and text.',
    values: {
      0:   { hex: '#FAFAFA', oklch: { l: 0.985, c: 0.000, h: 0 } },
      10:  { hex: '#DEDEDE', oklch: { l: 0.901, c: 0.000, h: 0 } },
      20:  { hex: '#C3C3C3', oklch: { l: 0.817, c: 0.000, h: 0 } },
      30:  { hex: '#A8A8A8', oklch: { l: 0.733, c: 0.000, h: 0 } },
      40:  { hex: '#8E8E8E', oklch: { l: 0.648, c: 0.000, h: 0 } },
      50:  { hex: '#757575', oklch: { l: 0.564, c: 0.000, h: 0 } },
      60:  { hex: '#5E5F5F', oklch: { l: 0.484, c: 0.000, h: 0 } },
      70:  { hex: '#4B4B4A', oklch: { l: 0.411, c: 0.000, h: 0 } },
      80:  { hex: '#373737', oklch: { l: 0.335, c: 0.000, h: 0 } },
      90:  { hex: '#242424', oklch: { l: 0.258, c: 0.000, h: 0 } },
      100: { hex: '#080808', oklch: { l: 0.132, c: 0.000, h: 0 } },
    }
  },
  // Cool Grey, Warm Grey, Blue, Green, Red, Yellow/Amber, Orange — to be added
};

export const textRoles = {
  light: {
    surface: '#FFFFFF',
    primary:   { step: 90, usage: 'Headings, primary text' },
    secondary: { step: 80, usage: 'Body text, secondary content' },
    tertiary:  { step: 60, usage: 'Captions, timestamps, labels' },
    disabled:  { step: 40, usage: 'Disabled text, placeholders' },
  },
  dark: {
    surface: '#080808',
    primary:   { step: 10, usage: 'Headings, primary text' },
    secondary: { step: 20, usage: 'Body text, secondary content' },
    tertiary:  { step: 40, usage: 'Captions, timestamps, labels' },
    disabled:  { step: 60, usage: 'Disabled text, placeholders' },
  }
};

export const tailwindConfig = {
  neutral: {
    0: '#FAFAFA', 10: '#DEDEDE', 20: '#C3C3C3', 30: '#A8A8A8',
    40: '#8E8E8E', 50: '#757575', 60: '#5E5F5F', 70: '#4B4B4A',
    80: '#373737', 90: '#242424', 100: '#080808'
  }
};

