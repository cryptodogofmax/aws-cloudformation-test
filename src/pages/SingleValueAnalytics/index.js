import React from "react";
import {
  Box,
  Text,
  Stack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  IconButton,
} from "@chakra-ui/react";
import { IoAlertCircleOutline } from "react-icons/io5";

import PriceHistoryGraph from "./components/PriceHistoryGraph";
import MainFeaturesCard from "./components/MainFeaturesCard";
import OverviewCard from "./components/OverviewCard";

const SingleValueAnalytics = () => {
  return (
    <div>
      <div className="flex flex-row mt-10">
        <OverviewCard />
        <div className="lg:w-6/12 ml-5">
          <Box borderRadius="5" padding="3" bgColor="#1c1c1b">
            <Text className="text-sky-500 font-semibold text-center">
              Valuation
            </Text>
            <Stack direction="row" className="justify-center mt-2">
              <Text color="white">Astronaut #0 is</Text>
              <Text color="red.600">OVERVALUED</Text>
              <Text color="white">at</Text>
              <Text color="red.600">$31.89</Text>
              <Text color="white">based on its current listed price</Text>

              <Popover>
                <PopoverTrigger>
                  <IconButton
                    icon={<IoAlertCircleOutline />}
                    size="26"
                    boxSize="26"
                    className="cursor-pointer"
                    variant="ghost"
                    colorScheme="whiteAlpha"
                  />
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Confirmation!</PopoverHeader>
                  <PopoverBody>
                    Are you sure you want to have that milkshake?
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Stack>
          </Box>
          <PriceHistoryGraph />
        </div>
        <MainFeaturesCard />
      </div>
    </div>
  );
};

export default SingleValueAnalytics;
