import React from "react";
import { Text } from "@chakra-ui/react";

import NftTable from "../../../components/Common/NftTable";

const SelectNftSection = ({ nfts, isLoading }) => {
  return (
    <div className="sm:w-full lg:w-7/12 mb-12">
      <Text
        fontSize={["sm", "md", "lg", "xl"]}
        className="text-sky-500 text-center"
      >
        Select NFT to evaluate
      </Text>
      <div>
        <NftTable nfts={nfts} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default SelectNftSection;
