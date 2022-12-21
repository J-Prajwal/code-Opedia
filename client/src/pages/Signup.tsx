import React, { useState } from "react";
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
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Form1 = () => {
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
          <Input id="full-name" placeholder="Full name" required />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="username" fontWeight={"normal"}>
            Username
          </FormLabel>
          <Input id="username" placeholder="Username" required />
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
          required
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
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
        <Input id="skills" type="text" placeholder="Add your skills" required />
        <FormHelperText>
          Seperate each of your skill with a comma( . )
        </FormHelperText>
      </FormControl>
    </>
  );
};

const Form2 = () => {
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

const Form3 = () => {
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
            fontSize={{
              sm: "sm",
            }}
          />
          <FormHelperText>
            Brief description for your profile. URLs are hyperlinked.
          </FormHelperText>
        </FormControl>
      </SimpleGrid>
    </>
  );
};

export default function Signup() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
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
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
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
              >
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: "Account created.",
                    description: "We've created your account for you.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  });
                }}
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
