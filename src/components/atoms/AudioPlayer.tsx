import React, { useState, useEffect } from "react";

interface AudioPlayerProps {
  url: string;
  name?: string;
}

function AudioPlayer({ url, name }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = React.createRef<HTMLAudioElement>();

  function togglePlaying(e : React.SyntheticEvent) {
    e.preventDefault();
    setIsPlaying(!isPlaying);
  }

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  });

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        margin: "5px",
        padding: "5px"
      }}
      onClick={togglePlaying}
    >
      <div>{name}</div>
      <div>Playing: {isPlaying ? "playing" : "paused"}</div>
      <audio ref={audioRef} preload="metadata" loop>
        <source src={url} type="audio/mpeg" />
        Browser does not support audio
      </audio>
    </div>
  );
}

export default AudioPlayer;
