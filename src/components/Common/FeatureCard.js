import { Box, Image, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const FeatureCard = (props) => {
  const { image, desc, name, redirectTo } = props;
  const navigate = useNavigate();

  return (
    <Box
      bgColor="#1c1c1b"
      borderRadius="10"
      height="480"
      p="5"
      pb="10"
      className="w-full flex flex-col justify-between ml-5 mb-5"
    >
      <div>
        <Image
          src={image}
          borderRadius="10"
          height="160"
          width="100%"
          objectFit="cover"
        />
        <Text className="text-white text-lg text-center my-5">{desc}</Text>
      </div>
      <Button
        colorScheme="telegram"
        className="w-full p-2"
        height="50"
        onClick={() => navigate(redirectTo)}
      >
        {name}
      </Button>
    </Box>
  );
};

export default FeatureCard;
