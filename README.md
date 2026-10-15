# Nexus Design System

A design system documentation site built with [Astro](https://astro.build). Covers foundations (colours, typography, spacing, grid) and components (atoms, molecules, organisms) following Atomic Design principles.

## Getting Started

```bash
npm install
npm run dev
```

Dev server runs at `http://localhost:4321`.

## Structure

```
src/
  layouts/       Shared page shell with sidebar navigation
  pages/         One .astro file per section (file-based routing)
  styles/        base.css · layout.css · components.css
  tokens/        Design token values as JSON (source of truth)
  components/    Reusable Astro components
.local/          Internal docs, decision log (updates.md)
.cursor/rules/   AI coding conventions for this project
```

## Figma

The Nexus 3.0 Figma library ([open in Figma](https://www.figma.com/design/jkpCTJ7uuwomi9SDhIIIDD/Nexus-System-3.0)) mirrors this repo: variables for every token, a component for every atom and molecule, Storybook links on every story (Design panel) and Code Connect mappings in `src/figma/connect`. See [docs/figma.md](docs/figma.md).

## Sections

**Foundations** — Colours, Typography, Spacing, Grid

**Components** — Atoms, Molecules, Organisms

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Conventions

- British English throughout (display text, URLs, filenames)
- Design tokens stored as JSON, referenced via CSS custom properties
- Consistent page structure: shared layout, `page-title` / `page-sub` pattern
- Fonts: DM Mono (monospace), Fraunces (serif) via Google Fonts
