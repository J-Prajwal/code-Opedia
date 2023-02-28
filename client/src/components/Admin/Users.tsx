import { Flex, SimpleGrid, Stack ,chakra, useColorModeValue, Button ,Icon, ButtonGroup, IconButton, useToast } from '@chakra-ui/react';
import React from 'react'
import { AiFillEdit, AiTwotoneLock } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import Styles from "../../styles/Dashboard.module.css"

const Users = () => {
    const toast = useToast()

    const Edit = () =>{
        toast({
            title: "Edited Successfully",
            status: 'success',
            isClosable: true,
          })

    }
    const Deleted = () =>{
        toast({
            title: "Deleted Successfully",
            status: 'success',
            isClosable: true,
          })
    }

    const data = [
        {
          name: "Arpit Mishra",
          role: "Admin",
        },
        {
            name: "Prajwal Jaiswal",
            role: "Admin",
        },
        {
            name: "Vivek Goswami",
            role: "User",
        },
        {
            name: "Debobrota",
            role: "User",
        },
        {
            name: "New User",
            role: "User",
        },
      ];
      const bg = useColorModeValue("white", "gray.800");
      const bg2 = useColorModeValue("white", "gray.800");
      const bg3 = useColorModeValue("gray.100", "gray.700");
      return (
        <Flex
          w="full"
          bg="#edf3f8"
          _dark={{
            bg: "#121a35",
          }}
          p={5}
          alignItems="center"
          justifyContent="center"
        >
          <Stack
            direction={{
              base: "column",
            }}
            w="full"
            bg={{
              md: bg,
            }}
            shadow="lg"
          >
            {data.map((token, tid) => {
              return (
                <Flex
                  direction={{
                    base: "row",
                    md: "column",
                  }}
                  bg={bg2}
                  key={tid}
                >
                  <SimpleGrid
                    spacingY={3}
                    columns={{
                      base: 1,
                      md: 4,
                    }}
                    w={{
                      base: 120,
                      md: "full",
                    }}
                    textTransform="uppercase"
                    bg={bg3}
                    py={{
                      base: 1,
                      md: 4,
                    }}
                    px={{
                      base: 2,
                      md: 10,
                    }}
                    fontSize={20}
                    fontWeight="semibold"
                    fontStyle={"oblique"}
                    className={Styles.tab_border}
                    borderRadius={20}
                  >
                    <span>Name</span>
                    <span>Role</span>
                    <span>Data</span>
                    <chakra.span
                      textAlign={{
                        md: "right",
                      }}
                    >
                      Actions
                    </chakra.span>
                  </SimpleGrid>
                  <SimpleGrid
                    spacingY={3}
                    columns={{
                      base: 1,
                      md: 4,
                    }}
                    w="full"
                    py={2}
                    px={10}
                    fontWeight="normal"
                    fontStyle={"italic"}
                    fontSize={18}
                  >
                    <span>{token.name}</span>
                    <chakra.span
                      textOverflow="ellipsis"
                      overflow="hidden"
                      whiteSpace="nowrap"
                    >
                      {token.role}
                    </chakra.span>
                    <Flex>
                      <Button
                        size="sm"
                        variant="solid"
                        leftIcon={<Icon as={AiTwotoneLock} />}
                        colorScheme="purple"
                      >
                        View Profile
                      </Button>
                    </Flex>
                    <Flex
                      justify={{
                        md: "end",
                      }}
                    >
                      <ButtonGroup variant="solid" size="sm" spacing={3}>
                        <IconButton
                          colorScheme="green"
                          icon={<AiFillEdit />}
                          aria-label="Edit"
                          onClick={Edit}
                        />
                        <IconButton
                          colorScheme="red"
                          variant="outline"
                          icon={<BsFillTrashFill />}
                          aria-label="Delete"
                          onClick={Deleted}
                        />
                      </ButtonGroup>
                    </Flex>
                  </SimpleGrid>
                </Flex>
              );
            })}
          </Stack>
        </Flex>
      );
    };

export default Users