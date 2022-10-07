// mengimport module dan component yang dibutuhkan
import React, { useState } from 'react';
import SearchBarFunctionComponent from './component/SearchBarFunctionComponent';
import YtApi from './YtApi';
import VideoList from './component/VideoList';

const App = () => {
  const [mainVideo, setMainVideo] = useState([]);
  const [subVideos, setSubVideos] = useState([]);

  // fungsi untuk mengirimkan pencarian yang diinputkan
  const onSearchSubmit = async (term) => {
    const response = await YtApi.get('/search', {
      params: { q: term },
    });

    setMainVideo(response.data.items[0]);
    setSubVideos(response.data.items);
    console.log(response.data.items);
  };

  // fungsi untuk mengubah video yang dipilih
  const updateMainVideo = (id) => {
    setMainVideo(subVideos[id]);
  };

  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      {/* memanggil component sambil mengirimkan data melalui props */}
      <SearchBarFunctionComponent onSubmit={onSearchSubmit} />
      <VideoList mainVideo={mainVideo} subVideos={subVideos} updateMainVideo={updateMainVideo} />
    </div>
  );
};

export default App;
