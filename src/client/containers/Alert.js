// @flow

import { connect } from 'react-redux';
import Alert from '../components/Alert';

type MapStateToProps = {
  alert: {
    type: 'info' | 'success' | 'error';
    message: string;
  };
};

export type Props = MapStateToProps;

const mapStateToProps = (state): MapStateToProps => ({
  alert: state.app.alert
});

export default connect(mapStateToProps)(Alert);
