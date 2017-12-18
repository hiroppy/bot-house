// @flow

import { stringify } from 'querystring';
import { push } from 'react-router-redux';
import { put, takeLatest } from 'redux-saga/effects';

import type { Effect } from 'redux-saga';
import type {
  FetchBots,
  FetchBot,
  UpdateBot,
  CreateBot,
  DeleteBot
} from '../types/actions/bots';

function *fetchBots(action: FetchBots): Generator<Effect, void, *> {
  try {
    const qs = stringify(action.query);
    const res = yield window.fetch(`/v1/bots?${qs}`).then((res) => res.json());

    yield put({
      type   : 'FETCH_BOTS_SUCCESS',
      payload: res.data
    });
  } catch (e) {
    yield put({ type: 'DISPLAY_ALERT_SERVER_ERROR' });
  }
}

function *fetchBot(action: FetchBot): Generator<Effect, void, *> {
  try {
    const res = yield window.fetch(`/v1/bots/${action.id}`).then((res) => res.json());

    yield put({
      type   : 'FETCH_BOT_SUCCESS',
      payload: res.data
    });
  } catch (e) {
    yield put({ type: 'DISPLAY_ALERT_SERVER_ERROR' });
  }
}

function *updateBot(action: UpdateBot): Generator<Effect, void, *> {
  try {
    const res = yield window.fetch(`/v1/bots/${action.id}`, {
      method : 'put',
      body   : JSON.stringify(action.data),
      headers: {
        'Accept'      : 'application/json',
        'content-Type': 'application/json'
      }
    }).then((res) => res.json());
  } catch (e) {
    yield put({ type: 'DISPLAY_ALERT_SERVER_ERROR' });
  }
}

function *createBot(action: CreateBot): Generator<Effect, void, *> {
  try {
    if (action.data.name === '' || action.data.identificationWord === '') {
      yield put({
        type   : 'DISPLAY_ALERT',
        payload: {
          type   : 'error',
          message: 'Name and Word must not be empty'
        }
      });

      return;
    }

    const res = yield window.fetch('/v1/bots/create', {
      method : 'post',
      body   : JSON.stringify(action.data),
      headers: {
        'Accept'      : 'application/json',
        'content-Type': 'application/json'
      },
      credentials: 'include'
    }).then((res) => res.json());

    if (res.status === 500) {
      yield put({ type: 'DISPLAY_ALERT_SERVER_ERROR' });

      return;
    }

    if (res.data && res.data.id) {
      yield put({ type: 'FETCH_CHANNELS' });
      yield put(push(`/bots/${res.data.id}`));
    }
    else if (res.data.message) {
      yield put({
        type   : 'DISPLAY_ALERT',
        payload: {
          type   : 'error',
          message: res.data.message
        }
      });
    }
  } catch (e) {
    console.error(e);
  }
}

function *deleteBot(action: DeleteBot): Generator<Effect, void, *> {
  try {
    const status = yield window.fetch(`/v1/bots/${action.id}`, {
      method: 'delete'
    }).then((res) => res.status);

    if (status === 200) {
      yield put({ type: 'FETCH_CHANNELS' });
      yield put(push('/'));
    }
  } catch (e) {
    yield put({ type: 'DISPLAY_ALERT_SERVER_ERROR' });
  }
}

function *botsProcess(): Generator<Effect, void, *> {
  yield takeLatest('FETCH_BOT', fetchBot);
  yield takeLatest('FETCH_BOTS', fetchBots);
  yield takeLatest('UPDATE_BOT', updateBot);
  yield takeLatest('CREATE_BOT', createBot);
  yield takeLatest('DELETE_BOT', deleteBot);
}

export default botsProcess;
