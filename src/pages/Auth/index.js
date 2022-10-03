import { Box, Checkbox, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

import { Logo, NftLogo, NusLogo, OpenSeaLogo } from "../../assets/images";
import LoginForm from "../../components/Auth/LoginForm";
import SignupForm from "../../components/Auth/SignupForm";
import TopBar from "../../components/Common/TopBar";

function Auth() {
  const [action, setAction] = useState("login");

  return (
    <Box className="bg-black">
      <TopBar />
      <div className="flex flex-row flex-wrap">
        <Stack className="lg:w-7/12 md:w-full items-center">
          <Image src={Logo} className="w-1/2" />
          <Stack direction="row">
            <Text className="text-sky-500 font-bold text-6xl">DORIS</Text>
            <Text className="text-white font-bold text-6xl">Analytics</Text>
          </Stack>
          <Text className="text-white text-3xl font-semibold px-5 text-center pt-10">
            The most comprehensive NFT Analytics platform in the market
          </Text>
          <Stack direction="row" className="justify-between px-12 pt-5">
            <Image src={NusLogo} className="w-1/5" fit="contain" />
            <Image src={OpenSeaLogo} className="w-3/12" fit="contain" />
            <Image src={NftLogo} className="w-1/12" fit="contain" />
          </Stack>
        </Stack>
        <Stack className="lg:w-5/12 md:w-full pt-5 px-10 pb-10">
          <div className="w-10/12">
            <div>
              {action === "login" ? (
                <LoginForm setAction={setAction} />
              ) : (
                <SignupForm setAction={setAction} />
              )}
              <Stack direction="row" className="justify-between py-5">
                <Checkbox size="lg">
                  <Text className="text-white text-lg hover:underline cursor-pointer">
                    Remember me
                  </Text>
                </Checkbox>
                <Text className="text-sky-500 text-lg hover:underline cursor-pointer">
                  Forgot Password?
                </Text>
              </Stack>
            </div>
            <Stack className="items-center mt-10">
              <Text className="text-sky-500">Or Login With</Text>
              <Stack direction="row" spacing="12">
                <Icon
                  as={AiOutlineGoogle}
                  boxSize="12"
                  color="blue.500"
                  className="cursor-pointer"
                />
                <Icon
                  as={FaFacebookF}
                  boxSize="10"
                  color="blue.500"
                  className="cursor-pointer"
                />
              </Stack>
            </Stack>
          </div>
        </Stack>
      </div>
    </Box>
  );
}

export default Auth;
