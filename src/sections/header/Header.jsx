import React from 'react';
import './header.css';
import Logo from '../../assets/images-eye-llc-logo.png';

const Header = () => {
  return (
    <header id='header'>
      <div className='container header__container'>
        <img
          src={Logo}
          alt='Images Eye See Logo'
          title='Images Eye See Logo'
          className='header__logo'
        />
      </div>
    </header>
  );
};

export default Header;
