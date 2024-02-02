import React, { useState } from "react";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

// Interface for the CarouselProps
interface CarouselProps {
  items: {
    id: number;
    title: string;
    content: string;
  }[];
}

// Main Carousel component
const Carousel: React.FC<CarouselProps> = ({ items }) => {
  // State for hover effect on navigation arrows
  const [isPrevHovered, setIsPrevHovered] = useState(false);
  const [isNextHovered, setIsNextHovered] = useState(false);

  // State for the Slider reference
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  // Arrow components with hover effect
  const NextArrow = ({ onClick }: any) => (
    <div
      onClick={() => handleArrowClick(onClick, "next")}
      onMouseEnter={() => setIsNextHovered(true)}
      onMouseLeave={() => setIsNextHovered(false)}
    >
      <div
        style={{
          transform: "translateY(-50%)",
          width: 25,
          height: 25,
          backgroundColor: "white",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          boxShadow: "0px 4px 8px rgba(151, 151, 151, 0.5)",
          transition: "transform 0.3s",
          ...(isNextHovered && { transform: "translateY(-50%) scale(1.2)" }),
        }}
      >
        <div className="bg-white">
          <NavigateNextIcon style={{ color: "orange" }} />
        </div>
      </div>
    </div>
  );

  const PrevArrow = ({ onClick }: any) => (
    <div
      onClick={() => handleArrowClick(onClick, "prev")}
      onMouseEnter={() => setIsPrevHovered(true)}
      onMouseLeave={() => setIsPrevHovered(false)}
    >
      <div
        style={{
          transform: "translateY(-50%)",
          width: 25,
          height: 25,
          backgroundColor: "white",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          boxShadow: "0px 4px 8px rgba(151, 151, 151, 0.5)",
          transition: "transform 0.3s",
          ...(isPrevHovered && { transform: "translateY(-50%) scale(1.2)" }),
        }}
      >
        <div className="bg-white shadow-md shadow-gray-500 h-[35px] w-[35px] rounded-full grid place-items-center">
          <NavigateBeforeIcon style={{ color: "orange" }} />
        </div>
      </div>
    </div>
  );

  // Handle arrow click, you can extend it further if needed
  const handleArrowClick = (onClick: any, arrowType: string) => {
    onClick();
  };

  // Settings for the react-slick Slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  // Use MUI theme and translation hook
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  // JSX structure for the Carousel component
  return (
    <Box width={isMobile ? 250 : 400} height="auto">
      <Slider ref={(slider) => setSliderRef(slider)} {...settings}>
        {/* Mapping through items and rendering content */}
        {items.map((item) => (
          <Box key={item.id} textAlign="left">
            <Typography
              variant="h4"
              marginBottom={2}
              style={{ fontWeight: "bold" }}
            >
              {t(`BenefitsTitle.t-${item.id}`)}
            </Typography>
            <Typography variant="body1">
              {t(`BenefitsContent.t-${item.id}`)}
            </Typography>
          </Box>
        ))}
      </Slider>
      {/* Navigation arrows with click handlers */}
      <Box display="flex" marginTop={10} gap={2}>
        <PrevArrow onClick={() => sliderRef?.slickPrev()} />
        <NextArrow onClick={() => sliderRef?.slickNext()} />
      </Box>
    </Box>
  );
};

export default Carousel;
