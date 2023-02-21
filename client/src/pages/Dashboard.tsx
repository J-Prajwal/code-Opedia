import {
  Box,
  Grid,
  GridItem,
  Flex,
  Text,
  CircularProgress,
  CircularProgressLabel,
  Progress,
  Image,
  Button,
  Divider,
} from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GitHubCalendar from 'react-github-calendar';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import {FcFaq, FcOk, FcRating ,FcDoughnutChart} from "react-icons/fc";
import { BsFillRecordFill } from "react-icons/bs";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Box
        w="100%"
        h={{ md: '500vh', lg: '180vh' }}
        padding={{
          base: '20px 20px',
          sm: '20px 20px',
          md: '30px 30px',
          lg: '30px 100px',
        }}
      >
        <Grid
          height="100%"
          templateRows="repeat(20, 2fr)"
          templateColumns="repeat(11, 1fr)"
          gap={4}
        >
          <GridItem
            rowSpan={{ base: 60, sm: 60, md: 40, lg: 18 }}
            colSpan={{ base: 11, sm: 11, md: 11, lg: 3 }}
            bg={'whiteAlpha.300'}
            boxShadow={'xl'}
            borderRadius="5px"
            justifyContent={"center"}
            pr="4%"
            pl="4%"
          >
            <Flex justifyContent={"center"} gap={10} mt="10%">
              <Box>
                <Image src='https://assets.leetcode.com/users/avatars/avatar_1660280193.png' borderRadius={10}/>
              </Box>
              <Box >
                <Text fontWeight={"bold"} fontSize={20}>arpitmiahra4</Text>
                <Text fontSize={20} mt="20%">Rank ~5,000,000</Text>
              </Box>
            </Flex>
          <Button mt={"5%"} w="98%"  borderRadius={10} fontWeight="semibold" fontSize={18} _hover={{bgColor:"#eff9f2"}} bgColor="#eff9f2" color={"#2db55e"}>Edit Profile</Button>
          <Divider mt={"5%"} w="98%"  />

          <Text fontWeight={"semibold"} mt={"10%"} fontSize={18}>Community Stats</Text>
          <Box mt={"5%"}>
           <Flex align={"center"} gap="3%"><FcDoughnutChart/><span>Views 0</span></Flex>
           <Text fontSize={14} mt="3%" ml="8%">Last week 0</Text>
           </Box>
           <Box mt={"5%"}>
           <Flex align={"center"} gap="3%"><FcOk/><span>Solution 0</span></Flex>
           <Text fontSize={14} mt="3%" ml="8%">Last week 0</Text>
           </Box>
           <Box mt={"5%"}>
           <Flex align={"center"} gap="3%"><FcFaq/><span>Discuss 0</span></Flex>
           <Text fontSize={14} mt="3%" ml="8%">Last week 0</Text>
           </Box>
           <Box mt={"5%"}>
           <Flex align={"center"} gap="3%"><FcRating/><span>Reputation 0</span></Flex>
           <Text fontSize={14} mt="3%" ml="8%">Last week 0</Text>
           </Box>
           <Divider mt={"5%"} w="98%" />
           <Text fontWeight={"semibold"} mt={"10%"} fontSize={18}>Languages</Text>
           <Text  mt={"5%"} fontSize={16} textAlign="center">Not enough data</Text>
           <Divider mt={"5%"} w="98%" />
           <Text fontWeight={"semibold"} mt={"10%"} fontSize={18}>Skills</Text>
           <Box mt={"5%"}>
           <Flex align={"center"} fontWeight="semibold" fontSize={15} gap="2%"><BsFillRecordFill color='red' size={12}/><span>Advanced</span></Flex>
           <Text fontSize={14} mt="5%" textAlign={"center"}>Not enough data</Text>
           </Box>
           <Box mt={"5%"}>
           <Flex align={"center"} fontWeight="semibold" fontSize={15} gap="2%"><BsFillRecordFill color='yellow' size={12}/><span>Intermediate</span></Flex>
           <Text fontSize={14} mt="5%" textAlign={"center"}>Not enough data</Text>
           </Box>
           <Box mt={"5%"}>
           <Flex align={"center"} fontWeight="semibold" fontSize={15} gap="2%"><BsFillRecordFill color='green' size={12}/><span>Fundamental</span></Flex>
           <Text fontSize={14} mt="5%" textAlign={"center"}>Not enough data</Text>
           </Box>
          </GridItem>
          <GridItem
            rowSpan={{ base: 13, sm: 13, md: 12, lg: 4 }}
            colSpan={{ base: 11, sm: 11, md: 11, lg: 4 }}
            bg={'whiteAlpha.300'}
            boxShadow={'xl'}
            borderRadius="5px"
            display="flex"
            flexDirection="column"
          >
            <Box
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              h="100%"
              w="100%"
              padding="10px"
            >
              <Box w="30%" gap="20px">
              <Text mt={"-15%"} mb="10%">Solved Problems</Text>
                <CircularProgress
                  value={0}
                  size="100px"
                  color="orange.400"
                  thickness="4px"
                >
                  <CircularProgressLabel
                    margin="-5px 0px"
                    fontSize="25px"
                    fontWeight="700"
                  >
                    0
                  </CircularProgressLabel>
                  <CircularProgressLabel
                    margin="15px 0px"
                    fontSize="10px"
                    fontWeight="600"
                  >
                    Solved
                  </CircularProgressLabel>
                </CircularProgress>
              </Box>
              <Flex w="60%" direction="column" gap="20px">
                <Box w="100%" display="flex" flexDirection="column" gap="2px">
                  <Flex justifyContent="space-between">
                    <Text fontSize="12px" fontWeight="600">
                      Easy
                    </Text>
                    <Text fontSize="15px" fontWeight="700">
                      0/629
                    </Text>
                    <Text fontSize="12px" fontWeight="600">
                      Not enough data
                    </Text>
                  </Flex>
                  <Progress
                    value={100}
                    size="xs"
                    w="100%"
                    colorScheme="green"
                    borderRadius="1px"
                  />
                </Box>
                <Box w="100%" display="flex" flexDirection="column" gap="2px">
                  <Flex justifyContent="space-between">
                    <Text fontSize="12px" fontWeight="600">
                      Medium
                    </Text>
                    <Text fontSize="15px" fontWeight="700">
                      0/1370
                    </Text>
                    <Text fontSize="12px" fontWeight="600">
                      Not enough data
                    </Text>
                  </Flex>
                  <Progress
                    value={100}
                    size="xs"
                    w="100%"
                    colorScheme="yellow"
                    borderRadius="1px"
                  />
                </Box>
                <Box w="100%" display="flex" flexDirection="column" gap="2px">
                  <Flex justifyContent="space-between">
                    <Text fontSize="12px" fontWeight="600">
                      Hard
                    </Text>
                    <Text fontSize="15px" fontWeight="700">
                      0/574
                    </Text>
                    <Text fontSize="12px" fontWeight="600">
                      Not enough data
                    </Text>
                  </Flex>
                  <Progress
                    value={100}
                    size="xs"
                    w="100%"
                    colorScheme="red"
                    borderRadius="1px"
                  />
                </Box>
              </Flex>
            </Box>
          </GridItem>
          <GridItem
            rowSpan={{ base: 13, sm: 13, md: 12, lg: 4 }}
            colSpan={{ base: 11, sm: 11, md: 11, lg: 4 }}
            bg={'whiteAlpha.300'}
            boxShadow={'xl'}
            borderRadius="5px"
            pl={5}
            py={5}
          >
            <Text>Badges</Text>
            <Text fontWeight={"semibold"} fontSize={25} mt="1%">0</Text>
            <Box mt={"10%"}>
              <Text>Locked Badge</Text>
              <Text fontWeight={"semibold"} fontSize={20} mt="1%">Feb LeetCoding Challenge</Text>
            </Box>
          </GridItem>
          <GridItem
            rowSpan={{ base: 13, sm: 13, md: 12, lg: 4 }}
            colSpan={{ base: 11, sm: 11, md: 11, lg: 8 }}
            bg={'whiteAlpha.300'}
            boxShadow={'xl'}
            borderRadius="5px"
            padding="0px 20px"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
              w="100%"
              overflow="hidden"
              objectFit="cover"
            >
              <GitHubCalendar username="j-prajwal" />
            </Box>
          </GridItem>
          <GridItem
            rowSpan={{ base: 45, sm: 45, md: 40, lg: 12 }}
            colSpan={{ base: 11, sm: 11, md: 11, lg: 8 }}
            bg={'whiteAlpha.300'}
            boxShadow={'xl'}
            borderRadius="5px"
            padding="20px"
          >
            <Tabs variant="unstyled">
              <TabList>
                <Tab
                  _selected={{
                    color: 'white',
                    bg: 'blue.500',
                    borderRadius: '5px',
                  }}
                >
                  Recent AC
                </Tab>
                <Tab
                  _selected={{
                    color: 'white',
                    bg: 'blue.500',
                    borderRadius: '5px',
                  }}
                >
                  Solutions
                </Tab>
                <Tab
                  _selected={{
                    color: 'white',
                    bg: 'blue.500',
                    borderRadius: '5px',
                  }}
                >
                  Discuss
                </Tab>
              </TabList>
              <TabPanels h="100%" w="100%">
                <TabPanel >
                  <Box h="600px" alignContent={"center"} bgImage={"https://leetcode.com/_next/static/images/null_light-53585615fd723ba992bd2df7a10d10d1.png"} bgRepeat="no-repeat" bgPosition={"center"}>
                  <Text textAlign={"center"}>No recent submissions</Text>
                  </Box>
                </TabPanel>
                <TabPanel>
                <Box h="600px" alignContent={"center"} bgImage={"https://leetcode.com/_next/static/images/null_light-53585615fd723ba992bd2df7a10d10d1.png"} bgRepeat="no-repeat" bgPosition={"center"}>
                  <Text textAlign={"center"}>No Solutions</Text>
                  </Box>
                </TabPanel>
                <TabPanel>
                <Box h="600px" alignContent={"center"} bgImage={"https://leetcode.com/_next/static/images/null_light-53585615fd723ba992bd2df7a10d10d1.png"} bgRepeat="no-repeat" bgPosition={"center"}>
                  <Text textAlign={"center"}>No discussions</Text>
                  </Box> <p>three!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </GridItem>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};

export default Dashboard;
