import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CustomCard from "./cardCarousel";
import { useMediaQuery, useTheme } from "@mui/material";

interface CarouselCardItem {
  id: number;
  iconName: string;
  title: string;
  content: string;
}

interface CarouselProps {
  items: CarouselCardItem[];
}

const CarouselSectionFeatures: React.FC<CarouselProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<CarouselCardItem | null>(
    null
  );

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

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

  const handleCardClick = (item: CarouselCardItem) => {
    setSelectedItem(item);
    sliderRef?.slickGoTo(items.indexOf(item));
  };

  useEffect(() => {
    if (items.length > 0 && !selectedItem) {
      setSelectedItem(items[0]);
    }
  }, [items, selectedItem]);

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
        <>
          <Box>
            <img
              src="/assets/images/bg_features.svg"
              alt="Descripción de la imagen"
              style={{ width: "100%", height: "auto", objectFit: "cover" }} // Ajusta el tamaño según tus necesidades
            />
          </Box>
          <Box
            sx={{
              marginTop: -5,
            }}
          >
            <Slider ref={(slider) => setSliderRef(slider)} {...settings}>
              {items.map((item) => (
                <CustomCard
                  key={item.id}
                  title={item.title}
                  icon={item.iconName}
                  selected={selectedItem === item}
                  onClick={() => handleCardClick(item)}
                />
              ))}
            </Slider>
          </Box>
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
                  {selectedItem?.title}
                </Typography>
              </Box>
            </Box>
            <Box textAlign="left">
              {selectedItem && (
                <div>
                  <Typography variant="body2" style={{ color: "#092E54" }}>
                    {selectedItem.content}
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
        // Muestra el diseño original en dispositivos más grandes
        <Box width={isMobile ? 200 : "100%"} height="auto">
          <Box display="flex" justifyContent="space-between">
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
                    {selectedItem?.title}
                  </Typography>
                </Box>
              </Box>
              <Box textAlign="left">
                {selectedItem && (
                  <div>
                    <Typography variant="body2" style={{ color: "#092E54" }}>
                      {selectedItem.content}
                    </Typography>
                  </div>
                )}
              </Box>
            </Box>
            <Box
              textAlign="right"
              flexBasis="50%" // La mitad del espacio para esta caja
            >
              {/* Aquí puedes colocar tu imagen */}
              <img
                src="/assets/images/bg_features.svg"
                alt="Descripción de la imagen"
                style={{ width: "100%", height: "auto", objectFit: "cover" }} // Ajusta el tamaño según tus necesidades
              />
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: -5,
            }}
          >
            <Slider ref={(slider) => setSliderRef(slider)} {...settings}>
              {items.map((item) => (
                <CustomCard
                  key={item.id}
                  title={item.title}
                  icon={item.iconName} // Assuming you have an icon component or library to render the icon
                  selected={selectedItem === item}
                  onClick={() => handleCardClick(item)}
                />
              ))}
            </Slider>
          </Box>
          <Box display="flex" mt={2}>
            <PrevArrow />
            <NextArrow />
          </Box>
        </Box>
      )}
    </>
  );
};

export default CarouselSectionFeatures;
