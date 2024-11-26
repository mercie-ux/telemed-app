import React from 'react';
import ProviderForm from './forms/ProviderForm';
import cardiologistImage from '../assets/doctor1.jpg';
import neurologistImage from '../assets/doctor.jpg';
import pediatricianImage from '../assets/doctor4.jpg';
const Providers = () => (
  <div>
    <h2>Our Providers</h2>
    <p>
    Our Medics Team is composed of highly qualified and compassionate healthcare professionals dedicated to 
    delivering top-notch care. Each member of our team brings a wealth of experience and a 
    commitment to patient-centered care, ensuring you receive expert guidance and support at every step.
    From general practitioners to specialists, our doctors are here to help you manage your health effectively 
    through convenient and accessible virtual consultations. Meet our trusted professionals 
    who are ready to address your medical concerns and empower you to lead a healthier life.
    </p>
    <ul>
      <li>
        <img src={cardiologistImage} alt="Dr. John Brown - Cardiologist" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
        <strong>Dr. John Brown - Cardiologist</strong></li>
      <li>
        <img src={neurologistImage} alt="Dr. Jane Smith - Neurologist" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
        <strong>Dr. Jane Smith - Neurologist</strong>
      </li>
      <li>
      <img src={pediatricianImage} alt="Dr. Eli Johnson - Pediatrician" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
        <strong>Dr. Eli Johnson - Pediatrician</strong>
      </li>
    </ul>
    <ProviderForm />
  </div>
);

export default Providers;
