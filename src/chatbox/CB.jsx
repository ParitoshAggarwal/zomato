import React, { Component } from "react";
import "./style.css";

class CB extends Component {
  state = {
    indxmap: {
      //static
      0: [0],
      1: [2, 3, 4],
      2: [5, 6],
      3: [7, 8, 9],
      4: [10],
      5: [10],
      6: [10],
      7: [10],
      8: [10],
      9: [10],
      10: []
    },
    sentmap: {
      //static
      0: "everyone is busy",
      1: "Hello, please select the order for which you seek support",
      2: "Order from Raj Chinese Food. Placed on 26th Mar at 12:39 PM. #1481706006",
      3: "Order from Vijay Indian Food. Placed on 27th Mar at 11:39 PM. #1481706008",
      4: "Other previous orders",
      5: "we got it do want to talk to executive",
      6: "anyway you have to talk to executive",
      7: "just click and talk to executive",
      8: "just click and talk to executive please",
      9: "just click and talk to executive sunle na",
      10: "call to executive"
    }
  };

  printButtonsOrNot() {
    if (this.props.remButton === 0) {
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
      <div className={this.props.user == 1 ? "zomtextbox" : "usertextbox"}>
        <p className={this.props.user == 1 ? "zomtext" : "usertext"}>
          {this.state.sentmap[this.props.idx]}
        </p>
        {this.printButtonsOrNot()}
        <p className={this.props.user == 1 ? "zomtext" : "usertext"}>
          {this.props.user == 1 ? "Zomato" : ""}{" "}
          <span className="floatright">7:43</span>
        </p>
      </div>
    );
  }
}

export default CB;
