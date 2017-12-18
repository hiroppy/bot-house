// @flow

import type { Login, CheckLoginSuccess } from '../types/actions/auth';

export const login = (): Login => ({
  type: 'LOGIN'
});

export const checkLoginSuccess = (): CheckLoginSuccess => ({
  type: 'CHECK_LOGIN_SUCCESS'
});
