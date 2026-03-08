import { useState, useCallback } from 'react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '../../atoms/Tooltip/Tooltip';

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

function ThemeComparisonTooltips() {
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
            background: 'var(--color-bg-theme-panel)',
            borderRadius: '10px',
            border: '1px solid var(--color-border-default)',
            position: 'relative',
          }}
        >
          <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '16px', fontWeight: 500 }}>LIGHT</div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button style={sty.btn}>Hover me</button>
              </TooltipTrigger>
              {lightNode && <TooltipContent container={lightNode}>Dark tooltip on light</TooltipContent>}
            </Tooltip>
          </div>
        </div>
        <div
          ref={darkCb}
          data-theme="dark"
          style={{
            padding: '20px',
            background: 'var(--color-bg-theme-panel)',
            borderRadius: '10px',
            border: '1px solid var(--color-border-default)',
            position: 'relative',
          }}
        >
          <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '16px', fontWeight: 500 }}>DARK</div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button style={sty.btn}>Hover me</button>
              </TooltipTrigger>
              {darkNode && <TooltipContent container={darkNode}>Light tooltip on dark</TooltipContent>}
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TooltipShowcase() {
  return (
    <TooltipProvider delayDuration={200}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* Placement */}
        <div>
          <div style={sty.label}>Placement</div>
          <div style={sty.demoArea}>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              {['top', 'right', 'bottom', 'left'].map((side) => (
                <Tooltip key={side}>
                  <TooltipTrigger asChild>
                    <button style={sty.btn}>{side}</button>
                  </TooltipTrigger>
                  <TooltipContent side={side}>Tooltip on {side}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>

        {/* Content length */}
        <div>
          <div style={sty.label}>Content Length</div>
          <div style={sty.demoArea}>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button style={sty.btn}>Short</button>
                </TooltipTrigger>
                <TooltipContent>Save file</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button style={sty.btn}>Medium</button>
                </TooltipTrigger>
                <TooltipContent>Click to save your current progress</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button style={sty.btn}>Long</button>
                </TooltipTrigger>
                <TooltipContent>This tooltip has a longer description that wraps to demonstrate the max-width constraint of 240px.</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* Theme Comparison */}
        <ThemeComparisonTooltips />
      </div>
    </TooltipProvider>
  );
}
