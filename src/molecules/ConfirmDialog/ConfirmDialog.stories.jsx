import { useState } from 'react';
import { ConfirmDialog } from './ConfirmDialog';
import { Button } from '../../atoms/Button/Button';

export default {
  title: 'Molecules/ConfirmDialog',
  component: ConfirmDialog,
  argTypes: {
    intent: { control: 'select', options: ['default', 'destructive', 'success', 'warning'] },
    dismissible: { control: 'boolean' },
    confirmLoading: { control: 'boolean' },
    disableCancelWhileLoading: { control: 'boolean' },
  },
};

function DialogTemplate(args) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open confirm dialog</Button>
      <ConfirmDialog
        {...args}
        open={open}
        onOpenChange={setOpen}
        title={args.title || 'Publish course updates?'}
        description={
          args.description ||
          'Learners will see the latest content immediately after publishing.'
        }
      />
    </>
  );
}

export const Default = {
  render: (args) => <DialogTemplate {...args} />,
  args: {
    intent: 'default',
    dismissible: true,
    confirmLabel: 'Publish',
    cancelLabel: 'Keep editing',
  },
};

export const Destructive = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="destructive" onClick={() => setOpen(true)}>
          Delete course
        </Button>
        <ConfirmDialog
          open={open}
          onOpenChange={setOpen}
          intent="destructive"
          title="Delete Course"
          description="Learners will lose access and progress."
          confirmLabel="Delete"
          cancelLabel="Cancel"
        />
      </>
    );
  },
};

export const AsyncConfirm = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleConfirm() {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setLoading(false);
    }

    return (
      <>
        <Button onClick={() => setOpen(true)}>Submit assessment</Button>
        <ConfirmDialog
          open={open}
          onOpenChange={setOpen}
          intent="success"
          title="Submit assessment?"
          description="Once submitted, learners will no longer be able to change their answers."
          confirmLabel="Submit"
          cancelLabel="Go back"
          onConfirm={handleConfirm}
          confirmLoading={loading}
          disableCancelWhileLoading
        />
      </>
    );
  },
};

export const NonDismissibleDestructive = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="destructive" onClick={() => setOpen(true)}>
          Archive workspace
        </Button>
        <ConfirmDialog
          open={open}
          onOpenChange={setOpen}
          dismissible={false}
          intent="destructive"
          title="Archive workspace?"
          description="Team members will lose access to courses and analytics until the workspace is restored."
          confirmLabel="Archive"
          cancelLabel="Keep workspace active"
        />
      </>
    );
  },
};

