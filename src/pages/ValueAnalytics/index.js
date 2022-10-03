import React, { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";

import SearchNftSection from "./components/SearchNftSection";
import SelectNftSection from "./components/SelectNftSection";
import NftValueAnalysisController from "../../controllers/NftValueAnalysisController";

const ValueAnalytics = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [nfts, setNfts] = useState([]);

  const getData = async () => {
    setIsLoading(true);
    const data = await NftValueAnalysisController.getAssetsInCollection();
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
          NFT VALUE ANALYTICS
        </Text>
        <div className="flex sm:flex-col lg:flex-row mt-10 justify-center">
          <SelectNftSection nfts={nfts} isLoading={isLoading} />
          <SearchNftSection />
        </div>
      </div>
    </div>
  );
};

export default ValueAnalytics;
