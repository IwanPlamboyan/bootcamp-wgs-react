import React from 'react';
import './video.css';

const VideoList = (props) => {
  const onClickHandle = (id) => {
    props.updateMainVideo(id);
  };

  const videos = props.subVideos.map((video, index) => {
    return (
      <div key={video.id.videoId} className="video-map" onClick={() => onClickHandle(index)}>
        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
        <h4>{video.snippet.title}</h4>
      </div>
    );
  });

  return (
    <div className="video-list">
      <div>{props.subVideos.length > 0 ? <MainVideo video={props.mainVideo} /> : ''}</div>
      <div className="sub-video">{videos}</div>
    </div>
  );
};

const MainVideo = ({ video }) => {
  return (
    <div className="main-video">
      <iframe
        width="690"
        height="445"
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        title={video.snippet.title}
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h4 className="title-main">{video.snippet.title}</h4>
    </div>
  );
};

export default VideoList;
