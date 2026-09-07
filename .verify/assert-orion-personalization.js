const fs = require("fs");
const h = fs.readFileSync("index.html", "utf8");
const must = [
  "ORION_Q_COUNT = 7",
  'anomaly","delivery","voice"',
  "Founder / CXO",
  "How should Orion detect anomalies?",
  "FINAL REVIEW",
  "Generate my templates",
  "Only when something needs attention",
  "WhatsApp (Coming soon)",
  "Detailed & data heavy",
  "adapts to your role",
  "Ad platform numbers",
  "POAS floor, daily spend caps",
  "Brand objectives",
  "orionKpiPlaceholder",
  'AOV", "CAC", "CPC"',
  "Website sessions",
  "Video views",
  "Type your role",
  "Tap in priority order",
  "Orion attacks these first",
  "Here's what Orion will set up for you",
  "Shown based on your objectives",
];
const forbid = [
  'anomaly","involve","delivery',
  "Founder / CEO",
  "How should Orion catch weird days",
  "Detailed & data-heavy",
  "Generate my schedules & templates",
];
let ok = true;
for (const s of must) {
  if (!h.includes(s)) {
    console.log("MISSING", s);
    ok = false;
  }
}
for (const s of forbid) {
  if (h.includes(s)) {
    console.log("STALE", s);
    ok = false;
  }
}
const flowMatch = h.match(/ORION_FLOW = \[([^\]]+)\]/);
console.log("FLOW", flowMatch && flowMatch[1]);
console.log(ok ? "ALL_CHECKS_PASSED" : "FAILED");
process.exit(ok ? 0 : 1);
