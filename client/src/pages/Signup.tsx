import React, { Dispatch, useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  SimpleGrid,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { SignupProps, UserDetails } from "../constants/constants";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/Auth/auth.actions";

const Form1 = ({
  userDetails,
  handleOnChange,
  existingUsername,
}: SignupProps) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        User Registration
      </Heading>
      <Flex>
        <FormControl isRequired mr="5%">
          <FormLabel htmlFor="full-name" fontWeight={"normal"}>
            Full name
          </FormLabel>
          <Input
            id="full-name"
            name="fullname"
            placeholder="Full name"
            onChange={handleOnChange}
            required
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="username" fontWeight={"normal"}>
            Username
          </FormLabel>
          <Input
            id="username"
            name="username"
            outline={existingUsername ? "2px solid red" : ""}
            onChange={handleOnChange}
            placeholder="Username"
            required
          />
          {existingUsername && (
            <FormHelperText color={"red"}>
              Username already taken
            </FormHelperText>
          )}
        </FormControl>
      </Flex>
      <FormControl isRequired mt="2%">
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          Email address
        </FormLabel>
        <Input
          id="email"
          type="email"
          placeholder="Enter Email Address"
          name="email"
          onChange={handleOnChange}
          value={userDetails.email}
          required
        />
        <FormHelperText color={"whiteAlpha.500"}>
          We'll never share your email.
        </FormHelperText>
      </FormControl>

      <FormControl isRequired>
        <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            name="password"
            onChange={handleOnChange}
          />
          <InputRightElement width="5.5rem">
            <Button
              h="1.75rem"
              size={"md"}
              bg={"transparent"}
              color={"black"}
              onClick={handleClick}
            >
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl isRequired mt="2%">
        <FormLabel htmlFor="skills" fontWeight={"normal"}>
          Skills
        </FormLabel>
        <Input
          id="skills"
          type="text"
          name="skills"
          onChange={handleOnChange}
          placeholder="Add your skills"
          required
        />
        <FormHelperText color={"whiteAlpha.500"}>
          Seperate each of your skill with a comma( , )
        </FormHelperText>
      </FormControl>
    </>
  );
};

const Form2 = ({ userDetails, handleOnChange }: SignupProps) => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Geek Handles
      </Heading>
      <FormControl isRequired as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="github"
          fontSize="sm"
          fontWeight="md"
          color="white"
          mt="2%"
        >
          GitHub
        </FormLabel>
        <Input
          isRequired
          type="text"
          name="github"
          id="github"
          autoComplete="github"
          focusBorderColor="white.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          placeholder="Enter github profile url"
          onChange={handleOnChange}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="linkedin"
          fontSize="sm"
          fontWeight="md"
          color="white"
          mt="2%"
        >
          LinkedIn
        </FormLabel>
        <Input
          type="text"
          name="linkedin"
          id="linkedin"
          onChange={handleOnChange}
          autoComplete="linkedin"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          placeholder="Enter linkedin profile url"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="leetcode"
          fontSize="sm"
          fontWeight="md"
          color="white"
          mt="2%"
        >
          Leetcode
        </FormLabel>
        <Input
          type="text"
          name="leetcode"
          onChange={handleOnChange}
          id="leetcode"
          autoComplete="leetcode"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          placeholder="Enter leetcode profile url"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="gfg"
          fontSize="sm"
          fontWeight="md"
          color="white"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          GeeksForGeeks
        </FormLabel>
        <Input
          type="text"
          name="gfg"
          onChange={handleOnChange}
          id="gfg"
          autoComplete="gfg"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          placeholder="Enter geeksforgeeks profile url"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="hackerrank"
          fontSize="sm"
          fontWeight="md"
          color="white"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          HackerRank
        </FormLabel>
        <Input
          type="text"
          name="hackerrank"
          id="hackerrank"
          onChange={handleOnChange}
          autoComplete="hackerrank"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          placeholder="Enter hackerrank profile url"
        />
      </FormControl>
      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="codechef"
          fontSize="sm"
          fontWeight="md"
          color="white"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          CodeChef
        </FormLabel>
        <Input
          type="text"
          name="codechef"
          id="codechef"
          onChange={handleOnChange}
          autoComplete="codechef"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          placeholder="Enter codechef profile url"
        />
      </FormControl>
    </>
  );
};

const Form3 = ({ userDetails, handleOnChange }: SignupProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");

  const convertBase64 = (file: any): any => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = () => {
        reject(fileReader.error);
      };
    });
  };

  const uploadImage = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setLoading(true);
    axios
      .post("http://localhost:8080/uploadImage", { image: base64 })
      .then((res) => {
        setUrl(res.data);
        userDetails.profile_picture = res.data;
        alert("image uploaded");
      })
      .then(() => setLoading(false))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal">
        Geeky Description
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl isRequired id="email" mt={1}>
          <FormLabel fontSize="sm" fontWeight="md" color="white">
            About
          </FormLabel>
          <Textarea
            placeholder="A full-stack engineer looking for real-world problems. Having a passion for learning and sharing knowledge with others. Passionate about Java, Nodejs, etc."
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            name="about_me"
            onChange={handleOnChange}
            fontSize={{
              sm: "sm",
            }}
          />
          <FormHelperText>
            Brief description for your profile. URLs are hyperlinked.
          </FormHelperText>
        </FormControl>
        <Flex
          border={"1px dotted white"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {/* Arpit mishra to start working from here && not above this line */}
          <Input type={"file"} onChange={uploadImage} />
          {/* {url && <img src={url} />} - for conditional rendering */}
        </Flex>
      </SimpleGrid>
    </>
  );
};

export default function Signup() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [userDetails, setUserDetails] = useState<UserDetails>({
    fullname: "",
    username: "",
    email: "",
    password: "",
    skills: [],
    github: "",
    linkedin: "",
    about_me: "",
    leetcode: "",
    gfg: "",
    hackerRank: "",
    codeChef: "",
    is_admin: false,
    no_of_problems: 0,
    easy: 0,
    medium: 0,
    hard: 0,
    no_of_contests: 0,
    verified: false,
    profile_picture: "",
  });

  const [existingUsername, setExistingUsername] = useState<boolean>(false);

  const dispatch: Dispatch<any> = useDispatch();

  const handleOnChange = (e: any): void => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "username") {
      axios
        .get(`http://localhost:8080/users?q=${value}`)
        .then((res) => {
          if (res.data.users.length > 0) {
            setExistingUsername(true);
          } else {
            setExistingUsername(false);
          }
        })
        .catch((err) => console.log(err));
    }

    if (name === "skills") {
      value = value.split(",");
    }

    setUserDetails((values) => ({ ...values, [name]: value }));
  };

  const handleOnSubmit = () => {
    dispatch(registerUser(userDetails));

    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
        bg={"#1a202c"}
        color={"white"}
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
          colorScheme={"purple"}
        ></Progress>
        {step === 1 ? (
          <Form1
            userDetails={userDetails}
            handleOnChange={handleOnChange}
            existingUsername={existingUsername}
          />
        ) : step === 2 ? (
          <Form2 userDetails={userDetails} handleOnChange={handleOnChange} />
        ) : (
          <Form3 userDetails={userDetails} handleOnChange={handleOnChange} />
        )}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="purple"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="purple"
                variant="outline"
                disabled={existingUsername}
              >
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={handleOnSubmit}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
