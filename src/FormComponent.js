import React, { useState } from "react";
import CommonInput from "./CommonInput";
import './FormComponent.css';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    username: "",
    description: "",
    agree: false,
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CommonInput
        type="text"
        name="username"
        label="Username"
        value={formData.username}
        onChange={handleChange}
      />

      <CommonInput
        type="textarea"
        name="description"
        label="Description"
        value={formData.description}
        onChange={handleChange}
      />

      <CommonInput
        type="checkbox"
        name="agree"
        label="I agree to the terms"
        value={formData.agree}
        onChange={handleChange}
      />

      <CommonInput
        type="radio"
        name="gender"
        label="Gender"
        options={[
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
        ]}
        value={formData.gender}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
