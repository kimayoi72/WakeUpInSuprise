import React, { Component } from "react";

import logo from "./assets/alarm_clock.svg";
import "./App.css";

import AudioFile from "./libs/AudioModel";
import AudioPlayer from "./components/atoms/AudioPlayer";
import Stopwatch from "./components/atoms/Stopwatch";

import * as ApiClient from "./libs/ApiClient";

interface IAppState {
  audioFiles: AudioFile[];
}

class App extends Component<{}, IAppState> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = { audioFiles: [] };
  }
  public async componentDidMount() {
    const audioFiles = await ApiClient.fetchAudioFiles();
    this.setState({ audioFiles });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <aside className="App-aside">
          <Stopwatch />
        </aside>
        <main className="App-main">
          {this.state.audioFiles.map(audioFile => (
            <div key={audioFile.id}>
              <AudioPlayer {...audioFile} />
            </div>
          ))}
        </main>
        <footer className="App-footer">
          <div>This application is made with 💜</div>
          <div>
            Icon made from{" "}
            <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> is
            licensed by CC BY 3.0
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
