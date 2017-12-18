// @flow

import React from 'react';
import AlertContainer from 'react-alert';
import styles from './style.css';

import type { Props } from '../../containers/Alert';

class Alert extends React.PureComponent<Props, void> {
  msg: any; // from library

  componentWillReceiveProps(nextProps: Props) {
    const {
      type,
      message
    } = nextProps.alert;

    if (nextProps.alert.message) {
      this.msg.show(message, {
        time: 3000,
        type
      });
    }
  }

  render() {
    return (
      <AlertContainer
        ref={(a) => this.msg = a}
        position="top left"
      />
    );
  }
}

export default Alert;
