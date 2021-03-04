import React from "react";
import { Form } from "react-bootstrap";

const Input = ({ label, name, handleChange, type, value }) => {
  return (
    <div>
      <Form.Label>{label}</Form.Label>
      <input
        name={name}
        className="form-control"
        onChange={handleChange}
        value={value}
        type={type}
        placeholder={`Enter ${name}`}
      />
    </div>
  );
};

export default Input;
