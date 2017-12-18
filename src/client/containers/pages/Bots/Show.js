// @flow

import { connect } from 'react-redux';
import * as actions from '../../../actions/bots';
import Show from '../../../components/pages/Bots/Show';

import type { Bot } from '../../../types/states/bots';

type MapStateToProps = {
  data: Bot;
  ownId: string;
  loggedIn: boolean;
};

type MapDispatchToProps = {
  fetch: (number) => {};
  update: (any, number) => {};
  delete: (number) => {};
};

export type Props = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state): MapStateToProps => ({
  data    : state.bots.bot,
  ownId   : state.users.own.userId,
  loggedIn: state.auth.loggedIn
});

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  fetch : (id) => dispatch(actions.fetchBot(id)),
  update: (data, id) => dispatch(actions.updateBot(data, id)),
  delete: (id) => dispatch(actions.deleteBot(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Show);
