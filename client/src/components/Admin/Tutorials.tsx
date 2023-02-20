import React from 'react'
import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    color,
    Divider,
    Flex,
    Heading,
    HStack,
    Image,
    Stack,
    Text,
  } from '@chakra-ui/react';
  
  import {FiEdit} from "react-icons/fi"
  import {BsThreeDotsVertical} from "react-icons/bs"

const Tutorials = () => {
  return (
    <Box>
<Box p={"1"}  mx="-3" mt={"-3"} 
display={'flex'} justifyContent={"space-between"} >
    <Heading as={"h5"}  size='md' >Tutorials</Heading>
    <ButtonGroup >
      <Button   size='sm'
       variant='solid' fontSize={"0.8rem"} 
      w={"12vh"} >
      ANALYTICS
      </Button>
      <Button w={"23vh"} 
       size='sm' fontSize={"0.8rem"} 
      >
        CREATE ASSIGNMENTS
      </Button>
    </ButtonGroup>
</Box>
<Divider />


<Card maxW='sm' objectFit='cover' mt={"3"}>
  <CardBody p={"2"} >
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'

    />
    <Stack mt='3' spacing='2'>
        <Flex justifyContent={"space-between"}
         alignItems={"center"}>
      <Heading size='md'>Living room Sofa</Heading>
<BsThreeDotsVertical cursor={"pointer"}/>
        </Flex>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
    </Stack>
  </CardBody>
  {/* <Divider />
    <ButtonGroup m={"2"} display={'flex'} justifyContent={"space-evenly"}>
      <Button variant='solid' w={"30%"} colorScheme='blue'>
      <FiEdit/>
      </Button>
      <Button bg={"black"} w={"30%"}  colorScheme='blue'>
        <MdDeleteForever/>
      </Button>
    </ButtonGroup> */}
</Card>
    </Box>
  )
}

export default Tutorials