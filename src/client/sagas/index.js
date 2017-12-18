// @flow

import { all, fork } from 'redux-saga/effects';
import bots from './bots';
import auth from './auth';
import users from './users';
import channels from './channels';

import type { Effect } from 'redux-saga';

/**
 * Root for saga
 */
function *rootSaga(): Generator<Effect, void, *> {
  yield all([
    fork(bots),
    fork(auth),
    fork(users),
    fork(channels)
  ]);
}

export default rootSaga;
