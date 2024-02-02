import { Box } from "@mui/material";
import React from "react";
import BlueBoxWithImage from "./carouselSection/blueBoxWithImage";
import CenteredText from "../../components/centeredText/centeredText";
import CarouselSectionFeatures from "./carouselSectionFeatures/view";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/redux/store";
import { useTranslation } from "react-i18next";

const FeaturesView: React.FC = () => {
  const commonState = useSelector((state: RootState) => state.common);
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <Box width="100%">
        {/* Contenido que ocupará el 100% del ancho */}
        <BlueBoxWithImage
          carouselItems={commonState.commonData.Benefits}
        ></BlueBoxWithImage>
        <CenteredText text={t(`FeaturesT`)}></CenteredText>
        <CarouselSectionFeatures
          items={commonState.commonData.FEATURES}
        ></CarouselSectionFeatures>
      </Box>
    </React.Fragment>
  );
};

export default FeaturesView;
