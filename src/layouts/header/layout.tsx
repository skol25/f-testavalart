import React, { useState } from "react";
import {
  Box,
  Toolbar,
  Typography,
  Button,
  useScrollTrigger,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavData } from "./config-navigation";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleButtonClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    setDrawerOpen(false);
  };

  const { data: navData } = useNavData();

  const bgColor = "#01478F";

  return (
    <Box
      component="header"
      sx={{
        position: trigger ? "fixed" : "sticky",
        backgroundColor: bgColor,
        width: "100%",
        zIndex: 10,
        borderBottom: "0.5px solid #00000020",
        transition: "background-color 0.3s ease-out", // Agregar la transición
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Contenedor del menú hamburguesa y títulos para versiones de escritorio */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Menú hamburguesa para dispositivos móviles */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Títulos para versiones de escritorio */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
          >
            {navData.map((section, index) => (
              <Button
                key={index}
                color="inherit"
                onClick={() => handleButtonClick(section.subheader)}
              >
                {section.subheader}
              </Button>
            ))}
          </Typography>
        </Box>

        {/* Menú Drawer para dispositivos móviles */}
        <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
          <List>
            {navData.map((section, index) => (
              <ListItem
                button
                key={index}
                onClick={() => handleButtonClick(section.subheader)}
              >
                <ListItemText
                  sx={{ color: "#232B35" }}
                  primary={section.subheader}
                />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </Box>
  );
};

export default Header;
