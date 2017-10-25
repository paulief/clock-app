import { connect } from 'react-redux';
import { startClock } from '../actions/timeActions';
import App from '../components/App';

const mapDispatchToProps = dispatch => ({
  startClock: () => dispatch(startClock()),
});

export default connect(null, mapDispatchToProps)(App);
