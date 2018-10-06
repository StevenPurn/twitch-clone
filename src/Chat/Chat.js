import React, { Component } from 'react';
import { oAuth } from '../../api_key/api-key';
import { withRouter } from 'react-router';
import ChatMessage from './ChatMessage';
import './Chat.css';

const tmi = require('tmi.js');

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatroom: '',
      messages: [],
      maxMessages: 100,
    }
    this.onMessageHandler = this.onMessageHandler.bind(this);
    this.onConnectedHandler = this.onConnectedHandler.bind(this);
    this.onDisconnectedHandler = this.onDisconnectedHandler.bind(this);
    this.connectToChat = this.connectToChat.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  onMessageHandler(channel, context, message) {
    const { 'display-name': displayname, subscriber, color, 'tmi-sent-ts': timestamp } = context;
    const messages = this.state.messages.slice();
    const maxMessages = this.state.maxMessages;
    const newMessage = {
      displayname,
      subscriber,
      color,
      message,
      timestamp,
    };
    messages.push(newMessage);
    if (messages.length > maxMessages) {
      messages.splice(0, messages.length - maxMessages);
    }
    this.setState({
      messages,
    });
  }

  onConnectedHandler(addr, port) {
    console.log(`Connected to ${addr}:${port}`);
  }

  onDisconnectedHandler(reason) {
    console.log(`Disconnected: ${reason}`);
  }

  connectToChat(channel) {
    let opts = {
      identity: {
        username: 'analyticsrobot',
        password: oAuth,
      },
      channels: [
        channel
      ]
    };
    let client = new tmi.client(opts);
    
    client.on('message', this.onMessageHandler);
    client.on('connected', this.onConnectedHandler);
    client.on('disconnected', this.onDisconnectedHandler);
    
    client.connect();
  }

  componentDidMount() {
    const username = this.props.channel; //this.props.match.params;
    this.setState({
      chatroom: username,
    })
    this.connectToChat(username);
  }

  componentDidUpdate() {
    if (this.props.expanded) {
      this.scrollToBottom();
    }
  }

  scrollToBottom() {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    const { messages } = this.state;
    const messageComponent = messages.map((msg, ind) => <ChatMessage key={msg.timestamp + ind} message={msg} />);
    return (
      <div className="chat-parent">
        <div className="chat">
          {messageComponent}
          <div style={{ float:"left", clear: "both" }}
            ref={(el) => { this.messagesEnd = el; }}>
          </div>
        </div>
        <textarea 
          className="chat-input"
          placeholder="Send a message" />
      </div>
    );
  }
}

export default withRouter(Chat);
