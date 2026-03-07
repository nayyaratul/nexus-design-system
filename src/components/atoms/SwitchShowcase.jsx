import { useState } from 'react';
import { Switch } from '../../atoms/Switch/Switch';

export function SwitchShowcase() {
  const [s1, setS1] = useState(false);
  const [s2, setS2] = useState(true);
  const [s3, setS3] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Sizes */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Sizes</div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Switch size="sm" defaultChecked />
            <span style={{ fontSize: '13px' }}>Small (28x16)</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Switch size="md" defaultChecked />
            <span style={{ fontSize: '13px' }}>Medium (36x20)</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Switch size="lg" defaultChecked />
            <span style={{ fontSize: '13px' }}>Large (44x24)</span>
          </div>
        </div>
      </div>

      {/* States */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>States</div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Switch defaultChecked={false} />
            <span style={{ fontSize: '13px' }}>Off</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Switch defaultChecked />
            <span style={{ fontSize: '13px' }}>On</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Switch disabled />
            <span style={{ fontSize: '13px', opacity: 0.48 }}>Disabled Off</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Switch defaultChecked disabled />
            <span style={{ fontSize: '13px', opacity: 0.48 }}>Disabled On</span>
          </div>
        </div>
      </div>

      {/* Interactive */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Interactive</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Switch checked={s1} onCheckedChange={setS1} id="notif" />
            <label htmlFor="notif" style={{ fontSize: '14px', cursor: 'pointer' }}>Push notifications</label>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Switch checked={s2} onCheckedChange={setS2} id="dark" />
            <label htmlFor="dark" style={{ fontSize: '14px', cursor: 'pointer' }}>Dark mode</label>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Switch checked={s3} onCheckedChange={setS3} id="auto" />
            <label htmlFor="auto" style={{ fontSize: '14px', cursor: 'pointer' }}>Auto-save</label>
          </div>
        </div>
      </div>

      {/* Dark theme preview */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Theme Comparison</div>
        <div className="theme-comparison">
          <div data-theme="light" style={{ padding: '20px', background: 'var(--color-bg-primary)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Switch size="sm" />
                <Switch size="sm" defaultChecked />
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Switch size="md" />
                <Switch size="md" defaultChecked />
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Switch size="lg" />
                <Switch size="lg" defaultChecked />
              </div>
            </div>
          </div>
          <div data-theme="dark" style={{ padding: '20px', background: 'var(--color-bg-primary)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Switch size="sm" />
                <Switch size="sm" defaultChecked />
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Switch size="md" />
                <Switch size="md" defaultChecked />
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Switch size="lg" />
                <Switch size="lg" defaultChecked />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
