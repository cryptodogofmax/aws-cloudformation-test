import React from "react";
import {
  Divider,
  Text,
  Image,
  Stack,
  Button,
  InputGroup,
  Input,
  Icon,
  InputLeftElement,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { VictoryPie, VictoryLabel } from "victory";

const ProjectSentimentSection = () => {
  return (
    <div className="w-72 p-5 pt-10">
      <Text className="text-sky-500 font-bold mb-5">
        Specific Project Sentiment
      </Text>
      <Divider />
      <div className="mt-5">
        <Stack
          className="p-2 pb-4 rounded-md bg-slate-700 items-center"
          spacing="6"
        >
          <Image src="https://wp-api.zipmex.com/wp-content/uploads/2022/03/Cryptopunk-.jpeg" />
          <Text className="text-white font-semibold">CryptoPunks</Text>
        </Stack>
      </div>
      <div className="mt-2">
        <Stack direction="row" className="items-center justify-between">
          <Text className="text-green-700 font-semibold">
            Bearish Sentiment Score
          </Text>

          <svg width={150} height={100}>
            <VictoryPie
              standalone={false}
              width={100}
              height={100}
              radius={40}
              innerRadius={25}
              data={[
                { x: "Sell", y: 67 },
                { x: "Buy", y: 33 },
              ]}
              colorScale={["#257000", "#4f4f4f"]}
              labels={() => null}
            />
            <VictoryLabel
              textAnchor="middle"
              style={{ fontSize: 15, fill: "white" }}
              x={50}
              y={50}
              text="67%"
            />
          </svg>
        </Stack>
      </div>
      <div className="mt-5">
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

export default ProjectSentimentSection;
