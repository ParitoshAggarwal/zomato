import React, { Component } from "react";

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
      9: [10]
    },
    sentmap: {
      //static
      0: "everyone is busy",
      1: "this is start 1",
      2: "under 1->2",
      3: "under 1->3",
      4: "under 1->4",
      5: "under 2->5",
      6: "under 2->6",
      7: "under 3->7",
      8: "under 3->8",
      9: "under 3->9",
      10: "call to executive"
    }
  };

  printButtonsOrNot() {
    if (this.props.remButton === 0) {
      return (
        <div>
          <p>{this.props.user === 1 ? "Zomato" : "User"}</p>
          {this.state.indxmap[this.props.idx].map(tags => (
            <div>
              <button
                key={tags}
                onClick={() => this.props.onDelete(this.props.id, tags)}
              >
                {this.state.sentmap[tags]}
              </button>
            </div>
          ))}
        </div>
      );
    }
    return <p>{this.props.user === 1 ? "Zomato" : "User"}</p>;
  }

  render() {
    return (
      <div>
        <p>{this.state.sentmap[this.props.idx]}</p>
        {this.printButtonsOrNot()}
      </div>
    );
  }
}

export default CB;
