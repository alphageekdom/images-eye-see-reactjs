import './scrollButton.css';
import { useState } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';

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
  return (
    <div className='container scrollContainer'>
      <button className='scrollBtn'>
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
