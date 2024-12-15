import React, { useState } from 'react';
import Card from '../components/Card';
import ProviderForm from './forms/ProviderForm';
import cardiologistImage from '../assets/doctor1.jpg';
import neurologistImage from '../assets/doctor.jpg';
import pediatricianImage from '../assets/doctor4.jpg';
const Providers = () => {
  const [showForm, setShowForm] = useState(false); // to toggle form visibility

  const handleToggleForm = () => {
    setShowForm((prevState) => !prevState); // toggle form visibilty
  };

  return(
    <div className='providersContent'>
    <h2>Our Providers</h2>
    <p>
    Our Medics Team is composed of highly qualified and compassionate healthcare professionals dedicated to 
    delivering top-notch care. Each member of our team brings a wealth of experience and a 
    commitment to patient-centered care, ensuring you receive expert guidance and support at every step.
    From general practitioners to specialists, our doctors are here to help you manage your health effectively 
    through convenient and accessible virtual consultations. Meet our trusted professionals 
    who are ready to address your medical concerns and empower you to lead a healthier life.
    </p>
    <div className="image-container" style={{ display: 'flex', gap: '2cm' }}>
      <Card 
        image={cardiologistImage}
        title="Dr. John Brown - Cardiologist"
        description="Dr. John Brown is a dedicated cardiologist specializing in diagnosing, treating and preventing
        heart diseases, with over 18years of experience."
      />

      <Card 
      image={neurologistImage}
      title="Dr. Jane Smith - Neurologist"
      description="Dr. Jane Smith is a compassionate neurologist with experise in diagnosing and managing brain, 
      spinal cord, and nervouse system disorders."
      />

      <Card 
      image={pediatricianImage}
      title="Dr. Eli Johnson - Pediatrician"
      description="Dr Eli Johnson is a caring pediatrician with over 10 years of experience providing 
      comprehensive healthcare to infants, children and adolescents."
      />
    </div>

    {/*Button for provider registration form */}
    <div >
      <button 
        onClick={handleToggleForm}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007BFF',
          color: 'fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {showForm ? 'Provider Form' : 'Register as a Provider'}
      </button>
      {/*Condition for rendering the form*/}
      { showForm && (
        <div style={{ marginTop: '20px '}}>
        <ProviderForm />
      </div>
      )}
    </div>
    
  </div>
  );
};
  
export default Providers;
