import { apiGetReq } from './api';
import { RobotProps } from './containers/App';
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './contants';

interface Action {
  type: string;
  payload?: string | Array<RobotProps>;
}
export const setSearchField = (text: string): Action => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

type DispatchFunc = (p: Action) => void;

export const requestRobots = () => async (dispatch: DispatchFunc) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  try {
    const data: Array<RobotProps> = await apiGetReq(
      'https://jsonplaceholder.typicode.com/users'
    );
    dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error });
  }
};
