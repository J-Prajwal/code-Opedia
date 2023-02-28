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
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../constants/constants';
import { useEffect } from 'react';
import { getMyProblem } from '../store/Problems/problems.actions';
import { useAppDispatch } from '../store/Store';
import Loader from './Loader';
import { Link as RouterLink } from 'react-router-dom';

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
      <TableContainer>
        <Table size="sm" variant={'striped'} colorScheme="purple">
          <Thead>
            <Tr>
              <Th>s.no.</Th>
              <Th>Problem Name</Th>
              <Th>Platform Name</Th>
              <Th>Url</Th>
              <Th>Revision</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {problems?.map((ele, ind) => (
              <Tr>
                <Td>{ind + 1}</Td>
                <Td>
                  <RouterLink to={`/my-problems/${ele._id}`}>
                    {ele.problem_name}
                  </RouterLink>
                </Td>
                <Td>{ele.platform_name}</Td>
                <Td>
                  <a href={ele.problem_url}>{ele.problem_url}</a>
                </Td>
                <Td>
                  <Button size={'xs'} colorScheme="green">
                    Revise
                  </Button>
                </Td>
                <Td>
                  <Button size={'xs'} colorScheme="red">
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AllProblems;
