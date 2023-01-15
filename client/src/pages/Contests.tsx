import { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContests } from "../store/Contests/contests.actions";
import {
  ContestDetails,
  ContestsInitialState,
  State,
} from "../constants/constants";
import Loader from "../components/Loader";
import { SimpleGrid } from "@chakra-ui/react";
import ContestCard from "../components/ContestCard";

const Contests = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { isLoading, isError, contests }: ContestsInitialState = useSelector(
    (state: State) => state.contest
  );
  useEffect(() => {
    dispatch(getAllContests());
  }, []);
  
  if (isLoading) return <Loader />;

  return (
    <>
      <SimpleGrid columns={[1, 1, 3]} gap={5} mx={10}>
        {contests.map((ele: ContestDetails, ind: number) => (
          <ContestCard contest={ele} key={ind} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Contests;
