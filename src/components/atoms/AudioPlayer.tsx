import React, { useState, useEffect, Component } from "react";
import { render } from "react-dom";

interface AudioPlayerProps {
  url: string;
  name?: string;
}

interface AudioPlayerState {
  isPlaying: boolean;
}

class AudioPlayer extends Component<AudioPlayerProps, AudioPlayerState> {
  audioRef = React.createRef<HTMLAudioElement>();

  constructor(props: Readonly<AudioPlayerProps>) {
    super(props);
    this.state = { isPlaying: false };
  }

  togglePlaying = (e: React.SyntheticEvent) => {
    e.preventDefault();
    this.setState(
      prevState => {
        return { isPlaying: !prevState.isPlaying };
      },
      this.effectOnStateChange
    );
  };

  effectOnStateChange() {
    if (this.audioRef.current) {
      if (this.state.isPlaying) {
        this.audioRef.current.play();
      } else {
        this.audioRef.current.pause();
      }
    }
  }
  public render() {
    return (
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          margin: "5px",
          padding: "5px"
        }}
        onClick={this.togglePlaying}
      >
        <div>{name}</div>
        <div>Playing: {this.state.isPlaying ? "playing" : "paused"}</div>
        <audio ref={this.audioRef} preload="metadata" loop>
          <source src={this.props.url} type="audio/mpeg" />
          Browser does not support audio
        </audio>
      </div>
    );
  }
}

export default AudioPlayer;
