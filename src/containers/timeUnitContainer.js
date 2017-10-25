import { connect } from 'react-redux';
import { TIME_ACTIONS, timeAction } from '../actions/timeActions';
import { TIME_UNITS } from '../constants';
import TimeUnit from '../components/timeUnit';

const getUnitValue = (timeOffsets, unitType) => {
  switch (unitType) {
    case TIME_UNITS.HOURS:
      return timeOffsets.hourOffset;
    case TIME_UNITS.MINUTES:
      return timeOffsets.minuteOffset;
    case TIME_UNITS.SECONDS:
      return timeOffsets.secondOffset;
    default:
      return 0;
  }
};

const mapStateToProps = (state, ownProps) => {
  const unitValue = getUnitValue(state.time, ownProps.unitType);
  return {
    unitValue,
  }
};

export default connect(mapStateToProps, null)(TimeUnit);
