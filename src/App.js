import React, { Component } from 'react';
import './App.css';
import TimeUnitContainer from './containers/timeUnitContainer';

class App extends Component {
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

export default App;
