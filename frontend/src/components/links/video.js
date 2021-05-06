import React from "react";
import ReactPlayer from "react-player/youtube";

const VideoPlayer = (props) => {
  return (
    <ReactPlayer url={props.url}
    style={props.style}
    id={props.id}
    controls={true}
    pip={true} />
  )
}

export default VideoPlayer;