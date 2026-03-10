import { useCallback } from 'react';
import cx from 'classnames';
import { Button } from '../../atoms/Button/Button';
import { Text } from '../../atoms/Text/Text';
import { Modal } from '../Modal/Modal';
import styles from './ConfirmDialog.module.scss';

const INTENT_VARIANT_MAP = {
  default: 'default',
  destructive: 'danger',
  success: 'success',
  warning: 'warning',
};

export function ConfirmDialog({
  open,
  onOpenChange,
  dismissible = true,
  title,
  description,
  body,
  intent = 'default',
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onConfirm,
  onCancel,
  confirmLoading = false,
  disableCancelWhileLoading = false,
  ariaLabel,
  ...rest
}) {
  const bodyContent = body || description;

  const handleClose = useCallback(
    (nextOpen) => {
      if (onOpenChange) {
        onOpenChange(nextOpen);
      }
    },
    [onOpenChange],
  );

  const handleCancelClick = () => {
    onCancel?.();
    handleClose(false);
  };

  const handleConfirmClick = async () => {
    if (!onConfirm) {
      handleClose(false);
      return;
    }
    const result = onConfirm();
    if (result && typeof result.then === 'function') {
      try {
        await result;
        handleClose(false);
      } catch {
        // keep dialog open on error; consuming code handles feedback
      }
    } else {
      handleClose(false);
    }
  };

  const footer = (
    <div className={styles.actions}>
      <Button
        variant="ghost"
        onClick={handleCancelClick}
        disabled={disableCancelWhileLoading && confirmLoading}
      >
        {cancelLabel}
      </Button>
      <Button
        variant={intent === 'destructive' ? 'destructive' : 'primary'}
        onClick={handleConfirmClick}
        loading={confirmLoading}
        className={cx(intent === 'destructive' && styles.primaryDanger)}
      >
        {confirmLabel}
      </Button>
    </div>
  );

  const modalVariant = INTENT_VARIANT_MAP[intent] || 'default';

  return (
    <Modal
      open={open}
      onOpenChange={handleClose}
      dismissible={dismissible}
      variant={modalVariant}
      title={title}
      description={undefined}
      footer={footer}
      ariaLabel={ariaLabel}
      size="sm"
      {...rest}
    >
      {bodyContent && (
        <Text variant="body" size="md" className={styles.body}>
          {bodyContent}
        </Text>
      )}
    </Modal>
  );
}

