// @flow

import { connect } from 'react-redux';
import * as actions from '../../../actions/bots';
import Storage from '../../../components/pages/Bots/Storage';

import type { Bot } from '../../../types/states/bots';

type MapStateToProps = {
  bot: Bot;
};

type MapDispatchToProps = {
  fetch: (number) => {};
};

export type Props = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state): MapStateToProps => ({
  bot: state.bots.bot
});

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  fetch: (id) => dispatch(actions.fetchBot(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Storage);
