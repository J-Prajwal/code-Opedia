import { Box, Grid, GridItem } from '@chakra-ui/react';
import styles from "./Dashboard.module.css"
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Box className={styles.outer_box}>
        <Grid
          height="100%"
          templateRows='repeat(5, 1fr)'
          templateColumns='repeat(11, 1fr)'
          gap={4}>
          <GridItem rowSpan={4} colSpan={3} bg='#a9aed6' borderRadius="5px" />
          <GridItem colSpan={4} bg='#a9aed6' borderRadius="5px" />
          <GridItem colSpan={4} bg='#a9aed6' borderRadius="5px" />
          <GridItem colSpan={8} bg='#a9aed6' borderRadius="5px" />
          <GridItem rowSpan={3} colSpan={8} bg='#a9aed6' borderRadius="5px" />
        </Grid>
      </Box>
      <Footer />
    </div>
  )
}

export default Dashboard