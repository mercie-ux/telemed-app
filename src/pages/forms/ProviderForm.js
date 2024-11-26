import React, { useState } from 'react';


const ProviderForm = () => {
    const [name, setName] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [availability, setAvailability] = useState('');
    const [experience, setExperience] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, specialty, email });
        // Implement provider registration API call
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Provider Registration</h2>
            <label>Name:</label>
            <input 
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <label>Email:</label>
            <input 
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <label>Specialty:</label>
            <input
                type="text"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                required
            />
            <label>Phone:</label>
            <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            <label>Address:</label>
            <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
            />
            <label>Availability Schedule:</label>
            <input
                type="text"
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                required
            />
            <label>Experience/Qualification:</label>
            <input
                type="text"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                required
            />

            <button type='submit'>Register Provider</button>
        </form>
    );
};

export default ProviderForm;