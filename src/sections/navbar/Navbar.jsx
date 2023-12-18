import Logo from '../../assets/images-eye-llc-logo.png';
import { IoCloseSharp } from 'react-icons/io5';
import { IoMenu } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import './navbar.css';

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsiveNav');
  };

  const hideNavbar = () => {
    navRef.current.classList.remove('responsiveNav');
  };

  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });
  let navbarClasses = ['navContainer'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }
  return (
    <header id='navbar'>
      <div className='container navContainer'>
        <div className='navLogo'>
          <img src={Logo} alt='Logo' width={20} height={80} />
        </div>
        <nav className='nav' ref={navRef}>
          <ul className='navList'>
            <li>
              <Link to='/' className='navLink' onClick={hideNavbar}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/bookings' className='navLink' onClick={hideNavbar}>
                Bookings
              </Link>
            </li>
            <li>
              <Link to='/tos' className='navLink' onClick={hideNavbar}>
                TOS
              </Link>
            </li>
            <li>
              <Link to='/contact' className='navLink' onClick={hideNavbar}>
                Contact
              </Link>
            </li>
          </ul>
          <button className='navBtn navCloseBtn'>
            <IoCloseSharp onClick={showNavbar} />
          </button>
        </nav>
        <button className='navBtn'>
          <IoMenu onClick={showNavbar} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
