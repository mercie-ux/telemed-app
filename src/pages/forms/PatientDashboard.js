import React from 'react';
import { Link } from 'react-router-dom';

const PatientDashboard = () => {
  return (
    <div>
      <h1>Welcome, [Patient Name]</h1>
      <p>Your upcoming appointment: [Date, Time, Doctor]</p>

      <nav>
        <ul>
          <li><Link to="/patients/appointments">Manage Appointments</Link></li>
          <li><Link to="/patients/profile">Update Profile</Link></li>
          <li><Link to="/patients/records">View Medical Records</Link></li>
          <li><Link to="/patients/consultation">Join Virtual Consultation</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default PatientDashboard;
