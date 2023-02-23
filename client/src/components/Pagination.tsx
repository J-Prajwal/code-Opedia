import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { BiSkipPrevious } from 'react-icons/bi';
import { FcNext, FcPrevious } from 'react-icons/fc';

interface PaginationProps {
  activePage: number;
  currPage: number;
  totalPages?: number;
}

const Pagination = ({
  activePage,
  currPage,
  totalPages = 10,
}: PaginationProps) => {
  const pageNumbers = new Array(totalPages).fill(0).map((ele, ind) => ind + 1);

  return (
    <Flex justifyContent={'space-between'} m={'auto'} mt={20} w={'90%'}>
      <Button disabled={currPage == 1}>
        <FcPrevious />
      </Button>
      {pageNumbers.map((page, ind) => (
        <Button color={'white'} bg={activePage == page ? 'purple.500' : 'blue.500'} key={ind}>{page}</Button>
      ))}
      <Button disabled={currPage == pageNumbers[pageNumbers.length-1]}>
        <FcNext />
      </Button>
    </Flex>
  );
};

export default Pagination;
