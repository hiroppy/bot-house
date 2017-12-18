// @flow

import type { Channels as State } from '../types/states/channels';
import type { Channels as Action } from '../types/actions/channels';

const initialState = {
  list: []
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'FETCH_CHANNELS_SUCCESS':
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default reducer;
