import React, { Component } from "react";

import AudioPlayer from "../atoms/AudioPlayer";

import AudioFile from "../../libs/AudioModel";
import * as ApiClient from "../../libs/ApiClient";

interface IAlarmState {
  audioFiles: AudioFile[];
}

export default class Alarm extends Component<{}, IAlarmState> {
  constructor(props: Readonly<{}>) {
    super(props)
    this.state = { audioFiles: [] }
  }

  public async componentDidMount() {
    const files = await ApiClient.fetchAudioFiles();
    this.setState({ audioFiles: files });
  }

  public render() {
    return (
      <div>
        <h1>Alarm</h1>
        <div>
          {this.state.audioFiles.map(audioFile => (
            <div key={audioFile.id}>
              <AudioPlayer {...audioFile} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
