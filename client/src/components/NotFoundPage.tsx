import { Box, Heading, Image, Stack,Link, Text } from '@chakra-ui/react'
import React from 'react'
// import {Link} from "react-router-dom"
import error from "../utils/404-animation.gif"

const NotFoundPage = () => {
  return (
    <Box  >
        <Image src="https://res.cloudinary.com/des8eyvcg/image/upload/c_fill,h_126,w_500/v1674389945/Indic_Designs_Creative_Logo-removebg-preview_nb4mil.png"
         alt="Page not found" width={"50vh"}/>
        <Stack display={"flex"} justifyContent={"center"} alignItems={"center"}>
         <Heading>Page Not Found</Heading>
         <Text>Please check that the Web site address is spelled correctly.
Or go to our <Link href="/" color={"blue.400"} > home page</Link>, 
and use the menus to navigate to a specific section.</Text>
<Box border={""}>
<Image height={"300px"}
src={"https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-12188.jpg?w=740&t=st=1676959160~exp=1676959760~hmac=ff282f0b533640f8353f0159f47f68420053e6da1ef4a57ded71545de0f9a8a6"} 
alt="$04 not found" />
</Box>
        </Stack>
        </Box>
  )
}

export default NotFoundPage