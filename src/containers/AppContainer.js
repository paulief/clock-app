import { connect } from 'react-redux';
import { startClock, fetchOffsets } from '../actions/timeActions';
import App from '../components/App';

const mapStateToProps = state => ({
  loading: state.time.loading,
});

const mapDispatchToProps = dispatch => ({
  startClock: () => dispatch(startClock()),
  getOffsets: () => dispatch(fetchOffsets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
