/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CustomCard from "./cardCarousel";
import { useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

// Define the data structure for each carousel item
interface CarouselCardItem {
  id: number;
  iconName: string;
  title: string;
  content: string;
}

// Define the props for the CarouselSectionFeatures component
interface CarouselProps {
  items: CarouselCardItem[];
}

// Main CarouselSectionFeatures component
const CarouselSectionFeatures: React.FC<CarouselProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<CarouselCardItem | null>(
    null
  );
  const { t } = useTranslation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  // Custom arrow components for the slider
  const NextArrow = () => (
    <IconButton
      onClick={() => sliderRef?.slickNext()}
      style={{
        backgroundColor: "white",
        borderRadius: "50%",
        border: "2px solid #fff",
        width: "40px",
        height: "40px",
        boxShadow: "0px 4px 8px rgba(151, 151, 151, 0.5)",
      }}
    >
      <NavigateNextIcon style={{ color: "orange" }} />
    </IconButton>
  );

  const PrevArrow = () => (
    <IconButton
      onClick={() => sliderRef?.slickPrev()}
      style={{
        backgroundColor: "white",
        borderRadius: "50%",
        border: "2px solid #fff",
        width: "40px",
        height: "40px",
        boxShadow: "0px 4px 8px rgba(151, 151, 151, 0.5)",
      }}
    >
      <NavigateBeforeIcon style={{ color: "orange" }} />
    </IconButton>
  );

  // Handle click on a card to update the selected item and navigate to it in the slider
  const handleCardClick = (item: CarouselCardItem) => {
    setSelectedItem(item);
    sliderRef?.slickGoTo(items.indexOf(item));
  };

  // Set the initial selected item when the component mounts
  useEffect(() => {
    if (items.length > 0 && !selectedItem) {
      setSelectedItem(items[0]);
    }
  }, [items, selectedItem]);

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (index: number) => setSelectedItem(items[index]),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      {isMobile ? (
        // Mobile view
        <>
          <Box>
            {/* Background image for mobile */}
            <img
              src="/assets/images/bg_features.svg"
              alt="Image description"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </Box>
          <Box
            sx={{
              marginTop: -5,
            }}
          >
            {/* Slider for mobile view */}
            <Slider ref={(slider) => setSliderRef(slider)} {...settings}>
              {items.map((item) => (
                <CustomCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  icon={item.iconName}
                  selected={selectedItem === item}
                  onClick={() => handleCardClick(item)}
                />
              ))}
            </Slider>
          </Box>
          {/* Details and navigation arrows for mobile view */}
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            padding={2}
            sx={{
              backgroundColor: "transparent",
            }}
          >
            <Box textAlign="left">
              <Box display="flex" justifyContent="start">
                <Box display="flex" alignItems="center">
                  <Box
                    display="flex"
                    alignItems="center"
                    bgcolor={selectedItem ? "orange" : "white"}
                    height="0.5em"
                    width="0.5em"
                    marginRight="0.5em"
                  />
                </Box>
                <Typography
                  flex={1}
                  style={{
                    color: "#092E54",
                    fontWeight: "bold",
                  }}
                >
                  {t(`FeaturesTitle.t-${selectedItem?.id}`)}
                </Typography>
              </Box>
            </Box>
            <Box textAlign="left">
              {selectedItem && (
                <div>
                  <Typography variant="body2" style={{ color: "#092E54" }}>
                    {t(`FeaturesContent.t-${selectedItem.id}`)}
                  </Typography>
                </div>
              )}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PrevArrow />
              <NextArrow />
            </Box>
          </Box>
        </>
      ) : (
        // Desktop view
        <Box width={isMobile ? 200 : "100%"} height="auto">
          <Box display="flex" justifyContent="space-between">
            {/* Left side content for desktop view */}
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="left"
              padding={10}
              sx={{
                backgroundColor: isMobile ? "transparent" : "#B0B1BC",
                flexBasis: "50%",
              }}
            >
              <Box textAlign="left">
                <Box display="flex" alignItems="center">
                  <Box
                    bgcolor={selectedItem ? "#EB8713" : "#F2F2F2"}
                    height="0.5em"
                    width="0.5em"
                    marginRight="0.5em"
                  />
                  <Typography
                    flex={1}
                    style={{ color: "#092E54", fontWeight: "bold" }}
                  >
                    {t(`FeaturesTitle.t-${selectedItem?.id}`)}
                  </Typography>
                </Box>
              </Box>
              <Box textAlign="left">
                {selectedItem && (
                  <div>
                    <Typography
                      variant="body2"
                      style={{
                        color: "#092E54",
                        padding: 2,
                        overflow: "hidden", // Evitar saltos de línea y ocultar el desbordamiento
                        textOverflow: "ellipsis", // Mostrar puntos suspensivos si se desborda
                      }}
                    >
                      {t(`FeaturesContent.t-${selectedItem.id}`)}
                    </Typography>
                  </div>
                )}
              </Box>
            </Box>
            {/* Right side image for desktop view */}
            <Box textAlign="right" flexBasis="50%" position="relative">
              <img
                src="/assets/images/bg_features.svg"
                alt="Image description"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
          {/* Slider for desktop view */}
          <Box
            sx={{
              marginTop: -5,
              paddingLeft: 9,
            }}
          >
            <Slider ref={(slider) => setSliderRef(slider)} {...settings}>
              {items.map((item) => (
                <CustomCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  icon={item.iconName}
                  selected={selectedItem === item}
                  onClick={() => handleCardClick(item)}
                />
              ))}
            </Slider>
          </Box>
          {/* Navigation arrows for desktop view */}
          <Box display="flex" mt={2} gap={2} paddingLeft={2}>
            <PrevArrow />
            <NextArrow />
          </Box>
        </Box>
      )}
    </>
  );
};

export default CarouselSectionFeatures;
