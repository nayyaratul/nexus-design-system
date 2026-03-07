import { useState, useCallback } from 'react';
import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from '../../atoms/Popover/Popover';
import { Input } from '../../atoms/Input/Input';
import { FormField } from '../../atoms/FormField/FormField';

const sty = {
  label: {
    fontSize: '11px',
    fontWeight: 500,
    color: 'var(--ink-3)',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    marginBottom: '12px',
  },
  btn: {
    fontSize: '13px',
    padding: '8px 16px',
    cursor: 'pointer',
    border: '1px solid var(--color-border-default)',
    borderRadius: 'var(--radius-100)',
    background: 'var(--color-bg-elevated)',
    color: 'var(--color-text-primary)',
    fontFamily: 'var(--sans)',
    fontWeight: 500,
  },
  demoArea: {
    background: 'var(--card-bg)',
    border: '1px solid var(--rule)',
    borderRadius: 'var(--radius)',
    padding: '32px 24px',
  },
};

function ThemeComparisonPopovers() {
  const [lightNode, setLightNode] = useState(null);
  const [darkNode, setDarkNode] = useState(null);
  const lightCb = useCallback((node) => setLightNode(node), []);
  const darkCb = useCallback((node) => setDarkNode(node), []);

  return (
    <div>
      <div style={sty.label}>Theme Comparison</div>
      <div className="theme-comparison">
        <div
          ref={lightCb}
          data-theme="light"
          style={{
            padding: '20px',
            background: 'var(--color-bg-primary)',
            borderRadius: '10px',
            border: '1px solid var(--color-border-default)',
            position: 'relative',
          }}
        >
          <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '16px', fontWeight: 500 }}>
            LIGHT
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <button style={sty.btn}>Open popover</button>
            </PopoverTrigger>
            {lightNode && (
              <PopoverContent container={lightNode}>
                <p style={{ margin: 0, fontSize: '14px', marginRight: '28px' }}>Popover in light theme</p>
              </PopoverContent>
            )}
          </Popover>
        </div>
        <div
          ref={darkCb}
          data-theme="dark"
          style={{
            padding: '20px',
            background: 'var(--color-bg-primary)',
            borderRadius: '10px',
            border: '1px solid var(--color-border-default)',
            position: 'relative',
          }}
        >
          <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '16px', fontWeight: 500 }}>
            DARK
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <button style={sty.btn}>Open popover</button>
            </PopoverTrigger>
            {darkNode && (
              <PopoverContent container={darkNode}>
                <p style={{ margin: 0, fontSize: '14px', marginRight: '28px' }}>Popover in dark theme</p>
              </PopoverContent>
            )}
          </Popover>
        </div>
      </div>
    </div>
  );
}

export function PopoverShowcase() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Default + Side placement combined */}
      <div>
        <div style={sty.label}>Placement</div>
        <div style={sty.demoArea}>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            {['top', 'right', 'bottom', 'left'].map((side) => (
              <Popover key={side}>
                <PopoverTrigger asChild>
                  <button style={sty.btn}>{side}</button>
                </PopoverTrigger>
                <PopoverContent side={side}>
                  <p style={{ margin: 0, fontSize: '14px', marginRight: '28px' }}>Popover on {side}</p>
                </PopoverContent>
              </Popover>
            ))}
          </div>
        </div>
      </div>

      {/* Without close button */}
      <div>
        <div style={sty.label}>Without Close Button</div>
        <div style={sty.demoArea}>
          <Popover>
            <PopoverTrigger asChild>
              <button style={sty.btn}>No close button</button>
            </PopoverTrigger>
            <PopoverContent showClose={false}>
              <p style={{ margin: 0, fontSize: '14px' }}>Click outside to dismiss this popover.</p>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Rich content */}
      <div>
        <div style={sty.label}>Rich Content</div>
        <div style={sty.demoArea}>
          <Popover>
            <PopoverTrigger asChild>
              <button style={sty.btn}>Settings</button>
            </PopoverTrigger>
            <PopoverContent style={{ width: '280px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ fontWeight: 600, fontSize: '14px' }}>Settings</div>
                <FormField label="Name" htmlFor="pop-name">
                  <Input size="sm" type="text" placeholder="Enter name" id="pop-name" />
                </FormField>
                <FormField label="Email" htmlFor="pop-email">
                  <Input size="sm" type="email" placeholder="Enter email" id="pop-email" />
                </FormField>
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', marginTop: '4px' }}>
                  <PopoverClose asChild>
                    <button style={{ ...sty.btn, background: 'transparent' }}>Cancel</button>
                  </PopoverClose>
                  <button style={{ ...sty.btn, border: 'none', background: 'var(--color-action-primary)', color: 'var(--color-text-on-action)' }}>Save</button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Theme Comparison */}
      <ThemeComparisonPopovers />
    </div>
  );
}
