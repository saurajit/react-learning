import React, { Component } from 'react';

class Controls extends Component {
  constructor() {
    super();

    this.state = {
      isRunning: false
    }
  }

  onStart() {
    this.setState({
      isRunning: true
    }, this.props.setStatus('start'))
  }

  onStop() {
    this.setState({
      isRunning: false
    }, this.props.setStatus('stop'))
  }

  render() {
    return (
      <div className="button-wrapper">
          <button type="button" onClick={this.onStart.bind(this)} disabled={this.state.isRunning}>Start</button>
          <button type="button" onClick={this.onStop.bind(this)} disabled={!this.state.isRunning}>Stop</button>
      </div>
    );
  }
}

export default Controls;