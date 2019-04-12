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
    fb.ref("/userid/user1/indxmap") //ADD USER HERE IN PLACE OF 'user1'
      .once("value")
      .then(function(snapshot) {
        reference.setState({
          indxmap: snapshot.val() || "nahi mila"
        });
      });

    fb.ref("/userid/user1/sentmap/") //ADD USER HERE IN PLACE OF 'user1'
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

  showLoader() {
    let tim = this.state.indxmap[0] === undefined;
    let tsm = this.state.sentmap[0] === undefined;
    if (tim === false && tsm === false) {
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
    } else
      return (
        <span className="loaderBottom">Zomato Chat Support Loading...</span>
      );
  }

  render() {
    return <span className="loader">{this.showLoader()}</span>;
  }
}

export default CB;
