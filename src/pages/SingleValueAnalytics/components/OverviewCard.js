import React from "react";
import { Image, Box, Text, Stack, Button } from "@chakra-ui/react";

const OverviewCard = () => {
  return (
    <div className="lg:w-2/12">
      <Box borderRadius="5" padding="3" bgColor="#1c1c1b">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_up5xDuVL_WRLqgtRPjjjgQ0blRPqjsq4fQ&usqp=CAU"
          borderRadius="5"
        />
        <div className="mt-5">
          <Stack direction="row">
            <Text className="text-sky-500">Name:</Text>
            <Text className="text-white">Astronaut #0</Text>
          </Stack>
          <Stack direction="row">
            <Text className="text-sky-500">Price:</Text>
            <Text className="text-white">$731.89</Text>
          </Stack>
          <Stack direction="row">
            <Text className="text-sky-500">Marketplace:</Text>
            <Text className="text-white">OpenSea</Text>
          </Stack>
        </div>
        <div className="mt-10">
          <Button colorScheme="telegram" className="w-full">
            Purchase
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default OverviewCard;
