import { Timeline, TimelineItem } from '../../atoms/Timeline/Timeline';
import { Check, AlertCircle, Clock, Star, Zap, Package, Truck, MapPin } from 'lucide-react';

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

export function TimelineShowcase() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Default vertical */}
      <div>
        <div style={sty.label}>Default Vertical</div>
        <div style={sty.demoArea}>
          <Timeline>
            <TimelineItem label="Step 1">Code pushed to repository</TimelineItem>
            <TimelineItem label="Step 2">Build pipeline triggered</TimelineItem>
            <TimelineItem label="Step 3">Tests passed successfully</TimelineItem>
            <TimelineItem label="Step 4">Deployed to production</TimelineItem>
          </Timeline>
        </div>
      </div>

      {/* With icons */}
      <div>
        <div style={sty.label}>With Icons</div>
        <div style={sty.demoArea}>
          <Timeline>
            <TimelineItem marker="icon" icon={<Package size={14} />} label="Order placed">
              Your order has been confirmed
            </TimelineItem>
            <TimelineItem marker="icon" icon={<Zap size={14} />} label="Processing">
              Items being prepared for shipment
            </TimelineItem>
            <TimelineItem marker="icon" icon={<Truck size={14} />} label="Shipped">
              Package is on its way
            </TimelineItem>
            <TimelineItem marker="icon" icon={<MapPin size={14} />} label="Delivered">
              Package delivered to your address
            </TimelineItem>
          </Timeline>
        </div>
      </div>

      {/* Status variants */}
      <div>
        <div style={sty.label}>Status Variants</div>
        <div style={sty.demoArea}>
          <Timeline>
            <TimelineItem status="success" marker="icon" icon={<Check size={14} />} label="Completed">
              Environment provisioned successfully
            </TimelineItem>
            <TimelineItem status="error" marker="icon" icon={<AlertCircle size={14} />} label="Failed">
              Database migration encountered errors
            </TimelineItem>
            <TimelineItem status="warning" marker="icon" icon={<Clock size={14} />} label="Delayed">
              API integration tests pending review
            </TimelineItem>
            <TimelineItem status="info" marker="icon" icon={<Star size={14} />} label="Scheduled">
              Production cutover planned for next sprint
            </TimelineItem>
          </Timeline>
        </div>
      </div>

      {/* Ring markers */}
      <div>
        <div style={sty.label}>Ring Markers</div>
        <div style={sty.demoArea}>
          <Timeline>
            <TimelineItem marker="ring" status="success" label="Completed">Design approved</TimelineItem>
            <TimelineItem marker="ring" status="success" label="Completed">Development finished</TimelineItem>
            <TimelineItem marker="ring" status="warning" label="In progress">QA testing</TimelineItem>
            <TimelineItem marker="ring" label="Pending">Release</TimelineItem>
          </Timeline>
        </div>
      </div>

      {/* Alternate */}
      <div>
        <div style={sty.label}>Alternate Variant</div>
        <div style={sty.demoArea}>
          <Timeline variant="alternate">
            <TimelineItem label="Q1 2025">Project kickoff and requirements gathering</TimelineItem>
            <TimelineItem label="Q2 2025">Design system foundations and token architecture</TimelineItem>
            <TimelineItem label="Q3 2025">Component library v1.0 released</TimelineItem>
            <TimelineItem label="Q4 2025">Production rollout across all products</TimelineItem>
          </Timeline>
        </div>
      </div>

      {/* Horizontal */}
      <div>
        <div style={sty.label}>Horizontal</div>
        <div style={sty.demoArea}>
          <Timeline orientation="horizontal">
            <TimelineItem status="success" label="Draft">Proposal created</TimelineItem>
            <TimelineItem status="success" label="Review">Approved by leads</TimelineItem>
            <TimelineItem status="info" label="Build">In development</TimelineItem>
            <TimelineItem label="Launch">Pending release</TimelineItem>
          </Timeline>
        </div>
      </div>

      {/* Theme comparison */}
      <div>
        <div style={sty.label}>Theme Comparison</div>
        <div className="theme-comparison">
          <div data-theme="light" style={{ padding: '20px', background: 'var(--color-bg-primary)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
            <Timeline>
              <TimelineItem status="success" label="Done">Build passed</TimelineItem>
              <TimelineItem status="warning" label="Review">Awaiting approval</TimelineItem>
              <TimelineItem label="Next">Deploy to staging</TimelineItem>
            </Timeline>
          </div>
          <div data-theme="dark" style={{ padding: '20px', background: 'var(--color-bg-primary)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
            <Timeline>
              <TimelineItem status="success" label="Done">Build passed</TimelineItem>
              <TimelineItem status="warning" label="Review">Awaiting approval</TimelineItem>
              <TimelineItem label="Next">Deploy to staging</TimelineItem>
            </Timeline>
          </div>
        </div>
      </div>
    </div>
  );
}
