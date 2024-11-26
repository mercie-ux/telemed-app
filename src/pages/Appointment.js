import React from 'react';
import { useNavigate } from 'react-router-dom'; // import useNavigate hook
import BookAppointmentForm from './forms/BookAppointmentForm';

const Appointment = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleScheduleClick = () => {
    navigate('/schedule'); // Navigate to the schedule form
  };
  return (
    <div>
    <h2>Appointment Details</h2>
    <p>Stay on top of your healthcare by easily managing appointments through our platform.
    Use the Book Appointment button to schedule a consultation with a healthcare provider at a time that suits you.
    After booking, your scheduled appointments will appear under View Booked Appointments for quick access to details,
    including the date, time, and type of consultation.
    </p>
    <p>
      Manage your appointments here. Book or schedule an appointment easily.
    </p>
    <button onClick={handleScheduleClick}>Schedule Form</button>
    <BookAppointmentForm />
  </div>
  );
};

export default Appointment;
