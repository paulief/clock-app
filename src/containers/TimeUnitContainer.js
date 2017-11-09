import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { incrementAction, decrementAction } from '../actions/timeActions';
import { TIME_UNITS } from '../constants';
import TimeUnit from '../components/TimeUnit';

const getUnitValue = (timeValues, unitType) => {
  switch (unitType) {
    case TIME_UNITS.HOURS: {
      const offset = (timeValues.hourOffset % 12) + 12
      const hour = (timeValues.hours + offset) % 12;
      return hour === 0 ? 12 : hour;
    }
    case TIME_UNITS.MINUTES: {
      const offset = (timeValues.minuteOffset % 60) + 60
      return (timeValues.minutes + offset) % 60;
    }
    case TIME_UNITS.SECONDS: {
      const offset = (timeValues.secondOffset % 60) + 60
      return (timeValues.seconds + offset) % 60;
    }
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
