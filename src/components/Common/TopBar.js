import {
  Image,
  Stack,
  Text,
  Drawer,
  IconButton,
  DrawerBody,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  useMediaQuery,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { HamburgerIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import { useRef } from "react";

import { MetaMaskLogo, Logo } from "../../assets/images";

const TopBar = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const getConnectWalletComponent = () => {
    return (
      <Stack
        direction="row"
        className={`items-center ${isMobile ? "" : "mr-20"}`}
      >
        <Image src={MetaMaskLogo} className="w-20" />
        <Text className="text-sky-500 font-semibold text-2xl hover:underline cursor-pointer">
          Connect Wallet
        </Text>
      </Stack>
    );
  };

  return (
    <div className="flex justify-between items-center pl-8">
      <IconButton
        aria-label="Go back"
        className={isMobile ? "mt-5" : ""}
        colorScheme="telegram"
        disabled={location.pathname === "/"}
        onClick={() => navigate(-1)}
        icon={<ArrowLeftIcon />}
      />
      {isMobile && (
        <div className="mt-2">
          <Image
            src={Logo}
            width={58}
            height={58}
            className="w-24 h-24 cursor-pointer"
            alt="Go back to main page"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
      )}
      {isMobile ? (
        <div>
          <div className="flex flex-row justify-end mt-5 mr-8">
            <IconButton
              aria-label="Open navigation"
              colorScheme="telegram"
              onClick={onOpen}
              icon={<HamburgerIcon />}
              ref={btnRef}
            />
          </div>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton color="white" />

              <DrawerBody style={{ backgroundColor: "black", paddingTop: 24 }}>
                {getConnectWalletComponent()}
                <div className="ml-2 mt-8">
                  <Text className="text-lg text-white mb-2 hover:underline cursor-pointer">
                    About
                  </Text>
                  <Text className="text-lg text-sky-500 hover:underline cursor-pointer">
                    Careers
                  </Text>
                </div>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      ) : (
        <Stack
          direction="row"
          className="items-center justify-end px-20 pt-5 bg-black w-full"
        >
          {getConnectWalletComponent()}
          <Stack direction="row">
            <Text className="text-lg text-white pr-5 hover:underline cursor-pointer">
              About
            </Text>
            <Text className="text-lg text-sky-500 hover:underline cursor-pointer">
              Careers
            </Text>
          </Stack>
        </Stack>
      )}
    </div>
  );
};

export default TopBar;
