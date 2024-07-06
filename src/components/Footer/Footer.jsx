import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faPinterest, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logo from '../Assests/logo.png'
const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={logo} alt="" />
        <h3>SHOPPER</h3>
      </div>
      <div className="footer-line">
        <a href="/company">Company</a>
        <a href="/products">Products</a>
        <a href="/offices">Offices</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="footer-line">
        <a href="https://instagram.com" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://pinterest.com" className="social-icon"><FontAwesomeIcon icon={faPinterest} /></a>
        <a href="https://whatsapp.com" className="social-icon"><FontAwesomeIcon icon={faWhatsapp} /></a>
      </div>
      <div className="footer-line">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
