import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";

interface CustomCardProps {
  title: string;
  icon: string;
  onClick: () => void;
  selected: boolean;
  id: number;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  icon,
  onClick,
  selected,
  id,
}) => {
  const { t } = useTranslation();

  return (
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
        height: "100%",
        borderRadius: "0",
        minHeight: "150px",
        border: `1px solid #C4C5C6`,
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
          {t(`FeaturesTitle.t-${id}`)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
