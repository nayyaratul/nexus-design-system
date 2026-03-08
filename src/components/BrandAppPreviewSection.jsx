import { useState, useEffect, useRef } from 'react';
import BrandMobilePreview from './BrandMobilePreview.jsx';
import styles from './BrandAppPreviewSection.module.scss';

const FILENAME = 'nexus-mobile-preview.png';
const DEFAULT_LOGO_URL = '/addon-icons/BP%20logo.png';

export default function BrandAppPreviewSection() {
  const [logoUrl, setLogoUrl] = useState(DEFAULT_LOGO_URL);
  const [theme, setTheme] = useState('light');
  const [downloading, setDownloading] = useState(false);
  const [downloadImageUrl, setDownloadImageUrl] = useState(null);
  const [downloadError, setDownloadError] = useState(null);
  const downloadBlobRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    return () => {
      if (logoUrl && logoUrl.startsWith('blob:')) {
        URL.revokeObjectURL(logoUrl);
      }
    };
  }, [logoUrl]);

  useEffect(() => {
    const wrapper = wrapperRef.current ?? document.getElementById('brand-mobile-preview-wrapper');
    if (wrapper) wrapper.setAttribute('data-theme', theme);
  }, [theme]);

  function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (logoUrl && logoUrl.startsWith('blob:')) {
      URL.revokeObjectURL(logoUrl);
    }
    setLogoUrl(URL.createObjectURL(file));
    e.target.value = '';
  }

  function handleReset() {
    if (logoUrl && logoUrl.startsWith('blob:')) {
      URL.revokeObjectURL(logoUrl);
    }
    setLogoUrl(DEFAULT_LOGO_URL);
  }

  async function handleDownload() {
    const wrapper = wrapperRef.current ?? document.getElementById('brand-mobile-preview-wrapper');
    if (!wrapper) return;
    setDownloading(true);
    setDownloadImageUrl(null);
    setDownloadError(null);
    downloadBlobRef.current = null;

    try {
      // Wait for images inside the preview to finish loading so the capture isn’t blank/corrupt
      const images = wrapper.querySelectorAll('img');
      await Promise.all(
        Array.from(images).map(
          (img) =>
            new Promise((resolve) => {
              if (img.complete && img.naturalHeight > 0) return resolve();
              img.onload = resolve;
              img.onerror = resolve;
              setTimeout(resolve, 3000);
            })
        )
      );

      const { default: html2canvas } = await import('html2canvas');
      const rect = wrapper.getBoundingClientRect();
      const opts = {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: null,
        onclone(clonedDoc) {
          function toRgba(val) {
            const srgb = val.match(/color\s*\(\s*srgb\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)\s*(?:\/\s*([\d.]+))?\s*\)/);
            if (srgb) {
              const r = Math.round(Number(srgb[1]) * 255);
              const g = Math.round(Number(srgb[2]) * 255);
              const b = Math.round(Number(srgb[3]) * 255);
              const a = srgb[4] != null ? Number(srgb[4]) : 1;
              return `rgba(${r},${g},${b},${a})`;
            }
            return null;
          }
          function safeValue(val) {
            if (!val) return null;
            if (/color-mix\s*\(/.test(val)) return null;
            if (/color\s*\(/.test(val)) return toRgba(val) || 'transparent';
            return val;
          }
          const cloneWrapper = clonedDoc.getElementById('brand-mobile-preview-wrapper');
          if (!cloneWrapper || !wrapper) return;
          clonedDoc.querySelectorAll('style, link[rel="stylesheet"]').forEach((el) => el.remove());
          function copyComputedStyles(orig, clone) {
            try {
              const cs = getComputedStyle(orig);
              for (let i = 0; i < cs.length; i++) {
                const prop = cs[i];
                const val = cs.getPropertyValue(prop);
                const safe = safeValue(val);
                if (safe) clone.style.setProperty(prop, safe);
              }
            } catch (_) {}
            const origChildren = Array.from(orig.children);
            const cloneChildren = Array.from(clone.children);
            for (let i = 0; i < origChildren.length && i < cloneChildren.length; i++) {
              copyComputedStyles(origChildren[i], cloneChildren[i]);
            }
          }
          copyComputedStyles(wrapper, cloneWrapper);
        },
      };
      if (rect.width > 0 && rect.height > 0) {
        opts.width = rect.width;
        opts.height = rect.height;
      }
      const canvas = await html2canvas(wrapper, opts);
      let blob = null;
      try {
        const dataUrl = canvas.toDataURL('image/png');
        const res = await fetch(dataUrl);
        blob = await res.blob();
      } catch (_) {
        blob = await new Promise((resolve) => {
          canvas.toBlob((b) => resolve(b || null), 'image/png');
        });
      }
      if (!blob || blob.size < 100) {
        throw new Error('Capture failed or image was empty. Try refreshing the page.');
      }

      const url = URL.createObjectURL(blob);
      downloadBlobRef.current = blob;
      setDownloadImageUrl(url);

      const a = document.createElement('a');
      a.href = url;
      a.download = FILENAME;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      setTimeout(() => {
        setDownloadImageUrl(null);
        downloadBlobRef.current = null;
        URL.revokeObjectURL(url);
      }, 120000);
    } catch (err) {
      console.error('Download preview failed:', err);
      setDownloadImageUrl(null);
      downloadBlobRef.current = null;
      setDownloadError(err?.message || 'Capture failed. Try refreshing or use another browser.');
    } finally {
      setDownloading(false);
    }
  }

  async function handleCopyImage() {
    const blob = downloadBlobRef.current;
    if (!blob) return;
    try {
      await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
    } catch (_) {}
  }

  return (
    <div className={styles.section} data-brand-app-preview-root>
      <div className={styles.topBar}>
        <p className={styles.topBarHeading}>
          <span className={styles.topBarTitle}>App preview</span>
          <span className={styles.topBarSeparator}>—</span>
          <span className={styles.topBarDesc}>Your brand in a real app. Change brand above to refresh.</span>
        </p>
        <div className={styles.topBarControls}>
          <div className={styles.themeToggle} role="group" aria-label="Theme for app preview">
            <button
              type="button"
              className={theme === 'light' ? `${styles.themeToggleBtn} ${styles.themeToggleBtnActive}` : styles.themeToggleBtn}
              onClick={() => setTheme('light')}
              aria-pressed={theme === 'light'}
            >
              Light
            </button>
            <button
              type="button"
              className={theme === 'dark' ? `${styles.themeToggleBtn} ${styles.themeToggleBtnActive}` : styles.themeToggleBtn}
              onClick={() => setTheme('dark')}
              aria-pressed={theme === 'dark'}
            >
              Dark
            </button>
          </div>
          <button
            type="button"
            className={styles.downloadBtn}
            onClick={handleDownload}
            disabled={downloading}
            aria-label="Download mobile app preview as image"
          >
            {downloading ? 'Downloading…' : 'Download preview'}
          </button>
          <label htmlFor="brand-logo-upload" className={styles.uploadZone}>
            <span className={styles.uploadZoneIcon} aria-hidden>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </span>
            <span className={styles.uploadZoneText}>Replace logo</span>
            <input
              id="brand-logo-upload"
              type="file"
              accept=".png,image/png"
              onChange={handleFileChange}
              className={styles.uploadInput}
              aria-label="Replace brand logo"
            />
          </label>
          {logoUrl !== DEFAULT_LOGO_URL && (
            <button type="button" onClick={handleReset} className={styles.resetBtn}>
              Reset
            </button>
          )}
        </div>
      </div>
      <div className={styles.phoneStage}>
        <div ref={wrapperRef} id="brand-mobile-preview-wrapper" data-theme={theme}>
          <BrandMobilePreview logoUrl={logoUrl} />
        </div>
        {downloadError && (
          <div className={styles.downloadError} role="alert">
            <p className={styles.downloadErrorText}>{downloadError}</p>
            <button type="button" onClick={() => setDownloadError(null)} className={styles.downloadErrorDismiss}>
              Dismiss
            </button>
          </div>
        )}
        {downloadImageUrl && (
          <div className={styles.downloadFallback}>
            <p className={styles.downloadFallbackHint}>
              Right‑click the image below and choose <strong>Save image as…</strong> to save. Or copy to clipboard and paste elsewhere.
            </p>
            <div className={styles.downloadFallbackActions}>
              <button type="button" onClick={handleCopyImage} className={styles.downloadFallbackCopyBtn}>
                Copy image
              </button>
            </div>
            <img src={downloadImageUrl} alt="Preview for saving" className={styles.downloadFallbackImg} />
          </div>
        )}
      </div>
    </div>
  );
}
