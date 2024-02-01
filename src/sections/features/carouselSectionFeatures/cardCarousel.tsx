import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface CustomCardProps {
  title: string;
  icon: string; // Cambia el tipo a string para la ruta del icono
  onClick: () => void;
  selected: boolean;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  icon,
  onClick,
  selected,
}) => (
  <Card
    onClick={onClick}
    style={{
      cursor: "pointer",
      backgroundColor: selected ? "#EB8713" : "#F2F2F2",
      color: selected ? "white" : "#01478F",
      margin: "0 8px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100%", // Asegura que la Card ocupe toda la altura disponible
      borderRadius: "0", // Añade esta línea para quitar el borderRadius
      minHeight: "150px", // Ajusta la altura mínima según tus necesidades
      border: `1px solid #C4C5C6`, // Agrega el borde con el color especificado
    }}
  >
    <CardContent>
      <Box marginBottom="8px" padding={2}>
        <img
          src={`/assets/icons/${icon}.svg`}
          alt={title}
          style={{
            width: "24px",
            height: "24px",
            filter: selected
              ? `invert(100%) sepia(100%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)`
              : ``,
            margin: "auto",
          }}
        />
      </Box>
      <Typography
        variant="body2"
        gutterBottom
        style={{ fontWeight: "bold", textAlign: "center" }}
      >
        {title}
      </Typography>
    </CardContent>
  </Card>
);

export default CustomCard;
