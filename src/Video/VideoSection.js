import React from 'react';
import Video from './Video';
import StreamPanels from './StreamPanels';
import StreamHeader from './StreamHeader';
import './VideoSection.css';

const panels = ['panel1', 'panel2'];

const VideoSection = (props) => {
  return (
    <div className="video-section">
      <StreamHeader toggleChat={props.toggleChat} toggleSidebar={props.toggleSidebar} />
      <Video stream={props.streamDetails} streamer={props.streamer} />
      <StreamPanels panels={panels} />
    </div>
  )
}

export default VideoSection;