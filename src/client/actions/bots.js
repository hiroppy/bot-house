// @flow

import type {
  FetchBots,
  FetchBot,
  UpdateBot,
  CreateBot,
  DeleteBot
} from '../types/actions/bots';
import type { PostBotSchema } from '../../types/apis/bots';

export const fetchBots = (query: Object): FetchBots => ({
  type: 'FETCH_BOTS',
  query
});

export const fetchBot = (id: number): FetchBot => ({
  type: 'FETCH_BOT',
  id
});

export const updateBot = (data: PostBotSchema, id: number): UpdateBot => ({
  type: 'UPDATE_BOT',
  data,
  id
});

export const createBot = (data: PostBotSchema): CreateBot => ({
  type: 'CREATE_BOT',
  data
});

export const deleteBot = (id: number): DeleteBot => ({
  type: 'DELETE_BOT',
  id
});
