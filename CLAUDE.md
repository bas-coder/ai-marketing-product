# Flable AI Design — project rules

- **Never use pure white (`#ffffff` / `#fff` / `rgb(255,255,255)`) anywhere in the design.** Use `#fcfcfc` (`rgb(252,252,252)`) instead. This applies to new work and to the design-system files. Translucent `rgba(255,255,255,α)` overlays are fine (they are not solid white surfaces).
- **Loaders must be minimal.** Any loading/progress indicator should be a thin (~2px) hairline track with a subtle muted fill (e.g. `var(--flb-line)` track, `var(--flb-ink-3)` fill) — no thick bars, no bright gradient fills, no large spinners.
