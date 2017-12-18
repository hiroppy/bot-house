// @flow

import type { App as State } from '../types/states/app';
import type { App as Action } from '../types/actions/app';

const initialState = {
  alert: {
    type   : 'info', // info, success, error
    message: ''
  }
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'DISPLAY_ALERT':
      return {
        ...state,
        alert: {
          ...state.alert,
          ...action.payload
        }
      };
    case 'DISPLAY_ALERT_SERVER_ERROR':
      return {
        ...state,
        alert: {
          type   : 'error',
          message: 'Internal Server Error'
        }
      };
    default:
      return state;
  }
};

export default reducer;
