import React from "react";
import { Form, Button } from "react-bootstrap";
import Joi from "joi-browser";
import Input from "./input";
import FormComponent from "./form";

export default class Login extends FormComponent {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  // schema for joi
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    console.log("submiited");
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div className="form">
        <Form onSubmit={this.handleSubmit}>
          <Input
            label="Username"
            type="name"
            handleChange={this.handleChange}
            value={data.username}
            name="username"
            error={errors.username}
          />
          <Input
            label="Password"
            type="password"
            handleChange={this.handleChange}
            value={data.password}
            name="password"
            error={errors.password}
          />
          {this.renderBtn("Login")}
        </Form>
      </div>
    );
  }
}
