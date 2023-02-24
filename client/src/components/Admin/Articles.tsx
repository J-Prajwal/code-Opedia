import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Flex, Text } from '@chakra-ui/layout';
import Styles from '../../styles/Dashboard.module.css';
import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import { Button } from '@chakra-ui/button';

const Articles = () => {
  const editor = useRef(null);
  const [content , setContent] = useState("");
  return (
  <Box className={Styles.article_card} pl="2%" pr="2%" py="2%" minH="600px" borderRadius={20}>
    <Flex>
    <Text fontWeight={"bold"} fontSize={25} fontFamily="sans-serif" textDecoration={"underline"}>What's going in your </Text>
    <Text fontWeight={"bold"} fontSize={25} fontFamily="sans-serif" textDecoration={"underline"} ml="5px" color={"#00cc99"}> mind ?</Text>
    </Flex>
    <Box mt={"2%"}>
    <FormControl>
  <FormLabel fontWeight={"bold"} fontSize={20}>Article's Title</FormLabel>
  <Input fontWeight={"semibold"} fontSize={18} type='text' w={"50%"} border="3px solid teal"/>
</FormControl>
    </Box>
    <Box mt={"2%"}>
    <FormControl>
  <FormLabel fontWeight={"bold"} fontSize={20}>Article's Content</FormLabel>
  <JoditEditor ref={editor} value={content}  onChange={newContent=>setContent(newContent)}/>
</FormControl>
    </Box>
    <Box m={"auto"} mt={"2%"} w={"50%"}>
      <Flex justifyContent={"space-around"}>
      <Button borderRadius={10} colorScheme={"blue"} fontWeight={"bold"} fontSize={20}>Post Article</Button>
      <Button borderRadius={10} colorScheme={"red"} fontWeight={"bold"} fontSize={20}>Reset Content</Button>
      </Flex>
    </Box>
    </Box>
  )
};

export default Articles;
