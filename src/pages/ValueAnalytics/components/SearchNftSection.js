import React from "react";
import {
  Text,
  InputGroup,
  Input,
  InputLeftElement,
  Icon,
  Button,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchNftSection = () => {
  return (
    <div className="sm:w-full lg:w-5/12 flex flex-col items-center">
      <Text
        fontSize={["sm", "md", "lg", "xl"]}
        className="text-sky-500 text-center"
      >
        Search NFT to evaluate
      </Text>
      <div className="mt-10">
        <InputGroup>
          <InputLeftElement className="mt-1" pointerEvents="none">
            <Icon color="black" as={AiOutlineSearch} boxSize="6" />
          </InputLeftElement>
          <Input
            bgColor="white"
            type="text"
            height="50"
            placeholder="Search NFT's by project"
          />
        </InputGroup>
        <Button
          colorScheme="telegram"
          className="w-full p-2 mt-5"
          onClick={() => {}}
        >
          Doris Search
        </Button>
      </div>
    </div>
  );
};

export default SearchNftSection;
