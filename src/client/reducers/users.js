// @flow

import type { Users as State } from '../types/states/users';
import type { Users as Action } from '../types/actions/users';

const initialState = {
  own: {
    id       : -1,
    icon     : '',
    userId   : '',
    realName : '',
    createdAt: '',
    updatedAt: ''
  },
  list: []
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'UPDATE_OWN':
      return { ...state, own: action.payload };
    case 'FETCH_USERS_SUCCESS':
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default reducer;
