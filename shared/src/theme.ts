export const colors = {
  primary: {
    DEFAULT: "#4E3D42",
    foreground: "#FFFFFF",
  },
  muted: {
    DEFAULT: "#F3F1F2",
    foreground: "#6B5E63",
  },
  background: "#FFFFFF",
  foreground: "#1A1A1A",
  border: "#E5E2E3",
  input: "#E5E2E3",
  ring: "#4E3D42",
  accent: {
    DEFAULT: "#F3F1F2",
    foreground: "#4E3D42",
  },
  card: {
    DEFAULT: "#FFFFFF",
    foreground: "#1A1A1A",
  },
} as const;

export const spacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
  "3xl": "4rem",
} as const;

export const typography = {
  fontFamily: {
    sans: "var(--font-inter), system-ui, sans-serif",
    heading: "var(--font-inter), system-ui, sans-serif",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
  },
  fontWeight: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
  lineHeight: {
    tight: "1.25",
    normal: "1.5",
    relaxed: "1.75",
  },
} as const;

export const borderRadius = {
  none: "0",
  sm: "0.25rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  full: "9999px",
} as const;

export const shadows = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
} as const;

export const theme = {
  colors,
  spacing,
  typography,
  borderRadius,
  shadows,
} as const;

export type Theme = typeof theme;
