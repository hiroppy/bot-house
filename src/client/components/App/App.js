// @flow

import * as React from 'react';
import Header from '../../containers/Header';
import SideMenu from '../../containers/SideMenu';
import Alert from '../../containers/Alert';
import styles from './style.css';

type Props = {
  children: React.Node;
};

const App = (props: Props) => (
  <div>
    <Header />
    <Alert />
    <div className={styles.container}>
      <SideMenu />
      <div className={styles.content}>
        {
          props.children
        }
      </div>
    </div>
  </div>
);

export default App;
