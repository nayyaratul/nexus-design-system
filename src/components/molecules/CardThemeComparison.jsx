import { Card } from '../../molecules/Card/Card';
import { Button } from '../../atoms/Button/Button';

const titleStyle = { fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' };
const panelStyle = { padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' };
const labelStyle = { fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 };

export function CardThemeComparison() {
  return (
    <div>
      <div style={titleStyle}>Theme Comparison</div>
      <div className="theme-comparison">
        <div data-theme="light" style={panelStyle}>
          <div style={labelStyle}>LIGHT</div>
          <Card interactive>
            <Card.Header>
              <Card.Eyebrow>Overview</Card.Eyebrow>
              <Card.Title>Learning analytics</Card.Title>
              <Card.Subtitle>Card surface, border, and hover tokens in this theme.</Card.Subtitle>
            </Card.Header>
            <Card.Footer align="start">
              <Button size="sm">Open report</Button>
            </Card.Footer>
          </Card>
        </div>
        <div data-theme="dark" style={panelStyle}>
          <div style={labelStyle}>DARK</div>
          <Card interactive>
            <Card.Header>
              <Card.Eyebrow>Overview</Card.Eyebrow>
              <Card.Title>Learning analytics</Card.Title>
              <Card.Subtitle>Card surface, border, and hover tokens in this theme.</Card.Subtitle>
            </Card.Header>
            <Card.Footer align="start">
              <Button size="sm">Open report</Button>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );
}
