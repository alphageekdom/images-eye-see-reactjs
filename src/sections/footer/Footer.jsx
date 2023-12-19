import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer id='footer'>
      <div className='container footer__container'>
        <div className='footer__copyright'>
          <small>{year} Images Eye See LLC | All Rights Reserved</small>
        </div>
        <div className='footerLinks'>
          <small>
            <Link
              className='footerLink'
              to='/home'
              name='Home Page'
              title='Home Page'
            >
              Home
            </Link>
          </small>
          <small>
            <Link
              className='footerLink'
              to='/bookings'
              name='Bookings Page'
              title='Bookings Page'
            >
              Bookings
            </Link>
          </small>
          <small>
            <Link
              className='footerLink'
              to='/tos'
              name='Terms of Service Page'
              title='Terms of Service Page'
            >
              Terms of Service
            </Link>
          </small>
          <small>
            <Link
              className='footerLink'
              to='/contact'
              name='Contact Page'
              title='Contact Page'
            >
              Contact
            </Link>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
