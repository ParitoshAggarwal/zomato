import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CBS from "./chatbox/CBS";

class App extends Component {
  render() {
    return (
      <div className="container">
        <CBS />
      </div>
    );
  }
}

export default App;
