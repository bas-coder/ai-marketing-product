/** Re-capture 02-login-light with theme:"light" (authThemeClass reads state.theme). */
import { chromium } from "playwright";
import { writeFileSync, readFileSync, copyFileSync, mkdirSync } from "fs";
import { join } from "path";
import { createHash } from "crypto";
import { tmpdir } from "os";

const FINAL = "C:\\Projects\\Flable AI Design\\handoff\\screenshots";
const URL = "http://127.0.0.1:5500/index.html";
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const TMP = join(tmpdir(), "flable-login-light-" + Date.now() + ".png");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function findAndSet(page, patch) {
  const ok = await page.evaluate((p) => {
    function findLogic(fiber, depth) {
      if (!fiber || depth > 80) return null;
      const node = fiber.stateNode;
      if (node && node.logic && node.logic.state && typeof node.logic.setState === "function" && "screen" in node.logic.state) return node.logic;
      return findLogic(fiber.child, depth + 1) || findLogic(fiber.sibling, depth + 1);
    }
    const root = document.getElementById("dc-root");
    const key = Object.keys(root).find((k) => k.startsWith("__reactContainer") || k.startsWith("__reactFiber"));
    let fiber = root[key];
    if (fiber && fiber.current) fiber = fiber.current;
    const logic = findLogic(fiber, 0);
    if (!logic) return { ok: false };
    clearInterval(logic._ls); clearInterval(logic._sp); clearInterval(logic._rs); clearInterval(logic._gI);
    logic.setState(p);
    return { ok: true, theme: logic.state.theme };
  }, patch);
  if (!ok.ok) throw new Error("no logic");
  await sleep(800);
}

const browser = await chromium.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--hide-scrollbars", "--disable-gpu", "--font-render-hinting=none"],
});
const context = await browser.newContext({
  viewport: { width: 1920, height: 1080 },
  deviceScaleFactor: 2,
  colorScheme: "light",
});
const page = await context.newPage();
await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 90000 });
await page.waitForSelector("#dc-root");
await page.waitForFunction(() => document.querySelector("#dc-root")?.children?.length > 0);
await sleep(1000);
await page.addStyleTag({
  content: `[data-tip]::after{opacity:0!important;visibility:hidden!important}*{caret-color:transparent!important}`,
});

await findAndSet(page, { screen: "login", theme: "light", authTheme: "light", menu: null });

const classInfo = await page.evaluate(() => {
  const el = document.querySelector(".flb-auth");
  return {
    className: el?.className || "",
    bg: el ? getComputedStyle(el).backgroundColor : null,
    hasLight: !!document.querySelector(".flb-auth.light, .light.flb-auth"),
  };
});
console.log("DOM:", classInfo);

await page.screenshot({ path: TMP, fullPage: true, type: "png", animations: "disabled", scale: "device" });
mkdirSync(FINAL, { recursive: true });
const dest = join(FINAL, "02-login-light.png");
copyFileSync(TMP, dest);

const dark = readFileSync(join(FINAL, "01-login-dark.png"));
const light = readFileSync(dest);
const h1 = createHash("md5").update(dark).digest("hex");
const h2 = createHash("md5").update(light).digest("hex");
console.log("dark hash", h1);
console.log("light hash", h2);
console.log("unique", h1 !== h2);
console.log("bytes", light.length, "w/h", light.readUInt32BE(16), light.readUInt32BE(20));

await browser.close();
