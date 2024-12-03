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
    <div className='homeContent'>
        <h1>Welcome to Afya-poa</h1>
      <div className='homeIntro'>
        <p>At Afya-poa, we are dedicated to making healthcare more accessible, efficient, and convenient. 
            Our platform connects patients with certified healthcare providers for virtual consultations, 
            enabling you to receive professional medical advice, diagnosis, and treatment 
            recommendations without needing to leave your home. Through secure and user-friendly 
            video consultations, appointment scheduling, and personalized care, Afya-poa is here to support 
            your health wherever you are. Embrace the future of healthcare with Afya-poa — quality care, just a click away. 
            Get medical advice, prescription, 
            ways to maintain healthy diet and much more hustle free. <br></br>
            <button onClick={handleGetStarted}>Get started</button>
        </p>
        <img src={HomeImage} alt='Intro' style={{ width: '400px', height: '300px', borderRadius: '30px' }} />
        
      </div>
    
    
    <div style={{ display: 'flex', gap: '4cm' }}>
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