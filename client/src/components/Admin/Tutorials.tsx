import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Divider,
  Flex,
  HStack,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
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
  InputRightElement,
  useToast,
} from '@chakra-ui/react';
import React, { Dispatch, useEffect, useRef, useState } from 'react';
// import { FiEdit } from 'react-icons/fi';
import { BsSearch, BsThreeDotsVertical } from 'react-icons/bs';
import { State } from '../../constants/constants';
import Pagination from '../Pagination';
import { Tutorial } from '../../constants/Store/Tutorials/tutorial.types';
import { useDispatch, useSelector } from 'react-redux';
import { postMyTutorial } from '../../store/Tutorials/tutorial.actions';
import { getUserDetails } from '../../store/Auth/auth.actions';
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

  const { userDetails, username } = useSelector((store: State) => store.auth);
  const { isLoading, isError, isPostSuccess, tutorials } = useSelector(
    (store: State) => store.tutorials
  );
  const dispatch: Dispatch<any> = useDispatch();

  const [tutorialData, setTutorialData] = useState<Tutorial>({
    title: '',
    youtube_video_embed: '',
    article_link: '',
    category: '',
    description: '',
    isPlaylist: false,
    sub_category: '',
  });
  const toast = useToast();

  const addNewProblem = (): void => {
    onOpen();
  };

  const handleOnChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    let name = e.target.name;
    let value: boolean | string = e.target.value;

    if (name === 'isPlaylist') {
      value = value === 'true' ? true : false;
    }

    setTutorialData((values) => ({ ...values, [name]: value }));
  };
  const handleOnSubmit = () => {
    tutorialData.title = userDetails?._id;
    dispatch(postMyTutorial(tutorialData));
  };

  useEffect(() => {
    if (isPostSuccess) {
      toast({
        title: 'Tutorial Added',
        status: 'success',
        position: 'top',
        variant: 'subtle',
        containerStyle: {
          backgroundColor: 'purple.700',
          borderRadius: 'md',
        },
        duration: 3000,
        isClosable: true,
      });
    }
    if (!userDetails) {
      dispatch(getUserDetails(username));
    }
  }, []);
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
                          name="article_link"
                          onChange={handleOnChange}
                          placeholder="www.example.com"
                          w={'68%'}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl mt={5}>
                      <FormLabel fontSize={20}>Tutorial Title</FormLabel>
                      <Input
                        name="title"
                        onChange={handleOnChange}
                        placeholder="Tutorial_name"
                        w={'80%'}
                      />
                    </FormControl>
                    <FormControl mt={2}>
                      <FormLabel fontSize={20}>Description</FormLabel>
                      <Textarea
                        name="description"
                        onChange={handleOnChange}
                        placeholder="write a description for problem"
                        w={'80%'}
                      />
                    </FormControl>
                    <FormControl mt={5}>
                      <FormLabel fontSize={20}>Category</FormLabel>
                      <Select
                        name="category"
                        onChange={handleOnChange}
                        placeholder="please select"
                        w={'80%'}
                      >
                        <option value="DSA">DSA</option>
                        <option value="Development">Development</option>
                        <option value="Networking">Networking</option>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box w={'50%'}>
                    <FormControl mt={5}>
                      <FormLabel fontSize={20}>Sub_Category</FormLabel>
                      <Select
                        name="sub_category"
                        onChange={handleOnChange}
                        placeholder="please select"
                        w={'80%'}
                      >
                        <option value="MERN">MERN</option>
                        <option value="MEAN">MEAN</option>
                        <option value="MEARN">MEARN</option>
                        <option value="NextJs">NextJs</option>
                        <option value="NXM">NXM</option>
                        <option value="Graphql">Graphql</option>
                        <option value="Typescript">Typescript</option>
                        <option value="NodeJs">NodeJs</option>
                        <option value="Express">Express</option>
                        <option value="MongoDb">MongoDb</option>
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
                          name="youtube_video_embed"
                          onChange={handleOnChange}
                          placeholder="www.example.com"
                          w={'68%'}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl mt={5}>
                      <FormLabel fontSize={20}>isPlaylist</FormLabel>
                      <Select
                        name="isPlaylist"
                        onChange={handleOnChange}
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
                  onClick={handleOnSubmit}
                  color={'white'}
                  bgColor={'purple.700'}
                  isLoading={isLoading}
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
