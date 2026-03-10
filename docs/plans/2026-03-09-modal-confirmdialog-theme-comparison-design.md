# Modal & ConfirmDialog Theme Comparison — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Simplify the Modal and ConfirmDialog dark/light theme comparison sections to use a consistent two-panel layout that mirrors the EmptyState pattern, making it easier to see the same dialog design across themes without duplicating desktop/mobile previews.

**Architecture:** Keep the existing `theme-comparison` layout and theme tokens, but replace the nested desktop/mobile mock-ups with a single static dialog surface per theme inside each panel. Each panel renders one light or dark card using the same heading, body copy, and actions, with small “LIGHT”/“DARK” labels above, matching the structure used in `EmptyStateShowcase`.

**Tech Stack:** Astro doc site, React showcase components in `src/components/molecules`, SCSS utilities in `components.css` for `.theme-comparison`, semantic tokens from `tokens.scss`.

---

### Task 1: Simplify Modal theme comparison section

**Files:**
- Modify: `src/components/molecules/ModalShowcase.jsx`

**Steps:**

1. Locate the `Theme comparison` section at the bottom of `ModalShowcase` and remove the nested “Desktop” / “Mobile” sub-previews inside each theme panel.
2. Keep the outer `.theme-comparison` container, but reduce each panel to:
   - A “LIGHT” or “DARK” label using typography and spacing tokens (`font-size-100`, `color-text-secondary/tertiary`, `space-150`, `letter-spacing-wide`).
   - A single static card representing the modal surface (`background: var(--color-bg-elevated)`, `border-radius: var(--radius-150)`, `border: var(--border-width-100) solid var(--color-border-default)`, `padding: var(--space-250)`).
   - Inside the card: title “Invite learners”, short description, a faux close button using the `X` icon, and a right-aligned footer row with “Cancel” (ghost) and “Send invites” buttons.
3. Ensure the light and dark cards use identical structure and spacing, differing only by tokens resolved via `data-theme="light"` / `"dark"`.
4. Run the component through Storybook and the Astro docs build to confirm the layout looks correct at different widths.

---

### Task 2: Simplify ConfirmDialog theme comparison section

**Files:**
- Modify: `src/components/molecules/ConfirmDialogShowcase.jsx`

**Steps:**

1. Locate the `Theme comparison` section at the bottom of `ConfirmDialogShowcase` and delete the nested “Desktop” / “Mobile” sub-previews in each theme column.
2. As with Modal, keep the `.theme-comparison` wrapper and replace each panel with:
   - A “LIGHT” or “DARK” label row using design tokens (same pattern as Task 1).
   - A single static confirm dialog card with title “Delete Course”, description “Learners will lose access and progress.”, optional faux close button, and a right-aligned footer row showing “Cancel” (ghost) and “Delete” (destructive) buttons.
3. Ensure both light and dark panels share identical markup and inline styles aside from token values, so the only visible difference comes from the theme, not structure.
4. Verify in Storybook and the doc page that the comparison clearly shows the same destructive confirm pattern in both themes without extra breakpoint labels.

---

### Task 3: Lint and visual regression checks

**Files:**
- `src/components/molecules/ModalShowcase.jsx`
- `src/components/molecules/ConfirmDialogShowcase.jsx`

**Steps:**

1. Run the project linter (or relevant JSX/TSX lint command) scoped to the two updated files and fix any issues introduced by the refactor.
2. Run Storybook (`npm run storybook`) and visually inspect the Modal and ConfirmDialog stories, focusing on the Theme comparison sections at various viewport widths.
3. If Chromatic is in use for this branch, run `npm run chromatic` (or rely on CI) and review any visual diffs for the Modal and ConfirmDialog stories, confirming that changes are limited to the theme comparison sections and are intentional.

