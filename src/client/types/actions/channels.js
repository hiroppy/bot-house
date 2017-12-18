// @flow

import type { ChannelSchema } from '../../../types/apis/channels';

export type FetchChannels = {
  type: 'FETCH_CHANNELS';
};

export type FetchChannelsSuccess = {
  type: 'FETCH_CHANNELS_SUCCESS';
  payload: Array<ChannelSchema>;
};

export type Channels =
  FetchChannels |
  FetchChannelsSuccess;
