import { getTimeValues } from '../helpers/timeHelper';

// Action Types

const UPDATE_TIME = 'UPDATE_TIME';

const INCREMENT_SECONDS = 'INCREMENT_SECONDS';
const INCREMENT_MINUTES = 'INCREMENT_MINUTES';
const INCREMENT_HOURS = 'INCREMENT_HOURS';

const DECREMENT_SECONDS = 'DECREMENT_SECONDS';
const DECREMENT_MINUTES = 'DECREMENT_MINUTES';
const DECREMENT_HOURS = 'DECREMENT_HOURS';

export const TIME_ACTIONS = {
  INCREMENT_SECONDS,
  INCREMENT_MINUTES,
  INCREMENT_HOURS,
  DECREMENT_SECONDS,
  DECREMENT_MINUTES,
  DECREMENT_HOURS,
  UPDATE_TIME,
};

// Action Creators
export const incrementAction = unitType => ({
  type: `INCREMENT_${unitType}`,
});

export const decrementAction = unitType => ({
  type: `DECREMENT_${unitType}`,
});

const updateTime = timeValues => ({
  type: UPDATE_TIME,
  timeValues,
});

export const startClock = () => (dispatch) => {
  setInterval(() => {
    const timeValues = getTimeValues();
    dispatch(updateTime(timeValues));
  }, 1000);
};
