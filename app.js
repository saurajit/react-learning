const Hello = () => (
  <div>
    <h1>Hello World</h1>
    <p>
      This is from app 1
    </p>
  </div>
)

// Using 'createReactClass' instead of React.createClass   
const Timer = createReactClass({

  updateTimestamp() {
    this.setState((/*prevState*/) => (
      { timestamp: Date.now() }
    ));
  },

  getInitialState() {
    return {
      timestamp: null,
      timerPaused: false,
      updateInterval: this.props.delay || 1000
    };
  },

  componentDidMount() {
    this.t = setInterval(this.updateTimestamp, this.state.updateInterval);
  },

  componentWillUnmount() {
    clearTimeout(this.t);
  },

  pauseTimer() {
    this.setState(() => (
      { timerPaused: true }
    ))
    clearTimeout(this.t);
  },

  resumeTimer() {
    this.t = setInterval(this.updateTimestamp, this.state.updateInterval);
    this.setState(() => (
      { timerPaused: false }
    ))
  },

  render() {
    return (
      <div>
        <h3>Timer</h3>
        <div>{this.state.timestamp? new Date(this.state.timestamp).toUTCString() : 'Fetching...'}</div>
        <div>
          <button onClick={this.pauseTimer} disabled={this.state.timerPaused}>Pause Timer</button>
          <button onClick={this.resumeTimer} disabled={!this.state.timerPaused}>Resume Timer</button>
        </div>
      </div>
    )
  }
})

ReactDOM.render(
  <div>
    <Hello />
    <Timer delay="3000" />
  </div>,
  document.getElementById('root')
)