import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import TimeUnitContainer from '../../containers/TimeUnitContainer';

class App extends Component {
  componentDidMount() {
    this.props.startClock();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Clock App</h1>
        </header>
        <div className="App-time-container">
          <TimeUnitContainer unitType="HOURS" />
          <div className="App-time-divider">:</div>
          <TimeUnitContainer unitType="MINUTES" />
          <div className="App-time-divider">:</div>
          <TimeUnitContainer unitType="SECONDS" />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  startClock: PropTypes.func.isRequired,
};

export default App;
