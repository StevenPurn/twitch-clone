import React from 'react';
import VideoDetails from './VideoDetails';
import "./Video.css";

const Video = (props) => {
  let details = <div>STREAM TITLE</div>;
  if (props.stream) {
    details = <VideoDetails stream={props.stream} />;
  }
  return (
    <div className="video">
      <div className="video-iframe">
        <iframe
          src={`https://player.twitch.tv/?channel=${props.streamer}&muted=true`}
          height="100%"
          width="100%"
          frameBorder="0"
          scrolling="no"
          allowFullScreen="true">
        </iframe>
      </div>
      {details}
    </div>
  )
}

export default Video;