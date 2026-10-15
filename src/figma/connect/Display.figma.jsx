import figma from '@figma/code-connect';
import { Avatar } from '../../atoms/Avatar/Avatar';
import { Heading } from '../../atoms/Heading/Heading';
import { Text } from '../../atoms/Text/Text';
import { Code } from '../../atoms/Code/Code';
import { Divider } from '../../atoms/Divider/Divider';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../../atoms/Accordion/Accordion';
import { Slider } from '../../atoms/Slider/Slider';
import { RatingStar } from '../../atoms/RatingStar/RatingStar';
import { Rating } from '../../molecules/Rating/Rating';
import { Timer } from '../../atoms/Timer/Timer';
import { Calendar } from '../../atoms/Calendar/Calendar';
import { Thumbnail } from '../../atoms/Thumbnail/Thumbnail';
import { Image } from '../../atoms/Image/Image';
import { Timeline, TimelineItem } from '../../atoms/Timeline/Timeline';

figma.connect(Avatar, '<FIGMA_NEXUS>?node-id=24-281', {
  props: {
    size: figma.enum('Size', { xs: 'xs', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' }),
    online: figma.enum('Status', { Online: true, Offline: false }),
  },
  example: (props) => <Avatar name="Atul Nayyar" {...props} />,
});

figma.connect(Heading, '<FIGMA_NEXUS>?node-id=24-15', {
  props: {
    level: figma.enum('Level', { H1: 1, H2: 2, H3: 3, H4: 4, H5: 5, H6: 6 }),
    text: figma.string('Text'),
  },
  example: ({ text, ...props }) => <Heading {...props}>{text}</Heading>,
});

figma.connect(Text, '<FIGMA_NEXUS>?node-id=24-26', {
  props: {
    variant: figma.enum('Variant', { Body: 'body', 'Body Large': 'bodyLg', Caption: 'caption', Micro: 'micro', Overline: 'overline' }),
    text: figma.string('Text'),
  },
  example: ({ text, ...props }) => <Text {...props}>{text}</Text>,
});

figma.connect(Code, '<FIGMA_NEXUS>?node-id=24-34', {
  props: {
    variant: figma.enum('Variant', { Inline: 'inline', Block: 'block' }),
    copyable: figma.boolean('Copyable'),
    code: figma.string('Code'),
  },
  example: ({ code, ...props }) => <Code {...props}>{code}</Code>,
});

figma.connect(Divider, '<FIGMA_NEXUS>?node-id=26-175', {
  props: {
    orientation: figma.enum('Orientation', { Horizontal: 'horizontal', Vertical: 'vertical' }),
    variant: figma.enum('Style', { Solid: 'solid', Dashed: 'dashed', Dotted: 'dotted' }),
    label: figma.enum('Label', { Yes: figma.string('Label') }),
  },
  example: (props) => <Divider {...props} />,
});

figma.connect(Accordion, '<FIGMA_NEXUS>?node-id=26-150', {
  props: { variant: figma.enum('Variant', { Default: 'default', Bordered: 'bordered' }) },
  example: (props) => (
    <Accordion type="single" collapsible {...props}>
      <AccordionItem value="item-1">
        <AccordionTrigger>What is Nexus?</AccordionTrigger>
        <AccordionContent>Nexus is the BetterPlace design system.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
});

figma.connect(Slider, '<FIGMA_NEXUS>?node-id=28-107', {
  props: {
    size: figma.enum('Size', { sm: 'sm', md: 'md' }),
    defaultValue: figma.enum('Type', { Single: [60], Range: [25, 60] }),
    disabled: figma.enum('State', { Disabled: true }),
    showValue: figma.boolean('Show value'),
  },
  example: (props) => <Slider {...props} />,
});

figma.connect(RatingStar, '<FIGMA_NEXUS>?node-id=28-148', {
  props: {
    size: figma.enum('Size', { xs: 'xs', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' }),
    state: figma.enum('State', { Filled: 'filled', Half: 'half', Empty: 'empty' }),
  },
  example: (props) => <RatingStar {...props} />,
});

figma.connect(Rating, '<FIGMA_NEXUS>?node-id=28-308', {
  props: {
    size: figma.enum('Size', { sm: 'sm', md: 'md', lg: 'lg' }),
    variant: figma.enum('Variant', { Standard: 'standard', 'Stars only': 'starsOnly', Compact: 'compact' }),
    showMax: figma.boolean('Show max'),
  },
  example: (props) => <Rating defaultValue={3.5} precision={0.5} showValue count={128} showCount {...props} />,
});

figma.connect(Timer, '<FIGMA_NEXUS>?node-id=31-393', {
  props: {
    size: figma.enum('Size', { sm: 'sm', md: 'md', lg: 'lg' }),
    variant: figma.enum('Variant', { Default: 'default', Warning: 'warning', Danger: 'danger' }),
  },
  example: (props) => <Timer value={125760} {...props} />,
});

figma.connect(Calendar, '<FIGMA_NEXUS>?node-id=31-374', {
  props: { mode: figma.enum('Mode', { Single: 'single', Range: 'range' }) },
  example: (props) => <Calendar {...props} />,
});

figma.connect(Thumbnail, '<FIGMA_NEXUS>?node-id=31-435', {
  props: { size: figma.enum('Size', { xs: 'xs', sm: 'sm', md: 'md', lg: 'lg' }), overlay: figma.enum('State', { Hover: true }) },
  example: (props) => <Thumbnail src="/photo.jpg" alt="" {...props} />,
});

figma.connect(Image, '<FIGMA_NEXUS>?node-id=31-402', {
  example: () => <Image src="/photo.jpg" alt="" />,
});

figma.connect(Timeline, '<FIGMA_NEXUS>?node-id=29-114', {
  props: { orientation: figma.enum('Orientation', { Vertical: 'vertical', Horizontal: 'horizontal' }) },
  example: (props) => (
    <Timeline {...props}>
      <TimelineItem status="success" label="09:12 AM">Order placed</TimelineItem>
      <TimelineItem marker="ring" status="warning" label="10:02 AM">Awaiting pickup</TimelineItem>
    </Timeline>
  ),
});
