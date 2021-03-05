import React, { Component } from "react";
import Joi from "joi-browser";
import { Button } from "react-bootstrap";
export default class Form extends Component {
  state = {
    data: {},
    errors: {},
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error?.details[0].message : null;
  };

  /// input handler
  handleChange = ({ target: input }) => {
    const errors = { ...this.state.errors };
    const errorMsg = this.validateProperty(input);

    if (errorMsg) errors[input.name] = errorMsg;
    else delete errors[input.name];

    console.log(errors, "input", errorMsg);

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  validate = () => {
    const options = {
      abortEarly: false,
    };
    const { error } = Joi.validate(this.state.data, this.schema, options);

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

    // cal server methods
    this.doSubmit();
  };
  renderBtn = (label) => (
    <Button disabled={this.validate()} variant="primary" type="submit">
      {label}
    </Button>
  );
}
