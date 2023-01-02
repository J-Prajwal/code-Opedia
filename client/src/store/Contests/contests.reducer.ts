import { ContestsInitialState, ReducerProps } from "../../constants/constants";
import * as types from "./contests.actionTypes";

const initialState: ContestsInitialState = {
  isLoading: false,
  isError: false,
  contests: [],
};

export const reducer = (
  state: ContestsInitialState = initialState,
  { type, payload }: ReducerProps
) => {
  switch (type) {
    case types.GET_ALL_CONTEST_LOADING: {
      return { ...state, IsLoading: true, isError: false };
    }
    case types.GET_ALL_CONTEST_SUCCESS: {
      return { ...state, isLoading: false, isError: false, contests: payload };
    }
    case types.GET_ALL_CONTEST_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    default:
      return state;
  }
};
