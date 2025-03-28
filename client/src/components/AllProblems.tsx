import {
  Button,
  useToast,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../constants/constants';
import { useEffect } from 'react';
import { getMyProblem } from '../store/Problems/problems.actions';
import { useAppDispatch } from '../store/Store';
import Loader from './Loader';
import { Link as RouterLink } from 'react-router-dom';
import { ChevronDownIcon } from '@chakra-ui/icons';

const AllProblems = () => {
  const toast = useToast();
  const { isLoading, problems } = useSelector((state: State) => state.problems);
  const { token, userDetails } = useSelector((state: State) => state.auth);
  const dispatch = useDispatch<useAppDispatch>();
  useEffect(() => {
    dispatch(getMyProblem(token, userDetails?._id));
  }, [userDetails]);

  if (isLoading) return <Loader />;
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
              <Tr key={ind}>
                <Td>{ind + 1}</Td>
                <Td>
                  <RouterLink to={`/my-problems/${ele._id}`}>
                    {ele.problem_name}
                  </RouterLink>
                </Td>
                <Td>{ele.platform_name}</Td>
                <Td>
                  <a href={ele.problem_url} target="_blank">
                    {ele.problem_url}
                  </a>
                </Td>
                <Td>
                  <Menu>
                    <MenuButton
                      as={Button}
                      size={'xs'}
                      colorScheme={'green'}
                      rightIcon={<ChevronDownIcon />}
                    >
                      Revise
                    </MenuButton>
                    <MenuList>
                      <MenuItem>3 Days</MenuItem>
                      <MenuItem>7 Days</MenuItem>
                      <MenuItem>15 Days</MenuItem>
                      <MenuItem>30 Days</MenuItem>
                      <MenuItem>Custom</MenuItem>
                    </MenuList>
                  </Menu>
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
