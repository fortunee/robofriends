import {
  CHANGE_SEARCH_FIELD,
} from './contants';

import * as actions from './actions';

describe('setSearchField Action', () => {
  it('Should create an action to search robots', () => {
    const payload = 'testing';
    const expectedAction = {
      type: CHANGE_SEARCH_FIELD,
      payload,
    }

    expect(actions.setSearchField(payload)).toEqual(expectedAction);
  })
})

