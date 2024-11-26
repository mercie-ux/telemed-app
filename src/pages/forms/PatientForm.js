import React, { useState } from 'react';
const PatientForm = () => {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefaukt();
        console.log({ name, dob, email });
        // Implement patient registration API call
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