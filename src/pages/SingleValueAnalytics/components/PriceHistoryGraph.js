import React from "react";
import { Box, Stack, Text, Icon } from "@chakra-ui/react";
import { HiRefresh } from "react-icons/hi";
import { VictoryAxis, VictoryChart, VictoryLine, VictoryTheme } from "victory";

const PriceHistoryGraph = () => {
  const chartHeight = window.innerHeight / 3.5;
  return (
    <div className="mt-5">
      <Box borderRadius="5" padding="3" bgColor="#1c1c1b">
        <Stack direction="row" justify="space-around" alignItems="center">
          <Text color="white">Estimated Price History</Text>
          <Text className="text-sky-500 font-semibold text-2xl">
            Price History
          </Text>
          <Stack direction="row" alignItems="center">
            <Icon as={HiRefresh} color="gray.500" boxSize="4" />
            <Text color="gray.500" className="text-sm">
              9 mins ago
            </Text>
          </Stack>
        </Stack>
        <VictoryChart height={chartHeight}>
          <VictoryAxis
            crossAxis
            width={chartHeight}
            height={chartHeight}
            domain={[1, 5]}
            theme={VictoryTheme.material}
            standalone={false}
            style={{
              tickLabels: { fill: "white", fontSize: 8 },
            }}
          />
          <VictoryAxis
            dependentAxis
            style={{
              tickLabels: { fill: "white", fontSize: 8 },
              axisLabel: { fill: "white", fontSize: 12 },
            }}
            crossAxis
            width={chartHeight}
            height={chartHeight}
            domain={[0, 10]}
            theme={VictoryTheme.material}
            standalone={false}
            label="Price (ETH)"
          />
          <VictoryLine
            style={{
              data: { stroke: "#c43a31" },
            }}
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 7 },
            ]}
            x={(datum) => `0${datum.x}-Feb-22`}
            y0="Price (ETH)"
          />
        </VictoryChart>
      </Box>
    </div>
  );
};

export default PriceHistoryGraph;
