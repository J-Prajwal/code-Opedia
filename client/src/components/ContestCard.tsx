import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Flex,
  HStack,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { ContestDetails } from '../constants/constants';
import { convertMsToTime } from '../utils/msToTime';
import { ExternalLinkIcon } from '@chakra-ui/icons';

type ContestProps = {
  contest: ContestDetails;
  key: number;
};

const ContestCard = ({ contest }: ContestProps) => {
  console.log(contest);
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
    >
      <Stack w={'full'}>
        <CardBody>
          <HStack justifyContent={'space-between'}>
            <Heading size="sm">{contest.event}</Heading>
            <Avatar name={contest.host} />
          </HStack>
          <HStack gap={10}>
            <Text color={'tomato'}>{contest.duration}</Text>
            <Link
              color={'blue.200'}
              isExternal
              href={`https://${contest.host}`}
            >
              {contest.host}
            </Link>
          </HStack>
          <HStack
            mt={3}
            fontSize={'lg'}
            fontFamily={'monospace'}
            alignItems={'baseline'}
          >
            <Heading size={'md'} fontWeight={'semibold'}>
              Starts:{' '}
            </Heading>
            <Text>{contest.start}</Text>
          </HStack>
          <HStack
            fontSize={'lg'}
            fontFamily={'monospace'}
            alignItems={'baseline'}
          >
            <Heading size={'md'} fontWeight={'semibold'}>
              Ends:{' '}
            </Heading>
            <Text>{contest.end}</Text>
          </HStack>
        </CardBody>

        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          bgColor={'purple.700'}
          w={'100%'}
          h={'5vh'}
          borderRadius={'md'}
        >
          <Link
            href={contest.href}
            target="_blank"
            _hover={{ textDecoration: 'none' }}
          >
            <Text color={'whitesmoke'} textTransform={'capitalize'}>
              Participate in the contest <ExternalLinkIcon />
            </Text>
          </Link>
        </Flex>
      </Stack>
    </Card>
  );
};

export default ContestCard;
