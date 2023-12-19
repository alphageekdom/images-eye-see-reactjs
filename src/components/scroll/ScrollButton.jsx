import './scrollButton.css';
import { useState, useEffect } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import 'aos/dist/aos.css';
import AOS from 'aos';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className='scrollContainer'>
      <button
        className='scrollBtn'
        data-aos='zoom-in-left'
        aria-label='Scroll Up Button'
      >
        <FaArrowAltCircleUp
          onClick={scrollToTop}
          style={{ display: visible ? 'inline' : 'none' }}
          data-aos='fade-up'
          className='scrollIcon'
        />
      </button>
    </div>
  );
};

export default ScrollButton;
