import React, { useState } from "react";

const BookAppointmentForm = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [doctor, setDoctor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ date, time, doctor});
        // Implement appointment booking API call
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Book Appointment</h2>
            <label>Date:</label>
            <input 
               type="date"
               value={date}
               onChange={(e) => setDate(e.target.value)}
               required 
            />
            <label>Time:</label>
            <input 
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
            />
            <label>Doctor:</label>
            <input 
                type="text"
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                required
            />
            <button type="submit">Book</button>
        </form>
    );
};

export default BookAppointmentForm;