import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { apiGetReq } from './api';
import { RobotProps } from './containers/App';
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
  ROBOTS_URL,
} from './constants';

export interface SetSearchFieldAction {
  type: string;
  payload?: string;
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
  payload?: string | RobotProps[];
}

export const requestRobots = () => async (
  dispatch: ThunkDispatch<RequestRobotsAction, Promise<void>, AnyAction>
) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  try {
    const data: RobotProps[] = await apiGetReq(ROBOTS_URL);
    dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error });
  }
};
