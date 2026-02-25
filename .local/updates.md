# Nexus Design System — Updates & Decisions

## 2025-02-25

### Project Scaffolding
- Chose **Astro** as the framework for the design system documentation site
  - Reasons: built-in layouts, file-based routing, component support, zero JS output by default
  - Alternative considered: Vite multi-page app (rejected — requires plugins for layouts/partials)
- Set up project structure with `src/styles/`, `src/layouts/`, `src/pages/`, `src/tokens/`

### Architecture Decisions
- **Shared layout with sidebar** — single `Default.astro` layout wraps every page with consistent navigation
- **CSS split into three layers:**
  - `base.css` — reset, CSS variables, font imports
  - `layout.css` — sidebar, page shell, responsive breakpoints
  - `components.css` — reusable UI pieces (scales, badges, theme panels, placeholders)
- **Design tokens stored as JSON** (`src/tokens/colors.json`) — single source of truth for all colour values, can later generate CSS variables or platform-specific outputs
- **Atomic Design hierarchy** for components: Atoms → Molecules → Organisms

### Naming
- Using **British English** everywhere — display text and URLs (e.g. `/colours` not `/colors`)

### Pages Created
- **Overview** (`/`) — landing page with card grid linking to all sections
- **Colours** (`/colours`) — full colour reference migrated from original `nexus_color_reference.html`
- **Typography** (`/typography`) — placeholder, marked "Up Next"
- **Spacing** (`/spacing`) — placeholder
- **Grid** (`/grid`) — placeholder
- **Atoms** (`/atoms`) — placeholder
- **Molecules** (`/molecules`) — placeholder
- **Organisms** (`/organisms`) — placeholder

### Colour System
- 7 OKLCH-based scales: Neutral Grey, Cool Grey, Warm Grey, Red, Green, Yellow, Blue
- 11 steps per scale (0–100), 77 tokens total
- WCAG contrast verified for both light (#FFFFFF) and dark (#080808) backgrounds
- Includes button text usability table at 14px
