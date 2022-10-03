import React from "react";
import { Text } from "@chakra-ui/react";

import MainCollections from "./components/MainCollections";
import StatisticsSection from "./components/StatisticsSection";
import ArtistHighlights from "./components/ArtistHighlights";

const TrendingWallets = () => {
  const browserWidth = window.innerWidth;

  return (
    <div className="flex flex-row flex-wrap mt-10">
      <div style={{ width: browserWidth / 6 }}>
        <Text className="text-white text-lg font-semibold text-center mb-2">
          Trending Artist Highlights
        </Text>
        <ArtistHighlights />
      </div>
      <div className="w-4/12 ml-5">
        <Text className="text-white text-lg font-semibold text-center mb-2">
          Main Collections
        </Text>
        <MainCollections />
      </div>
      <div className="ml-5 w-5/12">
        <StatisticsSection />
      </div>
    </div>
  );
};

export default TrendingWallets;
