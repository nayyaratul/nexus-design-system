import { Popover, PopoverTrigger, PopoverContent } from './Popover';
import { figmaDesign } from '../../figma/figmaLinks';

export default {
  title: 'Atoms/Popover',
  parameters: { design: figmaDesign('Atoms/Popover') },
};

const btnStyle = { padding: '8px 16px', border: '1px solid var(--color-border-default)', borderRadius: '6px', background: 'var(--color-bg-primary)', color: 'var(--color-text-primary)', cursor: 'pointer', fontSize: '13px' };

export const Default = {
  render: () => (
    <div style={{ padding: '80px', display: 'flex', justifyContent: 'center' }}>
      <Popover>
        <PopoverTrigger asChild>
          <button style={btnStyle}>Open popover</button>
        </PopoverTrigger>
        <PopoverContent>
          <p style={{ margin: 0, fontSize: '14px' }}>This is a popover content panel.</p>
        </PopoverContent>
      </Popover>
    </div>
  ),
};

export const Sides = {
  render: () => (
    <div style={{ padding: '120px', display: 'flex', gap: '16px', justifyContent: 'center' }}>
      {['top', 'right', 'bottom', 'left'].map((side) => (
        <Popover key={side}>
          <PopoverTrigger asChild>
            <button style={{ ...btnStyle, textTransform: 'capitalize' }}>{side}</button>
          </PopoverTrigger>
          <PopoverContent side={side}>
            <p style={{ margin: 0, fontSize: '14px' }}>Popover on {side}</p>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  ),
};

export const WithoutClose = {
  render: () => (
    <div style={{ padding: '80px', display: 'flex', justifyContent: 'center' }}>
      <Popover>
        <PopoverTrigger asChild>
          <button style={btnStyle}>No close button</button>
        </PopoverTrigger>
        <PopoverContent showClose={false}>
          <p style={{ margin: 0, fontSize: '14px' }}>Click outside to dismiss.</p>
        </PopoverContent>
      </Popover>
    </div>
  ),
};

export const RichContent = {
  render: () => (
    <div style={{ padding: '80px', display: 'flex', justifyContent: 'center' }}>
      <Popover>
        <PopoverTrigger asChild>
          <button style={btnStyle}>Settings</button>
        </PopoverTrigger>
        <PopoverContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ fontWeight: 500, fontSize: '14px' }}>Settings</div>
            <label style={{ fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              Name
              <input type="text" placeholder="Enter name" style={{ padding: '6px 8px', border: '1px solid var(--color-border-default)', borderRadius: '4px', fontSize: '13px' }} />
            </label>
            <label style={{ fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              Email
              <input type="email" placeholder="Enter email" style={{ padding: '6px 8px', border: '1px solid var(--color-border-default)', borderRadius: '4px', fontSize: '13px' }} />
            </label>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  ),
};
