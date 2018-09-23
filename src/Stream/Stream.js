import React, { Component } from 'react';
import VideoSection from '../Video/VideoSection';
import Chat from '../Chat/Chat';
import './Stream.css';

class Stream extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatExpanded: true,
    };
  }

  render() {
    return (
      <div className='main-display'>
        <VideoSection />
        <Chat expanded={this.state.chatExpanded} />
      </div>
    )
  }
}

export default Stream;