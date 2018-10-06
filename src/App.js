import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Topbar from './Topbar/Topbar';
import Sidebar from './Sidebar/Sidebar';
import Home from './Home/Home';
import Stream from './Stream/Stream';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarExpanded: false,
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    this.setState({
      sidebarExpanded: !this.state.sidebarExpanded
    });
    console.log('sidebar toggled');
  }

  render() {
    return (
      <div className="app">
        <Topbar className="topbar" />
        <Sidebar className="sidebar" expanded={this.state.sidebarExpanded} />
        <Switch>
          <Route
            path='/'
            render={(props) => <Stream toggleSidebar={this.toggleSidebar} />}
          />
          <Route
            path='/:username'
            render={(props) => <Stream toggleSidebar={this.toggleSidebar} />}
          />
        </Switch>
      </div>
    )
  }
}

export default App;