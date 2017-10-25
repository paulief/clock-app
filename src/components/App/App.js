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
        <TimeUnitContainer unitType="HOURS" />
        <TimeUnitContainer unitType="MINUTES" />
        <TimeUnitContainer unitType="SECONDS" />
      </div>
    );
  }
}

App.propTypes = {
  startClock: PropTypes.func.isRequired,
};

export default App;
