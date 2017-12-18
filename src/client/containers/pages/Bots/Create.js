// @flow

import { connect } from 'react-redux';
import * as actions from '../../../actions/bots';
import Create from '../../../components/pages/Bots/Create';

import type { Bot } from '../../../types/states/bots';
import type { PostBotSchema } from '../../../../types/apis/bots';

type MapStateToProps = {
  data: Bot;
  loggedIn: boolean;
};

type MapDispatchToProps = {
  create: (PostBotSchema) => {};
};

export type Props = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state): MapStateToProps => ({
  data    : state.bots.bot,
  loggedIn: state.auth.loggedIn
});

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  create: (data) => dispatch(actions.createBot(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create);
