import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import BlueBoxWithImage from "./carouselSection/blueBoxWithImage";
import CenteredText from "../../components/centeredText/centeredText";
import CarouselSectionFeatures from "./carouselSectionFeatures/view";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/redux/store";

const FeaturesView: React.FC = () => {
  const commonState = useSelector((state: RootState) => state.common);
  console.log(commonState);
  return (
    <React.Fragment>
      <Box width="100%">
        {/* Contenido que ocupará el 100% del ancho */}
        <BlueBoxWithImage
          carouselItems={commonState.commonData.Benefits}
        ></BlueBoxWithImage>
        <CenteredText text={"FEATURES"}></CenteredText>
        <CarouselSectionFeatures
          items={commonState.commonData.FEATURES}
        ></CarouselSectionFeatures>
      </Box>
    </React.Fragment>
  );
};

export default FeaturesView;
