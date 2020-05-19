import React, { Component } from 'react';

class Timer extends Component {
  timer;

  constructor() {
    super();
    this.state = {
      timer: 0
    };
  }

  startTimer() {
    if (this.timer) {
      return;
    }
    this.timer = setInterval(() => {
      this.setState({
        timer: this.state.timer + 1
      })
    }, 1000);
  }

  stopTimer() {
    if(this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  componentDidUpdate() {
    if (this.props.isRunning) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  }

  render() {
    return (
      <div>
          {this.state.timer}
      </div>
    );
  }
}

export default Timer;