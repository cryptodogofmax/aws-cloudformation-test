import React from "react";
import { Box, Image, Text, Stack } from "@chakra-ui/react";

const ArtistHighlights = () => {
  return (
    <Box borderRadius="5" padding="3" bgColor="#1c1c1b">
      <Image
        src="https://www.cryptotimes.io/wp-content/uploads/2022/01/NFT-artist-to-follow-in-2022-Website.jpg"
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

export default ArtistHighlights;
