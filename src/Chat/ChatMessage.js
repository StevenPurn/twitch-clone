import React from 'react';
import './Chat.css';

const ChatMessage = ({ message }) => {
  const sub = message.subscriber ? <span className='chat-subscriber'>S</span> : null;
  const { color } = message;
  const style = {
    color: color
  };
  return (
    <div className='chat-message'>
      {sub}
      <span className='chat-username' style={style}>{message.displayname}</span>
      <span className='chat-text'>: {message.message}</span>
    </div>
  )
}

export default ChatMessage;