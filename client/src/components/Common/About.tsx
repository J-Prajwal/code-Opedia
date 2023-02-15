import { ArrowRightIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  TagRightIcon,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { BsBoxArrowInUpRight } from 'react-icons/bs';

const About = () => {
  return (
    <>
      <Text
        mt={40}
        pl={['2', '', '']}
        textAlign={['left', 'center', 'center']}
        textTransform={'uppercase'}
        color={'purple.300'}
        fontWeight={'light'}
      >
        about code'opedia
      </Text>
      <Heading
        size={['md', 'xl', 'xl']}
        fontWeight={'semibold'}
        textAlign={['left', 'center', 'center']}
        w={['', 'lg', 'lg']}
        pl={['2', '', '']}
        m={'auto'}
        mt={5}
      >
        Get the Edge in Computer Science with code'Opedia
      </Heading>
      <Text
        textAlign={['left', 'center', 'center']}
        w={['', '', '2xl']}
        pl={['2', '', '']}
        fontSize={['sm', 'lg', 'lg']}
        m={'auto'}
        mt={5}
      >
        Code'Opedia is a platform for students of computer science. They can
        maintain a record of all their solved DSA questions on different other
        platforms like leetcode, hackerrank, etc.
      </Text>
      <SimpleGrid
        m={'auto'}
        my={5}
        w={['50%', '85%', '85%']}
        gap={10}
        columns={[1, 2, 4]}
      >
        <Image
          m={'auto'}
          src="https://res.cloudinary.com/des8eyvcg/image/upload/v1674318853/assets/Developer_activity-amico_nwccoc.png"
        />
        <Image
          m={'auto'}
          src="https://res.cloudinary.com/des8eyvcg/image/upload/v1674318852/assets/Developer_activity-pana_kdkzrf.png"
        />
        <Image
          m={'auto'}
          src="https://res.cloudinary.com/des8eyvcg/image/upload/v1674318852/assets/Programming-bro_fcowd7.png"
        />
        <Image
          m={'auto'}
          src="https://res.cloudinary.com/des8eyvcg/image/upload/v1674318852/assets/Website_Creator-bro_yywvdh.png"
        />
      </SimpleGrid>
      <Flex justifyContent={'center'} my={5} mt={10}>
        <Button
          _hover={{ bgColor: 'purple.500' }}
          px={10}
          bgColor={'purple.700'}
          color={'white'}
        >
          SignUp
        </Button>
        <Button
          _hover={{ variant: 'ghost' }}
          rightIcon={<BsBoxArrowInUpRight />}
          variant={'ghost'}
        >
          Learn More{' '}
        </Button>
      </Flex>
      <Flex
        flexWrap={'wrap'}
        px={'10'}
        justifyContent={'space-between'}
        my={20}
        alignItems={'end'}
      >
        <Heading w={'40%'}>
          Stay ahead of the curve Start your journey today.
        </Heading>
        <HStack>
          <Button
            _hover={{ bgColor: 'purple.500' }}
            px={10}
            bgColor={'purple.700'}
            color={'white'}
          >
            Get Started
          </Button>
          <Button
            _hover={{ variant: 'outline' }}
            rightIcon={<BsBoxArrowInUpRight />}
            variant={'outline'}
          >
            Learn More{' '}
          </Button>
        </HStack>
      </Flex>
    </>
  );
};

export default About;
