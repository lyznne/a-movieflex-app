import React, { useState } from 'react';
import '../Register.css';
import axios from "axios"

const Register = () => {

  const [formValues, setFormValues] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: ''
  });

  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleFormInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (formValues.password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
    console.log('Form Values:', formValues);

    try {
      const response = await axios.post("http://localhost:5000/register", formValues);
      console.log(response.data);
      alert('User registered successfully!');
    } catch (error) {
      console.log(error);
      setErrorMessage('An error occurred while registering the user');
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Join Happyteens</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-input"
            name="firstname"
            placeholder="First Name"
            value={formValues.firstname}
            onChange={handleFormInputChange}
          />
        </div>
        
        <div className="form-group">
          <input
            type="text"
            className="form-input"
            name="lastname"
            placeholder="Last Name"
            value={formValues.lastname}
            onChange={handleFormInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-input"
            name="username"
            placeholder="Username"
            value={formValues.username}
            onChange={handleFormInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-input"
            name="email"
            placeholder="Email Address"
            value={formValues.email}
            onChange={handleFormInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-input"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleFormInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-input"
            name="confirm-password"
            placeholder="Re-enter password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <button type="submit" className="btn">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
