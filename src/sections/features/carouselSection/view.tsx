/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";
import Carousel from "./carousel"; // Importing the Carousel component
import { BlueBoxWithImageProps } from "../../../types/carouselTypes";
import { useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

// BlueBoxWithImageProps is an interface for the component props

const BlueBoxWithImage: React.FC<BlueBoxWithImageProps> = ({
  carouselItems,
}) => {
  // Using MUI theme and media query hooks
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation(); // i18n translation hook

  return (
    <Box display="flex">
      {/* Left side content */}
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        alignItems="start"
        justifyContent="center"
        bgcolor="#01478F"
        color="white"
        padding={5}
      >
        <Box display="flex" alignItems="center" marginBottom={2}>
          <Box
            bgcolor="orange"
            height="0.5em"
            width="0.5em"
            marginRight="0.5em"
          />
          <Typography flex={1}>{t(`BenefitsT`)}</Typography>
        </Box>
        <Box>
          {/* Carousel component usage */}
          <Carousel items={carouselItems}></Carousel>
        </Box>
      </Box>

      {/* Right side image, hidden on smaller screens */}
      <Hidden xsDown>
        <Box flex={1.5} display={isMobile ? "none" : "block"}>
          <img
            src={"/assets/images/Image_carousel.svg"}
            alt="Right Image"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </Hidden>
    </Box>
  );
};

export default BlueBoxWithImage;