import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../atoms/Tabs/Tabs';
import { User, Settings, Bell, CreditCard, Shield } from 'lucide-react';

const sty = {
  label: {
    fontSize: '11px',
    fontWeight: 500,
    color: 'var(--ink-3)',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    marginBottom: '12px',
  },
  demoArea: {
    background: 'var(--card-bg)',
    border: '1px solid var(--rule)',
    borderRadius: 'var(--radius)',
    padding: '24px',
  },
};

const tabContent = {
  account: 'Manage your account settings, update your profile information, and configure your display preferences.',
  notifications: 'Choose which notifications you receive. Configure email digests, push alerts, and in-app messages.',
  security: 'Set up two-factor authentication, manage active sessions, and review recent login activity.',
};

export function TabsShowcase() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Default variant */}
      <div>
        <div style={sty.label}>Default variant</div>
        <div style={sty.demoArea}>
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>
            <TabsContent value="account">{tabContent.account}</TabsContent>
            <TabsContent value="notifications">{tabContent.notifications}</TabsContent>
            <TabsContent value="security">{tabContent.security}</TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Underline variant */}
      <div>
        <div style={sty.label}>Underline variant</div>
        <div style={sty.demoArea}>
          <Tabs defaultValue="account" variant="underline">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>
            <TabsContent value="account">{tabContent.account}</TabsContent>
            <TabsContent value="notifications">{tabContent.notifications}</TabsContent>
            <TabsContent value="security">{tabContent.security}</TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Pills variant */}
      <div>
        <div style={sty.label}>Pills variant</div>
        <div style={sty.demoArea}>
          <Tabs defaultValue="account" variant="pills">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>
            <TabsContent value="account">{tabContent.account}</TabsContent>
            <TabsContent value="notifications">{tabContent.notifications}</TabsContent>
            <TabsContent value="security">{tabContent.security}</TabsContent>
          </Tabs>
        </div>
      </div>

      {/* With icons */}
      <div>
        <div style={sty.label}>With icons</div>
        <div style={sty.demoArea}>
          <Tabs defaultValue="profile" variant="underline">
            <TabsList>
              <TabsTrigger value="profile" icon={User}>Profile</TabsTrigger>
              <TabsTrigger value="settings" icon={Settings}>Settings</TabsTrigger>
              <TabsTrigger value="alerts" icon={Bell}>Alerts</TabsTrigger>
            </TabsList>
            <TabsContent value="profile">View and edit your public profile, avatar, and bio.</TabsContent>
            <TabsContent value="settings">Application preferences, language, and display options.</TabsContent>
            <TabsContent value="alerts">Alert rules, escalation policies, and history.</TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Sizes comparison */}
      <div>
        <div style={sty.label}>Sizes comparison</div>
        <div style={sty.demoArea}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {['sm', 'md', 'lg'].map((size) => (
              <div key={size}>
                <div style={{ fontSize: '10px', color: 'var(--color-text-tertiary)', marginBottom: '8px', fontWeight: 500, textTransform: 'uppercase' }}>{size}</div>
                <Tabs defaultValue="tab1" size={size}>
                  <TabsList>
                    <TabsTrigger value="tab1">First</TabsTrigger>
                    <TabsTrigger value="tab2">Second</TabsTrigger>
                    <TabsTrigger value="tab3">Third</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1">Content at the {size} size.</TabsContent>
                  <TabsContent value="tab2">Second tab content.</TabsContent>
                  <TabsContent value="tab3">Third tab content.</TabsContent>
                </Tabs>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Theme Comparison */}
      <div>
        <div style={sty.label}>Theme Comparison</div>
        <div className="theme-comparison">
          <div data-theme="light" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
            <Tabs defaultValue="general" variant="pills">
              <TabsList>
                <TabsTrigger value="general" icon={Settings}>General</TabsTrigger>
                <TabsTrigger value="billing" icon={CreditCard}>Billing</TabsTrigger>
                <TabsTrigger value="privacy" icon={Shield}>Privacy</TabsTrigger>
              </TabsList>
              <TabsContent value="general">General settings in the light theme.</TabsContent>
              <TabsContent value="billing">Billing information and invoices.</TabsContent>
              <TabsContent value="privacy">Privacy controls and data management.</TabsContent>
            </Tabs>
          </div>
          <div data-theme="dark" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
            <Tabs defaultValue="general" variant="pills">
              <TabsList>
                <TabsTrigger value="general" icon={Settings}>General</TabsTrigger>
                <TabsTrigger value="billing" icon={CreditCard}>Billing</TabsTrigger>
                <TabsTrigger value="privacy" icon={Shield}>Privacy</TabsTrigger>
              </TabsList>
              <TabsContent value="general">General settings in the dark theme.</TabsContent>
              <TabsContent value="billing">Billing information and invoices.</TabsContent>
              <TabsContent value="privacy">Privacy controls and data management.</TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
