import { RobotsState, SearchFieldState } from './containers/App';
import { RequestRobotsAction, SetSearchFieldAction } from './actions';
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

export const initialStateSearch: SearchFieldState = {
  searchField: '',
};

export const initialStateRobot: RobotsState = {
  isPending: false,
  robots: [],
  error: '',
};

type ISearchRobot = (
  a: SearchFieldState | undefined,
  b: SetSearchFieldAction
) => void;

export const searchRobots: ISearchRobot = (
  state = initialStateSearch,
  action
) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

type IRequestRobot = (
  a: RobotsState | undefined,
  b: RequestRobotsAction
) => void;

export const requestRobots: IRequestRobot = (
  state = initialStateRobot,
  action
) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, {
        isPending: false,
        robots: action.payload,
        error: '',
      });
    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false,
      });
    default:
      return state;
  }
};
