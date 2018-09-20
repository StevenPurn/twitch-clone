import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Here is my App!',
    };
  }

  render() {
    return (
      <div>{this.state.text}</div>
    )
  }
}

export default App;