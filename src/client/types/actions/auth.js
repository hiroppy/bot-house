// @flow

import type { Success } from '../../../types/apis/auth';

export type Login = {
  type: 'LOGIN';
};

export type UpdateLoggedInStatus = {
  type: 'UPDATE_LOGGED_IN_STATUS';
  payload: Success;
};

export type CheckLoginSuccess = {
  type: 'CHECK_LOGIN_SUCCESS';
};

export type Auth =
  Login |
  CheckLoginSuccess |
  UpdateLoggedInStatus;
