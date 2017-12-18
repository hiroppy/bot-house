// @flow

import React from 'react';
import cx from 'classnames';
import MdContacts from 'react-icons/lib/md/contacts';
import MdDomain from 'react-icons/lib/md/domain';
import { Link } from 'react-router-dom';
import styles from './style.css';

import type { Props } from '../../containers/SideMenu';

class SideMenu extends React.PureComponent<Props, void> {
  componentWillMount() {
    this.props.fetchChannels();
  }

  render() {
    const pathname = this.props.location.pathname;

    const {
      loggedIn
    } = this.props;

    return (
      <div className={styles.container}>
        <div className={cx(styles.menu, pathname === '/users' ? styles.active : undefined)}>
          <MdContacts />
          <Link to="/users">Users</Link>
        </div>
        <div className={cx(styles.menu, pathname === '/' ? styles.active : undefined)}>
          <MdDomain />
          <Link to="/">Channels</Link>
        </div>
        <ul className={styles.ul}>
          {
            this.props.list.map((channel) => (
              <li
                key={channel.id}
                className={pathname === `/channels/${channel.name}` ? styles.active : undefined}
              >
                <Link to={`/channels/${channel.name}`}>#{channel.name}</Link>
              </li>
            ))
          }
        </ul>
        {
          loggedIn ? (
            <Link
              to="/bots/create"
              className={styles.botCreate}
            >
              Create
            </Link>
          ) : null
        }
      </div>
    );
  }
}

export default SideMenu;
