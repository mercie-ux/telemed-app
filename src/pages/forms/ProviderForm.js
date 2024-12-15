import React, { useState } from 'react';


const ProviderForm = () => {
    const [name, setName] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [availability, setAvailability] = useState('');
    const [experience, setExperience] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:6000/api/providers/register', {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify({
                    name, specialty, email, phone, address, availability, experience,
                }),
            });
            if (response.ok) {
                const data = await response.json();
                alert(`Provider registered successfully! Provider ID: ${data.providerId}`);
                // Reset form
                setName('');
                setSpecialty('');
                setEmail('');
                setPhone('');
                setAddress('');
                setAvailability('');
                setExperience('');
            } else {
                const errorData = await response.json();
                alert(`Failed to register provider: ${errorData.error}`);
            }
        } catch (error) {
            console.error('Error registering provider:', error);
            alert('An error ocurred while registering the provider');

        }
       
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