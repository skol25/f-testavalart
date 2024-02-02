import Box, { BoxProps } from "@mui/material/Box";

// Main functional component with BoxProps as the prop type
export default function Main({ children, sx, ...other }: BoxProps) {
  return (
    // Using MUI Box component as the main container
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        minHeight: 1,
        display: "flex",
        flexDirection: "column",
        padding: 0,
        margin: 0,

        // Uncomment the line below and adjust the SPACING variable if needed
        // py: SPACING, // Adjust padding space on all sides (e.g., triple of SPACING)

        // Include additional styles provided as prop
        ...sx,
      }}
      {...other} // Spread any other props passed to the component
    >
      {children} {/* Render child components */}
    </Box>
  );
}
