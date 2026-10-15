// Figma ↔ code link map for Nexus Design System 3.0.
// Figma file: https://www.figma.com/design/jkpCTJ7uuwomi9SDhIIIDD/Nexus-System-3.0
// Keys are Storybook titles; values are the node IDs of the matching Figma component sets.

export const FIGMA_FILE_URL =
  'https://www.figma.com/design/jkpCTJ7uuwomi9SDhIIIDD/Nexus-System-3.0';

export const FIGMA_NODES = {
  'Atoms/Accordion': '26:150',
  'Atoms/Alert': '16:99',
  'Atoms/AspectRatio': '31:444',
  'Atoms/Avatar': '24:281',
  'Atoms/Badge': '9:38',
  'Atoms/Button': '8:723',
  'Atoms/Calendar': '31:374',
  'Atoms/Checkbox': '10:107',
  'Atoms/Code': '24:34',
  'Atoms/Divider': '26:175',
  'Atoms/FormField': '12:270',
  'Atoms/Heading': '24:15',
  'Atoms/Icon': '6:2',
  'Atoms/Image': '31:402',
  'Atoms/Input': '12:196',
  'Atoms/InputField': '12:196',
  'Atoms/Label': '12:15',
  'Atoms/Link': '23:35',
  'Atoms/Overlay': '33:3',
  'Atoms/Pagination': '21:695',
  'Atoms/Popover': '18:52',
  'Atoms/ProgressBar': '20:43',
  'Atoms/RadioGroup': '10:159',
  'Atoms/RatingStar': '28:148',
  'Atoms/Select': '13:123',
  'Atoms/Skeleton': '20:123',
  'Atoms/Slider': '28:107',
  'Atoms/Spinner': '7:22',
  'Atoms/Steps': '22:186',
  'Atoms/StoryProgress': '20:116',
  'Atoms/Switch': '10:208',
  'Atoms/Tabs': '21:201',
  'Atoms/Tag': '9:99',
  'Atoms/Text': '24:26',
  'Atoms/Textarea': '12:242',
  'Atoms/Thumbnail': '31:435',
  'Atoms/Timeline': '29:114',
  'Atoms/Timer': '31:393',
  'Atoms/Toast': '16:140',
  'Atoms/Toggle': '15:219',
  'Atoms/ToggleGroup': '15:324',
  'Atoms/Tooltip': '18:19',
  'Atoms/Upload File': '37:123',
  'Molecules/Breadcrumb': '23:179',
  'Molecules/Card': '32:386',
  'Molecules/ConfirmDialog': '33:335',
  'Molecules/Drawer': '33:417',
  'Molecules/Dropzone': '37:209',
  'Molecules/EmptyState': '36:235',
  'Molecules/ListSkeleton': '36:317',
  'Molecules/Menu': '19:288',
  'Molecules/Modal': '33:226',
  'Molecules/Rating': '28:308',
  'Molecules/SearchInput': '14:113',
  'Molecules/Table': '34:206',
};

export const figmaUrl = (title) => {
  const node = FIGMA_NODES[title];
  return node ? `${FIGMA_FILE_URL}?node-id=${node.replace(':', '-')}` : FIGMA_FILE_URL;
};

// Storybook `parameters.design` for @storybook/addon-designs.
export const figmaDesign = (title) => ({ type: 'figma', url: figmaUrl(title) });
