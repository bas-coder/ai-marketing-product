# Flable AI — Design System

> Single source of truth for Flable's visual design system and UI implementation guidelines.

---

## 1. Brand Identity

### Flable Logo
- **Mark**: Three-blade swoosh icon — gradient from magenta → violet → blue
- **Wordmark**: "flable.ai" in Poppins, `font: 400 19px var(--flb-font-display)`
- **Mark SVG**: `<img src="assets/flable-mark.svg" style="height:24px">`
- **Logo SVG**: Inline SVG available in `BrandLogo` component (gradient or mono tone)

### Brand Personality
- Intelligent, confident, approachable
- Data-driven but never cold — warm gradients, soft shadows, human-friendly copy
- Premium D2C SaaS aesthetic — dark-first with light theme option

### Visual Principles
1. **Dark-first** — default ground is `rgb(13,13,14)` (grey-1000), surfaces layer upward
2. **Gradient as identity** — magenta→violet→blue sweep is the signature accent (hero, CTAs, loading states)
3. **Soft elevation** — shadows use translucent dark/light glows, never hard black drop-shadows
4. **Generous radius** — 8–16px for cards/inputs, 9999px for pills/badges
5. **Minimal chrome** — borders are near-invisible hairlines (`--flb-line`), relying on surface contrast

### Brand Voice / Tone
- Direct, confident, action-oriented
- AI-first language ("Orion found 3 things worth your attention")
- Status-first hierarchy: numbers and deltas before labels

---

## 2. Design Tokens

### 2.1 Brand Colors

| Token | Dark Mode | Light Mode | Usage |
|---|---|---|---|
| `--flb-magenta` | `rgb(233,52,139)` | same | Accent / brand pink |
| `--flb-purple` | `rgb(127,86,217)` | same | Signature violet |
| `--flb-violet` | `rgb(100,60,193)` | same | Primary brand (CTAs, active states) |
| `--flb-violet-light` | `rgb(160,139,255)` | same | Links, accents, secondary highlights |
| `--flb-blue` | `rgb(0,158,255)` | same | Secondary brand |

### 2.2 Primary / Secondary Colors

| Token | Dark | Light |
|---|---|---|
| `--flb-colors-primary-500-brand` | `rgb(100,60,193)` | same |
| `--flb-colors-primary-400` | `rgb(160,139,255)` | same |
| `--flb-colors-primary-600` | `rgb(105,65,198)` | same |
| `--flb-colors-secondary-500-brand` | `rgb(0,158,255)` | same |
| `--flb-colors-secondary-400` | `rgb(51,191,255)` | same |
| `--flb-colors-accent-500-brand` | `rgb(233,52,139)` | same |

### 2.3 Background / Surface Colors

| Token | Dark | Light | Usage |
|---|---|---|---|
| `--flb-bg` | `rgb(13,13,14)` | `rgb(250,250,250)` | App background |
| `--flb-surface` | `rgb(21,21,23)` | `rgb(252,252,252)` | Cards, panels |
| `--flb-surface-2` | `rgb(31,31,34)` | `rgb(245,245,245)` | Nested surfaces, inputs |
| `--flb-surface-3` | `rgb(45,45,49)` | `rgb(234,234,234)` | Hover, raised, skeleton |
| `--flb-line` | `rgb(45,45,49)` | `rgb(229,229,231)` | Hairline borders |
| `--flb-line-soft` | `rgba(237,241,245,0.08)` | `rgba(10,13,18,0.06)` | Subtle dividers |

**App-level surface tokens** (set in `:root` / `.light`):

| Token | Dark | Light | Usage |
|---|---|---|---|
| `--app-canvas` | `rgb(21,21,23)` | `rgb(234,234,234)` | App ground, sidebar |
| `--app-rail` | `rgb(21,21,23)` | `rgb(234,234,234)` | Sidebar rail |
| `--app-panel` | `rgb(13,13,14)` | `rgb(245,245,245)` | Main panel |
| `--app-shell` | `rgb(21,21,23)` | `rgb(234,234,234)` | Composer container |
| `--app-field` | `rgb(31,31,34)` | `rgb(252,252,252)` | Input fields |
| `--app-chat` | `rgb(13,13,14)` | `rgb(245,245,245)` | Chat panel |
| `--app-card` | `rgb(31,31,34)` | `rgb(252,252,252)` | Cards |
| `--app-raised` | `rgb(45,45,49)` | `rgb(213,213,213)` | Pills, keycaps, active rows |

### 2.4 Text Colors

| Token | Dark | Light | Usage |
|---|---|---|---|
| `--flb-ink` | `rgb(250,250,250)` | `rgb(21,21,23)` | Headings |
| `--flb-ink-2` | `rgb(213,213,213)` | `rgb(74,74,79)` | Body text |
| `--flb-ink-3` | `rgb(140,140,145)` | `rgb(137,137,137)` | Muted / tertiary |
| `--flb-ink-4` | `rgb(106,106,111)` | `rgb(170,170,176)` | Faint / disabled |
| `--flb-ink-invert` | `rgb(21,21,23)` | `rgb(250,250,250)` | Inverted text |

### 2.5 Border Colors

| Token | Dark | Light | Usage |
|---|---|---|---|
| `--flb-border-default` | `rgb(45,45,49)` | `rgb(229,229,231)` | Default borders |
| `--flb-border-muted` | `rgba(237,241,245,0.06)` | `rgba(10,13,18,0.05)` | Quieter borders |
| `--flb-border-focus` | `rgb(160,139,255)` | `rgb(160,139,255)` | Focus rings |
| `--flb-border-selected` | `rgb(137,137,137)` | `rgb(140,140,145)` | Selected state |
| `--flb-border-shadow` | `rgb(245,245,245)` | `rgb(233,225,255)` | Shadow border |

### 2.6 Status Colors

| Token | Dark | Light |
|---|---|---|
| `--flb-success` | `rgb(106,210,117)` | `rgb(46,140,72)` |
| `--flb-warning` | `rgb(255,162,12)` | `rgb(194,65,12)` |
| `--flb-error` | `rgb(255,107,94)` | `rgb(211,47,47)` |
| `--flb-info` | `rgb(90,176,255)` | `rgb(25,118,210)` |

**Status tint + foreground pairs** (used in badges, alerts, chips):

| Pair | Dark | Light |
|---|---|---|
| `--flb-tint-violet` / `--flb-on-violet` | `rgba(160,139,255,0.14)` / `rgb(190,173,255)` | `rgba(100,60,193,0.10)` / `rgb(83,56,158)` |
| `--flb-tint-success` / `--flb-on-success` | `rgba(106,210,117,0.14)` / `rgb(106,210,117)` | `rgba(46,140,72,0.12)` / `rgb(34,110,55)` |
| `--flb-tint-warning` / `--flb-on-warning` | `rgba(255,162,12,0.14)` / `rgb(255,162,12)` | `rgba(194,65,12,0.12)` / `rgb(180,60,10)` |
| `--flb-tint-error` / `--flb-on-error` | `rgba(255,107,94,0.14)` / `rgb(255,107,94)` | `rgba(211,47,47,0.10)` / `rgb(190,40,40)` |
| `--flb-tint-info` / `--flb-on-info` | `rgba(90,176,255,0.14)` / `rgb(90,176,255)` | `rgba(25,118,210,0.10)` / `rgb(21,101,180)` |
| `--flb-tint-neutral` / `--flb-on-neutral` | `rgba(237,241,245,0.08)` / `--flb-ink-2` | `rgba(10,13,18,0.05)` / `--flb-ink-2` |

---

## 3. Typography

### Font Families

| Token | Stack |
|---|---|
| `--flb-font-display` | `"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` |
| `--flb-font-body` | `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` |
| `--flb-font-mono` | `"Geist", "Inter", ui-monospace, "SF Mono", Menlo, monospace` |

### Weights
- **Thin**: 100
- **ExtraLight**: 200
- **Light**: 300
- **Regular**: 400
- **Medium**: 500 (primary UI weight)
- **SemiBold**: 600
- **Bold**: 700
- **ExtraBold**: 800
- **Black**: 900

### Typography Scale (Desktop — `:root`)

| Size Token | px | Line Height | Usage |
|---|---|---|---|
| `--flb-typography-text-xs` | 12 | 16 | Labels, badges |
| `--flb-typography-text-sm` | 14 | 20 | Body small, captions |
| `--flb-typography-text-base` | 16 | 24 | Body default |
| `--flb-typography-text-lg` | 18 | 28 | Body large |
| `--flb-typography-text-xl` | 20 | 24 | Subheadings |
| `--flb-typography-text-2xl` | 24 | 30 | Card titles |
| `--flb-typography-text-3xl` | 30 | 36 | Section headings |
| `--flb-typography-text-4xl` | 36 | 44 | Page titles |
| `--flb-typography-text-5xl` | 48 | 52 | Hero text |
| `--flb-typography-text-6xl` | 60 | 80 | Display |
| `--flb-typography-text-7xl` | 72 | 100 | Display large |
| `--flb-typography-text-8xl` | 96 | 128 | Display XL |
| `--flb-typography-text-9xl` | 128 | 168 | Display XXL |

### Typography Scale (Tablet — `data-mode="tablet"`)

| Size | px |
|---|---|
| text-xs | 11 |
| text-sm | 13 |
| text-base | 15 |
| text-lg | 16 |
| text-xl | 18 |
| text-2xl | 20 |
| text-3xl | 24 |
| text-4xl | 28 |
| text-5xl | 36 |
| text-6xl | 48 |

### Typography Scale (Mobile — `data-mode="mobile"`)

| Size | px |
|---|---|
| text-xs | 10 |
| text-sm | 12 |
| text-base | 14 |
| text-lg | 15 |
| text-xl | 16 |
| text-2xl | 18 |
| text-3xl | 20 |
| text-4xl | 24 |
| text-5xl | 30 |
| text-6xl | 36 |

### Common Type Styles

| Style | Font | Weight | Size | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| Page title | Poppins | 500 | 30px | 1.22 | -0.02em |
| Section heading | Poppins | 500 | 16px | 1.35 | -0.01em |
| Card title | Poppins | 600 | 12px | 1.35 | -0.01em |
| Body text | Inter | 400 | 14px | 1.5 | normal |
| Body small | Inter | 400 | 11.5px | 1.45 | normal |
| Label | Inter | 500 | 12.5px | 1 | normal |
| Label small | Inter | 500 | 12px | 1.2 | normal |
| Muted / caption | Inter | 400 | 11px | 1 | normal |
| Button | Poppins | 500 | 15px | 1 | -0.01em |
| Badge | Inter | 500 | 12px | 1.2 | normal |
| Tab (underline) | Inter | 500 | 14px | 1 | normal |
| Tab (pill) | Inter | 500 | 13px | 1 | normal |
| Nav item | Inter | 500 | 14px | 1 | normal |
| Input | Inter | 400 | 14px | 1 | normal |

---

## 4. Spacing & Scale

### Base Scale

| Token | px |
|---|---|
| `--flb-sp-1` | 4 |
| `--flb-sp-2` | 8 |
| `--flb-sp-3` | 12 |
| `--flb-sp-4` | 16 |
| `--flb-sp-5` | 20 |
| `--flb-sp-6` | 24 |
| `--flb-sp-8` | 32 |
| `--flb-sp-10` | 40 |
| `--flb-sp-12` | 48 |
| `--flb-sp-16` | 64 |

### Spacing Tokens (Mapped)

| Token | px |
|---|---|
| `--flb-spacing-spacing-0` | 0 |
| `--flb-spacing-spacing-1` | 4 |
| `--flb-spacing-spacing-2` | 8 |
| `--flb-spacing-spacing-3` | 12 |
| `--flb-spacing-spacing-4` | 16 |
| `--flb-spacing-spacing-5` | 20 |
| `--flb-spacing-spacing-6` | 24 |
| `--flb-spacing-spacing-8` | 32 |
| `--flb-spacing-spacing-10` | 40 |
| `--flb-spacing-spacing-12` | 48 |
| `--flb-spacing-spacing-16` | 64 |
| `--flb-spacing-spacing-20` | 80 |
| `--flb-spacing-spacing-24` | 96 |

---

## 5. Border Radius

| Token | px |
|---|---|
| `--flb-r-sm` | 4 |
| `--flb-r-md` | 8 |
| `--flb-r-lg` | 12 |
| `--flb-r-xl` | 16 |
| `--flb-r-2xl` | 20 |
| `--flb-r-full` | 9999 |

**Usage**:
- `4px` — checkboxes, small badges, skeleton shimmers
- `8px` — buttons, inputs, pagination, table cells
- `10px` — icon buttons, select dropdowns, tab pills
- `12px` — cards (default), alerts, tables, modals
- `16px` — cards (interactive), showcase panels
- `9999px` — badges, chips, progress bars, avatars, toggles

---

## 6. Shadows & Elevation

### Dark Mode

| Token | Value |
|---|---|
| `--flb-shadow-sm` | `0 1px 2px rgba(0,0,0,0.4), 0 0 0 1px rgba(237,241,245,0.05)` |
| `--flb-shadow-md` | `0 6px 20px rgba(0,0,0,0.45), 0 0 0 1px rgba(237,241,245,0.06)` |
| `--flb-shadow-lg` | `0 20px 48px rgba(0,0,0,0.55), 0 0 0 1px rgba(237,241,245,0.08)` |
| `--flb-glow-violet` | `0 0 0 1px rgba(160,139,255,0.4), 0 8px 28px rgba(100,60,193,0.35)` |

### Light Mode

| Token | Value |
|---|---|
| `--flb-shadow-sm` | `0 1px 2px rgba(10,13,18,0.06), 0 0 0 1px rgba(10,13,18,0.05)` |
| `--flb-shadow-md` | `0 6px 20px rgba(10,13,18,0.10), 0 0 0 1px rgba(10,13,18,0.05)` |
| `--flb-shadow-lg` | `0 20px 48px rgba(10,13,18,0.16), 0 0 0 1px rgba(10,13,18,0.06)` |
| `--flb-glow-violet` | `0 0 0 1px rgba(100,60,193,0.35), 0 8px 28px rgba(100,60,193,0.22)` |

**Elevation hierarchy**:
- `shadow-sm` — resting cards, inputs, dropdowns
- `shadow-md` — hovered cards, active dropdowns, tooltips, modals
- `shadow-lg` — modals, popovers, contextual tooltips
- `glow-violet` — focused inputs, active gradient ring

---

## 7. Icon System

### Icon Library
- **Phosphor Icons** (`@phosphor-icons/web@2.1.1`)
- Usage: `<i class="ph ph-{name}"></i>` with `font-size` override

### Icon Sizes

| Token | Desktop | Tablet | Mobile | Usage |
|---|---|---|---|---|
| `icon-xs` | 12 | 12 | 10 | Inline badges |
| `icon-sm` | 16 | 16 | 12 | Small icons, chips |
| `icon-base` | 20 | 20 | 16 | Default UI icons |
| `icon-lg` | 24 | 24 | 18 | Feature icons |
| `icon-xl` | 32 | 32 | 24 | Hero / large feature |

### Icon Colors

| Token | Dark | Light |
|---|---|---|
| `--flb-icon-default` | `--flb-colors-grey-100` | `--flb-colors-grey-900` |
| `--flb-icon-muted` | `--flb-colors-grey-400` | `--flb-colors-grey-700` |
| `--flb-icon-primary` | `--flb-colors-primary-400` | `--flb-colors-primary-600` |
| `--flb-icon-secondary` | `--flb-colors-secondary-400` | `--flb-colors-secondary-600` |
| `--flb-icon-inverse` | `--flb-colors-grey-900` | `--flb-colors-generic-white` |
| `--flb-icon-disabled` | `--flb-colors-grey-600` | `--flb-colors-grey-300` |
| `--flb-icon-error` | `--flb-colors-status-error-dark` | `--flb-colors-status-error` |
| `--flb-icon-success` | `--flb-colors-status-success-dark` | `--flb-colors-status-success` |
| `--flb-icon-warning` | `--flb-colors-status-warning-dark` | `--flb-colors-status-warning` |

---

## 8. Gradients

| Token | Value | Usage |
|---|---|---|
| `--flb-gradient-hero` | `radial-gradient(120% 130% at 0% 4%, rgb(233,52,139) 0%, rgb(127,86,217) 51.43%, rgb(0,158,255) 100%)` | Hero sections, login showcase |
| `--flb-gradient-energetic` | `radial-gradient(130% 130% at 0% 0%, rgb(251,71,159) 0%, rgb(127,86,217) 100%)` | Gradient CTA buttons, progress fills |
| `--flb-gradient-primary-focus` | `radial-gradient(110% 110% at 4% 5%, rgb(160,139,255) 0%, rgb(105,65,198) 100%)` | Card gradient variant |
| `--flb-gradient-primary-focus-dark` | `radial-gradient(90% 140% at 89% -11%, rgb(74,37,154) 0%, rgb(27,13,56) 100%)` | Dark card gradient |
| `--flb-gradient-chart` | `linear-gradient(179deg, rgb(127,86,217) -5%, rgba(127,86,217,0) 100%)` | Chart area fills |
| `--flb-gradient-onboarding` | `linear-gradient(166deg, rgb(244,240,255) 26%, rgb(216,207,255) 92%)` | Onboarding screens |
| `--flb-gradient-text` | `linear-gradient(92deg, rgb(233,52,139) 0%, rgb(127,86,217) 52%, rgb(0,158,255) 100%)` | Gradient text headings |

---

## 9. UI Components

### 9.1 Buttons

**Variants**: `primary` | `gradient` | `secondary` | `outline` | `ghost` | `danger`

| Variant | BG | Color | Border | Hover BG |
|---|---|---|---|---|
| primary | `rgb(100,60,193)` | `#fcfcfc` | transparent | `rgb(83,56,158)` |
| gradient | `var(--flb-gradient-energetic)` | `#fcfcfc` | transparent | same + glow |
| secondary | `var(--flb-tint-violet)` | `var(--flb-on-violet)` | transparent | `rgba(127,86,217,0.2)` |
| outline | transparent | `var(--flb-ink)` | `var(--flb-line)` | `var(--flb-surface-3)` |
| ghost | transparent | `var(--flb-ink-2)` | transparent | `var(--flb-surface-3)` |
| danger | `rgb(244,67,54)` | `#fcfcfc` | transparent | `rgb(208,52,40)` |

**Sizes**:

| Size | Height | Padding X | Font Size | Gap | Radius |
|---|---|---|---|---|---|
| sm | 36px | 14px | 13px | 6px | 8px |
| md | 44px | 18px | 15px | 8px | 10px |
| lg | 52px | 24px | 17px | 10px | 12px |

**Behavior**: hover lifts `-1px`, gradient variant gets violet glow shadow on hover. Disabled: `opacity: 0.45`, `cursor: not-allowed`.

**IconButton**: Square footprint (36/44/52px), same variants, optional `round` mode (9999px radius).

### 9.2 Inputs

- **Height**: sm=38px, md=44px, lg=52px
- **Border**: `1px solid var(--flb-line)` → focus: `rgb(160,139,255)` with `box-shadow: 0 0 0 3px rgba(160,139,255,0.18)`
- **Error**: border → `var(--flb-error)`, no focus ring
- **Background**: `var(--flb-surface)`
- **Border radius**: 10px
- **Font**: Inter 14px, body text color
- **Label**: Inter 500 13px, `--flb-ink-2`
- **Hint/Error text**: 12px, `--flb-ink-3` or `--flb-error`
- **Adornments**: leading/trailing inline icons, `--flb-ink-3` color
- **Textarea**: Same styling, `resize: vertical`, `line-height: 1.5`

### 9.3 Select / Dropdown

- Trigger: same as Input (44px, 10px radius, `--flb-surface` bg)
- Open state: border → `rgb(160,139,255)` + violet focus ring
- Dropdown panel: `var(--flb-surface-2)` bg, `var(--flb-line)` border, `shadow-lg`, 10px radius, 6px padding
- Items: 14px, 9px/12px padding, 7px radius
- Selected item: `var(--flb-tint-violet)` bg, `var(--flb-on-violet)` color
- Hover (non-selected): `var(--flb-surface-3)` bg
- Chevron: 14px SVG, rotates 180° on open

### 9.4 Cards

- **Background**: `var(--flb-surface)` (or `var(--flb-gradient-primary-focus-dark)` for gradient variant)
- **Border**: `1px solid var(--flb-line)`
- **Radius**: 16px
- **Padding**: 20px default
- **Shadow**: `shadow-sm` resting → `shadow-md` on hover
- **Hover lift**: `translateY(-2px)`
- **CardHeader**: title (Poppins 500 16px, `--flb-ink`) + subtitle (13px, `--flb-ink-3`), 12px gap, 14px bottom margin

### 9.5 Modals / Dialogs

- Backdrop: `rgba(0,0,0,0.5)` or theme overlay
- Container: `var(--flb-surface)`, 12px radius, `shadow-lg`, max-width ~480px
- Header: Poppins 500 16px
- Body: Inter 400 14px, `--flb-ink-2`
- Footer: flex row, gap 8px, right-aligned actions

### 9.6 Navigation — NavItem

- **Default**: transparent bg, `var(--flb-ink-2)` color, `var(--flb-ink-3)` icon
- **Hover**: `var(--flb-surface-3)` bg
- **Active**: `var(--flb-tint-violet)` bg, `var(--flb-on-violet)` color, `inset 0 0 0 1px rgba(160,139,255,0.35)` ring
- **Layout**: flex, 11px gap, 10px 12px padding, 10px radius
- **Badge**: 11px 500, `var(--flb-tint-violet)` bg, `var(--flb-on-violet)` color, 9999px radius
- **Collapsed**: centered icon-only, 10px padding, title tooltip

### 9.7 Progress Indicators

**ProgressBar**:
- Track: `var(--flb-surface-3)`, 9999px radius, 8px height default
- Fill: `rgb(127,86,217)` solid, or `var(--flb-gradient-energetic)` gradient
- Tones: `violet` | `success` | `warning` | `error`
- Animation: `width 400ms var(--flb-ease-out)`

**Spinner**:
- Indeterminate rotating arc
- Default: 20px, 2.5px thickness, `rgb(160,139,255)` arc color
- Track: `var(--flb-surface-3)`
- Animation: `flb-spin 0.7s linear infinite`

**Skeleton** (`[data-skel]`):
- Base: `var(--flb-surface-3)` fill
- Shimmer: `linear-gradient(100deg, transparent 22%, rgba(255,255,255,0.07) 50%, transparent 78%)`
- Animation: `flbSkel 1.3s var(--flb-ease) infinite`, 220% background-size
- Ready state: `[data-ready]` → opacity 0, animation none
- Respects `html[data-no-fx]` → animation paused

### 9.8 Tabs

**Underline variant**:
- Container: flex, 4px gap, bottom border `1px solid var(--flb-line)`
- Tab: Inter 500 14px, 11px/14px padding
- Active: `var(--flb-ink)` color, 2px bottom border `rgb(160,139,255)`
- Inactive: `var(--flb-ink-3)` color, transparent bottom border

**Pill variant**:
- Container: inline-flex, 4px padding/gap, `var(--flb-surface-2)` bg, `var(--flb-line)` border, 10px radius
- Pill: Inter 500 13px, 8px/14px padding, 7px radius
- Active: `rgb(100,60,193)` bg, `#fcfcfc` color
- Inactive: transparent bg, `var(--flb-ink-3)` color

### 9.9 Toggles (Switch)

- **Off**: `var(--flb-surface-3)` track, white knob
- **On**: `rgb(100,60,193)` track, white knob
- **Sizes**: sm=36×20, md=44×24
- **Knob**: `height - 4px`, 9999px radius, `box-shadow: 0 1px 3px rgba(0,0,0,0.4)`
- **Animation**: `var(--flb-dur) var(--flb-ease)` for track, `var(--flb-ease-out)` for knob slide

### 9.10 Checkboxes

- **Box**: 20px (md) or 16px (sm), 6px radius
- **Unchecked**: `var(--flb-surface)` bg, `var(--flb-line)` border
- **Checked**: `rgb(100,60,193)` bg + border, white checkmark SVG (2.5→6.2→9.5 path)
- **Animation**: `all var(--flb-dur) var(--flb-ease)`

### 9.11 Radio Buttons

- **Circle**: 20px, 9999px radius
- **Unchecked**: `var(--flb-surface)` bg, `var(--flb-line)` border
- **Checked**: `rgb(100,60,193)` border, 10px inner dot `rgb(100,60,193)`
- **Animation**: border-color `var(--flb-dur) var(--flb-ease)`

### 9.12 Toasts / Notifications

- Position: fixed, bottom-right or top-right
- Background: `var(--flb-surface)`, `shadow-md`, 12px radius
- Border-left: 3px accent stripe (success/warning/error/info color)
- Icon: 20px status circle with `--flb-bg` glyph
- Text: 14px body, 12px muted timestamp
- Auto-dismiss: 4–6s with progress bar indicator

### 9.13 Badges

- Tones: `neutral` | `violet` | `success` | `warning` | `error` | `info`
- Padding: sm=3px/8px, md=4px/10px
- Font: Inter 500, sm=11px, md=12px
- Background: `--flb-tint-{tone}`
- Color: `--flb-on-{tone}`
- Optional 6px dot indicator
- Radius: 9999px (pill)

### 9.14 Chips

- Height: 30px, padding 0 12px, 9999px radius
- Default: `var(--flb-surface-2)` bg, `var(--flb-line)` border
- Hover: `var(--flb-surface-3)` bg
- Selected: `var(--flb-tint-violet)` bg, `var(--flb-on-violet)` color
- Font: Inter 500 13px
- Optional leading icon (`--flb-ink-3`), removable X button

### 9.15 Alerts

- Tones: `info` | `success` | `warning` | `error` | `violet`
- Layout: flex, 12px gap, 16px padding, 12px radius
- Background: `--flb-tint-{tone}`
- Border: `1px solid --flb-on-{tone}`
- Icon circle: 24px, `--flb-on-{tone}` bg, `--flb-bg` glyph
- Title: Poppins 500 14px, `--flb-ink`
- Body: Inter 400 13px, `--flb-ink-2`

### 9.16 Tooltips

**Inline `[data-tip]`**:
- Position: absolute, below trigger, 8px gap
- Background: `var(--flb-ink)`, color: `var(--flb-bg)`
- Font: Inter 500 11px
- Radius: 7px, padding 5px/9px, `shadow-md`
- Opacity: 0 → 1 on hover, 250ms delay

**Contextual (sidebar)**:
- `position: fixed`, z-index 200
- Max-width 280px, 12px/14px/10px padding
- `var(--flb-surface)` bg, `var(--flb-border-default)` border, `shadow-lg`
- 12px radius
- Opacity: 0 → 1, transform: translateX(4px) → 0, 220ms
- Contains: image, title, description, "Learn more →" link, "Got it" close button

### 9.17 Empty States

- Centered layout, max-width ~400px
- Icon: 48px, `--flb-ink-3` or `--flb-violet-light`
- Title: Poppins 500 16px, `--flb-ink`
- Description: Inter 400 13px, `--flb-ink-3`
- CTA: Primary or secondary button below

### 9.18 Loading States

- **Skeleton screens**: `[data-skel]` with shimmer animation (see 9.7)
- **Spinner**: inline for buttons/sections, centered for page loads
- **Progress bar**: determinate with gradient fill for uploads/setup
- **Gradient ring**: `[data-grad-ring]` with animated conic gradient border for active AI processing

---

## 10. Layout Guidelines

### Page Structure

```
┌─────────────────────────────────────────────┐
│  Sidebar (200-240px)  │  Main Panel (flex)  │
│  --app-rail           │  --app-panel        │
│  [nav items]          │  [page content]     │
│  [bottom actions]     │                     │
└─────────────────────────────────────────────┘
```

### Grid System
- **No formal grid framework** — uses flexbox throughout
- Sidebar: fixed width, flex-shrink: 0
- Main panel: `flex: 1`, `min-width: 0`, overflow-y: auto
- Content containers: max-width 1200px, padding 20–32px

### Container Widths
- Sidebar: 200–240px (collapsible to icon-only ~60px)
- Auth forms: max-width 380px centered
- Login showcase: 50% width, flex-shrink: 0
- Modals: max-width ~480px

### Responsive Breakpoints

| Mode | Width | Trigger |
|---|---|---|
| Desktop | 1440px | Default |
| Tablet | 768px | `data-mode="tablet"` |
| Mobile | 375px | `data-mode="mobile"` |

### Desktop / Tablet / Mobile Considerations

| Aspect | Desktop | Tablet | Mobile |
|---|---|---|---|
| Sidebar | Full, always visible | Full, collapsible | Hidden / overlay |
| Main panel | Full flex | Stacked vertically | Full width |
| Typography scale | Full | Reduced (~85%) | Compact (~75%) |
| Spacing | Full scale | Compressed | Minimal |
| Icon sizes | Full | Same | Reduced |
| Border radius | Full | Reduced | Minimal |
| Cards | Multi-column | 2-column | Single column |

### Spacing Conventions
- **Between sections**: 32–48px (`--flb-sp-8` to `--flb-sp-12`)
- **Between cards**: 16–20px (`--flb-sp-4` to `--flb-sp-5`)
- **Within cards**: 20px padding (default)
- **Between form fields**: 16px (`--flb-sp-4`)
- **Between related items**: 8–12px (`--flb-sp-2` to `--flb-sp-3`)
- **Inline gaps**: 6–8px for icons + text

---

## 11. Interaction & Motion

### Easing & Duration

| Token | Value | Usage |
|---|---|---|
| `--flb-ease` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default easing (standard Material) |
| `--flb-ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating (modals, tooltips) |
| `--flb-dur` | `180ms` | Default duration |

### Hover States
- **Cards**: `translateY(-2px)` + `shadow-md`
- **Buttons**: `translateY(-1px)` + bg darken (primary) / bg fill (ghost/outline)
- **Nav items**: `var(--flb-surface-3)` background fill
- **Table rows**: `var(--flb-surface-3)` background fill
- **Range slider thumb**: `box-shadow: 0 0 0 5px rgba(160,139,255,0.14)`
- **Links/learn-more**: color shift + arrow translateX(2px)

### Active States
- **Buttons**: bg darkens one step (primary → `rgb(83,56,158)`)
- **Nav items**: `var(--flb-surface-3)` fill (or tint-violet for active)
- **Range slider thumb**: `box-shadow: 0 0 0 5px rgba(160,139,255,0.22)`

### Focus States
- **Inputs**: border → `rgb(160,139,255)` + `box-shadow: 0 0 0 3px rgba(160,139,255,0.18)`
- **Buttons**: `outline: 2px solid var(--flb-border-focus)` offset 2px
- **Interactive elements**: `:focus-visible` ring
- **Gradient ring**: `[data-grad-ring][data-ring-on]` — animated conic gradient border

### Disabled States
- **Buttons**: `opacity: 0.45`, `cursor: not-allowed`
- **Inputs/Selects**: `opacity: 0.5`, `cursor: not-allowed`
- **Checkboxes/Switch/Radio**: `opacity: 0.5`, `cursor: not-allowed`
- **Color**: inherit muted tones, no hover response

### Transitions
All interactive elements use `var(--flb-dur) var(--flb-ease)` (180ms):
- `background`, `color`, `border-color`, `box-shadow`, `transform`, `opacity`

Special cases:
- **Progress bar fill**: `width 400ms var(--flb-ease-out)`
- **Switch knob**: `transform var(--flb-dur) var(--flb-ease-out)`
- **Skeleton shimmer**: `1.3s var(--flb-ease)` infinite
- **Spinner**: `0.7s linear` infinite
- **Tooltip fade**: `opacity 220ms var(--flb-ease), transform 220ms var(--flb-ease)`
- **Card hover**: `transform var(--flb-dur) var(--flb-ease), box-shadow var(--flb-dur) var(--flb-ease)`

### Animations / Keyframes

| Name | Effect | Duration |
|---|---|---|
| `flbSkel` | Skeleton shimmer slide | 1.3s infinite |
| `flbSpin` | Spinner rotation | 0.7s linear infinite |
| `flbAngle` | Gradient ring conic rotation | 1.6s linear infinite |
| `flbOrionCard` | Card entrance (translateY 14px + scale 0.985 → 1) | entrance |
| `flbStepIn` | Step entrance (translateY 10px → 0) | entrance |
| `flbFadeUp` | Fade up (translateY 9px → 0) | entrance |
| `flbRise` | Rise (translateY 10px → 0) | entrance |
| `flbFade` | Scale fade (scale 0.998 → 1) | entrance |
| `flbScaleIn` | Scale in (translateY 10px + scale 0.98 → 1) | entrance |
| `flbSlideL` | Slide from left (translateX 40px → 0) | entrance |
| `flbSheen` | Sheen sweep (background-position -160% → 260%) | loading |
| `flbBlink` | Blink (opacity + translateY bounce) | typing indicator |
| `flbShuttle` | Shuttle (left -34% → 100%) | loading bar |
| `flbShake` | Shake (translateX ±3px) | error feedback |
| `flbMarqueeLeft/Right` | Marquee scroll | infinite |
| `flbCaret` | Caret blink | infinite |

### Micro-interactions
- **Button press**: no scale change, only bg color shift
- **Switch toggle**: knob slides with ease-out, track color transitions
- **Checkbox check**: SVG path animates with `all 180ms ease`
- **Select dropdown**: chevron rotates 180°, dropdown fades in
- **Card hover**: subtle lift + shadow elevation
- **Tooltip**: fade + translateX(4px → 0)
- **Sidebar tooltip**: follows cursor, 250ms show delay (desktop), tap/long-press (mobile)

### Reduced Motion
All animations respect `html[data-no-fx]`:
```css
html[data-no-fx] * { animation-play-state: paused !important; }
```

---

## 12. Assets

### Logo URLs
- `assets/flable-mark.svg` — Flable mark icon (swoosh)
- `assets/google-g.svg` — Google sign-in icon

### Icon Library
- **Phosphor Icons v2.1.1**: `https://unpkg.com/@phosphor-icons/web@2.1.1`
- Classes: `ph ph-{name}`, `ph-bold ph-{name}`, `ph-light ph-{name}`
- Examples: `ph-trend-up`, `ph-warning`, `ph-arrow-right`, `ph-sun`, `ph-moon`, `ph-gear`, `ph-plus`, `ph-question`

### Image Placeholders

| Asset | URL |
|---|---|
| Unsplash photo placeholder 1 | `https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=280&h=100&fit=crop` |
| Unsplash photo placeholder 2 | `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=280&h=100&fit=crop` |
| Unsplash photo placeholder 3 | `https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=280&h=100&fit=crop` |
| Avatar placeholder 1 | `https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces` |
| Avatar placeholder 2 | `https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=faces` |
| Avatar placeholder 3 | `https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&crop=faces` |

### Image Placeholders (TODO)
- `[PLACEHOLDER: Dashboard preview image]`
- `[PLACEHOLDER: Pulse preview image]`
- `[PLACEHOLDER: Attribution preview image]`
- `[PLACEHOLDER: Insights preview image]`
- `[PLACEHOLDER: Product Insights preview image]`
- `[PLACEHOLDER: Creative Insights preview image]`
- `[PLACEHOLDER: Setup preview image]`
- `[PLACEHOLDER: Integrations preview image]`
- `[PLACEHOLDER: Bookmarks preview image]`
- `[PLACEHOLDER: Optimizations preview image]`
- `[PLACEHOLDER: UTM Status preview image]`
- `[PLACEHOLDER: Help preview image]`
- `[PLACEHOLDER: Settings preview image]`
- `[PLACEHOLDER: Orion AI assistant illustration]`
- `[PLACEHOLDER: Empty state illustration]`
- `[PLACEHOLDER: Onboarding illustrations]`

### Design System Bundle
- CSS: `_ds/flable-ai-design-system-c17dff3e-2e5d-498e-8908-1f9cc234e012/styles.css`
- JS: `_ds/flable-ai-design-system-c17dff3e-2e5d-498e-8908-1f9cc234e012/_ds_bundle.js`
- Fonts CSS: `_ds/.../tokens/fonts.css`
- Primitives CSS: `_ds/.../tokens/primitives.css`
- Brand CSS: `_ds/.../tokens/brand.css`

### Component Library (React)
Available via `_ds_bundle.js` in namespace `FlableAiDesignSystem_c17dff`:

| Component | Category |
|---|---|
| `FlableMark` | Brand |
| `BrandLogo` | Brand |
| `Avatar` | Data |
| `Badge` | Data |
| `Card` / `CardHeader` | Data |
| `Chip` | Data |
| `Table` | Data |
| `Alert` | Feedback |
| `ProgressBar` | Feedback |
| `Spinner` | Feedback |
| `Tooltip` | Feedback |
| `Button` | Forms |
| `Checkbox` | Forms |
| `IconButton` | Forms |
| `Input` | Forms |
| `Radio` | Forms |
| `Select` | Forms |
| `Switch` | Forms |
| `Textarea` | Forms |
| `NavItem` | Navigation |
| `Pagination` | Navigation |
| `Tabs` | Navigation |

---

## 13. Theme Switching

### How It Works
- Dark mode is the default (`:root`)
- Light mode: apply `class="light"` or `[data-theme="light"]` on any ancestor
- Theme toggle: `this.setState(s => ({ theme: s.theme === "dark" ? "light" : "dark" }))`
- `themeClass` renders as `"light"` or `""` on the root `<div>`

### Token Inheritance
- All `--flb-*` tokens auto-flip via CSS custom property overrides in `.light`
- Brand colors, gradients, radii, motion — shared across themes
- Shadows, surfaces, text, borders, status colors — theme-aware
- Components using these tokens adapt automatically

### App-Level Surfaces
`--app-canvas`, `--app-rail`, `--app-panel`, `--app-shell`, `--app-field`, `--app-chat`, `--app-card`, `--app-raised` — defined in `:root` (dark) and `.light` (light) for consistent panel coloring.

---

## 14. Special Patterns

### Gradient Ring (`[data-grad-ring]`)
- Animated conic gradient border for AI processing states
- Uses CSS `@supports (background: paint(x))` for modern browsers
- Fallback: linear gradient shimmer
- Toggle: `[data-ring-on]` attribute

### Client Logo Treatment
- `[data-client-logo]`: `filter: grayscale(1) brightness(0) invert(1)` (dark mode)
- `.light [data-client-logo]`: `filter: grayscale(1) brightness(0)` (light mode)

### Message Active State
- `[data-msg-act][data-on]`: `background-color: var(--flb-tint-violet) !important; color: var(--flb-on-violet) !important`

### Scrollbar Styling
- Width: 10px
- Thumb: `var(--flb-surface-3)`, 9999px radius, 3px transparent border padding
- Track: transparent
