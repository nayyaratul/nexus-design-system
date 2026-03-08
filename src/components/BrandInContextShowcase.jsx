import {
  Button,
  Link,
  Input,
  FormField,
  Switch,
  RadioGroup,
  RadioItem,
  ToggleGroup,
  ToggleGroupItem,
  Steps,
  StepItem,
  Spinner,
  Pagination,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '../atoms/index.js';
import { FileText, BarChart3, Settings } from 'lucide-react';

export default function BrandInContextShowcase() {
  return (
    <div className="preview-grid">
      {/* 1. Button */}
      <div className="preview-card">
        <div className="preview-card-label">Button</div>
        <div className="preview-card-body" style={{ gap: 'var(--space-100)', flexWrap: 'wrap' }}>
          <Button variant="primary" size="md">
            Enrol Now
          </Button>
          <Button variant="ghost" size="md">
            Cancel
          </Button>
        </div>
      </div>

      {/* 2. Link */}
      <div className="preview-card">
        <div className="preview-card-label">Link</div>
        <div className="preview-card-body">
          <Link href="#">View course details →</Link>
        </div>
      </div>

      {/* 3. FormField with hint */}
      <div className="preview-card">
        <div className="preview-card-label">FormField</div>
        <div className="preview-card-body" style={{ width: '100%' }}>
          <div style={{ width: '100%', minWidth: 0 }}>
            <FormField label="Email" htmlFor="brand-email">
              <Input id="brand-email" type="email" placeholder="jane@university.edu" size="md" />
            </FormField>
          </div>
        </div>
      </div>

      {/* 4. Switch */}
      <div className="preview-card">
        <div className="preview-card-label">Switch</div>
        <div
          className="preview-card-body"
          style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--space-150)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-100)' }}>
            <Switch defaultChecked size="md" />
            <span>Notifications</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-100)' }}>
            <Switch size="md" />
            <span>Dark mode</span>
          </div>
        </div>
      </div>

      {/* 5. Steps */}
      <div className="preview-card">
        <div className="preview-card-label">Steps</div>
        <div className="preview-card-body" style={{ width: '100%' }}>
          <Steps activeStep={1} size="md" orientation="horizontal">
            <StepItem label="Details" />
            <StepItem label="Review" />
            <StepItem label="Confirm" />
          </Steps>
        </div>
      </div>

      {/* 6. Radio group */}
      <div className="preview-card">
        <div className="preview-card-label">Radio group</div>
        <div
          className="preview-card-body"
          style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--space-100)' }}
        >
          <RadioGroup defaultValue="monthly">
            <RadioItem value="monthly">Monthly</RadioItem>
            <RadioItem value="annual">Annual</RadioItem>
            <RadioItem value="lifetime">Lifetime</RadioItem>
          </RadioGroup>
        </div>
      </div>

      {/* 7. Toggle group */}
      <div className="preview-card">
        <div className="preview-card-label">Toggle group</div>
        <div className="preview-card-body">
          <ToggleGroup type="single" defaultValue="week" size="md" variant="outline">
            <ToggleGroupItem value="day">Day</ToggleGroupItem>
            <ToggleGroupItem value="week">Week</ToggleGroupItem>
            <ToggleGroupItem value="month">Month</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      {/* 8. Spinner (default + dots variant) */}
      <div className="preview-card">
        <div className="preview-card-label">Spinner</div>
        <div className="preview-card-body" style={{ gap: 'var(--space-150)' }}>
          <Spinner size="md" />
          <Spinner variant="dots" size="md" />
        </div>
      </div>

      {/* 9. Pagination (20-page variant) */}
      <div className="preview-card">
        <div className="preview-card-label">Pagination</div>
        <div className="preview-card-body">
          <Pagination currentPage={10} totalPages={20} size="md" />
        </div>
      </div>

      {/* 10. Tabs (with icons) */}
      <div className="preview-card">
        <div className="preview-card-label">Tabs</div>
        <div
          className="preview-card-body"
          style={{ flexDirection: 'column', alignItems: 'stretch', gap: 'var(--space-100)' }}
        >
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview" icon={FileText}>Overview</TabsTrigger>
              <TabsTrigger value="analytics" icon={BarChart3}>Analytics</TabsTrigger>
              <TabsTrigger value="settings" icon={Settings}>Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">Overview content.</TabsContent>
            <TabsContent value="analytics">Analytics content.</TabsContent>
            <TabsContent value="settings">Settings content.</TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
