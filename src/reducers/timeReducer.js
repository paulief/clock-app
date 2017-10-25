import { TIME_ACTIONS } from '../actions/timeActions';
import getTimeValues from '../helpers/timeHelper';

const timeValues = getTimeValues();
const initialState = {
  ...timeValues,
  hourOffset: 0,
  minuteOffset: 0,
  secondOffset: 0,
};

const timeReducer = (state = initialState, action) => {
  const { hourOffset, minuteOffset, secondOffset } = state;

  switch (action.type) {
    case TIME_ACTIONS.INCREMENT_HOURS:
      return {
        ...state,
        hourOffset: hourOffset + 1,
      };
    case TIME_ACTIONS.DECREMENT_HOURS:
      return {
        ...state,
        hourOffset: hourOffset - 1,
      };

    case TIME_ACTIONS.INCREMENT_MINUTES:
      return {
        ...state,
        minuteOffset: minuteOffset + 1,
      };
    case TIME_ACTIONS.DECREMENT_MINUTES:
      return {
        ...state,
        minuteOffset: minuteOffset - 1,
      };

    case TIME_ACTIONS.INCREMENT_SECONDS:
      return {
        ...state,
        secondOffset: secondOffset + 1,
      };
    case TIME_ACTIONS.DECREMENT_SECONDS:
      return {
        ...state,
        secondOffset: secondOffset - 1,
      };

    default:
      return state;
  }
};

export default timeReducer;
