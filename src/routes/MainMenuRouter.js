import React from "react";
import { Route, Routes } from "react-router-dom";

import BasePage from "../components/Common/BasePage";
import Account from "../pages/Account";
import MainMenu from "../pages/MainMenu";
import SingleValueAnalytics from "../pages/SingleValueAnalytics";
import TrendEngine from "../pages/TrendEngine";
import TrendingArtists from "../pages/TrendingArtists";
import TrendingCollectibles from "../pages/TrendingCollectibles";
import TrendingTopics from "../pages/TrendingTopics";
import TrendingWallets from "../pages/TrendingWallets";
import ValueAnalytics from "../pages/ValueAnalytics";

const MainMenuRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<BasePage />}>
        <Route path="/" element={<MainMenu />} />

        {/* Trend Engine Routes */}
        <Route path="/trend-engine" element={<TrendEngine />} />
        <Route path="/trend-engine/topics" element={<TrendingTopics />} />
        <Route path="/trend-engine/artists" element={<TrendingArtists />} />
        <Route path="/trend-engine/wallets" element={<TrendingWallets />} />
        <Route
          path="/trend-engine/collectibles"
          element={<TrendingCollectibles />}
        />

        {/* Value Analytics Routes */}
        <Route path="/value-analytics" element={<ValueAnalytics />} />
        <Route path="/value-analytics/:id" element={<SingleValueAnalytics />} />

        {/* Account Routes */}
        <Route path="/account" element={<Account />} />
      </Route>
    </Routes>
  );
};

export default MainMenuRouter;
