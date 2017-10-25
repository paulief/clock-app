import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { incrementAction, decrementAction } from '../actions/timeActions';
import { TIME_UNITS } from '../constants';
import TimeUnit from '../components/TimeUnit';

const getUnitValue = (timeValues, unitType) => {
  switch (unitType) {
    case TIME_UNITS.HOURS:
      return (timeValues.hours + timeValues.hourOffset) % 12;
    case TIME_UNITS.MINUTES:
      return (timeValues.minutes + timeValues.minuteOffset) % 60;
    case TIME_UNITS.SECONDS:
      return (timeValues.seconds + timeValues.secondOffset) % 60;
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

const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () => dispatch(incrementAction(ownProps.unitType)),
  decrement: () => dispatch(decrementAction(ownProps.unitType)),
});

const TimeUnitContainer = connect(mapStateToProps, mapDispatchToProps)(TimeUnit);

TimeUnitContainer.propTypes = {
  unitType: PropTypes.oneOf(Object.values(TIME_UNITS)).isRequired,
};

export default TimeUnitContainer;
