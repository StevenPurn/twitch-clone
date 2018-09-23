import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Topbar from './Topbar/Topbar';
import Sidebar from './Sidebar/Sidebar';
import Home from './Home/Home';
import Stream from './Stream/Stream';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarExpanded: false,
    };
  }

  render() {
    return (
      <div className="App">
        <Topbar className="Topbar" />
        <Sidebar className="Sidebar" expanded={this.state.sidebarExpanded} />
        <Switch>
          <Route exact path='/' component={Stream}/>
          <Route path='/:username' component={Stream} />
        </Switch>
      </div>
    )
  }
}

export default App;