import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Tag,
  Text,
  useToast,
  chakra,
  Link,
  Avatar,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../constants/constants';
import { useEffect } from 'react';
import { getMyProblem } from '../store/Problems/problems.actions';
import { useAppDispatch } from '../store/Store';
import Loader from './Loader';
import {Link as RouterLink} from "react-router-dom";

const AllProblems = () => {
  const toast = useToast();
  const { isLoading, problems } = useSelector((state: State) => state.problems);
  const { token } = useSelector((state: State) => state.auth);
  const dispatch = useDispatch<useAppDispatch>();

  useEffect(() => {
    dispatch(getMyProblem(token));
  }, []);

  if (isLoading) return <Loader />;
  console.log(problems);
  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} gap={3}>
        {problems?.map((problem, i) => (
          <Flex
            bg="#edf3f8"
            _dark={{
              bg: '#3e3e3e',
            }}
            w="full"
            alignItems="center"
            justifyContent="center"
            m={'auto'}
          >
            <Box
              mx="auto"
              px={8}
              py={4}
              rounded="lg"
              shadow="lg"
              bg="white"
              _dark={{
                bg: 'gray.800',
              }}
              maxW="2xl"
            >
              <Flex justifyContent="space-between" alignItems="center">
                <chakra.span
                  fontSize="sm"
                  color="purple.600"
                  _dark={{
                    color: 'purple.400',
                  }}
                  textTransform={'capitalize'}
                >
                  {problem.difficulty}
                </chakra.span>
                <Button
                  size={'xs'}
                  color={'white'}
                  textTransform={'capitalize'}
                  px={4}
                  py={2}
                  bgColor={'purple.700'}
                  _hover={{ bgColor: 'purple.500' }}
                >
                  Set Reminder
                </Button>
              </Flex>

              <Box mt={2}>
                <Link
                  fontSize="2xl"
                  color="gray.700"
                  _dark={{
                    color: 'white',
                  }}
                  fontWeight="700"
                  _hover={{
                    color: 'gray.600',
                    _dark: {
                      color: 'gray.200',
                    },
                    textDecor: 'underline',
                  }}
                >
                  {problem.problem_name}
                </Link>
                <chakra.p
                  mt={2}
                  color="gray.600"
                  _dark={{
                    color: 'gray.300',
                  }}
                  h={'30vh'}
                  overflowY={'scroll'}
                  fontStyle={'italic'}
                >
                  {problem.description}
                </chakra.p>
              </Box>

              <Flex justifyContent="space-between" alignItems="center" mt={4}>
                <RouterLink to={`/my-problems/${problem._id}`}
                >
                  Read more
                </RouterLink>
              </Flex>
            </Box>
          </Flex>
        ))}
      </SimpleGrid>
    </>
  );
};

export default AllProblems;
