import React, { Component } from "react";
import CB from "./CB.jsx";

class CBS extends Component {
  state = {
    CB: [{ id: 1, user: 1, remButton: 0, idx: 1 }]
  };

  handleDelete = (passedId, number) => {
    let ncb = this.state.CB.filter(c => c.id === passedId);
    let cb = this.state.CB.filter(c => c.id !== passedId);
    this.setState({ CB: cb });

    this.handleOldAddZom(ncb, cb, number);
  };
  handleOldAddZom = (ncb, cb, number) => {
    // ncb[0].remButton = 1;
    cb.push({ id: ncb[0].id, user: 1, remButton: 1, idx: ncb[0].idx });
    this.setState({ CB: cb });

    this.handleOldAddUser(ncb, cb, number);
  };

  handleOldAddUser = (ncb, cb, number) => {
    // ncb[0].user = 0;
    // ncb[0].remButton = 1;
    // ncb[0].id = ncb[0].id + 1;
    // ncb[0].idx = number;
    cb.push({ id: ncb[0].id + 1, user: 0, remButton: 1, idx: number });
    this.setState({ CB: cb });

    this.handleNewAdd(ncb, cb, number);
  };

  handleNewAdd = (ncb, cb, number) => {
    // ncb[0].remButton = 0;
    // ncb[0].id = ncb[0].id + 1;
    // ncb[0].user = 1;
    // ncb[0].idx = number;
    cb.push({ id: ncb[0].id + 2, user: 1, remButton: 0, idx: number });
    this.setState({ CB: cb });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.CB.map(tag => (
          <CB
            key={tag.id}
            onDelete={this.handleDelete}
            idx={tag.idx}
            user={tag.user}
            id={tag.id}
            remButton={tag.remButton}
          />
        ))}
      </div>
    );
  }
}

export default CBS;
