import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import TimeUnitContainer from '../../containers/TimeUnitContainer';
import loadingImage from './loadingImage.gif';

class App extends Component {
  componentDidMount() {
    this.props.startClock();
    this.props.getOffsets();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Clock App</h1>
        </header>
        { this.props.loading ? (
          <div className="App-time-container">
            <img className="App-loading" src={loadingImage} alt="Loading" />
            <div>Loading...</div>
          </div>
        ) : (
          <div className="App-time-container">
            <TimeUnitContainer unitType="HOURS" className="App-time-primary" />
            <div className="App-time-divider">:</div>
            <TimeUnitContainer unitType="MINUTES" className="App-time-secondary" />
            <div className="App-time-divider">:</div>
            <TimeUnitContainer unitType="SECONDS" className="App-time-tertiary" />
          </div>
        )
        }
      </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  startClock: PropTypes.func.isRequired,
  getOffsets: PropTypes.func.isRequired,
};

export default App;
