// @flow

import React from 'react';
import GitHub from 'react-icons/lib/go/mark-github';
import styles from './style.css';

import type { Props } from '../../containers/Header';

class Header extends React.PureComponent<Props, void> {
  componentWillMount() {
    this.props.checkLoginSuccess();
  }

  render() {
    const {
      uri,
      own,
      loggedIn
    } = this.props;

    return (
      <header className={styles.container}>
        <div className={styles.own}>
          {
            loggedIn ? (
              <img src={own.icon} />
            ) : (
              <a
                href={uri}
                className={styles.login}
              >
                Login
              </a>
            )
          }
        </div>
        <a
          href="https://github.com/abouthiroppy/bot-house"
          target="_blank"
          className={styles.github}
        >
          <GitHub />
        </a>
      </header>
    );
  }
}

export default Header;
