import { connect } from 'react-redux';
import { TIME_ACTIONS, timeAction } from '../actions/timeActions';
import { TIME_UNITS } from '../constants';
import TimeUnit from '../components/timeUnit';

const getUnitValue = (timeValues, unitType) => {
  switch (unitType) {
    case TIME_UNITS.HOURS:
      return timeValues.hours + timeValues.hourOffset;
    case TIME_UNITS.MINUTES:
      return timeValues.minutes + timeValues.minuteOffset;
    case TIME_UNITS.SECONDS:
      return timeValues.seconds + timeValues.secondOffset;
    default:
      return 0;
  }
};

const mapStateToProps = (state, ownProps) => {
  const unitValue = getUnitValue(state.time, ownProps.unitType);
  return {
    unitValue,
  };
};

export default connect(mapStateToProps, null)(TimeUnit);
