import { Text } from "@chakra-ui/react";

import ProjectSentimentSection from "./components/ProjectSentimentSection";
import TrendingSection from "./components/TrendingSection";

const TrendingTopics = () => {
  return (
    <div className="mt-10">
      <div className="justify-center">
        <Text
          fontSize={["sm", "md", "lg", "xl"]}
          className="font-bold text-white text-center"
        >
          TRENDING TOPICS
        </Text>
        <div className="flex flex-row pr-10">
          <ProjectSentimentSection />
          <TrendingSection />
          <TrendingSection />
          <TrendingSection />
        </div>
      </div>
    </div>
  );
};

export default TrendingTopics;
