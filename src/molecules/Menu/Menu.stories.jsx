import { useState } from 'react';
import { Menu } from './Menu';
import { Button } from '../../atoms/Button/Button';
import { Icon } from '../../atoms/Icon/Icon';

export default {
  title: 'Molecules/Menu',
  component: Menu,
};

export const Default = {
  render: () => (
    <Menu
      renderTrigger={({ open }) => (
        <Button
          size="sm"
          variant="secondary"
          iconRight={<Icon name={open ? 'ChevronUp' : 'ChevronDown'} size="sm" aria-hidden />}
        >
          Actions
        </Button>
      )}
    >
      <Menu.Item>Rename</Menu.Item>
      <Menu.Item>Duplicate</Menu.Item>
      <Menu.Item variant="destructive">Delete</Menu.Item>
    </Menu>
  ),
};

export const OverflowMenu = {
  render: () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'var(--space-150)',
        borderRadius: 'var(--radius-100)',
        border: 'var(--border-width-100) solid var(--color-border-default)',
      }}
    >
      <div>
        <div style={{ fontSize: 'var(--font-size-300)', color: 'var(--color-text-primary)' }}>
          Course title
        </div>
        <div
          style={{
            fontSize: 'var(--font-size-200)',
            color: 'var(--color-text-tertiary)',
          }}
        >
          12 lessons · 2h 30m
        </div>
      </div>
      <Menu
        renderTrigger={({ open }) => (
          <Button
            size="sm"
            variant="ghost"
            iconOnly
            aria-label="More actions"
            iconRight={
              <Icon
                name={open ? 'MoreHorizontal' : 'MoreHorizontal'}
                size="sm"
                aria-hidden
              />
            }
          />
        )}
      >
        <Menu.Item>Rename</Menu.Item>
        <Menu.Item>Duplicate</Menu.Item>
        <Menu.Item>Archive</Menu.Item>
        <Menu.Divider />
        <Menu.Item variant="destructive">Delete</Menu.Item>
      </Menu>
    </div>
  ),
};

export const CheckboxItems = {
  render: () => {
    const [showCompleted, setShowCompleted] = useState(true);
    const [showDrafts, setShowDrafts] = useState(false);

    return (
      <Menu
        closeOnSelect={false}
        renderTrigger={({ open }) => (
          <Button
            size="sm"
            variant="secondary"
            iconRight={<Icon name={open ? 'ChevronUp' : 'ChevronDown'} size="sm" aria-hidden />}
          >
            Visible items
          </Button>
        )}
      >
        <Menu.CheckboxItem checked={showCompleted} onCheckedChange={setShowCompleted}>
          Show completed
        </Menu.CheckboxItem>
        <Menu.CheckboxItem checked={showDrafts} onCheckedChange={setShowDrafts}>
          Show drafts
        </Menu.CheckboxItem>
      </Menu>
    );
  },
};

export const RadioItems = {
  render: () => {
    const [sortBy, setSortBy] = useState('recent');

    return (
      <Menu
        renderTrigger={({ open }) => (
          <Button
            size="sm"
            variant="secondary"
            iconRight={<Icon name={open ? 'ChevronUp' : 'ChevronDown'} size="sm" aria-hidden />}
          >
            Sort by
          </Button>
        )}
      >
        <Menu.RadioItem
          checked={sortBy === 'recent'}
          onCheckedChange={() => setSortBy('recent')}
        >
          Recently updated
        </Menu.RadioItem>
        <Menu.RadioItem
          checked={sortBy === 'popular'}
          onCheckedChange={() => setSortBy('popular')}
        >
          Most popular
        </Menu.RadioItem>
        <Menu.RadioItem
          checked={sortBy === 'duration'}
          onCheckedChange={() => setSortBy('duration')}
        >
          Shortest duration
        </Menu.RadioItem>
      </Menu>
    );
  },
};

export const WithGroups = {
  render: () => (
    <Menu
      size="sm"
      matchTriggerWidth
      renderTrigger={({ open }) => (
        <Button
          size="sm"
          variant="secondary"
          iconRight={<Icon name={open ? 'ChevronUp' : 'ChevronDown'} size="sm" aria-hidden />}
        >
          More
        </Button>
      )}
    >
      <Menu.Group label="Course">
        <Menu.Item>View details</Menu.Item>
        <Menu.Item>Manage learners</Menu.Item>
      </Menu.Group>
      <Menu.Divider />
      <Menu.Group label="Danger zone">
        <Menu.Item variant="destructive">Delete course</Menu.Item>
      </Menu.Group>
    </Menu>
  ),
};

export const SizeVariants = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-200)',
      }}
    >
      <Menu
        size="sm"
        renderTrigger={({ open }) => (
          <Button
            size="sm"
            variant="secondary"
            iconRight={<Icon name={open ? 'ChevronUp' : 'ChevronDown'} size="sm" aria-hidden />}
          >
            Small menu
          </Button>
        )}
      >
        <Menu.Item>Rename</Menu.Item>
        <Menu.Item>Duplicate</Menu.Item>
        <Menu.Item variant="destructive">Delete</Menu.Item>
      </Menu>

      <Menu
        size="md"
        renderTrigger={({ open }) => (
          <Button
            size="md"
            variant="secondary"
            iconRight={<Icon name={open ? 'ChevronUp' : 'ChevronDown'} size="sm" aria-hidden />}
          >
            Medium menu
          </Button>
        )}
      >
        <Menu.Item>Rename</Menu.Item>
        <Menu.Item>Duplicate</Menu.Item>
        <Menu.Item variant="destructive">Delete</Menu.Item>
      </Menu>

      <Menu
        size="lg"
        renderTrigger={({ open }) => (
          <Button
            size="lg"
            variant="secondary"
            iconRight={<Icon name={open ? 'ChevronUp' : 'ChevronDown'} size="sm" aria-hidden />}
          >
            Large menu
          </Button>
        )}
      >
        <Menu.Item>Rename</Menu.Item>
        <Menu.Item>Duplicate</Menu.Item>
        <Menu.Item variant="destructive">Delete</Menu.Item>
      </Menu>
    </div>
  ),
};


export const SplitButton = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--space-075)' }}>
      <Button size="sm" variant="primary">
        Enrol learner
      </Button>
      <Menu
        renderTrigger={({ open }) => (
          <Button
            size="sm"
            variant="primary"
            iconOnly
            aria-label="More enrolment actions"
            iconRight={
              <Icon name={open ? 'ChevronUp' : 'ChevronDown'} size="sm" aria-hidden />
            }
          />
        )}
      >
        <Menu.Item>Enrol and send welcome email</Menu.Item>
        <Menu.Item>Enrol without email</Menu.Item>
        <Menu.Divider />
        <Menu.Item>Bulk enrol from CSV</Menu.Item>
      </Menu>
    </div>
  ),
};

export const ContextMenu = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-150)',
        }}
      >
        <div
          onContextMenu={(event) => {
            event.preventDefault();
            setOpen(true);
          }}
          style={{
            padding: 'var(--space-200)',
            borderRadius: 'var(--radius-100)',
            border: 'var(--border-width-100) solid var(--color-border-default)',
            background: 'var(--color-bg-elevated)',
            cursor: 'context-menu',
          }}
        >
          <div
            style={{
              fontSize: 'var(--font-size-300)',
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-050)',
            }}
          >
            Module 1 · Getting started
          </div>
          <div
            style={{
              fontSize: 'var(--font-size-200)',
              color: 'var(--color-text-tertiary)',
            }}
          >
            Right-click anywhere on this card to open the context menu.
          </div>
        </div>

        <Menu
          open={open}
          onOpenChange={setOpen}
          renderTrigger={({ open: isOpen }) => (
            <Button
              size="sm"
              variant="ghost"
              iconOnly
              aria-label="Module actions"
              style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
              iconRight={
                <Icon name={isOpen ? 'ChevronUp' : 'ChevronDown'} size="sm" aria-hidden />
              }
            />
          )}
        >
          <Menu.Item>Open module</Menu.Item>
          <Menu.Item>Mark as complete</Menu.Item>
          <Menu.Divider />
          <Menu.Item variant="destructive">Remove from course</Menu.Item>
        </Menu>
      </div>
    );
  },
};

export const LongMenu = {
  render: () => (
    <Menu
      renderTrigger={({ open }) => (
        <Button
          size="sm"
          variant="secondary"
          iconRight={<Icon name={open ? 'ChevronUp' : 'ChevronDown'} size="sm" aria-hidden />}
        >
          Long menu
        </Button>
      )}
    >
      {Array.from({ length: 20 }).map((_, index) => (
        <Menu.Item key={index + 1}>Item {index + 1}</Menu.Item>
      ))}
    </Menu>
  ),
};



