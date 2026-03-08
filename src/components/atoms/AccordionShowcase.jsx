import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../../atoms/Accordion/Accordion';
import { HelpCircle, Settings, CreditCard, Users, Shield, Bell } from 'lucide-react';

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

const faqItems = [
  {
    value: 'item-1',
    icon: HelpCircle,
    title: 'What is the Nexus Design System?',
    content: 'Nexus is a comprehensive design system built on Radix primitives, providing accessible, theme-aware components for building consistent user interfaces.',
  },
  {
    value: 'item-2',
    icon: Settings,
    title: 'How do I customise the theme?',
    content: 'Themes are driven by CSS custom properties defined in tokens.scss. Switch between light and dark by toggling the data-theme attribute on a parent element.',
  },
  {
    value: 'item-3',
    icon: CreditCard,
    title: 'Can I use individual atoms without the full system?',
    content: 'Yes. Each atom is self-contained with its own styles and can be imported independently. Just ensure the token layer is loaded for CSS variables.',
  },
];

export function AccordionShowcase() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Default — single collapsible */}
      <div>
        <div style={sty.label}>Default variant (single, collapsible)</div>
        <div style={sty.demoArea}>
          <Accordion type="single" collapsible>
            {faqItems.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* With icons */}
      <div>
        <div style={sty.label}>With leading icons</div>
        <div style={sty.demoArea}>
          <Accordion type="single" collapsible>
            {faqItems.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger icon={item.icon}>{item.title}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Bordered variant */}
      <div>
        <div style={sty.label}>Bordered variant</div>
        <div style={sty.demoArea}>
          <Accordion type="single" collapsible variant="bordered">
            <AccordionItem value="b-1">
              <AccordionTrigger icon={Users}>Team members</AccordionTrigger>
              <AccordionContent>Manage who has access to this project. Add or remove collaborators and adjust their permission levels.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="b-2">
              <AccordionTrigger icon={Shield}>Security settings</AccordionTrigger>
              <AccordionContent>Configure two-factor authentication, session timeouts, and API key management for your workspace.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="b-3">
              <AccordionTrigger icon={Bell}>Notification preferences</AccordionTrigger>
              <AccordionContent>Choose which events trigger email or in-app notifications. Set quiet hours and digest frequency.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Multiple */}
      <div>
        <div style={sty.label}>Multiple (several open at once)</div>
        <div style={sty.demoArea}>
          <Accordion type="multiple" defaultValue={['m-1']} variant="bordered">
            <AccordionItem value="m-1">
              <AccordionTrigger>First section</AccordionTrigger>
              <AccordionContent>This section starts open because of the defaultValue prop. Multiple sections can be expanded simultaneously.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="m-2">
              <AccordionTrigger>Second section</AccordionTrigger>
              <AccordionContent>Open this alongside the first — they are independent of each other.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="m-3">
              <AccordionTrigger>Third section</AccordionTrigger>
              <AccordionContent>All three can be open at the same time.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Disabled */}
      <div>
        <div style={sty.label}>Disabled item</div>
        <div style={sty.demoArea}>
          <Accordion type="single" collapsible>
            <AccordionItem value="d-1">
              <AccordionTrigger icon={Settings}>Enabled item</AccordionTrigger>
              <AccordionContent>This item can be toggled normally.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="d-2" disabled>
              <AccordionTrigger icon={Shield}>Disabled item</AccordionTrigger>
              <AccordionContent>You should not be able to see this.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="d-3">
              <AccordionTrigger icon={Bell}>Another enabled item</AccordionTrigger>
              <AccordionContent>This item also works normally.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Theme Comparison */}
      <div>
        <div style={sty.label}>Theme Comparison</div>
        <div className="theme-comparison">
          <div data-theme="light" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
            <Accordion type="single" collapsible defaultValue="t-1" variant="bordered">
              <AccordionItem value="t-1">
                <AccordionTrigger icon={HelpCircle}>Expanded by default</AccordionTrigger>
                <AccordionContent>Light theme accordion with proper token colours and bordered cards.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="t-2">
                <AccordionTrigger icon={Settings}>Collapsed item</AccordionTrigger>
                <AccordionContent>Click to expand.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div data-theme="dark" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
            <Accordion type="single" collapsible defaultValue="t-1" variant="bordered">
              <AccordionItem value="t-1">
                <AccordionTrigger icon={HelpCircle}>Expanded by default</AccordionTrigger>
                <AccordionContent>Dark theme accordion with proper token colours and bordered cards.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="t-2">
                <AccordionTrigger icon={Settings}>Collapsed item</AccordionTrigger>
                <AccordionContent>Click to expand.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
