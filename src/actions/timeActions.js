// Action Types

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
};

// Action Creators

export const timeAction = (type) => {
  return {
    type,
  }
}

// NOTE: Possible second approach

// Action Types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const incrementUnit = (unit) => {
  return {
    type: INCREMENT,
    unit,
  }
}
