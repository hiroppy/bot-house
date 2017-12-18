// @flow

import React from 'react';
import Editor from '../../../Bot/Editor';
import styles from './style.css';

import type { GetBot } from '../../../../../types/apis/bots';
import type { Props } from '../../../../containers/pages/Bots/Show';

type Info = {
  id: number;
  name: string;
  icon: string;
  userId: string;
  script: string;
  private: boolean;
  createdAt: string;
  latestError: string | null;
  channelName: string;
  description: string | null;
  identificationWord: string;
};

type State = {
  info: Info;
  editable: boolean;
};

class Show extends React.PureComponent<Props, State> {
  state: State;

  constructor() {
    super();

    this.state = {
      info: {
        id                : -1,
        name              : '',
        icon              : '',
        userId            : '',
        script            : '',
        private           : false,
        createdAt         : '',
        channelName       : '',
        description       : '',
        latestError       : '',
        identificationWord: ''
      },
      editable: false
    };
  }

  onChange = (id: number, res: string) => {
    this.setState({
      info: {
        ...this.state.info,
        [id]: res
      }
    });
  }

  modifyInfo = () => {

    // save
    if (this.state.editable) {
      this.props.update(this.state.info, this.state.info.id);
      this.setState({ editable: !this.state.editable });
    }
    else {
      this.setState({ editable: !this.state.editable });
    }
  }

  deleteBot = () => {
    if (window.confirm('Are you sure you want to delete this?')) {
      this.props.delete(this.state.info.id);
    }
  }

  componentWillMount() {
    this.props.fetch(Number(location.href.split('/').slice(-1)[0]));
  }

  componentWillReceiveProps(nextProps: Props) {

    // insert props as states(for initialization)
    if (
      this.state.info.name === '' &&
      Object.keys(nextProps.data).length !== 0 &&
      nextProps.data.name !== ''

    ) {
      this.setState({
        info: {
          ...nextProps.data
        }
      });
    }
  }

  render() {
    const {
      ownId,
      loggedIn
    } = this.props;

    return (
      <div className={styles.container}>
        {
          loggedIn && this.state.info.userId === ownId ? (
            <div className={styles.buttons}>
              <a
                onClick={this.modifyInfo}
                className={styles.button}
              >
                {this.state.editable ? 'Save' : 'Edit'}
              </a>
              <a
                onClick={this.deleteBot}
                className={styles.button}
              >
                Delete
              </a>
            </div>
          ) : null
        }
        <Editor
          name={this.state.info.name}
          icon={this.state.info.icon}
          error={this.state.info.latestError}
          script={this.state.info.script}
          onChange={this.onChange}
          readOnly={!this.state.editable}
          createdAt={this.state.info.createdAt}
          channelName={this.state.info.channelName}
          description={this.state.info.description}
          identificationWord={this.state.info.identificationWord}
        />
      </div>
    );
  }
}

export default Show;
