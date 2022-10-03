import React from "react";
import { Divider, Text } from "@chakra-ui/react";

import NewsCard from "./NewsCard";
import SentimentGraph from "./SentimentGraph";

const TrendingSection = () => {
  return (
    <div className="p-5 pt-10">
      <Text className="text-sky-500 font-bold mb-5">
        Trending NFT YouTube Videos
      </Text>
      <Divider />
      <div style={{ width: 500 }}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <SentimentGraph />
    </div>
  );
};

export default TrendingSection;
