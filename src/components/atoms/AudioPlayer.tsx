import React from 'react'

interface AudioPlayerProps {
  url: string
}

const AudioPlayer = ({ url }: AudioPlayerProps) => {
  return (
    <div>
      <div style={{color:'white'}}>Audio {url}</div>
      <audio controls preload="auto" >
        <source src={url} type="audio/mpeg" />
        Browser does not support audio
      </audio>
      <div>-</div>
    </div>
  )
}

export default AudioPlayer