//import React from 'react';
import React from  'react'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Card from '../components/Card';
import HomeImage from '../assets/intro.jpg';
import image1 from '../assets/doctor6.jpg';
import image2 from '../assets/patient1.jpg';
import image3 from '../assets/doctor5.jpg';
const Home = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const handleGetStarted = () => {
    navigate('/login'); // Navigate to the login page
  };
  return(
    <div>
    <h1>Welcome to Afya-poa</h1>
    <p>At Afya-poa, we are dedicated to making healthcare more accessible, efficient, and convenient. 
        Our platform connects patients with certified healthcare providers for virtual consultations, 
        enabling you to receive professional medical advice, diagnosis, and treatment 
        recommendations without needing to leave your home. Through secure and user-friendly 
        video consultations, appointment scheduling, and personalized care, Afya-poa is here to support 
        your health wherever you are. Embrace the future of healthcare with Afya-poa — quality care, just a click away. 
        Get medical advice, prescription, 
        ways to maintain healthy diet and much more hustle free.
    </p>
    <img src={HomeImage} alt='Intro' style={{ width: '500px', height: '400px', borderRadius: '30px' }} />
    <button onClick={handleGetStarted}>Get started</button>
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
    <Card 
        image={image1}
        title="Telemedicine for everyone"
        description="Ease of accessibilty for everyone to use both healthcare providers
        and patients, across all regions. "
    />
    
    <Card 
        image={image2}
        title="Health care Tips"
        description="Get medical attention ate the comfort of your home, with 
        our health care providers who are readily available."
    />
    
    <Card 
        image={image3}
        title="Medical Interpretation Partner"
        description="Thoughts, ideas and inspiration on the future of 
        healthcare from the early pioneers of telemedicine."
    />
    </div>
  </div>
  );
};
  
export default Home; //Ensure Home is exported as default