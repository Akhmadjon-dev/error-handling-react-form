import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class FormComponent extends Component {
  state = {
    account: { username: "", password: "" },
  };

  /// input handler
  handleChange = ({ currentTarget: input }) => {
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
    return (
      <div className="form">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="name"
              placeholder="Enter userName"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
