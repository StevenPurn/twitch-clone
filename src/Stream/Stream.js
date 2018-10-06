import React, { Component } from 'react';
import VideoSection from '../Video/VideoSection';
import Chat from '../Chat/Chat';
import fetchTwitch from '../fetchTwitch.js';
import './Stream.css';

class Stream extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatExpanded: true,
      streamName: 'drlupo',
      streamDetails: null,
    };
    this.toggleChat = this.toggleChat.bind(this);
    this.updateStreamDetails = this.updateStreamDetails.bind(this);
  }

  toggleChat() {
    console.log('toggling');
    this.setState({
      chatExpanded: !this.state.chatExpanded
    });
  }

  componentDidMount() {
    this.updateStreamDetails(this.state.streamName);
  }

  updateStreamDetails(username) {
    const url = `https://api.twitch.tv/helix/streams?user_login=${username}`;
    fetchTwitch(url)
    .then(res => {
      console.log(res);
      this.setState({
        streamDetails: res.data[0]
      })
    })
    .catch(err => {
      console.log('error fetching', err);
    });
  }

  render() {
    const videoStyle = {};
    const chatStyle = {};
    if (this.state.chatExpanded) {
      videoStyle.width = '80%';
      chatStyle.width = '20%';
    } else {
      videoStyle.width = '100%';
      chatStyle.width = '0%';
    }
    return (
      <span className='main-display'>
        <div style={videoStyle}>
          <VideoSection 
            streamDetails={this.state.streamDetails}
            streamer={this.state.streamName}
            toggleSidebar={this.props.toggleSidebar}
            toggleChat={this.toggleChat} />
        </div>
        <div style={chatStyle}>
          <Chat channel={this.state.streamName} expanded={this.state.chatExpanded} />
        </div>
      </span>
    )
  }
}

export default Stream;