import React from 'react';

const VideoDetail = (props) => {
  if (!props.curvideo) {
    return <div>Loading...</div>
  }
  //console.log("from vid deets", props.curvideo);
  const currentVideoId = props.curvideo.id.videoId;
  const url = "https://youtube.com/embed/" + currentVideoId;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{props.curvideo.snippet.title}</div>
        <div>{props.curvideo.snippet.description}</div>
      </div>
    </div>
  )
};
export default VideoDetail;
