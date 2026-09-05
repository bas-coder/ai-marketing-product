# Orion return — designer roadmap

**Audience: Abbas (designer).** This file is homework and comparison. It is **not** the team pitch.

The pitch Abbas presents to Flable (CEO Anirudh + eng/product) is **`docs/orion-return-deck.html`**. That deck is the next work (timeline), plus ideas, concerns, and questions. It does **not** contain a prototype-vs-live bake-off. Do not put “Close the screens that drifted” or “Keep vs Remove from first-run” on team slides.

Live first-run on **https://devolve.flable.ai** (captured 5 Sep 2026) is the latest CEO-approved signup. Alignment of first-run chrome is designer work (P0 below). Do not pitch a different signup.

Live screen-by-screen capture (when that PR is on the branch): `docs/live-onboarding/FLOW.md`. Until it lands, treat the 5 Sep 2026 session notes in that PR as source. **Confirm Details and `/onboarding/pricing` were never painted** (Continue locked at 0 connections; those routes redirected). Do not invent those screens. Do not put the Karmikh password or any secrets in this file.

---

## How to use these files

| File | Who | What |
| --- | --- | --- |
| `docs/orion-return-deck.html` | Anirudh, eng, product | Speakable 16:9 pitch: CEO goal → live product gap after approved first-run → P1–P4 → Writesonic-style switch → questions |
| **This file** | Abbas | Full prototype vs live comparison, P0 chrome alignment, keep/remove from first-run, same switch idea as the deck |
| `docs/live-onboarding/FLOW.md` | Abbas | What live actually did, with screenshots. Capture, not a pitch |

---

## What the team deck says (so this file cannot contradict it)

1. **North star (CEO):** users understand Orion, understand Flable’s features, and have an experience that makes them want to come back.
2. **The gap is on live, after the approved first-run:** sign-in already promises “While you were away, Orion found 3 things worth your attention.” After OTP + connect, live opens an **empty chat** + **Setup 0 of 3**. Connect copy already promises 30 days of data and a free audit. We are not arguing that prototype onboarding is “better than live.”
3. **P0 is one line in the room, not the story:** aligning the prototype to the approved live first-run so we share one product.
4. **Next work for users, in order — do not skip ahead:**
   - **P1 (the bet):** Orion home is the activity feed.
   - **P2:** Setup that can finish.
   - **P3:** Features from Orion, not a tour.
   - **P4 (Anirudh, after home):** one Flable account, many client IDs. Repeat Connect → Confirm only.
5. **Idea, not a spec:** do not override the live UI for existing customers. Ship the new experience as a **switchable UI**, like **Writesonic** — opt-in, with prompts at onboarding, notifications, and in-product. The prototype must **teach** at every point or the switch fails.
6. **Questions stay questions** (Confirm Details, pricing route, Setup 0 of 3 / Shopify, the integration concern, in-product education, one connected test tenant, do not grow first-run until P1).

Hygiene (log out from Orion, blank `/invitation`, workspace chip that does not switch, dual Meta, demo email on a cold OTP URL) is a footnote in the deck. Not the pitch.

---

## Idea: Writesonic-style UI switch (smart A/B / opt-in)

This is the same proposal as slides 7–8 of the team deck. It is an **idea**, not a decided engineering spec. No conversion numbers. We are describing a pattern, not Writesonic’s metrics.

### The concern

Abbas built a new UI in the prototype. The team has **not fully integrated it**. The honest read: they are unsure whether they should **override the current live UI** when they already have a lot of users. A hard cutover feels like wiping the product people already live in. That fear is why the prototype stalls.

### The move

Do **not** ask engineering to wipe the current UI for existing customers.

Ship the new experience as a **switchable UI** (smart A/B / opt-in), like **Writesonic**: they shipped a new UI and let users **choose to switch**. At certain points they **prompted** users to try it:

- during **onboarding**
- via **notifications**
- **while using the product** — “use the new UI — it’s better, you can do this here, the experience is better”

Prompt at moments where the new UI is clearly better: first-run, a notification when Orion found something, a mid-flow “this is easier in the new UI.”

That is how we respect existing users **and** still land Orion.

### What that forces on the prototype

For the switch to be honest, the new UI cannot just look nicer. Abbas has to **really improve the prototype**: lots of **educational / informative** content, and **guide the user at every point** so the new UI is obviously better — not a cold cutover.

If people try it, get lost, and bounce back, we will learn the wrong lesson.

**Agreement to put in front of the team:** engineering + design mean the same thing by “switch.” We **educate in-product** (onboarding, notifications, in-flow prompts). We do not dump a new shell on people.

---

## P0 — designer homework (not the team story)

Match prototype chrome to the **approved live first-run** so Abbas and the team share one product.

Live first-run that was actually captured:

1. `/auth/sign-in` or `/auth/sign-up` (split: Orion teaser / form)
2. Email OTP (`/auth/email-verification`)
3. `/onboarding/connect-accounts` — stepper **1 Connect Accounts · 2 Confirm Details**, **no Skip**, Continue **locked** until at least one channel
4. Confirm Details / pricing — **not seen** (redirected at 0 connections)

Do **not** add to first-run in the prototype while doing P0:

- client picker / “Select a client”
- plan grid
- referral as a gate before they have met Orion
- “are you an agency?”

Those belong later (P4 / billing), not in signup. First-run should **not grow** until Orion home is the product promised on sign-in.

P0 is internal. The deck mentions it in one line.

---

## P1 — the bet: Orion home is the activity feed

Sign-in **already** promises: “While you were away, Orion found 3 things worth your attention.” (Live left rail, 5 Sep 2026. Same idea on the prototype login.)

After OTP + connect, live currently opens **empty chat** at `/orion-agent` + **Setup 0 of 3**.

Next work:

- Home = **last-48h feed** (as the teaser already shows)
- First session after connect = the **audit** (30 days, as connect copy already says)
- Next session = **While you were away**
- A feed row opens **Pulse / Insights / chat with context**

This is how they understand Orion and come back. This is the north star in one screen.

---

## P2 — Setup that can finish

Facts from live (Karmikh, already on Orion):

- Setup stayed **0 of 3** with Google Ads + Meta Ads connected; **Shopify pending**
- Step 2 Repair Ad Tracking is **locked on Shopify**
- Setup step 1 Connect goes to **Integrations** (catalog), not the first-run OAuth wizard
- **Two Meta connect UIs:** onboarding Connect = Facebook OAuth; Integrations Facebook Ads = **paste token + account IDs**
- Shopify first-run card reads like OAuth / store analytics; Integrations Shopify is **API key / secret / admin token** with “manage your logistics seamlessly”
- Tune Orion is **7 questions** ending in **Generate my templates** — templates must be something they can **see and use**

Ask the team to pick **one Meta story**. Do not invent a third.

---

## P3 — Features from Orion, not a tour

Dashboard / Pulse / Insights are discovered from a **feed item**, not a slideshow of the sidebar.

Plan locks only after they already care about Orion.

---

## P4 — after home: multi-client IDs (Anirudh)

One Flable account, many client IDs. Repeat **Connect → Confirm** only.

- Not a second signup
- Not “are you an agency?” on first-run
- **Agency AM** is already a Setup Guide role on live (Q1)
- Seats/invites live under Users after login, not in signup

The prototype’s **Select a client** step on first-run is the thing to **remove from first-run** (designer P0 / keep-vs-remove). Multi-client is P4, after home works.

---

## Prototype vs live — designer only

Source: live SPA at https://devolve.flable.ai, 5 Sep 2026, 0 ad accounts connected on the new user (Continue never enabled). Prototype: local `index.html`. **Do not present this table to the team as the pitch.**

| Surface | Live (devolve) | Prototype (`index.html`) | Designer note |
| --- | --- | --- | --- |
| Entry | Root → `/auth/sign-in`. No marketing homepage | Login screen is the start | Match live. Not a pitch topic |
| Sign-in teaser | “While you were away, Orion found **3 things worth your attention.**” Feed mock, Last 48 hrs | Same headline and feed idea | **Keep.** This *is* P1. Live does not honor it after login |
| Sign-in social | “Trusted by 250+ DTC brands · 5 ★ on Shopify” | “Join 100+ D2C brands… 4.9 ★ on G2” | P0 copy align to live |
| Sign-in extra | No theme toggle on live capture | Theme toggle on auth | P0: drop or hide for first-run chrome match |
| Signup fields | Full Name, Work Email, Company URL, Password. Live URL lookup (**Checking validity…** / **Valid URL ✓**) | Same fields; prototype does not do the live lookup | P0. Do not add a client picker here |
| OTP | `/auth/email-verification`, 10-minute mail from `info@flable.ai`. Cold URL shows demo inbox `sarah@luminaryskincare.com` | “Type any 6 digits to continue” | Hygiene later for the demo email. Do not put secrets here |
| Forgot password | `/auth/reset-password`: email + new password + confirm **on one card** (not email-link-only) | Email → 6-digit code → new password | P0 chrome. Not the pitch |
| After OTP (new user) | Forced to `/onboarding/connect-accounts` | Loading hairline, then onboarding modal | P0: live is a full-page connect, not a 4-step modal over the app |
| Connect | Split page. Left: **Wake Orion up.** Right: “We'll pull **30 days**… free audit.” Meta / Google / Shopify + optional GSC / GA. **No Skip.** Continue locked at 0 of 5. Stepper: **Connect Accounts → Confirm Details** | Same channel list and 30-day audit copy, inside a modal. Stepper is **4 steps** (connect, confirm, plans, setting up) unless adding a client | **Close:** prototype stepper should match live (two steps) until we know what Confirm/pricing really are. **Do not add Skip** |
| Meta on Connect | Same-tab **Facebook OAuth** | Prototype Connect button (no real OAuth) | Live inconsistency vs Integrations is a **team question** (pick one story) |
| Confirm Details | Route `/onboarding/confirm-details` **redirected** to connect at 0 connections. **Never painted. Do not invent.** | Prototype paints “Does this look right?” (enriched company fields) + “Get My Free Audit” | Designer may keep a confirm **concept** for P4 / after connect. **Do not claim live looks like the prototype.** Capture live first with a connected tenant |
| Pricing | `/onboarding/pricing` **redirected** the same way. Razorpay script is on the HTML shell. Unknown if plan selection is still in this first-run | Full **plan grid** in first-run + referral modal | **Remove from first-run** until P1 is the product. Ask the team: first-run after Confirm, or later billing only? |
| After connect / returning user | `/orion-agent`: empty chat, “Your performance marketer that never sleeps,” **Setup 0 of 3** | Lands in the app/chat with setup / tour patterns | **This is the P1 product gap on live** — not “prototype onboarding wins” |
| Setup Guide | 3 steps. Ads connected ≠ step 1 done if Shopify pending. Repair gated on Shopify. Tune Orion = 7 questions → Generate my templates | Similar 3-item setup in the prototype | P2 |
| Integrations Meta | **Paste** access token + account IDs | n/a as a second UI | Dual Meta = P2 question + hygiene footnote |
| Integrations Shopify | API key / secret / admin token. Subcopy: logistics | Connect tile in first-run | P2 |
| Agency / clients | **Agency AM** in Setup Q1. No first-run tenant picker. `choose-profile` never rendered. Karmikh chip did not open a client list | **Select a client** on first-run; later in-app client chip that **does** switch | **Remove picker from first-run.** P4 is Connect → Confirm repeat after home. Prototype in-app switching is the later pattern |
| Log out | Obvious **Sign out** on first-run connect. From Orion, avatar did not show a reliable Log out in the capture | Log out in profile menu | Hygiene later |

### Keep vs remove from first-run (designer only — not team slides)

**Keep / match live**

- Sign-in activity-feed teaser (the P1 promise)
- Connect 30-day OAuth copy and “at least one account”
- No Skip on connect
- Two-step stepper names (Connect → Confirm) until Confirm is captured
- Agency as a Setup Guide **role**, not a signup fork

**Remove from first-run until P1 is real**

- Client picker / “Select a client”
- Plan grid in signup
- Referral as a stop before they have seen Orion
- Extra prototype-only chrome that makes first-run longer than live (theme toggle on auth is optional polish, not a step)

**Do not invent; capture first**

- Confirm Details body
- Whether `/onboarding/pricing` is still in this first-run

**Close (P0)**

- Prototype first-run **shape** (full-page connect, two-step stepper, no plans in the wizard) → live
- Sign-in / signup left-rail copy → live where it drifted
- Forgot-password pattern → live or a later hygiene ticket, not a team-slide fight

---

## Open questions (same as the deck — still questions)

1. **Confirm Details** — what is actually on that step? Never captured (Continue locked at 0 connections).
2. Is **`/onboarding/pricing`** still in first-run after Confirm, or later billing only? Route redirected in capture.
3. Does Setup step 1 require Shopify even when Google + Meta are connected? (Karmikh stayed 0 of 3.)
4. **Integration concern:** team has not fully taken the prototype UI. Fear of overriding the live UI for existing users. Writesonic-style switch is the proposed way through.
5. For the switch to be honest: engineering + design agree we will **educate in-product** (onboarding, notifications, in-flow prompts), not dump a new shell on people.
6. Need **one connected test tenant** so Confirm / pricing can be captured.
7. First-run should **not grow** (no client picker, no plan grid in signup) until Orion home is the product promised on sign-in.

Capture leftovers that are **not** the pitch (hygiene / later):

- Log out from Orion
- Blank `/invitation`
- Workspace chip that does not switch
- Dual Meta (OAuth vs token)
- Demo email on a cold OTP URL
- Disposable devolve tenant left on connect-accounts (whether to delete — ops, not deck)

---

## Hygiene / later (footnote)

Same list as the last slide of the deck. Track here so it does not sneak into the pitch:

- Log out from Orion
- `/invitation` is a blank page
- Workspace chip (`karmikh`) did not switch clients in the capture
- Dual Meta connect implementations
- Hardcoded demo email on cold `/auth/email-verification`

---

## Capture constraints (do not violate)

- 0 connections redirected. Confirm Details and pricing were **never painted** on devolve. Open questions stay questions.
- Do not invent live product screens.
- Do not record passwords, JWTs, or the Karmikh credential in this repo.
- `index.html` onboarding is **not** rewritten as part of the team-pitch work. P0 alignment is a later design pass.
