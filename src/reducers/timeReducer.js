import { TIME_ACTIONS } from '../actions/timeActions';
import { getTimeValues } from '../helpers/timeHelper';

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
    case TIME_ACTIONS.UPDATE_TIME:
      return {
        ...state,
        ...action.timeValues,
      };

    case TIME_ACTIONS.UPDATE_OFFSET_HOURS:
      return {
        ...state,
        hourOffset: hourOffset + action.change,
      };

    case TIME_ACTIONS.UPDATE_OFFSET_MINUTES:
      return {
        ...state,
        minuteOffset: minuteOffset + action.change,
      };

    case TIME_ACTIONS.UPDATE_OFFSET_SECONDS:
      return {
        ...state,
        secondOffset: secondOffset + action.change,
      };

    default:
      return state;
  }
};

export default timeReducer;
