// @flow

import React from 'react';
import List from '../../../Bot/List';
import styles from './style.css';

import type { Props } from '../../../../containers/pages/channels/Show';

class Show extends React.PureComponent<Props, void> {
  componentWillMount() {
    this.props.fetch({ channelName: location.href.split('/').slice(-1)[0] });
  }

  render() {
    return (
      <List bots={this.props.bots} />
    );
  }
}

export default Show;
