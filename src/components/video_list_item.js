import React from 'react';

const VideoListItem = (props) => {
  const video = props.video;
  const onVideoSelect = props.onVideoSelect;
  //console.log("props video", props.video)
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img src={video.snippet.thumbnails.default.url}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
    //<li><a>http:www.youtube.com/watch?v{props.video.id.videoId}</a></li>
  )
};

export default VideoListItem;
