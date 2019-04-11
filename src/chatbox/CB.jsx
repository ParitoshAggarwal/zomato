import React, { Component } from "react";
import "./style.css";
import "firebase/database";
import fb from "../fbConfig";

class CB extends Component {
  constructor() {
    super();
    this.state = {
      indxmap: {},
      sentmap: {}
    };
  }

  componentDidMount() {
    var reference = this;
    fb.ref("/userid/user1/indxmap")
      .once("value")
      .then(function(snapshot) {
        reference.setState({
          indxmap: snapshot.val() || "nahi mila"
        });
      });

    fb.ref("/userid/user1/sentmap/")
      .once("value")
      .then(function(snapshot) {
        reference.setState({
          sentmap: snapshot.val() || "nahi mila"
        });
      });
  }

  printButtonsOrNot() {
    let tp = this.state.indxmap[0] === undefined;
    if (this.props.remButton === 0 && tp === false) {
      return (
        <span>
          {this.state.indxmap[this.props.idx].map(tags => (
            <button
              className="zombtn"
              key={tags}
              onClick={() => this.props.onDelete(this.props.id, tags)}
            >
              {this.state.sentmap[tags]}
            </button>
          ))}
        </span>
      );
    }
  }

  render() {
    return (
      <div className={this.props.user === 1 ? "zomtextbox" : "usertextbox"}>
        <p className={this.props.user === 1 ? "zomtext" : "usertext"}>
          {this.state.sentmap[this.props.idx]}
        </p>
        {this.printButtonsOrNot()}
        <p className={this.props.user === 1 ? "zomtext" : "usertext"}>
          {this.props.user === 1 ? "Zomato" : ""}{" "}
          <span className="floatright">7:43</span>
        </p>
      </div>
    );
  }
}

export default CB;
