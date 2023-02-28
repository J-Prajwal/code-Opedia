import * as types from './problems.actionTypes';
import {
  Problem,
  ProblemReducer,
} from '../../constants/Store/Problems/problems.types';
import axios from 'axios';
import { getItem } from '../../utils/localStorage';

export const postMyProblem =
  (problem: Problem) =>
  (dispatch: ({ type, payload }: ProblemReducer) => void) => {
    dispatch({ type: types.POST_MY_PROBLEMS_LOADING });
    axios
      .post('http://localhost:8080/problems/new', problem)
      .then((res) => {
        dispatch({ type: types.POST_MY_PROBLEMS_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: types.GET_MY_PROBLEMS_FAILURE });
      });
  };

export const getMyProblem =
  (userToken: string | null) =>
  (dispatch: ({ type, payload }: ProblemReducer) => void) => {
    dispatch({ type: types.GET_MY_PROBLEMS_LOADING });
    axios
      .get(`http://localhost:8080/problems`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        console.log(res)
        dispatch({
          type: types.GET_MY_PROBLEMS_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        dispatch({ type: types.GET_MY_PROBLEMS_FAILURE });
      });
  };

export const getProblemById =
  (id: string | undefined) => (dispatch: ({ type, payload }: ProblemReducer) => void) => {
    dispatch({ type: types.GET_MY_PROBLEMS_LOADING });
    axios
      .get(`http://localhost:8080/problems/${id}`, {
        headers: {
          Authorization: `Bearer ${getItem('token')}`
        }
      })
      .then((res) => {
        dispatch({
          type: types.GET_PROBLEM_BY_ID_SUCCESS,
          payload: res.data,
        });
      })
      .catch((e) => {
        dispatch({ type: types.GET_PROBLEM_BY_ID_FAILURE });
      });
  };
