"use client";

import { alpha, createTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export type ColorSchema =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error";

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    neutral: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
}

// SETUP COLORS

const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

const COMMON = {
  common: {
    black: "#000000",
    white: "#FFFFFF",
  },
  primary: {
    lighter: "#C8FAD6",
    light: "#5BE49B",
    main: "#DFE3E8",
    dark: "#007867",
    darker: "#004B50",
    contrastText: "#FFFFFF",
  },
  secondary: {
    lighter: "#EFD6FF",
    light: "#C684FF",
    main: "#8E33FF",
    dark: "#5119B7",
    darker: "#27097A",
    contrastText: "#FFFFFF",
  },
  info: {
    lighter: "#CAFDF5",
    light: "#61F3F3",
    main: "#00B8D9",
    dark: "#006C9C",
    darker: "#003768",
    contrastText: "#FFFFFF",
  },
  success: {
    lighter: "#D3FCD2",
    light: "#77ED8B",
    main: "#22C55E",
    dark: "#118D57",
    darker: "#065E49",
    contrastText: "#ffffff",
  },
  warning: {
    lighter: "#FFF5CC",
    light: "#FFD666",
    main: "#FFAB00",
    dark: "#B76E00",
    darker: "#7A4100",
    contrastText: GREY[800],
  },
  error: {
    lighter: "#FFE9D5",
    light: "#FFAC82",
    main: "#FF5630",
    dark: "#B71D18",
    darker: "#7A0916",
    contrastText: "#FFFFFF",
  },
  grey: GREY,
  divider: alpha(GREY[500], 0.2),
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export const createCustomTheme = (mode: "light" | "dark") => {
  return createTheme({
    palette: {
      ...(mode === "light" ? COMMON : {}),
      mode,
      text: {
        primary: mode === "light" ? GREY[0] : "#FFFFFF",
        secondary: mode === "light" ? GREY[0] : GREY[400],
        disabled: mode === "light" ? GREY[200] : GREY[600],
      },
      background: {
        paper: mode === "light" ? "#FFFFFF" : GREY[800],
        default: mode === "light" ? "#FFFFFF" : GREY[900],
        neutral: mode === "light" ? GREY[200] : alpha(GREY[500], 0.12),
      },
      action: {
        ...COMMON.action,
        active: mode === "light" ? GREY[600] : GREY[500],
      },
    },
  });
};
