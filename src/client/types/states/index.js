// @flow

import type { App } from './app';
import type { Bots } from './bots';
import type { Auth } from './auth';
import type { Users } from './users';
import type { Router } from './router';
import type { Channels } from './channels';

export type State = {
  app: App;
  bots: Bots;
  auth: Auth;
  users: Users;
  router: Router;
  channels: Channels;
};
