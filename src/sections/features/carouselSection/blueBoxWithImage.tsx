import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";
import Carousel from "./carousel";
import { BlueBoxWithImageProps } from "../../../types/carouselTypes";

const BlueBoxWithImage: React.FC<BlueBoxWithImageProps> = ({
  carouselItems,
}) => {
  return (
    <Box display="flex">
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
          <Typography flex={1}>Beneficios</Typography>
        </Box>
        <Box>
          <Carousel items={carouselItems}></Carousel>
        </Box>
      </Box>
      <Hidden xsDown>
        <Box flex={1.5}>
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
