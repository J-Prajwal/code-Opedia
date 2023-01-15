import axios from "axios";
import { ReducerProps } from "../../constants/constants";
import * as types from "./contests.actionTypes";

export const getAllContests =
  () =>
  (dispatch: ({ type, payload }: ReducerProps) => void): void => {
    dispatch({ type: types.GET_ALL_CONTEST_LOADING });
    axios
      .get(
        `https://clist.by:443/api/v2/contest/?username=${process.env.REACT_APP_CLIST_USERNAME}&api_key=${process.env.REACT_APP_CLIST_API_KEY}&format=json&upcoming=true&format_time=true&start_time__during=1 day`
      )
      .then((res) => {
        dispatch({
          type: types.GET_ALL_CONTEST_SUCCESS,
          payload: res.data.objects,
        });
      })
      .catch((err) => {
        dispatch({ type: types.GET_ALL_CONTEST_FAILURE });
      });
  };
