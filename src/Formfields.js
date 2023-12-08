import React, { useState } from 'react';
import './App.css';

// InputField component
const InputField = ({ label, id, name, type, placeholder, value, onChange, error }) => {
  return (
    <div className={`input-group ${error ? 'error' : 'success'}`}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div className="error">{error}</div>
    </div>
  );
};

// RadioButton component
const RadioButton = ({ id, name, value, checked, onChange, label }) => {
  return (
    <div className="gender-options">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};


const Formfields = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    username: '',
    email: '',
    number: '',
    password: '',
    cpassword: '',
    gender: 'male',
  });

  const [formErrors, setFormErrors] = useState({
    fullname: '',
    username: '',
    email: '',
    number: '',
    password: '',
    cpassword: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
setSubmittedData(formData);
    
    if (validateInputs()) {
      
      console.log('Form submitted successfully!');
    }
  };

  const validateInputs = () => {
    let success = true;
    const newFormErrors = {};

    Object.keys(formData).forEach((fieldName) => {
      const value = formData[fieldName].trim();

      if (value === '') {
        success = false;
        newFormErrors[fieldName] = `${fieldName} is required`;
      } else {
        newFormErrors[fieldName] = '';
      }

      if (fieldName === 'email' && value !== '' && !validateEmail(value)) {
        success = false;
        newFormErrors[fieldName] = 'Email is not valid';
      }

      if (fieldName === 'number' && value !== '' && !validatePhoneNumber(value)) {
        success = false;
        newFormErrors[fieldName] = 'Invalid phone number';
      }

      if (fieldName === 'cpassword' && value !== formData.password) {
        success = false;
        newFormErrors[fieldName] = 'Password does not match';
      }
    });

    setFormErrors(newFormErrors);

    return success;
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePhoneNumber = (phoneNumber) => {
    const regx = /^[6-9]\d{9}$/;
    return regx.test(phoneNumber);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} id="form">
        <h1>Registration</h1>
        <div className='input-row'>
          <InputField
            label="Full name"
            id="fullname"
            name="fullname"
            type="text"
            placeholder="Enter your name"
            value={formData.fullname}
            onChange={handleChange}
            error={formErrors.fullname}
          />

          <InputField
            label="Username"
            id="username"
            name="username"
            type="text"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            error={formErrors.username}
          />

          <InputField
            label="Email"
            id="email"
            name="email"
            type="text"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            error={formErrors.email}
          />

          <InputField
            label="Phone Number"
            id="number"
            name="number"
            type="text"
            placeholder="Enter your number"
            value={formData.number}
            onChange={handleChange}
            error={formErrors.number}
          />

          <InputField
            label="Password"
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            error={formErrors.password}
          />

          <InputField
            label="Confirm Password"
            id="cpassword"
            name="cpassword"
            type="password"
            placeholder="Confirm your password"
            value={formData.cpassword}
            onChange={handleChange}
            error={formErrors.cpassword}
          />
        </div>

        <label>Gender</label>
        <div className="input-row">
          <RadioButton
            id="male"
            name="gender"
            value="male"
            checked={formData.gender === 'male'}
            onChange={handleChange}
            label="Male"
          />

          <RadioButton
            id="female"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleChange}
            label="Female"
          />

          <RadioButton
            id="none"
            name="gender"
            value="none"
            checked={formData.gender === 'none'}
            onChange={handleChange}
            label="Prefer not to say"
          />
        </div>

        <button type="submit">Register</button>
      </form>

      {submittedData && (
        <div>
          <h2>Submitted Data</h2>
          <p><strong>Full Name:</strong> {submittedData.fullname}</p>
          <p><strong>Username:</strong> {submittedData.username}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Phone Number:</strong> {submittedData.number}</p>
          <p><strong>Gender:</strong> {submittedData.gender}</p>
        </div>
      )}
    </div>
  );
};

export default Formfields;
