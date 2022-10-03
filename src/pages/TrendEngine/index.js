import React from "react";
import { Text, SimpleGrid } from "@chakra-ui/react";

import { Pic1, Pic2, Pic3, Pic4 } from "../../assets/images";
import FeatureCard from "../../components/Common/FeatureCard";

export const FEATURES = [
  {
    name: "Trending NFT Collectibles",
    redirectTo: "/trend-engine/collectibles",
    image: Pic1,
    desc: "Explore the NFT's with the highest volume of transactions, sales and other relevant trending metrics",
  },
  {
    name: "Trending NFT Topics",
    redirectTo: "/trend-engine/topics",
    image: Pic2,
    desc: "Get the latest news on the NFT market in general, or individual topics. Receive a comprehensive sentiment analysis on the main topics",
  },
  {
    name: "Trending NFT Artists",
    redirectTo: "/trend-engine/artists",
    image: Pic3,
    desc: "Keep in touch with the most trending artists, their account information and other details",
  },
  {
    name: "Trending NFT Wallets",
    redirectTo: "/trend-engine/wallets",
    image: Pic4,
    desc: "Review the movements of the high level investors. Track insights and analytics behind their actions",
  },
];

const TrendEngine = () => {
  return (
    <div className="mt-10">
      <div className="justify-center">
        <Text
          fontSize={["sm", "md", "lg", "xl"]}
          className="font-bold text-white text-center"
        >
          NFT TREND ENGINE
        </Text>
        <SimpleGrid minChildWidth="280px" spacing="20px" p="12" pl="0">
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={index}
              image={feature.image}
              desc={feature.desc}
              name={feature.name}
              redirectTo={feature.redirectTo}
            />
          ))}
        </SimpleGrid>
      </div>
    </div>
  );
};

export default TrendEngine;
