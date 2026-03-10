import { useState } from 'react';
import { Drawer } from '../../molecules/Drawer/Drawer';
import { Button } from '../../atoms/Button/Button';
import { Text } from '../../atoms/Text/Text';
import { FormField } from '../../atoms/FormField/FormField';
import { Input } from '../../atoms/Input/Input';
import styles from '../../molecules/Drawer/Drawer.module.scss';

const sectionTitleStyle = {
  fontFamily: 'var(--sans)',
  fontSize: 'var(--font-size-200)',
  fontWeight: 500,
  color: 'var(--color-text-tertiary)',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  margin: '0 0 var(--space-150) 0',
};

export function DrawerShowcase() {
  const [openFilters, setOpenFilters] = useState(false);
  const [outerOpen, setOuterOpen] = useState(false);
  const [innerOpen, setInnerOpen] = useState(false);

  return (
    <div
      className="drawer-showcase"
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-400)' }}
    >
      <section className="showcase-section" style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 className="showcase-section__title" style={sectionTitleStyle}>
          LMS ESS drawer
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-150)' }}>
          <Text variant="body" size="sm" color="var(--color-text-secondary)">
            Side drawer for Employee Self Service in the LMS PWA – update learner profile and
            preferences without leaving the current screen.
          </Text>
          <Button onClick={() => setOpenFilters(true)}>Open drawer</Button>
        </div>

        <Drawer
          open={openFilters}
          onOpenChange={setOpenFilters}
          placement="end"
          size="md"
          title="Employee self-service"
          subtitle="Review and update ESS details for this learner."
          footer={
            <>
              <Button variant="ghost" onClick={() => setOpenFilters(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpenFilters(false)}>Save changes</Button>
            </>
          }
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-250)',
              paddingTop: 'var(--space-250)',
            }}
          >
            <div>
              <Text variant="body" size="md">
                Priya Singh · EMP-2048
              </Text>
              <Text variant="body" size="sm" color="var(--color-text-secondary)">
                Learning &amp; Development · Bengaluru
              </Text>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-150)',
              }}
            >
              <FormField label="Notification email" htmlFor="drawer-ess-email">
                <Input
                  id="drawer-ess-email"
                  type="email"
                  placeholder="name@company.com"
                />
              </FormField>
              <FormField label="Preferred learning mode" htmlFor="drawer-ess-mode">
                <Input
                  id="drawer-ess-mode"
                  placeholder="e.g. Self-paced, Virtual classroom"
                />
              </FormField>
              <FormField label="Primary skill focus" htmlFor="drawer-ess-skill">
                <Input
                  id="drawer-ess-skill"
                  placeholder="e.g. Leadership, Product management"
                />
              </FormField>
            </div>
          </div>
        </Drawer>
      </section>

      <section className="showcase-section" style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 className="showcase-section__title" style={sectionTitleStyle}>
          Stacked drawer
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-150)' }}>
          <Text variant="body" size="sm" color="var(--color-text-secondary)">
            Second drawer that stacks on top of the first, shrinking the first drawer slightly and
            returning it when the top drawer is dismissed.
          </Text>
          <Button onClick={() => setOuterOpen(true)}>Open stacked drawer</Button>
        </div>

        {/* First (outer) drawer */}
        <Drawer
          open={outerOpen}
          onOpenChange={(next) => {
            setOuterOpen(next);
            if (!next) {
              setInnerOpen(false);
            }
          }}
          placement="end"
          size="md"
          hasBackdrop={!innerOpen}
          title="Vendor payment details"
          subtitle="See your payment details here."
          className={innerOpen ? styles.stackedBehind : undefined}
          footer={
            <Button variant="ghost" onClick={() => setOuterOpen(false)}>
              Close
            </Button>
          }
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-150)',
            }}
          >
            <Text>Drawer heading</Text>
            <Button onClick={() => setInnerOpen(true)}>Open 2nd drawer</Button>
          </div>
        </Drawer>

        {/* Second (inner) drawer */}
        <Drawer
          open={innerOpen}
          onOpenChange={setInnerOpen}
          placement="end"
          size="md"
          title="Confirm payout"
          subtitle="Review vendor details before confirming the payout."
          footer={
            <>
              <Button variant="ghost" onClick={() => setInnerOpen(false)}>
                Back
              </Button>
              <Button onClick={() => setInnerOpen(false)}>Confirm payout</Button>
            </>
          }
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-150)',
              paddingTop: 'var(--space-250)',
            }}
          >
            <Text size="md" color="var(--color-text-primary)">
              Clicking the dark overlay or the buttons above closes this second drawer and brings
              the first drawer back to the front.
            </Text>
          </div>
        </Drawer>
      </section>
    </div>
  );
}

