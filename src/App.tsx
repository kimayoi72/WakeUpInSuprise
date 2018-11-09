import React, { Component } from 'react';

import AudioPlayer from './components/atoms/AudioPlayer'

import logo from './logo.svg';
import './App.css';

class App extends Component {
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
        <AudioPlayer url="https://dl.last.fm/static/1541758312/131211148/0528f9c2cc9140584bc2c4fc6c9eac85b6c66fe58a4c064cd0b68cbeba633225/Death+Grips+-+Get+Got.mp3"/>
      </div>
    );
  }
}

export default App;
