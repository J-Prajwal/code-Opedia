import { Box, Flex, Text  } from '@chakra-ui/react';
import React , {useState} from 'react';
import { BsBricks, BsDiagram3Fill, BsFillPersonFill } from 'react-icons/bs';
import Styles from "../../../styles/Dashboard.module.css";



const FourCard = () => {

    const [problem , setProblem] = useState(0)
    const [user , setUser] = useState(0)
    const [newU , setNewU] = useState(0)
    const [tutorial , setTutorial] = useState(0)
  return (
    <>
        <Flex w="100%" gap={"4%"}>
        <Box className={Styles.top_grid}  py="2px" w="22%" h={"90px"} pl="2%" pr="2%" borderRadius={20} textAlign="center" bg={"teal"}>
          <Flex justifyContent={"center"} >
            <Box w={"90%"}>
          <Text fontWeight={"semibold"} fontSize={18}>Problem Track Today</Text>
          <Text fontWeight={"bold"} fontSize={22}>{problem}</Text>
            </Box>
            <Box mt={7}>
              <BsDiagram3Fill size={30}/>
            </Box>
          </Flex>
        </Box>
        <Box className={Styles.top_grid} w="22%" h={"90px"} py="2px" pl="2%" pr="2%" borderRadius={20} textAlign="center" bg={"#610cc9"}>
          <Flex justifyContent={"center"}>
            <Box w={"90%"}>
          <Text fontWeight={"semibold"} fontSize={18}>Today's User's</Text>
          <Text fontWeight={"bold"} fontSize={22}>{user}</Text>
            </Box>
            <Box mt={7}>
              <BsFillPersonFill size={30}/>
            </Box>
          </Flex>
        </Box>
        <Box className={Styles.top_grid} w="22%" h={"90px"} py="2px" pl="2%" pr="2%" borderRadius={20} textAlign="center" bg={"#7d8040"}>
          <Flex justifyContent={"center"}>
            <Box w={"90%"}>
          <Text fontWeight={"semibold"} fontSize={18}>New User's</Text>
          <Text fontWeight={"bold"} fontSize={22}>{newU}</Text>
            </Box>
            <Box mt={7}>
              <BsFillPersonFill size={30}/>
            </Box>
          </Flex>
        </Box>
        <Box className={Styles.top_grid} w="22%" h={"90px"} py="2px" pl="2%" pr="2%" borderRadius={20} textAlign="center" bg={"#49a68a"}>
          <Flex justifyContent={"center"}>
            <Box w={"90%"}>
          <Text fontWeight={"semibold"} fontSize={18}>Total Tutorials</Text>
          <Text fontWeight={"bold"} fontSize={22}>{tutorial}</Text>
            </Box>
            <Box mt={7}>
              <BsBricks size={30}/>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  )
}

export default FourCard