const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto('http://127.0.0.1:5500/index.html', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(1500);
  // Jump into app if on login — use demo sign-in if available
  const signIn = page.locator('button:has-text("Sign in")').first();
  if (await signIn.count()) {
    await page.fill('input', 'sarah@luminaryskincare.com').catch(()=>{});
    // fill email/password fields loosely
    const inputs = page.locator('input');
    const n = await inputs.count();
    if (n >= 2) {
      await inputs.nth(0).fill('sarah@luminaryskincare.com');
      await inputs.nth(1).fill('password1');
    }
    await signIn.click();
    await page.waitForTimeout(2000);
  }
  // Open Setup Guide / Answer questions
  const answer = page.locator('button:has-text("Answer questions")').first();
  const openSetup = page.locator('button[title="Setup Guide"], .flb-setup-launcher').first();
  if (await openSetup.count()) { await openSetup.click(); await page.waitForTimeout(500); }
  if (await answer.count()) { await answer.click(); await page.waitForTimeout(800); }
  else {
    // try openOrion via any personalize control
    const tune = page.locator('text=Tune Orion').first();
    if (await tune.count()) {
      await openSetup.click().catch(()=>{});
      await page.locator('button:has-text("Answer questions")').click();
      await page.waitForTimeout(800);
    }
  }
  const shell = page.locator('.flb-orion-shell');
  const visible = await shell.count();
  const badge = await page.locator('text=QUESTION 1 OF 7').count();
  const role = await page.locator('text=Who is Orion working for?').count();
  const cxo = await page.locator('text=Founder / CXO').count();
  const involve = await page.locator('text=How involved do you want Orion to be?').count();
  console.log(JSON.stringify({ shell: visible, badge, role, cxo, involveStepVisible: involve }, null, 2));
  if (cxo) {
    await page.locator('button:has-text("Founder / CXO")').first().click();
    await page.waitForTimeout(400);
  }
  // objectives
  const q2 = await page.locator('text=Tap in priority order').count();
  if (await page.locator('button:has-text("Bring more sales")').count()) {
    await page.locator('button:has-text("Bring more sales")').first().click();
    await page.locator('button:has-text("Continue")').first().click();
    await page.waitForTimeout(500);
  }
  const q3sub = await page.locator('text=Shown based on your objectives').count();
  const cac = await page.locator('button:has-text("CAC")').count();
  const cpc = await page.locator('button:has-text("CPC")').count();
  if (await page.locator('button:has-text("ROAS")').count()) {
    await page.locator('button:has-text("ROAS")').first().click();
    await page.locator('button:has-text("Continue")').first().click();
    await page.waitForTimeout(400);
  }
  const q4 = await page.locator('text=Orion attacks these first').count();
  if (await page.locator('button:has-text("I don\'t catch wasted spend")').count()) {
    await page.locator('button:has-text("I don\'t catch wasted spend")').first().click();
    await page.locator('button:has-text("Continue")').first().click();
    await page.waitForTimeout(400);
  }
  const q5 = await page.locator('text=How should Orion detect anomalies?').count();
  await page.locator('button:has-text("Continue")').first().click();
  await page.waitForTimeout(400);
  const q6 = await page.locator('text=Pick a cadence, or let Orion set it per schedule').count();
  const both = await page.locator('text=Both').count();
  await page.locator('button:has-text("Continue")').first().click();
  await page.waitForTimeout(400);
  const q7 = await page.locator('text=Detailed & data heavy').count();
  if (await page.locator('button:has-text("Blunt & direct")').count()) {
    await page.locator('button:has-text("Blunt & direct")').first().click();
    await page.locator('button:has-text("Continue")').first().click();
    await page.waitForTimeout(500);
  }
  const final = await page.locator('text=FINAL REVIEW').count();
  const setupTitle = await page.locator('text=Here\'s what Orion will set up for you').count();
  const gen = await page.locator('button:has-text("Generate my templates")').count();
  console.log(JSON.stringify({ q2, q3sub, cac, cpc, q4, q5, q6, both, q7, final, setupTitle, gen }, null, 2));
  await page.screenshot({ path: 'docs/live-onboarding/../.verify/orion-personalization-final.png', fullPage: false });
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
