import { useState, useEffect } from 'react';
import { StoryProgress } from '../../atoms/StoryProgress/StoryProgress';

const sectionLabel = {
  fontSize: 'var(--font-size-200)',
  fontWeight: 'var(--font-weight-medium)',
  color: 'var(--ink-3)',
  letterSpacing: 'var(--letter-spacing-wide)',
  textTransform: 'uppercase',
  marginBottom: 'var(--space-150)',
};

export function StoryProgressShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const segments = 5;

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => {
        const next = p + 0.05;
        if (next >= 1) {
          setActiveIndex((i) => (i + 1 >= segments ? 0 : i + 1));
          return 0;
        }
        return next;
      });
    }, 120);
    return () => clearInterval(id);
  }, [segments]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-400)' }}>
      <div>
        <div style={sectionLabel}>Default (5 segments, active 2, 40% fill)</div>
        <StoryProgress segments={5} activeIndex={1} progress={0.4} size="md" />
      </div>

      <div>
        <div style={sectionLabel}>Sizes</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-200)' }}>
          <StoryProgress segments={5} activeIndex={1} progress={0.4} size="xs" />
          <StoryProgress segments={5} activeIndex={1} progress={0.4} size="sm" />
          <StoryProgress segments={5} activeIndex={1} progress={0.4} size="md" />
          <StoryProgress segments={5} activeIndex={1} progress={0.4} size="lg" />
        </div>
      </div>

      <div>
        <div style={sectionLabel}>Subtle (Instagram-style)</div>
        <div style={{ background: 'var(--grey-90)', padding: 'var(--space-200)', borderRadius: 'var(--radius-150)' }}>
          <StoryProgress segments={5} activeIndex={1} progress={0.4} variant="subtle" size="xs" />
          <p style={{ fontSize: 'var(--font-size-200)', color: 'var(--ink-2)', marginTop: 'var(--space-150)' }}>
            Live on dark: use variant="subtle" with size="xs" (2px) for reels/stories overlays.
          </p>
          <div style={{ marginTop: 'var(--space-150)' }}>
            <StoryProgress
              segments={segments}
              activeIndex={activeIndex}
              progress={progress}
              variant="subtle"
              size="xs"
            />
          </div>
        </div>
      </div>

      <div>
        <div style={sectionLabel}>First segment (20% fill)</div>
        <StoryProgress segments={5} activeIndex={0} progress={0.2} size="md" />
      </div>

      <div>
        <div style={sectionLabel}>Last segment (complete)</div>
        <StoryProgress segments={5} activeIndex={4} progress={1} size="md" />
      </div>

      <div>
        <div style={sectionLabel}>Many segments (8)</div>
        <StoryProgress segments={8} activeIndex={3} progress={0.6} size="md" />
      </div>

      <div>
        <div style={sectionLabel}>Live demo (auto-advancing)</div>
        <p style={{ fontSize: 'var(--font-size-200)', color: 'var(--ink-2)', marginBottom: 'var(--space-100)' }}>
          Fill animates within the active segment; parent controls timing. No internal interval in the atom.
        </p>
        <StoryProgress
          segments={segments}
          activeIndex={activeIndex}
          progress={progress}
          size="lg"
        />
      </div>
    </div>
  );
}
