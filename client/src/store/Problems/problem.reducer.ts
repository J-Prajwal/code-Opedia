import {
  ProblemInitialState,
  ProblemReducer,
} from "../../constants/Store/Problems/problems.types";
import * as types from "./problems.actionTypes";

const initialState: ProblemInitialState = {
  isLoading: false,
  isPostSuccess: false,
  isError: false,
  problems: [],
};

export const reducer = (
  state = initialState,
  { type, payload }: ProblemReducer
) => {
  switch (type) {
    case types.GET_MY_PROBLEMS_LOADING:
      return { ...state, isLoading: true, isError: false };
    case types.GET_MY_PROBLEMS_SUCCESS:
      return { ...state, isLoading: false, problems: payload, isError: false };
    case types.GET_MY_PROBLEMS_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case types.POST_MY_PROBLEMS_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isPostSuccess: false,
      };
    case types.POST_MY_PROBLEMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isPostSuccess: true,
      };
    case types.POST_MY_PROBLEMS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isPostSuccess: false,
      };
    default:
      return state;
  }
};
