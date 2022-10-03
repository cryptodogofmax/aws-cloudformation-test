import React from "react";
import { Text } from "@chakra-ui/react";

import NftTable from "../../../components/Common/NftTable";

const TrendingNftSection = ({ nfts, isLoading }) => {
  return (
    <div className="sm:w-full lg:w-7/12 mb-12">
      <Text
        fontSize={["sm", "md", "lg", "xl"]}
        className="text-sky-500 text-center"
      >
        Trending NFTs
      </Text>
      <div>
        <NftTable nfts={nfts} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default TrendingNftSection;
