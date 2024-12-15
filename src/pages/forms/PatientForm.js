import React, { useState } from 'react';
import axios from 'axios';
const PatientForm = () => {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(''); // For feedback messages

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:6000/api/patient/register',{
               name,
               dob,
               email, 
            });
            setMessage(response.data.message); // set success message
            // clear form fields after successful submission
            setName('');
            setDob('');
            setEmail('');
        } catch (error) {
            const errorMessage = error.response?.data?.error || 'An error occured';
            setMessage(errorMessage); // set error Message
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Patient Registration</h2>
            <label>Name:</label>
            <input 
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <label>Date of Birth:</label>
            <input 
                type='date'
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
            />
            <label>Email:</label>
            <input 
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type='submit'>Register</button>
        </form>
    );
};

export default PatientForm;