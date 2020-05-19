import React, { Component } from 'react';
import './App.scss';
import Controls from './components/Controls'
import Timer from './components/Timer';

class App extends Component {
  render() {
    return (
      <div id="app-wrapper">
        <div id="controls-wrapper" className="card center">
          <Controls />
        </div>
        <div id="timer-wrapper" className="card center">
          <Timer />
        </div>
      </div>
    );
  }
}

export default App;