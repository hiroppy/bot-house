// @flow

import { put, takeLatest } from 'redux-saga/effects';

import type { Effect } from 'redux-saga';

function *checkLoginSuccess(): Generator<Effect, void, *> {
  try {
    const res = yield window.fetch('/auth/success', {
      method     : 'post',
      credentials: 'include'
    }).then((res) => res.json());

    if (res.status) {
      yield put({
        type   : 'UPDATE_OWN',
        payload: { ...res.data }
      });

      yield put({
        type   : 'UPDATE_LOGGED_IN_STATUS',
        payload: { status: true }
      });
    }
  } catch (e) {

  }
}

function *usersProcess(): Generator<Effect, void, *> {
  yield takeLatest('CHECK_LOGIN_SUCCESS', checkLoginSuccess);
}

export default usersProcess;
