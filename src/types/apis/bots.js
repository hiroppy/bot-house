// @flow

export type BotSchema = {
  id: number;
  script: string;
  identificationWord: string;
  authority: 'editable';
  userId: string;
  icon: string;
  name: string;
  description: string | null;
  latestError: string | null;
  channelId: string;
  private: boolean;
  createdAt: string;
  updatedAt: string;
  channelName: string;
  storage: Object;
};

export type GetBot = {
  data: BotSchema;
};

export type GetBots = {
  data: Array<BotSchema>;
};

export type PostBotSchema = {
  name: string;
  icon: string;
  script: string;
  private: boolean;
  createdAt: string;
  channelName: string;
  identificationWord: string;
};
