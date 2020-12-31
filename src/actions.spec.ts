import { AnyAction } from 'redux';
import configureMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import fetchMock from 'fetch-mock';

import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

import { setSearchField, requestRobots, RequestRobotsAction } from './actions';

const URL = 'https://jsonplaceholder.typicode.com/users';
const initialState = {};
type DispatchExts = ThunkDispatch<RequestRobotsAction, void, AnyAction>;
type State = typeof initialState;

describe('setSearchField Action', () => {
  const payload = 'testing';
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload,
  };
  it('Should create an action to search robots', () => {
    expect(setSearchField(payload)).toEqual(expectedAction);
  });
});

describe('requestRobots Action', () => {
  const mockStore = configureMockStore<State, DispatchExts>([thunk])();
  const payload = [
    {
      id: 1,
      name: 'jane robo',
      username: 'jarob',
      email: 'jane@robots.com',
    },
  ];

  beforeEach(() => {
    mockStore.clearActions();
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should handle robots pending request', () => {
    mockStore.dispatch(requestRobots());
    const [pendingReqAction] = mockStore.getActions();
    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING,
    };
    expect(pendingReqAction).toEqual(expectedAction);
  });

  it('should handle robots requests success', (done) => {
    fetchMock.getOnce(URL, { body: payload });
    const expectedAction = {
      type: REQUEST_ROBOTS_SUCCESS,
      payload,
    };

    expect.assertions(1);
    mockStore.dispatch(requestRobots()).then(() => {
      const [, successReqAction] = mockStore.getActions();
      expect(successReqAction).toEqual(expectedAction);
      done();
    });
  });

  it('should handle failed robot requests', (done) => {
    fetchMock.mock(URL, Promise.reject('Bad robot!'));
    expect.assertions(2);
    mockStore.dispatch(requestRobots()).then((a) => {
      const [, failedReqAction] = mockStore.getActions();
      expect(failedReqAction.type).toEqual(REQUEST_ROBOTS_FAILED);
      expect(failedReqAction.payload).toEqual('Bad robot!');
      done();
    });
  });
});
