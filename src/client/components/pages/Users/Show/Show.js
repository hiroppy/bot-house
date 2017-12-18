// @flow

import React from 'react';
import List from '../../../Bot/List';
import styles from './style.css';

import type { Props } from '../../../../containers/pages/Users/Show';

class Show extends React.PureComponent<Props, void> {
  componentWillMount() {
    this.props.fetch({ userId: location.href.split('/').slice(-1)[0] });
  }

  render() {
    const {
      list
    } = this.props;

    return (
      <List bots={list} />
    );
  }
}

export default Show;
