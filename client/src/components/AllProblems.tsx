import { Box, Button, Image, SimpleGrid, Text, useToast } from '@chakra-ui/react'
// import React from 'react'
import styles from "../styles/Home.module.css";
const AllProblems = () => {
  const toast = useToast();
  return (
    <>
    <Text mb={"10%"} color="teal" fontWeight={"bolder"} fontSize={22} textDecoration={"underline"}>All Problems You Attempts</Text>
           <SimpleGrid className={styles.grid_cont} m="auto" gap={5}>
            <Box className={styles.flex_boxes} p={1}>
              <Box w={"30%"} m="auto" className={styles.card_boxes}>
                <Image src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/160_Hackerrank-512.png" />
              </Box>
              <Box w={"70%"} textAlign={"left"} pl={"5%"}>
                <Text fontWeight={"bold"} fontSize={20}>
                  Problem Name
                </Text>
                <Text fontSize={13} mt="2%">
                  Discription of Question
                </Text>
                <Text fontSize={16} fontWeight="bold" mt="3%">
                  `Level ➡️`
                </Text>
                <Button
                  mt={"10%"}
                  className={styles.all_butss}
                  border={"1px solid white"}
                  onClick={() =>
                    toast({
                      title: "Added Successfully",
                      description: "Surely give you alert for revision",
                      status: "success",
                      duration: 4000,
                      isClosable: true,
                    })
                  }
                >
                  Need Revision
                </Button>
              </Box>
            </Box>
            <Box className={styles.flex_boxes} p={1}>
              <Box w={"30%"} m="auto" className={styles.card_boxes}>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdVHUvpMzlUKnxGtZSXcZ1XXZLxfu9hqc8BB77sNTcGjSbiLhLlqRpntUZhk222DQV9UM&usqp=CAU" />
              </Box>
              <Box w={"70%"} textAlign={"left"} pl={"5%"}>
                <Text fontWeight={"bold"} fontSize={20}>
                  Problem Name
                </Text>
                <Text fontSize={13} mt="2%">
                  Discription of Question
                </Text>
                <Text fontSize={16} fontWeight="bold" mt="3%">
                  `Level ➡️`
                </Text>
                <Button
                  mt={"10%"}
                  className={styles.all_butss}
                  border={"1px solid white"}
                  onClick={() =>
                    toast({
                      title: "Added Successfully",
                      description: "Surely give you alert for revision",
                      status: "success",
                      duration: 4000,
                      isClosable: true,
                    })
                  }
                >
                  Need Revision
                </Button>
              </Box>
            </Box>
            <Box className={styles.flex_boxes} p={1}>
              <Box w={"30%"} m="auto" className={styles.card_boxes}>
                <Image src="https://leetcode.com/static/images/LeetCode_logo_rvs.png" />
              </Box>
              <Box w={"70%"} textAlign={"left"} pl={"5%"}>
                <Text fontWeight={"bold"} fontSize={20}>
                  Problem Name
                </Text>
                <Text fontSize={13} mt="2%">
                  Discription of Question
                </Text>
                <Text fontSize={16} fontWeight="bold" mt="3%">
                  `Level ➡️`
                </Text>
                <Button
                  mt={"10%"}
                  className={styles.all_butss}
                  border={"1px solid white"}
                  onClick={() =>
                    toast({
                      title: "Added Successfully",
                      description: "Surely give you alert for revision",
                      status: "success",
                      duration: 4000,
                      isClosable: true,
                    })
                  }
                >
                  Need Revision
                </Button>
              </Box>
            </Box>
            <Box className={styles.flex_boxes} p={1}>
              <Box m="auto" w={"30%"} className={styles.card_boxes}>
                <Image src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/160_Hackerrank-512.png" />
              </Box>
              <Box w={"70%"} textAlign={"left"} pl={"5%"}>
                <Text fontWeight={"bold"} fontSize={20}>
                  Problem Name
                </Text>
                <Text fontSize={13} mt="2%">
                  Discription of Question
                </Text>
                <Text fontSize={16} fontWeight="bold" mt="3%">
                  `Level ➡️`
                </Text>
                <Button
                  mt={"10%"}
                  className={styles.all_butss}
                  border={"1px solid white"}
                  onClick={() =>
                    toast({
                      title: "Added Successfully",
                      description: "Surely give you alert for revision",
                      status: "success",
                      duration: 4000,
                      isClosable: true,
                    })
                  }
                >
                  Need Revision
                </Button>
              </Box>
            </Box>
          </SimpleGrid>
          </>
  )
}

export default AllProblems