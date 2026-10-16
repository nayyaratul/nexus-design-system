import { Code } from './Code';
import { figmaDesign } from '../../figma/figmaLinks';

export default {
  title: 'Atoms/Code',
  parameters: { design: figmaDesign('Atoms/Code') },
};

export const Inline = {
  render: () => (
    <p style={{ fontSize: '14px', color: 'var(--color-text-primary)', lineHeight: 1.6 }}>
      Use the <Code>useState</Code> hook to manage local state in a component.
    </p>
  ),
};

export const Block = {
  render: () => (
    <Code variant="block">
      {`const greeting = 'Hello, world!';\nconsole.log(greeting);`}
    </Code>
  ),
};

export const BlockWithCopy = {
  render: () => (
    <Code variant="block" copyable>
      {`import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}`}
    </Code>
  ),
};
