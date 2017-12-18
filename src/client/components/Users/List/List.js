// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.css';

import type { UserSchema } from '../../../../types/apis/users';

type Props = {
  list: Array<UserSchema>;
};

const List = (props: Props) => (
  <ul className={styles.container}>
    {
      props.list.map((user) => (
        <li key={user.id}>
          <Link
            to={`/users/${user.userId}`}
            className={styles.a}
          >
            <section className={styles.section}>
              <img
                src={user.icon}
                className={styles.img}
              />
              <p className={styles.name}>{user.realName}</p>
            </section>
          </Link>
        </li>
      ))
    }
  </ul>
);

export default List;
