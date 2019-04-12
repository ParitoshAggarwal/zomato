import React, { Component } from "react";
import CB from "./CB.jsx";
import "firebase/database";
import fb from "../fbConfig";
import $ from "jquery";

class CBS extends Component {
  constructor() {
    super();
    this.state = {
      CB: [] //{ id: 1, user: 1, remButton: 0, idx: 1,agent:1 }   //1:zomato else user
    };
  }

  componentDidMount() {
    var reference = this;
    fb.ref("/chatPool/user1/").on("value", function(snapshot) {
      reference.setState({
        CB: snapshot.val() || "nahi mila"
      });
    });
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    var scrollLength = 100000000000000000000000;
    $("html, body").animate({ scrollTop: scrollLength }, "slow");
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
      agent: 0,
      date: 900,
      time: 900
    });
    this.setState({ CB: cb });

    this.handleOldAddUser(ncb, cb, number);
  };

  handleOldAddUser = (ncb, cb, number) => {
    cb.push({
      id: ncb[0].id + 1,
      user: 0,
      remButton: 1,
      idx: number,
      agent: 0,
      date: 900,
      time: 900
    });
    this.setState({ CB: cb });
    this.handleNewAdd(ncb, cb, number);
  };

  handleNewAdd = (ncb, cb, number) => {
    cb.push({
      id: ncb[0].id + 2,
      user: 1,
      remButton: 0,
      idx: number,
      agent: 0,
      date: 900,
      time: 900
    });
    this.setState({ CB: cb });
    fb.ref("/chatPool/").set({ user1: cb });
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
