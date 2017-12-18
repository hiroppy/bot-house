// @flow

import type { Bots as State } from '../types/states/bots';
import type { Bots as Action } from '../types/actions/bots';

const initialState = {
  bot : {},
  list: []
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'FETCH_BOTS_SUCCESS':
      return { ...state, list: action.payload };
    case 'FETCH_BOT_SUCCESS':
      return { ...state, bot: action.payload };
    case 'FETCH_BOTS':
    case 'UPDATE_BOT':
    case 'CREATE_BOT':
    case 'DELETE_BOT':
    default:
      return state;
  }
};

export default reducer;
