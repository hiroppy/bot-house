// @flow

import type { BotSchema } from '../../../types/apis/bots';

export type Bot = BotSchema;

export type Bots = {
  bot: {} | Bot;
  list: Array<BotSchema>;
};
