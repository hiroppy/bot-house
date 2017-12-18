// @flow

import { connect } from 'react-redux';
import * as actions from '../actions/channels';
import SideMenu from '../components/SideMenu';

import type { ChannelSchema } from '../../types/apis/channels';

type MapStateToProps = {
  list: Array<ChannelSchema>;
  location: *;
  loggedIn: boolean;
};

type MapDispatchToProps = {
  fetchChannels: () => {};
};

export type Props = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state): MapStateToProps => ({
  list    : state.channels.list,
  loggedIn: state.auth.loggedIn,
  location: state.router.location
});

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  fetchChannels: () => dispatch(actions.fetchChannels())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);
