// @flow

import { connect } from 'react-redux';
import * as actions from '../../../actions/users';
import Root from '../../../components/pages/Users/Root';

import type { UserSchema } from '../../../../types/apis/users';

type MapStateToProps = {
  list: Array<UserSchema>;
};

type MapDispatchToProps = {
  fetch: () => {};
};

export type Props = MapStateToProps & MapDispatchToProps;

const mapStateToProps = (state): MapStateToProps => ({
  list: state.users.list
});

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  fetch: () => dispatch(actions.fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
