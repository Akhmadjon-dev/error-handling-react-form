import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Joi from "joi-browser";
import Input from "./input";

export default class FormComponent extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {
      // username: "Username is required.",
    },
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") return "Username is required";
    }
    if (name === "password") {
      if (value.trim() === "") return "Password is required";
    }
  };
  /// input handler
  handleChange = ({ target: input }) => {
    const errors = { ...this.state.errors };
    const errorMsg = this.validateProperty(input);

    if (errorMsg) errors[input.name] = errorMsg;
    else delete errors[input.name];

    console.log(errors, "input");

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  validate = () => {
    const options = {
      abortEarly: false,
    };
    const { error } = Joi.validate(this.state.account, this.schema, options);

    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;

    // console.log(result, "joiiiii");
    // // const errors = {};
    // const { account } = this.state;
    // if (account.username.trim() === "")
    //   errors.username = "Username is required";
    // if (account.password.trim() === "")
    //   errors.password = "Password is required";

    // return Object.keys(errors).length === 0 ? null : errors;
  };

  // handling form submit
  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;
    console.log("submitted");
  };
  render() {
    const { account, errors } = this.state;
    return (
      <div className="form">
        <Form onSubmit={this.handleSubmit}>
          <Input
            label="Username"
            type="name"
            handleChange={this.handleChange}
            value={account.username}
            name="username"
            error={errors.username}
          />
          <Input
            label="Password"
            type="password"
            handleChange={this.handleChange}
            value={account.password}
            name="password"
            error={errors.password}
          />

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
