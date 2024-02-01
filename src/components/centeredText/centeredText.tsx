import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

interface CenteredTextProps {
  text: string;
}

const CenteredText: React.FC<CenteredTextProps> = ({ text }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      color="#01478F"
      marginTop={10}
      marginBottom={10}
    >
      <Typography variant="h4">{text}</Typography>
    </Box>
  );
};

export default CenteredText;
