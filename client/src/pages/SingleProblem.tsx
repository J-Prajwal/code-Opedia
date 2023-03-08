import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  Select,
} from '@chakra-ui/react';
import { MdLocalShipping } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../constants/constants';
import { useAppDispatch } from '../store/Store';
import { ChangeEvent, useEffect, useState } from 'react';
import { getProblemById } from '../store/Problems/problems.actions';
import { useParams } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  tomorrow,
  monokai,
  tomorrowNight,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { getItem, setItem } from '../utils/localStorage';
import Navbar from '../components/Navbar';
export default function SingleProduct() {
  const themes: any = {
    tomorrow,
    monokai,
    tomorrowNight,
  };
  const { problem, isLoading } = useSelector((state: State) => state.problems);
  const code = problem?.solution_code;
  const dispatch = useDispatch<useAppDispatch>();
  const { problemId } = useParams();
  const persistedTheme = getItem('theme');
  const [myTheme, setMyTheme] = useState(themes[persistedTheme || 'monokai']);
  const handleChangeTheme = (e: ChangeEvent<HTMLSelectElement>) => {
    const value: string = e.target.value;
    setItem('theme', value);
    setMyTheme(() => themes[value]);
  };
  useEffect(() => {
    dispatch(getProblemById(problemId));
  }, []);
  return (
    <>
      <Navbar />
      <Container maxW={'7xl'}>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
            >
              {problem?.problem_name}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}
            >
              {problem?.language_used}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'lg'}
                fontWeight={'300'}
              >
                {problem?.description}
              </Text>
              {code && (
                <>
                  <Flex
                    w={'full'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  >
                    <label htmlFor="selectTheme">Select Theme</label>
                    <Select
                      onChange={handleChangeTheme}
                      value={persistedTheme?.toString()}
                      id="selectTheme"
                      w={'80'}
                    >
                      <option value="monokai">monokai</option>
                      <option value="tomorrow">tomorrow</option>
                      <option value="tomorrowNight">tomorrowNight</option>
                    </Select>
                  </Flex>
                  <Flex w={'full'} justifyContent={'space-between'} gap={'1'}>
                    <SyntaxHighlighter
                      language={problem.language_used?.toLowerCase()}
                      style={myTheme}
                      wrapLongLines
                    >
                      {code}
                    </SyntaxHighlighter>
                    <Box border={'1px solid red'} h={20}></Box>
                  </Flex>
                </>
              )}
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}
              >
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Chronograph</ListItem>
                  <ListItem>Master Chronometer Certified</ListItem>{' '}
                  <ListItem>Tachymeter</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Anti‑magnetic</ListItem>
                  <ListItem>Chronometer</ListItem>
                  <ListItem>Small seconds</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Between lugs:
                  </Text>{' '}
                  20 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Bracelet:
                  </Text>{' '}
                  leather strap
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case:
                  </Text>{' '}
                  Steel
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case diameter:
                  </Text>{' '}
                  42 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Dial color:
                  </Text>{' '}
                  Black
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Crystal:
                  </Text>{' '}
                  Domed, scratch‑resistant sapphire crystal with anti‑reflective
                  treatment inside
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Water resistance:
                  </Text>{' '}
                  5 bar (50 metres / 167 feet){' '}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}
          >
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
