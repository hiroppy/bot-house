// @flow

import type { Auth as State } from '../types/states/auth';
import type { Auth as Action } from '../types/actions/auth';

const initialState = {
  uri: `https://${process.env.SLACK_TEAM_NAME}.slack.com/oauth?` +
    `client_id=${process.env.SLACK_CLIENT_ID}` +
    `&redirect_uri=${process.env.SITE_URI}/auth/cb&scope=read`,
  loggedIn: false
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'UPDATE_LOGGED_IN_STATUS':
      return { ...state, loggedIn: action.payload.status };
    case 'LOGIN':
    default:
      return state;
  }
};

export default reducer;
