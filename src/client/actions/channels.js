// @flow

import type { FetchChannels } from '../types/actions/channels';

export const fetchChannels = (): FetchChannels => ({
  type: 'FETCH_CHANNELS'
});
