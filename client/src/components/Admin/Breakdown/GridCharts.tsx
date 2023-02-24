import { Box, Flex, Progress, SimpleGrid, Text } from "@chakra-ui/react"
import Card from "../Cards/Card"
import CardBody from "../Cards/CardBody"
import CardHeader from "../Cards/CardHeader"
import BarChart from "../Charts/BarChart"
import LineChart from "../Charts/LineChart"
import { barChartDataDashboard, barChartOptionsDashboard, lineChartDataDashboard, lineChartOptionsDashboard } from "../Charts/variables/charts"
import IconBox from "../Icons/IconBox"
import { RocketIcon, StatsIcon, WalletIcon } from "../Icons/Icons"
import Styles from "../../../styles/Dashboard.module.css"

const GridCharts = () => {
  return (
    <>
         <SimpleGrid columns={2} spacing={10} mt="2%">
        {/* Problem's Tracking Graph */}
        <Card p="28px 0px 0px 0px" className={Styles.top_grid} borderRadius={10}>
          <CardHeader mb="20px" ps="22px">
            <Flex direction="column" alignSelf="flex-start">
              <Text fontSize="lg" fontWeight="bold" mb="6px">
                Problem's Tracking Graph
              </Text>
              <Text fontSize="md" fontWeight="medium" >
                <Text as="span" color="green.400" fontWeight="bold">
                  (+0%) more
                </Text>{" "}
                in 2023
              </Text>
            </Flex>
          </CardHeader>
          <Box w="100%" minH={{ sm: "300px" }}>
            <LineChart
              lineChartData={lineChartDataDashboard}
              lineChartOptions={lineChartOptionsDashboard}
            />
          </Box>
        </Card>
        {/* Active Users */}
        <Card p="16px" className={Styles.top_grid} borderRadius={10}>
          <CardBody>
            <Flex direction="column" w="100%">
              <Box
                bg="linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)"
                borderRadius="20px"
                display={{ sm: "flex", md: "block" }}
                justifyContent={{ sm: "center", md: "flex-start" }}
                alignItems={{ sm: "center", md: "flex-start" }}
                minH={{ sm: "180px", md: "220px" }}
                p={{ sm: "0px", md: "22px" }}
              >
                <BarChart
                  barChartOptions={barChartOptionsDashboard}
                  barChartData={barChartDataDashboard}
                />
              </Box>
              <Flex
                direction="column"
                mt="24px"
                mb="36px"
                alignSelf="flex-start"
              >
                <Text fontSize="lg" fontWeight="bold" mb="6px">
                  Active Users
                </Text>
                <Text fontSize="md" fontWeight="medium" >
                  <Text as="span" color="green.400" fontWeight="bold">
                    (+23%)
                  </Text>{" "}
                  than last week
                </Text>
              </Flex>
              <SimpleGrid gap={{ sm: "12px" }} columns={4}>
                <Flex direction="column">
                  <Flex alignItems="center">
                    <IconBox
                      as="box"
                      h={"30px"}
                      w={"30px"}
                      bg="brand.200"
                      me="6px"
                    >
                      <WalletIcon h={"15px"} w={"15px"}/>
                    </IconBox>
                    <Text fontSize="sm">
                      Users
                    </Text>
                  </Flex>
                  <Text
                    fontSize={{ sm: "md", lg: "lg" }}
                    fontWeight="bold"
                    mb="6px"
                    my="6px"
                  >
                    32,984
                  </Text>
                  <Progress
                    borderRadius="30px"
                    h="5px"
                    value={20}
                  />
                </Flex>
                <Flex direction="column">
                  <Flex alignItems="center">
                    <IconBox
                      as="box"
                      h={"30px"}
                      w={"30px"}
                      bg="brand.200"
                      me="6px"
                    >
                      <RocketIcon h={"15px"} w={"15px"}  />
                    </IconBox>
                    <Text fontSize="sm" >
                      Clicks
                    </Text>
                  </Flex>
                  <Text
                    fontSize={{ sm: "md", lg: "lg" }}
                    fontWeight="bold"
                    mb="6px"
                    my="6px"
                  >
                    2.42m
                  </Text>
                  <Progress
                    // colorScheme="brand"
                    // bg="#2D2E5F"
                    borderRadius="30px"
                    h="5px"
                    value={90}
                  />
                </Flex>
                <Flex direction="column">
                  <Flex alignItems="center">
                    <IconBox
                      as="box"
                      h={"30px"}
                      w={"30px"}
                      bg="brand.200"
                      me="6px"
                    >
                      <StatsIcon h={"15px"} w={"15px"}  />
                    </IconBox>
                    <Text fontSize="sm" >
                      Problem's
                    </Text>
                  </Flex>
                  <Text
                    fontSize={{ sm: "md", lg: "lg" }}
                    
                    fontWeight="bold"
                    mb="6px"
                    my="6px"
                  >
                    320
                  </Text>
                  <Progress
                  
                    borderRadius="30px"
                    h="5px"
                    value={50}
                  />
                </Flex>
              </SimpleGrid>
            </Flex>
          </CardBody>
        </Card>
      </SimpleGrid>
    </>
  )
}

export default GridCharts