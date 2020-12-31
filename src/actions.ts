import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { apiGetReq } from './api';
import { RobotProps } from './containers/App';
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './contants';

interface SetSearchFieldAction {
  type: typeof CHANGE_SEARCH_FIELD;
  payload?: string | Array<RobotProps>;
}

export const setSearchField = (text: string): SetSearchFieldAction => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export interface RequestRobotsAction {
  type:
    | typeof REQUEST_ROBOTS_PENDING
    | typeof REQUEST_ROBOTS_SUCCESS
    | typeof REQUEST_ROBOTS_FAILED;
  payload?: string | Array<RobotProps>;
}

export const requestRobots = () => async (
  dispatch: ThunkDispatch<RequestRobotsAction, Promise<void>, AnyAction>
) => {
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
