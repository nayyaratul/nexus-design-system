import { useState, useEffect, useRef } from 'react';
import BrandMobilePreview from './BrandMobilePreview.jsx';
import styles from './BrandAppPreviewSection.module.scss';

const DEFAULT_LOGO_URL = '/addon-icons/BP%20logo.png';

export default function BrandAppPreviewSection() {
  const [logoUrl, setLogoUrl] = useState(DEFAULT_LOGO_URL);
  const [theme, setTheme] = useState('light');
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
      </div>
    </div>
  );
}
