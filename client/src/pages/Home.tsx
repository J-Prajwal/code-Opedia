import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Heading } from '@chakra-ui/react'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Heading> This is Heading </Heading>
        <Footer />
    </div>
  )
}

export default Home