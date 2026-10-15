# Figma ⇄ Storybook ⇄ GitHub

The Nexus 3.0 Figma library mirrors this repository 1:1.

| | Where |
|---|---|
| Figma library | [Nexus System 3.0](https://www.figma.com/design/jkpCTJ7uuwomi9SDhIIIDD/Nexus-System-3.0) |
| Storybook | [Chromatic, `main`](https://main--69ae77fa398420fbe01a9f0a.chromatic.com/) |
| Tokens | `src/styles/tokens.scss` (semantic) · `src/styles/base.css` (primitives) |

## What's in the Figma file

- **Variables** (284, 7 collections). Every variable carries WEB code syntax that matches the CSS custom property.
  - `Primitives`: grey, cool, warm, red, green, yellow, blue and purple, 0–100. These are hidden from pickers.
  - `Brand` (Ocean Blue / Purple modes) → `--brand-*`
  - `Color` (Light / Dark modes) → `--color-*`, `--tooltip-*`
  - `Spacing` → `--space-*`, `Shape` → `--radius-*`, `--border-width-*`, `--opacity-*`, `Size` → `--size-*`, `Typography` → `--font-size-*`, `--line-height-*`, `--font-weight-*`, `--letter-spacing-*`
- **Styles**: 20 text styles (`typography-*`, with size and line-height bound to variables) and 10 effect styles (`--shadow-100…400`, layered elevation, focus ring).
- **Components**: 73 component sets with 948 variants, plus 82 Lucide icon components. Fills, strokes, padding, gaps and radii are bound to variables.

## Links between the three

- **Figma → Storybook / GitHub**: each component set has a Storybook documentation link, and its description lists the Storybook URL, the GitHub source path and the React component. Each component page header has clickable Storybook and GitHub chips.
- **Storybook → Figma**: `src/figma/figmaLinks.js` maps each Storybook title to its Figma node. Every story's default export sets `parameters.design`, so the **Design** panel (`@storybook/addon-designs`) opens the matching Figma component.
- **Code → Figma (Code Connect)**: `src/figma/connect/*.figma.jsx` maps Figma variants and properties to React props. These files are configured in `figma.config.json`.

```bash
npm run figma:connect:parse      # validate the mappings locally
FIGMA_ACCESS_TOKEN=… npm run figma:connect:publish   # after the library is published in Figma
```

Publishing Code Connect needs the Figma library to be published first (Assets → Publish library) and a token with Code Connect write scope.

## Keeping them in sync

1. Change the component in `src/atoms` or `src/molecules` and its story.
2. Update the matching Figma component. Use the same names, the same variant values and tokens only.
3. If a node ID changes, update `src/figma/figmaLinks.js`. If props change, update the `*.figma.jsx` mapping.
4. Add an entry to the Figma **Changelog** page.
