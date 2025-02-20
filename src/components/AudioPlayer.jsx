import React from 'react';
import './AudioPlayer.css';

function AudioPlayer({ audioSrc, title, description }) {
  return (
    <div className="audio-player">
      <h3>{title}</h3>
      <audio controls src={audioSrc}>
        Your browser does not support the audio element.
      </audio>
      <p>{description}</p>
    </div>
  );
}

export default AudioPlayer;
