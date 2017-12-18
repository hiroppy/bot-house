// @flow

import type {
  GetBot,
  GetBots,
  PostBotSchema
} from '../../../types/apis/bots';

export type FetchBots = {
  type: 'FETCH_BOTS';
  query: Object;
};

export type FetchBot = {
  type: 'FETCH_BOT';
  id: number;
};

export type UpdateBot = {
  type: 'UPDATE_BOT';
  data: PostBotSchema;
  id: number;
};

export type CreateBot = {
  type: 'CREATE_BOT';
  data: any; // TODO: fix
};

export type DeleteBot = {
  type: 'DELETE_BOT';
  id: number;
};

export type FetchBotsSuccess = {
  type: 'FETCH_BOT_SUCCESS';
  payload: GetBot;
};

export type FetchBotSuccess = {
  type: 'FETCH_BOTS_SUCCESS';
  payload: GetBots;
};

export type Bots =
  FetchBots |
  FetchBot |
  UpdateBot |
  CreateBot |
  DeleteBot |
  FetchBotSuccess |
  FetchBotsSuccess;
