import React from 'react';
import Video from './Video';
import StreamPanels from './StreamPanels';
import './VideoSection.css';

const panels = ['panel1', 'panel2'];

const VideoSection = () => {
  return (
    <div className="video-section">
      <Video />
      <StreamPanels panels={panels}/>
    </div>
  )
}

export default VideoSection;