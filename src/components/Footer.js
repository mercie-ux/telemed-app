import React from 'react';

const Footer = () => {
  return (
    <footer className='footerContent' style={{ backgroundColor: '#282c34', color: '#fff', padding: '20px', textAlign: 'center' }}>
      <div>
        <h3>Contact Us</h3>
        <p><strong>Location:</strong> Nairobi, Kenya</p>
        <div style={{ marginTop: '20px' }}>
          <p><strong>Phone:</strong> +254707720510</p>
        </div>
        <iframe
          title="Nairobi Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.223196805562!2d36.82194638281925!3d-1.292065697665378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d89b97d3b1%3A0xdb24e4c73044b9de!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1691161087496!5m2!1sen!2s"
          width="300"
          height="200"
          style={{ border: '0', borderRadius: '10px' }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h3>Follow Us</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/color/48/facebook.png" alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/color/48/instagram-new.png" alt="Instagram" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/color/48/twitter-circled.png" alt="Twitter" />
          </a>
          <a href="https://wa.me/254707720510" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/color/48/whatsapp.png" alt="WhatsApp" />
          </a>
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        <p>&copy; {new Date().getFullYear()} Afya-poa. All Rights Reserved.</p>
        <p>
          <a href="/privacy" style={{ color: '#61dafb', textDecoration: 'none' }}>Privacy Policy</a> |{' '}
          <a href="/terms" style={{ color: '#61dafb', textDecoration: 'none' }}>Terms & Conditions</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
