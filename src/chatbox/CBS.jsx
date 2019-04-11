import React, { Component } from "react";
import CB from "./CB.jsx";
import "firebase/database";
import fb from "../fbConfig";

class CBS extends Component {
  constructor() {
    super();
    this.state = {
      CB: [] //{ id: 1, user: 1, remButton: 0, idx: 1,agent:1 }   //1:zomato else user
    };
  }

  componentDidMount() {
    var reference = this;
    fb.ref("/chatPool/chats/").on("value", function(snapshot) {
      reference.setState({
        CB: snapshot.val() || "nahi mila"
      });
    });
  }

  handleDelete = (passedId, number) => {
    let ncb = this.state.CB.filter(c => c.id === passedId);
    let cb = this.state.CB.filter(c => c.id !== passedId);
    this.setState({ CB: cb });

    this.handleOldAddZom(ncb, cb, number);
  };
  handleOldAddZom = (ncb, cb, number) => {
    cb.push({
      id: ncb[0].id,
      user: 1,
      remButton: 1,
      idx: ncb[0].idx,
      agent: 0
    });
    this.setState({ CB: cb });

    this.handleOldAddUser(ncb, cb, number);
  };

  handleOldAddUser = (ncb, cb, number) => {
    cb.push({ id: ncb[0].id + 1, user: 0, remButton: 1, idx: number });
    this.setState({ CB: cb });
    this.handleNewAdd(ncb, cb, number);
  };

  handleNewAdd = (ncb, cb, number) => {
    cb.push({ id: ncb[0].id + 2, user: 1, remButton: 0, idx: number });
    this.setState({ CB: cb });
    fb.ref("/chatPool/").set({ chats: cb });
  };

  render() {
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
