import React, { Component } from "react";
import "./App.css";
import CBS from "./chatbox/CBS";
class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="container">
        <CBS />
      </div>
    );
  }
}

export default App;
