import React, { useState} from 'react';
import PatientForm from './forms/PatientForm';
import PatientImage from '../assets/animation.jpg';

const Patients = () => {
  const [showForm, setShowForm] = useState(false); // for form visibility
  
  const handleToggleForn = () => {
    setShowForm((preState) => !preState); // toggle visibilty
  };

  return(
    <div>
    <h2>Patient Information</h2>
    <div className='patientContent'>
      <p>
        This platform allows patients to manage their healthcare needs efficiently. 
          Patients can book appointments, view and manage their health records, 
          and communicate with healthcare providers through a user-friendly interface. 
          This section is designed to prioritize accessibility, privacy, and convenience. <br></br>
        {/* button to show patient form*/}
        <button
          onClick={handleToggleForn}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginBottom: '20px',
          }}
        >
        {showForm ? 'Patient Form': 'Register as a patient'}
        </button>

        {/* condition when rendering the form */}
        {showForm && (
          <div>
            <PatientForm />
          </div>
        )}
      </p>
      <img src={PatientImage} style={{ width: '200px', height: '250px', borderRadius: '30px' }}/>
      </div>
    </div>
    
  );
}; 

export default Patients;
