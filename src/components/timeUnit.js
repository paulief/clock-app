import React from 'react';
import PropTypes from 'prop-types';
import { TIME_UNITS } from '../constants';

const TimeUnit = ({ unitType, unitValue }) => (
  <div>
    { unitType + ': ' + unitValue }
  </div>
);

TimeUnit.propTypes = {
  unitType: PropTypes.oneOf(Object.values(TIME_UNITS)).isRequired,
  unitValue: PropTypes.number.isRequired,
};

export default TimeUnit;
