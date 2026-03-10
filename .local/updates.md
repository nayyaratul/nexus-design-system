# Nexus Design System — Updates & Decisions

## 2026-03-09

### Modal icon headers

- Modal header exposes an `icon` slot alongside `title` and `description` for contextual icons (info/success/warning/danger).
- Canonical pattern: optional icon to the left of the title; `variant` controls the frame colour, `icon` controls emphasis only.
- Docs and showcase updated to include an icon-header example and guidance to use icons sparingly for high-signal actions (e.g. irreversible deletes, critical alerts).

### Badge pill design aligned with Tag

- Badge pills use dedicated semantic tokens `--color-badge-{variant}-bg` and `--color-badge-{variant}-border`.
- Light theme: bg one shade lower than Tag (step 10: grey-10, green-10, etc.); dark theme: step 90 (grey-90, green-90, etc.).
- Pill variants get a 1px border like Tag; dot variant unchanged.
- BadgeShowcase updated to use design tokens throughout.

### Storybook & Chromatic CI

- Storybook is the component workbench for Nexus. Run `npm run storybook` locally to browse atoms/molecules/organisms in isolation at `http://localhost:6006`.
- Stories live next to components as `*.stories.@(js|jsx|ts|tsx)` and are already wired via `.storybook/main.ts`.
- Chromatic is the hosted Storybook + visual regression layer. It builds Storybook and publishes it to a Chromatic URL for sharing with designers and future sessions.
- Manual publish (rarely needed now): `npm run chromatic` (uses the `CHROMATIC_PROJECT_TOKEN` GitHub secret configured in the repo).
- CI workflow: `.github/workflows/chromatic.yml` runs on every push and PR to `main`. It checks out full git history (`fetch-depth: 0`), runs `npm ci`, then runs `npm run chromatic -- --exit-zero-on-changes --exit-once-uploaded`.
- `--exit-zero-on-changes` keeps GitHub Actions green even when there are visual diffs; review and accept/reject those diffs inside Chromatic’s UI instead of treating them as hard CI failures.
- `--exit-once-uploaded` lets CI stop waiting as soon as the upload finishes; Chromatic continues running visual tests and attaching results back to the build and PR.
- Source of truth for the hosted Storybook URL and individual build links is the Chromatic dashboard; do not commit `storybook-static/` to git.

### FormField pattern for field-like atoms

- **Pattern:** `FormField` owns the visible label, required marker, hint, error message, and `htmlFor` wiring; the field atom (e.g. `Input`, `FileInput`) owns the native control and must accept/forward `id`, `name`, and `aria-*` props to that control, plus an `error`/`invalid` prop that toggles `aria-invalid` and visual error state.
- **Canonical usage:** wrap any field-like atom in `FormField` with matching `htmlFor`/`id`, e.g. `<FormField label="Upload document" htmlFor="upload-document"><FileInput id="upload-document" name="document" /></FormField>`. Docs and Storybook should always use this as the default pattern.
- **Field-like atoms (current list):** `Input`, `Textarea`, `FileInput`, `Checkbox`, `RadioGroup`/`RadioItem`, `Select`/`SelectTrigger`, `Switch`, `Slider`, `RatingStar` (when used as a rating input), `Toggle`, `ToggleGroup` (when used as a segmented control), `Calendar` (when used as a date input).
- **Stories:** for each field-like atom, the default Storybook story should use the FormField pattern; any “primitive”/unwrapped stories must supply an accessible name via `aria-label` or `aria-labelledby` so axe’s “form label” rule passes.
- **Future package guidance:** when this repo is published as `@nexus/design-system`, the README should include a “FormField pattern for field-like atoms” section mirroring this contract so consuming apps consistently use `FormField + [Atom]` for labelled form fields.

## 2026-03-08

### Pill variant for Toggle and ToggleGroup

Added `variant="pill"` to the Toggle atom and ToggleGroup. Toggle: same colour behaviour as outline, shape uses `--radius-full` for a fully rounded pill. ToggleGroup: separate pills with gap (`--space-075`), each item fully rounded, no joining; colours match outline (transparent + border when off, primary fill when on). Use for filter bars and segmented controls (e.g. All / Assigned / Completed / Expired). No new token; uses existing `--radius-full`.

### Button shape prop

Added `shape` prop to the Button atom: `default` (radius-100), `rounded` (radius-200), `pill` (radius-full). All variants (primary, secondary, dash, destructive, ghost) combine with any shape. Implemented via `data-shape` and existing radius tokens; no new tokens.

---

### Molecules Implementation Plan

**Status:** 44/44 atoms complete. 2 molecules built (Dropzone, Table). ~43 molecules planned across 7 phases.

**Rules (carry forward from atoms):**
- One folder per molecule: `src/molecules/<Name>/` with `Name.jsx`, `Name.module.scss`, `Name.stories.jsx`
- Export in `src/molecules/index.js` (alphabetical)
- Nav entry in `src/layouts/Default.astro`
- Molecule card + count in `src/pages/molecules/index.astro`
- Doc page `src/pages/molecules/<name>.astro` and showcase `src/components/molecules/<Name>Showcase.jsx`
- SCSS modules + semantic tokens only; no raw hex/px/rem
- British English everywhere; URLs lowercase

#### Molecules build execution — phases & sessions

- **Execution strategy:** build molecules strictly **phase by phase** (Phase 1 → Phase 7) in the order defined below, and within each phase work **session by session**, where each session focuses on a very small, coherent slice (typically 1–2 molecules) so that a single AI session does not run out of context memory.
- **Per-session workflow (for any molecule):**
  - Define the public API and slots (props, variants, header/body/footer regions, etc.) and how it composes existing atoms.
  - Verify all dependent atoms exist and expose the right props; if an atom needs changes, log that work separately instead of expanding the current session.
  - Implement the molecule component and styling using semantic tokens only (no raw hex/px/rem), following the atoms rules above.
  - Add Storybook stories for defaults and key variants, plus a documentation page and showcase component on the doc site.
  - Wire the molecule into exports, navigation, and the `/molecules` index, then verify via Storybook and the Astro doc build.
- **Phase 1 sessions (Foundation molecules):**
  - Session 1 — `Card` + `EmptyState`
  - Session 2 — `Modal` + `ConfirmDialog` (ConfirmDialog composes Modal)
  - Session 3 — `Drawer` + `Breadcrumb`
  - Session 4 — `SearchInput` + `Menu`
  - Session 5 — `Rating` + `ListSkeleton`

---

#### Phase 1 — Foundation (app-wide primitives)
These are consumed by nearly every module. Build first.

| # | Molecule | Purpose | Atoms used |
|---|----------|---------|------------|
| 1 | **Card** | Generic container: header / body / footer slots, variants (elevated, outlined, flat) | Divider, Heading, Text |
| 2 | **EmptyState** | No-data / no-results: icon, title, description, optional CTA | Icon, Heading, Text, Button |
| 3 | **Modal** | Focused overlay panel: title, body, primary/secondary actions, ESC/click-outside close, focus trap | Overlay, Button, Heading, Text, Divider |
| 4 | **Drawer** | Slide-from-side/bottom panel (filters, options, compose) | Overlay, Button, Divider |
| 5 | **Breadcrumb** | Hierarchical navigation (Catalogue → Category → Course) | Link, Text, Icon (separator) |
| 6 | **SearchInput** | Search field with icon prefix and clear button | Input, Icon, Button |
| 7 | **Menu** | Action list from a trigger (context menus, overflow menus) | Popover, Menu atom items, Divider |
| 8 | **ConfirmDialog** | Yes/no confirmation (delete, submit, leave) — composes Modal | Modal, Button, Text |
| 9 | **Rating** | Interactive or read-only star rating (1–5) with optional label | RatingStar (×N), Text |
| 10 | **ListSkeleton** | Loading placeholder for any list/card layout | Skeleton (repeated) |

**Deliverables:** 10 molecules. These unlock all module-specific molecules.
**Already done:** Dropzone (11), Table (12) — built during atoms phase.

---

#### Phase 2 — Courses + Catalogue
First module vertical. High user traffic; most common UI patterns.

| # | Molecule | Purpose | Atoms used |
|---|----------|---------|------------|
| 13 | **CourseCard** | Course tile: image, title, meta (duration/level), progress, badge (New/Locked), CTA | Thumbnail, Heading, Text, ProgressBar, Badge, Button, Card |
| 14 | **CourseListItem** | Row view: thumbnail, title, duration, progress/status, actions | Thumbnail, Heading, Text, ProgressBar, Badge, Button, Icon |
| 15 | **ModuleSection** | Collapsible module with lesson list | Accordion, Link, Text, Icon |
| 16 | **LessonRow** | Single lesson: icon (play/lock/done), title, duration | Icon, Link, Text |
| 17 | **ProgressSummary** | "X% complete" bar with label | ProgressBar, Text, Heading (optional) |
| 18 | **FilterChips** | Active filters as dismissible chips + "Clear all" | Tag (dismissible), Button |
| 19 | **SortDropdown** | "Sort by: Newest / Popular / Duration" | Select or Popover, Menu |
| 20 | **CatalogueFilters** | Group of filters (category, level, duration) in row or Drawer | Select, Checkbox, ToggleGroup, Label, Drawer |

**Deliverables:** 8 molecules. Course discovery reuses CourseCard, SearchInput, EmptyState from Phase 1.

---

#### Phase 3 — Assessment + Survey
Timed exams, quizzes, surveys, Likert scales.

| # | Molecule | Purpose | Atoms used |
|---|----------|---------|------------|
| 21 | **QuestionCard** | One question: text + answer UI (radio/checkbox/input/textarea) | Card, Heading, Text, RadioGroup / Checkbox / Input / Textarea, FormField |
| 22 | **AssessmentTimer** | Visible countdown for timed assessments | Timer, Text, Alert (optional) |
| 23 | **AssessmentProgress** | "Question 3 of 10" step indicator | Steps or ProgressBar, Text |
| 24 | **SubmitBar** | Sticky footer: Submit + Previous/Next + optional warning | Button, Text, Alert (optional) |
| 25 | **SurveyQuestion** | Survey-specific question (same pattern as QuestionCard, survey styling) | FormField, Text, Heading, RadioGroup |
| 26 | **LikertScale** | Scale 1–5, "Strongly disagree → Strongly agree" | Slider or ToggleGroup, Label, Text |
| 27 | **SurveyProgress** | "Step 2 of 5" progress through survey | ProgressBar, Text, Steps (optional) |

**Deliverables:** 7 molecules.

---

#### Phase 4 — Chat + Messaging (Chatbot & 1:1 talks)
Chatbot and one-on-one messaging share most patterns.

| # | Molecule | Purpose | Atoms used |
|---|----------|---------|------------|
| 28 | **ChatBubble** | One message: avatar (optional), text, role (user/bot), timestamp | Avatar, Text, Badge (optional) |
| 29 | **ChatInput** | Compose: textarea + send + optional attachment | Textarea, Button, Icon, FileInput (optional) |
| 30 | **SuggestedChips** | Quick-reply options row | Tag or Button (row) |
| 31 | **TypingIndicator** | "Bot is typing…" with dot animation | Skeleton or Spinner, Text |
| 32 | **MessageBubble** | 1:1 message: avatar, text, read receipt / delivery status | Avatar, Text, Icon, Badge |
| 33 | **ConversationHeader** | Thread header: avatar, name, online status, overflow menu | Avatar, Heading, Text, Badge, Button, Menu |
| 34 | **MessageInput** | Same pattern as ChatInput (text + send + attach) | Textarea, Button, Icon, FileInput |

**Deliverables:** 7 molecules. MessageBubble/MessageInput may share base with ChatBubble/ChatInput (composition, not duplication).

---

#### Phase 5 — Profile + Notifications
User-facing settings, stats, and notification feeds.

| # | Molecule | Purpose | Atoms used |
|---|----------|---------|------------|
| 35 | **ProfileHeader** | Avatar, name, optional bio, edit button | Avatar, Heading, Text, Button |
| 36 | **ProfileStat** | One stat: value + label ("12 Courses completed") | Heading, Text |
| 37 | **SettingsRow** | One setting: label + control (switch/link) | Label, Switch or Link, Text |
| 38 | **EditableField** | Inline edit: label + value + edit/save/cancel | Label, Input / Textarea, Button, Text |
| 39 | **AvatarUpload** | Change profile photo (preview + upload) | Avatar, Button, FileInput / Dropzone |
| 40 | **NotificationItem** | One notification: icon/avatar, title, snippet, time, unread dot | Avatar / Icon, Text, Link, Badge (dot) |
| 41 | **NotificationGroup** | Date separator + list of NotificationItem | Divider, Text, NotificationItem (×N) |

**Deliverables:** 7 molecules.

---

#### Phase 6 — Feeds + Playlist
Social feed and media playlist patterns.

| # | Molecule | Purpose | Atoms used |
|---|----------|---------|------------|
| 42 | **FeedCard** | Feed item: author, time, content, optional media, actions (like/comment) | Avatar, Text, Link, Image (optional), Icon, Badge |
| 43 | **FeedFilters** | Tabs or toggles (All / Courses / Updates) | Tabs or ToggleGroup |
| 44 | **PlaylistItem** | One item: thumbnail, title, duration, order, play/pause state | Thumbnail, Text, Icon, Button (optional) |
| 45 | **PlaylistHeader** | Playlist title, meta (count, duration), actions | Heading, Text, Button, Icon |

**Deliverables:** 4 molecules.

---

#### Phase 7 — Reels + Data
Stories/reels overlay and advanced data patterns.

| # | Molecule | Purpose | Atoms used |
|---|----------|---------|------------|
| 46 | **ReelFrame** | Full-screen story: media + overlay (progress, CTA, close) | Image / AspectRatio, StoryProgress, Button, Text |
| 47 | **ReelOverlay** | Top bar: segment progress + close; bottom: optional CTA | StoryProgress, Button, Text |
| 48 | **DataTable** | Table + pagination + per-page selector + empty state | Table, Pagination, Select, EmptyState |

**Deliverables:** 3 molecules.

---

#### Dependency graph (key chains)

```
Overlay ──► Modal ──► ConfirmDialog
       └──► Drawer ──► CatalogueFilters
Popover ──► Menu ──► SortDropdown, ConversationHeader
RatingStar ──► Rating
Timer ──► AssessmentTimer
StoryProgress ──► ReelFrame, ReelOverlay
FileInput ──► Dropzone ✓, ChatInput, AvatarUpload
Table ✓ ──► DataTable
Card ──► CourseCard, QuestionCard, FeedCard
EmptyState ──► DataTable
SearchInput ──► (used standalone in Catalogue, Feeds)
```

#### Total molecule count: ~48 (including Dropzone + Table already built)
#### Estimated phase order priority: 1 → 2 → 3 → 4 → 5 → 6 → 7

---

### Brand page — The Scale section
- **Alignment:** Replaced separate flex rows with a shared 11-column grid for `.scale-strip` and `.scale-labels` so step numbers stay aligned with colour cells.
- **Hover:** Removed `flex: 2.4` on cell hover (it broke label alignment). Hover now uses `transform: scale(1.03)` and box-shadow only.
- **Responsive:** At 520px strip height reduced to 72px; at 400px the scale gets `overflow-x: auto` and `min-width: 440px` on strip and labels so both scroll together on very narrow viewports.
- **Visual:** Scale meta block given more padding and gap; labels use `white-space: nowrap` and slight letter-spacing; meta can wrap with `flex-wrap: wrap`.
- **Hex readability:** Scale cell hex values now appear in a small pill (padding, rounded corners) with opaque background (dark pill + white text on dark cells, light pill + dark text on light cells), 11px font, so they remain readable on every step.

### Brand page — Multi-Brand section
- **Select UX:** Section copy updated to “Click a card to apply that brand colour system-wide”. Each card is now a `<div>` with `role="button"`, `tabindex="0"`, and `aria-label="Apply [Name] brand"` (no nested buttons). Explicit “Apply this brand” label added under the hex.
- **Colour clarity:** Large primary swatch (`.mb-swatch`, 40px height) added at top of each card so the brand colour is obvious at a glance; mini scale retained below.
- **Active state:** Selected card shows a clear “In use” badge (top-right), brand-coloured focus ring (double ring: 2px brand + 2px page bg), and “Apply this brand” in brand colour. Initial active card synced from current `--brand-50` on load; keyboard (Enter/Space) supported.
- **Section order:** Brand colour selection moved to the top of the page (directly after the hero, above "The Scale") so users choose the palette first; section retitled to "Choose brand colour".

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

## 2026-03-07

### LMS ESS PWA — Pending Atoms and Molecules

- **Context:** Design system is being extended for an LMS ESS PWA (Courses, Assessment, Survey, Playlist, Catalogue, Feeds, Chatbot, 1:1 talks, Profile, Notifications, Reels).
- **Pending atoms (to implement):** Overlay (done), Timer (done), StoryProgress (done), Countdown (optional wrapper), FileInput, RatingStar, MenuItem, TableCell, TableRow.
- **Molecules (not yet implemented):** Foundation — Card, EmptyState, Modal, Drawer, Breadcrumb, Menu, SearchInput, ConfirmDialog, Rating, Dropzone, Table. Module-specific — CourseCard, CourseListItem, QuestionCard, AssessmentTimer, ChatBubble, ChatInput, NotificationItem, ReelFrame, DataTable, and others (see Molecules plan below).
- **Segregation:** Atoms = primitives only; molecules = composed patterns from atoms.

### Design Token Rules (Semantic → Primitive)

- **No hardcoded values** in components or showcases; use design tokens only.
- **Semantic tokens must reference primitives.** Chain: semantic → primitive(s).
- **Option A (chosen for overlay):** Semantic references primitives directly. E.g. `--color-bg-overlay` = `color-mix(in srgb, var(--grey-100) calc(var(--opacity-048) * 100%), transparent)` (light) and same with `--opacity-072` (dark). No new tokens; uses existing `--grey-100`, `--opacity-048`, `--opacity-072`.
- **Option B (alternative):** Introduce intermediate semantics (e.g. `--opacity-overlay`) that reference primitives; overlay then references only those semantics. Rejected for overlay in favour of Option A for simplicity.

### Overlay Atom

- **Implemented.** Presentational only; no built-in close or focus trap. Parent (e.g. Modal) controls visibility.
- Props: `visible`, `onClick` (optional), `className`, `...rest`. Root: `<div>`, fixed/inset 0, `background: var(--color-bg-overlay)`, `role="presentation"`, `aria-hidden="true"`.
- No Portal in the atom; Modal/Drawer molecules handle portalling.

### Timer Atom

- **Implemented.** Display-only; parent supplies `value` (seconds or string) and any countdown logic.
- **Default format:** `d: h: m` (e.g. `1d: 20h : 29m`). Also: `mm:ss`, `hh:mm:ss`.
- Props: `value`, `format`, `size` (sm/md/lg), `variant` (default/warning/danger). Typography: `var(--sans)`, `var(--font-weight-semibold)`, size/line-height tokens, variant colour tokens. A11y: `role="timer"`, `aria-live="polite"`, `tabular-nums`.
- Showcase and doc page use tokens only; no hardcoded px/rem for typography or spacing.

### Molecules Plan and Scope

- **Foundation / shared:** Card, EmptyState, Modal, Drawer, Breadcrumb, Menu, SearchInput, ConfirmDialog, Rating, Dropzone, Table.
- **By module:** CourseCard, CourseListItem, ModuleSection, LessonRow, ProgressSummary; QuestionCard, AssessmentTimer, AssessmentProgress, SubmitBar; SurveyQuestion, LikertScale, SurveyProgress; PlaylistItem, PlaylistHeader; FilterChips, CatalogueFilters, SortDropdown; FeedCard, FeedFilters; ChatBubble, ChatInput, SuggestedChips, TypingIndicator; MessageBubble, ConversationHeader, MessageInput; ProfileHeader, ProfileStat, SettingsRow, EditableField, AvatarUpload; NotificationItem, NotificationGroup; ReelFrame, ReelOverlay; DataTable, ListSkeleton.
- **Suggested build order:** (1) Foundation — Card, EmptyState, Modal, Breadcrumb, SearchInput, Menu, ConfirmDialog; (2) Courses + Catalogue; (3) Assessment + Survey; (4) Chat / messaging; (5) Profile + Notifications; (6) Reels; (7) Data.
- **Dependencies:** Modal/Drawer need Overlay; AssessmentTimer needs Timer; Rating needs RatingStar; Menu needs MenuItem; Dropzone needs FileInput; Table needs TableCell, TableRow; ReelFrame needs StoryProgress.

### StoryProgress Atom

- **Implemented.** Segmented progress indicator for reels/stories; consumed by ReelFrame; parent controls timing.
- Props: `segments`, `activeIndex`, `progress` (0–1 within active segment), `size` (xs/sm/md/lg), `variant` (default/subtle), `className`, `...rest`.
- Root: `role="progressbar"`, `aria-valuemin/valuemax/valuenow`, `aria-label` (e.g. "Segment 2 of 5, 40%").
- Tokens: track `--color-bg-secondary`, fill `--color-action-primary`, gap `--space-050`, heights `--space-025` (xs) through `--space-150` (lg), `--radius-full`. Fill transition: width 200ms ease-out.
- **Sizes:** xs (2px), sm, md, lg. **Variants:** default (solid); subtle (semi-transparent white for overlay — see below).

### Subtle Variant and 2px (xs) Size — StoryProgress and ProgressBar

- **Design goal:** Instagram-style progress bar — not distracting, works on dark gradient or any background (black/white). Semi-transparent so the bar is visible without strong colour.
- **Option chosen:** Option A — add `variant="subtle"` alongside existing default; do not replace default.
- **Height:** Instagram stories bar is very thin (reported 2–4px). Added **2px** as `size="xs"` using existing `--space-025` (no new tokens).
- **StoryProgress:** Added `variant="subtle"` and `size="xs"`. Subtle uses `color-mix(in srgb, var(--grey-0) calc(var(--opacity-032) * 100%), transparent)` for track and `--opacity-080` for fill. Root gets `styles[variant]` so `.subtle .segment` and `.subtle .fill` apply.
- **ProgressBar:** Added `size="xs"` (`.track-xs` = `var(--space-025)`). Tokenised all heights: sm/md/lg now use `--space-050`, `--space-100`, `--space-150`. Added `variant="subtle"`: Root gets `trackSubtle` (track background), Indicator gets `subtle` (fill); same color-mix as StoryProgress.
- **Tokens:** No new tokens. Primitives used: `--grey-0`, `--opacity-032`, `--opacity-080`, `--space-025`.
- **Usage:** For reels/stories overlays use `variant="subtle"` with `size="xs"` (2px) on both StoryProgress and ProgressBar. Showcase and Storybook include dark-background demos for visibility.

### Rules for Creating Atoms

- **Structure:** One folder per atom: `src/atoms/<Name>/` with `Name.jsx`, `Name.module.scss`, `Name.stories.jsx`. Export in `src/atoms/index.js` (alphabetically). Nav entry in `src/layouts/Default.astro`. Atom card and count in `src/pages/atoms/index.astro`. Doc page `src/pages/atoms/<name>.astro` and showcase `src/components/atoms/<Name>Showcase.jsx`.
- **Naming:** British English everywhere; URLs lowercase (e.g. `/atoms/overlay`).
- **Styling:** SCSS modules and semantic tokens only; no raw hex/px/rem in component SCSS or showcase inline styles. Semantic tokens must reference primitives.
- **Component:** Use `classnames` (cx), `className`, `...rest`; `forwardRef` when a DOM ref is needed. Accessibility: appropriate `role`, `aria-*`; complex a11y in molecules.
- **Storybook:** Default plus key variants (sizes, formats, states); use `var(--space-*)` for gaps in stories.
- **Anatomy / doc spec:** Prefer tokens for padding, font-size, font-weight in spec block. `.atom-spec-label` min-width 120px is doc-site convention (no token).
- **Verification:** Storybook shows stories; doc site shows card and page; lint clean; build succeeds.

## 2026-03-07

### Table components (TableCell, TableRow, TableHead + Table molecule)
- **Atoms:** TableRow (`<tr>`), TableCell (`<td>`, align, dense), TableHead (`<th>`, scope, align, dense). Token-only styling; border and padding from semantic tokens. Table header background: `--color-table-header-bg` (grey-10 light, grey-90 dark) in `tokens.scss`.
- **Molecule:** Table — scrollable wrapper (`overflow-x: auto`), optional `caption` and `dense` prop. TableHeader (thead), TableBody (tbody), TableFooter (tfoot), TableCaption exported. Dense reduces cell padding via wrapper class. Mobile: horizontal scroll; tables best on desktop; card-stack pattern deferred to DataTable.
- **Doc:** Showcases and anatomy blocks for all four; nav and atoms index updated (45 atoms); molecule page at `/molecules/table`.

### Upload File — Light and dark themes section
- **Upload File atom page** (`src/pages/atoms/fileinput.astro`): Added a "Light and dark themes" section at the bottom, above the footer.
- Section shows the same Upload File examples (default and with file chosen) side by side in light and dark theme using the existing `theme-split` and `theme-panel-side` layout from `components.css`.
- New helper component `ThemeUploadFileDemo` (`src/components/atoms/ThemeUploadFileDemo.jsx`) renders two FileInput instances for use inside each theme panel; each panel gets its own React root so tokens resolve correctly per `data-theme`.

### RatingStar atom
- **RatingStar** added as presentational atom: single star with states `filled`, `empty`, `half`. Sizes `sm`/`md`/`lg` map to `--font-size-400`/`--font-size-500`/`--font-size-600`. Colours: `--color-text-warning` (filled), `--color-text-tertiary` (empty); disabled uses `--opacity-048`. No hardcoded values in SCSS.
- **Blade token alignment:** RatingStar `md` size uses `--font-size-500` (20px), matching Blade’s `rateStarSize: 20` in `Tokens/Default/*.tokens.json`. Future token pipelines that emit Blade tokens to CSS can alias `--rating-star-size` to `--font-size-500` if desired.

### RatingStar — refinements and doc page
- **Filled colour:** Introduced semantic token `--color-rating-filled` in `tokens.scss` (light and dark), set to `var(--yellow-20)` as the standard exception for a brighter star. Replaced `--color-text-warning` in RatingStar SCSS.
- **Sizes:** Extended to five sizes to match Icon: `xs`/`sm`/`md`/`lg`/`xl` using `--font-size-200`/`400`/`500`/`600`/`800`. Stories, showcase, and anatomy spec updated.
- **Showcase layout:** Hero block (5 stars at xl), card-style sections with `blockStyle` (padding, border, radius tokens), staggered fade-in animation (with `prefers-reduced-motion`). Theme comparison made responsive via `.theme-comparison` from `components.css`.
- **Token-only audit:** Replaced hardcoded values with project tokens: border width, font-weight, letter-spacing, space, anatomy row padding/radius in `ratingstar.astro`; `RatingStarShowcase` uses `--font-weight-medium`/`--font-weight-semibold`, `--letter-spacing-wide`, `--border-width-100`, `--space-*` throughout. Remaining exceptions: transition duration in SCSS, one letter-spacing (0.08em), animation timings, doc convention min-width.
- **Padding and consistency:** Block padding set to `var(--space-250)`; anatomy rows use `var(--space-125)`/`var(--space-200)`. Theme comparison section aligned with Button/Switch: no outer card, section label "Theme Comparison", panels with `padding: var(--space-250)`, `borderRadius: var(--radius)`, "LIGHT"/"DARK" labels.
- **Gap between containers:** Gap between showcase sections applied inline on the showcase root (`display: flex`, `flexDirection: column`, `gap: var(--space-300)`) so spacing is reliable regardless of page scoped CSS.
