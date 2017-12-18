// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { Emoji } from 'emoji-mart';
import MdCake from 'react-icons/lib/md/cake';
import MdTextsms from 'react-icons/lib/md/textsms';
import MdUpdate from 'react-icons/lib/md/update';

// import ListContainer from '../../List';
import styles from './style.css';

import type { BotSchema } from '../../../../types/apis/bots';

type Props = {
  bots: Array<BotSchema>;
};

const List = (props: Props) => (
  <ul className={styles.container}>
    {
      props.bots.map((bot) => (
        <li
          key={bot.id}
          className={styles.li}
        >
          <Link
            to={`/bots/${bot.id}`}
            className={styles.a}
          >
            <p className={styles.name}>{bot.name}</p>
            <div className={styles.info}>
              <div className={styles.icon}>
                {
                  bot.icon.includes('http') ? ( // TODO: create module
                    <img
                      src={bot.icon}
                      className={styles.img}
                    />
                  ) : (
                    <Emoji
                      size="2.5rem"
                      emoji={bot.icon}
                    />
                  )
                }
              </div>
              <p>
                <MdCake />
                {bot.createdAt}
              </p>
              <p>
                <MdUpdate />
              </p>
              <p>
                <MdTextsms />
                {bot.identificationWord}
              </p>
            </div>
          </Link>
        </li>
      ))
    }
  </ul>
);

export default List;
