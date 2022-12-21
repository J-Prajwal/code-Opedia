import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Heading } from "@chakra-ui/react";

const Signup = () => {
  return (
    <div>
      <Navbar />
        <Box h={"20rem"}>
            <Heading>Signup</Heading>
        </Box>
      <Footer />
    </div>
  );
};

export default Signup;
