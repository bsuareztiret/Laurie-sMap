import React from "react";
import ReactPlayer from "react-player/youtube";

const VideoPlayer = (props) => {
  return (
    <ReactPlayer url={props.url}
    width={props.width}
    height={props.height}
    style={props.style}
    id={props.id}
    controls={true}
    pip={true} />
  )
}

export default VideoPlayer;