# Feature → source file map

Handoff map for the Flable AI Design prototype. Primary product surface is **`index.html`** (single-file Vue-like SC component). Other files are supporting assets, docs, or older exports.

| Feature | Primary source | Related / notes |
| --- | --- | --- |
| **App shell / theme / tokens** | `index.html` (CSS variables, `.light` / dark) | `_ds/.../tokens/brand.css`, `primitives.css`, `fonts.css`; `exports/flable-tokens.css` |
| **Sign-in** | `index.html` (`screenLogin`) | Assets: `assets/flable-mark.svg`, `assets/google-g.svg` |
| **Sign-up** | `index.html` (`screenSignup`) | `assets/signup-orbit.png` (if present under assets) |
| **Email OTP** | `index.html` (`screenOtp`) | — |
| **Forgot / reset password** | `index.html` (`screenReset`) | — |
| **Post-OTP loading** | `index.html` (`screenLoading`) | Hairline loader in DS style |
| **First-run onboarding overlay** | `index.html` (`onboardingOpen`: profiles, connect, confirm, plans, settingup) | — |
| **Select a client / profiles** | `index.html` (`screenProfiles`) | Client pool logic in same file |
| **Connect ad accounts** | `index.html` (`screenConnect`) | Meta / Google / Shopify / GSC / GA rows |
| **Confirm details** | `index.html` (`screenConfirm`) | — |
| **Pricing / plans** | `index.html` (`screenPlans`) | Reference layout: `flable-pricing-v2.html` |
| **Referral modal** | `index.html` (`referralOpen`) | — |
| **Orion chat home** | `index.html` (`nav === "chats"`, composer, messages) | `assets/orion.svg`, `assets/ai-cmo.svg` |
| **Setup Guide checklist** | `index.html` (floating setup panel) | Tune Orion · Connect · Repair order |
| **Orion personalization (7Q)** | `index.html` (`orionOpen`, `ORION_FLOW`, `ORION_ROLES_V2`) | Aligned to live devolve Setup Guide Qs |
| **Sidebar / nav + plan locks** | `index.html` (aside nav, `featLocked`, explain pages) | — |
| **Dashboard / Pulse / Insights stubs** | `index.html` (`isHome` analytics regions) | — |
| **Creative Insights** | `index.html` (`nav === "creative"`, `ciBuild`) | Older export: `Creative Insights.dc.html` |
| **UTM / Repair Ad Tracking** | `index.html` (`nav === "utm"`, `utmBuild`) | — |
| **Scheduler / reports** | `index.html` (`nav === "scheduler"`, `schedBuild`) | — |
| **Settings (People / Clients)** | `index.html` (`nav === "settings"`) | Seats, invite, feature toggles, clients |
| **Integrations (in-app)** | `index.html` (integrations nav / explain) | Live catalog is richer on devolve |
| **Multi client ID add flow** | `index.html` (`startAddClient`, `CLIENT_POOL`) | Repeat Connect → Confirm |
| **Tour overlay** | `index.html` (`tourActive`) | — |
| **Locked-feature explainers** | `index.html` (`FEAT_EXPLAIN`, `nav === "explain"`) | — |
| **Design system package** | `_ds/flable-ai-design-system-…/` | Tokens + `styles.css` + `readme.md` |
| **Live onboarding capture** | `docs/live-onboarding/FLOW.md` + PNGs `01`–`47` | Source of truth for CEO-approved first-run |
| **Return roadmap (designer)** | `docs/orion-return-roadmap.md` | Comparison + timeline |
| **Team pitch deck** | `docs/orion-return-deck.html` | Timeline + opt-in UI idea |
| **This feature map** | `docs/FEATURE-SOURCES.md` | — |
| **Shared context** | `CHAT-CONTEXT.md`, `CLAUDE.md`, `design.md`, `share/` | Not runtime product |

## Rule of thumb

- Ship / demo the product from **`index.html`**.
- Treat **`docs/live-onboarding/`** as the live-product reference, not as UI to ship.
- Treat **`uploads/`**, `standalone-src.html`, and `*.dc.html` as archives unless someone asks to revive them.
- Do not use solid `#ffffff` / `#fff` in new UI — use `#fcfcfc` (`CLAUDE.md`).
