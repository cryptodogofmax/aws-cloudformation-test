import React from "react";
import { Box, Text, Image, Stack } from "@chakra-ui/react";

const Collection = () => {
  return (
    <div className="p-2">
      <Image
        objectFit="cover"
        src="https://s32659.pcdn.co/wp-content/uploads/2022/01/nft-cost.jpg.optimal.jpg"
        borderRadius="5"
        className="w-full h-4/6"
      />
      <div className="mt-2">
        <Stack direction="row" justify="space-between">
          <Text className="text-white">Current Value:</Text>
          <Text className="text-sky-500">$18,181</Text>
        </Stack>
        <Stack direction="row" justify="space-between">
          <Text className="text-green-500">Undervalued by:</Text>
          <Text className="text-sky-500">$18,181</Text>
        </Stack>
      </div>
    </div>
  );
};

const MainCollections = () => {
  return (
    <Box borderRadius="5" padding="3" bgColor="#1c1c1b">
      <Stack direction="row">
        <Collection />
        <Collection />
      </Stack>
      <Stack direction="row">
        <Collection />
        <Collection />
      </Stack>
    </Box>
  );
};

export default MainCollections;
