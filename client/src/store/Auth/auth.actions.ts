import axios from 'axios';
import {
  AuthReducer,
  ReducerProps,
  UserCredentials,
  UserDetails,
} from '../../constants/constants';
import * as types from './auth.actionTypes';
import { Dispatch } from 'redux';
import { setItem } from '../../utils/localStorage';

export const registerUser =
  (userDetails: UserDetails) =>
  (dispatch: ({ type, payload }: ReducerProps) => void): boolean => {
    dispatch({ type: types.REGISTER_USER_LOADING });
    axios
      .post('http://localhost:8080/users/register', userDetails)
      .then((res) => {
        console.log(res);
        dispatch({ type: types.REGISTER_USER_SUCCESS, payload: res.data });
        return true;
      })
      .catch((err) => {
        dispatch({ type: types.REGISTER_USER_FAILURE });
      });
    return false;
  };

export const loginUser =
  (userCreds: UserCredentials) =>
  (dispatch: ({ type, payload }: AuthReducer) => Dispatch) => {
    dispatch({ type: types.LOGIN_USER_LOADING });
    return axios
      .post('http://localhost:8080/users/login', userCreds)
      .then((res) => {
        dispatch({ type: types.LOGIN_USER_SUCCESS, payload: res.data });
        setItem('token', res.data.token);
        setItem('username', res.data.user.username);
        return true;
      })
      .catch((err) => {
        dispatch({ type: types.LOGIN_USER_FAILURE });
        return false;
      });
  };

export const getUserDetails =
  (username?: string | null) =>
  (dispatch: ({ type, payload }: ReducerProps) => Dispatch) => {
    dispatch({ type: types.GET_USER_DETAILS_LOADING });
    return axios
      .get(`http://localhost:8080/users?q=${username}`)
      .then((res) => {
        dispatch({
          type: types.GET_USER_DETAILS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({ type: types.GET_USER_DETAILS_FAILURE });
      });
  };
