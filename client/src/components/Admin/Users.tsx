import {
  Flex,
  SimpleGrid,
  Stack,
  chakra,
  useColorModeValue,
  Button,
  ButtonGroup,
  Icon,
  IconButton,
  useToast,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiFillEdit, AiTwotoneEdit, AiTwotoneLock } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import Styles from '../../styles/Dashboard.module.css';
const Users = () => {
  const toast = useToast();
  const Edit = () => {
    toast({
      position: "bottom",
      render: () => successToast(),
      containerStyle: {
        width: "100%",
        minWidth: "100%",
        margin: "10px 10px",
      },
    });
  };
  const successToast = () => {
    return (
      <Flex p={3} border="2px solid teal" borderRadius={10} w={"25%"} bg="lightgreen" m={"auto"} gap={5} justifyContent="space-around" alignItems={"center"}>  
          <AiTwotoneEdit size={28} color="black"/>
          <Text fontSize={22} fontWeight={"bold"} color="black" >EDITED SUCCESSFULLY</Text>
      </Flex>
    );
  };
  const Deleted = () => {
     toast({
      position: "bottom",
      render: () => renderToast(),
      containerStyle: {
        width: "100%",
        minWidth: "100%",
        margin: "10px 10px",
      },
    });
  };
  const renderToast = () => {
    return (
      <Flex p={3} border="2px solid teal" borderRadius={10} w={"25%"} bg="tomato" m={"auto"} gap={5} justifyContent="space-around" alignItems={"center"}>  
          <MdDelete size={28} color="black"/>
          <Text fontSize={22} fontWeight={"bold"} color="black">DELETED SUCCESSFULLY</Text>
      </Flex>
    );
  };

  const data = [
    {
      name: 'Arpit Mishra',
      role: 'Admin',
    },
    {
      name: 'Prajwal Jaiswal',
      role: 'Admin',
    },
    {
      name: 'Vivek Goswami',
      role: 'User',
    },
    {
      name: 'Debobrota',
      role: 'User',
    },
    {
      name: 'New User',
      role: 'User',
    },
  ];
  const bg = useColorModeValue('white', 'gray.800');
  const bg2 = useColorModeValue('white', 'gray.800');
  const bg3 = useColorModeValue('gray.100', 'gray.700');
  return (
    <Flex
      w="full"
      bg="#edf3f8"
      _dark={{
        bg: '#121a35',
      }}
      p={5}
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        direction={{
          base: 'column',
        }}
        w="full"
        bg={{
          md: bg,
        }}
        shadow="lg"
      >
        <SimpleGrid
          spacingY={3}
          columns={{
            base: 1,
            md: 4,
          }}
          w={{
            base: 120,
            md: 'full',
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
          className={Styles.tab_border}
          borderRadius={20}
        >
          <span>Name</span>
          <span>Role</span>
          <span>Data</span>
          <chakra.span
            textAlign={{
              md: 'right',
            }}
          >
            Actions
          </chakra.span>
        </SimpleGrid>
        {data.map((token, tid) => {
          return (
            <Flex
              direction={{
                base: 'row',
                md: 'column',
              }}
              bg={bg2}
              key={tid}
              className={Styles.inner_bar}
              borderRadius={10}
            >
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
                    md: 'end',
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

export default Users;
