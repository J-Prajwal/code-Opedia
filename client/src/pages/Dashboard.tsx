import { Box, Grid, GridItem } from '@chakra-ui/react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Box
        bg="#1a202c"
        w="100%"
        h={{ "md": "500vh", 'lg': "180vh" }}
        borderTop="1px solid #9ca1cd"
        padding={{ "base": "20px 20px", "sm": "20px 20px", "md": "30px 30px", "lg": "30px 100px" }}>
        <Grid
          height="100%"
          templateRows='repeat(20, 2fr)'
          templateColumns='repeat(11, 1fr)'
          gap={4}>
          <GridItem
            rowSpan={{ "base": 60, "sm": 60, "md": 40, "lg": 18 }}
            colSpan={{ "base": 11, "sm": 11, "md": 11, "lg": 3 }}
            bg='#a9aed6'
            borderRadius="5px" />
          <GridItem
            rowSpan={{ "base": 13, "sm": 13, "md": 12, "lg": 4 }}
            colSpan={{ "base": 11, "sm": 11, "md": 11, "lg": 4 }}
            bg='#a9aed6'
            borderRadius="5px" />
          <GridItem
            rowSpan={{ "base": 13, "sm": 13, "md": 12, "lg": 4 }}
            colSpan={{ "base": 11, "sm": 11, "md": 11, "lg": 4 }}
            bg='#a9aed6'
            borderRadius="5px" />
          <GridItem
            rowSpan={{ "base": 13, "sm": 13, "md": 12, "lg": 4 }}
            colSpan={{ "base": 11, "sm": 11, "md": 11, "lg": 8 }}
            bg='#a9aed6'
            borderRadius="5px" />
          <GridItem
            rowSpan={{ "base": 45, "sm": 45, "md": 40, "lg": 12 }}
            colSpan={{ "base": 11, "sm": 11, "md": 11, "lg": 8 }}
            bg='#a9aed6'
            borderRadius="5px" />
        </Grid>
      </Box>
      <Footer />
    </div>
  )
}

export default Dashboard