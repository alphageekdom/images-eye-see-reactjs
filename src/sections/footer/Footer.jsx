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
            <Link className='footerLink' to='/home'>
              Home
            </Link>
          </small>
          <small>
            <Link className='footerLink' to='/bookings'>
              Bookings
            </Link>
          </small>
          <small>
            <Link className='footerLink' to='/tos'>
              Terms of Service
            </Link>
          </small>
          <small>
            <Link className='footerLink' to='/contact'>
              Contact
            </Link>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
