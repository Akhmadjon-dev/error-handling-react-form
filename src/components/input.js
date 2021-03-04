import React from "react";
import { Form } from "react-bootstrap";

const Input = ({ label, name, handleChange, type, value, error }) => {
  return (
    <div className="form-group">
      <Form.Label>{label}</Form.Label>
      <input
        name={name}
        className="form-control"
        onChange={handleChange}
        value={value}
        type={type}
        placeholder={`Enter ${name}`}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
