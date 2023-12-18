import React from 'react';
import './toolbar.css';
import Instagram from '../../assets/icons8-instagram-150.png';

const Toolbar = () => {
  return (
    <div className='toolbar'>
      <div className='container'>
        <div className='toolbar__content'>
          <div className='toolbar__item'>
            <p>Images Eye See, LLC</p>
          </div>
          <div className='toolbar__item'>
            <ul className='toolbar__social'>
              <li>
                <a
                  href='https://www.instagram.com/images.eye.see.llc'
                  target='blank'
                  className='toolbar__social-icon'
                >
                  <img
                    src={Instagram}
                    alt='Out Instagram'
                    title='Our Instagram'
                    width={'auto'}
                    height={'auto'}
                    loading='lazy'
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
