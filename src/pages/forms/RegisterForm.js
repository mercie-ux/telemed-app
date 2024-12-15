import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation


const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        try {
            const response = await fetch('http://localhost:6000/api/auth/register', {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({ email, password}),
            });
            
            if (response.ok) {
                alert('Registration successful!');
                // reset
                setEmail('');
                setPassword('');
                setConfirmPassword('');
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.errors?.[0]?.msg || errorData.error}`);    
            }
        } catch (error) {
            console.error('Error during registration:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <label>Email:</label>
            <input 
                type="email"
                value={email}
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