# Orion return loop — work order

Internal notes for Abbas. The team pitch is `docs/orion-return-deck.html`. This file is the timeline source. Live first-run facts: `docs/live-onboarding/FLOW.md` (capture of https://devolve.flable.ai). Prototype: `index.html` only.

**Do not put a prototype-vs-live comparison table in the deck.** Comparison stays here (and on any private canvas). The deck is for the team: what we work on next, Abbas’s ideas and questions, and a proposal for opt-in new UI.

---

## North star (Anirudh)

Users **understand Orion**, **understand Flable’s features**, and have an experience that **makes them want to come back**.

---

## Timeline (order is the point)

### P0 — This week

Align the prototype to **live first-run**: same screens and gates; keep design-system craft. Not a new signup.

One sentence for the team: the prototype will match live first-run so we are looking at one product.

Live first-run (approved; do not redesign against it): sign-in / sign-up / OTP → Connect Accounts (Continue locked until a channel) → Confirm Details → (pricing route exists; never painted in the capture). Residual Setup Guide lives after Orion, not as a replacement first-run.

### P1 — The bet (highest leverage for the CEO goal)

Orion home becomes the **activity feed** from the sign-in teaser: “While you were away, Orion found 3 things worth your attention.”

- First audit after connect.
- Next session is “while you were away,” not an empty chat.
- Feed rows open Pulse / Insights / chat.

This is the work that makes the sign-in promise true, and the work that makes people come back.

### P2 — Setup that can finish

- One Meta connect path (live currently has OAuth on first-run vs paste-token in Integrations).
- Shopify matching first-run (not “logistics” API keys).
- Repair Ad Tracking unlocks.
- Templates they can use.

### P3 — Features discovered from Orion

Not a sidebar tour. Features are found from the feed and from Orion, so users understand what else Flable does.

### P4 — After home works: multi-client IDs (Anirudh)

One account, many client IDs. Repeat Connect → Confirm only. **Not in first-run.**

---

## Agreement (ask the team)

First-run does not grow (no client picker, no plan grid) until Orion home delivers the sign-in promise.

---

## Open questions (from live capture — still unknown)

Ask the team. Do not invent answers.

1. **Confirm Details** and `/onboarding/pricing` were never painted (0 connections). What is actually on those screens? Is pricing still in first-run?
2. Setup stays **0 of 3** when ads are connected but Shopify is pending. Is that intended?
3. Two Meta connect UIs (OAuth vs paste token). Which is the product story?
4. Confirm the agreement above: first-run does not grow until Orion home delivers the sign-in promise.

---

## Writesonic / opt-in new UI (proposal, not committed engineering)

The team has not fully integrated the prototype. Engineering is unsure about **overriding the current live UI** because there are already users.

**Problem.** Live UI has users. A hard cutover is risky.

**Pattern.** Writesonic shipped a new UI and let users **choose to switch**. They prompted at onboarding, via notifications, and **in the product** (“try the new UI — you can do X here, the experience is better”). Not a big-bang override.

**Design implication.** For an opt-in switch to work, the prototype must become a **guided, educational product** — informative guidance at every point so the new UI teaches itself. A prettier shell will not convert anyone.

**Ask.** Is the team open to an opt-in new experience (AB in a smart way) rather than ripping out live UI?

Do not implement this AB test in `index.html` until the team agrees.

---

## Private designer notes (not for the deck)

Facts from the live capture, so the prototype can match first-run in P0:

- Live home after a completed account is Orion chat (`/orion-agent`) plus Setup 0 of 3 when Shopify is still pending. The sign-in left rail already shows the activity-feed teaser; that teaser is not the logged-in home.
- Live first-run stepper is Connect Accounts → Confirm Details. `/onboarding/pricing` exists but redirected when no channel was connected.
- Prototype still has extra first-run surface (profile picker, plan grid, setting-up overlay, sidebar tour). P0 is to match live gates, not to keep inventing signup.
- Two Meta connect implementations in live. Shopify Integrations copy is logistics / API credentials; first-run Connect is the story we should match.

Keep this comparison out of the pitch deck.
