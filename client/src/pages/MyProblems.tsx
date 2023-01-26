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
  chakra,
  TabPanels,
  TabPanel,
  Button,
  Tooltip,
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Textarea,
  Select,
  Stack,
  VisuallyHidden,
  InputGroup,
  InputLeftAddon,
  useToast,
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
import React, { useEffect, Dispatch, useRef, useState } from "react";
import Easy from "../components/Easy";
import AllProblems from "../components/AllProblems";
import Medium from "../components/Medium";
import Hard from "../components/Hard";
import CustomProblems from "../components/CustomProblems";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../constants/constants";
import { getUserDetails } from "../store/Auth/auth.actions";
import { Problem } from "../constants/Store/Problems/problems.types";
import { postMyProblem } from "../store/Problems/problems.actions";

const MyProblems = () => {
  const { userDetails, username } = useSelector((store: State) => store.auth);
  const { isLoading, isError, isPostSuccess, problems } = useSelector(
    (store: State) => store.problems
  );
  const dispatch: Dispatch<any> = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [problemData, setProblemData] = useState<Problem>({
    userId: "",
    problem_url: "",
    platform_name: "",
    problem_name: "",
    description: "",
    textual_approach: "",
    pictorial_approach: "",
    textual_reference: "",
    video_reference: "",
    solution_code: "",
    language_used: "",
    difficulty: "",
  });
  const toast = useToast();

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const addNewProblem = (): void => {
    onOpen();
  };
  if (isPostSuccess) {
    toast({
      title: "Problem Added",
      status: "success",
      position: "top",
      variant: "subtle",
      containerStyle: {
        backgroundColor: "purple.700",
        borderRadius: "md",
      },
      duration: 3000,
      isClosable: true,
    });
  }
  const handleOnChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const name = e.target.name;
    const value = e.target.value;
    setProblemData((values) => ({ ...values, [name]: value }));
  };

  const handleOnSubmit = () => {
    problemData.userId = userDetails?._id;
    dispatch(postMyProblem(problemData));
  };

  useEffect(() => {
    if (!userDetails) {
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
          _hover={{ bgColor: "purple.500" }}
          borderRadius={"3xl"}
          onClick={addNewProblem}
        >
          <VscNewFile color="white" size={20} />
        </Button>
      </Tooltip>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={"6xl"}
      >
        <ModalOverlay />
        <ModalContent m="auto">
          <ModalHeader
            textAlign={"center"}
            fontSize={25}
            textDecoration={"underline"}
          >
            Add New Problem
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex w={"100%"} m="auto">
              <Box w={"50%"}>
                <FormControl>
                  <FormLabel fontSize={20}>Problem Url</FormLabel>
                  <InputGroup size="sm">
                    <InputLeftAddon
                      bg="gray.50"
                      _dark={{
                        bg: "gray.800",
                      }}
                      color="gray.500"
                      rounded="md"
                    >
                      http://
                    </InputLeftAddon>
                    <Input
                      type="tel"
                      name="problem_url"
                      onChange={(e) => handleOnChange(e)}
                      placeholder="www.example.com"
                      w={"68%"}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl mt={2}>
                  <FormLabel fontSize={20}>Platform Name</FormLabel>
                  <Select
                    name="platform_name"
                    onChange={handleOnChange}
                    placeholder="please select"
                    w={"80%"}
                  >
                    <option value="leetcode">leetcode</option>
                    <option value="gfg">gfg</option>
                    <option value="hackerRank">hackerRank</option>
                    <option value="codeChef">codeChef</option>
                    <option value="hackerearth">hackerearth</option>
                  </Select>
                </FormControl>

                <FormControl mt={2}>
                  <FormLabel fontSize={20}>Problem Name</FormLabel>
                  <Input
                    name="problem_name"
                    onChange={handleOnChange}
                    placeholder="Problem name"
                    w={"80%"}
                  />
                </FormControl>

                <FormControl mt={2}>
                  <FormLabel fontSize={20}>Description</FormLabel>
                  <Textarea
                    name="description"
                    onChange={handleOnChange}
                    placeholder="write a description for problem"
                    w={"80%"}
                  />
                </FormControl>

                <FormControl mt={2}>
                  <FormLabel fontSize={20}>Textual Approach</FormLabel>
                  <Textarea
                    name="textual_approach"
                    onChange={handleOnChange}
                    placeholder="write a textual_reference for problem"
                    w={"80%"}
                  />
                </FormControl>

                <FormControl mt={2}>
                  <FormLabel fontSize={20}>Language Used</FormLabel>
                  <Select
                    name="language_used"
                    onChange={handleOnChange}
                    placeholder="please select"
                    w={"80%"}
                  >
                    <option value="Javascript">Javascript</option>
                    <option value="Java">Java</option>
                    <option value="C">C</option>
                    <option value="C++">C++</option>
                    <option value="TypeScript">TypeScript</option>
                    <option value="PHP">PHP</option>
                    <option value="Python">Python</option>
                    <option value="Perl">Perl</option>
                    <option value="Rust">Rust</option>
                    <option value="Ruby">Ruby</option>
                  </Select>
                </FormControl>
              </Box>
              <Box w={"50%"}>
                <FormControl>
                  <FormLabel fontSize={20}>Pictorial Reference</FormLabel>
                  <Flex
                    w={"80%"}
                    mt={1}
                    justify="center"
                    borderWidth={2}
                    _dark={{
                      color: "gray.500",
                    }}
                    borderStyle="dashed"
                    rounded="md"
                  >
                    <Stack spacing={1} textAlign="center">
                      <Icon
                        mx="auto"
                        boxSize={12}
                        color="black"
                        _dark={{
                          color: "white",
                        }}
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </Icon>
                      <Flex
                        fontSize="sm"
                        color="gray.600"
                        _dark={{
                          color: "gray.400",
                        }}
                        alignItems="baseline"
                      >
                        <chakra.label
                          htmlFor="file-upload"
                          cursor="pointer"
                          rounded="md"
                          fontSize="md"
                          color="brand.600"
                          _dark={{
                            color: "brand.200",
                          }}
                          pos="relative"
                          _hover={{
                            color: "brand.400",
                            _dark: {
                              color: "brand.300",
                            },
                          }}
                        >
                          <span>Upload a file</span>
                          <VisuallyHidden>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                            />
                          </VisuallyHidden>
                        </chakra.label>
                        <Text pl={1}>or drag and drop</Text>
                      </Flex>
                      <Text
                        fontSize="xs"
                        _dark={{
                          color: "gray.400",
                        }}
                      >
                        PNG, JPG, GIF up to 10MB
                      </Text>
                    </Stack>
                  </Flex>
                </FormControl>

                <FormControl mt={2}>
                  <FormLabel fontSize={20}>Textual Reference</FormLabel>
                  <InputGroup size="sm">
                    <InputLeftAddon
                      bg="gray.50"
                      _dark={{
                        bg: "gray.800",
                      }}
                      color="gray.500"
                      rounded="md"
                    >
                      http://
                    </InputLeftAddon>
                    <Input
                      type="tel"
                      name="textual_reference"
                      onChange={handleOnChange}
                      placeholder="www.example.com"
                      w={"68%"}
                    />
                  </InputGroup>
                </FormControl>

                <FormControl mt={2}>
                  <FormLabel fontSize={20}>Video Reference</FormLabel>
                  <InputGroup size="sm">
                    <InputLeftAddon
                      bg="gray.50"
                      _dark={{
                        bg: "gray.800",
                      }}
                      color="gray.500"
                      rounded="md"
                    >
                      http://
                    </InputLeftAddon>
                    <Input
                      type="tel"
                      name="video_reference"
                      onChange={handleOnChange}
                      placeholder="www.example.com"
                      w={"68%"}
                    />
                  </InputGroup>
                </FormControl>

                <FormControl mt={2}>
                  <FormLabel fontSize={20}>Solution Code</FormLabel>
                  <Textarea
                    name="solution_code"
                    onChange={handleOnChange}
                    placeholder="Enter your code"
                    w={"80%"}
                  />
                </FormControl>

                <FormControl mt={2}>
                  <FormLabel fontSize={20}>Difficulty Level</FormLabel>
                  <Select
                    name="difficulty"
                    onChange={handleOnChange}
                    placeholder="please select"
                    w={"80%"}
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </Select>
                </FormControl>
              </Box>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={handleOnSubmit}
              color={"white"}
              bgColor={"purple.700"}
              isLoading={isLoading}
              mx={3}
              _hover={{ bgColor: "purple.500" }}
              loadingText="Adding"
            >
              Add It
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
