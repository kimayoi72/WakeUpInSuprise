import React, { useState, useEffect } from 'react'

interface AudioPlayerProps {
  url: string
}

function AudioPlayer({ url }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const audioRef = React.createRef<HTMLAudioElement>();

  function togglePlaying() {
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
  })

  return (
    <div style={{color:'black'}}>
      <div onClick={togglePlaying}>Audio {url}</div>
      <div>Playing: {isPlaying?'playing':'paused'}</div>
      <audio ref={audioRef} controls preload="" >
        <source src={url} type="audio/mpeg" />
        Browser does not support audio
      </audio>
    </div>
  )
}

export default AudioPlayer