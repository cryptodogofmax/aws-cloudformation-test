import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Auth from "../pages/Auth";
import MainMenuRouter from "./MainMenuRouter";

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<MainMenuRouter />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
