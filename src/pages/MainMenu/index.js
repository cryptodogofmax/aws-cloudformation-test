import { Text, SimpleGrid } from "@chakra-ui/react";

import { Pic1, Pic2, Pic3, Pic4 } from "../../assets/images";
import FeatureCard from "../../components/Common/FeatureCard";

const FEATURES = [
  {
    name: "NFT VALUE ANALYTICS",
    redirectTo: "/value-analytics",
    image: Pic1,
    desc: "Explore the right insights on appraisals, purchasing or selling NFT collections",
  },
  {
    name: "NFT TREND ENGINE",
    redirectTo: "/trend-engine",
    image: Pic2,
    desc: "Stay on top of the most current trends regarding top collections news, topics and promising artists",
  },
  {
    name: "NFT PORTFOLIO",
    redirectTo: "/portfolio",
    image: Pic3,
    desc: "Manage and review different portfolio metrics regarding previous NFT investments",
  },
  {
    name: "NFT MARKETING ENGINE",
    redirectTo: "/marketing-engine",
    image: Pic4,
    desc: "Find new innovative ways on how to sell NFT's in a faster and more efficient way",
  },
];

const MainMenu = () => {
  return (
    <div className="mt-10">
      <div className="justify-center">
        <Text
          fontSize={["sm", "md", "lg", "xl"]}
          className="font-bold text-white text-center"
        >
          NFT ANALYTICS SUBMODULES
        </Text>
        <SimpleGrid minChildWidth="280px" spacing="20px" p="12" pl="3">
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

export default MainMenu;
