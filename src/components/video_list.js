import React from 'react';
import VideoListItem from './video_list_item';
//When we use a functional component, props will be available as an argument to the component
// props is currently populated by the VIDEOS property in the videolist tag used in index.js
const VideoList = (props) => {
  //console.log(props.videos)
  const videoItems = props.videos.map((video) => {
    return <VideoListItem
    onVideoSelect = {props.onVideoSelect}
    key={video.etag}
    video={video} /> //property named video, with value video passed onto the VIDEO property
                                                                                // of videolistitem
  });
  //console.log(videoItems);

  return(
    <ul className = 'col-md-4 list-group'>
      {videoItems}
    </ul>
  );
};

export default VideoList;
