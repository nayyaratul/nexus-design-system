import figma from '@figma/code-connect';
import { Tabs, TabsList, TabsTrigger } from '../../atoms/Tabs/Tabs';
import { Pagination } from '../../atoms/Pagination/Pagination';
import { Steps, StepItem } from '../../atoms/Steps/Steps';
import { Link } from '../../atoms/Link/Link';
import { Breadcrumb } from '../../molecules/Breadcrumb/Breadcrumb';
import { Toggle } from '../../atoms/Toggle/Toggle';
import { ToggleGroup, ToggleGroupItem } from '../../atoms/ToggleGroup/ToggleGroup';

figma.connect(Tabs, '<FIGMA_NEXUS>?node-id=21-201', {
  props: { variant: figma.enum('Variant', { Default: 'default', Underline: 'underline', Pills: 'pills' }) },
  example: (props) => (
    <Tabs defaultValue="overview" {...props}>
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
    </Tabs>
  ),
});

figma.connect(Pagination, '<FIGMA_NEXUS>?node-id=21-695', {
  props: { size: figma.enum('Size', { sm: 'sm', md: 'md', lg: 'lg' }) },
  example: (props) => <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} {...props} />,
});

figma.connect(Steps, '<FIGMA_NEXUS>?node-id=22-186', {
  props: { orientation: figma.enum('Orientation', { Horizontal: 'horizontal', Vertical: 'vertical' }) },
  example: (props) => (
    <Steps activeStep={1} {...props}>
      <StepItem label="Account" />
      <StepItem label="Profile" />
      <StepItem label="Billing" />
      <StepItem label="Confirm" />
    </Steps>
  ),
});

figma.connect(Link, '<FIGMA_NEXUS>?node-id=23-35', {
  props: {
    variant: figma.enum('Variant', { Default: 'default', Subtle: 'subtle' }),
    disabled: figma.enum('State', { Disabled: true }),
    external: figma.boolean('External'),
    text: figma.string('Text'),
  },
  example: ({ text, ...props }) => <Link href="#" {...props}>{text}</Link>,
});

figma.connect(Breadcrumb, '<FIGMA_NEXUS>?node-id=23-179', {
  props: { size: figma.enum('Size', { sm: 'sm', md: 'md' }) },
  example: (props) => (
    <Breadcrumb
      {...props}
      items={[
        { href: '/', label: 'Home' },
        { href: '/projects', label: 'Projects' },
        { href: '/projects/nexus', label: 'Nexus' },
        { label: 'Settings', isCurrent: true },
      ]}
    />
  ),
});

figma.connect(Toggle, '<FIGMA_NEXUS>?node-id=15-219', {
  props: {
    variant: figma.enum('Variant', { Default: 'default', Outline: 'outline', Pill: 'pill' }),
    size: figma.enum('Size', { sm: 'sm', md: 'md', lg: 'lg' }),
    pressed: figma.enum('Pressed', { On: true, Off: false }),
    disabled: figma.enum('State', { Disabled: true }),
    label: figma.boolean('Show label', { true: figma.string('Label'), false: undefined }),
    icon: figma.boolean('Show icon', { true: figma.instance('Icon'), false: undefined }),
  },
  example: ({ label, icon, ...props }) => <Toggle {...props}>{icon}{label}</Toggle>,
});

figma.connect(ToggleGroup, '<FIGMA_NEXUS>?node-id=15-324', {
  props: { variant: figma.enum('Variant', { Outline: 'outline', Default: 'default', Pill: 'pill' }) },
  example: (props) => (
    <ToggleGroup type="single" defaultValue="day" {...props}>
      <ToggleGroupItem value="day">Day</ToggleGroupItem>
      <ToggleGroupItem value="week">Week</ToggleGroupItem>
      <ToggleGroupItem value="month">Month</ToggleGroupItem>
    </ToggleGroup>
  ),
});
