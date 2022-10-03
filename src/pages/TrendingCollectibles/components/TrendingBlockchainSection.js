import React from "react";
import { Text } from "@chakra-ui/react";

const embeddings =
  '<div style="height:669px; background-color: #1D2330; overflow:hidden; box-sizing: border-box; border: 1px solid #282E3B; border-radius: 4px; text-align: right; line-height:14px; font-size: 12px; font-feature-settings: normal; text-size-adjust: 100%; box-shadow: inset 0 -20px 0 0 #262B38; padding: 0px; margin: 0px; width: 100%;"><div style="height:649px; padding:0px; margin:0px; width: 100%;"><iframe src="https://widget.coinlib.io/widget?type=full_v2&theme=dark&cnt=10&pref_coin_id=1505&graph=yes" width="100%" height="645px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0" style="border:0;margin:0;padding:0;"></iframe></div><div style="color: #626B7F; line-height: 14px; font-weight: 400; font-size: 11px; box-sizing: border-box; padding: 2px 6px; width: 100%; font-family: Verdana, Tahoma, Arial, sans-serif;"><a href="https://coinlib.io" target="_blank" style="font-weight: 500; color: #626B7F; text-decoration:none; font-size:11px">Cryptocurrency Prices</a>&nbsp;by Coinlib</div></div>';

const TrendingBlockchainSection = () => {
  return (
    <div className="sm:w-full lg:w-5/12 mr-8">
      <Text
        fontSize={["sm", "md", "lg", "xl"]}
        className="text-sky-500 text-center"
      >
        Trending Blockchains
      </Text>

      <div className="m-5" dangerouslySetInnerHTML={{ __html: embeddings }} />
    </div>
  );
};

export default TrendingBlockchainSection;
