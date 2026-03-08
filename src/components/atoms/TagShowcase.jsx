import { useState } from 'react';
import { Tag } from '../../atoms/Tag/Tag';
import { Star, Zap, Heart, Hash } from 'lucide-react';

export function TagShowcase() {
  const [tags, setTags] = useState(['React', 'TypeScript', 'Radix', 'Tailwind']);

  const removeTag = (tag) => setTags((prev) => prev.filter((t) => t !== tag));
  const resetTags = () => setTags(['React', 'TypeScript', 'Radix', 'Tailwind']);

  const sectionLabelStyle = {
    fontSize: 'var(--font-size-200)',
    fontWeight: 'var(--font-weight-medium)',
    color: 'var(--color-text-tertiary)',
    letterSpacing: 'var(--letter-spacing-wide)',
    textTransform: 'uppercase',
    marginBottom: 'var(--space-150)',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-400)' }}>
      {/* Variants */}
      <div>
        <div style={sectionLabelStyle}>Variants</div>
        <div style={{ display: 'flex', gap: 'var(--space-100)', flexWrap: 'wrap' }}>
          <Tag variant="default">Default</Tag>
          <Tag variant="info">Info</Tag>
          <Tag variant="success">Success</Tag>
          <Tag variant="warning">Warning</Tag>
          <Tag variant="error">Error</Tag>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <div style={sectionLabelStyle}>Sizes</div>
        <div style={{ display: 'flex', gap: 'var(--space-100)', alignItems: 'center' }}>
          <Tag size="sm" variant="info">Small (24px)</Tag>
          <Tag size="md" variant="info">Medium (28px)</Tag>
        </div>
      </div>

      {/* With icons */}
      <div>
        <div style={sectionLabelStyle}>With Icons</div>
        <div style={{ display: 'flex', gap: 'var(--space-100)', flexWrap: 'wrap' }}>
          <Tag icon={<Star size={12} />} variant="warning">Featured</Tag>
          <Tag icon={<Zap size={12} />} variant="info">Fast</Tag>
          <Tag icon={<Heart size={12} />} variant="error">Favourite</Tag>
          <Tag icon={<Hash size={12} />} variant="default">Topic</Tag>
        </div>
      </div>

      {/* Dismissible */}
      <div>
        <div style={sectionLabelStyle}>Dismissible</div>
        <div style={{ display: 'flex', gap: 'var(--space-100)', flexWrap: 'wrap', alignItems: 'center' }}>
          {tags.map((tag) => (
            <Tag key={tag} dismissible variant="info" onDismiss={() => removeTag(tag)}>
              {tag}
            </Tag>
          ))}
          {tags.length < 4 && (
            <button
              onClick={resetTags}
              style={{
                fontSize: 'var(--font-size-200)',
                padding: 'var(--space-050) var(--space-125)',
                cursor: 'pointer',
                border: 'var(--border-width-100) solid var(--color-border-default)',
                borderRadius: 'var(--radius-100)',
                background: 'var(--color-bg-elevated)',
                color: 'inherit',
                fontFamily: 'var(--sans)',
              }}
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Theme comparison */}
      <div>
        <div style={sectionLabelStyle}>Theme Comparison</div>
        <div className="theme-comparison">
          <div
            data-theme="light"
            style={{
              padding: 'var(--space-250)',
              background: 'var(--color-bg-theme-panel)',
              borderRadius: 'var(--radius-150)',
              border: 'var(--border-width-100) solid var(--color-border-default)',
            }}
          >
            <div style={{ fontSize: 'var(--font-size-100)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-150)', fontWeight: 'var(--font-weight-medium)' }}>LIGHT</div>
            <div style={{ display: 'flex', gap: 'var(--space-100)', flexWrap: 'wrap' }}>
              <Tag variant="default">Default</Tag>
              <Tag variant="info">Info</Tag>
              <Tag variant="success">Success</Tag>
              <Tag variant="warning">Warning</Tag>
              <Tag variant="error">Error</Tag>
            </div>
          </div>
          <div
            data-theme="dark"
            style={{
              padding: 'var(--space-250)',
              background: 'var(--color-bg-theme-panel)',
              borderRadius: 'var(--radius-150)',
              border: 'var(--border-width-100) solid var(--color-border-default)',
            }}
          >
            <div style={{ fontSize: 'var(--font-size-100)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-150)', fontWeight: 'var(--font-weight-medium)' }}>DARK</div>
            <div style={{ display: 'flex', gap: 'var(--space-100)', flexWrap: 'wrap' }}>
              <Tag variant="default">Default</Tag>
              <Tag variant="info">Info</Tag>
              <Tag variant="success">Success</Tag>
              <Tag variant="warning">Warning</Tag>
              <Tag variant="error">Error</Tag>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
