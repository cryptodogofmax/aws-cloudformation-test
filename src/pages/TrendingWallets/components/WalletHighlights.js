import React from "react";
import { Box, Image, Text, Stack } from "@chakra-ui/react";

const WalletHighlights = () => {
  return (
    <Box borderRadius="5" padding="3" bgColor="#1c1c1b">
      <Image
        src="https://www.thestreet.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgxMjQ4MDg4MzExMDgwMjk2/saturday-night-live-elon-musk.jpg"
        className="w-full h-2/5"
        objectFit="cover"
        borderRadius="5"
      />
      <Text className="text-white text-lg font-semibold text-center my-5">
        Mark Philips
      </Text>
      <div className="flex flex-col justify-center mb-2 px-2">
        <Stack direction="row" justify="space-between">
          <Text className="text-white">Total Volume Sales:</Text>
          <Text className="text-green-500">$19,980</Text>
        </Stack>
        <Stack direction="row" justify="space-between">
          <Text className="text-white">Total NFTs:</Text>
          <Text className="text-red-500">132</Text>
        </Stack>
        <Stack direction="row" justify="space-between">
          <Text className="text-white">Total Sold Today:</Text>
          <Text className="text-green-500">$9.203</Text>
        </Stack>
      </div>
    </Box>
  );
};

export default WalletHighlights;
