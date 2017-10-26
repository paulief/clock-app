import { getTimeValues } from '../helpers/timeHelper';
import Api from '../helpers/api';

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
const incrementLocal = unitType => ({
  type: `INCREMENT_${unitType}`,
});

const decrementLocal = unitType => ({
  type: `DECREMENT_${unitType}`,
});

export const incrementAction = unitType => (dispatch) => {
  dispatch(incrementLocal(unitType))

  Api.updateOffset(unitType, 1)
    .catch(() => dispatch(decrementLocal(unitType)));
}

export const decrementAction = unitType => (dispatch) => {
  dispatch(decrementLocal(unitType))

  Api.updateOffset(unitType, -1)
    .catch(() => dispatch(incrementLocal(unitType)));
}

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
