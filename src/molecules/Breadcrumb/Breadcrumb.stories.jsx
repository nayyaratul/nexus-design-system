import { Breadcrumb } from './Breadcrumb';
import { Icon } from '../../atoms/Icon/Icon';

export default {
  title: 'Molecules/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md'] },
    scrollBehavior: { control: 'select', options: ['none', 'scroll'] },
  },
};

const defaultItems = [
  { href: '/', label: 'Home' },
  { href: '/library', label: 'Library' },
  { href: '/library/design-systems', label: 'Design systems' },
  { href: '/library/design-systems/nexus', label: 'Nexus' },
];

export const Default = {
  args: {
    items: defaultItems,
    size: 'md',
  },
};

export const WithIcons = {
  args: {
    items: [
      { href: '/', icon: <Icon name="Home" />, ariaLabel: 'Home' },
      { href: '/library', label: 'Library' },
      {
        href: '/library/courses',
        icon: <Icon name="BookOpen" />,
        label: 'Courses',
      },
      { href: '/library/courses/nexus', label: 'Nexus course' },
    ],
    size: 'md',
  },
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-150)' }}>
      <Breadcrumb items={defaultItems} size="sm" />
      <Breadcrumb items={defaultItems} size="md" />
    </div>
  ),
};

export const LongPathWithCollapse = {
  args: {
    items: [
      { href: '/', label: 'Home' },
      { href: '/library', label: 'Library' },
      { href: '/library/courses', label: 'Courses' },
      { href: '/library/courses/design', label: 'Design' },
      { href: '/library/courses/design/systems', label: 'Systems' },
      { href: '/library/courses/design/systems/nexus', label: 'Nexus' },
    ],
    size: 'md',
    maxItems: 4,
    itemsBeforeCollapse: 1,
    itemsAfterCollapse: 2,
  },
};

export const ScrollBehaviour = {
  args: {
    items: [
      { href: '/', label: 'Home' },
      { href: '/level-1', label: 'Level 1' },
      { href: '/level-2', label: 'Level 2' },
      { href: '/level-3', label: 'Level 3' },
      { href: '/level-4', label: 'Level 4' },
      { href: '/level-5', label: 'Level 5' },
      { href: '/level-6', label: 'Level 6' },
      { href: '/level-7', label: 'Level 7' },
    ],
    size: 'md',
    scrollBehavior: 'scroll',
  },
};

