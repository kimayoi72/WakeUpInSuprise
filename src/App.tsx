import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";

import logo from "./assets/abstract-vortex-2-512-247726.png";
import "./App.css";

import { Alarm, Welcome, Upload } from "./components/pages";

class App extends Component<{}> {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div>Wake Up in Surprise</div>
            {/* <img src={logo} className="App-logo" alt="logo" width="64" /> */}
          </header>
          <nav className="App-navigation">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/upload/">Upload</Link>
              </li>
              <li>
                <Link to="/alarm/">Alarm</Link>
              </li>
            </ul>
          </nav>
          <main className="App-main">
            <Route path="/" exact component={Welcome} />
            <Route path="/upload" component={Upload} />
            <Route path="/alarm" component={Alarm} />
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
      </Router>
    );
  }
}

export default App;
