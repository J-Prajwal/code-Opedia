import { Button, Flex, Spacer, Text,Icon  } from '@chakra-ui/react';

import { BsArrowRight } from 'react-icons/bs';
import Card from '../Cards/Card';
import CardBody from '../Cards/CardBody';
const Welcome = () => {
  return (
    <>
        <Card
          p="0px"
          gridArea={{ md: "1 / 1 / 2 / 3", "2xl": "auto" }}
          bgImage={"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/79731568097599.5b50bca477735.jpg"}
          bgSize="cover"
          bgPosition="50%"
          color="white"
          borderRadius={10}
          mt="1%"
        >
          <CardBody w="100%" h="100%" >
            <Flex flexDirection={{ sm: "column", lg: "row" }} w="100%" h="100%" >
              <Flex
                flexDirection="column"
                h="100%"
                p="22px"
                minW="60%"
                lineHeight="1.6"
                
              >
                <Text fontSize="sm"  fontWeight="bold">
                  Welcome back,
                </Text>
                <Text fontSize="28px"  fontWeight="bold" mb="18px">
                  Arpit Mishra
                </Text>
                <Text
                  fontSize="md"
                  
                  fontWeight="normal"
                  mb="auto"
                >
                  Glad to see you again! <br />
                  Ask me anything.
                </Text>
                <Spacer />
                <Flex align="center">
                  <Button
                    p="0px"
                    variant="no-hover"
                    bg="transparent"
                    my={{ sm: "1.5rem", lg: "0px" }}
                  >
                    <Text
                      fontSize="sm"
                      
                      fontWeight="bold"
                      cursor="pointer"
                      transition="all .3s ease"
                      my={{ sm: "1.5rem", lg: "0px" }}
                      _hover={{ me: "4px" }}
                    >
                      Tab to record
                    </Text>
                    <Icon
                      as={BsArrowRight}
                      w="20px"
                      h="20px"
                      
                      fontSize="2xl"
                      transition="all .3s ease"
                      mx=".3rem"
                      cursor="pointer"
                      pt="4px"
                      _hover={{ transform: "translateX(20%)" }}
                    />
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
    </>
  )
}

export default Welcome