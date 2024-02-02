// Importing necessary components and functions from React and Material-UI
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
import LanguageSelector from "./languajeSelector";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  // Fetch navigation data using custom hook
  const { data: navData } = useNavData();

  // State to manage the open/close state of the drawer
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Scroll trigger hook
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  // Toggle function for opening/closing the drawer
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box
      component="header"
      sx={{
        position: trigger ? "fixed" : "sticky",
        backgroundColor: "#01478F",
        width: "100%",
        zIndex: 10,
        borderBottom: "0.5px solid #00000020",
        transition: "background-color 0.3s ease-out",
      }}
    >
      {/* Toolbar container */}
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left section with language selector and hamburger menu for mobile */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Titles for desktop version */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
          >
            {navData.map((section, index) => (
              <Link
                key={index}
                to={section.items[0].path}
                style={{ textDecoration: "none" }}
              >
                <Button color="primary">{section.subheader}</Button>
              </Link>
            ))}
          </Typography>
        </Box>

        {/* Right section with Drawer for mobile devices */}
        <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
          <List>
            {navData.map((section, index) => (
              <Link
                key={index}
                to={section.items[0].path}
                style={{ textDecoration: "none" }}
              >
                <ListItem button>
                  <ListItemText
                    sx={{ color: "#232B35" }}
                    primary={section.subheader}
                  />
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
        <LanguageSelector></LanguageSelector>
      </Toolbar>
    </Box>
  );
};

export default Header;
