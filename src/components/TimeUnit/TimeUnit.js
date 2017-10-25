import React from 'react';
import PropTypes from 'prop-types';

const TimeUnit = ({ unitValue, increment, decrement }) => (
  <div>
    <button onClick={increment}>Increment</button>
    { `${unitValue}` }
    <button onClick={decrement}>Decrement</button>
  </div>
);

TimeUnit.propTypes = {
  unitValue: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default TimeUnit;
