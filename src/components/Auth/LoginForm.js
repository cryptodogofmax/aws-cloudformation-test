import { EmailIcon } from "@chakra-ui/icons";
import {
  Button,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { withFormik } from "formik";
import { AiOutlineKey } from "react-icons/ai";

const LoginFormTemplate = (props) => {
  const { values, handleChange, handleBlur, handleSubmit, setAction } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Text className="text-3xl text-sky-500 font-semibold mt-10 mb-5">
        WELCOME BACK
      </Text>
      <Text className="text-white text-lg">
        Explore a new world of insights on NFT's based on cutting edge Machine
        Learning algorithms!
      </Text>
      <InputGroup className="mt-20">
        <InputLeftElement mt="1" pointerEvents="none">
          <EmailIcon color="gray.300" />
        </InputLeftElement>
        <Input
          borderColor="blue.500"
          focusBorderColor="blue.500"
          color="white"
          type="email"
          placeholder="Email"
          borderBottomRightRadius="0"
          borderBottomLeftRadius="0"
          size="lg"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
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
          placeholder="Password"
          borderTopLeftRadius="0"
          borderTopRightRadius="0"
          size="lg"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
      </InputGroup>
      <div className="flex flex-row justify-between py-5 mt-20">
        <Button
          className="w-1/2 mr-5"
          height="50"
          colorScheme="telegram"
          type="submit"
        >
          Login
        </Button>
        <Button
          className="w-1/2 ml-5"
          height="50"
          variant="outline"
          color="blue.500"
          borderColor="blue.500"
          onClick={() => setAction("signup")}
        >
          Create Account
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

const LoginForm = withFormik({
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
  displayName: "LoginForm",
})(LoginFormTemplate);

export default LoginForm;
