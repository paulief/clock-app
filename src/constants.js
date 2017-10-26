// Time Constants
const TIME_UNITS = {
  HOURS: 'HOURS',
  MINUTES: 'MINUTES',
  SECONDS: 'SECONDS',
};

const API_BASE_PATH = 'http://localhost:8000';

const API_PATHS = {
  GET_OFFSETS: '/offsets',
  UPDATE_OFFSET: '/offset',
};

// NOTE: Uses CommonJS syntax to share constants with the back-end
module.exports = {
  TIME_UNITS,
  API_BASE_PATH,
  API_PATHS,
};
