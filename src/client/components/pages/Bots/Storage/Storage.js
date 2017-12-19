// @flow

import React from 'react';
import styles from './style.css';

import type { Props } from '../../../../containers/pages/Bots/Storage';

class Storage extends React.PureComponent<Props, void> {
  componentWillMount() {
    if (Object.keys(this.props.bot).length === 0) {
      const id = location.href.match(/bots\/(.*?)\/storage/);

      if (id) this.props.fetch(Number(id[1]));
    }
  }

  render() {
    return (
      <div>
        {
          JSON.stringify(this.props.bot.storage)
        }
      </div>
    );
  }
}

export default Storage;
