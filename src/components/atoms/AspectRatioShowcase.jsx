import { useState } from 'react';
import { AspectRatio } from '../../atoms/AspectRatio/AspectRatio';

const ratios = [
  { label: '1 : 1',   value: 1,      use: 'Profile avatars, thumbnails, album art',    img: 'https://picsum.photos/seed/nexus-sq/400/400' },
  { label: '4 : 3',   value: 4 / 3,  use: 'Classic photography, cards, previews',      img: 'https://picsum.photos/seed/nexus-43/400/300' },
  { label: '3 : 2',   value: 3 / 2,  use: '35mm film, DSLR default, print layouts',    img: 'https://picsum.photos/seed/nexus-32/600/400' },
  { label: '16 : 9',  value: 16 / 9, use: 'Video, hero banners, widescreen content',   img: 'https://picsum.photos/seed/nexus-16/800/450' },
  { label: '21 : 9',  value: 21 / 9, use: 'Cinematic, ultra-wide hero, film strips',   img: 'https://picsum.photos/seed/nexus-21/840/360' },
  { label: '9 : 16',  value: 9 / 16, use: 'Mobile stories, reels, portrait cards',     img: 'https://picsum.photos/seed/nexus-916/360/640' },
];

const sty = {
  sectionLabel: {
    fontSize: '11px',
    fontWeight: 500,
    color: 'var(--ink-3)',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    marginBottom: '12px',
  },
};

function RatioCard({ label, value, use, img, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        all: 'unset',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        padding: '10px',
        borderRadius: '8px',
        background: isActive ? 'var(--color-action-primary)' : 'transparent',
        border: isActive ? '1px solid var(--color-action-primary)' : '1px solid var(--rule)',
        transition: 'all 0.15s ease',
        minWidth: 0,
        flex: '1 1 0',
      }}
    >
      <span style={{
        fontFamily: 'var(--mono)',
        fontSize: '13px',
        fontWeight: 600,
        color: isActive ? 'var(--color-text-on-action)' : 'var(--ink)',
        letterSpacing: '-0.02em',
      }}>
        {label}
      </span>
      <span style={{
        fontSize: '11px',
        color: isActive ? 'rgba(255,255,255,0.7)' : 'var(--ink-3)',
        lineHeight: 1.3,
      }}>
        {use}
      </span>
    </button>
  );
}

export function AspectRatioShowcase() {
  const [active, setActive] = useState(1);

  const current = ratios[active];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Interactive ratio explorer */}
      <div>
        <div style={sty.sectionLabel}>Select a Ratio</div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '8px',
          marginBottom: '20px',
        }}>
          {ratios.map((r, i) => (
            <RatioCard
              key={r.label}
              {...r}
              isActive={i === active}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

        {/* Live preview */}
        <div style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--rule)',
          borderRadius: 'var(--radius)',
          padding: '24px',
          position: 'relative',
        }}>
          {/* Ratio badge */}
          <div style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            fontFamily: 'var(--mono)',
            fontSize: '12px',
            fontWeight: 500,
            color: 'var(--ink-3)',
            background: 'var(--page-bg)',
            border: '1px solid var(--rule)',
            borderRadius: '6px',
            padding: '3px 10px',
            zIndex: 2,
          }}>
            ratio={'{'}
            <span style={{ color: 'var(--color-action-primary)' }}>
              {current.value === 1 ? '1' : current.label.replace(/\s/g, '').replace(':', ' / ')}
            </span>
            {'}'}
          </div>

          <div style={{
            maxWidth: current.value >= 2 ? '100%' : current.value >= 1 ? 380 : current.value >= 0.75 ? 280 : 180,
            transition: 'max-width 0.3s ease',
            margin: '0 auto',
          }}>
            <AspectRatio ratio={current.value}>
              <img
                src={current.img}
                alt={`${current.label} example`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-100)',
                }}
              />
            </AspectRatio>
          </div>

          {/* Dimension annotation */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            marginTop: '12px',
            fontSize: '11px',
            color: 'var(--ink-3)',
            fontFamily: 'var(--mono)',
          }}>
            <span>width → 100%</span>
            <span style={{ color: 'var(--rule)' }}>·</span>
            <span>height → auto ({current.label})</span>
          </div>
        </div>
      </div>

      {/* All ratios at a glance — proportional comparison */}
      <div>
        <div style={sty.sectionLabel}>Proportional Comparison</div>
        <div style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'flex-end',
          background: 'var(--card-bg)',
          border: '1px solid var(--rule)',
          borderRadius: 'var(--radius)',
          padding: '24px',
        }}>
          {ratios.filter(r => r.value >= 0.5).map((r) => (
            <div key={r.label} style={{ flex: r.value >= 2 ? 2 : 1, minWidth: 0 }}>
              <AspectRatio ratio={r.value}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: `linear-gradient(135deg, var(--color-action-primary), var(--brand-30))`,
                  borderRadius: 'var(--radius-100)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <span style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: 'var(--white)',
                    textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                  }}>
                    {r.label}
                  </span>
                </div>
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>

      {/* Real-world composition */}
      <div>
        <div style={sty.sectionLabel}>Real-World Composition</div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateRows: 'auto auto',
          gap: '8px',
        }}>
          {/* Hero banner — 21:9 spanning full width */}
          <div style={{ gridColumn: '1 / -1' }}>
            <AspectRatio ratio={21 / 9}>
              <div style={{
                width: '100%', height: '100%',
                backgroundImage: 'url(https://picsum.photos/seed/nexus-hero/1200/514)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 'var(--radius-100)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '20px',
              }}>
                <span style={{
                  fontSize: '11px',
                  fontFamily: 'var(--mono)',
                  color: 'var(--white)',
                  background: 'rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(8px)',
                  padding: '4px 10px',
                  borderRadius: '4px',
                }}>
                  21 : 9 — Hero banner
                </span>
              </div>
            </AspectRatio>
          </div>

          {/* Three 4:3 cards */}
          {[1, 2, 3].map((i) => (
            <div key={i}>
              <AspectRatio ratio={4 / 3}>
                <div style={{
                  width: '100%', height: '100%',
                  backgroundImage: `url(https://picsum.photos/seed/nexus-card${i}/400/300)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: 'var(--radius-100)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '12px',
                }}>
                  <span style={{
                    fontSize: '10px',
                    fontFamily: 'var(--mono)',
                    color: 'var(--white)',
                    background: 'rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(8px)',
                    padding: '3px 8px',
                    borderRadius: '4px',
                  }}>
                    4 : 3
                  </span>
                </div>
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>

      {/* Theme Comparison */}
      <div>
        <div style={sty.sectionLabel}>Theme Comparison</div>
        <div className="theme-comparison">
          {['light', 'dark'].map((theme) => (
            <div
              key={theme}
              data-theme={theme}
              style={{
                padding: '20px',
                background: 'var(--color-bg-theme-panel)',
                borderRadius: '10px',
                border: '1px solid var(--color-border-default)',
              }}
            >
              <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>
                {theme.toUpperCase()}
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end' }}>
                {[
                  { label: '1:1', r: 1 },
                  { label: '4:3', r: 4/3 },
                  { label: '16:9', r: 16/9 },
                ].map(({ label, r }) => (
                  <div key={label} style={{ flex: 1, minWidth: 0 }}>
                    <AspectRatio ratio={r}>
                      <div style={{
                        width: '100%',
                        height: '100%',
                        background: 'var(--color-bg-tertiary)',
                        borderRadius: 'var(--radius-100)',
                        border: '1px solid var(--color-border-default)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        <span style={{
                          fontFamily: 'var(--mono)',
                          fontSize: '11px',
                          fontWeight: 600,
                          color: 'var(--color-text-secondary)',
                        }}>
                          {label}
                        </span>
                      </div>
                    </AspectRatio>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
