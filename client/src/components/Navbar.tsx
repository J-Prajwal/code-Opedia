import {
  Avatar,
  Box,
  Button,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  VStack,
  VisuallyHidden,
  useColorModeValue,
  useDisclosure,
  chakra,
  Image,
  useColorMode,
} from '@chakra-ui/react';
import { AiFillBell, AiOutlineMenu } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { State } from '../constants/constants';
import { Dispatch, useEffect } from 'react';
import { getUserDetails } from '../store/Auth/auth.actions';

const Navbar = () => {
  const { userDetails, username } = useSelector((store: State) => store.auth);
  const dispatch: Dispatch<any> = useDispatch();
  const clink = window.location.href.split('/')[3];
  useEffect(() => {
    if (!userDetails) {
      dispatch(getUserDetails(username));
    }
  }, []);
  const bg = useColorModeValue('white', 'gray.800');
  const mobileNav = useDisclosure();
  const { colorMode } = useColorMode();
  return (
    <Box shadow="md" mb={10}>
      <chakra.header
        bg={bg}
        borderColor="gray.600"
        borderBottomWidth={1}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack spacing={4} display="flex" alignItems="center">
            <Box
              display={{
                base: 'inline-flex',
                md: 'none',
              }}
            >
              <IconButton
                display={{
                  base: 'flex',
                  md: 'none',
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: 'inherit',
                }}
                variant="ghost"
                onClick={mobileNav.onOpen}
                icon={<AiOutlineMenu />}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? 'flex' : 'none'}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <Button w="full" variant="ghost">
                  Practice
                </Button>
                <Button w="full" variant="solid" colorScheme="brand">
                  Contests
                </Button>
                <Button w="full" variant="ghost">
                  Tutorials
                </Button>
              </VStack>
            </Box>
            <Link to={'/'}>
              {colorMode == 'light' ? (
                <Image
                  src="https://res.cloudinary.com/des8eyvcg/image/upload/c_fill,h_126,w_500/v1674389945/Indic_Designs_Creative_Logo-removebg-preview_nb4mil.png"
                  w={'10rem'}
                />
              ) : (
                <Image
                  src="https://res.cloudinary.com/des8eyvcg/image/upload/v1671615829/1-removebg-preview_btiiyz.png"
                  w={'10rem'}
                />
              )}

              <VisuallyHidden>Code'Opedia</VisuallyHidden>
            </Link>
          </HStack>
          <HStack spacing={3} display="flex" alignItems="center">
            <HStack
              spacing={3}
              display={{
                base: 'none',
                md: 'inline-flex',
              }}
            >
              <Button
                variant={'ghost'}
                borderBottom={clink == 'my-problems' ? '1px solid purple' : ''}
                size="sm"
              >
                <Link to={`/my-problems`}> My Problems </Link>
              </Button>

              {userDetails?.is_admin && (
                <Button
                  variant={'ghost'}
                  borderBottom={
                    clink == '/admin/dashboard' ? '1px solid purple' : ''
                  }
                  size="sm"
                >
                  <Link to={'/admin/dashboard'}> Dashboard </Link>
                </Button>
              )}

              <Button
                variant={'ghost'}
                borderBottom={clink == 'practise' ? '1px solid purple' : ''}
                size="sm"
              >
                <Link to={'/practise'}>Practice</Link>
              </Button>
              <Button
                variant={'ghost'}
                borderBottom={clink == 'contests' ? '1px solid purple' : ''}
                size="sm"
              >
                <Link to={'/contests'}>Contests</Link>
              </Button>
              <Button
                variant={'ghost'}
                borderBottom={clink == 'tutorials' ? '1px solid purple' : ''}
                size="sm"
              >
                <Link to={'/tutorials'}>Tutorials</Link>
              </Button>
            </HStack>
            <chakra.a
              p={3}
              color="gray.800"
              _dark={{
                color: 'inherit',
              }}
              rounded="sm"
              _hover={{
                color: 'gray.800',
                _dark: {
                  color: 'gray.600',
                },
              }}
            >
              <AiFillBell />
              <VisuallyHidden>Notifications</VisuallyHidden>
            </chakra.a>
            {userDetails ? (
              <Link to={`/user/${userDetails?.username}`}>
                <Avatar
                  size="sm"
                  name={userDetails?.fullname}
                  src={userDetails?.profile_picture}
                />
              </Link>
            ) : (
              <Button bgColor={'purple.700'}>
                <Link to={'/signup'}>Register</Link>
              </Button>
            )}
          </HStack>
        </Flex>
      </chakra.header>
    </Box>
  );
};

export default Navbar;
