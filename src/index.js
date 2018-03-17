import React from 'react';
import ReactDOM from 'react-dom';
import VideoDetail from './components/video_detail';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';

const API_key = 'AIzaSyCFep52igSBtcA9G61rSPYjEF7rdsH5dOE';


class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      videos : [],
      selectedVideo : null
    };

  this.videoSearch('surfboards');

  }
  videoSearch(term) {
    YTSearch({key : API_key, term : term}, (data) => {
      this.setState({
        videos : data,
        selectedVideo : data[0]
      })
    })
  }
  
  //each property in the tag is available in it's component's props with the same name
  render() {
    //console.log("from index", this.state.videos)
    //onVideoSelect is a function that takes a video as argument and updates this.selectedvideo with the argument
    //onVideoSelect is passed on to VideoList and then VideoListItem where it is called with the video in that component
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail curvideo={this.state.selectedVideo}/>
        <VideoList onVideoSelect = {selectedVideo => this.setState({selectedVideo})} videos = {this.state.videos}/>
      </div>
    )
  }
}

//const App = () => {
//  return <div><SearchBar /></div>
//}

ReactDOM.render(<App />, document.querySelector('.container'));
