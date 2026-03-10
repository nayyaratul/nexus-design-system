import { FormField } from '../../atoms/FormField/FormField';
import { Input } from '../../atoms/Input/Input';
import { InputField } from '../../atoms/InputField/InputField';
import { Textarea } from '../../atoms/Textarea/Textarea';
import { Select, SelectTrigger, SelectContent, SelectItem } from '../../atoms/Select/Select';
import { Checkbox } from '../../atoms/Checkbox/Checkbox';

export function FormFieldShowcase() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Basic with hint */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>With Hint</div>
        <div style={{ maxWidth: 360 }}>
          <FormField label="Email address" htmlFor="email" hint="We'll never share your email">
            <Input id="email" type="email" placeholder="you@example.com" />
          </FormField>
        </div>
      </div>

      {/* Required with error */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Required + Error</div>
        <div style={{ maxWidth: 360 }}>
          <FormField label="Password" htmlFor="pass" required error="Password must be at least 8 characters">
            <Input id="pass" type="password" error placeholder="Enter password" />
          </FormField>
        </div>
      </div>

      {/* With Textarea */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>With Textarea</div>
        <div style={{ maxWidth: 400 }}>
          <FormField label="Bio" htmlFor="bio" hint="Brief description for your profile">
            <Textarea id="bio" placeholder="Tell us about yourself..." />
          </FormField>
        </div>
      </div>

      {/* With Select */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>With Select</div>
        <div style={{ maxWidth: 320 }}>
          <FormField label="Department" htmlFor="dept" required>
            <Select>
              <SelectTrigger placeholder="Select department" />
              <SelectContent>
                <SelectItem value="eng">Engineering</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="product">Product</SelectItem>
              </SelectContent>
            </Select>
          </FormField>
        </div>
      </div>

      {/* With icons (InputField) */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>With icons</div>
        <div style={{ maxWidth: 360, display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <FormField label="Search" htmlFor="search-field" hint="Type a keyword">
            <InputField id="search-field" kind="search" placeholder="Search courses" />
          </FormField>
          <FormField label="Start date" htmlFor="start-date-field">
            <InputField
              id="start-date-field"
              kind="date"
              placeholder="DD/MM/YYYY"
              iconPosition="right"
            />
          </FormField>
          <FormField label="Password" htmlFor="password-field" required error="Must be 8+ characters">
            <InputField
              id="password-field"
              kind="password"
              placeholder="Enter password"
            />
          </FormField>
        </div>
      </div>

      {/* Disabled */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Disabled</div>
        <div style={{ maxWidth: 360 }}>
          <FormField label="Username" htmlFor="user" disabled>
            <Input id="user" disabled value="jsmith" />
          </FormField>
        </div>
      </div>

      {/* Complete form example */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Form Example</div>
        <div style={{ maxWidth: 400, display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px', background: 'var(--color-bg-theme-panel)', border: '1px solid var(--color-border-default)', borderRadius: '10px' }}>
          <FormField label="Full name" htmlFor="name" required>
            <Input id="name" placeholder="Jane Doe" />
          </FormField>
          <FormField label="Email" htmlFor="form-email" required hint="Used for login">
            <Input id="form-email" type="email" placeholder="jane@company.com" />
          </FormField>
          <FormField label="Role" htmlFor="role">
            <Select>
              <SelectTrigger placeholder="Select role" />
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="editor">Editor</SelectItem>
                <SelectItem value="viewer">Viewer</SelectItem>
              </SelectContent>
            </Select>
          </FormField>
          <FormField label="Notes" htmlFor="notes">
            <Textarea id="notes" placeholder="Any additional info..." rows={2} />
          </FormField>
        </div>
      </div>

      {/* Dark theme preview */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Theme Comparison</div>
        <div className="theme-comparison">
          <div data-theme="light" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <FormField label="Email" htmlFor="theme-email" hint="We'll never share your email">
                <InputField id="theme-email" kind="default" placeholder="you@example.com" />
              </FormField>
              <FormField label="Password" htmlFor="theme-pass" required error="Must be 8+ characters">
                <InputField id="theme-pass" kind="password" placeholder="Enter password" />
              </FormField>
            </div>
          </div>
          <div data-theme="dark" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <FormField label="Email" htmlFor="theme-email-dark" hint="We'll never share your email">
                <InputField id="theme-email-dark" kind="default" placeholder="you@example.com" />
              </FormField>
              <FormField label="Password" htmlFor="theme-pass-dark" required error="Must be 8+ characters">
                <InputField id="theme-pass-dark" kind="password" placeholder="Enter password" />
              </FormField>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
