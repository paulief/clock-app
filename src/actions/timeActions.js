import { getTimeValues } from '../helpers/timeHelper';
import Api from '../helpers/api';

// Action Types
export const TIME_ACTIONS = {
  UPDATE_TIME: 'UPDATE_TIME',
  UPDATE_OFFSET_HOURS: 'UPDATE_OFFSET_HOURS',
  UPDATE_OFFSET_MINUTES: 'UPDATE_OFFSET_MINUTES',
  UPDATE_OFFSET_SECONDS: 'UPDATE_OFFSET_SECONDS',
  FETCH_OFFSETS: 'FETCH_OFFSETS',
  FETCH_OFFSETS_SUCCESS: 'FETCH_OFFSETS_SUCCESS',
};

/* Action Creators */

// Offset actions

const startFetchOffsets = () => ({
  type: TIME_ACTIONS.FETCH_OFFSETS,
});

const gotOffsets = offsets => ({
  type: TIME_ACTIONS.FETCH_OFFSETS_SUCCESS,
  offsets,
});

export const fetchOffsets = () => (dispatch) => {
  dispatch(startFetchOffsets());

  Api.getOffsets()
    .then(offsets => dispatch(gotOffsets(offsets)));
};

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

// Clock running actions

const updateTime = timeValues => ({
  type: TIME_ACTIONS.UPDATE_TIME,
  timeValues,
});

export const startClock = () => (dispatch) => {
  setInterval(() => {
    const timeValues = getTimeValues();
    dispatch(updateTime(timeValues));
  }, 1000);
};
