import * as types from './tutorial.actionTypes';
import {
  Tutorial,
  TutorialReducer,
} from '../../constants/Store/Tutorials/tutorial.types';
import axios from 'axios';
import { getItem } from '../../utils/localStorage';

export const postMyTutorial =
  (tutorial: Tutorial) =>
  (dispatch: ({ type, payload }: TutorialReducer) => void) => {
    dispatch({ type: types.POST_MY_TUTORIALS_LOADING });
    console.log(tutorial);
    
    axios
      .post('http://localhost:8080/tutorials/new', tutorial , {
        headers:{
          Authorization: `Bearer ${getItem("token")}`
        }
      })
      .then((res) => {
        dispatch({ type: types.POST_MY_TUTORIALS_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: types.GET_MY_TUTORIALS_FAILURE });
      });
  };

export const getMyTutorial =
  () => (dispatch: ({ type, payload }: TutorialReducer) => void) => {
    dispatch({ type: types.GET_MY_TUTORIALS_LOADING });
    axios
      .get('http://localhost:8080/tutorials')
      .then((res) => {
        dispatch({ type: types.GET_MY_TUTORIALS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: types.GET_MY_TUTORIALS_FAILURE });
      });
  };
