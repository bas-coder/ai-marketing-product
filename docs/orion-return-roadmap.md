# Orion return loop

Working source for what we do next. The stakeholder deck is `docs/orion-return-deck.html` (for Anirudh, product, and eng). Live vs prototype comparison stays out of that deck. Live capture: `docs/live-onboarding/FLOW.md`. Prototype: `index.html`. Live first-run (CEO-approved): https://devolve.flable.ai.

## North star

Anirudh’s goal: users **understand Orion**, **understand Flable’s features**, and have an experience that **makes them want to come back**.

## One product

The prototype will match live first-run (same screens and gates; keep design-system craft). That is not a new signup. First-run is approved. Do not grow first-run (no client picker, no plan grid) until Orion home delivers the sign-in promise.

## Order of work

Order is the point. Do not skip ahead of the bet.

### P0 — this week: align the prototype to live first-run

Same screens and gates as live. Keep DS craft. Not a new signup. The team should be looking at one product.

### P1 — the bet: Orion home is the activity feed

Live sign-in already promises this: “While you were away, Orion found 3 things worth your attention.”

- First audit after connect.
- Next session is “while you were away,” not an empty chat.
- Feed rows open Pulse / Insights / chat.

This is the highest-leverage work for the CEO goal.

### P2 — setup that can finish

- One Meta connect path (live currently has OAuth on first-run vs paste-token in Integrations).
- Shopify matching first-run (not “logistics” API keys).
- Repair Ad Tracking unlocks.
- Templates they can use.

### P3 — features discovered from Orion

Not a sidebar tour. Users find Pulse, Insights, and the rest because Orion sent them there.

### P4 — after home works: multi-client IDs

Anirudh: one account, many client IDs. Repeat Connect → Confirm only. Not in first-run.

## Writesonic / opt-in UI (proposal, not committed)

The team has not fully integrated the prototype. Engineering is unsure about overriding the live UI because we already have users. A hard cutover is risky.

Pattern (Writesonic): they shipped a new UI and users could **choose to switch**. They prompted at certain points:

- during onboarding
- via notifications
- while using the product (“try the new UI — you can do X here, the experience is better”)

Not a hard cutover. Smart AB / opt-in, not a big-bang override.

**Design implication:** the prototype must be a guided, educational product (informative guidance at every point) or the switch will fail. Prettier screens are not enough.

**Ask the team:** are we open to opt-in new UI rather than overriding live for existing users?

Do not implement this in `index.html` until the team agrees.

## Open questions (from live capture — still unknown)

Ask. Do not invent answers.

1. Confirm Details and `/onboarding/pricing` were never painted (0 connections). What is actually on those screens? Is pricing still in first-run?
2. Setup stays **0 of 3** when ads are connected but Shopify is pending. Is that intended?
3. Two Meta connect UIs (OAuth vs paste token). Which is the product story?
4. Agreement: first-run does not grow (no client picker, no plan grid) until Orion home delivers the sign-in promise.

## Designer notes (not for the deck)

Private comparison and capture detail live in `docs/live-onboarding/FLOW.md`. Do not put a prototype-vs-live table in the stakeholder deck.
