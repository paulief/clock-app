import React from 'react';
import './App.css';
import TimeUnitContainer from './containers/timeUnitContainer';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>Clock App</h1>
    </header>
    <TimeUnitContainer unitType="HOURS" />
    <TimeUnitContainer unitType="MINUTES" />
    <TimeUnitContainer unitType="SECONDS" />
  </div>
);

export default App;
