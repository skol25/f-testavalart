import Box, { BoxProps } from "@mui/material/Box";

export default function Main({ children, sx, ...other }: BoxProps) {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        minHeight: 1,
        display: "flex",
        flexDirection: "column",
        padding: 0,
        margin: 0,

        // py: SPACING, // Ajustar el espacio de relleno en todos los lados (por ejemplo, triple del SPACING)
        ...sx, // Incluir estilos adicionales proporcionados como prop
      }}
      {...other}
    >
      {children}
    </Box>
  );
}
