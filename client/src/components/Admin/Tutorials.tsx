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
  chakra,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VisuallyHidden,
  Stack,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Input,
  Select,
  Textarea,
  ModalFooter,
  Image,
  InputRightElement,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
// import { FiEdit } from 'react-icons/fi';
import { BsSearch, BsThreeDotsVertical } from 'react-icons/bs';
import Pagination from '../Pagination';

declare global {
  namespace JSX {
    interface InstrinsicElements {
      iframe: React.DetailedHTMLProps<
        React.IframeHTMLAttributes<HTMLIFrameElement>,
        HTMLIFrameElement
      > & {
        allowfullscreen?: boolean;
      };
    }
  }
}

const Tutorials = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const addNewProblem = (): void => {
    onOpen();
  };

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
            onClick={addNewProblem}
          >
            CREATE TUTORIAL
          </Button>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            size={'6xl'}
          >
            <ModalOverlay />
            <ModalContent m="auto">
              <ModalHeader
                textAlign={'center'}
                fontSize={25}
                textDecoration={'underline'}
              >
                Create New Tutorial
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <Flex w={'100%'} m="auto">
                  <Box w={'50%'}>
                    <FormControl>
                      <FormLabel fontSize={20}>Article Link</FormLabel>
                      <InputGroup size="sm">
                        <InputLeftAddon
                          bg="gray.50"
                          _dark={{
                            bg: 'gray.800',
                          }}
                          color="gray.500"
                          rounded="md"
                        >
                          http://
                        </InputLeftAddon>
                        <Input
                          type="tel"
                          name="problem_url"
                          // onChange={(e) => handleOnChange(e)}
                          placeholder="www.example.com"
                          w={'68%'}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl mt={5}>
                      <FormLabel fontSize={20}>Tutorial Title</FormLabel>
                      <Input
                        name="Tutorial_name"
                        // onChange={handleOnChange}
                        placeholder="Tutorial_name"
                        w={'80%'}
                      />
                    </FormControl>
                    <FormControl mt={2}>
                      <FormLabel fontSize={20}>Description</FormLabel>
                      <Textarea
                        name="description"
                        // onChange={handleOnChange}
                        placeholder="write a description for problem"
                        w={'80%'}
                      />
                    </FormControl>
                    <FormControl mt={5}>
                      <FormLabel fontSize={20}>Category</FormLabel>
                      <Select
                        name="language_used"
                        // onChange={handleOnChange}
                        placeholder="please select"
                        w={'80%'}
                      >
                        <option value="dsa">DSA</option>
                        <option value="development">Development</option>
                        <option value="networking">Networking</option>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box w={'50%'}>
                    <FormControl mt={5}>
                      <FormLabel fontSize={20}>Sub_Category</FormLabel>
                      <Select
                        name="language_used"
                        // onChange={handleOnChange}
                        placeholder="please select"
                        w={'80%'}
                      >
                        <option value="mern">MERN</option>
                        <option value="mean">MEAN</option>
                        <option value="mearn">MEARN</option>
                        <option value="nextJs">NextJs</option>
                        <option value="nXM">NXM</option>
                        <option value="graphql">Graphql</option>
                        <option value="typescript">Typescript</option>
                        <option value="nodeJs">NodeJs</option>
                        <option value="express">Express</option>
                        <option value="mongoDb">MongoDb</option>
                      </Select>
                    </FormControl>

                    <FormControl mt={5}>
                      <FormLabel fontSize={20}>youtube_video_embed</FormLabel>
                      <InputGroup size="sm">
                        <InputLeftAddon
                          bg="gray.50"
                          _dark={{
                            bg: 'gray.800',
                          }}
                          color="gray.500"
                          rounded="md"
                        >
                          http://
                        </InputLeftAddon>
                        <Input
                          type="tel"
                          name="video_reference"
                          // onChange={handleOnChange}
                          placeholder="www.example.com"
                          w={'68%'}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl mt={5}>
                      <FormLabel fontSize={20}>isPlaylist</FormLabel>
                      <Select
                        name="difficulty"
                        // onChange={handleOnChange}
                        placeholder="please select"
                        w={'80%'}
                      >
                        <option value="true">True</option>
                        <option value="false">False</option>
                      </Select>
                    </FormControl>
                  </Box>
                </Flex>
              </ModalBody>

              <ModalFooter>
                <Button
                  // onClick={handleOnSubmit}
                  color={'white'}
                  bgColor={'purple.700'}
                  // isLoading={isLoading}
                  mx={3}
                  _hover={{ bgColor: 'purple.500' }}
                  loadingText="Adding"
                >
                  Add It
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </ButtonGroup>
      </Box>
      <Divider />
      <InputGroup mt={3}>
        <Input placeholder="Search for contents" />
        <InputRightElement children={<BsSearch />} />
      </InputGroup>
      <HStack mt={3}>
        <Select>
          <option value="">Category</option>
          <option value="DSA">DSA</option>
          <option value="Development">Development</option>
          <option value="Networking">Networking</option>
        </Select>
        <Select>
          <option value="">Sub-Category</option>
          <option value="MERN">MERN</option>
          <option value="MEAN">MEAN</option>
          <option value="MEARN">MEARN</option>
          <option value="React">React</option>
          <option value="NodeJs">NodeJs</option>
          <option value="Java">Java</option>
          <option value="GraphQl">GraphQl</option>
          <option value="SQL">SQL</option>
        </Select>
      </HStack>
      <Card maxW="sm" objectFit="cover" mt={'3'}>
        <CardBody p={'2'}>
          <Stack mt="3" spacing="2">
            <iframe
              src="https://www.youtube.com/embed/uXWycyeTeCs"
              width={'100%'}
              height={'200'}
              allowFullScreen
              ref={iframeRef}
            ></iframe>
            <Flex justifyContent={'space-between'} alignItems={'center'}>
              {/* <Image src={"https://www.youtube.com/embed/GiyL4KFRNBA"} 
              alt={"YT"}/> */}
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
      </Card>

      <Pagination activePage={1} currPage={1} />
    </Box>
  );
};

export default Tutorials;
