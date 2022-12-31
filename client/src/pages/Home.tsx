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
  Image,
  Button,
  SimpleGrid,
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
import { VscGithub } from "react-icons/vsc";
import { Divider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useToast } from '@chakra-ui/react'
// type user =  {
//   id: String;
//   email: string;
//   fullname: string;
//   username:string;
//   skills:[];
//   github:string;
//   about_me:string;
//   leetcode:string;
//   gfg:string;
//   hackerRank:string;
//   is_admin:boolean;
//   no_of_problems:number;
//   easy:number;
//   medium:number;
//   hard:number;
//   verified:boolean;
//   no_of_contests:number;
// };
const Home = () => {
  const api = "https://mock-server-686g.onrender.com";
  const [count, setCount] = useState<number>(0);
  const [users , setUsers] = useState<any>([])
  useEffect(() => {
    axios
      .get(`${api}/code_opedia`)
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error.message));
  }, []);
console.log(users);
console.log(setCount);
const toast = useToast()

  return (
    <div>
      <Navbar />
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
                  src="https://avatars.githubusercontent.com/u/106508210?v=4"
                />{" "}
              </WrapItem>
            </Wrap>
          </Box>
          <Flex mt={5} gap="1%" justifyContent="center" alignItems={"center"}>
            <Text fontSize={22} fontWeight={"bolder"}>
              Arpit Mishra
            </Text>
            <Text fontSize={20}>@code_opedia</Text>
          </Flex>
          <Box mb={"3%"}>
            <Text fontSize={18} mt={2}>
              Talk Is Cheap Show Me The Code
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
                {count}
              </Text>
            </Box>
            <Box w={"50%"} borderLeft="2px solid" borderRight="2px solid">
              <Text fontWeight={"bold"} fontSize={22}>
                Medium
              </Text>
              <Text fontWeight={"semibold"} fontSize={20}>
                {count}
              </Text>
            </Box>
            <Box w={"40%"}>
              <Text fontWeight={"bold"} fontSize={22}>
                Hard
              </Text>
              <Text fontWeight={"semibold"} fontSize={20}>
                {count}
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box mt={"5%"} w={"80%"} m={"auto"} mb={"5%"}>
          <Text mt={"5%"} mb={"5%"}fontSize={30}>Problems You Attempted</Text>
          <SimpleGrid className={styles.grid_cont} m="auto"  gap={5}>
            <Box className={styles.flex_boxes}  p={1}>
              <Box w={"30%"} m="auto" className={styles.card_boxes}>
                <Image src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/160_Hackerrank-512.png"/>
              </Box>
              <Box w={"70%"}  textAlign={"left"} pl={"5%"}>
                <Text  fontWeight={"bold"} fontSize={20}>Problem Name</Text>
                <Text fontSize={13} mt="2%">Discription of Question</Text>
                <Text fontSize={16} fontWeight="bold" mt="3%">`Level ➡️`</Text>
                <Button mt={"10%"} className={styles.all_butss} border={"1px solid white"}  onClick={() =>
        toast({
          title: 'Added Successfully',
          description: "Surely give you alert for revision",
          status: 'success',
          duration: 4000,
          isClosable: true,
        })
      }>Need Revision</Button>
              </Box>   
          </Box>
          <Box className={styles.flex_boxes}  p={1}>
              <Box w={"30%"} m="auto" className={styles.card_boxes}>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdVHUvpMzlUKnxGtZSXcZ1XXZLxfu9hqc8BB77sNTcGjSbiLhLlqRpntUZhk222DQV9UM&usqp=CAU"/>
              </Box>
              <Box w={"70%"} textAlign={"left"} pl={"5%"}>
                <Text  fontWeight={"bold"} fontSize={20}>Problem Name</Text>
                <Text fontSize={13} mt="2%">Discription of Question</Text>
                <Text fontSize={16} fontWeight="bold" mt="3%">`Level ➡️`</Text>
                <Button mt={"10%"} className={styles.all_butss} border={"1px solid white"}  onClick={() =>
        toast({
          title: 'Added Successfully',
          description: "Surely give you alert for revision",
          status: 'success',
          duration: 4000,
          isClosable: true,
        })
      }>Need Revision</Button>
              </Box>   
          </Box>
          <Box  className={styles.flex_boxes}  p={1}>
              <Box w={"30%"} m="auto" className={styles.card_boxes}>
                <Image src="https://leetcode.com/static/images/LeetCode_logo_rvs.png"/>
              </Box>
              <Box w={"70%"} textAlign={"left"} pl={"5%"}>
                <Text  fontWeight={"bold"} fontSize={20}>Problem Name</Text>
                <Text fontSize={13} mt="2%">Discription of Question</Text>
                <Text fontSize={16} fontWeight="bold" mt="3%">`Level ➡️`</Text>
                <Button mt={"10%"} className={styles.all_butss}  border={"1px solid white"} onClick={() =>
        toast({
          title: 'Added Successfully',
          description: "Surely give you alert for revision",
          status: 'success',
          duration: 4000,
          isClosable: true,
        })
      }>Need Revision</Button>
              </Box>   
          </Box>
          <Box className={styles.flex_boxes}  p={1}>
              <Box m="auto" w={"30%"} className={styles.card_boxes}>
                <Image src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/160_Hackerrank-512.png"/>
              </Box>
              <Box w={"70%"} textAlign={"left"} pl={"5%"}>
                <Text  fontWeight={"bold"} fontSize={20}>Problem Name</Text>
                <Text fontSize={13} mt="2%">Discription of Question</Text>
                <Text fontSize={16} fontWeight="bold" mt="3%">`Level ➡️`</Text>
                <Button mt={"10%"} className={styles.all_butss} border={"1px solid white"} onClick={() =>
        toast({
          title: 'Added Successfully',
          description: "Surely give you alert for revision",
          status: 'success',
          duration: 4000,
          isClosable: true,
        })
      }>Need Revision</Button>
              </Box>   
          </Box>
          </SimpleGrid>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
