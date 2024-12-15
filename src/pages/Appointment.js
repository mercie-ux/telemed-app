import React from 'react';
import { useNavigate } from 'react-router-dom'; // import useNavigate hook
import Card from '../components/Card';
import photo1 from '../assets/doctors helpline.jpg';
import photo2 from '../assets/dochelpline.jpg';
import photo3 from '../assets/bookapp1.jpg';
import photo4 from '../assets/bookapp2.jpg';
import photo5 from '../assets/bookapp3.jpg';
import photo6 from '../assets/bookapp4.jpg';
import BookAppointmentForm from './forms/BookAppointmentForm';
const Appointment = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleScheduleClick = () => {
    navigate('/schedule'); // Navigate to the schedule form
  };
  
  return (
    <div className='appointmentContent'>
      <div>
        <h2>Appointment Details</h2>
        <p>
          Stay on top of your healthcare by easily managing appointments through our platform.
          Use the Book Appointment button to schedule a consultation with a healthcare provider at a time that suits you.
          After booking, your scheduled appointments will appear under View Booked Appointments for quick access to details,
          including the date, time, and type of consultation.
        </p>
        <div className="image-container" style={{ display: 'flex', gap: '4cm' }}>
        <Card 
          image={photo1}
          description='Booking an online appointment with a 
          health provider is a convenient way to access healthcare services'
        />
        <Card 
          image={photo2}
          description='Browse the list of available providers by specialty, 
          location, or ratings to choose the best fit for your needs.'
        />
        <Card 
          image={photo3}
          description='Your health, your time, your convenience! 
          Book an appointment with top healthcare providers effortlessly.'
        />
        
        </div>
        <p>
          Manage your appointments here. Book or schedule an appointment easily.
        </p>
        <div>
          <button onClick={handleScheduleClick} >
            Schedule Form
            </button>
        </div>
    
    <BookAppointmentForm />
      </div>
      <div className="image-container" style={{ display: 'flex', gap: '4cm' }}>
      <Card 
          image={photo4}
          description='Log in or sign up to connect with certified 
          healthcare professionals in just a few clicks.'
        />
        <Card 
          image={photo5}
          description='"Pick a date and time that works for you. Our real-time scheduling makes it simple!'
        />
        <Card 
          image={photo6}
          description='Secure your slot with a quick confirmation—no long waits, no hassles'
        />

      </div>
  </div>
  );
};

export default Appointment;
