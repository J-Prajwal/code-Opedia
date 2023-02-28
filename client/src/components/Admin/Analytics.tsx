import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Chart } from 'react-google-charts';

const Analytics = () => {
  const data = [
    ['topics', 'video per topics'],
    ['React', 7],
    ['Express', 5],
    ['Mongodb', 3],
    ['React-redux', 2],
    ['Next JS', 2],
    ['React Router', 2],
    ['Javascript', 7],
  ];

  const options = {
    title: 'Tutotials Analytics',
  };

  return (
    <Box p={'1'} mt="4">
      <Heading as="h2" size={'lg'} textAlign="center">
        Tutorials Analytics
      </Heading>
      <Box display={'flex'} justifyContent={'space-around'} width="100%" mt="5">
        <Box boxShadow="xl" p="3" rounded="md"  textAlign={'center'}>
          <Heading>{data.length}</Heading>
          <Text fontSize={'lg'} fontWeight="medium">
            Total Videos{' '}
          </Text>
        </Box>
        <Box boxShadow="xl" p="3" rounded="md"  textAlign={'center'}>
          <Heading>{data.length}</Heading>
          <Text fontSize={'lg'} fontWeight="medium">
            Unlisted Videos{' '}
          </Text>
        </Box>
        <Box boxShadow="xl" p="3" rounded="md"  textAlign={'center'}>
          <Heading>{data.length}</Heading>
          <Text fontSize={'lg'} fontWeight="medium">
            {' '}
            Active Videos{' '}
          </Text>
        </Box>
      </Box>

      <Box boxShadow="2xl" p="5" rounded="md"  mt={'6'} >
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={'100%'}
          height={'400px'}
        />
      </Box>
    </Box>
  );
};

export default Analytics;
