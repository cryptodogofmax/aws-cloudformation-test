import { Outlet } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";

import Footer from "./Footer";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const BasePage = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-row">
        {!isMobile && (
          <div className="w-32">
            <SideBar />
          </div>
        )}
        <div className="w-full">
          <div className="justify-end">
            <TopBar />
          </div>
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BasePage;
