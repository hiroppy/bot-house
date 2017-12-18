import React from 'react';
import Loadable from 'react-loadable';

export const Index = Loadable({
  loader : () => import(/* webpackChunkName: 'Index' */ '../containers/pages/Root'),
  loading: () => (<div>Loading...</div>)
});

export const BotsShow = Loadable({
  loader : () => import(/* webpackChunkName: 'BotsShow' */ '../containers/pages/Bots/Show'),
  loading: () => (<div>Loading...</div>)
});

export const BotsCreate = Loadable({
  loader : () => import(/* webpackChunkName: 'BotsCreate' */ '../containers/pages/Bots/Create'),
  loading: () => (<div>Loading...</div>)
});

export const ChannelsShow = Loadable({
  loader : () => import(/* webpackChunkName: 'ChannelsShow' */ '../containers/pages/Channels/Show'),
  loading: () => (<div>Loading...</div>)
});

export const UsersIndex = Loadable({
  loader : () => import(/* webpackChunkName: 'UsersIndex' */ '../containers/pages/Users/Root'),
  loading: () => (<div>Loading...</div>)
});

export const UsersShow = Loadable({
  loader : () => import(/* webpackChunkName: 'UsersShow' */ '../containers/pages/Users/Show'),
  loading: () => (<div>Loading...</div>)
});
