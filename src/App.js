import React from 'react';
import SearchBar from './component/SearchBar';
import YtApi from './YtApi';
import VideoList from './component/VideoList';

class App extends React.Component {
  state = {
    mainVideo: [],
    subVideos: [],
  };

  onSearchSubmit = async (term) => {
    const response = await YtApi.get('/search', {
      params: { q: term },
    });

    this.setState({ mainVideo: response.data.items[0], subVideos: response.data.items });
    console.log(response.data.items);
  };

  updateMainVideo = (id) => {
    this.setState({ mainVideo: this.state.subVideos[id] });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <VideoList mainVideo={this.state.mainVideo} subVideos={this.state.subVideos} updateMainVideo={this.updateMainVideo} />
      </div>
    );
  }
}

export default App;
