// @flow

import React from 'react';
import List from '../../Bot/List';
import styles from './style.css';

import type { Props } from '../../../containers/pages/Root';

class Root extends React.PureComponent<Props, void> {
  componentWillMount() {
    this.props.fetchBots();
  }

  render() {
    return (
      <div>
        <List bots={this.props.bots} />
      </div>
    );
  }
}

export default Root;
