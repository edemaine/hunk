export const HUNK_DIFF_THEME_NAMES = [
  "graphite",
  "midnight",
  "paper",
  "ember",
  "catppuccin-latte",
  "catppuccin-frappe",
  "catppuccin-macchiato",
  "catppuccin-mocha",
  "zenburn",
  "high-contrast-dark",
  "high-contrast-light",
] as const;

export type HunkDiffThemeName = (typeof HUNK_DIFF_THEME_NAMES)[number];
