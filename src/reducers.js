import { CHANGE_SEARCH_FIELD } from './contants';

const initialState = {
  searchField: '',
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assigne({}, state, { searchField: action.payload });
    default:
      return state;
  }
};
