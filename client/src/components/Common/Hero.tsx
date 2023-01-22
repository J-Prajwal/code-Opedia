import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import styles from "../../styles/Hero.module.css";
import {
  SiLeetcode,
  SiHackerrank,
  SiHackerearth,
  SiCodechef,
  SiCodingninjas,
  SiSlack,
  SiMetabase,
  SiFacebook,
  SiCloudbees,
  SiGithub,
} from "react-icons/si";

const Hero = () => {
  return (
    <>
      <Flex
        px={20}
        flexWrap={["wrap-reverse", "wrap-reverse", "wrap"]}
        justifyContent={["center", "center", "space-between"]}
      >
        <VStack alignItems={"flex-start"} w={"80vh"}>
          <Heading
            pb={10}
            fontWeight={"semibold"}
            textTransform={"capitalize"}
            size={"3xl"}
          >
            Master Your Coding Skills with code'Opedia
          </Heading>
          <Heading size={"md"} fontWeight={"light"} color={"gray.500"}>
            If you are a computer science student, code'opedia is the platform
            for you. Maintain your solved DSA questions among all other
            platforms on code'opedia.
          </Heading>
          <HStack pt={5}>
            <Button bgColor={"purple.700"}>Start Your Journey</Button>
          </HStack>
        </VStack>
        <Image
          w={["100%", "100%", "40%"]}
          className={styles.upDownTransition}
          src="https://res.cloudinary.com/des8eyvcg/image/upload/v1674318852/assets/Developer_activity-bro_spmrie.png"
        />
      </Flex>
      <Flex px={20} my={10} flexDir={"column"}>
        <Text fontSize={"xl"} textTransform={"uppercase"} color={"gray.300"}>
          Integrates with
        </Text>
        <Flex mt={5} gap={5}>
          <SiLeetcode color="gray" size={50} />
          <SiHackerrank color="gray" size={50} />
          <SiHackerearth color="gray" size={50} />
          <SiCodechef color="gray" size={50} />
          <SiCodingninjas color="gray" size={50} />
          <SiGithub color="gray" size={50} />
        </Flex>
      </Flex>
    </>
  );
};

export default Hero;
