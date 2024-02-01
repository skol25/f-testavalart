import React from "react";
import { Typography, TypographyProps } from "@mui/material";

type CustomTypographyVariant =
  | "title"
  | "subtitle"
  | "subtitle2"
  | "title-bold"
  | "body"
  | "caption"
  | "body-bold"
  | "button";

type AllowedFonts = "Lato";

interface CustomTypographyProps extends Omit<TypographyProps, "variant"> {
  variant?: CustomTypographyVariant;
  font?: AllowedFonts;
  children?: React.ReactNode;
}

const CustomTypography: React.FC<CustomTypographyProps> = ({
  variant = "body",
  font = "Lato",
  children,
  ...rest
}) => {
  let componentVariant;
  let fontWeight;

  switch (variant) {
    case "title":
      componentVariant = "h3";
      fontWeight = "normal";
      break;
    case "title-bold":
      componentVariant = "h3";
      fontWeight = "bold";
      break;
    case "subtitle":
      componentVariant = "h4";
      break;
    case "subtitle2":
      componentVariant = "h5";
      break;
    case "body":
      componentVariant = "body2";
      break;
    case "body-bold":
      componentVariant = "h4";
      fontWeight = "bold";
      break;
    case "caption":
      componentVariant = "caption";
      break;
    case "button":
      componentVariant = "button";
      break;
    default:
      componentVariant = "body1";
  }

  return (
    <Typography
      variant={componentVariant as any}
      style={{
        fontFamily: font || (variant === "title" ? "Lato" : "Lato"), // Usamos 'Lato' como fuente por defecto
        fontWeight,
      }}
      {...rest}
    >
      {children}
    </Typography>
  );
};

export default CustomTypography;
