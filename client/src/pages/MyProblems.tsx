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
  InputLeftAddon
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
import {  useEffect, Dispatch, useRef } from "react";
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
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const addNewProblem = () => {
    onOpen();
  };
  useEffect(() => {
    if (!userDetails) {
      console.log(userDetails, username);
      dispatch(getUserDetails(username));
    }
  }, []);
  return (
    <div>
      <Navbar />
      <Tooltip label={"Add new problem"} placement="left">
        <Button
          right={5}
          position={"fixed"}
          bgColor={"purple.700"}
          _hover={{ bgColor: "purple.500" }}
          borderRadius={"3xl"}
          onClick={addNewProblem}
        >
          <VscNewFile color="white" />
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
        <ModalContent m="auto" bg={"#1a202c"}>
          <ModalHeader textAlign={"center"} fontSize={25} color="gray.400">Add New Problem</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex w={"100%"} m="auto">
              <Box w={"50%"} >
              <FormControl>
              <FormLabel color="gray.400" fontSize={20}>Problem Url</FormLabel>
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
                    color="gray.400"
                    placeholder="www.example.com"
                    w={"68%"}
                  />
                </InputGroup>
            </FormControl>
            <FormControl mt={2}>
              <FormLabel color="gray.400" fontSize={20}>Platform Name</FormLabel>
              <Select color="gray.400" placeholder="please select" w={"80%"}>
                <option value="leetcode">leetcode</option>
                <option value="gfg">gfg</option>
                <option value="hackerRank">hackerRank</option>
                <option value="codeChef">codeChef</option>
                <option value="hackerearth">hackerearth</option>
              </Select>
            </FormControl>

            <FormControl mt={2}>
              <FormLabel color="gray.400" fontSize={20}>Problem Name</FormLabel>
              <Input placeholder="Problem name" w={"80%"} />
            </FormControl>

            <FormControl mt={2}>
              <FormLabel color="gray.400" fontSize={20}>Description</FormLabel>
              <Textarea
                placeholder="write a description for problem"
                w={"80%"}
              />
            </FormControl>

            <FormControl mt={2}>
              <FormLabel color="gray.400" fontSize={20}>Textual approach</FormLabel>
              <Textarea
                placeholder="write a textual_reference for problem"
                w={"80%"}
              />
            </FormControl>

            <FormControl mt={2}>
              <FormLabel color="gray.400" fontSize={20}>language used</FormLabel>
              <Select color="gray.400" placeholder="please select" w={"80%"}>
                <option value="">Javascript</option>
                <option value="">Java</option>
                <option value="">C & C++</option>
                <option value="">TypeScript</option>
                <option value="">PHP</option>
                <option value="">Python</option>
                <option value="">Perl</option>
                <option value="">Rust</option>
                <option value="">Ruby</option>
              </Select>
            </FormControl>
              </Box>
              <Box w={"50%"}>
              <FormControl>
              <FormLabel color="gray.400" fontSize={20}>pictorial reference</FormLabel>
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
                    color="gray.400"
                    _dark={{
                      color:"gray.400",
                    }}
                  >
                    PNG, JPG, GIF up to 10MB
                  </Text>
                </Stack>
              </Flex>
            </FormControl>

            <FormControl mt={2}>
              <FormLabel color="gray.400" fontSize={20}>textual reference</FormLabel>
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
                    color="gray.400"
                    placeholder="www.example.com"
                    w={"68%"}
                  />
                </InputGroup>
            </FormControl>

            <FormControl mt={2}>
              <FormLabel color="gray.400" fontSize={20}>video reference</FormLabel>
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
                    color="gray.400"
                    placeholder="www.example.com"
                    w={"68%"}
                  />
                </InputGroup>
            </FormControl>

            <FormControl mt={2}>
              <FormLabel color="gray.400" fontSize={20}>solution code</FormLabel>
              <Textarea
                placeholder="write a textual_reference for problem"
                w={"80%"}
              />
            </FormControl>

            <FormControl mt={2}>
              <FormLabel color="gray.400" fontSize={20}>difficulty level</FormLabel>
              <Select color="gray.400" placeholder="please select" w={"80%"}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </Select>
            </FormControl>
              </Box>
            </Flex>
            
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
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
