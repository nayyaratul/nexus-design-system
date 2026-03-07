import { useState } from 'react';
import { Tag } from '../../atoms/Tag/Tag';
import { Star, Zap, Heart, Hash } from 'lucide-react';

export function TagShowcase() {
  const [tags, setTags] = useState(['React', 'TypeScript', 'Radix', 'Tailwind']);

  const removeTag = (tag) => setTags((prev) => prev.filter((t) => t !== tag));
  const resetTags = () => setTags(['React', 'TypeScript', 'Radix', 'Tailwind']);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Variants */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Variants</div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Tag variant="default">Default</Tag>
          <Tag variant="info">Info</Tag>
          <Tag variant="success">Success</Tag>
          <Tag variant="warning">Warning</Tag>
          <Tag variant="error">Error</Tag>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Sizes</div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Tag size="sm" variant="info">Small (24px)</Tag>
          <Tag size="md" variant="info">Medium (28px)</Tag>
        </div>
      </div>

      {/* With icons */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>With Icons</div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Tag icon={<Star size={12} />} variant="warning">Featured</Tag>
          <Tag icon={<Zap size={12} />} variant="info">Fast</Tag>
          <Tag icon={<Heart size={12} />} variant="error">Favourite</Tag>
          <Tag icon={<Hash size={12} />} variant="default">Topic</Tag>
        </div>
      </div>

      {/* Dismissible */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Dismissible</div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          {tags.map((tag) => (
            <Tag key={tag} dismissible variant="info" onDismiss={() => removeTag(tag)}>
              {tag}
            </Tag>
          ))}
          {tags.length < 4 && (
            <button
              onClick={resetTags}
              style={{ fontSize: '12px', padding: '4px 10px', cursor: 'pointer', border: '1px solid var(--rule)', borderRadius: '6px', background: 'var(--card-bg)', color: 'inherit' }}
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Dark theme preview */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Theme Comparison</div>
        <div className="theme-comparison">
          <div data-theme="light" style={{ padding: '20px', background: 'var(--color-bg-primary)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Tag variant="default">Default</Tag>
              <Tag variant="info">Info</Tag>
              <Tag variant="success">Success</Tag>
              <Tag variant="warning">Warning</Tag>
              <Tag variant="error">Error</Tag>
            </div>
          </div>
          <div data-theme="dark" style={{ padding: '20px', background: 'var(--color-bg-primary)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
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
