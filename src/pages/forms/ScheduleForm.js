import React, { useState } from 'react';

const ScheduleForm = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const token = localStorage.getItem('authToken'); // get token from local storage
            const response = await fetch('http://localhost:6000/api/appointmets/schedule', {
                method: 'POST',
                headers: {'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`, // pass token in the headers for authentication 
                },
                body: JSON.stringify({ date, time }),
            });

            if (response.ok) {
                const data = await response.json();
                setSuccessMessage(data.message || 'Appointment scheduled successfully!');
                // Reset form
                setDate('');
                setTime('');
                setError('');
            } else {
                const errorData = await response.json();
                setError(errorData.error || 'An error occured while scheduling the appointment');
                setSuccessMessage('');
            }

        } catch (err) {
            console.error('Error scheduling appointment:', err);
            setError('An unexpected error occurred. Please try again.');
            setSuccessMessage('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Schedule Appointment</h2>
            <label>Date:</label>
            <input 
                type='date'
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <label>Time:</label>
            <input 
                type='time'
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
            />
            <button type='submit'>Schedule</button>
        </form>
    );
};

export default ScheduleForm;