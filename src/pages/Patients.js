import React from 'react';
import PatientForm from './forms/PatientForm';

const Patients = () => (
  <div>
    <h2>Patient Information</h2>
    <p>This platform allows patients to manage their healthcare needs efficiently. 
        Patients can book appointments, view and manage their health records, 
        and communicate with healthcare providers through a user-friendly interface. 
        This section is designed to prioritize accessibility, privacy, and convenience.
        </p>
    <PatientForm />

  </div>
);

export default Patients;
