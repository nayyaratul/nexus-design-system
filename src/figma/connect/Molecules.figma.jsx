import figma from '@figma/code-connect';
import { Card } from '../../molecules/Card/Card';
import { Modal } from '../../molecules/Modal/Modal';
import { ConfirmDialog } from '../../molecules/ConfirmDialog/ConfirmDialog';
import { Drawer } from '../../molecules/Drawer/Drawer';
import { Table } from '../../molecules/Table/Table';
import { EmptyState } from '../../molecules/EmptyState/EmptyState';
import { Dropzone } from '../../molecules/Dropzone/Dropzone';
import { ListSkeleton } from '../../molecules/ListSkeleton/ListSkeleton';
import { Menu } from '../../molecules/Menu/Menu';
import { Overlay } from '../../atoms/Overlay/Overlay';

figma.connect(Card, '<FIGMA_NEXUS>?node-id=32-386', {
  props: {
    variant: figma.enum('Variant', { Elevated: 'elevated', Outlined: 'outlined', Flat: 'flat' }),
    size: figma.enum('Size', { sm: 'sm', md: 'md', lg: 'lg' }),
    interactive: figma.enum('State', { Hover: true }),
    title: figma.string('Title'),
    body: figma.boolean('Show body', { true: figma.string('Body'), false: undefined }),
  },
  example: ({ title, body, ...props }) => (
    <Card {...props}>
      <Card.Header>
        <Card.Title>{title}</Card.Title>
      </Card.Header>
      <Card.Body>{body}</Card.Body>
    </Card>
  ),
});

figma.connect(Modal, '<FIGMA_NEXUS>?node-id=33-226', {
  props: {
    size: figma.enum('Size', { sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' }),
    variant: figma.enum('Variant', { Default: 'default', Info: 'info', Success: 'success', Warning: 'warning', Danger: 'danger' }),
    title: figma.string('Title'),
    description: figma.boolean('Show description', { true: figma.string('Description'), false: undefined }),
    body: figma.string('Body'),
    showCloseButton: figma.boolean('Show close'),
  },
  example: ({ body, ...props }) => (
    <Modal open onOpenChange={() => {}} {...props}>{body}</Modal>
  ),
});

figma.connect(ConfirmDialog, '<FIGMA_NEXUS>?node-id=33-335', {
  props: {
    intent: figma.enum('Intent', { Default: 'default', Destructive: 'destructive', Success: 'success', Warning: 'warning' }),
    title: figma.string('Title'),
    body: figma.string('Body'),
  },
  example: (props) => <ConfirmDialog open onOpenChange={() => {}} onConfirm={() => {}} {...props} />,
});

figma.connect(Drawer, '<FIGMA_NEXUS>?node-id=33-417', {
  props: {
    placement: figma.enum('Placement', { End: 'end', Start: 'start', Bottom: 'bottom' }),
    title: figma.string('Title'),
    subtitle: figma.boolean('Show subtitle', { true: figma.string('Subtitle'), false: undefined }),
  },
  example: (props) => <Drawer open onOpenChange={() => {}} {...props}>…</Drawer>,
});

figma.connect(Table, '<FIGMA_NEXUS>?node-id=34-206', {
  props: { variant: figma.enum('Variant', { Simple: 'simple', Striped: 'striped' }), bordered: figma.enum('Variant', { Bordered: true }) },
  example: (props) => (
    <Table {...props}>
      <Table.Header>
        <Table.Row><Table.Head>Name</Table.Head><Table.Head>Role</Table.Head></Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row><Table.Cell>Priya Sharma</Table.Cell><Table.Cell>Designer</Table.Cell></Table.Row>
      </Table.Body>
    </Table>
  ),
});

figma.connect(EmptyState, '<FIGMA_NEXUS>?node-id=36-235', {
  props: {
    variant: figma.enum('Variant', { Default: 'default', 'No results': 'no-results', Error: 'error', Upgrade: 'upgrade' }),
    size: figma.enum('Size', { Page: 'page', Section: 'section', Inline: 'inline' }),
    title: figma.string('Title'),
    description: figma.string('Description'),
  },
  example: (props) => <EmptyState {...props} primaryAction={{ label: 'Create project', onClick: () => {} }} />,
});

figma.connect(Dropzone, '<FIGMA_NEXUS>?node-id=37-209', {
  props: {
    size: figma.enum('Size', { sm: 'sm', md: 'md', lg: 'lg' }),
    error: figma.enum('State', { Error: true }),
    disabled: figma.enum('State', { Disabled: true }),
    prompt: figma.string('Prompt'),
  },
  example: (props) => <Dropzone hint="PDF, PNG or JPG up to 10 MB" {...props} />,
});

figma.connect(ListSkeleton, '<FIGMA_NEXUS>?node-id=36-317', {
  props: {
    layout: figma.enum('Layout', { List: 'list', Card: 'card' }),
    density: figma.enum('Density', { Comfortable: 'comfortable', Compact: 'compact' }),
  },
  example: (props) => <ListSkeleton {...props} />,
});

figma.connect(Menu, '<FIGMA_NEXUS>?node-id=19-288', {
  props: { variant: figma.enum('Variant', { Popover: 'plain', Panel: 'panel' }) },
  example: (props) => (
    <Menu renderTrigger={() => <button>Open</button>} {...props}>
      <Menu.Group label="Account">
        <Menu.Item>Profile</Menu.Item>
        <Menu.Item>Settings</Menu.Item>
      </Menu.Group>
      <Menu.Divider />
      <Menu.Item variant="destructive">Log out</Menu.Item>
    </Menu>
  ),
});

figma.connect(Overlay, '<FIGMA_NEXUS>?node-id=33-3', {
  example: () => <Overlay visible />,
});
