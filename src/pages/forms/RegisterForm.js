import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation


const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        console.log({ email, password });
        // Implement registration API call
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <label>Email:</label>
            <input 
                type="email"
                value="{email}"
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <lable>Password:</lable>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required  
            />
            <label>Confirm Password</label>
            <input 
                type='password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            />
            <button type='submit'>Sign Up</button>
            <p>
            Already have an account? <Link to="/login">Login</Link>
            </p>
        </form>
    );
};

export default RegisterForm;