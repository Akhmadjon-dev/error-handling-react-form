import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Input from "./input";

export default class FormComponent extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {
      // username: "Username is required.",
    },
  };

  /// input handler
  handleChange = ({ target: input }) => {
    console.log(input.name, "input");
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  validate = () => {
    return { username: "username is requird" };
  };

  // handling form submit
  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors });
    if (errors) return;
    console.log("submitted");
  };
  render() {
    console.log(this.state.account);
    const { account } = this.state;
    return (
      <div className="form">
        <Form onSubmit={this.handleSubmit}>
          <Input
            label="Username"
            type="name"
            handleChange={this.handleChange}
            value={account.username}
            name="username"
          />
          <Input
            label="Password"
            type="password"
            handleChange={this.handleChange}
            value={account.password}
            name="password"
          />

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
