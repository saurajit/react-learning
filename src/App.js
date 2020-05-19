import React, { Component } from 'react';
import './App.scss';
import Controls from './components/Controls'
import Timer from './components/Timer';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isRunning: false
    }
  }

  setStatus(status) {
    this.setState({
      isRunning: status === 'start'
    })
  }

  render() {
    return (
      <div id="app-wrapper">
        <div id="controls-wrapper" className="card center">
          <Controls setStatus={this.setStatus.bind(this)} />
        </div>
        <div id="timer-wrapper" className="card center">
          <Timer isRunning={this.state.isRunning} />
        </div>
      </div>
    );
  }
}

export default App;