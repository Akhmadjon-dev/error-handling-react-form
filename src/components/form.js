import React, { Component } from "react";

export default class Form extends Component {
  state = {
    account: { username: "", password: "" },
  };
  render() {
    return <div className="form"></div>;
  }
}
