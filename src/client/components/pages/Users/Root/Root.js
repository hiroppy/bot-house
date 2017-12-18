// @flow

import React from 'react';
import List from '../../../Users/List';
import styles from './style.css';

import type { Props } from '../../../../containers/pages/Users/Root';

class Root extends React.PureComponent<Props, void> {
  componentWillMount() {
    this.props.fetch();
  }

  render() {
    const {
      list
    } = this.props;

    return (
      <List list={list} />
    );
  }
}

export default Root;
