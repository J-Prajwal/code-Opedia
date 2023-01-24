import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Avatar,
  Box,
  Flex,
  Text,
  Wrap,
  WrapItem,
  Tabs,
  TabList,
  Tab,
  Spacer,
  TabPanels,
  TabPanel,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiChakraui,
  SiTailwindcss,
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub, VscNewFile } from "react-icons/vsc";
import { Divider } from "@chakra-ui/react";
import { useState, useEffect, Dispatch } from "react";
import Easy from "../components/Easy";
import AllProblems from "../components/AllProblems";
import Medium from "../components/Medium";
import Hard from "../components/Hard";
import CustomProblems from "../components/CustomProblems";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../constants/constants";
import { getUserDetails } from "../store/Auth/auth.actions";

const MyProblems = () => {
  const { userDetails, username } = useSelector((store: State) => store.auth);
  const dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    if (!userDetails) {
      console.log(userDetails, username);
      dispatch(getUserDetails(username));
    }
  }, []);
  return (
    <div>
      <Navbar />
      <Tooltip hasArrow label={"Add new problem"} placement="top">
        <Button
          right={0}
          position={"fixed"}
          bgColor={"purple.700"}
          _hover={{
            bgColor: "purple.500",
            pr: "30px",
            transition: "ease-out 0.5s",
            borderRadius: "30% 0 0 30%",
          }}
          borderRadius={"50% 0 0 50%"}
        >
          <VscNewFile color="white" size={20} />
        </Button>
      </Tooltip>
      <Box
        color={"white"}
        w={"80%"}
        m={"auto"}
        mt={"10%"}
        textAlign="center"
        borderRadius={"10%"}
        border={"1px solid #0d7fdf"}
      >
        <Box w={"100%"}>
          <Box display={"flex"} m="auto" mt={"-6%"}>
            <Wrap m={"auto"}>
              <WrapItem>
                <Avatar
                  size="2xl"
                  name="arpit mishra"
                  src={userDetails?.profile_picture}
                />
              </WrapItem>
            </Wrap>
          </Box>
          <Flex mt={5} gap="1%" justifyContent="center" alignItems={"center"}>
            <Text fontSize={22} fontWeight={"bolder"}>
              {userDetails?.fullname}
            </Text>
            <Text fontSize={20}>@code_opedia</Text>
          </Flex>
          <Box mb={"3%"}>
            <Text fontSize={18} mt={2}>
              {userDetails?.about_me}
            </Text>
            <Text
              m={"auto"}
              fontSize={22}
              textDecoration="underline"
              fontWeight={"bolder"}
              mt={2}
            >
              Tech Stack
            </Text>
            <Box className={styles.tech_stacks}>
              <SiJavascript size={"100%"} />
              <SiHtml5 size={"100%"} />
              <DiCss3 size={"100%"} />
              <FaReact size={"100%"} />
              <FaNodeJs size={"100%"} />
              <SiRedux size={"100%"} />
              <DiMongodb size={"100%"} />
              <SiExpress size={"100%"} />
              <SiTailwindcss size={"100%"} />
              <SiMaterialui size={"100%"} />
              <SiChakraui size={"100%"} />
              <VscGithub size={"100%"} />
            </Box>
          </Box>
          <Divider
            orientation="horizontal"
            mt={2}
            borderColor="white"
            w={"80%"}
            m="auto"
          />
          <Flex
            w={"80%"}
            pt={"2%"}
            justifyContent="center"
            gap={"5%"}
            m={"auto"}
          >
            <Box w={"40%"} minH={"80px"}>
              <Text fontWeight={"bold"} fontSize={22}>
                Easy
              </Text>
              <Text fontWeight={"semibold"} fontSize={20}>
                {userDetails?.easy}
              </Text>
            </Box>
            <Box w={"50%"} borderLeft="2px solid" borderRight="2px solid">
              <Text fontWeight={"bold"} fontSize={22}>
                Medium
              </Text>
              <Text fontWeight={"semibold"} fontSize={20}>
                {userDetails?.medium}
              </Text>
            </Box>
            <Box w={"40%"}>
              <Text fontWeight={"bold"} fontSize={22}>
                Hard
              </Text>
              <Text fontWeight={"semibold"} fontSize={20}>
                {userDetails?.hard}
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box mt={"5%"} w={"80%"} m={"auto"} mb={"5%"}></Box>
      </Box>
      <Tabs
        width={"90%"}
        m={"auto"}
        mt={10}
        defaultIndex={0}
        borderBottomColor="transparent"
      >
        <TabList>
          <Tab
            py={4}
            m={0}
            _focus={{
              boxShadow: "none",
            }}
          >
            All Problems
          </Tab>
          <Tab
            py={4}
            m={0}
            _focus={{
              boxShadow: "none",
            }}
          >
            Easy
          </Tab>
          <Tab
            py={4}
            m={0}
            _focus={{
              boxShadow: "none",
            }}
          >
            Medium
          </Tab>
          <Tab
            py={4}
            m={0}
            _focus={{
              boxShadow: "none",
            }}
          >
            Hard
          </Tab>
          <Tab py={4} m={0}>
            Custom
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <AllProblems />
          </TabPanel>
          <TabPanel>
            <Easy />
          </TabPanel>
          <TabPanel>
            <Medium />
          </TabPanel>
          <TabPanel>
            <Hard />
          </TabPanel>
          <TabPanel>
            <CustomProblems />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Footer />
    </div>
  );
};

export default MyProblems;
