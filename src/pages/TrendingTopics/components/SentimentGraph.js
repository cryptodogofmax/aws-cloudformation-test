import React from "react";
import { Stack, Text } from "@chakra-ui/react";
import {
  VictoryChart,
  VictoryArea,
  VictoryAxis,
  VictoryVoronoiContainer,
  VictoryTooltip,
} from "victory";

const SentimentGraph = () => {
  return (
    <div className="mt-10">
      <div>
        <Stack direction="row" className="items-center">
          <Text className="text-white text-3xl">50%</Text>
          <Text className="text-slate-600 font-semibold">YouTube</Text>
        </Stack>
        <Text className="text-xl font-semibold text-green-500">
          Positive Sentiment
        </Text>
      </div>
      <VictoryChart
        height="220"
        containerComponent={
          <VictoryVoronoiContainer
            voronoiDimension="x"
            labels={({ datum }) => `y: ${datum.y}`}
            labelComponent={
              <VictoryTooltip
                cornerRadius={5}
                flyoutPadding={10}
                flyoutStyle={{ fill: "#00b3ff" }}
              />
            }
          />
        }
      >
        <VictoryArea
          style={{
            data: {
              fill: "#00b3ff",
              fillOpacity: 0.2,
              stroke: "#62cbf5",
            },
            labels: {
              fill: "white",
            },
          }}
          data={[
            { x: "Sell", y: 67 },
            { x: "Buy", y: 33 },
            { x: "Sell1", y: 20 },
            { x: "Sell2", y: 60 },
            { x: "Sell3", y: 100 },
          ]}
        />
        <VictoryAxis
          style={{ axis: { stroke: "none" } }}
          tickFormat={() => ""}
        />
      </VictoryChart>
    </div>
  );
};

export default SentimentGraph;
