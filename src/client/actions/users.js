// @flow

import type { FetchUsers } from '../types/actions/users';

export const fetchUsers = (): FetchUsers => ({
  type: 'FETCH_USERS'
});
