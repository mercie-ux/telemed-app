import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PatientDashboard = () => {
  const [patientName, setPatientName] = useState('');
  const [upcomingAppointment, setUpcomingAppointment] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch patient data and upcoming appointment details from the backend
    const fetchPatientData = async () => {
      try {
        const token = localStorage.getItem('authToken'); // Assume token is stored here
        const headers = { Authorization: `Bearer ${token}` }; // Pass token in headers

        // Fetch patient profile details
        const profileResponse = await axios.get(
          'http://localhost:6000/api/patients/profile',
          { headers }
        );
        setPatientName(profileResponse.data.name);

        // Fetch upcoming appointment details
        const appointmentResponse = await axios.get(
          'http://localhost:6000/api/patients/appointments/upcoming',
          { headers }
        );
        setUpcomingAppointment(appointmentResponse.data);
      } catch (err) {
        setError('Failed to load patient data. Please try again later.');
        console.error('Error fetching patient data:', err);
      } finally {
        setLoading(false); // Ensure loading stops even if an error occurs
      }
    };

    fetchPatientData();
  }, []); // Dependency array ensures useEffect runs only once

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div>
          <h1>Welcome, {patientName}</h1>
          <p>
            Your upcoming appointment: {upcomingAppointment.date || 'N/A'}, {upcomingAppointment.time || 'N/A'}, {upcomingAppointment.doctor || 'N/A'}
          </p>
          <nav>
            <ul>
              <li><Link to="/patients/appointments">Manage Appointments</Link></li>
              <li><Link to="/patients/profile">Update Profile</Link></li>
              <li><Link to="/patients/records">View Medical Records</Link></li>
              <li><Link to="/patients/consultation">Join Virtual Consultation</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default PatientDashboard;
