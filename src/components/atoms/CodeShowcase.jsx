import { Code } from '../../atoms/Code/Code';

export function CodeShowcase() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Inline */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Inline Code</div>
        <p style={{ fontSize: '14px', lineHeight: 1.6, maxWidth: '560px' }}>
          Use the <Code>useState</Code> hook to manage local state. Import it from <Code>react</Code> and
          call <Code>setCount(c =&gt; c + 1)</Code> to update the value. The <Code>useEffect</Code> hook
          handles side effects.
        </p>
      </div>

      {/* Block */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Block Code</div>
        <Code variant="block">
          {`const greeting = 'Hello, world!';\nconsole.log(greeting);`}
        </Code>
      </div>

      {/* Block with copy */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Block with Copy Button</div>
        <Code variant="block" copyable>
          {`import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}`}
        </Code>
      </div>

      {/* Theme Comparison */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Theme Comparison</div>
        <div className="theme-comparison">
          <div data-theme="light" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
            <p style={{ fontSize: '13px', color: 'var(--color-text-primary)', lineHeight: 1.6, marginBottom: '12px' }}>
              Inline: <Code>npm install</Code>
            </p>
            <Code variant="block">
              {`const x = 42;\nconsole.log(x);`}
            </Code>
          </div>
          <div data-theme="dark" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
            <p style={{ fontSize: '13px', color: 'var(--color-text-primary)', lineHeight: 1.6, marginBottom: '12px' }}>
              Inline: <Code>npm install</Code>
            </p>
            <Code variant="block">
              {`const x = 42;\nconsole.log(x);`}
            </Code>
          </div>
        </div>
      </div>
    </div>
  );
}
