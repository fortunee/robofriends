import { apiGetReq } from './api';
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './contants';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestRobots = () => async (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  try {
    const data = await apiGetReq('https://jsonplaceholder.typicode.com/users');
    dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error });
  }
};
