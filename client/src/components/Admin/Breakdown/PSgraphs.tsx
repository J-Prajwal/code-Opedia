import { Box, CircularProgress, CircularProgressLabel, Flex, SimpleGrid, Stack,Icon, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Card from '../Cards/Card'
import CardHeader from '../Cards/CardHeader'
import IconBox from '../Icons/IconBox'
import Styles from "../../../styles/Dashboard.module.css"
import { BiHappy } from 'react-icons/bi'


const PSgraphs = () => {
    const [invited,setInvited] = useState(0);
    const [bonus,setBonus] = useState(0);
    const [based , setBased] = useState(0);
    const [totalScore,setTotal] = useState(0);
  return (
    <>
        <SimpleGrid columns={2} spacing={10} mt="2%">
        {/* Satisfaction Rate */}
        <Card className={Styles.top_grid} gridArea={{ md: "2 / 1 / 3 / 2", "2xl": "auto" }} pl="2%" pr="2%" py="2%" borderRadius={10}  bg="linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)">
          <CardHeader mb="24px">
            <Flex direction="column">
              <Text color="#fff" fontSize="lg" fontWeight="bold" mb="4px">
                Satisfaction Rate
              </Text>
              <Text color="#fff" fontSize="sm">
                From all projects
              </Text>
            </Flex>
          </CardHeader>
          <Flex direction="column" justify="center" align="center">
            <Box zIndex="-1">
              <CircularProgress
                size={200}
                value={80}
                thickness={6}
                color="#582CFF"
                // variant="vision"
                // rounded
              >
                <CircularProgressLabel>
                  <IconBox
                    mb="20px"
                    mx="auto"
                    bg="brand.200"
                    borderRadius="50%"
                    w="48px"
                    h="48px"
                  >
                    <Icon as={BiHappy} color="#fff" w="30px" h="30px" />
                  </IconBox>
                </CircularProgressLabel>
              </CircularProgress>
            </Box>
            <Stack
              direction="row"
              spacing={{ sm: "42px", md: "68px" }}
              justify="center"
              maxW={{ sm: "270px", md: "300px", lg: "100%" }}
              mx={{ sm: "auto", md: "0px" }}
              p="18px 22px"
              bg="linear-gradient(126.97deg, rgb(6, 11, 40) 28.26%, rgba(10, 14, 35) 91.2%)"
              borderRadius="20px"
              position="absolute"
              // bottom="5%"
            >
              <Text fontSize="xs" color="#fff">
                0%
              </Text>
              <Flex direction="column" align="center" minW="80px">
                <Text color="#fff" fontSize="28px" fontWeight="bold">
                  {based}%
                </Text>
                <Text fontSize="xs" color="#fff">
                  Based on likes
                </Text>
              </Flex>
              <Text fontSize="xs" color="#fff">
                100%
              </Text>
            </Stack>
          </Flex>
        </Card>
        {/* problem Tracking */}
        <Card className={Styles.top_grid} gridArea={{ md: "2 / 2 / 3 / 3", "2xl": "auto" }} bg="linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)" borderRadius={10} py="2%" pl="5%" pr="5%">
          <Flex direction="column">
            <Flex justify="space-between" align="center" mb="40px">
              <Text  fontSize="lg" color="#fff" fontWeight="bold">
                Problem Tracking
              </Text>
            </Flex>
            <Flex direction={{ sm: "column", md: "row" }}>
              <Flex
                direction="column"
                me={{ md: "6px", lg: "52px" }}
                mb={{ sm: "16px", md: "0px" }}
              >
                <Flex
                  direction="column"
                  p="22px"
                  pe={{ sm: "22e", md: "8px", lg: "22px" }}
                  minW={{ sm: "220px", md: "140px", lg: "220px" }}
                  bg="linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)"
                  borderRadius="20px"
                  mb="20px"
                >
                  <Text color="#fff" fontSize="sm" mb="4px">
                    Invited
                  </Text>
                  <Text color="#fff" fontSize="lg" fontWeight="bold">
                    {invited} people
                  </Text>
                </Flex>
                <Flex
                  direction="column"
                  p="22px"
                  pe={{ sm: "22px", md: "8px", lg: "22px" }}
                  minW={{ sm: "170px", md: "140px", lg: "170px" }}
                  bg="linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)"
                  borderRadius="20px"
                >
                  <Text color="#fff" fontSize="sm" mb="4px">
                    Bonus
                  </Text>
                  <Text color="#fff" fontSize="lg" fontWeight="bold">
                    {bonus}
                  </Text>
                </Flex>
              </Flex>
              <Box mx={{ sm: "auto", md: "0px" }}>
                <CircularProgress
                  size={
                    window.innerWidth >= 1024
                      ? 200
                      : window.innerWidth >= 768
                      ? 170
                      : 200
                  }
                  value={50}
                  thickness={6}
                  color="#05CD99"
                  // variant="vision"
                >
                  <CircularProgressLabel>
                    <Flex direction="column" justify="center" align="center">
                      <Text fontSize={20} color="#fff">
                        Safety
                      </Text>
                      <Text
                        fontSize={{ md: "36px", lg: "50px" }}
                        fontWeight="bold"
                        mb="4px"
                      >
                        {totalScore}
                      </Text>
                      <Text fontSize={16} color="#fff">
                        Total Score
                      </Text>
                    </Flex>
                  </CircularProgressLabel>
                </CircularProgress>
              </Box>
            </Flex>
          </Flex>
        </Card>
      </SimpleGrid>
    </>
  )
}

export default PSgraphs