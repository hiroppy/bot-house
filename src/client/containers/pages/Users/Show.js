// @flow

import { connect } from 'react-redux';
import * as actions from '../../../actions/bots';
import Show from '../../../components/pages/Users/Show';

import type { Bot } from '../../../types/states/bots';
import type { PostBotSchema } from '../../../../types/apis/bots';

type MapStateToProps = {
  list: Array<Bot>;
};

type MapDispatchToProps = {
  fetch: ({
    userId: string;
  }) => {};
};

export type Props = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state): MapStateToProps => ({
  list: state.bots.list
});

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  fetch: (query) => dispatch(actions.fetchBots(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Show);
