// @flow

import { connect } from 'react-redux';
import * as actions from '../../actions/bots';
import Root from '../../components/pages/Root';

import type { BotSchema } from '../../../types/apis/bots';
import type { Router } from '../../types/states/router';

type MapStateToProps = {
  bots: Array<BotSchema>;
};

type MapDispatchToProps = {
  fetchBots: () => {};
};

export type Props = MapStateToProps & MapDispatchToProps & Router;

const mapStateToProps = (state): MapStateToProps => ({
  bots: state.bots.list
});

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  fetchBots: () => dispatch(actions.fetchBots({}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
