import { Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LEFT_ROUTES = [
  { path: "/help", name: "Help", isBlue: true },
  { path: "/business", name: "Business" },
];
const RIGHT_ROUTES = [
  { path: "/privacy", name: "Privacy", isBlue: true },
  { path: "/terms", name: "Terms" },
  { path: "/settings", name: "Settings" },
];

const Footer = () => {
  const navigate = useNavigate();

  const getClassname = (route) => {
    const baseClassName = "text-lg cursor-pointer hover:underline";
    if (route.isBlue) {
      return "text-sky-500 " + baseClassName;
    }

    return "text-white " + baseClassName;
  };

  return (
    <div className="flex flex-row py-10 flex-wrap justify-between">
      <Stack direction="row" spacing="8" px="20" mr="8">
        {LEFT_ROUTES.map((route, index) => (
          <Text
            key={index}
            className={getClassname(route)}
            onClick={() => navigate(route.path)}
          >
            {route.name}
          </Text>
        ))}
      </Stack>
      <Stack direction="row" spacing="8" px="20">
        {RIGHT_ROUTES.map((route, index) => (
          <Text
            key={index}
            className={getClassname(route)}
            onClick={() => navigate(route.path)}
          >
            {route.name}
          </Text>
        ))}
      </Stack>
    </div>
  );
};

export default Footer;
