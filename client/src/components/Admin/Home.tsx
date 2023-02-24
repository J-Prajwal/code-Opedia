

import { Box } from '@chakra-ui/react';
import FourCard from './Breakdown/FourCard';
import GridCharts from './Breakdown/GridCharts';
import PSgraphs from './Breakdown/PSgraphs';
import Welcome from './Breakdown/Welcome';
const Home = () => {

  return (
    <Box pl="2%" pr="2%">
      {/* Top Cards */}
      <Box>
        <FourCard />
      </Box>
      {/* Welcome Card */}
      <Box>
        <Welcome />
      </Box>
        {/* graphs */}
        <Box>
          <PSgraphs />
        </Box>
        {/* Charts */}
        <Box>
          <GridCharts />
        </Box>
    </Box>
  )
};

export default Home;
