import React from 'react';
import './Chat.css';

const Chat = ({ expanded }) => {
  const text = expanded ? 'showing' : 'hidden';
  return (
    <div className='chat'>Chat {text}</div>
  )
}

export default Chat;