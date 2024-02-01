"use client";

// @mui
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

import { createCustomTheme } from "./theme";

// options

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function ThemeProviderCustom({ children }: Props) {
  const theme = createCustomTheme("light");

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
