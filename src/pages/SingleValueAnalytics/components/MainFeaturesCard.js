import React from "react";
import { Box, Button } from "@chakra-ui/react";

import ReviewSection from "../../../components/Common/ReviewSection";

const FEATURES = [
  { name: "Color", value: "Orange" },
  { name: "Background", value: "Purple" },
  { name: "Type", value: "Human" },
  { name: "Action", value: "Kneel" },
  { name: "Hat", value: "Astronaut Hat" },
  { name: "Category", value: "None" },
];

const MainFeaturesCard = () => {
  return (
    <div className="lg:w-3/12 ml-5">
      <Box borderRadius="5" padding="3" bgColor="#1c1c1b">
        <div className="flex flex-col justify-center">
          {FEATURES.map((feature, index) => (
            <Button key={index} style={{ whiteSpace: "normal" }} mx="1" mb="3">
              {`${feature.name}: ${feature.value}`}
            </Button>
          ))}
        </div>
        <ReviewSection />
      </Box>
    </div>
  );
};

export default MainFeaturesCard;
