import React from "react";
import { Text, Image, Icon, Box } from "@chakra-ui/react";
import { BsCalendar2WeekFill } from "react-icons/bs";
import { GoCommentDiscussion } from "react-icons/go";
import { AiFillEye } from "react-icons/ai";

const NewsCard = () => {
  return (
    <Box>
      <div className="py-5 flex flex-row">
        <Image
          src="https://bitcoin.org/img/icons/opengraph.png?1656252469"
          width="240"
          height="120"
        />
        <div className="ml-5">
          <Text className="text-white">
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of
          </Text>
          <div className="justify-between mt-5 flex flex-row flex-wrap">
            <Text className="text-white font-semibold hover:underline cursor-pointer mr-2">
              Author
            </Text>
            <div className="items-center flex flex-row">
              <Icon as={BsCalendar2WeekFill} color="white" className="mr-2" />
              <Text className="text-white mr-5">JUL/15/2018</Text>
              <Icon as={GoCommentDiscussion} color="white" className="mr-2" />
              <Text className="text-white mr-5">01</Text>
              <Icon as={AiFillEye} color="white" className="mr-2" />
              <Text className="text-white">301</Text>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default NewsCard;
