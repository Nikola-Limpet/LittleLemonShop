import React from 'react';
import logo from '../images/small_logo.png';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <section>
        
        <div className='company-info'>
          <img 
            src={logo}
            alt='Little Lemon Shop logo' 
          />
          <p>Little Lemon Shop is a small business that specializes in creating delicious lemon-flavored desserts. We are located in the heart of the city and have been serving our customers since 2010.</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/menu'>Menu</Link></li>
            <li><Link to='/reservations'>Online Booking</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
        <div className='contact-info'>
          <h3>Contact Us</h3>
          <p>123 Main Street</p>
          <p>City, State 12345</p>
          <p>
            <a href='tel:123-456-7890'>123-456-7890</a>
          </p>
          <p>
            <a href='mailto:al9725755@gmail.com'>al9725755@gmail.com</a>
          </p>
        </div>

        <div className='social-media'>
          <h3>Follow Us</h3>
          <ul>
            <li><a href='https://www.facebook.com'><FaFacebook /> Facebook</a></li>
            <li><a href='https://www.twitter.com'><FaTwitter /> Twitter</a></li>
            <li><a href='https://www.instagram.com'><FaInstagram /> Instagram</a></li>
          </ul>
        </div>
      </section>
      <p>&copy; {currentYear} Little Lemon Shop. All rights reserved by Nikola Limpet.</p>
    </footer>
  );
};

export default Footer;