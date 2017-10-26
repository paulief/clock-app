import { getTimeValues } from '../helpers/timeHelper';
import Api from '../helpers/api';

// Action Types

const UPDATE_TIME = 'UPDATE_TIME';

const UPDATE_OFFSET_HOURS = 'UPDATE_OFFSET_HOURS';
const UPDATE_OFFSET_MINUTES = 'UPDATE_OFFSET_MINUTES';
const UPDATE_OFFSET_SECONDS = 'UPDATE_OFFSET_SECONDS';

export const TIME_ACTIONS = {
  UPDATE_TIME,
  UPDATE_OFFSET_HOURS,
  UPDATE_OFFSET_MINUTES,
  UPDATE_OFFSET_SECONDS,
};

// Action Creators
const updateOffset = (unitType, change) => ({
  type: `UPDATE_OFFSET_${unitType}`,
  change,
});

export const incrementAction = unitType => (dispatch) => {
  dispatch(updateOffset(unitType, 1));

  Api.updateOffset(unitType, 1)
    .catch(() => dispatch(updateOffset(unitType, -1)));
};

export const decrementAction = unitType => (dispatch) => {
  dispatch(updateOffset(unitType, -1));

  Api.updateOffset(unitType, -1)
    .catch(() => dispatch(updateOffset(unitType, 1)));
};

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
