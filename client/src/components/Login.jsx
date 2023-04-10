import React, { useState } from 'react';
import '../Login.css';
import axios from 'axios'




const Login = () => {

  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = e =>{
    const { name, value } = e.target 
    setFormValues(prevDetails => ({
      ...prevDetails,
        [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", formValues)
      console.log(response.data)
      console.log('User logged in successfully')
    } catch (error) {
      console.log(error)
      setErrorMessage('An error occurred while registering the user');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Welcome back to Happyteens </h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <input
            type="text"
            className="form-input"
            name="username"
            placeholder="Username"
            value={formValues.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-input"
            name="email"
            placeholder="Email Address"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-input"
            name="password"
            placeholder="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn">Log In</button>
      </form>
    </div>
  );
};

export default Login;
