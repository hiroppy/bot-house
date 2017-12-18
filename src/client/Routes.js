// @flow

import React from 'react';
import { Switch, Route } from 'react-router';
import App from './components/App';
import {
  Index,
  BotsShow,
  BotsCreate,
  ChannelsShow,
  UsersIndex,
  UsersShow
} from './components';

const Router = () => (
  <App>
    <Switch>
      <Route
        path="/bots/create"
        component={() => (<BotsCreate />)}
      />
      <Route
        path="/bots/:id"
        component={() => (<BotsShow />)}
      />
      <Route
        path="/channels/:id"
        component={() => (<ChannelsShow />)}
      />
      <Route
        path="/users/:id"
        component={() => (<UsersShow />)}
      />
      <Route
        path="/users"
        component={() => (<UsersIndex />)}
      />
    </Switch>
  </App>
);

export default Router;
