import { InputField } from '../../atoms/InputField/InputField';
import { Icon } from '../../atoms/Icon/Icon';

const sectionLabelStyle = {
  fontSize: 'var(--font-size-100)',
  fontWeight: 'var(--font-weight-semibold)',
  color: 'var(--color-text-tertiary)',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  marginBottom: 'var(--space-150)',
};

const labelStyle = {
  fontSize: 'var(--font-size-200)',
  color: 'var(--color-text-secondary)',
  fontWeight: 'var(--font-weight-medium)',
};

const blockStyle = {
  padding: 'var(--space-250)',
  background: 'var(--color-bg-theme-panel)',
  borderRadius: 'var(--radius-200)',
  borderWidth: 'var(--border-width-100)',
  borderStyle: 'solid',
  borderColor: 'var(--color-border-subtle)',
};

export function InputFieldShowcase() {
  return (
    <div
      className="input-field-showcase"
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-300)' }}
    >
      {/* Kinds */}
      <div style={blockStyle}>
        <div style={sectionLabelStyle}>Kinds</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)', maxWidth: 400 }}>
          <div>
            <InputField placeholder="Default (no icon)" />
          </div>
          <div>
            <InputField kind="search" placeholder="Search courses" />
            <div style={labelStyle}>Search</div>
          </div>
          <div>
            <InputField kind="date" placeholder="Start date" iconPosition="right" />
            <div style={labelStyle}>Date (calendar icon, right)</div>
          </div>
          <div>
            <InputField kind="time" placeholder="Start time" iconPosition="right" />
            <div style={labelStyle}>Time (clock icon, right)</div>
          </div>
          <div>
            <InputField kind="password" placeholder="Enter password" />
            <div style={labelStyle}>Password (visibility toggle)</div>
          </div>
        </div>
      </div>

      {/* Icon positions */}
      <div style={blockStyle}>
        <div style={sectionLabelStyle}>Icon positions</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)', maxWidth: 400 }}>
          <div>
            <InputField
              placeholder="Icon on the left"
              icon={<Icon name="Search" size="sm" aria-hidden />}
              iconPosition="left"
            />
            <div style={labelStyle}>Left icon (custom icon prop)</div>
          </div>
          <div>
            <InputField
              placeholder="Icon on the right"
              icon={<Icon name="Calendar" size="sm" aria-hidden />}
              iconPosition="right"
            />
            <div style={labelStyle}>Right icon (custom icon prop)</div>
          </div>
        </div>
      </div>

      {/* States */}
      <div style={blockStyle}>
        <div style={sectionLabelStyle}>States</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)', maxWidth: 400 }}>
          <InputField kind="search" placeholder="Default" />
          <InputField kind="search" placeholder="Error" error />
          <InputField kind="search" placeholder="Disabled" disabled />
        </div>
      </div>

      {/* Theme comparison */}
      <div>
        <div style={sectionLabelStyle}>Theme comparison</div>
        <div className="theme-comparison">
          <div
            data-theme="light"
            style={{
              padding: 'var(--space-250)',
              background: 'var(--color-bg-theme-panel)',
              borderRadius: 'var(--radius)',
              borderWidth: 'var(--border-width-100)',
              borderStyle: 'solid',
              borderColor: 'var(--color-border-default)',
            }}
          >
            <div
              style={{
                fontSize: 'var(--font-size-100)',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--space-150)',
                fontWeight: 'var(--font-weight-medium)',
              }}
            >
              LIGHT
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)', maxWidth: 400 }}>
              <InputField kind="search" placeholder="Search courses" />
              <InputField kind="password" placeholder="Enter password" />
            </div>
          </div>
          <div
            data-theme="dark"
            style={{
              padding: 'var(--space-250)',
              background: 'var(--color-bg-theme-panel)',
              borderRadius: 'var(--radius)',
              borderWidth: 'var(--border-width-100)',
              borderStyle: 'solid',
              borderColor: 'var(--color-border-default)',
            }}
          >
            <div
              style={{
                fontSize: 'var(--font-size-100)',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--space-150)',
                fontWeight: 'var(--font-weight-medium)',
              }}
            >
              DARK
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)', maxWidth: 400 }}>
              <InputField kind="search" placeholder="Search courses" />
              <InputField kind="password" placeholder="Enter password" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

