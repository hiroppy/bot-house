// @flow

import { connect } from 'react-redux';
import * as actions from '../actions/auth';
import Header from '../components/Header';

import type { UserSchema } from '../../types/apis/users';

type MapStateToProps = {
  uri: string;
  own: UserSchema;
  loggedIn: boolean;
};

type MapDispatchToProps = {
  login: () => {};
  checkLoginSuccess: () => {};
};

export type Props = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state): MapStateToProps => ({
  uri     : state.auth.uri,
  own     : state.users.own,
  loggedIn: state.auth.loggedIn
});

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  login            : () => dispatch(actions.login()),
  checkLoginSuccess: () => dispatch(actions.checkLoginSuccess())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
