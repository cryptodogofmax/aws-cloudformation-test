import {
  Text,
  InputGroup,
  Input,
  InputLeftElement,
  Icon,
  Button,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { AiOutlineKey } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { withFormik } from "formik";

const SignupFormTemplate = (props) => {
  const { handleSubmit, setAction } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Text className="text-3xl text-sky-500 font-semibold mt-10 mb-5">
        SIGN UP
      </Text>
      <Text className="text-white text-lg">
        Explore a new world of insights on NFT's based on cutting edge Machine
        Learning algorithms!
      </Text>
      <InputGroup className="mt-20">
        <InputLeftElement mt="1" pointerEvents="none">
          <BsFillPersonFill color="white" />
        </InputLeftElement>
        <Input
          borderColor="blue.500"
          focusBorderColor="blue.500"
          color="white"
          type="text"
          placeholder="Enter your full name"
          borderBottomRightRadius="0"
          borderBottomLeftRadius="0"
          size="lg"
        />
      </InputGroup>

      <InputGroup>
        <InputLeftElement mt="1" pointerEvents="none">
          <EmailIcon color="gray.300" />
        </InputLeftElement>
        <Input
          borderColor="blue.500"
          focusBorderColor="blue.500"
          color="white"
          type="email"
          placeholder="Enter your primary email address"
          borderRadius="0"
          size="lg"
        />
      </InputGroup>

      <InputGroup>
        <InputLeftElement mt="1" pointerEvents="none">
          <Icon as={AiOutlineKey} color="gray.300" />
        </InputLeftElement>
        <Input
          borderColor="blue.500"
          focusBorderColor="blue.500"
          type="password"
          color="white"
          placeholder="Enter your password"
          borderRadius="0"
          size="lg"
        />
      </InputGroup>

      <InputGroup>
        <InputLeftElement mt="1" pointerEvents="none">
          <Icon as={AiOutlineKey} color="gray.300" />
        </InputLeftElement>
        <Input
          borderColor="blue.500"
          focusBorderColor="blue.500"
          type="password"
          color="white"
          placeholder="Re-enter your password"
          borderTopLeftRadius="0"
          borderTopRightRadius="0"
          size="lg"
        />
      </InputGroup>
      <div className="flex flex-row justify-between py-5 mt-20">
        <Button
          className="w-1/2 mr-5"
          height="50"
          colorScheme="telegram"
          type="submit"
        >
          Create Account
        </Button>
        <Button
          className="w-1/2 ml-5"
          height="50"
          variant="outline"
          color="blue.500"
          borderColor="blue.500"
          onClick={() => setAction("login")}
        >
          Back To Login
        </Button>
      </div>
    </form>
    // <form onSubmit={handleSubmit}>
    //   <input
    //     type="text"
    //     onChange={handleChange}
    //     onBlur={handleBlur}
    //     value={values.name}
    //     name="name"
    //   />
    //   {errors.name && touched.name && <div id="feedback">{errors.name}</div>}
    //   <button type="submit">Submit</button>
    // </form>
  );
};
const SignupForm = withFormik({
  mapPropsToValues: () => ({ email: "", password: "" }),

  validate: (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    }

    return errors;
  },
  handleSubmit: (values) => {
    console.log(values);
  },
  displayName: "SignupForm",
})(SignupFormTemplate);

export default SignupForm;
