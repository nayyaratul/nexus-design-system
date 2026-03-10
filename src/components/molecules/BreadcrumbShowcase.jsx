import { Breadcrumb } from '../../molecules/Breadcrumb/Breadcrumb';
import { Icon } from '../../atoms/Icon/Icon';

const sectionTitleStyle = {
  fontFamily: 'var(--sans)',
  fontSize: 'var(--font-size-200)',
  fontWeight: 500,
  color: 'var(--color-text-tertiary)',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  margin: '0 0 var(--space-150) 0',
};

export function BreadcrumbShowcase() {
  const cataloguePath = [
    { href: '/', icon: <Icon name="Home" />, ariaLabel: 'Home' },
    { href: '/catalogue', label: 'Catalogue' },
    { href: '/catalogue/design-systems', label: 'Design systems' },
    { href: '/catalogue/design-systems/nexus', label: 'Nexus' },
  ];

  const longPath = [
    { href: '/', label: 'Home' },
    { href: '/level-1', label: 'Level 1' },
    { href: '/level-2', label: 'Level 2' },
    { href: '/level-3', label: 'Level 3' },
    { href: '/level-4', label: 'Level 4' },
    { href: '/level-5', label: 'Level 5' },
    { href: '/level-6', label: 'Level 6' },
    { href: '/level-7', label: 'Level 7' },
  ];

  return (
    <div
      className="breadcrumb-showcase"
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-400)' }}
    >
      <section className="showcase-section" style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 className="showcase-section__title" style={sectionTitleStyle}>
          Catalogue hierarchy
        </h3>
        <Breadcrumb items={cataloguePath} size="md" />
      </section>

      <section className="showcase-section" style={{ display: 'flex', flexDirection: 'column' }}>
        <h3 className="showcase-section__title" style={sectionTitleStyle}>
          Long path with scroll
        </h3>
        <Breadcrumb items={longPath} size="sm" scrollBehavior="scroll" />
      </section>

    </div>
  );
}

