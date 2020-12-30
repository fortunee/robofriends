import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './contants';

import * as actions from './actions';

describe('setSearchField Action', () => {
  const payload = 'testing';
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload,
  }
  it('Should create an action to search robots', () => {
    expect(actions.setSearchField(payload)).toEqual(expectedAction);
  })
})

describe('requestRobots Action', () => {
  const mockStore = configureMockStore([thunkMiddleware])();
  mockStore.dispatch(actions.requestRobots());
  const [storeAction] = mockStore.getActions();
  const expectedAction = {
    type: REQUEST_ROBOTS_PENDING,
  }

  it('should handle robots pending request', () => {
    expect(storeAction).toEqual(expectedAction)
  })
})