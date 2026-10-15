import { Timeline, TimelineItem } from './Timeline';
import { Check, AlertCircle, Clock, Star, Zap } from 'lucide-react';
import { figmaDesign } from '../../figma/figmaLinks';

export default {
  title: 'Atoms/Timeline',
  parameters: { design: figmaDesign('Atoms/Timeline') },
  component: Timeline,
  argTypes: {
    orientation: { control: 'select', options: ['vertical', 'horizontal'] },
    variant: { control: 'select', options: ['default', 'alternate'] },
  },
};

export const Default = {
  render: () => (
    <Timeline>
      <TimelineItem label="Step 1">Code pushed to repository</TimelineItem>
      <TimelineItem label="Step 2">Build pipeline triggered</TimelineItem>
      <TimelineItem label="Step 3">Tests passed successfully</TimelineItem>
      <TimelineItem label="Step 4">Deployed to production</TimelineItem>
    </Timeline>
  ),
};

export const WithIcons = {
  render: () => (
    <Timeline>
      <TimelineItem marker="icon" icon={<Zap size={14} />} label="Initiated">
        Deployment pipeline started
      </TimelineItem>
      <TimelineItem marker="icon" icon={<Clock size={14} />} label="Building">
        Compiling assets and running checks
      </TimelineItem>
      <TimelineItem marker="icon" icon={<Check size={14} />} label="Verified">
        All tests and audits passed
      </TimelineItem>
      <TimelineItem marker="icon" icon={<Star size={14} />} label="Live">
        Successfully deployed to production
      </TimelineItem>
    </Timeline>
  ),
};

export const StatusVariants = {
  render: () => (
    <Timeline>
      <TimelineItem status="success" label="Completed">
        Order confirmed and payment received
      </TimelineItem>
      <TimelineItem status="success" label="Completed">
        Package shipped from warehouse
      </TimelineItem>
      <TimelineItem status="warning" label="In transit">
        Package delayed at regional hub
      </TimelineItem>
      <TimelineItem status="error" label="Failed">
        Delivery attempt unsuccessful
      </TimelineItem>
      <TimelineItem status="info" label="Rescheduled">
        New delivery date confirmed
      </TimelineItem>
    </Timeline>
  ),
};

export const Alternate = {
  render: () => (
    <Timeline variant="alternate">
      <TimelineItem label="Q1 2025">Project kickoff and planning</TimelineItem>
      <TimelineItem label="Q2 2025">Design system foundations</TimelineItem>
      <TimelineItem label="Q3 2025">Component library v1 release</TimelineItem>
      <TimelineItem label="Q4 2025">Production rollout</TimelineItem>
    </Timeline>
  ),
};

export const Horizontal = {
  render: () => (
    <Timeline orientation="horizontal">
      <TimelineItem label="Draft">Proposal created</TimelineItem>
      <TimelineItem status="success" label="Review">Approved by team</TimelineItem>
      <TimelineItem status="info" label="Build">In development</TimelineItem>
      <TimelineItem label="Launch">Pending release</TimelineItem>
    </Timeline>
  ),
};

export const RingMarker = {
  render: () => (
    <Timeline>
      <TimelineItem marker="ring" status="success" label="Done">
        Environment provisioned
      </TimelineItem>
      <TimelineItem marker="ring" status="success" label="Done">
        Database migrations applied
      </TimelineItem>
      <TimelineItem marker="ring" status="warning" label="In progress">
        API integration testing
      </TimelineItem>
      <TimelineItem marker="ring" label="Pending">
        Production cutover
      </TimelineItem>
    </Timeline>
  ),
};
