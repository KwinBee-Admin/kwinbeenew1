import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';  // Create and link your CSS file for styling
import instagram from'./instagram.png'
import linkdin from './linkedin.png'
import email from './email-256.png'
import whatsapp from './whatsapp-400.png'
const Footer = () => {


  return (
    <footer id="foot">
      <div className="footer-section">
        <h3>Contact Us</h3>
        <ul>
          <li>
            <a href="https://wa.link/weua1t" target="_blank" rel="noopener noreferrer">
              <img src={whatsapp} alt="WhatsApp" /> +91 62306 21668
            </a>
          </li>
          <li>
            <a href="mailto:chess@kwinbee.com" target="_blank" rel="noopener noreferrer">
              <img src={email} alt="Email" /> chess@kwinbee.com
            </a>
          </li>
        </ul>
        <p>&copy; 2023 KwinBee</p>
      </div>
      <div className="footer-section">
        <h3>Options</h3>
        <ul>
          <li>
            <a href="https://www.linkedin.com/company/kwinbee/jobs/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
              Career
            </a>
          </li>
          <li>
            <a href="feedback.html">FeedBack</a>
          </li>
          <li>
            <a href="https://blog.kwinbee.com/">Chess Blogs</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Follow Us</h3>
        <ul>
          <li>
            <a href="https://www.instagram.com/kwinbee64/" target="_blank" rel="noopener noreferrer" style={{marginRight:'2px'}}>
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/company/kwinbee/" target="_blank" rel="noopener noreferrer">
              <img src={linkdin} alt="LinkedIn" />
            </a>
          </li>
        </ul>
        <form>
          <script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_NhrEjBrKd6h8Yp" async></script>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
