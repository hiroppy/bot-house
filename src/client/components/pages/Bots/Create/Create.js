// @flow

import React from 'react';
import Editor from '../../../Bot/Editor';
import styles from './style.css';

import type { Id } from '../../../Bot/Editor/Editor';
import type { Props } from '../../../../containers/pages/Bots/Create';

export type Info = {
  name: string;
  icon: string;
  script: string;
  private: boolean;
  createdAt: string;
  channelName: string;
  description: string;
  identificationWord: string;
};

type State = {
  info: Info;
};

const sampleScript = `/*
  Please return a message as a string in the immediate function.
  You can access "api" object.

  type api = {
    slack: {
      message: string;
      postMessage: (string) => {};
    };
    modules: {
      fetch: Object;
      cheerio: Object;
    };
    storage: JSON;
  };

  If you want to use attachments please return the following.
  {
    text: string;
    attachments: Array<{
      ... // see: https://api.slack.com/docs/message-attachments
    }>;
  };
*/

(() => {
  return \`\${api.slack.message}!\`;
})();`;

class Create extends React.PureComponent<Props, State> {
  state: State;

  constructor() {
    super();

    this.state = {
      info: {
        name              : 'sample',
        icon              : ':ok_woman:',
        script            : sampleScript,
        description       : 'repeat',
        private           : false,
        createdAt         : '',
        channelName       : 'sample',
        identificationWord: 'hey'
      }
    };
  }

  create = () => {
    this.props.create(this.state.info);
  }

  onChange = (id: Id, res: string) => {
    this.setState({
      info: {
        ...this.state.info,
        [id]: res
      }
    });
  }

  render() {
    const {
      loggedIn
    } = this.props;

    return (
      <div className={styles.container}>
        {
          loggedIn ? (
            <a
              onClick={this.create}
              className={styles.button}
            >
              Create
            </a>
          ) : null
        }
        <Editor
          readOnly={false}
          name={this.state.info.name}
          icon={this.state.info.icon}
          script={this.state.info.script}
          onChange={this.onChange}
          createdAt={this.state.info.createdAt}
          channelName={this.state.info.channelName}
          description={this.state.info.description}
          identificationWord={this.state.info.identificationWord}
        />
      </div>
    );
  }
}

export default Create;
