// @flow

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import app from './app';
import bots from './bots';
import auth from './auth';
import users from './users';
import channels from './channels';

const reducer = combineReducers({
  app,
  bots,
  auth,
  users,
  router,
  channels
});

export default reducer;
