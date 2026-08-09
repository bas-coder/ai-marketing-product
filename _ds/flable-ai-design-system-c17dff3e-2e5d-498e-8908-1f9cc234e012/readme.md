# flable.ai — Design System

The brand and product design system for **flable.ai**, the **AI CMO** — an autonomous
Chief Marketing Officer for D2C brands and agencies. This repository holds the
foundations (tokens, type, color, gradients), the reusable React component library,
the brand assets, and a high-fidelity recreation of the AI CMO web app.

> "Flable AI CMO isn't a dashboard — it functions like a real Chief Marketing
> Officer for your brand. Your current tools show you *what* happened. Flable AI
> shows you *why* it happened."

---

## What flable.ai is

flable.ai connects a brand's entire marketing stack — **Meta, Google, Amazon Ads**,
plus commerce/email sources — and acts as an always-on analyst that **optimizes for
profit, not vanity metrics**. Users converse with it ("Ask AI CMO"): it diagnoses
root causes, surfaces low-ROAS ad groups, and returns concrete reallocation plans
with projected lift. Headline outcomes the brand sells: *40% reduction in wasted ad
spend · 25%+ lift in ROAS · 2× faster decisions.* Trusted by 50+ D2C brands and 20
agencies across India, EU, MENA and the US. Offices in Bangalore and Munich.

**Surfaces represented here**
- **AI CMO web app** (`ui_kits/flable-app/`) — the core product: a conversational
  analyst with an Ask thread, a profit-first Dashboard, and channel Connections.
- **Brand & marketing collateral** — the source file also contains print trifolds
  and infographic "use-case" report pages; their visual language informs the
  foundations here.

## Sources

- **Figma:** "FLB Foundation.fig" (attached). Key pages: `Style-Guide` (tokens,
  gradients, theme collection), `Components` (HeroUI-derived primitives + custom
  components), `Infographics` (USECASE-V1 chat artifacts, Trifold), `THUMBNAIL`.
  Token collections: Primitives, Responsive (spacing/type by breakpoint), Theme
  (light/dark surfaces). The system is built on a HeroUI/NextUI component base
  re-skinned with FLB brand variables.
- No codebase was provided. Components here are clean re-authorings driven by the
  extracted token system, not copies of the HeroUI internals.

---

## Content fundamentals — how flable.ai writes

- **Voice:** a sharp, senior operator. It speaks like a CMO briefing a founder —
  confident, specific, outcome-led. Never hypey, never cute.
- **Person:** addresses the user as **"you" / "your"**; refers to the product as
  **"Flable AI" / "AI CMO"** or **"I"** in-conversation ("I found 3 ad groups…").
- **Always quantified.** Copy leans on real numbers and deltas: "$1,713.61 but only
  2 purchases", "ROAS < 1.5", "+25% ROAS", "$7K reallocation". Claims come with a
  metric and a timeframe ("last 30 days", "Sep 16 – Oct 15").
- **Diagnosis → action.** The recurring structure is *Insight* → *Recommendation* →
  a button that does the thing ("Pause Ad Set Now", "Go to Your Flable Dashboard").
- **Profit framing over vanity.** "real campaign profit instead of quality metrics",
  "optimizing purely for profit and brand goals".
- **Casing:** Title Case for product nouns and section headers ("AI CMO Insights",
  "Creative & Channel Performance"); sentence case for body and helper text.
- **No emoji.** Status and emphasis are carried by color, badges and icons — never
  emoji. Em dashes and "→" arrows are used freely for rhythm.
- **Example lines:** "Here's your performance review for the last 30 days across
  Meta, Google, and Amazon Ads." · "Reallocate $7K from carousel to short UGC
  video ads." · "Pausing this ad set will prevent ~25% in wasted spend."

---

## Visual foundations

**Mood.** Dark-first, premium, analytical. A near-black canvas
(`--flb-bg` `#0D0D0E`) with slightly-lifted graphite cards (`#151517`), violet as
the single decisive accent, and a magenta→violet→blue gradient reserved for brand
moments and hero CTAs.

- **Color.** Primary is the brand **violet** (`#643CC1`, with `#A08BFF` as the
  lighter UI/link tone and `#7F56D9` as the signature mid-violet). Magenta
  (`#E9348B`) and blue (`#009EFF`) are the gradient bookends, used sparingly as
  flat fills. Neutrals are a true-grey ramp (`grey-50`→`grey-1000`). Status colors
  are slightly brightened for dark ground (success `#6AD275`, warning `#FFA20C`,
  error `#FF6B5E`, info `#5AB0FF`).
- **Themes.** Dark is primary; a **light theme** ships too. The whole `--flb-*`
  semantic layer (surfaces, ink, lines, shadows, and status tint/`on` pairs) flips
  under `class="light"` or `[data-theme="light"]` on any wrapper — components read
  the tokens and adapt automatically, so the violet, gradients and radii stay
  constant. Light surfaces layer white cards on `grey-50`; status colors deepen for
  contrast on light ground. The app shell has a sun/moon toggle (persisted).
- **Type.** **Poppins** for display/headings and the wordmark (400–600, tight
  `-0.01/-0.02em` tracking); **Inter** for all body, UI and data (400–600);
  **Geist** as a numeric/label accent. Display rarely exceeds 600 weight — the look
  is clean, not heavy.
- **Gradients.** `hero` (magenta→violet→blue radial) for brand surfaces; `energetic`
  (pink→violet) for primary CTAs; `primary-focus-dark` (deep violet) as a card glow
  behind recommendations; `chart` (violet→transparent) for area fills; `onboarding`
  (soft lilac) for the rare light surface.
- **Backgrounds.** Flat dark fills, not photography. Depth comes from surface
  layering (`bg` → `surface` → `surface-2` → `surface-3`) and hairline borders
  (`--flb-line` `#2D2D31`), not heavy shadows.
- **Corners.** Generous but not pill-everything: inputs/buttons `8–12px`, cards
  `14–16px`, large brand panels `20px`, chips/badges/avatars/toggles fully round.
- **Borders & elevation.** Every elevated surface carries a 1px hairline plus a soft
  dark shadow; on dark ground shadows read as depth, and a faint light inset
  (`rgba(237,241,245,0.05–0.08)`) gives the top edge a subtle rim. A violet glow
  (`--flb-glow-violet`) marks focus/active and AI moments.
- **Hover / press.** Buttons lift 1px and deepen in color (gradient CTAs add a
  violet glow); ghost/nav rows fill to `surface-3`; active nav gains a violet inset
  ring + violet icon. Disabled drops to ~45% opacity. No bounce.
- **Motion.** Quick and restrained — ~180ms, `cubic-bezier(.4,0,.2,1)`; entrances
  use a softer `ease-out`. Progress/area fills animate in; nothing loops decoratively
  except the loading spinner.
- **Focus.** Violet 400 border + 3px `rgba(160,139,255,0.18)` ring on inputs/selects.
- **Transparency & blur.** Tints over solids (e.g. `rgba(160,139,255,0.12)` for
  secondary fills and selected chips); blur is not a core motif.
- **Imagery vibe.** Where imagery appears it is product UI and data — cool, dark,
  high-contrast. Avatars fall back to brand-gradient monograms.

---

## Iconography

- **Primary set: Phosphor** (regular, ~1.7px stroke, rounded joins). The source file
  uses Phosphor icons (CaretRight, CloudArrowUp, EnvelopeSimple, TrendUp/Down,
  Megaphone, MapPinLine, Gear, Globe, etc.) alongside some Solar/iconsax ("Bold /
  Essentional, UI / Pin") and vuesax glyphs. We standardize on **Phosphor** for
  consistency.
- This kit ships a small inline Phosphor-style set in
  `ui_kits/flable-app/icons.jsx` (`window.Icons`) — stroke 1.7, `currentColor`,
  sized via a `size` prop. For production, install [`phosphor-react`] or load
  Phosphor from CDN; match the **regular** weight.
- **Sizes:** 16 (inline/xs) · 18 (nav/UI) · 20 (base) · 24 (lg). Icons inherit text
  color; muted icons use `--flb-ink-3`, active/AI use violet 400.
- **No emoji**, no unicode-as-icon. Channel/brand logos (Meta, Google, Amazon,
  Shopify…) are represented as colored monogram tiles in the kit rather than
  reproduced marks — swap in official logos for production.
- **Brand mark:** `components/brand/` ships the flable.ai swoosh as both an SVG
  (`assets/logo/flable-mark.svg`) and the `FlableMark` / `BrandLogo` components
  (gradient or mono).

---

## Index / manifest

**Root**
- `styles.css` — global entry; `@import`s the three token files. Consumers link this.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill wrapper for use in Claude Code.

**`tokens/`**
- `fonts.css` — Poppins / Inter / Geist (Google Fonts) + family vars.
- `primitives.css` — raw Figma Variables (colors, spacing, radius, theme scopes).
- `brand.css` — semantic + convenience layer: surfaces, ink, gradients, radii,
  spacing, elevation, motion. **Prefer these `--flb-*` tokens when building.**

**`foundations/`** — specimen cards for the Design System tab (Colors, Type,
Spacing, Brand gradients).

**`components/`** — React primitives (compiled to the runtime bundle):
- `brand/` — `BrandLogo`, `FlableMark`
- `forms/` — `Button`, `IconButton`, `Input`, `Textarea`, `Checkbox`, `Radio`,
  `Switch`, `Select`
- `data/` — `Badge`, `Chip`, `Avatar`, `Card` (+ `CardHeader`), `Table`
- `feedback/` — `Alert`, `ProgressBar`, `Tooltip`, `Spinner`
- `navigation/` — `Tabs`, `NavItem`, `Pagination`

**`ui_kits/flable-app/`** — interactive recreation of the AI CMO web app
(`index.html` + `AppShell`, `AskScreen`, `DashboardScreen`, `ConnectionsScreen`,
`icons`). See its `README.md`.

**`ui_kits/flable-onboarding/`** — pixel-faithful 7-step signup → audit onboarding
flow (sign up, OTP verify, connect ad accounts, confirm brand, referral, PAYG
pricing, provisioning). Stars **Orion**, the agent cube mark. See its `README.md`.

**`assets/logo/`** — `flable-mark.svg` (gradient brand mark).

### Using a component in card/kit HTML
```html
<link rel="stylesheet" href="/styles.css" />
<script src="/_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, Card, Table } = window.FlableAiDesignSystem_c17dff;
</script>
```
