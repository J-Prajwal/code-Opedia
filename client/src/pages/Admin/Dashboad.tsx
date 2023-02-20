import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import { MdHome } from 'react-icons/md';
import { FaBell, FaCode, FaMoon, FaRss, FaSun, FaUser } from 'react-icons/fa';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { BiBookHeart } from 'react-icons/bi';
import { BsFillMenuAppFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../constants/constants';
import { Dispatch } from 'redux';
import { useEffect, useState } from 'react';
import { getUserDetails } from '../../store/Auth/auth.actions';
import Home from '../../components/Admin/Home';
import Articles from '../../components/Admin/Articles';
import Tutorials from '../../components/Admin/Tutorials';

const Dashboad = () => {
  const { userDetails, username } = useSelector((store: State) => store.auth);
  const dispatch: Dispatch<any> = useDispatch();
  const [comp, setComp] = useState(<Home />);
  const handleOnChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.values;
    setComp((values) => ({ ...values, [name]: value }));
  };
  useEffect(() => {
    if (!userDetails) {
      dispatch(getUserDetails(username));
    }
  }, []);
  const sidebar = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const NavItem = (props: any) => {
    const { icon, children, ...rest } = props;
    return (
      <Flex
        align="center"
        px="4"
        mx="2"
        rounded="md"
        py="3"
        cursor="pointer"
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
      >
        {icon && <Icon mr="2" boxSize="4" as={icon} />}
        {children}
      </Flex>
    );
  };

  const SidebarContent = (props: any) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="brand.600"
      borderColor="blackAlpha.300"
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        <Text fontSize="2xl" ml="2" fontWeight="semibold">
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
        </Text>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        aria-label="Main Navigation"
      >
        <NavItem onClick={() => setComp(<Home />)} icon={MdHome}>
          Home
        </NavItem>
        <NavItem
          onClick={() => setComp(<Home />)}
          value={'Users'}
          icon={FaUser}
        >
          Users
        </NavItem>
        <NavItem onClick={() => setComp(<Articles />)} icon={FaRss}>
          Articles
        </NavItem>
        <NavItem onClick={() => setComp(<Tutorials />)} icon={BiBookHeart}>
          Tutorials
        </NavItem>
        <NavItem onClick={() => setComp(<Home />)} value={'Flow'} icon={FaCode}>
          Flow
        </NavItem>
      </Flex>
    </Box>
  );

  return (
    <Box
      as="section"
      bg="gray.50"
      _dark={{
        bg: 'gray.700',
      }}
      minH="100vh"
    >
      <SidebarContent
        display={{
          base: 'none',
          md: 'unset',
        }}
      />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box
        ml={{
          base: 0,
          md: 60,
        }}
        transition=".3s ease"
      >
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          bg="white"
          _dark={{
            bg: 'gray.800',
          }}
          borderBottomWidth="1px"
          borderColor="blackAlpha.300"
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{
              base: 'inline-flex',
              md: 'none',
            }}
            onClick={sidebar.onOpen}
            icon={<BsFillMenuAppFill />}
            size="sm"
          />
          <InputGroup
            w="96"
            display={{
              base: 'none',
              md: 'flex',
            }}
          >
            <InputLeftElement color="gray.500">
              <AiOutlineFileSearch />
            </InputLeftElement>
            <Input placeholder="Search for articles..." />
          </InputGroup>

          <Flex gap={5} align="center">
            <Button
              variant={'ghost'}
              _hover={{ variant: 'ghost' }}
              onClick={toggleColorMode}
            >
              {colorMode == 'light' ? <FaMoon /> : <FaSun />}
            </Button>
            <Icon color="gray.500" as={FaBell} cursor="pointer" />
            <Avatar
              size="sm"
              name={userDetails?.fullname}
              src={userDetails?.profile_picture}
              cursor="pointer"
            />
          </Flex>
        </Flex>

        <Box as="main" p="4">
          {comp}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboad;
