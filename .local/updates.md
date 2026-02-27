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

## 2026-02-25

### Typography System
- **Font stack:** Inter only (single-font system)
  - Inter chosen for screen optimisation, optical sizing, tall x-height
  - No monospace in the design system — the product does not display code
  - Doc site uses JetBrains Mono internally for token/code rendering (not a design system token)
  - Fraunces kept for doc-site headings only
- **Scale type:** Pragmatic grid-aligned (not modular), aligned with Material Design 3, Shopify Polaris, GitHub Primer
  - Increment pattern: +2px (10–16), +4px (16–32), +8px (32–48)
- **14px base** body size (matches Ant Design, M3 Body Medium)
- **10 primitive size tokens** (100–1000): 10, 12, 14, 16, 20, 24, 28, 32, 40, 48px
- **Line-heights on 4px grid:** 12, 16, 20, 24, 28, 32, 36, 40, 48, 56px
- **3 weights:** Regular 400, Medium 500, Semi-bold 600
- **4 letter-spacing values:** wide (+0.02em), normal (0), tight (−0.01em), tighter (−0.02em)
- **~19 semantic text styles** across 4 tiers: Caption (micro, caption), Body (body, body-lg + weight variants), Title (title-sm through heading), Display (display-sm, display-lg + weight variants)
- **Token architecture:** Primitive → Semantic → Component (component deferred)
  - Primitives: raw numbered values, no usage opinion
  - Semantic: full compositions (size + lh + weight + tracking), weight variants where needed
- **Units:** All values in rem; root stays at browser default 16px
- **Mobile note:** micro (10px) should be avoided on small viewports; use caption (12px) minimum
- **M3 alignment verified:** body 14/20, body-lg 16/24, title-md 24/32, title-lg 28/36, heading 32/40 are exact M3 matches

### Design Token Naming Standard
- **Established canonical naming standard** — persisted as `.cursor/rules/token-naming.mdc`
- **Three-tier hierarchy:** Primitive → Semantic → Component (strict layering, no skipping)
- **Primitive naming:** `[color]-[shade]`, `space-[scale]`, `font-size-[scale]`, `radius-[scale]`, `shadow-[scale]`
- **Semantic naming:** `[category]-[property]-[variant]` (e.g. `color-text-primary`, `color-border-error`)
- **Component naming:** `[component]-[variant]-[property]-[state]` (e.g. `button-primary-background-hover`)
- **Colour scale:** 0–100 in 11 steps; 0 = lightest, 50 = midpoint, 100 = darkest
- **Theming via symmetry:** Step N light = Step (100−N) dark for matched WCAG contrast
- **Reference chains:** max depth 4, ideal is `component → semantic → primitive`
- **Rejected patterns:** no appearance-encoding (`red-text`, `bg-white`), no theme identifiers in names

### Typography Nomenclature Alignment
- **Audited all typography tokens** against the naming standard — found 5 issues, fixed all
- **CSS primitives renamed:** `--fs-*` → `--font-size-*`, `--lh-*` → `--line-height-*`, `--fw-*` → `--font-weight-*`, `--ls-*` → `--letter-spacing-*`
- **JSON keys converted** from camelCase to kebab-case (`fontSize` → `font-size`, etc.)
- **Semantic tokens prefixed** with `typography-` category (e.g. `body` → `typography-body`, `caption` → `typography-caption`)
- **`heading` renamed to `title-xl`** — restores consistent size progression: title-sm → title-md → title-lg → title-xl
- **Weight variants renamed** to purpose-oriented names:
  - `-medium` variants → `-emphasis` (Medium 500 = subtle emphasis)
  - `-semibold` variants → `-strong` (Semibold 600 = strong emphasis)
  - e.g. `body-medium` → `typography-body-emphasis`, `display-sm-semibold` → `typography-display-sm-strong`

### Responsive Typography Page
- **Two breakpoints added** — 900px (tablet) and 640px (phone)
- **layout.css** at 640px: tighter padding (16px), smaller page title (28px)
- **components.css** at 900px: font cards and usability grid collapse to single column, section headers wrap
- **components.css** at 640px:
  - Primitive scale table: horizontal scroll with 620px min-width (preserves tabular layout)
  - Weight & letter-spacing grid: collapses to single column
  - Mini rows: flex-wrap for narrow viewports
  - Semantic specimens: stack meta above preview (column layout)
  - Type ramp: stack label above preview text
- **CSS-only** — no markup changes needed

### Line-Height Strategy & New Title Tokens
- **Documented line-height-per-tier principle** on the typography page (info-box in Semantic Text Styles section)
  - Body: generous (1.43–1.50×) — optimised for multi-line reading
  - Title: compact (1.14–1.40×) — tighter leading for scannable headings
  - Caption: moderate (1.20–1.33×) — legible at small sizes
  - Display: tightest (1.17–1.20×) — large text needs minimal leading
- **Key design rule:** where body and title share a font size, line-height is the differentiator
- **Added two new title tokens** to cover 14px and 16px title use cases:
  - `typography-title-2xs`: 14/16 (1.14×), Medium 500 — compact list headings, nav labels
  - `typography-title-xs`: 16/20 (1.25×), Medium 500 — sidebar headings, small section labels
  - Both reuse existing primitives (font-size-300/400, line-height-200/300) — no new primitives needed
- **Semantic style count:** 19 → 21

### Doc Site Readability Bump
- **Problem:** doc site's own UI used 9–12px for most readable content despite defining 14px as the design system's body base
- **Principle:** readable prose (info-boxes, descriptions, usage notes) needs ≥14px; compact chrome (uppercase labels, monospace data, badges) can stay smaller
- **Changes in layout.css:**
  - `.nav-link` 13→14px, `.nav-child-link` 12→13px, `.page-sub` 12→13px
  - `.sidebar-brand span` 10→11px, `.nav-group-title` 9→10px, `.footer` 10→11px
- **Changes in components.css:**
  - `.info-box` 12→14px (primary reading content)
  - `.section-desc` 11→13px, `.type-specimen-use` 11→13px
  - `.type-specimen-token` 12→13px, `.type-mini-row` 13→14px
  - `.legend-item` 11→12px, `.ts-info` 9→11px, `.placeholder-text` 14→15px
  - `.type-specimen-meta` width 280→300px (accommodates larger text)
- **Unchanged (compact chrome):** monospace table data (11px), uppercase section/group labels (10px), badge text (9px), ramp labels (10px), specimen specs (10px)

### Colours Page — Data-Driven Refactor & Contrast Ratio Tooltips
- **Refactored `colours.astro` to data-driven architecture** — matches the pattern established on the typography page
  - 7 colour scales defined as frontmatter arrays (name, description, hex values)
  - `buildScale()` computes WCAG 2.x contrast ratios at build time against #FFFFFF and #080808
  - Template uses `.map()` loops — replaced ~230 lines of repetitive markup with ~25 lines of loop
  - Single source of truth: change a hex value → swatch, badge class, and ratio all update automatically
- **Added contrast ratio hover tooltips on badge cells**
  - `data-ratio` attribute on each badge cell (e.g. `data-ratio="4.61:1"`)
  - CSS `::after` pseudo-element with `position: absolute` — dark chip tooltip appears below on hover
  - No layout shift — tooltip is absolutely positioned with `opacity` transition
  - `z-index: 10` on hovered cell ensures first-row tooltips render above second badge-row
  - ~15 lines of CSS added to `components.css`
- **Legend updated:** "Hover a step to expand" → "Hover swatches & badges for details"
- **Contrast ratio corrections in Button Text section** — recalculated with standard WCAG algorithm:
  - NG50 vs #FFFFFF: 4.58 → 4.61 (still AA)
  - NG30 vs #080808: 8.83 → 8.42 (still AAA)
  - NG40 vs #080808: 6.82 → 6.11 (still AA)
  - NG50 vs #080808: 4.58 → 4.35 (reclassified from AA to AA Lg — was incorrectly marked as passing AA)

### Grid Page — Visual & Content Overhaul
- **Overview section enhanced:**
  - 12-column diagram now shows numbered columns (1–12) with alternating tint for visual rhythm
  - Added a **breakpoint reference table** (xs through xxl) with class infix, min-width, container max-width, and typical device columns — always visible, not buried in accordions
- **House rules:** added "When _not_ to use the grid" guidance (flexbox/component CSS for micro layout)
- **Column system & nesting:**
  - Added **offset documentation** with visual diagram showing `offset-3` pushing a 6-wide column to centre
  - Enhanced nested grid diagram with labelled regions ("outer col", "col")
- **Breakpoints & SCSS mixins:**
  - Breakpoint ruler bands now display labels (xs, sm, md, lg, xl, xxl / mobile, tablet, desktop)
  - Added **row alignment utilities** reference (align-items-*, justify-content-*)
- **Containers:** diagram enhanced with "content" labels and dashed viewport edge markers
- **Gutters:** added monospace gap-size annotations below each diagram (gap: 0.25rem / gap: 3rem)
- **Layout recipes — major overhaul:**
  - Thumbnails increased from 28px to 44–48px height with labelled regions (main·7, rail·4, card, form, avatar/body/meta)
  - Added distinct accent colours (blue for rail/meta blocks)
  - Added **responsive behaviour mini-tables** per recipe showing breakpoint × layout mapping
  - Added **copy-paste JSX code snippets** (dark code blocks) for dashboard, card stack, form, assessment, and profile recipes
- **Common mistakes:** replaced plain bullet list with **side-by-side do/don't comparison cards** — pink "DON'T" header on left, green "DO" header on right, with styled inline code
- **Accessibility & readable widths — major overhaul:**
  - Text-width diagrams now stay side-by-side until 640px (removed from 900px collapse)
  - Added "AVOID" / "RECOMMENDED" badge tags above each diagram; colour-tinted borders (red/green) and captions
  - Text lines now vary in width (6 lines per diagram) to simulate real paragraph flow; captions include character counts ("~120+ characters per line" vs "~45–75 characters per line")
  - Added **"The 45–75 rule" info-box** — typographic rationale for optimal line length, translated to 520–700px at 14px body size
  - Added **readable-width reference table** (content type × grid columns × max-width × characters per line) for body text, forms, headings, dashboards
  - Expanded bullets: added "Mobile exception" (45–75 applies at md+), "Touch targets" (WCAG 2.5.5, 44×44px on collapsed grids)
- **CSS additions:** ~250 lines of new component styles in `components.css` — breakpoint table, code blocks, do/don't cards, responsive mini-tables, offset diagram, layout thumb labels, gutter labels, container labels, text-width badges/tags (AVOID/RECOMMENDED), readable-width reference table
- **Responsive:** do/don't grid collapses to single column at 640px; breakpoint table scrolls horizontally at 900px
- **Bugfix:** corrected the JSX example for the centred assessment / exam card to remove a duplicate `md` prop (`Col xs={12} md={8} lg={6} xl={4}`), ensuring the documented snippet is valid and copy-pasteable.

### Spacing System
- **Full spacing guide** implemented at `/spacing`
- **Base unit:** 4px. Scale from 2px to 80px with pragmatic exceptions at 6px and 10px
- **15 primitive tokens** (`--space-025` through `--space-1000`): 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64, 80px
- **Pragmatic tokens:** space-075 (6px) and space-125 (10px) for existing product patterns — not on 4px grid
- **Page sections:** Overview, Primitive scale table, Scale preview (visual), Usage categories, Bootstrap alignment, Layout patterns, Implementation (CSS/SCSS), Pragmatic tokens note
- **Tokens in base.css** and `src/tokens/spacing.json`
- **Borders & Dividers** — placeholder page created for future work (separate from spacing)

### Code Review Fixes
- **styling.mdc:** corrected monospace font from "DM Mono" to "JetBrains Mono" to match `base.css`.
- **Colours page — info-box:** simplified redundant wording ("Step 50 (Grey/Red/Green/Blue) or Step 50 (Yellow)" → "Step 50").
- **Colours page — Button Text section:** refactored to data-driven from `scales`; added `buttonTextSamples` and `getButtonTextRow()`; replaced ~150 lines of hardcoded markup with loops.
- **components.css:** merged duplicate `.badge-cell` rules into single block.

### UI Fixes & Polish
- **Colours page — dark theme panel:** added `background: #111110` to `.theme-panel.dark` so empty space at the bottom (when grid stretches columns) uses dark background instead of light page background.
- **Colours page — Button Text section visibility:** dark theme metadata (labels, hex/ratio) was nearly invisible (#555, #444 on black). Updated to `#9A9A9A` and `#8E8E8E`; added `font-weight: 500` to `.ts-label` and `.ts-info` for both themes.
- **Typography page — Weight & Letter Spacing:** Font Weight (3 rows) and Letter Spacing (4 rows) containers had mismatched heights. Added `align-items: stretch` to `.type-dual-grid`, flex column layout on grid items, and `flex: 1` on `.type-mini-table` so both containers match height.
