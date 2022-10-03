import { Image, Icon } from "@chakra-ui/react";
import { FaUserCircle, FaFireAlt } from "react-icons/fa";
import { RiMoneyDollarCircleLine, RiSendPlaneLine } from "react-icons/ri";
import { ImNewspaper } from "react-icons/im";
import { BsGear } from "react-icons/bs";
import { AiOutlinePoweroff } from "react-icons/ai";
import { HiLightBulb } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import { Logo } from "../../assets/images";

const FEATURE_ICONS = [
  FaUserCircle,
  RiMoneyDollarCircleLine,
  FaFireAlt,
  ImNewspaper,
  RiSendPlaneLine,
];
const ACCOUNT_ICONS = [BsGear, AiOutlinePoweroff, HiLightBulb];

const FEATURE_LINKS = [
  "/account",
  "/account",
  "/account",
  "/account",
  "/account",
];

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <div className="p-5" style={{ width: 90 }}>
      <Image
        src={Logo}
        width={50}
        height={50}
        className="w-24 h-24 cursor-pointer"
        alt="Go back to main page"
        onClick={() => {
          navigate("/");
        }}
      />
      {/* <Text as='b'  color='rgb(14 165 233);' style={{ display: "flex", textAlign: "center"}}>Doris Analytics Platform</Text> */}
      <div className="mt-20 flex flex-col">
        {FEATURE_ICONS.map((icon, index) => (
          <Icon
            key={index}
            className="cursor-pointer mt-5"
            color="white"
            as={icon}
            boxSize="6"
            onClick={() => navigate(FEATURE_LINKS[index])}
          />
        ))}
      </div>

      <div className="mt-40 flex flex-col">
        {ACCOUNT_ICONS.map((icon, index) => (
          <Icon
            key={index}
            className="cursor-pointer mt-5"
            color="blue.500"
            as={icon}
            boxSize="6"
          />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
