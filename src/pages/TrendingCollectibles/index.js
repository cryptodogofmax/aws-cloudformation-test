import React, { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";

//import NftValueAnalysisController from "../../controllers/NftValueAnalysisController";
import TrendingNftSection from "./components/TrendingNftSection";
import TrendingBlockchainSection from "./components/TrendingBlockchainSection";
import { makeNftData } from "../../utils/makeData";

const TrendingCollectibles = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [nfts, setNfts] = useState([]);

  const getData = async () => {
    setIsLoading(true);
    const data = makeNftData(10); //await NftValueAnalysisController.getAssetsInCollection();
    setIsLoading(false);
    setNfts(
      data.map((d) => ({
        ...d,
        price: d.last_sale
          ? parseFloat(d.last_sale.payment_token.usd_price)
          : 0,
      }))
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mt-10">
      <div className="justify-center">
        <Text
          fontSize={["sm", "md", "lg", "xl"]}
          className="font-bold text-white text-center"
        >
          TRENDING COLLECTIONS
        </Text>
        <div className="flex lg:flex-row sm:flex-col justify-center mt-10">
          <TrendingNftSection nfts={nfts} isLoading={isLoading} />
          <TrendingBlockchainSection />
        </div>
      </div>
    </div>
  );
};

export default TrendingCollectibles;
