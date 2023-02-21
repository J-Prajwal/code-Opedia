import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from '@chakra-ui/react';

import { FiEdit } from 'react-icons/fi';
import { BsThreeDotsVertical } from 'react-icons/bs';

const Tutorials = () => {
  return (
    <Box>
      <Box
        p={'1'}
        mx="-3"
        mt={'-3'}
        display={'flex'}
        justifyContent={'space-between'}
      >
        <Heading as={'h5'} size="md">
          Tutorials
        </Heading>
        <ButtonGroup>
          <Button
            size="sm"
            variant="solid"
            fontSize={'0.8rem'}
            w={'12vh'}
            bg={'purple.600'}
            color={'white'}
         
          >
            ANALYTICS
          </Button>
          <Button
            w={'23vh'}
            size="sm"
            fontSize={'0.8rem'}
            bg={'whatsapp.700'}
            color={'white'}
          >
            CREATE TUTORIAL
          </Button>
        </ButtonGroup>
      </Box>
      <Divider />

      <Card maxW="sm" objectFit="cover" mt={'3'}>
        <CardBody p={'2'}>
          <Stack mt="3" spacing="2">
            <Flex justifyContent={'space-between'} alignItems={'center'}>
              <Heading size="md">Tutorial Title</Heading>
              <Menu>
                <MenuButton
                  as={Button}
                  bg={'none'}
                  _hover={{ bg: 'none' }}
                  _active={{ bg: 'none' }}
                >
                  <BsThreeDotsVertical cursor={'pointer'} />
                </MenuButton>
                <MenuList>
                  <MenuItem>Share</MenuItem>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Open</MenuItem>
                  <MenuItem>Edit</MenuItem>
                  <MenuItem>Delete</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
            <Text>Tutorial's description to be displayed here.</Text>
          </Stack>
        </CardBody>
        {/* <CardFooter mt={'-5'}>
          <HStack gap={5}>
            <Button color={'white'} size={'sm'} bg={'purple.500'}>
              Edit
            </Button>
            <Button color={'white'} size={'sm'} bg={'red.500'}>
              Delete
            </Button>
          </HStack>
        </CardFooter> */}
      </Card>
    </Box>
  );
};

export default Tutorials;
