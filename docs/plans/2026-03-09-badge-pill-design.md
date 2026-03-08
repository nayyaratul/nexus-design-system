# Badge Pill Design Update — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Update the Badge atom so pill variants use a dedicated background token set aligned with Tag, with light-theme backgrounds one shade lower (darker) than Tag’s for clearer separation.

**Architecture:** Mirror the Tag token pattern in `tokens.scss`: introduce `--color-badge-*-bg` (and optionally `--color-badge-*-border`) semantic tokens. Light theme uses step 10 for bg (Tag uses step 0); dark theme uses step 90 for bg (Tag uses step 100). Badge SCSS and showcase then consume these tokens only; dot variant is unchanged.

**Tech Stack:** Astro doc site, React components, SCSS modules, design tokens in `src/styles/tokens.scss`. British English, semantic tokens only.

---

## Reference: Tag vs Badge today

| Aspect | Tag (current) | Badge (current) |
|--------|----------------|-----------------|
| Light bg | Step 0 (e.g. `grey-0`, `green-0`) | `--color-bg-tertiary` / `--color-bg-*-subtle` (e.g. grey-10, green-10) |
| Dark bg | Step 100 (e.g. `grey-100`, `green-100`) | `--color-bg-tertiary` / `--color-bg-*-subtle` (grey-90, green-80) |
| Border | Yes (step 20 light, step 80 dark) | No |
| Shape | Pill (`--radius-full`) | Pill (`--radius-full`) |

**Target:** Badge pills use dedicated badge tokens; light-theme bg = one shade lower than Tag → step 10 (light), step 90 (dark). Optionally add a subtle border to match Tag.

---

### Task 1: Add Badge semantic tokens in `tokens.scss`

**Files:**
- Modify: `src/styles/tokens.scss` (light block ~line 218; dark block ~line 322)

**Step 1: Add Badge tokens in the light theme block**

After the Tag block in the light theme (after line 228), add:

```scss
  /* Badge — one shade lower than Tag in light: step 10 (Tag uses 0) */
  --color-badge-default-bg:   var(--grey-10);
  --color-badge-default-border: var(--grey-20);
  --color-badge-success-bg:   var(--green-10);
  --color-badge-success-border: var(--green-20);
  --color-badge-error-bg:     var(--red-10);
  --color-badge-error-border:   var(--red-20);
  --color-badge-warning-bg:   var(--yellow-10);
  --color-badge-warning-border: var(--yellow-20);
  --color-badge-info-bg:      var(--blue-10);
  --color-badge-info-border:    var(--blue-20);
```

**Step 2: Add Badge tokens in the dark theme block**

After the Tag block in the dark theme (after line 332), add:

```scss
  /* Badge — one shade lighter than Tag in dark: step 90 (Tag uses 100) */
  --color-badge-default-bg:   var(--grey-90);
  --color-badge-default-border: var(--grey-80);
  --color-badge-success-bg:   var(--green-90);
  --color-badge-success-border: var(--green-80);
  --color-badge-error-bg:     var(--red-90);
  --color-badge-error-border:   var(--red-80);
  --color-badge-warning-bg:   var(--yellow-90);
  --color-badge-warning-border: var(--yellow-80);
  --color-badge-info-bg:      var(--blue-90);
  --color-badge-info-border:    var(--blue-80);
```

**Step 3: Commit**

```bash
git add src/styles/tokens.scss
git commit -m "tokens: add badge semantic tokens (one shade lower than Tag in light)"
```

---

### Task 2: Switch Badge pill variants to new tokens and add border

**Files:**
- Modify: `src/atoms/Badge/Badge.module.scss`

**Step 1: Use badge tokens for pill background and border**

- In `.badge`, add `border: var(--border-width-100) solid transparent;` so all pills have a border slot (same width as Tag).
- In each variant (`.default`, `.success`, `.error`, `.warning`, `.info`), replace:
  - `background: var(--color-bg-tertiary)` or `var(--color-bg-*-subtle)` with `background: var(--color-badge-*-bg)` and `border-color: var(--color-badge-*-border)` using the new tokens (e.g. `--color-badge-default-bg`, `--color-badge-default-border`).

Result: pill badges use `--color-badge-{variant}-bg` and `--color-badge-{variant}-border`; dot variant remains unchanged (no border, no bg tokens).

**Step 2: Commit**

```bash
git add src/atoms/Badge/Badge.module.scss
git commit -m "feat(badge): use badge tokens and border for pill variants"
```

---

### Task 3: Align BadgeShowcase with design system tokens

**Files:**
- Modify: `src/components/atoms/BadgeShowcase.jsx`

**Step 1: Replace hardcoded styles with tokens**

- Section labels: replace `fontSize: '11px'`, `color: 'var(--ink-3)'`, `letterSpacing: '0.06em'`, `marginBottom: '12px'` with design-system tokens (e.g. `fontSize: 'var(--font-size-100)'`, `color: 'var(--color-text-tertiary)'`, `letterSpacing: 'var(--letter-spacing-wide)'`, `marginBottom: 'var(--space-150)'`, `fontWeight: 'var(--font-weight-medium)'`). Match pattern used in `TagShowcase.jsx`.
- Gaps: replace `8px`, `12px`, `20px`, `6px` with `var(--space-100)`, `var(--space-150)`, `var(--space-250)`, `var(--space-075)` (or nearest token).
- Theme panels: use `padding: 'var(--space-250)'`, `borderRadius: 'var(--radius-100)'` (or `var(--radius-200)`), and existing `theme-comparison` / `--color-bg-theme-panel` / `--color-border-default`.
- Dot row text: use `fontSize: 'var(--font-size-200)'`, `color: 'var(--color-text-primary)'`, `gap: 'var(--space-100)'` (or equivalent).

**Step 2: Commit**

```bash
git add src/components/atoms/BadgeShowcase.jsx
git commit -m "docs(badge): use design tokens in BadgeShowcase"
```

---

### Task 4: Verify and document

**Files:**
- Optional: `src/pages/atoms/badge.astro` (if anatomy or theme section needs a tweak)
- Update: `.local/updates.md`

**Step 1: Visual check**

- Run dev server; open `/atoms/badge`. Confirm pill variants (default, success, error, warning, info) show one-shade-lower bg in light theme and one-shade-lighter in dark theme, with subtle border.
- Toggle light/dark; confirm dot variants unchanged.

**Step 2: Log decision in updates.md**

Add an entry under 2026-03-09, e.g.:

```markdown
### Badge pill design aligned with Tag
- Badge pills use dedicated semantic tokens `--color-badge-{variant}-bg` and `--color-badge-{variant}-border`.
- Light theme: bg one shade lower than Tag (step 10: grey-10, green-10, etc.); dark theme: step 90 (grey-90, green-90, etc.).
- Pill variants get a 1px border like Tag; dot variant unchanged.
- BadgeShowcase updated to use design tokens throughout.
```

**Step 3: Commit**

```bash
git add .local/updates.md
git commit -m "docs: log badge pill design update in updates.md"
```

---

## Summary

| Task | Description |
|------|-------------|
| 1 | Add `--color-badge-*-bg` and `--color-badge-*-border` in light (step 10/20) and dark (step 90/80) in `tokens.scss` |
| 2 | In `Badge.module.scss`, use badge tokens for pill bg/border; add border to pill root |
| 3 | In `BadgeShowcase.jsx`, replace hardcoded px/ink with design tokens |
| 4 | Visual check, optional badge.astro tweak, and updates.md entry |

No new primitives; all tokens reference existing colour steps. Dot variant and Badge API unchanged.
