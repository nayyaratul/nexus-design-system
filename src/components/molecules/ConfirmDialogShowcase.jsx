import { useState } from 'react';
import { ConfirmDialog } from '../../molecules/ConfirmDialog/ConfirmDialog';
import { Text } from '../../atoms/Text/Text';
import { Button } from '../../atoms/Button/Button';

const sectionTitleStyle = {
  fontFamily: 'var(--sans)',
  fontSize: 'var(--font-size-200)',
  fontWeight: 500,
  color: 'var(--color-text-tertiary)',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  margin: '0 0 var(--space-150) 0',
};

export function ConfirmDialogShowcase() {
  const [openDefault, setOpenDefault] = useState(false);
  const [openDestructive, setOpenDestructive] = useState(false);

  return (
    <div
      className="confirmdialog-showcase"
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-400)' }}
    >
      <section className="showcase-section" style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 className="showcase-section__title" style={sectionTitleStyle}>
          Default confirmation
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-150)' }}>
          <Text variant="body" size="sm" color="var(--color-text-secondary)">
            Use for routine confirmations like publishing or submitting.
          </Text>
          <Button onClick={() => setOpenDefault(true)}>Publish changes</Button>
        </div>
        <ConfirmDialog
          open={openDefault}
          onOpenChange={setOpenDefault}
          title="Publish course updates?"
          description="Learners will see the latest content immediately after publishing."
          confirmLabel="Publish"
          cancelLabel="Keep editing"
        />
      </section>

      <section className="showcase-section" style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 className="showcase-section__title" style={sectionTitleStyle}>
          Destructive confirmation
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-150)' }}>
          <Text variant="body" size="sm" color="var(--color-text-secondary)">
            Use the destructive intent for irreversible actions only.
          </Text>
          <Button variant="destructive" onClick={() => setOpenDestructive(true)}>
            Delete course
          </Button>
        </div>
        <ConfirmDialog
          open={openDestructive}
          onOpenChange={setOpenDestructive}
          intent="destructive"
          title="Delete Course"
          description="Learners will lose access and progress."
          confirmLabel="Delete"
          cancelLabel="Cancel"
        />
      </section>

    </div>
  );
}

