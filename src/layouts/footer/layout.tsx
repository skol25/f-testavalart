import { Box, Typography } from "@mui/material";

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
