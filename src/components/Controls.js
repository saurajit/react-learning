import React, { Component } from 'react';

class Controls extends Component {
  render() {
    return (
      <div className="button-wrapper">
          <button type="button">Start</button>
          <button type="button">Reset</button>
      </div>
    );
  }
}

export default Controls;