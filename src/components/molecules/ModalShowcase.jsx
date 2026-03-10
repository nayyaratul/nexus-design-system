import { useState } from 'react';
import { Modal } from '../../molecules/Modal/Modal';
import { Button } from '../../atoms/Button/Button';
import { Text } from '../../atoms/Text/Text';
import { Icon } from '../../atoms/Icon/Icon';
import { X } from 'lucide-react';

const sectionTitleStyle = {
  fontFamily: 'var(--sans)',
  fontSize: 'var(--font-size-200)',
  fontWeight: 'var(--font-weight-medium)',
  color: 'var(--color-text-tertiary)',
  letterSpacing: 'var(--letter-spacing-wide)',
  textTransform: 'uppercase',
  margin: '0 0 var(--space-150) 0',
};

export function ModalShowcase() {
  const [openDefault, setOpenDefault] = useState(false);
  const [openDestructive, setOpenDestructive] = useState(false);
  const [openIconHeader, setOpenIconHeader] = useState(false);

  return (
    <div
      className="modal-showcase"
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-400)' }}
    >
      <section className="showcase-section" style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 className="showcase-section__title" style={sectionTitleStyle}>
          Default dialog
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-150)' }}>
          <Text variant="body" size="sm" color="var(--color-text-secondary)">
            Use for focused tasks such as editing settings or inviting learners.
          </Text>
          <Button onClick={() => setOpenDefault(true)}>Open dialog</Button>
        </div>
        <Modal
          open={openDefault}
          onOpenChange={setOpenDefault}
          title="Invite learners"
          description="Send invitations to new learners by email or copy a shareable link."
          footer={
            <>
              <Button variant="ghost" onClick={() => setOpenDefault(false)}>
                Cancel
              </Button>
              <Button>Send invites</Button>
            </>
          }
        >
          <Text>
            Learners will receive an email with a link to this course. You can manage enrolments
            later from the course settings page.
          </Text>
        </Modal>
      </section>

      <section className="showcase-section" style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 className="showcase-section__title" style={sectionTitleStyle}>
          Icon header
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-150)' }}>
          <Text variant="body" size="sm" color="var(--color-text-secondary)">
            Add a contextual icon to the header for high-signal confirmations.
          </Text>
          <Button variant="destructive" onClick={() => setOpenIconHeader(true)}>
            Delete course
          </Button>
        </div>
        <Modal
          open={openIconHeader}
          onOpenChange={setOpenIconHeader}
          variant="danger"
          truncateDescription
          icon={<Icon name="TriangleAlert" size="md" aria-hidden />}
          title="Delete Course"
          description="Learners will lose access and progress."
          footer={
            <>
              <Button variant="ghost" onClick={() => setOpenIconHeader(false)}>
                Cancel
              </Button>
              <Button variant="destructive">Delete</Button>
            </>
          }
        >
          <Text>
            Use icon headers sparingly, reserving them for irreversible or high-impact actions
            where additional visual weight helps draw attention.
          </Text>
        </Modal>
      </section>

      <section className="showcase-section" style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 className="showcase-section__title" style={sectionTitleStyle}>
          Destructive variant
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-150)' }}>
          <Text variant="body" size="sm" color="var(--color-text-secondary)">
            Elevate risk with a danger variant and clear primary action.
          </Text>
          <Button variant="destructive" onClick={() => setOpenDestructive(true)}>
            Delete course
          </Button>
        </div>
        <Modal
          open={openDestructive}
          onOpenChange={setOpenDestructive}
          variant="danger"
          truncateDescription
          title="Delete Course"
          description="Learners will lose access and progress."
          footer={
            <>
              <Button variant="ghost" onClick={() => setOpenDestructive(false)}>
                Cancel
              </Button>
              <Button variant="destructive">Delete</Button>
            </>
          }
        >
          <Text>
            Only use destructive dialogs for irreversible actions. Give users a clear way to back
            out and explain exactly what will happen.
          </Text>
        </Modal>
      </section>
    </div>
  );
}

