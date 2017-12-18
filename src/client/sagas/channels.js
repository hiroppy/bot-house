// @flow

import { put, takeLatest } from 'redux-saga/effects';

import type { Effect } from 'redux-saga';

function *fetchChannels(): Generator<Effect, void, *> {
  try {
    const res = yield window.fetch('/v1/channels').then((res) => res.json());

    yield put({
      type   : 'FETCH_CHANNELS_SUCCESS',
      payload: res.data
    });
  } catch (e) {
    yield put({
      type   : 'ERROR',
      payload: e
    });
  }
}

function *channelsProcess(): Generator<Effect, void, *> {
  yield takeLatest('FETCH_CHANNELS', fetchChannels);
}

export default channelsProcess;
