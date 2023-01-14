import { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContests } from "../store/Contests/contests.actions";
import { ContestDetails, ContestsInitialState } from "../constants/constants";
import Loader from "../components/Loader";
import { Heading, SimpleGrid } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import ContestCard from "../components/ContestCard";

type State = {
  contest: ContestsInitialState;
};

const Contests = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { isLoading, isError, contests }: ContestsInitialState = useSelector(
    (state: State) => state.contest
  );
  useEffect(() => {
    dispatch(getAllContests());
  }, []);
  // console.log(contests);
  if (isLoading) return <Loader />;

  return (
    <>
      <Heading
        fontFamily={"mono"}
        my={10}
        fontWeight={"normal"}
        textAlign={"center"}
      >
        Contests
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={10}>
        {contests.map((ele: ContestDetails, ind: number) => (
          <ContestCard contest={ele} key={ind} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Contests;
