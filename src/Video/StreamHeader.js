import React from 'react';
import './StreamHeader.css';

const StreamHeader = (props) => {
  return (
    <div className='stream-header'>
      <span onClick={() => props.toggleSidebar()}>></span>
      <span>Streamer icon, video count, follower count etc.</span>
      <span onClick={() => props.toggleChat()}>></span>
    </div>
  )
}

export default StreamHeader;