import {
  Box,
  Grid,
  GridItem,
  Flex,
  Text,
  CircularProgress,
  CircularProgressLabel,
  Progress,
} from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GitHubCalendar from 'react-github-calendar';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Box
        bg="#1a202c"
        w="100%"
        h={{ md: '500vh', lg: '180vh' }}
        borderTop="1px solid #9ca1cd"
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
            bg="#a9aed6"
            borderRadius="5px"
          >
            <Flex></Flex>
            <Flex></Flex>
            <Flex></Flex>
            <Flex></Flex>
            <Flex></Flex>
          </GridItem>
          <GridItem
            rowSpan={{ base: 13, sm: 13, md: 12, lg: 4 }}
            colSpan={{ base: 11, sm: 11, md: 11, lg: 4 }}
            bg="#a9aed6"
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
                <CircularProgress
                  value={59}
                  size="100px"
                  color="orange.400"
                  thickness="4px"
                >
                  <CircularProgressLabel
                    margin="-5px 0px"
                    fontSize="25px"
                    fontWeight="700"
                  >
                    40
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
                      28/617
                    </Text>
                    <Text fontSize="12px" fontWeight="600">
                      Beats
                    </Text>
                  </Flex>
                  <Progress
                    value={20}
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
                      28/617
                    </Text>
                    <Text fontSize="12px" fontWeight="600">
                      Beats
                    </Text>
                  </Flex>
                  <Progress
                    value={20}
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
                      28/617
                    </Text>
                    <Text fontSize="12px" fontWeight="600">
                      Beats
                    </Text>
                  </Flex>
                  <Progress
                    value={20}
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
            bg="#a9aed6"
            borderRadius="5px"
          ></GridItem>
          <GridItem
            rowSpan={{ base: 13, sm: 13, md: 12, lg: 4 }}
            colSpan={{ base: 11, sm: 11, md: 11, lg: 8 }}
            bg="#a9aed6"
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
            bg="#a9aed6"
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
                  Recent
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
                <TabPanel>
                  <p>one!</p>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
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
