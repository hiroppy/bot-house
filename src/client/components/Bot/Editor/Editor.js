// @flow

import React from 'react';
import AceEditor from 'react-ace';
import cx from 'classnames';
import 'brace/mode/javascript';
import 'brace/theme/monokai';
import 'brace/ext/language_tools';
import { RIEInput, RIESelect } from 'riek';
import { Emoji, Picker } from 'emoji-mart';
import styles from './style.css';

// $FlowFixMe
import '!style-loader!css-loader!postcss-loader!emoji-mart/css/emoji-mart.css';

export type Id =
  'name' |
  'icon' |
  'script' |
  'channelName' |
  'description' |
  'identificationWord';
;

type Props = {
  name: string;
  icon: string;
  error: string;
  script: string;
  readOnly: boolean;
  onChange: (Id, string | boolean) => {};
  createdAt: string;
  description: string;
  channelName: string;
  identificationWord: string;
};

const Editor = (props: Props) => (
  <div className={styles.container}>
    <div className={styles.nameContainer}>
      <RIEInput
        value={props.name}
        change={(res) => props.onChange('name', res.name)}
        propName="name"
        className={cx(styles.name, styles.input)}
        isDisabled={props.readOnly}
      />
    </div>
    <div className={styles.info}>
      <div className={styles.left}>
        {
          props.readOnly ? (
            <Emoji
              size="2.5rem"
              emoji={props.icon}
            />
          ) : (
            <Picker
              emoji={props.icon}
              title=":-)"
              style={{ width: '100%' }}
              onClick={(emoji) => props.onChange('icon', emoji.colons)}
            />
          )
        }
        {
          props.readOnly ? (
            <p>{props.createdAt}</p>
          ) : null
        }
        <p>
          channel: #
          <RIEInput
            value={props.channelName}
            change={(res) => props.onChange('channelName', res.channelName)}
            propName="channelName"
            className={styles.input}
            isDisabled={props.readOnly}
          />
        </p>
        <p>
          Word:
          <RIEInput
            value={props.identificationWord}
            change={(res) => props.onChange('identificationWord', res.identificationWord)}
            propName="identificationWord"
            className={styles.input}
            isDisabled={props.readOnly}
          />
        </p>
        <p>
          description:
          <RIEInput
            value={props.description}
            change={(res) => props.onChange('description', res.description)}
            propName="description"
            className={styles.input}
            isDisabled={props.readOnly}
          />
        </p>
        {
          props.readOnly && props.error ? (
            <div className={styles.errorBox}>{props.error}</div>
          ) : null
        }
      </div>
      <div className={styles.right}>
        <AceEditor
          mode="javascript"
          theme="monokai"
          onChange={(res) => props.onChange('script', res)}
          fontSize={14}
          showPrintMargin
          showGutter
          highlightActiveLine
          value={props.script}
          editorProps={{ $blockScrolling: true }}
          readOnly={props.readOnly}
          setOptions={{
            tabSize                  : 2,
            enableSnippets           : false,
            showLineNumbers          : true,
            enableLiveAutocompletion : true,
            enableBasicAutocompletion: false
          }}
          width="100%"
        />
      </div>
    </div>
  </div>
);

export default Editor;
