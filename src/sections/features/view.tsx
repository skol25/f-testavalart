import { Box } from "@mui/material";
import React from "react";
import BlueBoxWithImage from "./carouselSection/blueBoxWithImage";
import CenteredText from "../../components/centeredText/centeredText";
import CarouselSectionFeatures from "./carouselSectionFeatures/view";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/redux/store";
import { useTranslation } from "react-i18next";

// FeaturesView functional component - Main view of the component
const FeaturesView: React.FC = () => {
  // Accessing the common state using useSelector from Redux
  const commonState = useSelector((state: RootState) => state.common);
  // Accessing the translation function
  const { t } = useTranslation();

  return (
    // Main container for the FeaturesView component
    <React.Fragment>
      <Box width="100%">
        {/* BlueBoxWithImage component rendering carousel items */}
        <BlueBoxWithImage
          carouselItems={commonState.commonData.Benefits}
        ></BlueBoxWithImage>

        {/* CenteredText component rendering text from translation */}
        <CenteredText text={t(`FeaturesT`)}></CenteredText>

        {/* CarouselSectionFeatures component rendering items from common state */}
        <CarouselSectionFeatures
          items={commonState.commonData.FEATURES}
        ></CarouselSectionFeatures>
      </Box>
    </React.Fragment>
  );
};

export default FeaturesView;
