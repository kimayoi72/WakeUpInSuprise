import React, { Component } from 'react';

import AudioPlayer from './components/atoms/AudioPlayer'

import logo from './logo.svg';
import './App.css';
import AudioFile from './libs/AudioModel';
import { fetchAudioFiles } from './libs/ApiClient';

interface IAppState {
  audioFiles: AudioFile[]
}

class App extends Component<{}, IAppState> {
  constructor(props:Readonly<{}>) {
    super(props)
    this.state = { audioFiles: [] };
  }
  public async componentDidMount() {
    const audioFiles = await fetchAudioFiles();
    this.setState({ audioFiles });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        { this.state.audioFiles.map((audioFile) => (
          <div key={audioFile.id} >
            <div>"{audioFile.id}"</div>
            <AudioPlayer url={audioFile.url} />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
