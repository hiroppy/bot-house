// @flow

import type { Success } from '../../../types/apis/auth';

export type DisplayAlert = {
  type: 'DISPLAY_ALERT';
  payload: {
    type: 'info' | 'success' | 'error';
    message: string;
  };
};

export type DisplayAlertServerError = {
  type: 'DISPLAY_ALERT_SERVER_ERROR';
};

export type App =
  DisplayAlert |
  DisplayAlertServerError;
