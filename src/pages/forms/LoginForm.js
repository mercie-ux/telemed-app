import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import axios from 'axios';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // state for feedback message

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const response = await axios.post('http://localhost:6000/api/login', {
        email, password,
      });
      // if the backend responds with a success message and token
      const { token, message } = response.data;
      
      // save the token to localstorage 
      localStorage.setItem('authToken', token);

      setMessage(message); // display success message
      // redirect to dashboard
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Login failed!';
      setMessage(errorMessage); // display error message
      console.error('Error during login:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      <p>
      Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </form>
  );
};

export default LoginForm;
