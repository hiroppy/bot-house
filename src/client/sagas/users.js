// @flow

import { put, takeLatest } from 'redux-saga/effects';

import type { Effect } from 'redux-saga';

function *fetchUsers(): Generator<Effect, void, *> {
  try {
    const res = yield window.fetch('v1/users').then((res) => res.json());

    yield put({
      type   : 'FETCH_USERS_SUCCESS',
      payload: res.data
    });
  } catch (e) {

  }
}

function *authProcess(): Generator<Effect, void, *> {
  yield takeLatest('FETCH_USERS', fetchUsers);
}

export default authProcess;
