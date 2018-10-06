import React from 'react';
import "./Video.css";

const VideoDetails = (props) => {
  let title = <div>STREAM TITLE</div>;
  if (props.stream) {
    title = <div className="video-title">{props.stream.title}</div>;
  }
  return (
    <div className="video-details">
      <div className="inner-details">
        <a href={`/games/${props.stream.game}`}>
        <img 
          src={'https://via.placeholder.com/60x80'} 
          className="game-img"/></a>
        {title}
      </div>
    </div>
  )
}

export default VideoDetails;