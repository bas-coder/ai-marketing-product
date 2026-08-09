/* @ds-bundle: {"format":3,"namespace":"FlableAiDesignSystem_c17dff","components":[{"name":"FlableMark","sourcePath":"components/brand/BrandLogo.jsx"},{"name":"BrandLogo","sourcePath":"components/brand/BrandLogo.jsx"},{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"CardHeader","sourcePath":"components/data/Card.jsx"},{"name":"Chip","sourcePath":"components/data/Chip.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"NavItem","sourcePath":"components/navigation/NavItem.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/BrandLogo.jsx":"57f18a706edd","components/data/Avatar.jsx":"e4e086de2b2a","components/data/Badge.jsx":"f095fc8c2f86","components/data/Card.jsx":"c54f2ab13621","components/data/Chip.jsx":"dd18e4e0c65c","components/data/Table.jsx":"e7e41fd341e0","components/feedback/Alert.jsx":"77a61de6402a","components/feedback/ProgressBar.jsx":"11d24fb8144d","components/feedback/Spinner.jsx":"11c7e2dc17f1","components/feedback/Tooltip.jsx":"c9a8b4b3a342","components/forms/Button.jsx":"9acf0841f9eb","components/forms/Checkbox.jsx":"da23da881a89","components/forms/IconButton.jsx":"27917b9a6418","components/forms/Input.jsx":"e497eac49691","components/forms/Radio.jsx":"657e9c930110","components/forms/Select.jsx":"239da57d6438","components/forms/Switch.jsx":"ae9873735c7e","components/forms/Textarea.jsx":"98737ee7fe92","components/navigation/NavItem.jsx":"1bfbbf21516e","components/navigation/Pagination.jsx":"43f81784ccf5","components/navigation/Tabs.jsx":"56741c320cfb","ui_kits/flable-app/AppShell.jsx":"0f6482dcd0bc","ui_kits/flable-app/AskScreen.jsx":"7e732ae2299e","ui_kits/flable-app/ConnectionsScreen.jsx":"660cea4df958","ui_kits/flable-app/DashboardScreen.jsx":"83cd0e9b6bde","ui_kits/flable-app/icons.jsx":"2275bceba6df","ui_kits/flable-onboarding/Auth.jsx":"bb776c48ee5e","ui_kits/flable-onboarding/Confirm.jsx":"25cd69871f48","ui_kits/flable-onboarding/Connect.jsx":"8959511768b7","ui_kits/flable-onboarding/OrionMark.jsx":"f9746a785c5c","ui_kits/flable-onboarding/Panels.jsx":"cd5509718e94","ui_kits/flable-onboarding/Pricing.jsx":"228016efe0e2","ui_kits/flable-onboarding/SettingUp.jsx":"7b8f084c9351","ui_kits/flable-onboarding/brand-icons.jsx":"fd2fdae70158","ui_kits/flable-onboarding/shared.jsx":"7f42bd710588"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FlableAiDesignSystem_c17dff = window.FlableAiDesignSystem_c17dff || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/BrandLogo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * flable.ai brand lockup — gradient mark + Poppins wordmark.
 * The mark is the signature three-blade swoosh; by default it paints with the
 * brand magenta→violet→blue gradient. Use `tone` to flatten it to mono.
 */
const MARK_PATHS = [{
  y: 0,
  d: "M 0 12.519 L 0 20.728 L 0 20.728 C 0.41 19.907 0.684 19.36 1.197 18.505 C 3.934 11.869 9.201 9.27 13.819 9.27 L 24.559 9.201 C 26.009 9.201 28.56 8.353 30.477 6.704 C 32.586 4.89 34 2.168 34 0 L 13.545 0 C 7.936 0 0.855 4.584 0 12.519 Z"
}, {
  y: 11.664,
  d: "M 13.34 0 L 27.262 0 C 26.662 4.527 23.102 7.323 19.702 8.414 C 17.092 9.253 14.633 8.807 13.34 9.064 C 10.676 9.595 8.221 10.36 5.678 12.553 C 3.911 14.077 2.174 16.354 0 19.565 L 0 9.133 C 2.771 2.839 7.901 0 13.34 0 Z"
}, {
  y: 20.728,
  d: "M 5.644 3.523 C 3.877 5.047 2.174 7.392 0 10.604 C 2.121 10.604 4.686 9.827 6.807 8.004 C 10.946 4.447 8.414 1.437 13.374 0 C 10.71 0.531 8.186 1.33 5.644 3.523 Z"
}];
function FlableMark({
  size = 32,
  tone = "gradient",
  style = {},
  ...rest
}) {
  const gid = React.useId();
  const fill = tone === "gradient" ? `url(#${gid})` : "currentColor";
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size * (31.332 / 34),
    viewBox: "0 0 34 31.332",
    fill: "none",
    role: "img",
    "aria-label": "flable.ai",
    style: {
      display: "block",
      flexShrink: 0,
      ...style
    }
  }, rest), tone === "gradient" && /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: gid,
    x1: "34",
    y1: "0",
    x2: "0",
    y2: "31.332",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#E9348B"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.52",
    stopColor: "#7F56D9"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#009EFF"
  }))), /*#__PURE__*/React.createElement("g", {
    fill: fill,
    fillRule: "nonzero"
  }, MARK_PATHS.map((p, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    transform: `translate(0,${p.y})`,
    d: p.d
  }))));
}
function BrandLogo({
  size = 28,
  tone = "gradient",
  // "gradient" | "mono"
  wordmark = true,
  color,
  // wordmark + mono-mark color; defaults to theme ink
  style = {},
  ...rest
}) {
  const ink = color || "var(--flb-ink, #fafafa)";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: Math.round(size * 0.28),
      lineHeight: 1,
      color: ink,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(FlableMark, {
    size: size,
    tone: tone,
    style: tone === "mono" ? {
      color: ink
    } : undefined
  }), wordmark && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--flb-font-display)",
      fontWeight: 400,
      fontSize: size * 0.78,
      letterSpacing: "-0.01em",
      color: ink
    }
  }, "flable", /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.55
    }
  }, ".ai")));
}
Object.assign(__ds_scope, { FlableMark, BrandLogo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/BrandLogo.jsx", error: String((e && e.message) || e) }); }

// components/data/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64
};
const GRADS = ["linear-gradient(135deg,#E9348B,#7F56D9)", "linear-gradient(135deg,#7F56D9,#009EFF)", "linear-gradient(135deg,#FB479F,#643CC1)", "linear-gradient(135deg,#009EFF,#643CC1)"];
function hashIndex(s) {
  let h = 0;
  for (let i = 0; i < (s || "").length; i++) h = (h * 31 + s.charCodeAt(i)) % 997;
  return h % GRADS.length;
}

/** Avatar — image, or gradient monogram fallback. Optional status dot. */
function Avatar({
  src,
  name = "",
  size = "md",
  status,
  style = {},
  ...rest
}) {
  const d = SIZES[size] || (typeof size === "number" ? size : 40);
  const initials = (name || "").split(" ").map(w => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
  const dot = {
    online: "rgb(106,210,117)",
    away: "rgb(255,162,12)",
    offline: "var(--flb-ink-4)"
  }[status];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      flexShrink: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: d,
      height: d,
      borderRadius: 9999,
      overflow: "hidden",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: src ? "var(--flb-surface-3)" : GRADS[hashIndex(name)],
      color: "#fcfcfc",
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: d * 0.38,
      lineHeight: 1,
      userSelect: "none"
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 0,
      bottom: 0,
      width: d * 0.28,
      height: d * 0.28,
      minWidth: 8,
      minHeight: 8,
      borderRadius: 9999,
      background: dot,
      border: "2px solid var(--flb-surface)"
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Status badge / pill label. Tones map to the semantic palette. */
const TONES = {
  neutral: {
    bg: "var(--flb-tint-neutral)",
    fg: "var(--flb-on-neutral)",
    dot: "var(--flb-ink-3)"
  },
  violet: {
    bg: "var(--flb-tint-violet)",
    fg: "var(--flb-on-violet)",
    dot: "var(--flb-on-violet)"
  },
  success: {
    bg: "var(--flb-tint-success)",
    fg: "var(--flb-on-success)",
    dot: "var(--flb-on-success)"
  },
  warning: {
    bg: "var(--flb-tint-warning)",
    fg: "var(--flb-on-warning)",
    dot: "var(--flb-on-warning)"
  },
  error: {
    bg: "var(--flb-tint-error)",
    fg: "var(--flb-on-error)",
    dot: "var(--flb-on-error)"
  },
  info: {
    bg: "var(--flb-tint-info)",
    fg: "var(--flb-on-info)",
    dot: "var(--flb-on-info)"
  }
};
function Badge({
  children,
  tone = "neutral",
  dot = false,
  size = "md",
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  const fs = size === "sm" ? 11 : 12;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: size === "sm" ? "3px 8px" : "4px 10px",
      borderRadius: 9999,
      fontFamily: "var(--flb-font-body)",
      fontWeight: 500,
      fontSize: fs,
      lineHeight: 1.2,
      color: t.fg,
      background: t.bg,
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 9999,
      background: t.dot
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Surface container. `gradient` paints the soft focus glow; `interactive` adds hover lift. */
function Card({
  children,
  gradient = false,
  interactive = false,
  padding = 20,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: gradient ? "var(--flb-gradient-primary-focus-dark)" : "var(--flb-surface)",
      border: "1px solid var(--flb-line)",
      borderRadius: 16,
      padding,
      boxShadow: hover ? "var(--flb-shadow-md)" : "var(--flb-shadow-sm)",
      transform: hover ? "translateY(-2px)" : "none",
      transition: "transform var(--flb-dur) var(--flb-ease), box-shadow var(--flb-dur) var(--flb-ease)",
      cursor: interactive ? "pointer" : "default",
      color: "var(--flb-ink-2)",
      fontFamily: "var(--flb-font-body)",
      ...style
    }
  }, rest), children);
}

/** Optional header row: title + subtitle on the left, actions on the right. */
function CardHeader({
  title,
  subtitle,
  action,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 12,
      marginBottom: 14,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: 16,
      color: "var(--flb-ink)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--flb-ink-3)"
    }
  }, subtitle)), action);
}
Object.assign(__ds_scope, { Card, CardHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Interactive chip / tag — optional leading icon and removable close. */
function Chip({
  children,
  icon = null,
  onRemove,
  selected = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      height: 30,
      padding: "0 12px",
      borderRadius: 9999,
      fontFamily: "var(--flb-font-body)",
      fontSize: 13,
      fontWeight: 500,
      color: selected ? "var(--flb-on-violet)" : "var(--flb-ink-2)",
      background: selected ? "var(--flb-tint-violet)" : hover ? "var(--flb-surface-3)" : "var(--flb-surface-2)",
      border: `1px solid ${selected ? "var(--flb-on-violet)" : "var(--flb-line)"}`,
      opacity: disabled ? 0.5 : 1,
      cursor: disabled ? "not-allowed" : "default",
      transition: "background var(--flb-dur) var(--flb-ease)",
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--flb-ink-3)"
    }
  }, icon), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      display: "inline-flex",
      border: "none",
      background: "none",
      padding: 0,
      cursor: "pointer",
      color: "var(--flb-ink-3)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 3 L9 9 M9 3 L3 9",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round"
  }))));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Chip.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Data table for campaign / performance grids.
 * `columns`: [{ key, header, align, width, render }]; `rows`: array of objects.
 */
function Table({
  columns = [],
  rows = [],
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: "1px solid var(--flb-line)",
      borderRadius: 12,
      overflow: "hidden",
      fontFamily: "var(--flb-font-body)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--flb-surface-2)"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.align || "left",
      padding: "11px 16px",
      fontWeight: 500,
      fontSize: 12,
      letterSpacing: "0.02em",
      color: "var(--flb-ink-3)",
      textTransform: "none",
      width: c.width,
      whiteSpace: "nowrap",
      borderBottom: "1px solid var(--flb-line)"
    }
  }, c.header)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: row.id ?? i,
    style: {
      borderTop: i === 0 ? "none" : "1px solid var(--flb-line)",
      background: "var(--flb-surface)"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      textAlign: c.align || "left",
      padding: "13px 16px",
      color: "var(--flb-ink-2)",
      verticalAlign: "middle"
    }
  }, c.render ? c.render(row[c.key], row) : row[c.key])))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
/** Inline alert / callout. Used for AI CMO alerts, warnings, confirmations. */
const TONES = {
  info: {
    ring: "var(--flb-on-info)",
    bg: "var(--flb-tint-info)",
    icon: "ⓘ"
  },
  success: {
    ring: "var(--flb-on-success)",
    bg: "var(--flb-tint-success)",
    icon: "✓"
  },
  warning: {
    ring: "var(--flb-on-warning)",
    bg: "var(--flb-tint-warning)",
    icon: "!"
  },
  error: {
    ring: "var(--flb-on-error)",
    bg: "var(--flb-tint-error)",
    icon: "!"
  },
  violet: {
    ring: "var(--flb-on-violet)",
    bg: "var(--flb-tint-violet)",
    icon: "✦"
  }
};
function Alert({
  tone = "info",
  title,
  children,
  icon,
  action,
  style = {}
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "alert",
    style: {
      display: "flex",
      gap: 12,
      padding: 16,
      background: t.bg,
      border: `1px solid ${t.ring}`,
      borderRadius: 12,
      fontFamily: "var(--flb-font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 24,
      height: 24,
      borderRadius: 9999,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: t.ring,
      color: "var(--flb-bg)",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1
    }
  }, icon || t.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: 14,
      color: "var(--flb-ink)"
    }
  }, title), children && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      lineHeight: 1.55,
      color: "var(--flb-ink-2)"
    }
  }, children), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, action)));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
/** Progress bar. `gradient` paints the brand sweep; otherwise solid violet. */
function ProgressBar({
  value = 0,
  max = 100,
  gradient = false,
  tone = "violet",
  height = 8,
  showLabel = false,
  label,
  style = {}
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const fills = {
    violet: "rgb(127,86,217)",
    success: "rgb(106,210,117)",
    warning: "rgb(255,162,12)",
    error: "rgb(255,107,94)"
  };
  const fill = gradient ? "var(--flb-gradient-energetic)" : fills[tone] || fills.violet;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--flb-font-body)",
      ...style
    }
  }, (showLabel || label) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 12,
      color: "var(--flb-ink-3)"
    }
  }, /*#__PURE__*/React.createElement("span", null, label), showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--flb-ink-2)",
      fontWeight: 500
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      borderRadius: 9999,
      background: "var(--flb-surface-3)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: "100%",
      borderRadius: 9999,
      background: fill,
      transition: "width 400ms var(--flb-ease-out)"
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
/** Indeterminate spinner. Violet arc by default. */
function Spinner({
  size = 20,
  thickness = 2.5,
  color = "rgb(160,139,255)",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    role: "status",
    "aria-label": "Loading",
    style: {
      display: "inline-block",
      width: size,
      height: size,
      border: `${thickness}px solid var(--flb-surface-3)`,
      borderTopColor: color,
      borderRadius: "50%",
      animation: "flb-spin 0.7s linear infinite",
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, "@keyframes flb-spin{to{transform:rotate(360deg)}}"));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/** Hover tooltip. Wraps a single child; shows `content` on hover/focus. */
function Tooltip({
  content,
  placement = "top",
  children,
  style = {}
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      zIndex: 50,
      ...pos,
      padding: "6px 10px",
      borderRadius: 8,
      whiteSpace: "nowrap",
      background: "var(--flb-surface-3)",
      color: "var(--flb-ink)",
      border: "1px solid var(--flb-line)",
      boxShadow: "var(--flb-shadow-md)",
      fontFamily: "var(--flb-font-body)",
      fontSize: 12,
      fontWeight: 500,
      pointerEvents: "none"
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * flable.ai Button — Poppins label, rounded-rectangle. Primary is the brand
 * violet; `gradient` paints the signature hero sweep for hero CTAs.
 */
const SIZES = {
  sm: {
    h: 36,
    px: 14,
    fs: 13,
    gap: 6,
    r: 8
  },
  md: {
    h: 44,
    px: 18,
    fs: 15,
    gap: 8,
    r: 10
  },
  lg: {
    h: 52,
    px: 24,
    fs: 17,
    gap: 10,
    r: 12
  }
};
const VARIANTS = {
  primary: {
    bg: "rgb(100,60,193)",
    color: "#fcfcfc",
    border: "transparent",
    hover: "rgb(83,56,158)"
  },
  gradient: {
    bg: "var(--flb-gradient-energetic)",
    color: "#fcfcfc",
    border: "transparent",
    hover: "var(--flb-gradient-energetic)"
  },
  secondary: {
    bg: "var(--flb-tint-violet)",
    color: "var(--flb-on-violet)",
    border: "transparent",
    hover: "var(--flb-action-secondary-hover, rgba(127,86,217,0.2))"
  },
  outline: {
    bg: "transparent",
    color: "var(--flb-ink)",
    border: "var(--flb-line)",
    hover: "var(--flb-surface-3)"
  },
  ghost: {
    bg: "transparent",
    color: "var(--flb-ink-2)",
    border: "transparent",
    hover: "var(--flb-surface-3)"
  },
  danger: {
    bg: "rgb(244,67,54)",
    color: "#fcfcfc",
    border: "transparent",
    hover: "rgb(208,52,40)"
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const [hover, setHover] = React.useState(false);
  const isGradient = variant === "gradient";
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: s.h,
      padding: `0 ${s.px}px`,
      width: fullWidth ? "100%" : undefined,
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: s.fs,
      lineHeight: 1,
      letterSpacing: "-0.01em",
      color: v.color,
      background: hover && !disabled ? v.hover : v.bg,
      border: `1px solid ${v.border}`,
      borderRadius: s.r,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      boxShadow: isGradient && hover ? "0 8px 24px rgba(127,86,217,0.4)" : "none",
      transform: hover && !disabled ? "translateY(-1px)" : "none",
      transition: "background var(--flb-dur) var(--flb-ease), transform var(--flb-dur) var(--flb-ease), box-shadow var(--flb-dur) var(--flb-ease)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with violet fill when checked. Controlled or uncontrolled. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  size = "md",
  style = {},
  ...rest
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const box = size === "sm" ? 16 : 20;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on, e);
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--flb-font-body)",
      fontSize: 14,
      color: "var(--flb-ink-2)",
      userSelect: "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    style: {
      width: box,
      height: box,
      flexShrink: 0,
      borderRadius: 6,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: on ? "rgb(100,60,193)" : "var(--flb-surface)",
      border: `1px solid ${on ? "rgb(100,60,193)" : "var(--flb-line)"}`,
      transition: "all var(--flb-dur) var(--flb-ease)"
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: box * 0.62,
    height: box * 0.62,
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2 L4.8 8.5 L9.5 3.5",
    stroke: "#fcfcfc",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label && /*#__PURE__*/React.createElement("span", {
    onClick: toggle
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Icon-only button. Mirrors Button styling at a square footprint. */
const SIZES = {
  sm: 36,
  md: 44,
  lg: 52
};
const VARIANTS = {
  primary: {
    bg: "rgb(100,60,193)",
    color: "#fcfcfc",
    hover: "rgb(83,56,158)"
  },
  secondary: {
    bg: "var(--flb-tint-violet)",
    color: "var(--flb-on-violet)",
    hover: "var(--flb-action-secondary-hover, rgba(127,86,217,0.2))"
  },
  outline: {
    bg: "transparent",
    color: "var(--flb-ink)",
    hover: "var(--flb-surface-3)",
    border: "var(--flb-line)"
  },
  ghost: {
    bg: "transparent",
    color: "var(--flb-ink-2)",
    hover: "var(--flb-surface-3)"
  }
};
function IconButton({
  children,
  variant = "ghost",
  size = "md",
  round = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const d = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.ghost;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: d,
      height: d,
      color: v.color,
      background: hover && !disabled ? v.hover : v.bg,
      border: `1px solid ${v.border || "transparent"}`,
      borderRadius: round ? 9999 : 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "background var(--flb-dur) var(--flb-ease)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input — dark surface, violet focus ring, optional leading/trailing adornments. */
function Input({
  label,
  hint,
  error,
  leading = null,
  trailing = null,
  size = "md",
  disabled = false,
  style = {},
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === "sm" ? 38 : size === "lg" ? 52 : 44;
  const fs = size === "lg" ? 16 : 14;
  const borderColor = error ? "var(--flb-error)" : focus ? "rgb(160,139,255)" : "var(--flb-line)";
  const reactId = React.useId();
  const inputId = id || reactId;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--flb-font-body)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: "var(--flb-ink-2)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: h,
      padding: "0 14px",
      background: "var(--flb-surface)",
      border: `1px solid ${borderColor}`,
      borderRadius: 10,
      boxShadow: focus && !error ? "0 0 0 3px rgba(160,139,255,0.18)" : "none",
      opacity: disabled ? 0.5 : 1,
      transition: "border-color var(--flb-dur) var(--flb-ease), box-shadow var(--flb-dur) var(--flb-ease)"
    }
  }, leading && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--flb-ink-3)"
    }
  }, leading), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      color: "var(--flb-ink)",
      fontSize: fs,
      fontFamily: "inherit"
    }
  }, rest)), trailing && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--flb-ink-3)"
    }
  }, trailing)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? "var(--flb-error)" : "var(--flb-ink-3)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/** Radio group. Pass `options` (array of {value,label}) and `value`/`onChange`. */
function Radio({
  options = [],
  value,
  defaultValue,
  onChange,
  name,
  disabled = false,
  direction = "column",
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;
  const groupName = name || React.useId();
  const pick = v => {
    if (disabled) return;
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: direction,
      gap: 12,
      fontFamily: "var(--flb-font-body)",
      ...style
    }
  }, options.map(opt => {
    const on = current === opt.value;
    return /*#__PURE__*/React.createElement("label", {
      key: opt.value,
      onClick: () => pick(opt.value),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        fontSize: 14,
        color: "var(--flb-ink-2)",
        userSelect: "none"
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: groupName,
      checked: on,
      readOnly: true,
      style: {
        display: "none"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        height: 20,
        flexShrink: 0,
        borderRadius: 9999,
        border: `1px solid ${on ? "rgb(100,60,193)" : "var(--flb-line)"}`,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--flb-surface)",
        transition: "border-color var(--flb-dur) var(--flb-ease)"
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: 9999,
        background: "rgb(100,60,193)"
      }
    })), opt.label);
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/** Lightweight select / dropdown. Pass `options` [{value,label}]. */
function Select({
  options = [],
  value,
  defaultValue,
  onChange,
  placeholder = "Select…",
  label,
  disabled = false,
  style = {}
}) {
  const [open, setOpen] = React.useState(false);
  const [internal, setInternal] = React.useState(defaultValue);
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;
  const ref = React.useRef(null);
  const selected = options.find(o => o.value === current);
  React.useEffect(() => {
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  const pick = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
    setOpen(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative",
      fontFamily: "var(--flb-font-body)",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: "var(--flb-ink-2)"
    }
  }, label), /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: () => setOpen(o => !o),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
      height: 44,
      padding: "0 14px",
      width: "100%",
      background: "var(--flb-surface)",
      border: `1px solid ${open ? "rgb(160,139,255)" : "var(--flb-line)"}`,
      borderRadius: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      color: selected ? "var(--flb-ink)" : "var(--flb-ink-3)",
      fontSize: 14,
      fontFamily: "inherit",
      boxShadow: open ? "0 0 0 3px rgba(160,139,255,0.18)" : "none",
      opacity: disabled ? 0.5 : 1,
      transition: "border-color var(--flb-dur) var(--flb-ease)"
    }
  }, /*#__PURE__*/React.createElement("span", null, selected ? selected.label : placeholder), /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      transform: open ? "rotate(180deg)" : "none",
      transition: "transform var(--flb-dur) var(--flb-ease)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 6 L8 10 L12 6",
    stroke: "var(--flb-ink-3)",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 6px)",
      left: 0,
      right: 0,
      zIndex: 20,
      background: "var(--flb-surface-2)",
      border: "1px solid var(--flb-line)",
      borderRadius: 10,
      boxShadow: "var(--flb-shadow-lg)",
      padding: 6,
      maxHeight: 240,
      overflowY: "auto"
    }
  }, options.map(o => {
    const on = o.value === current;
    return /*#__PURE__*/React.createElement("div", {
      key: o.value,
      onClick: () => pick(o.value),
      style: {
        padding: "9px 12px",
        borderRadius: 7,
        fontSize: 14,
        cursor: "pointer",
        color: on ? "var(--flb-on-violet)" : "var(--flb-ink-2)",
        background: on ? "var(--flb-tint-violet)" : "transparent"
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.background = "var(--flb-surface-3)";
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.background = "transparent";
      }
    }, o.label);
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Toggle switch — violet track when on, sliding knob. */
function Switch({
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  label,
  size = "md",
  style = {},
  ...rest
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const W = size === "sm" ? 36 : 44;
  const H = size === "sm" ? 20 : 24;
  const knob = H - 4;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on, e);
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--flb-font-body)",
      fontSize: 14,
      color: "var(--flb-ink-2)",
      userSelect: "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    style: {
      width: W,
      height: H,
      flexShrink: 0,
      borderRadius: 9999,
      background: on ? "rgb(100,60,193)" : "var(--flb-surface-3)",
      padding: 2,
      display: "inline-flex",
      alignItems: "center",
      transition: "background var(--flb-dur) var(--flb-ease)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: knob,
      height: knob,
      borderRadius: 9999,
      background: "#fcfcfc",
      transform: on ? `translateX(${W - knob - 4}px)` : "translateX(0)",
      transition: "transform var(--flb-dur) var(--flb-ease-out)",
      boxShadow: "0 1px 3px rgba(0,0,0,0.4)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    onClick: toggle
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line text field; shares the Input visual language. */
function Textarea({
  label,
  hint,
  error,
  rows = 4,
  disabled = false,
  style = {},
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId();
  const inputId = id || reactId;
  const borderColor = error ? "var(--flb-error)" : focus ? "rgb(160,139,255)" : "var(--flb-line)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--flb-font-body)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: "var(--flb-ink-2)"
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      resize: "vertical",
      padding: "12px 14px",
      background: "var(--flb-surface)",
      border: `1px solid ${borderColor}`,
      borderRadius: 10,
      color: "var(--flb-ink)",
      fontSize: 14,
      fontFamily: "inherit",
      lineHeight: 1.5,
      outline: "none",
      boxShadow: focus && !error ? "0 0 0 3px rgba(160,139,255,0.18)" : "none",
      opacity: disabled ? 0.5 : 1,
      transition: "border-color var(--flb-dur) var(--flb-ease), box-shadow var(--flb-dur) var(--flb-ease)"
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? "var(--flb-error)" : "var(--flb-ink-3)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavItem.jsx
try { (() => {
/** Sidebar navigation row — icon + label, with active/hover states. */
function NavItem({
  icon,
  label,
  active = false,
  badge,
  collapsed = false,
  onClick,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    title: collapsed ? typeof label === "string" ? label : undefined : undefined,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      width: "100%",
      padding: collapsed ? "10px" : "10px 12px",
      justifyContent: collapsed ? "center" : "flex-start",
      border: "none",
      cursor: "pointer",
      borderRadius: 10,
      textAlign: "left",
      fontFamily: "var(--flb-font-body)",
      fontSize: 14,
      fontWeight: 500,
      color: active ? "var(--flb-on-violet)" : "var(--flb-ink-2)",
      background: active ? "var(--flb-tint-violet)" : hover ? "var(--flb-surface-3)" : "transparent",
      boxShadow: active ? "inset 0 0 0 1px rgba(160,139,255,0.35)" : "none",
      transition: "background var(--flb-dur) var(--flb-ease)",
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      flexShrink: 0,
      color: active ? "var(--flb-on-violet)" : "var(--flb-ink-3)"
    }
  }, icon), !collapsed && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, label), !collapsed && badge != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      color: "var(--flb-on-violet)",
      background: "var(--flb-tint-violet)",
      borderRadius: 9999,
      padding: "2px 8px"
    }
  }, badge));
}
Object.assign(__ds_scope, { NavItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
/** Pagination control. Shows numbered pages with prev/next, ellipsis for gaps. */
function Pagination({
  page = 1,
  total = 1,
  onChange,
  style = {}
}) {
  const go = p => {
    if (p >= 1 && p <= total) onChange && onChange(p);
  };
  const pages = [];
  const add = p => pages.push(p);
  if (total <= 7) {
    for (let i = 1; i <= total; i++) add(i);
  } else {
    add(1);
    if (page > 3) add("…");
    for (let i = Math.max(2, page - 1); i <= Math.min(total - 1, page + 1); i++) add(i);
    if (page < total - 2) add("…");
    add(total);
  }
  const Arrow = ({
    dir,
    disabled
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: () => go(dir === "prev" ? page - 1 : page + 1),
    disabled: disabled,
    style: {
      width: 34,
      height: 34,
      borderRadius: 8,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--flb-surface-2)",
      border: "1px solid var(--flb-line)",
      color: "var(--flb-ink-2)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      transform: dir === "next" ? "rotate(180deg)" : "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 4 L6 8 L10 12",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--flb-font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(Arrow, {
    dir: "prev",
    disabled: page <= 1
  }), pages.map((p, i) => p === "…" ? /*#__PURE__*/React.createElement("span", {
    key: `e${i}`,
    style: {
      width: 24,
      textAlign: "center",
      color: "var(--flb-ink-3)"
    }
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => go(p),
    style: {
      minWidth: 34,
      height: 34,
      padding: "0 8px",
      borderRadius: 8,
      fontSize: 13,
      fontWeight: 500,
      cursor: "pointer",
      fontFamily: "inherit",
      color: p === page ? "#fcfcfc" : "var(--flb-ink-2)",
      background: p === page ? "rgb(100,60,193)" : "var(--flb-surface-2)",
      border: `1px solid ${p === page ? "rgb(100,60,193)" : "var(--flb-line)"}`
    }
  }, p)), /*#__PURE__*/React.createElement(Arrow, {
    dir: "next",
    disabled: page >= total
  }));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Tabs. `items`: [{key,label,icon?}]. Underline (default) or pill variant. */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = "underline",
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? items[0]?.key);
  const isControlled = value !== undefined;
  const active = isControlled ? value : internal;
  const select = k => {
    if (!isControlled) setInternal(k);
    onChange && onChange(k);
  };
  if (variant === "pill") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-flex",
        gap: 4,
        padding: 4,
        background: "var(--flb-surface-2)",
        border: "1px solid var(--flb-line)",
        borderRadius: 10,
        fontFamily: "var(--flb-font-body)",
        ...style
      }
    }, items.map(it => {
      const on = it.key === active;
      return /*#__PURE__*/React.createElement("button", {
        key: it.key,
        onClick: () => select(it.key),
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 7,
          padding: "8px 14px",
          border: "none",
          borderRadius: 7,
          cursor: "pointer",
          fontFamily: "inherit",
          fontSize: 13,
          fontWeight: 500,
          color: on ? "#fcfcfc" : "var(--flb-ink-3)",
          background: on ? "rgb(100,60,193)" : "transparent",
          transition: "all var(--flb-dur) var(--flb-ease)"
        }
      }, it.icon, it.label);
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      borderBottom: "1px solid var(--flb-line)",
      fontFamily: "var(--flb-font-body)",
      ...style
    }
  }, items.map(it => {
    const on = it.key === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.key,
      onClick: () => select(it.key),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        padding: "11px 14px",
        border: "none",
        background: "none",
        cursor: "pointer",
        fontFamily: "inherit",
        fontSize: 14,
        fontWeight: 500,
        color: on ? "var(--flb-ink)" : "var(--flb-ink-3)",
        borderBottom: `2px solid ${on ? "rgb(160,139,255)" : "transparent"}`,
        marginBottom: -1,
        transition: "color var(--flb-dur) var(--flb-ease)"
      }
    }, it.icon, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/flable-app/AppShell.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* flable.ai — app chrome: left sidebar + top bar + content slot. */
function AppShell({
  active,
  onNavigate,
  title,
  subtitle,
  actions,
  theme = "dark",
  onToggleTheme,
  children
}) {
  const {
    BrandLogo,
    NavItem,
    Avatar
  } = window.FlableAiDesignSystem_c17dff;
  const I = window.Icons;
  const nav = [{
    key: "ask",
    label: "Ask AI CMO",
    icon: /*#__PURE__*/React.createElement(I.Sparkle, {
      size: 18
    })
  }, {
    key: "dashboard",
    label: "Dashboard",
    icon: /*#__PURE__*/React.createElement(I.Grid, {
      size: 18
    })
  }, {
    key: "campaigns",
    label: "Campaigns",
    icon: /*#__PURE__*/React.createElement(I.Megaphone, {
      size: 18
    }),
    badge: "6"
  }, {
    key: "audiences",
    label: "Audiences",
    icon: /*#__PURE__*/React.createElement(I.Users, {
      size: 18
    })
  }, {
    key: "connections",
    label: "Connections",
    icon: /*#__PURE__*/React.createElement(I.Plug, {
      size: 18
    })
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: theme === "light" ? "light" : undefined,
    style: {
      display: "flex",
      height: "100%",
      background: "var(--flb-bg)",
      color: "var(--flb-ink)",
      fontFamily: "var(--flb-font-body)"
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 248,
      flexShrink: 0,
      borderRight: "1px solid var(--flb-line)",
      display: "flex",
      flexDirection: "column",
      padding: 16,
      gap: 4,
      background: "var(--flb-surface)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 8px 18px"
    }
  }, /*#__PURE__*/React.createElement(BrandLogo, {
    size: 26
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--flb-ink-4)",
      padding: "4px 12px 8px"
    }
  }, "Workspace"), nav.map(n => /*#__PURE__*/React.createElement(NavItem, _extends({
    key: n.key
  }, n, {
    active: active === n.key,
    onClick: () => onNavigate && onNavigate(n.key)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: /*#__PURE__*/React.createElement(I.Gear, {
      size: 18
    }),
    label: "Settings",
    active: active === "settings",
    onClick: () => onNavigate && onNavigate("settings")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 8px 4px",
      marginTop: 6,
      borderTop: "1px solid var(--flb-line)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Acme D2C",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: "var(--flb-ink)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, "Acme D2C"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--flb-ink-3)"
    }
  }, "Growth plan")))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      height: 64,
      flexShrink: 0,
      borderBottom: "1px solid var(--flb-line)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 28px",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: 18,
      color: "var(--flb-ink)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--flb-ink-3)",
      marginTop: 1
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, actions, /*#__PURE__*/React.createElement("button", {
    onClick: onToggleTheme,
    title: "Toggle theme",
    style: {
      width: 38,
      height: 38,
      borderRadius: 10,
      border: "1px solid var(--flb-line)",
      background: "var(--flb-surface-2)",
      color: "var(--flb-ink-2)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }
  }, theme === "light" ? /*#__PURE__*/React.createElement(I.Moon, {
    size: 18
  }) : /*#__PURE__*/React.createElement(I.Sun, {
    size: 18
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 10,
      border: "1px solid var(--flb-line)",
      background: "var(--flb-surface-2)",
      color: "var(--flb-ink-2)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(I.Bell, {
    size: 18
  })), /*#__PURE__*/React.createElement(Avatar, {
    name: "Anirudh S",
    size: "sm",
    status: "online"
  }))), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: "auto"
    }
  }, children)));
}
window.AppShell = AppShell;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/flable-app/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/flable-app/AskScreen.jsx
try { (() => {
/* flable.ai — "Ask AI CMO": the conversational analyst (flagship surface). */
function AskScreen() {
  const B = window.FlableAiDesignSystem_c17dff;
  const {
    FlableMark,
    Badge,
    Alert,
    Table,
    Button,
    Chip,
    Spinner
  } = B;
  const I = window.Icons;
  const lowRoas = {
    columns: [{
      key: "name",
      header: "Ad group"
    }, {
      key: "ch",
      header: "Channel"
    }, {
      key: "spend",
      header: "Spend",
      align: "right",
      render: v => "$" + v.toLocaleString()
    }, {
      key: "roas",
      header: "ROAS",
      align: "right",
      render: v => /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 500,
          color: "var(--flb-error)"
        }
      }, v.toFixed(2))
    }],
    rows: [{
      name: "Summer Promo — Set B",
      ch: "Meta",
      spend: 1714,
      roas: 0.92
    }, {
      name: "Phrase — Brand+",
      ch: "Google",
      spend: 980,
      roas: 1.21
    }, {
      name: "Q2 Sales Push",
      ch: "Meta",
      spend: 2240,
      roas: 1.34
    }]
  };
  const seedAI = /*#__PURE__*/React.createElement(AIResponse, {
    key: "a1",
    thought: "26s"
  }, /*#__PURE__*/React.createElement("p", {
    style: pStyle
  }, "Here's your performance review for the last 30 days (Sep 16 \u2013 Oct 15) across ", /*#__PURE__*/React.createElement("strong", null, "Meta, Google & Amazon Ads"), ". I found ", /*#__PURE__*/React.createElement("strong", null, "3 ad groups with ROAS < 1.5"), " and where to reallocate budget for maximum profit."), /*#__PURE__*/React.createElement(Alert, {
    tone: "error",
    title: "ROAS on Meta Ads is below 1"
  }, "\u201CSummer Promo \u2014 Ad Set B\u201D is the primary cause of the ROAS drop. The Carousel + \u201CShop Now\u201D creative is not performing. Pausing it prevents ~25% in wasted spend."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: blockLabel
  }, "Low-ROAS ad groups \xB7 pause & reallocate"), /*#__PURE__*/React.createElement(Table, {
    columns: lowRoas.columns,
    rows: lowRoas.rows
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      padding: 16,
      borderRadius: 12,
      background: "var(--flb-gradient-primary-focus-dark)",
      border: "1px solid rgba(160,139,255,0.3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(I.Bolt, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      color: "var(--flb-ink)"
    }
  }, "AI CMO Recommendation")), /*#__PURE__*/React.createElement("p", {
    style: {
      ...pStyle,
      marginTop: 0
    }
  }, "Reallocate ", /*#__PURE__*/React.createElement("strong", null, "$7K"), " from underperforming carousels into short-form UGC video and your top profit-weighted lookalike audiences. Projected lift: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--flb-success)"
    }
  }, "+25% ROAS"), " over 30 days."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement(I.Check, {
      size: 15
    })
  }, "Apply & pause ad set"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "outline"
  }, "View full report"))));
  const [thread, setThread] = React.useState([{
    role: "user",
    text: "List all ad groups with ROAS < 1.5 and Margin < 10%. Suggest where to reallocate budget for maximum profit — last 30 days."
  }, {
    role: "ai",
    node: seedAI
  }]);
  const [draft, setDraft] = React.useState("");
  const [thinking, setThinking] = React.useState(false);
  const scroller = React.useRef(null);
  React.useEffect(() => {
    if (scroller.current) scroller.current.scrollTop = scroller.current.scrollHeight;
  }, [thread, thinking]);
  const send = text => {
    const q = (text ?? draft).trim();
    if (!q) return;
    setDraft("");
    setThread(t => [...t, {
      role: "user",
      text: q
    }]);
    setThinking(true);
    setTimeout(() => {
      setThinking(false);
      setThread(t => [...t, {
        role: "ai",
        node: /*#__PURE__*/React.createElement(AIResponse, {
          key: "r" + t.length,
          thought: "18s"
        }, /*#__PURE__*/React.createElement("p", {
          style: pStyle
        }, "Profit-weighted lookalikes perform best when creative, keyword intent and SKU margin align. Here's a focused plan for that segment."), /*#__PURE__*/React.createElement(Alert, {
          tone: "violet",
          title: "Cross-channel insight"
        }, "Meta UGC video + Google broad-match high-intent terms are carrying returns. Phrase match is inefficient \u2014 high CPC, few conversions."), /*#__PURE__*/React.createElement("div", {
          style: {
            display: "flex",
            gap: 10,
            marginTop: 14
          }
        }, /*#__PURE__*/React.createElement(Button, {
          size: "sm",
          variant: "primary"
        }, "Generate campaign"), /*#__PURE__*/React.createElement(Button, {
          size: "sm",
          variant: "ghost"
        }, "Refine")))
      }]);
    }, 1400);
  };
  const suggestions = ["Why did ROAS drop last week?", "Best channel for new launch?", "Forecast next month's profit"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: scroller,
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: "auto",
      padding: "28px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: "0 auto",
      padding: "0 28px",
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, thread.map((m, i) => m.role === "user" ? /*#__PURE__*/React.createElement(UserMsg, {
    key: i,
    text: m.text
  }) : /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, m.node)), thinking && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(MarkAvatar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      color: "var(--flb-ink-3)",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Spinner, {
    size: 16
  }), " Analyzing 3 channels\u2026")))), /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      borderTop: "1px solid var(--flb-line)",
      padding: "16px 28px 22px",
      background: "var(--flb-bg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 12,
      flexWrap: "wrap"
    }
  }, suggestions.map(s => /*#__PURE__*/React.createElement(Chip, {
    key: s,
    icon: /*#__PURE__*/React.createElement(I.Sparkle, {
      size: 13
    }),
    onRemove: undefined
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => send(s),
    style: {
      cursor: "pointer"
    }
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 10,
      padding: 10,
      borderRadius: 16,
      background: "var(--flb-surface)",
      border: "1px solid var(--flb-line)",
      boxShadow: "var(--flb-shadow-md)"
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    value: draft,
    onChange: e => setDraft(e.target.value),
    onKeyDown: e => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        send();
      }
    },
    rows: 1,
    placeholder: "Ask your AI CMO anything about performance, budget or creative\u2026",
    style: {
      flex: 1,
      resize: "none",
      border: "none",
      outline: "none",
      background: "transparent",
      color: "var(--flb-ink)",
      fontFamily: "var(--flb-font-body)",
      fontSize: 15,
      lineHeight: 1.5,
      padding: "8px 6px",
      maxHeight: 120
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "gradient",
    size: "md",
    onClick: () => send(),
    iconRight: /*#__PURE__*/React.createElement(I.Send, {
      size: 16
    })
  }, "Ask")))));
}
const pStyle = {
  fontSize: 15,
  lineHeight: 1.6,
  color: "var(--flb-ink-2)",
  margin: "0 0 14px"
};
const blockLabel = {
  fontSize: 12,
  fontWeight: 500,
  letterSpacing: "0.02em",
  color: "var(--flb-ink-3)",
  marginBottom: 8
};
function MarkAvatar() {
  const {
    FlableMark
  } = window.FlableAiDesignSystem_c17dff;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      flexShrink: 0,
      borderRadius: 10,
      background: "var(--flb-surface-2)",
      border: "1px solid var(--flb-line)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(FlableMark, {
    size: 20
  }));
}
function UserMsg({
  text
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "78%",
      padding: "12px 16px",
      borderRadius: "16px 16px 4px 16px",
      background: "rgb(100,60,193)",
      color: "#fcfcfc",
      fontSize: 15,
      lineHeight: 1.5,
      boxShadow: "var(--flb-shadow-sm)"
    }
  }, text));
}
function AIResponse({
  thought,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(MarkAvatar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: 14,
      color: "var(--flb-ink)"
    }
  }, "Flable AI CMO"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--flb-ink-4)"
    }
  }, "\xB7 Thought for ", thought)), children));
}
window.AskScreen = AskScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/flable-app/AskScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/flable-app/ConnectionsScreen.jsx
try { (() => {
/* flable.ai — Connections: link ad + commerce accounts so the AI CMO has full context. */
function ConnectionsScreen() {
  const B = window.FlableAiDesignSystem_c17dff;
  const {
    Card,
    Badge,
    Button,
    Switch
  } = B;
  const I = window.Icons;
  const channels = [{
    name: "Meta Ads",
    desc: "Facebook & Instagram campaigns",
    color: "#0866FF",
    letter: "M",
    status: "synced",
    since: "2 min ago"
  }, {
    name: "Google Ads",
    desc: "Search, Shopping & PMax",
    color: "#34A853",
    letter: "G",
    status: "synced",
    since: "5 min ago"
  }, {
    name: "Amazon Ads",
    desc: "Sponsored Products & Brands",
    color: "#FF9900",
    letter: "a",
    status: "syncing",
    since: "now"
  }, {
    name: "Shopify",
    desc: "Orders, margin & SKU data",
    color: "#95BF47",
    letter: "S",
    status: "connect",
    since: null
  }, {
    name: "TikTok Ads",
    desc: "In-feed & Spark ads",
    color: "#EE1D52",
    letter: "T",
    status: "connect",
    since: null
  }, {
    name: "Klaviyo",
    desc: "Email & SMS attribution",
    color: "#FFB81C",
    letter: "K",
    status: "connect",
    since: null
  }];
  const statusBadge = s => s === "synced" ? /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "Synced") : s === "syncing" ? /*#__PURE__*/React.createElement(Badge, {
    tone: "info",
    dot: true
  }, "Syncing\u2026") : /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Not connected");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      fontFamily: "var(--flb-font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 18,
      flexWrap: "wrap",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--flb-ink-3)",
      maxWidth: 560,
      lineHeight: 1.5
    }
  }, "AI CMO begins with a complete picture. Connect every channel so Flable can ingest your full funnel and optimize for real profit."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--flb-ink-2)"
    }
  }, "Auto-sync hourly"), /*#__PURE__*/React.createElement(Switch, {
    defaultChecked: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 14
    }
  }, channels.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.name,
    padding: 18,
    interactive: c.status === "connect"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      flexShrink: 0,
      background: c.color,
      color: "#fcfcfc",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: 20
    }
  }, c.letter), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: 15,
      color: "var(--flb-ink)"
    }
  }, c.name), statusBadge(c.status)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--flb-ink-3)",
      marginTop: 2
    }
  }, c.desc, c.since ? ` · updated ${c.since}` : "")), c.status === "connect" ? /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement(I.Plus, {
      size: 15
    })
  }, "Connect") : /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement(I.Dots, {
    size: 18
  })))))));
}
window.ConnectionsScreen = ConnectionsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/flable-app/ConnectionsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/flable-app/DashboardScreen.jsx
try { (() => {
/* flable.ai — Dashboard: profit-first performance overview. */
function DashboardScreen() {
  const B = window.FlableAiDesignSystem_c17dff;
  const {
    Card,
    Badge,
    Table,
    ProgressBar
  } = B;
  const I = window.Icons;
  const metrics = [{
    label: "Ad spend",
    value: "$48.2K",
    delta: "-8%",
    down: true,
    good: true
  }, {
    label: "Blended ROAS",
    value: "2.74",
    delta: "+25%",
    down: false,
    good: true
  }, {
    label: "Net profit",
    value: "$71.9K",
    delta: "+18%",
    down: false,
    good: true
  }, {
    label: "Wasted spend prevented",
    value: "$7.1K",
    delta: "40%",
    down: false,
    good: true
  }];
  const topCols = [{
    key: "name",
    header: "Campaign"
  }, {
    key: "ch",
    header: "Channel",
    render: v => /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral",
      size: "sm"
    }, v)
  }, {
    key: "spend",
    header: "Spend",
    align: "right",
    render: v => "$" + v.toLocaleString()
  }, {
    key: "roas",
    header: "ROAS",
    align: "right",
    render: v => /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500,
        color: v < 1.5 ? "var(--flb-error)" : "var(--flb-success)"
      }
    }, v.toFixed(2))
  }, {
    key: "status",
    header: "Action",
    render: v => v === "Boost" ? /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      dot: true
    }, "Boost") : v === "Pause" ? /*#__PURE__*/React.createElement(Badge, {
      tone: "error",
      dot: true
    }, "Pause") : /*#__PURE__*/React.createElement(Badge, {
      tone: "warning",
      dot: true
    }, "Watch")
  }];
  const topRows = [{
    name: "Lookalike — High LTV",
    ch: "Google",
    spend: 9200,
    roas: 3.41,
    status: "Boost"
  }, {
    name: "Retargeting / Cart",
    ch: "Amazon",
    spend: 6400,
    roas: 2.18,
    status: "Boost"
  }, {
    name: "Prospecting UGC",
    ch: "Meta",
    spend: 7800,
    roas: 1.92,
    status: "Watch"
  }, {
    name: "Summer Promo — Set B",
    ch: "Meta",
    spend: 1714,
    roas: 0.92,
    status: "Pause"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      display: "flex",
      flexDirection: "column",
      gap: 18,
      fontFamily: "var(--flb-font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 14
    }
  }, metrics.map(m => /*#__PURE__*/React.createElement(Card, {
    key: m.label,
    padding: 18
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--flb-ink-3)",
      marginBottom: 8
    }
  }, m.label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: 26,
      color: "var(--flb-ink)"
    }
  }, m.value), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 3,
      fontSize: 12.5,
      fontWeight: 500,
      color: m.good ? "var(--flb-success)" : "var(--flb-error)"
    }
  }, m.down ? /*#__PURE__*/React.createElement(I.TrendDown, {
    size: 14
  }) : /*#__PURE__*/React.createElement(I.TrendUp, {
    size: 14
  }), m.delta))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.7fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: 16,
      color: "var(--flb-ink)"
    }
  }, "Revenue vs ad spend"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--flb-ink-3)",
      marginTop: 2
    }
  }, "Last 30 days \xB7 blended")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement(LegendDot, {
    color: "rgb(127,86,217)",
    label: "Revenue"
  }), /*#__PURE__*/React.createElement(LegendDot, {
    color: "rgb(140,140,145)",
    label: "Spend"
  }))), /*#__PURE__*/React.createElement(AreaChart, null)), /*#__PURE__*/React.createElement(Card, {
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: 16,
      color: "var(--flb-ink)",
      marginBottom: 16
    }
  }, "Channel mix"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    gradient: true,
    value: 52,
    showLabel: true,
    label: "Meta Ads"
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    tone: "violet",
    value: 31,
    showLabel: true,
    label: "Google Ads"
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    tone: "success",
    value: 17,
    showLabel: true,
    label: "Amazon Ads"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      padding: 14,
      borderRadius: 12,
      background: "var(--flb-surface-2)",
      border: "1px solid var(--flb-line)",
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(I.Sparkle, {
    size: 18
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: 1.5,
      color: "var(--flb-ink-2)"
    }
  }, "Shift 6% from Meta to Google lookalikes for an est. ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--flb-success)"
    }
  }, "+4%"), " blended ROAS.")))), /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 20px",
      borderBottom: "1px solid var(--flb-line)",
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: 16,
      color: "var(--flb-ink)"
    }
  }, "Top campaigns"), /*#__PURE__*/React.createElement(Table, {
    columns: topCols,
    rows: topRows,
    style: {
      border: "none",
      borderRadius: 0
    }
  })));
}
function LegendDot({
  color,
  label
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      color: "var(--flb-ink-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: 9,
      background: color
    }
  }), label);
}
function AreaChart() {
  const rev = [28, 34, 30, 42, 38, 52, 49, 61, 58, 70, 66, 78];
  const spend = [22, 24, 21, 26, 25, 28, 27, 30, 29, 31, 30, 33];
  const W = 560,
    H = 200,
    pad = 8;
  const max = 90;
  const x = i => pad + i * (W - pad * 2) / (rev.length - 1);
  const y = v => H - pad - v / max * (H - pad * 2);
  const line = arr => arr.map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(" ");
  const area = `${line(rev)} L${x(rev.length - 1)} ${H - pad} L${x(0)} ${H - pad} Z`;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    width: "100%",
    height: "200",
    preserveAspectRatio: "none",
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "dashArea",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "rgb(127,86,217)",
    stopOpacity: "0.45"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "rgb(127,86,217)",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: "url(#dashArea)"
  }), /*#__PURE__*/React.createElement("path", {
    d: line(rev),
    fill: "none",
    stroke: "rgb(160,139,255)",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: line(spend),
    fill: "none",
    stroke: "rgb(140,140,145)",
    strokeWidth: "2",
    strokeDasharray: "5 5",
    strokeLinecap: "round"
  }));
}
window.DashboardScreen = DashboardScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/flable-app/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/flable-app/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Phosphor-style stroke icons (1.7px), matching the source file's Phosphor set.
   Each returns an inline SVG that inherits `currentColor` and `size`. */
function Icon({
  size = 20,
  children,
  viewBox = "0 0 24 24",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: viewBox,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), children);
}
const Icons = {
  Sparkle: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"
  })),
  Grid: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "7",
    height: "7",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "3",
    width: "7",
    height: "7",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "14",
    width: "7",
    height: "7",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "14",
    width: "7",
    height: "7",
    rx: "1.5"
  })),
  Megaphone: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M3 11v2a1 1 0 001 1h2l3 4V6L6 10H4a1 1 0 00-1 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 14l9 4V6L9 10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 9a3 3 0 010 6"
  })),
  Users: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "8",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 20a6 6 0 0112 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 6a3 3 0 010 6M17 20a6 6 0 00-2-4.5"
  })),
  Plug: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M9 3v5M15 3v5M7 8h10v3a5 5 0 01-10 0V8zM12 16v5"
  })),
  Gear: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2.5v2.5M12 19v2.5M4.5 4.5l1.8 1.8M17.7 17.7l1.8 1.8M2.5 12H5M19 12h2.5M4.5 19.5l1.8-1.8M17.7 6.3l1.8-1.8"
  })),
  TrendUp: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M3 17l6-6 4 4 8-8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 7h6v6"
  })),
  TrendDown: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M3 7l6 6 4-4 8 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 17h6v-6"
  })),
  Bell: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M6 9a6 6 0 0112 0c0 5 2 6 2 6H4s2-1 2-6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 20a2 2 0 004 0"
  })),
  Search: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 20l-3.5-3.5"
  })),
  Send: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M4 12l16-7-7 16-2.5-6.5L4 12z"
  })),
  Plus: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  })),
  Bolt: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M13 3L5 13h5l-1 8 8-10h-5l1-8z"
  })),
  Check: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M5 12.5l4.5 4.5L19 7"
  })),
  Caret: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  })),
  Dots: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "12",
    r: "1.3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1.3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "1.3"
  })),
  Calendar: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "5",
    width: "16",
    height: "16",
    rx: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 9h16M8 3v4M16 3v4"
  })),
  Target: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "0.6",
    fill: "currentColor"
  })),
  Sun: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
  })),
  Moon: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M20 14.5A8 8 0 119.5 4a6.5 6.5 0 0010.5 10.5z"
  }))
};
window.Icons = Icons;
window.FlbIcon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/flable-app/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/flable-onboarding/Auth.jsx
try { (() => {
/* Screens 1–2: Create account + Check your inbox. Right column; the
   MarketingPanel fills the left. */

function SignUpScreen({
  data,
  setData,
  onContinue
}) {
  const {
    BrandLogo,
    Input
  } = window.FlableAiDesignSystem_c17dff;
  const I = window.Icons,
    Brand = window.Brand;
  const [showPw, setShowPw] = React.useState(false);
  const oauthBtn = (icon, label) => /*#__PURE__*/React.createElement("button", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      width: "100%",
      height: 46,
      borderRadius: 10,
      border: "1px solid var(--flb-line)",
      background: "#fcfcfc",
      cursor: "pointer",
      fontFamily: "var(--flb-font-body)",
      fontSize: 14,
      fontWeight: 500,
      color: "#2d2d31"
    },
    onMouseEnter: e => e.currentTarget.style.background = "#faf9fe",
    onMouseLeave: e => e.currentTarget.style.background = "#fcfcfc"
  }, icon, label);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "30px 0 0 34px"
    }
  }, /*#__PURE__*/React.createElement(BrandLogo, {
    size: 26,
    color: "#151517"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px 34px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: 27,
      letterSpacing: "-0.02em",
      color: "#19191c",
      margin: 0
    }
  }, "Create your account"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "#6a6a6f",
      margin: "8px 0 22px",
      lineHeight: 1.5
    }
  }, "Join thousands of D2C brands letting Orion run their campaigns."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, oauthBtn(/*#__PURE__*/React.createElement(Brand.Google, {
    size: 18
  }), "Sign up with Google"), oauthBtn(/*#__PURE__*/React.createElement(Brand.Microsoft, {
    size: 17
  }), "Sign up with Microsoft")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      margin: "20px 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--flb-line)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 500,
      letterSpacing: "0.08em",
      color: "#9a9aa0"
    }
  }, "OR SIGN UP WITH EMAIL"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--flb-line)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full Name",
    value: data.name,
    onChange: e => setData({
      ...data,
      name: e.target.value
    }),
    placeholder: "Sarah Chen"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Work Email",
    value: data.email,
    onChange: e => setData({
      ...data,
      email: e.target.value
    }),
    placeholder: "sarah@luminaryskincare.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Company URL",
    value: data.url,
    onChange: e => setData({
      ...data,
      url: e.target.value
    }),
    placeholder: "luminaryskincare.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    type: showPw ? "text" : "password",
    value: data.pw,
    onChange: e => setData({
      ...data,
      pw: e.target.value
    }),
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    trailing: /*#__PURE__*/React.createElement("span", {
      onClick: () => setShowPw(s => !s),
      style: {
        cursor: "pointer",
        display: "inline-flex"
      }
    }, showPw ? /*#__PURE__*/React.createElement(I.EyeOff, {
      size: 17
    }) : /*#__PURE__*/React.createElement(I.Eye, {
      size: 17
    }))
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(window.CTA, {
    full: true,
    onClick: onContinue
  }, "Continue")), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      fontSize: 13.5,
      color: "#6a6a6f",
      margin: "16px 0 0"
    }
  }, "Already have an account? ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--flb-violet)",
      fontWeight: 500,
      cursor: "pointer"
    }
  }, "Sign in")))));
}
function VerifyScreen({
  email,
  onVerified
}) {
  const {
    BrandLogo
  } = window.FlableAiDesignSystem_c17dff;
  const [digits, setDigits] = React.useState(["", "", "", "", "", ""]);
  const [secs, setSecs] = React.useState(22);
  const refs = React.useRef([]);
  React.useEffect(() => {
    const t = setInterval(() => setSecs(s => s > 0 ? s - 1 : 0), 1000);
    return () => clearInterval(t);
  }, []);
  const set = (i, v) => {
    if (!/^\d?$/.test(v)) return;
    const next = [...digits];
    next[i] = v;
    setDigits(next);
    if (v && i < 5) refs.current[i + 1]?.focus();
    if (next.every(d => d)) setTimeout(onVerified, 350);
  };
  const onKey = (i, e) => {
    if (e.key === "Backspace" && !digits[i] && i > 0) refs.current[i - 1]?.focus();
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "30px 0 0 34px"
    }
  }, /*#__PURE__*/React.createElement(BrandLogo, {
    size: 26,
    color: "#151517"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 34,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(window.OrionEmblem, {
    size: 92,
    rings: true,
    tone: "light"
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: 27,
      letterSpacing: "-0.02em",
      color: "#19191c",
      margin: "26px 0 0"
    }
  }, "Check your inbox"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "#6a6a6f",
      margin: "8px 0 26px"
    }
  }, "We sent a 6-digit code to ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#2d2d31",
      fontWeight: 500
    }
  }, email)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, digits.map((d, i) => /*#__PURE__*/React.createElement("input", {
    key: i,
    ref: el => refs.current[i] = el,
    value: d,
    inputMode: "numeric",
    maxLength: 1,
    onChange: e => set(i, e.target.value),
    onKeyDown: e => onKey(i, e),
    style: {
      width: 52,
      height: 60,
      textAlign: "center",
      fontSize: 24,
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      color: "#19191c",
      borderRadius: 12,
      border: `1.5px solid ${d ? "var(--flb-violet)" : "var(--flb-line)"}`,
      background: "#fcfcfc",
      outline: "none",
      boxShadow: d ? "0 0 0 3px rgba(100,60,193,0.12)" : "none"
    }
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: "#9a9aa0",
      margin: "26px 0 0"
    }
  }, "Didn't get it? ", secs > 0 ? /*#__PURE__*/React.createElement("span", null, "Resend in 0:", String(secs).padStart(2, "0")) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--flb-violet)",
      fontWeight: 500,
      cursor: "pointer"
    }
  }, "Resend code"))));
}
window.SignUpScreen = SignUpScreen;
window.VerifyScreen = VerifyScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/flable-onboarding/Auth.jsx", error: String((e && e.message) || e) }); }

// ui_kits/flable-onboarding/Confirm.jsx
try { (() => {
/* Screen 4 + 5: Confirm details (enriched brand profile) + referral modal. */

function ConfirmScreen({
  onGetAudit
}) {
  const {
    Input,
    Select
  } = window.FlableAiDesignSystem_c17dff;
  const I = window.Icons;
  const enriched = /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9.5,
      fontWeight: 500,
      letterSpacing: "0.05em",
      color: "var(--flb-violet)",
      marginLeft: 7
    }
  }, "+ ENRICHED");
  const fieldLabel = (t, extra) => /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 500,
      color: "var(--flb-ink-2)",
      marginBottom: 7
    }
  }, t, extra);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "var(--flb-bg)"
    }
  }, /*#__PURE__*/React.createElement(window.AccountBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "10px 44px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      margin: "8px 0 26px"
    }
  }, /*#__PURE__*/React.createElement(window.Stepper, {
    step: 2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: 28,
      letterSpacing: "-0.02em",
      color: "var(--flb-ink)",
      margin: 0
    }
  }, "Does this look right?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      color: "var(--flb-ink-3)",
      margin: "8px 0 0"
    }
  }, "Enriched from public sources \u2014 edit anything that's off.")), /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      fontSize: 12,
      fontWeight: 500,
      color: "var(--flb-ink-2)",
      background: "var(--flb-surface)",
      border: "1px solid var(--flb-line)",
      padding: "7px 13px",
      borderRadius: 9999
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 9999,
      background: "#1f9d57"
    }
  }), "luminaryskincare.com \xB7 11 sources")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--flb-surface)",
      border: "1px solid var(--flb-line)",
      borderRadius: 16,
      boxShadow: "var(--flb-shadow-sm)",
      padding: 22,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingBottom: 18,
      borderBottom: "1px solid var(--flb-line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 12,
      background: "linear-gradient(135deg,#F65BA0,#E0407E)",
      color: "#fcfcfc",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: 18
    }
  }, "L"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: 16,
      color: "var(--flb-ink)"
    }
  }, "Luminary Skincare Co."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontSize: 12.5,
      color: "var(--flb-ink-3)",
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 9999,
      background: "#95BF47"
    }
  }), "Shopify \xB7 luminaryskincare.com"))), /*#__PURE__*/React.createElement("button", {
    style: {
      height: 34,
      padding: "0 14px",
      borderRadius: 9,
      border: "1px solid var(--flb-line)",
      background: "var(--flb-surface)",
      color: "var(--flb-ink-2)",
      fontSize: 13,
      fontWeight: 500,
      cursor: "pointer",
      fontFamily: "var(--flb-font-body)"
    }
  }, "Replace logo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "18px 24px",
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Company name",
    defaultValue: "Luminary Skincare Co."
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Website",
    defaultValue: "luminaryskincare.com",
    trailing: /*#__PURE__*/React.createElement(I.Check, {
      size: 16,
      style: {
        color: "#1f9d57"
      }
    })
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Industry / category",
    defaultValue: "beauty",
    options: [{
      value: "beauty",
      label: "Beauty & Personal Care"
    }, {
      value: "fashion",
      label: "Fashion & Apparel"
    }, {
      value: "food",
      label: "Food & Beverage"
    }, {
      value: "home",
      label: "Home & Lifestyle"
    }]
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Country",
    defaultValue: "us",
    options: [{
      value: "us",
      label: "United States"
    }, {
      value: "uk",
      label: "United Kingdom"
    }, {
      value: "in",
      label: "India"
    }, {
      value: "de",
      label: "Germany"
    }]
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, fieldLabel("Target Audience", enriched)), /*#__PURE__*/React.createElement(Input, {
    defaultValue: "Women 25\u201345, skincare enthusiasts"
  })), /*#__PURE__*/React.createElement(Select, {
    label: "Brand Voice",
    defaultValue: "clean",
    options: [{
      value: "clean",
      label: "Clean & Aspirational"
    }, {
      value: "bold",
      label: "Bold & Playful"
    }, {
      value: "expert",
      label: "Expert & Clinical"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1"
    }
  }, fieldLabel("USP", enriched), /*#__PURE__*/React.createElement(Input, {
    defaultValue: "Dermatologist-tested, clean ingredients with visible results in 14 days"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 7,
      marginTop: 18,
      fontSize: 12.5,
      color: "var(--flb-ink-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--flb-violet)"
    }
  }, "\u2726"), " ", /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--flb-violet)"
    }
  }, "Enriched"), " fields are inferred from public sources. You can edit anything."))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 44px",
      borderTop: "1px solid var(--flb-line)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      fontSize: 13,
      fontWeight: 500,
      color: "#1f9d57"
    }
  }, /*#__PURE__*/React.createElement(I.Check, {
    size: 15
  }), "All required fields look good"), /*#__PURE__*/React.createElement(window.CTA, {
    onClick: onGetAudit
  }, "Get My Free Audit")));
}
function ReferralModal({
  onClose,
  onSkip
}) {
  const I = window.Icons;
  const [code, setCode] = React.useState("");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(20,12,40,0.4)",
      backdropFilter: "blur(6px)",
      WebkitBackdropFilter: "blur(6px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 340,
      background: "#fcfcfc",
      borderRadius: 18,
      boxShadow: "0 30px 70px rgba(20,12,40,0.4)",
      padding: 26,
      position: "relative",
      fontFamily: "var(--flb-font-body)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      position: "absolute",
      top: 16,
      right: 16,
      width: 28,
      height: 28,
      borderRadius: 8,
      border: "none",
      background: "transparent",
      color: "#9a9aa0",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4l8 8M12 4l-8 8",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: "rgba(100,60,193,0.1)",
      color: "var(--flb-violet)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(I.Tag, {
    size: 22
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: 21,
      letterSpacing: "-0.01em",
      color: "#19191c",
      margin: "16px 0 0"
    }
  }, "Have a referral code?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: "#6a6a6f",
      lineHeight: 1.55,
      margin: "8px 0 18px"
    }
  }, "A valid code unlocks your free audit instantly. No code? No problem \u2014 continue to choose a plan."), /*#__PURE__*/React.createElement("input", {
    value: code,
    onChange: e => setCode(e.target.value.toUpperCase()),
    placeholder: "E.G. FRIEND25",
    style: {
      width: "100%",
      height: 46,
      padding: "0 14px",
      borderRadius: 10,
      border: "1px solid var(--flb-line)",
      background: "#fcfcfc",
      fontSize: 14,
      fontFamily: "var(--flb-font-body)",
      letterSpacing: "0.04em",
      outline: "none",
      boxSizing: "border-box",
      color: "#19191c"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onSkip,
    disabled: !code,
    style: {
      width: "100%",
      height: 46,
      marginTop: 12,
      borderRadius: 10,
      border: "none",
      cursor: code ? "pointer" : "not-allowed",
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: 14.5,
      color: "#fcfcfc",
      background: code ? "linear-gradient(135deg,var(--flb-purple),var(--flb-violet))" : "#cfc4ee"
    }
  }, "Apply code"), /*#__PURE__*/React.createElement("button", {
    onClick: onSkip,
    style: {
      width: "100%",
      height: 46,
      marginTop: 10,
      borderRadius: 10,
      border: "1px solid var(--flb-line)",
      background: "#fcfcfc",
      cursor: "pointer",
      fontFamily: "var(--flb-font-body)",
      fontWeight: 500,
      fontSize: 14,
      color: "#2d2d31"
    }
  }, "Skip \u2014 continue to pricing")));
}
window.ConfirmScreen = ConfirmScreen;
window.ReferralModal = ReferralModal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/flable-onboarding/Confirm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/flable-onboarding/Connect.jsx
try { (() => {
/* Screens 3–5: Connect ad accounts, Confirm details, Referral modal.
   Right column; OrionDarkPanel fills the left. */

function ConnectScreen({
  onContinue
}) {
  const I = window.Icons,
    Brand = window.Brand;
  const [google, setGoogle] = React.useState("progress"); // progress -> connected
  React.useEffect(() => {
    const t = setTimeout(() => setGoogle("connected"), 2800);
    return () => clearTimeout(t);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "var(--flb-bg)"
    }
  }, /*#__PURE__*/React.createElement(window.AccountBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "10px 44px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      margin: "8px 0 26px"
    }
  }, /*#__PURE__*/React.createElement(window.Stepper, {
    step: 1
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: 28,
      letterSpacing: "-0.02em",
      color: "var(--flb-ink)",
      margin: 0
    }
  }, "Connect your ad accounts"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      color: "var(--flb-ink-3)",
      lineHeight: 1.55,
      margin: "10px 0 22px",
      maxWidth: 560
    }
  }, "We'll pull ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--flb-ink-2)"
    }
  }, "30 days"), " of campaign data through read-only OAuth. Connect at least one to generate your free audit."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--flb-surface)",
      border: "1px solid var(--flb-line)",
      borderRadius: 16,
      boxShadow: "var(--flb-shadow-sm)",
      marginBottom: 14,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: "#fcfcfc",
      border: "1px solid var(--flb-line)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Brand.Meta, {
    size: 26
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: 15,
      color: "var(--flb-ink)"
    }
  }, "Meta Ads"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      fontSize: 12,
      fontWeight: 500,
      color: "#1f9d57",
      background: "rgba(31,157,87,0.1)",
      padding: "3px 9px",
      borderRadius: 9999
    }
  }, /*#__PURE__*/React.createElement(I.Check, {
    size: 13
  }), "Connected")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--flb-ink-3)",
      marginTop: 2
    }
  }, "Facebook & Instagram")), /*#__PURE__*/React.createElement("button", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 36,
      padding: "0 14px",
      borderRadius: 9,
      border: "1px solid var(--flb-line)",
      background: "var(--flb-surface)",
      color: "var(--flb-ink-2)",
      fontSize: 13,
      fontWeight: 500,
      cursor: "pointer",
      fontFamily: "var(--flb-font-body)"
    }
  }, "Manage ", /*#__PURE__*/React.createElement(I.Chevron, {
    size: 14,
    style: {
      transform: "rotate(180deg)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      padding: "14px 18px",
      borderTop: "1px solid var(--flb-line)",
      background: "var(--flb-surface-2)"
    }
  }, [["ACCOUNT", "Luminary Skincare · Ads Manager"], ["ID", "act_4421008"], ["CAMPAIGNS", "42"], ["AD SETS", "168"], ["SPEND · 30D", "$14,820"]].map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      flex: i === 0 ? 2.2 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9.5,
      fontWeight: 500,
      letterSpacing: "0.06em",
      color: "var(--flb-ink-4)"
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: i === 4 ? 700 : 500,
      color: i === 4 ? "var(--flb-violet)" : "var(--flb-ink-2)",
      marginTop: 4
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--flb-surface)",
      border: "1px solid var(--flb-line)",
      borderRadius: 16,
      boxShadow: "var(--flb-shadow-sm)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: "#fcfcfc",
      border: "1px solid var(--flb-line)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Brand.GoogleAds, {
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: 15,
      color: "var(--flb-ink)"
    }
  }, "Google Ads"), google === "connected" ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      fontSize: 12,
      fontWeight: 500,
      color: "#1f9d57",
      background: "rgba(31,157,87,0.1)",
      padding: "3px 9px",
      borderRadius: 9999
    }
  }, /*#__PURE__*/React.createElement(I.Check, {
    size: 13
  }), "Connected") : /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      fontSize: 12,
      fontWeight: 500,
      color: "#2563eb",
      background: "rgba(37,99,235,0.1)",
      padding: "3px 9px",
      borderRadius: 9999
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 9999,
      border: "1.5px solid #2563eb",
      borderTopColor: "transparent",
      display: "inline-block",
      animation: "flb-spin .7s linear infinite"
    }
  }), "OAuth in progress")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--flb-ink-3)",
      marginTop: 2
    }
  }, "Search, Shopping & YouTube")), google === "connected" ? /*#__PURE__*/React.createElement("button", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 36,
      padding: "0 14px",
      borderRadius: 9,
      border: "1px solid var(--flb-line)",
      background: "var(--flb-surface)",
      color: "var(--flb-ink-2)",
      fontSize: 13,
      fontWeight: 500,
      cursor: "pointer",
      fontFamily: "var(--flb-font-body)"
    }
  }, "Manage ", /*#__PURE__*/React.createElement(I.Chevron, {
    size: 14,
    style: {
      transform: "rotate(180deg)"
    }
  })) : /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      height: 36,
      padding: "0 16px",
      borderRadius: 9,
      background: "var(--flb-surface-2)",
      color: "var(--flb-ink-3)",
      fontSize: 13,
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 13,
      height: 13,
      borderRadius: 9999,
      border: "2px solid var(--flb-ink-4)",
      borderTopColor: "transparent",
      display: "inline-block",
      animation: "flb-spin .7s linear infinite"
    }
  }), "Connecting\u2026")), google !== "connected" && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "13px 18px",
      borderTop: "1px solid var(--flb-line)",
      fontSize: 12.5,
      color: "var(--flb-ink-3)"
    }
  }, "+ Sign in with Google in the new tab to authorize. We're listening for the callback\u2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 7,
      marginTop: 18,
      fontSize: 12.5,
      color: "var(--flb-ink-3)"
    }
  }, /*#__PURE__*/React.createElement(I.Lock, {
    size: 14
  }), " Read-only access. We never post, modify, or spend without your approval. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--flb-violet)",
      fontWeight: 500,
      cursor: "pointer"
    }
  }, "Permissions \u2192")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 44px",
      borderTop: "1px solid var(--flb-line)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      fontSize: 13,
      fontWeight: 500,
      color: "#1f9d57",
      background: "rgba(31,157,87,0.1)",
      padding: "8px 14px",
      borderRadius: 9999
    }
  }, /*#__PURE__*/React.createElement(I.Check, {
    size: 15
  }), "Full audit enabled \u2014 Meta + Google"), /*#__PURE__*/React.createElement(window.CTA, {
    onClick: onContinue
  }, "Continue")));
}
window.ConnectScreen = ConnectScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/flable-onboarding/Connect.jsx", error: String((e && e.message) || e) }); }

// ui_kits/flable-onboarding/OrionMark.jsx
try { (() => {
/* Orion — the flable.ai agent mark. A faceted purple cube/gem, optionally set in
   a circular emblem with concentric rings (light or dark surfaces). */

function OrionCube({
  size = 40,
  style = {}
}) {
  const gid = React.useId();
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 256 256",
    fill: "none",
    style: {
      display: "block",
      ...style
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: gid + "t",
    x1: "48",
    y1: "32",
    x2: "208",
    y2: "120",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C4B5FF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#A28BF7"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: gid + "l",
    x1: "48",
    y1: "76",
    x2: "128",
    y2: "220",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#8B63E6"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#6E45CC"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: gid + "r",
    x1: "128",
    y1: "120",
    x2: "208",
    y2: "220",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#5E34B5"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#4A2596"
  }))), /*#__PURE__*/React.createElement("g", {
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M48 78 L128 122 L128 218 L48 174 Z",
    fill: `url(#${gid}l)`,
    stroke: "#6E45CC",
    strokeWidth: "6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M128 122 L208 78 L208 174 L128 218 Z",
    fill: `url(#${gid}r)`,
    stroke: "#4A2596",
    strokeWidth: "6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M128 36 L208 78 L128 122 L48 78 Z",
    fill: `url(#${gid}t)`,
    stroke: "#B7A6FB",
    strokeWidth: "6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M128 92 L138 112 L128 132 L118 112 Z",
    fill: "#EDE7FF",
    opacity: "0.9"
  })));
}

/* Circular emblem. tone: "light" (white disc, for lavender panels) | "dark"
   (glowing disc on dark violet). rings: draw concentric halo rings. glow: soft aura. */
function OrionEmblem({
  size = 88,
  cube,
  tone = "light",
  rings = false,
  glow = false,
  floatDots = false,
  style = {}
}) {
  const cubeSize = cube || Math.round(size * 0.46);
  const ring = (scale, opacity) => /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "50%",
      top: "50%",
      width: size * scale,
      height: size * scale,
      transform: "translate(-50%,-50%)",
      borderRadius: "50%",
      border: `1px solid ${tone === "dark" ? "rgba(160,139,255," + opacity + ")" : "rgba(127,86,217," + opacity * 0.6 + ")"}`
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      width: size,
      height: size,
      alignItems: "center",
      justifyContent: "center",
      ...style
    }
  }, rings && /*#__PURE__*/React.createElement(React.Fragment, null, ring(2.05, 0.18), ring(1.55, 0.28)), glow && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "50%",
      top: "50%",
      width: size * 1.35,
      height: size * 1.35,
      transform: "translate(-50%,-50%)",
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(127,86,217,0.55) 0%, rgba(127,86,217,0) 70%)",
      filter: "blur(4px)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: size,
      height: size,
      borderRadius: "50%",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: tone === "dark" ? "radial-gradient(120% 120% at 30% 20%, rgba(127,86,217,0.45), rgba(40,22,80,0.7))" : "#fcfcfc",
      boxShadow: tone === "dark" ? "inset 0 0 0 1px rgba(160,139,255,0.4), 0 8px 30px rgba(127,86,217,0.45)" : "0 10px 30px rgba(127,86,217,0.18), inset 0 0 0 1px rgba(127,86,217,0.08)"
    }
  }, /*#__PURE__*/React.createElement(OrionCube, {
    size: cubeSize
  })), floatDots && [["-6%", "18%", 7], ["104%", "30%", 6], ["12%", "100%", 5], ["88%", "96%", 5]].map(([l, t, d], i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: "absolute",
      left: l,
      top: t,
      width: d,
      height: d,
      borderRadius: "50%",
      background: i % 2 ? "#A08BFF" : "#C4B5FF",
      opacity: 0.7
    }
  })));
}
window.OrionCube = OrionCube;
window.OrionEmblem = OrionEmblem;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/flable-onboarding/OrionMark.jsx", error: String((e && e.message) || e) }); }

// ui_kits/flable-onboarding/Panels.jsx
try { (() => {
/* Left-hand panels shared across onboarding screens. */

// ── Light lavender marketing panel (screens: sign-up, verify) ──
function MarketingPanel() {
  const I = window.Icons;
  const chip = (icon, label) => /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "7px 13px",
      borderRadius: 9999,
      background: "#fcfcfc",
      boxShadow: "0 2px 8px rgba(80,50,160,0.08)",
      fontSize: 12.5,
      fontWeight: 500,
      color: "#2d2d31"
    }
  }, icon, label);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "100%",
      overflow: "hidden",
      background: "linear-gradient(150deg,#ECE7FB 0%,#F4F0FE 45%,#EDE8FC 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 56px",
      fontFamily: "var(--flb-font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "6%",
      right: "-8%",
      width: 360,
      height: 360,
      borderRadius: "50%",
      background: "radial-gradient(circle,rgba(127,86,217,0.18),rgba(127,86,217,0) 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      maxWidth: 380,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(window.OrionEmblem, {
    size: 86,
    rings: true,
    tone: "light"
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: 30,
      lineHeight: 1.18,
      letterSpacing: "-0.02em",
      margin: "26px 0 0",
      color: "#19191c"
    }
  }, "Your entire marketing stack.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--flb-violet)"
    }
  }, "One intelligent layer.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: "#6a6a6f",
      margin: "16px 0 0",
      maxWidth: 320
    }
  }, "Meta, Google, Amazon and Shopify \u2014 unified, audited and optimized by Orion 24/7."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 22
    }
  }, chip(/*#__PURE__*/React.createElement(I.TrendUp, {
    size: 14
  }), "2.1x ROAS"), chip(/*#__PURE__*/React.createElement(I.Bolt, {
    size: 14
  }), "Audit ready"), chip(/*#__PURE__*/React.createElement(I.Grid, {
    size: 13
  }), "4 channels")), /*#__PURE__*/React.createElement(PreviewCard, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, ["var(--flb-violet)", "#9B6BE8", "#B98BF0", "#D5BEF8"].map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 22,
      height: 22,
      borderRadius: "50%",
      background: c,
      border: "2px solid #F4F0FE",
      marginLeft: i ? -8 : 0
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: "#6a6a6f"
    }
  }, "Glossier, Olipop, Vuori \xB7 4.9 \u2605 on G2"))));
}
function PreviewCard() {
  const metric = (label, value, delta, up) => /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9.5,
      fontWeight: 500,
      letterSpacing: "0.06em",
      color: "#9a9aa0",
      textTransform: "uppercase"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 5,
      marginTop: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: 19,
      color: "#19191c"
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      color: up ? "#1f9d57" : "#e0476b"
    }
  }, delta)));
  const tag = t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontSize: 10.5,
      fontWeight: 500,
      color: "#52525b",
      padding: "3px 9px",
      borderRadius: 9999,
      border: "1px solid #e9e7f2",
      background: "#fcfcfc"
    }
  }, t);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      marginTop: 22,
      background: "#fcfcfc",
      borderRadius: 16,
      boxShadow: "0 16px 40px rgba(80,50,160,0.14)",
      padding: 16,
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(window.OrionCube, {
    size: 18
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 500,
      color: "#19191c",
      lineHeight: 1.1
    }
  }, "Orion"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 500,
      color: "#1f9d57"
    }
  }, "Audit ready"))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: "#9a9aa0",
      display: "inline-flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 9999,
      background: "#1f9d57"
    }
  }), "Last 30 days \xB7 all channels")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 16
    }
  }, metric("Blended ROAS", "2.1x", "+0.3", true), metric("Ad Spend", "$24,300", "-12%", false), metric("Revenue", "$51k", "+8%", true)), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 300 60",
    width: "100%",
    height: "46",
    preserveAspectRatio: "none",
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "pvArea",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "rgba(127,86,217,0.25)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "rgba(127,86,217,0)"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M0 48 C40 46 60 40 100 36 C150 31 180 20 220 16 C255 13 280 9 300 7 L300 60 L0 60 Z",
    fill: "url(#pvArea)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 48 C40 46 60 40 100 36 C150 31 180 20 220 16 C255 13 280 9 300 7",
    fill: "none",
    stroke: "var(--flb-violet)",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 7,
      marginTop: 12
    }
  }, ["Meta", "Google", "Amazon", "Shopify"].map(tag)));
}

// ── Dark violet Orion panel (screens: connect, confirm, referral) ──
function OrionDarkPanel({
  title,
  subtitle,
  steps
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "100%",
      overflow: "hidden",
      background: "radial-gradient(120% 90% at 28% 26%, #2a1a5e 0%, #1a0f3c 45%, #0f0826 100%)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "48px 56px",
      fontFamily: "var(--flb-font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement(window.OrionEmblem, {
    size: 86,
    tone: "dark",
    glow: true,
    rings: true
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: 34,
      letterSpacing: "-0.02em",
      color: "#fafafa",
      margin: "26px 0 0"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.65,
      color: "rgba(255,255,255,0.62)",
      margin: "14px 0 0",
      maxWidth: 320
    }
  }, subtitle), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22,
      marginTop: 40
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 14,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 30,
      height: 30,
      borderRadius: 9999,
      background: "rgba(160,139,255,0.16)",
      border: "1px solid rgba(160,139,255,0.4)",
      color: "#c4b5ff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--flb-font-mono)",
      fontSize: 12,
      fontWeight: 500
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 500,
      color: "#fafafa"
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,0.5)",
      marginTop: 2
    }
  }, s.desc)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 56,
      bottom: 30,
      fontSize: 11.5,
      color: "rgba(255,255,255,0.4)"
    }
  }, "SOC 2 Type II  \xB7  Read-only OAuth  \xB7  Trusted by 2,400+ DTC brands"));
}
window.MarketingPanel = MarketingPanel;
window.OrionDarkPanel = OrionDarkPanel;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/flable-onboarding/Panels.jsx", error: String((e && e.message) || e) }); }

// ui_kits/flable-onboarding/Pricing.jsx
try { (() => {
/* Screen 6: Add credits (PAYG pricing). Full-width white page. */
function PricingScreen({
  onBack,
  onAddCredits
}) {
  const {
    BrandLogo
  } = window.FlableAiDesignSystem_c17dff;
  const I = window.Icons;
  const [amt, setAmt] = React.useState(6);
  const credits = amt * 200;
  const modeCard = (icon, name, tagline, mult, fill, desc, best) => /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flex: 1,
      background: "var(--flb-surface)",
      border: `1px solid ${best ? "#E9348B" : "var(--flb-line)"}`,
      borderRadius: 16,
      padding: 18,
      boxShadow: best ? "0 8px 28px rgba(233,52,139,0.14)" : "var(--flb-shadow-sm)"
    }
  }, best && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -11,
      left: "50%",
      transform: "translateX(-50%)",
      background: "linear-gradient(135deg,#E9348B,#B7179B)",
      color: "#fcfcfc",
      fontSize: 9.5,
      fontWeight: 500,
      letterSpacing: "0.06em",
      padding: "4px 12px",
      borderRadius: 9999
    }
  }, "MOST VALUABLE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 9,
      background: "rgba(100,60,193,0.1)",
      color: "var(--flb-violet)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: 15,
      color: "var(--flb-ink)"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--flb-violet)",
      fontWeight: 500
    }
  }, tagline))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 3
    }
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 12,
      height: 5,
      borderRadius: 9999,
      background: i < fill ? "var(--flb-violet)" : "var(--flb-surface-3)"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      fontWeight: 500,
      color: "var(--flb-ink-2)"
    }
  }, mult, "\xD7 credit"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: "var(--flb-ink-3)",
      lineHeight: 1.5,
      margin: "12px 0 0"
    }
  }, desc));
  const amtChip = v => /*#__PURE__*/React.createElement("button", {
    key: v,
    onClick: () => setAmt(v),
    style: {
      flex: 1,
      height: 40,
      borderRadius: 10,
      cursor: "pointer",
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: 14,
      border: amt === v ? "none" : "1px solid var(--flb-line)",
      color: amt === v ? "#fcfcfc" : "var(--flb-ink-2)",
      background: amt === v ? "linear-gradient(135deg,var(--flb-purple),var(--flb-violet))" : "var(--flb-surface)"
    }
  }, "$", v);
  const insightRow = (label, value, sub, saved) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: "0.06em",
      color: "var(--flb-ink-4)",
      textTransform: "uppercase"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: 26,
      color: "var(--flb-ink)",
      marginTop: 6
    }
  }, value, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: "var(--flb-ink-3)"
    }
  }, sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: "var(--flb-violet)",
      marginTop: 4
    }
  }, "\u25CF ", saved));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      overflowY: "auto",
      background: "var(--flb-bg)",
      fontFamily: "var(--flb-font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 36px",
      borderBottom: "1px solid var(--flb-line)"
    }
  }, /*#__PURE__*/React.createElement(BrandLogo, {
    size: 24,
    color: "#151517"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      fontSize: 13,
      color: "var(--flb-ink-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: "50%",
      background: "linear-gradient(135deg,var(--flb-purple),var(--flb-colors-primary-600))",
      color: "#fcfcfc",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 12,
      fontWeight: 500
    }
  }, "S"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--flb-ink-2)"
    }
  }, "sarah@luminaryskincare.com"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--flb-violet)",
      fontWeight: 500,
      cursor: "pointer"
    }
  }, "Sign out"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "28px 36px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: 28,
      letterSpacing: "-0.02em",
      color: "var(--flb-ink)",
      margin: 0
    }
  }, "Add credits to ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--flb-violet)"
    }
  }, "get started")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--flb-violet)",
      fontWeight: 500,
      margin: "8px 0 0"
    }
  }, "Pay only for what you use \xB7 Credits never expire")), /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      border: "none",
      background: "transparent",
      color: "var(--flb-ink-3)",
      fontSize: 13.5,
      cursor: "pointer",
      fontFamily: "var(--flb-font-body)"
    }
  }, /*#__PURE__*/React.createElement(I.ArrowLeft, {
    size: 15
  }), "Back")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 500,
      letterSpacing: "0.08em",
      color: "var(--flb-ink-4)",
      margin: "26px 0 12px"
    }
  }, "AGENT MODE PRICING"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14
    }
  }, modeCard(/*#__PURE__*/React.createElement(I.Bolt, {
    size: 17
  }), "Fast", "Reflex · read-only", 1, 1, "Instant answers — spots spikes, pulls numbers fast."), modeCard(/*#__PURE__*/React.createElement(I.Star, {
    size: 16
  }), "Standard", "Judgment · full access", 2, 2, "Pauses bleeders, shifts budgets, executes with judgment."), modeCard(/*#__PURE__*/React.createElement(I.Star, {
    size: 16
  }), "Pro", "Strategy · deep reasoning", 3, 3, "Structures launches, writes briefs, runs full audits.", true)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.1fr 1fr",
      gap: 16,
      marginTop: 22,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--flb-surface-2)",
      border: "1px solid var(--flb-line)",
      borderRadius: 16,
      padding: 20,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 500,
      letterSpacing: "0.06em",
      color: "#E0A93B"
    }
  }, "\uD83C\uDFC6 D2C INSIGHT"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, insightRow("Where brands start", "$6", "min · 1,200 cr", "$5,000+ saved")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--flb-ink-3)",
      marginTop: 4
    }
  }, "20% of D2C brands here")), /*#__PURE__*/React.createElement("div", null, insightRow("Sweet spot today", "$20", "avg · 4,000 cr", "$12,000+ saved"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--flb-ink-3)",
      marginTop: 4
    }
  }, "minimum savings now"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--flb-surface)",
      border: "1px solid var(--flb-line)",
      borderRadius: 16,
      padding: 22,
      boxShadow: "var(--flb-shadow-md)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontSize: 10.5,
      fontWeight: 500,
      letterSpacing: "0.06em",
      color: "var(--flb-ink-3)"
    }
  }, "CURRENT PLAN ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: "#E0A93B",
      color: "#19191c",
      padding: "2px 8px",
      borderRadius: 9999,
      fontSize: 10
    }
  }, "PAYG")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: "var(--flb-ink-3)"
    }
  }, "$1 = 200 credits")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginTop: 16,
      height: 56,
      padding: "0 16px",
      border: "1px solid var(--flb-line)",
      borderRadius: 12,
      background: "var(--flb-surface-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      color: "var(--flb-ink-3)"
    }
  }, "$"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: 26,
      color: "var(--flb-ink)"
    }
  }, amt)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: 4,
      background: "var(--flb-surface-3)",
      borderRadius: 9999,
      margin: "12px 0",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${Math.min(100, amt / 100 * 100)}%`,
      height: "100%",
      background: "linear-gradient(90deg,#8257E0,#6D40C8)",
      transition: "width .25s var(--flb-ease)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, [6, 20, 50, 100].map(amtChip)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "26px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--flb-ink-3)"
    }
  }, "You'll get"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: 34,
      color: "var(--flb-ink)",
      marginTop: 4
    }
  }, credits.toLocaleString(), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: "var(--flb-violet)"
    }
  }, "credits"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      fontSize: 11.5,
      color: "var(--flb-ink-4)",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(I.Lock, {
    size: 13
  }), "Secure via Razorpay"), /*#__PURE__*/React.createElement(window.CTA, {
    full: true,
    arrow: false,
    icon: /*#__PURE__*/React.createElement(I.Card, {
      size: 17
    }),
    onClick: onAddCredits
  }, "Add Credits \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(180deg,rgba(100,60,193,0.06),rgba(100,60,193,0.02))",
      border: "1px solid rgba(100,60,193,0.2)",
      borderRadius: 16,
      padding: 20,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 500,
      letterSpacing: "0.06em",
      color: "var(--flb-violet)"
    }
  }, "+ ENTERPRISE"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: 18,
      color: "var(--flb-ink)",
      margin: "14px 0 6px"
    }
  }, "Get Unlimited Credits"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: "var(--flb-ink-3)",
      margin: "0 0 16px"
    }
  }, "Everything included. No per-query caps."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 11,
      flex: 1
    }
  }, ["360 Dashboard", "Shopify · Meta · Google Ads", "GA4 + GSC · Attribution", "Product & Creative Insights", "Campaign Management", "Dedicated Support", "Custom Rate Limits · SLA"].map(f => /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      fontSize: 13,
      fontWeight: 500,
      color: "var(--flb-ink-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 9999,
      background: "rgba(100,60,193,0.12)",
      color: "var(--flb-violet)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(I.Check, {
    size: 12
  })), f))), /*#__PURE__*/React.createElement("button", {
    style: {
      width: "100%",
      height: 48,
      marginTop: 16,
      borderRadius: 12,
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: 14.5,
      color: "#fcfcfc",
      background: "linear-gradient(135deg,var(--flb-purple),var(--flb-violet))"
    }
  }, "Talk to Sales \u2192")))));
}
window.PricingScreen = PricingScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/flable-onboarding/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/flable-onboarding/SettingUp.jsx
try { (() => {
/* Screen 7: Setting up your account — provisioning / audit progress. */
function SettingUpScreen({
  onDone
}) {
  const I = window.Icons;
  const [stage, setStage] = React.useState(1); // 0 done acct, 1 pulling, 2 spinning
  const [pct, setPct] = React.useState(58);
  React.useEffect(() => {
    const t1 = setTimeout(() => {
      setStage(2);
      setPct(82);
    }, 2600);
    const t2 = setTimeout(() => {
      setPct(100);
    }, 4600);
    const t3 = setTimeout(() => onDone && onDone(), 5600);
    const tick = setInterval(() => setPct(p => p < 99 ? p + 1 : p), 700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearInterval(tick);
    };
  }, []);
  const steps = [{
    title: "Ad accounts connected",
    desc: "Meta · Google",
    state: "done"
  }, {
    title: "Pulling campaign data",
    desc: "247 campaigns · 30 days",
    state: stage >= 2 ? "done" : "active"
  }, {
    title: "Spinning up Orion",
    desc: "Personalizing recommendations",
    state: stage >= 2 ? "active" : "todo"
  }];
  const remaining = Math.max(0, Math.round((100 - pct) * 0.5));
  const dot = state => {
    if (state === "done") return /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: 9999,
        background: "#1f9d57",
        color: "#fcfcfc",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(I.Check, {
      size: 14
    }));
    if (state === "active") return /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: 9999,
        background: "rgba(100,60,193,0.15)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: 9999,
        background: "var(--flb-violet)",
        boxShadow: "0 0 0 3px rgba(100,60,193,0.2)"
      }
    }));
    return /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: 9999,
        border: "1.5px solid var(--flb-line)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: 9999,
        background: "var(--flb-ink-4)"
      }
    }));
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(150deg,#ECE7FB 0%,#F4F0FE 50%,#EDE8FC 100%)",
      fontFamily: "var(--flb-font-body)",
      position: "relative",
      overflow: "hidden"
    }
  }, [["12%", "30%"], ["86%", "22%"], ["8%", "78%"], ["90%", "70%"]].map(([l, t], i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: "absolute",
      left: l,
      top: t,
      width: 5,
      height: 5,
      borderRadius: 9999,
      background: "#B98BF0",
      opacity: 0.5
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 440,
      background: "#fcfcfc",
      borderRadius: 22,
      boxShadow: "0 30px 70px rgba(80,50,160,0.18)",
      padding: "36px 34px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(window.OrionEmblem, {
    size: 96,
    glow: true,
    floatDots: true,
    tone: "light"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      marginTop: 22,
      padding: "6px 14px 6px 8px",
      borderRadius: 9999,
      background: "var(--flb-surface-2)",
      border: "1px solid var(--flb-line)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: "50%",
      background: "linear-gradient(135deg,#F65BA0,#E0407E)",
      color: "#fcfcfc",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 11,
      fontWeight: 500
    }
  }, "L"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: "var(--flb-ink)"
    }
  }, "Luminary Skincare Co.")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: 24,
      letterSpacing: "-0.02em",
      color: "#19191c",
      margin: "16px 0 0"
    }
  }, "Setting up your account"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "#6a6a6f",
      lineHeight: 1.55,
      margin: "8px auto 0",
      maxWidth: 300
    }
  }, "Orion is auditing 30 days of campaigns. Hang tight \u2014 this usually takes about 90 seconds."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      textAlign: "left",
      margin: "28px 0 22px"
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 13,
      opacity: s.state === "todo" ? 0.5 : 1
    }
  }, dot(s.state), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: "var(--flb-ink)"
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--flb-ink-3)",
      marginTop: 1
    }
  }, s.desc))))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: 6,
      background: "var(--flb-surface-3)",
      borderRadius: 9999,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: "100%",
      background: "linear-gradient(90deg,#8257E0,#6D40C8)",
      borderRadius: 9999,
      transition: "width .6s var(--flb-ease-out)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 10,
      fontSize: 12,
      color: "var(--flb-ink-3)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Step ", stage >= 2 ? 3 : 2, " of 3"), /*#__PURE__*/React.createElement("span", null, "~", remaining, " seconds remaining"))));
}
window.SettingUpScreen = SettingUpScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/flable-onboarding/SettingUp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/flable-onboarding/brand-icons.jsx
try { (() => {
/* Provider + channel marks for the onboarding flow, plus a few extra UI glyphs.
   Third-party logos are simplified, recognizable renderings — swap official
   marks for production. Exposed on window.Brand and merged into window.Icons. */

const Brand = {
  Google: ({
    size = 18
  }) => /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 48 48"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#4285F4",
    d: "M45 24c0-1.6-.1-3.1-.4-4.6H24v9.3h11.8c-.5 2.7-2 5-4.4 6.6v5.5h7.1C42.7 36.7 45 30.9 45 24z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#34A853",
    d: "M24 46c5.9 0 10.9-2 14.5-5.3l-7.1-5.5c-2 1.3-4.5 2.1-7.4 2.1-5.7 0-10.5-3.8-12.2-9H4.5v5.6C8.1 41.1 15.5 46 24 46z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FBBC05",
    d: "M11.8 28.3c-.4-1.3-.7-2.7-.7-4.3s.3-3 .7-4.3v-5.6H4.5C2.9 17.1 2 20.4 2 24s.9 6.9 2.5 9.9l7.3-5.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#EA4335",
    d: "M24 10.7c3.2 0 6.1 1.1 8.4 3.3l6.3-6.3C34.9 4.1 29.9 2 24 2 15.5 2 8.1 6.9 4.5 14.1l7.3 5.6c1.7-5.2 6.5-9 12.2-9z"
  })),
  Microsoft: ({
    size = 18
  }) => /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 23 23"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#F25022",
    d: "M1 1h10v10H1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#7FBA00",
    d: "M12 1h10v10H12z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#00A4EF",
    d: "M1 12h10v10H1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FFB900",
    d: "M12 12h10v10H12z"
  })),
  Meta: ({
    size = 26
  }) => /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 36 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "metaG",
    x1: "0",
    y1: "0",
    x2: "36",
    y2: "24",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#0064E1"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#19AFFF"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M6 4C2.7 4 1 7.5 1 12s1.7 8 5 8c2.3 0 3.8-1.9 5.6-5 .9-1.6 1.8-3.4 2.7-5.1 1.4-2.6 2.6-4.9 4.7-4.9 2.4 0 3.7 2.8 3.7 7s-1.3 7-3.7 7c-1.3 0-2.3-1-3.6-3.2",
    stroke: "url(#metaG)",
    strokeWidth: "3.4",
    strokeLinecap: "round",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 7.8C16.2 4.7 14.5 4 12.5 4",
    stroke: "url(#metaG)",
    strokeWidth: "3.4",
    strokeLinecap: "round"
  })),
  GoogleAds: ({
    size = 22
  }) => /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.5 19.5 10 8.2l5.6 3.2L9.1 22.7z",
    fill: "#FBBC04"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 2.5 20.5 13.9a3.3 3.3 0 0 1-5.7 3.3L8.3 5.8A3.3 3.3 0 0 1 14 2.5Z",
    fill: "#4285F4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6.2",
    cy: "19.8",
    r: "3.3",
    fill: "#34A853"
  })),
  Shopify: ({
    size = 22
  }) => /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15.3 4.2c-.1-.1-.3-.1-.4-.1l-1 .3c-.4-1.1-1-1.8-1.9-1.8h-.2c-.4-.5-.9-.7-1.4-.7-1.9.1-2.9 2.5-3.2 3.7l-1.4.4c-.4.1-.5.2-.5.6L3.5 19.6 14 21.5l4.6-1C18.6 20.5 15.4 4.4 15.3 4.2ZM11.9 4.9l-1.6.5c0-.9.3-1.8.8-2.3.3.3.5.9.8 1.8Z",
    fill: "#95BF47"
  }))
};

// extra UI glyphs that build on the shared Icon wrapper (window.FlbIcon)
function ready() {
  const Icon = window.FlbIcon;
  if (!Icon || !window.Icons) {
    setTimeout(ready, 0);
    return;
  }
  Object.assign(window.Icons, {
    Eye: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
      d: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    })),
    EyeOff: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
      d: "M3 3l18 18M10.6 10.6A3 3 0 0014 14M9.9 5.1A9.6 9.6 0 0112 5c6.5 0 10 7 10 7a16 16 0 01-3.2 3.9M6.1 6.1A16 16 0 002 12s3.5 7 10 7a9.6 9.6 0 003.1-.5"
    })),
    Lock: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "11",
      width: "14",
      height: "9",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 11V8a4 4 0 018 0v3"
    })),
    Tag: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
      d: "M3 11.5V5a2 2 0 012-2h6.5L21 12.5 12.5 21 3 11.5z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "7.5",
      cy: "7.5",
      r: "1.3",
      fill: "currentColor"
    })),
    ArrowRight: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
      d: "M4 12h16M14 6l6 6-6 6"
    })),
    ArrowLeft: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
      d: "M20 12H4M10 6l-6 6 6 6"
    })),
    Card: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
      x: "2.5",
      y: "5",
      width: "19",
      height: "14",
      rx: "2.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M2.5 9.5h19"
    })),
    Star: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
      d: "M12 3l2.6 5.6 6.1.7-4.5 4.1 1.2 6L12 16.9 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z"
    })),
    Shield: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
      d: "M12 3l7 3v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 12l2 2 4-4"
    })),
    Chevron: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
      d: "M6 9l6 6 6-6"
    }))
  });
}
ready();
window.Brand = Brand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/flable-onboarding/brand-icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/flable-onboarding/shared.jsx
try { (() => {
/* Shared onboarding UI bits: the vivid violet CTA, the top account bar,
   and the two-step progress stepper. */

function CTA({
  children,
  onClick,
  full = false,
  size = "lg",
  arrow = true,
  icon = null,
  disabled = false,
  style = {}
}) {
  const [h, setH] = React.useState(false);
  const pad = size === "lg" ? "0 26px" : "0 18px";
  const ht = size === "lg" ? 52 : 44;
  return /*#__PURE__*/React.createElement("button", {
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 9,
      height: ht,
      padding: pad,
      width: full ? "100%" : undefined,
      border: "none",
      borderRadius: 12,
      cursor: disabled ? "not-allowed" : "pointer",
      fontFamily: "var(--flb-font-display)",
      fontWeight: 500,
      fontSize: size === "lg" ? 15.5 : 14,
      color: "#fcfcfc",
      background: disabled ? "#cfc4ee" : "linear-gradient(135deg,var(--flb-purple) 0%,var(--flb-violet) 100%)",
      boxShadow: disabled ? "none" : h ? "0 10px 30px rgba(100,60,193,0.45)" : "0 6px 18px rgba(100,60,193,0.3)",
      transform: h && !disabled ? "translateY(-1px)" : "none",
      transition: "transform .18s var(--flb-ease), box-shadow .18s var(--flb-ease)",
      ...style
    }
  }, icon, children, arrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      lineHeight: 1,
      marginLeft: 1
    }
  }, "\u2192"));
}
function AccountBar({
  email = "sarah@luminaryskincare.com",
  dark = false
}) {
  const {
    BrandLogo
  } = window.FlableAiDesignSystem_c17dff;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "22px 30px 0"
    }
  }, /*#__PURE__*/React.createElement(BrandLogo, {
    size: 24,
    color: dark ? "#fcfcfc" : "#151517"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      fontSize: 13,
      color: "var(--flb-ink-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: "50%",
      background: "linear-gradient(135deg,var(--flb-purple),var(--flb-colors-primary-600))",
      color: "#fcfcfc",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 12,
      fontWeight: 500
    }
  }, "S"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--flb-ink-2)"
    }
  }, email), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--flb-violet)",
      fontWeight: 500,
      cursor: "pointer"
    }
  }, "Sign out")));
}
function Stepper({
  step
}) {
  // step 1 = connect active; step 2 = confirm active (connect done)
  const node = (n, label, state) => {
    const active = state === "active",
      done = state === "done";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 9
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: "50%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 12,
        fontWeight: 500,
        fontFamily: "var(--flb-font-mono)",
        background: active ? "var(--flb-violet)" : done ? "rgba(100,60,193,0.12)" : "var(--flb-surface-3)",
        color: active ? "#fcfcfc" : done ? "var(--flb-violet)" : "var(--flb-ink-3)",
        border: done ? "1px solid rgba(100,60,193,0.4)" : "none"
      }
    }, done ? "✓" : n), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        fontWeight: active || done ? 600 : 500,
        color: active ? "var(--flb-violet)" : done ? "var(--flb-ink-2)" : "var(--flb-ink-3)"
      }
    }, label));
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 14
    }
  }, node(1, "Connect Accounts", step === 1 ? "active" : "done"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 1,
      background: "var(--flb-line)"
    }
  }), node(2, "Confirm Details", step === 2 ? "active" : "todo"));
}
window.CTA = CTA;
window.AccountBar = AccountBar;
window.Stepper = Stepper;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/flable-onboarding/shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.FlableMark = __ds_scope.FlableMark;

__ds_ns.BrandLogo = __ds_scope.BrandLogo;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.NavItem = __ds_scope.NavItem;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
