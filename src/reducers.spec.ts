import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

import {
  requestRobots,
  initialStateRobot,
  searchRobots,
  initialStateSearch,
} from './reducers';
import { RequestRobotsAction, SetSearchFieldAction } from './actions';

describe('searchRobots Reducer', () => {
  it('should return initial state', () => {
    const state = undefined;
    const action = {} as SetSearchFieldAction;
    expect(searchRobots(state, action)).toEqual(initialStateSearch);
  });

  it('should handle CHANGE_SEARCH_FIELD action', () => {
    expect(
      searchRobots(initialStateSearch, {
        type: CHANGE_SEARCH_FIELD,
        payload: 'testing',
      })
    ).toEqual({ searchField: 'testing' });
  });
});

describe('requestRobots Reducer', () => {
  it('should return initial state', () => {
    const state = undefined;
    const action = {} as RequestRobotsAction;
    expect(requestRobots(state, action)).toEqual(initialStateRobot);
  });

  it('should handle REQUEST_ROBOTS_PENDING action', () => {
    expect(
      requestRobots(initialStateRobot, {
        type: REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({
      ...initialStateRobot,
      isPending: !initialStateRobot.isPending,
    });
  });

  it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
    const expectedRobots = [
      {
        id: 1,
        username: 'janedo',
        name: 'Jane Doe',
        email: 'jane@doe.com',
      },
    ];

    expect(
      requestRobots(initialStateRobot, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: expectedRobots,
      })
    ).toEqual({
      ...initialStateRobot,
      robots: expectedRobots,
    });
  });

  it('should handle REQUEST_ROBOTS_FAILED action', () => {
    expect(
      requestRobots(initialStateRobot, {
        type: REQUEST_ROBOTS_FAILED,
        payload: 'Oops!!!',
      })
    ).toEqual({
      ...initialStateRobot,
      error: 'Oops!!!',
    });
  });
});
