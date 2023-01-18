import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  useToast,
} from "@chakra-ui/react";
import { Dispatch, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/Auth/auth.actions";
import { AuthInitialState, AuthReducer, Store } from "../constants/constants";
import { useNavigate } from "react-router-dom";

type Creds = {
  email: string;
  password: string;
};

export default function Login() {
  const dispatch: Dispatch<any> = useDispatch();
  const [creds, setCreds] = useState<Creds>({ email: "", password: "" });
  const toast = useToast();
  const navigate = useNavigate();

  const handleOnChange = (e: any): void => {
    const name = e.target.name;
    const value = e.target.value;

    setCreds((values) => ({ ...values, [name]: value }));
  };
  const handleOnSubmit = async () => {
    let authSuccess: any = await dispatch(loginUser(creds));
    if (authSuccess) {
      navigate("/my-problems");
      return toast({
        title: "Logged In",
        description: "This is a start of something really great.",
        status: "success",
        position: "bottom",
        variant: "subtle",
        containerStyle: {
          backgroundColor: "purple.700",
          borderRadius: "md",
        },
        duration: 3000,
        isClosable: true,
      });
    } else {
      return toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "error",
        position: "bottom",
        variant: "subtle",
        containerStyle: {
          backgroundColor: "purple.700",
          borderRadius: "md",
        },
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" name="email" onChange={handleOnChange} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" name="password" onChange={handleOnChange} />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={"blue.500"}>Forgot password?</Link>
            </Stack>
            <Button
              onClick={handleOnSubmit}
              colorScheme={"blue"}
              variant={"solid"}
            >
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex>
    </Stack>
  );
}
