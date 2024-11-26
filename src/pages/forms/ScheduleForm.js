import React, { useState } from 'react';

const ScheduleForm = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ date, time });
        //Implement scheduling API call
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