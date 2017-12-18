// @flow

import configureStoreDev, { history as historyDev } from './configureStore.dev';
import configureStoreProd, { history as historyProd } from './configureStore.prod';

export const history = process.env.NODE_ENV === 'production' ?
  historyProd :
  historyDev;
export const configureStore = process.env.NODE_ENV === 'production' ?
  configureStoreProd :
  configureStoreDev;
