import React from 'react';
import PropTypes from 'prop-types';
import './TimeUnit.css';

const TimeUnit = ({ unitValue, increment, decrement }) => {
  const displayValue = unitValue >= 10 ? `${unitValue}` : `0${unitValue}`;

  return (
    <div className="TimeUnit">
      <div>
        <button className="TimeUnit-btn" onClick={increment}>+</button>
      </div>
      <div className="TimeUnit-value">{ displayValue }</div>
      <div>
        <button className="TimeUnit-btn" onClick={decrement}>-</button>
      </div>
    </div>
  );
};

TimeUnit.propTypes = {
  unitValue: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default TimeUnit;
