import React from "react";
import PriceHistoryGraph from "../../SingleValueAnalytics/components/PriceHistoryGraph";
import TransactionHistory from "../../../components/Common/TransactionHistory";

const StatisticsSection = () => {
  return (
    <div>
      <div className="mb-5">
        <TransactionHistory />
      </div>
      <PriceHistoryGraph />
    </div>
  );
};

export default StatisticsSection;
