import { chromium } from "playwright";
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1 });
await page.goto("http://127.0.0.1:5500/index.html", { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForTimeout(2000);
const info = await page.evaluate(() => {
  function findLogic(fiber, depth) {
    if (!fiber || depth > 80) return null;
    const node = fiber.stateNode;
    if (node && node.logic && node.logic.state && typeof node.logic.setState === "function" && "screen" in node.logic.state) {
      return { screen: node.logic.state.screen, keys: Object.keys(node.logic.state).slice(0, 30) };
    }
    return findLogic(fiber.child, depth + 1) || findLogic(fiber.sibling, depth + 1);
  }
  const out = { found: null, probes: [] };
  const els = [document.documentElement, document.body, ...Array.from(document.body.children)];
  for (const el of els) {
    const keys = Object.keys(el).filter((k) => k.includes("react") || k.includes("React"));
    out.probes.push({ tag: el.tagName, id: el.id, keys });
    for (const key of keys) {
      let fiber = el[key];
      if (fiber && fiber.current) fiber = fiber.current;
      const hit = findLogic(fiber, 0);
      if (hit) { out.found = hit; return out; }
    }
  }
  // also scan all elements with react fiber
  for (const el of document.querySelectorAll("*")) {
    const key = Object.keys(el).find((k) => k.startsWith("__reactFiber"));
    if (!key) continue;
    const hit = findLogic(el[key], 0);
    if (hit) { out.found = hit; out.via = el.tagName; return out; }
  }
  return out;
});
console.log(JSON.stringify(info, null, 2));
await browser.close();
