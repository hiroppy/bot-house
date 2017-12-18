// @flow

import { connect } from 'react-redux';
import * as actions from '../../../actions/bots';
import Show from '../../../components/pages/Channels/Show';

import type { Router } from '../../../types/states/router';
import type { BotSchema } from '../../../../types/apis/bots';

type MapStateToProps = {
  bots: Array<BotSchema>;
};

type MapDispatchToProps = {
  fetch: ({
    channelName: string;
  }) => {};
};

export type Props = MapStateToProps & MapDispatchToProps & Router;

const mapStateToProps = (state) => ({
  bots    : state.bots.list,
  pathname: state.router.location.pathname
});

const mapDispatchToProps = (dispatch) => ({
  fetch: (id) => dispatch(actions.fetchBots(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Show);
