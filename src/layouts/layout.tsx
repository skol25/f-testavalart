// Layout.tsx
import React, { ReactNode } from "react";
import FooterLayout from "./footer/layout";
import Header from "./header/layout";
import Main from "./main";
import { Box } from "@mui/material";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Main>{children}</Main>
        <FooterLayout />
      </Box>
    </>
  );
};

export default Layout;
