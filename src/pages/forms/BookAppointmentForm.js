import React, { useState } from "react";
import axios from 'axios';

const BookAppointmentForm = () => {
    const [appointment, setAppointment] = useState({
        patientName: '',
        doctorId: '',
        appointmentDate: '',
        appointmentTime:'',
        notes: ''
      });

      const [message, setMessage] = useState('');
    
      // handle input changes dynamically
      const handleInputChange = (e) => {
        const { name, value } =e.target;
        setAppointment({ ...appointment, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post(
            'http://localhost:6000/api/book-appointment',
            appointment
          );
           setMessage(response.data.message); // displays success message
           // clear the form fields after successful submission
           setAppointment({
            patientName: '',
            doctorId: '',
            appointmentDate: '',
            appointmentTime: '',
            notes: ''
           });
        } catch (error) {
            const errorMessage = error.response?.data?.error || 'Error booking appointmenr.';
            setMessage(errorMessage); // display error message
            console.error('Error booking appointment:', error);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Book Appointment</h2>
            {message && <p>{message}</p>} {/* Display feedback message */}
            <label>Patient Name:</label>
            <input
                type='text'
                name="patientName"
                value={appointment.patientName}
                onChange={handleInputChange}
                required
            />
            <label> Date:</label>
            <input 
               type="date"
               name="appointmentDate"
               value={appointment.appointmentDate}
               onChange={handleInputChange}
               required 
            />
            <label>Time:</label>
            <input 
                type="time"
                name="appointmentTime"
                value={appointment.appointmentTime}
                onChange={handleInputChange}
                required
            />
            <label>Doctor:</label>
            <input 
                type="text"
                name="doctorId"
                value={appointment.doctorId}
                onChange={handleInputChange}
                required
            />
            <label>Notes:</label>
            <textarea 
                name="notes"
                value={appointment.notes}
                onChange={handleInputChange}
            />
            <button type="submit">Book</button>
        </form>
    );
};

export default BookAppointmentForm;