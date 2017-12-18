// @flow

import type { UserSchema } from '../../../types/apis/users';

export type Users = {
  own: UserSchema;
  list: Array<UserSchema>;
};
