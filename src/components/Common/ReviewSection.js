import { Icon, Text, Box, useDimensions } from "@chakra-ui/react";
import { useRef } from "react";
import { AiFillStar } from "react-icons/ai";

const ReviewType = ({ ratingNumber, percentage }) => {
  const parentRef = useRef();
  const dimensions = useDimensions(parentRef);

  return (
    <div className="flex flex-row items-center">
      <Text color="white" className="mr-1">
        {ratingNumber}
      </Text>
      <Icon className="mr-2" as={AiFillStar} color="orange" boxSize="4" />
      <Box ref={parentRef} className="w-full">
        <Box
          style={{
            width: dimensions && dimensions.borderBox.width * percentage,
            height: 3,
          }}
          bgColor="orange"
          borderRadius="5"
        ></Box>
      </Box>
    </div>
  );
};

const ReviewSection = () => {
  return (
    <div className="mt-5 flex flex-row items-center">
      <div className="w-6/12">
        <div className="flex flex-row items-center justify-center">
          <Text className="font-semibold text-white text-2xl">3.8</Text>
          <Icon className="ml-2" as={AiFillStar} color="orange" boxSize="6" />
        </div>
        <Text className="text-lg text-white text-center">Rarity Score</Text>
      </div>
      <div className="w-6/12">
        {[5, 4, 3, 2, 1].map((ratingNumber) => (
          <ReviewType
            key={ratingNumber}
            ratingNumber={ratingNumber}
            percentage={0.1 * ratingNumber}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
