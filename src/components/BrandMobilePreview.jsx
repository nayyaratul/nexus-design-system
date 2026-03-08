import { useState, useEffect } from 'react';
import {
  Badge,
  Icon,
  Link,
  Text,
  ToggleGroup,
  ToggleGroupItem,
} from '../atoms/index.js';
import cx from 'classnames';
import styles from './BrandMobilePreview.module.scss';

const COURSE_IMAGE_1 = '/addon-icons/banner_1.png';
const COURSE_IMAGE_2 = '/addon-icons/banner_2.png';
const COURSE_IMAGE_3 = '/addon-icons/banner_3.png';
// Use same-origin image so html2canvas export is not tainted (external URLs produce 0 KB downloads)
const CAROUSEL_IMAGE = '/addon-icons/banner_1.png';

const LOGO_HEIGHT = 40;
const LOGO_MIN_WIDTH = 40;
const LOGO_MAX_WIDTH = 80;

const GAME_COIN_ICON = '/addon-icons/game-coin.png';

export default function BrandMobilePreview({ logoUrl = null }) {
  const [logoContainerWidth, setLogoContainerWidth] = useState(null);

  useEffect(() => {
    if (!logoUrl) setLogoContainerWidth(null);
  }, [logoUrl]);

  function handleLogoLoad(e) {
    const { naturalWidth: w, naturalHeight: h } = e.target;
    if (!h) return;
    const aspectRatio = w / h;
    const width =
      aspectRatio >= 1
        ? Math.min(LOGO_MAX_WIDTH, Math.round(LOGO_HEIGHT * aspectRatio))
        : LOGO_MIN_WIDTH;
    setLogoContainerWidth(width);
  }

  return (
    <div className={styles.frame} role="img" aria-label="Mobile app preview with brand colour">
      <div className={styles.screen}>
        <div className={styles.scrollArea}>
          {/* Status bar */}
          <header className={styles.statusBar}>
            <span className={styles.statusTime}>9:41</span>
            <div className={styles.statusIcons}>
              <Icon name="Signal" size="sm" aria-label="Signal" />
              <Icon name="Wifi" size="sm" aria-label="Wi‑Fi" />
              <Icon name="Battery" size="sm" aria-label="Battery" />
            </div>
          </header>

          {/* Brand header */}
          <div className={styles.header}>
            <div className={styles.headerRow}>
              <div className={styles.headerGreeting}>
                <div
                  className={styles.headerLogo}
                  style={
                    logoContainerWidth != null
                      ? { width: `${logoContainerWidth}px` }
                      : undefined
                  }
                >
                  {logoUrl && (
                    <img
                      src={logoUrl}
                      alt="Brand logo"
                      className={styles.headerLogoImg}
                      onLoad={handleLogoLoad}
                    />
                  )}
                </div>
                <span className={styles.headerGreetingText}>Hi Abhishek!</span>
              </div>
              <div className={styles.headerActions}>
                <button
                  type="button"
                  className={styles.quickActionBtn}
                  aria-label="Help"
                >
                  <Icon name="CircleQuestionMark" size="md" className={styles.quickActionIcon} />
                </button>
                <button
                  type="button"
                  className={styles.quickActionBtn}
                  aria-label="Notifications"
                >
                  <Icon name="Bell" size="md" className={styles.quickActionIcon} />
                </button>
              </div>
            </div>
            <div className={styles.quickActions}>
              <div className={styles.quickActionItem}>
                <button type="button" className={styles.quickActionBtn} aria-label="Course">
                  <Icon name="BookOpenText" size="lg" className={styles.quickActionIcon} />
                </button>
                <span className={styles.quickActionLabel}>Course</span>
              </div>
              <div className={styles.quickActionItem}>
                <button type="button" className={styles.quickActionBtn} aria-label="Assessment">
                  <Icon name="ClipboardPenLine" size="lg" className={styles.quickActionIcon} />
                </button>
                <span className={styles.quickActionLabel}>Assessment</span>
              </div>
              <div className={styles.quickActionItem}>
                <button type="button" className={styles.quickActionBtn} aria-label="Playlist">
                  <Icon name="TvMinimalPlay" size="lg" className={styles.quickActionIcon} />
                </button>
                <span className={styles.quickActionLabel}>Playlist</span>
              </div>
              <div className={styles.quickActionItem}>
                <button type="button" className={styles.quickActionBtn} aria-label="More">
                  <Icon name="EllipsisVertical" size="lg" className={styles.quickActionIcon} />
                </button>
                <span className={styles.quickActionLabel}>More</span>
              </div>
            </div>
          </div>

          {/* Main content */}
          <main className={styles.content}>
            {/* Carousel */}
            <section className={styles.carousel}>
              <div className={styles.carouselCard}>
                <img
                  src={CAROUSEL_IMAGE}
                  alt=""
                  className={styles.carouselImage}
                  crossOrigin="anonymous"
                />
                <div className={styles.carouselBadge}>
                  <Badge variant="error" size="sm">
                    New Feed
                  </Badge>
                </div>
                <div className={styles.carouselOverlay}>
                  <span className={styles.carouselTitle}>TOWN HALL MEETING</span>
                  <span className={styles.carouselSub}>OCTOBER 26TH, 6:30 PM</span>
                  <span className={styles.carouselMeta}>COMMUNITY CENTER · YOUR VOICE MATTERS</span>
                </div>
              </div>
              <div className={styles.carouselDots}>
                <span className={cx(styles.carouselDot, styles.carouselDotActive)} aria-hidden />
                <span className={styles.carouselDot} aria-hidden />
                <span className={styles.carouselDot} aria-hidden />
                <span className={styles.carouselDot} aria-hidden />
                <span className={styles.carouselDot} aria-hidden />
              </div>
            </section>

            {/* Filter pills */}
            <section className={styles.filters}>
              <ToggleGroup
                type="single"
                defaultValue="all"
                size="sm"
                variant="pill"
                aria-label="Filter content"
              >
                <ToggleGroupItem value="all">All</ToggleGroupItem>
                <ToggleGroupItem value="courses">Courses</ToggleGroupItem>
                <ToggleGroupItem value="assessments">Assessments</ToggleGroupItem>
                <ToggleGroupItem value="playlist">Playlist</ToggleGroupItem>
                <ToggleGroupItem value="live">Live Class</ToggleGroupItem>
              </ToggleGroup>
            </section>

            {/* Courses */}
            <section className={styles.coursesSection}>
              <div className={styles.coursesHead}>
                <div className={styles.coursesTitle}>
                  <Icon name="BookOpen" size="sm" aria-hidden />
                  <span>Courses</span>
                </div>
                <Link href="#">View all</Link>
              </div>
              <div className={styles.courseCards}>
                <article className={styles.courseCard}>
                  <div className={styles.courseCardThumb}>
                    <img src={COURSE_IMAGE_1} alt="" crossOrigin="anonymous" />
                    <div className={styles.courseCardPlay}>
                      <Icon name="Play" size="lg" aria-hidden />
                    </div>
                    <div className={styles.courseCardBadge}>
                      <span className={styles.courseCardScore}>
                        <img src={GAME_COIN_ICON} alt="" width={16} height={16} className={styles.courseCardScoreIcon} />
                        100
                      </span>
                    </div>
                  </div>
                  <div className={styles.courseCardMeta}>
                    <div className={styles.courseCardMetaRow}>
                      <span className={styles.courseCardChapters}>3 Chapters · 30:45 min</span>
                      <Badge variant="error" size="sm">
                        Mandatory
                      </Badge>
                    </div>
                    <h3 className={styles.courseCardTitle}>POSH & Workplace Conduct Training</h3>
                    <p className={styles.courseCardTopics}>Workplace Ethics • POSH</p>
                  </div>
                </article>
                <article className={styles.courseCard}>
                  <div className={styles.courseCardThumb}>
                    <img src={COURSE_IMAGE_2} alt="" crossOrigin="anonymous" />
                    <div className={styles.courseCardPlay}>
                      <Icon name="Play" size="lg" aria-hidden />
                    </div>
                    <div className={styles.courseCardBadge}>
                      <span className={styles.courseCardScore}>
                        <img src={GAME_COIN_ICON} alt="" width={16} height={16} className={styles.courseCardScoreIcon} />
                        100
                      </span>
                    </div>
                  </div>
                  <div className={styles.courseCardMeta}>
                    <div className={styles.courseCardMetaRow}>
                      <span className={styles.courseCardChapters}>4 Chapters · 40:35 min</span>
                      <Badge variant="error" size="sm">
                        Mandatory
                      </Badge>
                    </div>
                    <h3 className={styles.courseCardTitle}>Leadership Essentials for Managers</h3>
                    <p className={styles.courseCardTopics}>Decision Making, Team Growth</p>
                  </div>
                </article>
                <article className={styles.courseCard}>
                  <div className={styles.courseCardThumb}>
                    <img src={COURSE_IMAGE_3} alt="" crossOrigin="anonymous" />
                    <div className={styles.courseCardPlay}>
                      <Icon name="Play" size="lg" aria-hidden />
                    </div>
                    <div className={styles.courseCardBadge}>
                      <span className={styles.courseCardScore}>
                        <img src={GAME_COIN_ICON} alt="" width={16} height={16} className={styles.courseCardScoreIcon} />
                        80
                      </span>
                    </div>
                  </div>
                  <div className={styles.courseCardMeta}>
                    <div className={styles.courseCardMetaRow}>
                      <span className={styles.courseCardChapters}>2 Chapters · 18:20 min</span>
                    </div>
                    <h3 className={styles.courseCardTitle}>Productivity & Time Management</h3>
                    <p className={styles.courseCardTopics}>Focus • Work Habits</p>
                  </div>
                </article>
              </div>
            </section>
          </main>
        </div>

        {/* Bottom nav */}
        <nav className={styles.bottomNav} aria-label="Primary navigation">
          <button type="button" className={cx(styles.navItem, styles.navItemActive)} aria-current="page">
            <Icon name="House" size="md" className={styles.navItemIcon} aria-hidden />
            Home
          </button>
          <button type="button" className={styles.navItem}>
            <Icon name="Newspaper" size="md" className={styles.navItemIcon} aria-hidden />
            Updates
          </button>
          <button type="button" className={styles.navItem}>
            <Icon name="BookOpen" size="md" className={styles.navItemIcon} aria-hidden />
            Learn
          </button>
          <button type="button" className={styles.navItem}>
            <Icon name="MessageCircle" size="md" className={styles.navItemIcon} aria-hidden />
            Chat
          </button>
          <button type="button" className={styles.navItem}>
            <Icon name="User" size="md" className={styles.navItemIcon} aria-hidden />
            Profile
          </button>
        </nav>
      </div>
    </div>
  );
}
