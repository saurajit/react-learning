import React, { Component } from 'react';

class Timer extends Component {
  timer;

  constructor() {
    super();
    this.state = {
      timer: 0
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        timer: this.state.timer + 1
      })
    }, 1000);
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