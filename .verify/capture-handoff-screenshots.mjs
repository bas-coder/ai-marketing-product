/**
 * Capture high-res screenshots for frontend handoff.
 * Writes to TEMP first so live-server file-watch does not reload mid-capture.
 */
import { chromium } from "playwright";
import { mkdirSync, writeFileSync, statSync, cpSync, rmSync, readdirSync, readFileSync } from "fs";
import { join } from "path";
import { createHash } from "crypto";
import { tmpdir } from "os";

const FINAL = "C:\\Projects\\Flable AI Design\\handoff\\screenshots";
const OUT = join(tmpdir(), "flable-handoff-shots-" + Date.now());
const URL = "http://127.0.0.1:5500/index.html";
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const VIEW_W = 1920;
const VIEW_H = 1080;
const DPR = 2;

mkdirSync(OUT, { recursive: true });
mkdirSync(FINAL, { recursive: true });

const manifest = [];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function findLogicExpr() {
  return `(() => {
    function findLogic(fiber, depth) {
      if (!fiber || depth > 80) return null;
      const node = fiber.stateNode;
      if (node && node.logic && node.logic.state && typeof node.logic.setState === "function" && "screen" in node.logic.state) return node.logic;
      return findLogic(fiber.child, depth + 1) || findLogic(fiber.sibling, depth + 1);
    }
    const root = document.getElementById("dc-root");
    if (!root) return null;
    const key = Object.keys(root).find((k) => k.startsWith("__reactContainer") || k.startsWith("__reactFiber"));
    if (!key) return null;
    let fiber = root[key];
    if (fiber && fiber.current) fiber = fiber.current;
    return findLogic(fiber, 0);
  })()`;
}

async function boot(page) {
  await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 90000 });
  await page.waitForSelector("#dc-root", { timeout: 30000 });
  await page.waitForFunction(() => document.querySelector("#dc-root")?.children?.length > 0, { timeout: 30000 });
  await sleep(1000);
  await page.addStyleTag({
    content: `[data-tip]::after{opacity:0!important;visibility:hidden!important}*{caret-color:transparent!important}::-webkit-scrollbar{width:0!important;height:0!important}`,
  });
}

async function setAppState(page, patch) {
  for (let i = 0; i < 4; i++) {
    try {
      const ok = await page.evaluate((p) => {
        function findLogic(fiber, depth) {
          if (!fiber || depth > 80) return null;
          const node = fiber.stateNode;
          if (node && node.logic && node.logic.state && typeof node.logic.setState === "function" && "screen" in node.logic.state) return node.logic;
          return findLogic(fiber.child, depth + 1) || findLogic(fiber.sibling, depth + 1);
        }
        const root = document.getElementById("dc-root");
        if (!root) return { ok: false, reason: "no-root" };
        const key = Object.keys(root).find((k) => k.startsWith("__reactContainer") || k.startsWith("__reactFiber"));
        if (!key) return { ok: false, reason: "no-fiber" };
        let fiber = root[key];
        if (fiber && fiber.current) fiber = fiber.current;
        const logic = findLogic(fiber, 0);
        if (!logic) return { ok: false, reason: "no-logic" };
        clearInterval(logic._ls); clearInterval(logic._sp); clearInterval(logic._rs); clearInterval(logic._gI);
        const next = { ...p };
        if (p.orion) next.orion = { ...(logic.state.orion || {}), ...p.orion };
        if (p.steps) next.steps = { ...(logic.state.steps || {}), ...p.steps };
        logic.setState(next);
        return { ok: true, screen: logic.state.screen, nav: logic.state.nav };
      }, patch);
      if (!ok.ok) throw new Error(JSON.stringify(ok));
      await sleep(650);
      return ok;
    } catch (e) {
      console.warn(`  setState retry ${i + 1}:`, String(e.message || e).slice(0, 100));
      await boot(page);
    }
  }
  throw new Error("setState failed");
}

async function assertDom(page, { expectAuth, expectApp, expectText, expectSel }) {
  const info = await page.evaluate(({ expectAuth, expectApp, expectText, expectSel }) => {
    const auth = !!document.querySelector(".flb-auth");
    const app = !!document.querySelector(".flb-app");
    const text = (document.body.innerText || "").replace(/\\s+/g, " ");
    const sel = expectSel ? !!document.querySelector(expectSel) : true;
    const textOk = expectText ? text.includes(expectText) : true;
    return {
      auth, app, sel, textOk,
      ok: (expectAuth == null || auth === expectAuth) && (expectApp == null || app === expectApp) && sel && textOk,
      snippet: text.slice(0, 120),
    };
  }, { expectAuth, expectApp, expectText, expectSel });
  if (!info.ok) throw new Error("DOM assert failed: " + JSON.stringify(info));
}

async function go(page, patch, assert) {
  await setAppState(page, patch);
  if (assert) {
    for (let i = 0; i < 3; i++) {
      try {
        await assertDom(page, assert);
        return;
      } catch (e) {
        if (i === 2) throw e;
        await setAppState(page, patch);
        await sleep(400);
      }
    }
  }
}

async function shot(page, name, { fullPage = true, note = "" } = {}) {
  const file = `${name}.png`;
  const path = join(OUT, file);
  await page.screenshot({ path, fullPage, type: "png", animations: "disabled", scale: "device", timeout: 45000 });
  const buf = readFileSync(path);
  const hash = createHash("md5").update(buf).digest("hex");
  const st = statSync(path);
  const meta = await page.evaluate(() => ({
    iw: window.innerWidth, ih: window.innerHeight,
    dw: document.documentElement.scrollWidth,
    dh: Math.max(document.documentElement.scrollHeight, document.body.scrollHeight),
    dpr: window.devicePixelRatio,
    hasAuth: !!document.querySelector(".flb-auth"),
    hasApp: !!document.querySelector(".flb-app"),
  }));
  manifest.push({ file, bytes: st.size, hash, ...meta, note, fullPage });
  console.log(`✓ ${file}  ${(st.size / 1024).toFixed(0)}KB  auth=${meta.hasAuth} app=${meta.hasApp}  ${note}`);
}

const browser = await chromium.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--hide-scrollbars", "--disable-gpu", "--font-render-hinting=none", "--disable-dev-shm-usage"],
});
const context = await browser.newContext({
  viewport: { width: VIEW_W, height: VIEW_H },
  deviceScaleFactor: DPR,
  colorScheme: "dark",
});
const page = await context.newPage();
page.setDefaultTimeout(30000);

console.log("OUT temp:", OUT);
await boot(page);

const baseApp = {
  screen: "app", theme: "dark", menu: null, tourStep: -1, checklistOpen: false,
  deepAd: null, tgtOpen: false, utmModal: null, ciFiltersOpen: false, schedModalOpen: false,
  mobileNavOpen: false, sidebarCollapsed: false, viewportNarrow: false, banner: true,
  messages: [], thinking: false, chatLoading: false, draft: "", explainFeature: null,
  schedChipOpen: false, referralOpen: false,
  orion: { open: false, step: 0, done: false, answers: {}, mode: "full" },
};

// AUTH — authThemeClass reads state.theme (not authTheme)
await go(page, { screen: "login", theme: "dark", authTheme: "dark", menu: null }, { expectAuth: true, expectApp: false, expectText: "Welcome back" });
await shot(page, "01-login-dark", { note: "Sign-in (dark)" });

await go(page, { screen: "login", theme: "light", authTheme: "light" }, { expectAuth: true, expectText: "Welcome back" });
await shot(page, "02-login-light", { note: "Sign-in (light)" });

await go(page, { screen: "signup", googleAuthed: false, theme: "dark", authTheme: "dark", authName: "", authEmail: "", authCompany: "", authPassword: "" }, { expectAuth: true, expectText: "Sign up" });
await shot(page, "03-signup", { note: "Sign-up" });

await go(page, { screen: "signup", googleAuthed: true, authName: "Sarah Chen", authEmail: "sarah@luminaryskincare.com", authCompany: "luminaryskincare.com", authPassword: "Password1" }, { expectAuth: true });
await shot(page, "04-signup-google-verified", { note: "Sign-up after Google verify" });

await go(page, { screen: "otp", authEmail: "sarah@luminaryskincare.com", otp: "" }, { expectAuth: true });
await shot(page, "05-otp-verify", { note: "OTP verification" });

await go(page, { screen: "reset", resetStep: "email", resetEmail: "sarah@luminaryskincare.com", resetCode: "", resetExpired: false }, { expectAuth: true });
await shot(page, "06-reset-password-email", { note: "Forgot password — email" });

await go(page, { screen: "reset", resetStep: "code", resetEmail: "sarah@luminaryskincare.com", resendIn: 45, resetExpired: false }, { expectAuth: true });
await shot(page, "07-reset-password-code", { note: "Forgot password — code" });

await go(page, { screen: "reset", resetStep: "new", resetEmail: "sarah@luminaryskincare.com", newPass: "", confirmPass: "" }, { expectAuth: true });
await shot(page, "08-reset-password-new", { note: "Forgot password — new password" });

// Skip loading (auto-advances). Go straight to onboarding overlays.
await go(page, { screen: "profiles", profileSel: "lum", addingClient: false }, { expectText: "client" });
await shot(page, "09-onboarding-profiles", { note: "Client / profile pick" });

await go(page, { screen: "connect" }, { expectText: "Connect" });
await shot(page, "10-onboarding-connect-ads", { note: "Connect ad accounts" });

await go(page, { screen: "confirm" }, { expectApp: true });
await shot(page, "11-onboarding-confirm", { note: "Confirm connections" });

await go(page, { screen: "plans", plan: 1, planId: "intel", billingCycle: "yr", currency: "usd" }, { expectText: "plan" });
await shot(page, "12-onboarding-plans", { note: "Pricing / plans" });

await go(page, { screen: "settingup", settingProgress: 40 }, { expectText: "second" });
await shot(page, "13-onboarding-setting-up", { note: "Setting up workspace", fullPage: false });

// APP
await go(page, { ...baseApp, nav: "chats" }, { expectApp: true, expectAuth: false, expectSel: ".flb-composer, .flb-chat-empty, [data-tour='composer'], textarea" });
await shot(page, "14-home-chat-empty", { note: "Home — empty chat" });

await go(page, { ...baseApp, nav: "chats", checklistOpen: true }, { expectApp: true, expectSel: ".flb-setup-panel" });
await shot(page, "15-setup-guide-open", { note: "Setup Guide open" });

await go(page, {
  ...baseApp, nav: "chats", checklistOpen: false,
  orion: { open: false, step: 0, done: true, answers: { role: "founder" }, mode: "full" },
  steps: { connected: true, confirmed: true, referral: true, credits: true, personalized: true, utm: false },
}, { expectApp: true, expectAuth: false });
await shot(page, "16-home-orion-templates", { note: "Home with Orion templates" });

await go(page, {
  ...baseApp, nav: "chats",
  messages: [
    { role: "user", text: "Why did Meta ROAS drop this week?" },
    { role: "assistant", text: "Meta ROAS fell from 2.4x to 1.8x. Creative fatigue on your top 3 ads is the main driver. Frequency hit 4.6 on Pmax lookalikes." },
  ],
}, { expectApp: true, expectText: "Meta ROAS" });
await shot(page, "17-home-chat-thread", { note: "Active chat thread" });

await go(page, {
  ...baseApp, nav: "chats",
  messages: [{ role: "user", text: "Audit my Google Brand Search." }],
  thinking: true,
}, { expectApp: true });
await shot(page, "18-home-chat-thinking", { note: "Orion thinking" });

await go(page, { ...baseApp, nav: "chats", sidebarCollapsed: true, messages: [], thinking: false }, { expectApp: true });
await shot(page, "19-shell-sidebar-collapsed", { note: "Collapsed sidebar" });

await go(page, { ...baseApp, nav: "chats", sidebarCollapsed: false, menu: "account" }, { expectApp: true });
await shot(page, "20-shell-account-menu", { note: "Account menu" });

await go(page, { ...baseApp, nav: "chats", menu: "profiles" }, { expectApp: true });
await shot(page, "21-shell-brand-switcher", { note: "Brand switcher" });

await go(page, { ...baseApp, theme: "light", nav: "chats", menu: null, messages: [] }, { expectApp: true, expectAuth: false });
await shot(page, "22-home-chat-light", { note: "Home — light theme" });

await go(page, { ...baseApp, theme: "dark", nav: "creative", ciMode: "scoring", ciChannel: "google", ciDecision: "all", menu: null }, { expectApp: true, expectText: "Creative Insights" });
await shot(page, "23-creative-insights-scoring", { note: "Creative Insights — Scoring" });

await go(page, { ...baseApp, nav: "creative", ciMode: "performance" }, { expectApp: true, expectText: "Creative Insights" });
await shot(page, "24-creative-insights-performance", { note: "Creative Insights — Performance" });

await go(page, { ...baseApp, nav: "creative", ciMode: "scoring", ciFiltersOpen: true }, { expectApp: true, expectText: "Advanced Filters" });
await shot(page, "25-creative-insights-filters", { note: "Advanced filters", fullPage: false });

await go(page, { ...baseApp, nav: "creative", ciFiltersOpen: false, deepAd: "0707DCSIFTBL" }, { expectApp: true, expectText: "Creative Intelligence" });
await shot(page, "26-creative-deep-dive", { note: "Deep dive drawer" });

await go(page, { ...baseApp, nav: "creative", deepAd: null, tgtOpen: true }, { expectApp: true });
await shot(page, "27-creative-set-targets", { note: "Set targets modal", fullPage: false });

await go(page, { ...baseApp, nav: "utm", utmChannel: "meta", tgtOpen: false }, { expectApp: true, expectText: "UTM" });
await shot(page, "28-utm-status", { note: "UTM Status" });

await go(page, {
  ...baseApp, nav: "utm",
  utmModal: {
    campaign: "Prospecting — Lookalike", adset: "LAL 1% Purchasers", ad: "UGC Hook v3",
    adId: "23849201", acct: "Luminary · Meta",
    missing: ["utm_campaign", "utm_content", "utm_term"], invalid: ["utm_source"],
  },
}, { expectApp: true, expectText: "Fix UTM" });
await shot(page, "29-utm-fix-modal", { note: "Fix UTM modal", fullPage: false });

await go(page, { ...baseApp, nav: "scheduler", utmModal: null, schedTab: "custom", schedModalOpen: false }, { expectApp: true, expectText: "Scheduler" });
await shot(page, "30-scheduler-custom", { note: "Scheduler — Custom" });

await go(page, { ...baseApp, nav: "scheduler", schedTab: "auto" }, { expectApp: true, expectText: "Scheduler" });
await shot(page, "31-scheduler-automated", { note: "Scheduler — Automated" });

await go(page, { ...baseApp, nav: "scheduler", schedTab: "custom", schedModalOpen: true }, { expectApp: true, expectText: "Add Custom Report" });
await shot(page, "32-scheduler-add-modal", { note: "Add report modal", fullPage: false });

await go(page, { ...baseApp, nav: "settings", settingsTab: "people", schedModalOpen: false }, { expectApp: true, expectText: "Settings" });
await shot(page, "33-settings-people", { note: "Settings — People" });

await go(page, { ...baseApp, nav: "settings", settingsTab: "clients" }, { expectApp: true, expectText: "client" });
await shot(page, "34-settings-clients", { note: "Settings — Clients" });

await go(page, { ...baseApp, nav: "explain", explainFeature: "attribution" }, { expectApp: true });
await shot(page, "35-explain-locked-feature", { note: "Locked feature explain" });

await go(page, {
  ...baseApp, nav: "chats", explainFeature: null,
  orion: { open: true, step: 0, done: false, mode: "full", answers: {} },
}, { expectApp: true, expectSel: ".flb-orion-shell" });
await shot(page, "36-orion-q-role", { note: "Orion — role" });

await go(page, {
  ...baseApp,
  orion: { open: true, step: 1, done: false, mode: "full", answers: { role: "founder" } },
}, { expectSel: ".flb-orion-shell" });
await shot(page, "37-orion-q-goal", { note: "Orion — goal" });

await go(page, {
  ...baseApp,
  orion: {
    open: true, step: 7, done: false, mode: "full",
    answers: { role: "founder", goal: "profit", metrics: ["ROAS", "POAS"], pain: "creative", anomaly: "alert", delivery: "weekly", voice: "clear" },
  },
}, { expectSel: ".flb-orion-shell" });
await shot(page, "38-orion-review", { note: "Orion — review" });

await go(page, {
  ...baseApp,
  orion: {
    open: true, step: 9, done: false, mode: "full",
    answers: { role: "founder", goal: "profit", metrics: ["ROAS", "POAS"], pain: "creative", anomaly: "alert", delivery: "weekly", voice: "clear" },
  },
}, { expectSel: ".flb-orion-shell" });
await shot(page, "39-orion-ready", { note: "Orion — ready" });

await go(page, { ...baseApp, orion: { open: false, step: 0, done: false }, schedChipOpen: true, messages: [] }, { expectApp: true });
await shot(page, "40-schedule-chip-open", { note: "Schedule chip expanded", fullPage: false });

// Mobile
await page.setViewportSize({ width: 390, height: 844 });
await go(page, { ...baseApp, nav: "chats", viewportNarrow: true, mobileNavOpen: true, sidebarCollapsed: false, schedChipOpen: false }, { expectApp: true });
await shot(page, "41-mobile-nav-drawer", { note: "Mobile nav drawer", fullPage: false });

await go(page, { ...baseApp, nav: "creative", viewportNarrow: true, mobileNavOpen: false, ciMode: "scoring" }, { expectApp: true, expectText: "Creative" });
await shot(page, "42-mobile-creative-insights", { note: "Mobile Creative Insights" });

await go(page, { ...baseApp, nav: "chats", viewportNarrow: true, messages: [] }, { expectApp: true });
await shot(page, "43-mobile-home-chat", { note: "Mobile home chat" });

await go(page, { ...baseApp, nav: "settings", viewportNarrow: true, settingsTab: "people" }, { expectApp: true, expectText: "Settings" });
await shot(page, "44-mobile-settings", { note: "Mobile settings" });

await go(page, { ...baseApp, nav: "utm", viewportNarrow: true }, { expectApp: true, expectText: "UTM" });
await shot(page, "45-mobile-utm-status", { note: "Mobile UTM Status" });

// Dedup report
const byHash = new Map();
for (const m of manifest) {
  if (!byHash.has(m.hash)) byHash.set(m.hash, []);
  byHash.get(m.hash).push(m.file);
}
const dups = [...byHash.values()].filter((a) => a.length > 1);
console.log("\\nUnique images:", byHash.size, "/", manifest.length);
if (dups.length) {
  console.log("DUPLICATES (should be 0):");
  for (const d of dups) console.log(" ", d.join(", "));
}

writeFileSync(join(OUT, "MANIFEST.json"), JSON.stringify(manifest, null, 2));
writeFileSync(join(OUT, "README.md"), [
  "# Flable AI · Frontend handoff screenshots",
  "",
  `Desktop: **${VIEW_W}×${VIEW_H}** CSS × **DPR ${DPR}** = **${VIEW_W * DPR}×${VIEW_H * DPR}** device pixels.`,
  "Mobile: **390×844** × DPR 2.",
  "Full-page captures used where content scrolls. No intentional cropping.",
  "",
  "| # | File | Description |",
  "|---|------|-------------|",
  ...manifest.map((m, i) => `| ${i + 1} | \`${m.file}\` | ${m.note || ""} |`),
  "",
].join("\n"));

// Copy into repo
for (const f of readdirSync(FINAL)) {
  try { rmSync(join(FINAL, f), { force: true }); } catch {}
}
cpSync(OUT, FINAL, { recursive: true });
console.log("\\nCopied to", FINAL);
await browser.close();

if (dups.length) process.exitCode = 2;
