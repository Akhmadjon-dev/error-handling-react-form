import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class FormComponent extends Component {
  state = {
    account: { username: "", password: "" },
  };

  /// input handler
  handleChange = ({ target: input }) => {
    console.log(input.name, "input");
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  // handling form submit
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  render() {
    console.log(this.state.account);
    return (
      <div className="form">
        <Form onSubmit={this.handleSubmit}>
          <Form.Label>Username</Form.Label>
          <input
            name="username"
            className="form-control"
            onChange={this.handleChange}
            type="name"
            placeholder="Enter userName"
          />

          <Form.Label>Password</Form.Label>
          <input
            name="password"
            className="form-control"
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
          />

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
