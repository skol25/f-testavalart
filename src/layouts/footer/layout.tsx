import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  useTheme,
  FormControl,
  OutlinedInput,
  InputLabel,
  FormHelperText,
} from "@mui/material";

export default function FooterLayout() {
  return (
    <Box
      className="scroll-smooth"
      sx={{
        display: "flex",
        flexDirection: "column", // default direction for mobile
        justifyContent: "space-between",
        borderTop: "1px solid #ccc",
        borderRight: "1px solid #ccc",
      }}
    >
      <Typography>FOOTER</Typography>
    </Box>
  );
}
