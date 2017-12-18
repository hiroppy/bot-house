// @flow

import type { UserSchema } from '../../../types/apis/users';

export type Own = {
  type: 'UPDATE_OWN';
  payload: UserSchema;
};

export type FetchUsers = {
  type: 'FETCH_USERS';
};

export type FetchUsersSuccess = {
  type: 'FETCH_USERS_SUCCESS';
  payload: Array<UserSchema>;
};

export type Users =
  Own |
  FetchUsers |
  FetchUsersSuccess;
