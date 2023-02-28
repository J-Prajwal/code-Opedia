import {
  TutorialInitialState,
  TutorialReducer,
} from '../../constants/Store/Tutorials/tutorial.types';
import * as types from './tutorial.actionTypes';

const initialState: TutorialInitialState = {
  isLoading: false,
  isPostSuccess: false,
  isError: false,
  tutorials: [],
};

export const reducer = (
  state = initialState,
  { type, payload }: TutorialReducer
) => {
  switch (type) {
    case types.GET_MY_TUTORIALS_LOADING:
      return { ...state, isLoading: true, isError: false };
    case types.GET_MY_TUTORIALS_SUCCESS:
      return { ...state, isLoading: false, tutorials: payload, isError: false };
    case types.GET_MY_TUTORIALS_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case types.POST_MY_TUTORIALS_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isPostSuccess: false,
      };
    case types.POST_MY_TUTORIALS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isPostSuccess: true,
      };
    case types.POST_MY_TUTORIALS_FAILURE:
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
