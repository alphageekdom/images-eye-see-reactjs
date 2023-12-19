import React from 'react';
import './about.css';
import { useTypewriter } from 'react-simple-typewriter';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const About = () => {
  const [typeEffect] = useTypewriter({
    words: ['- Card Slinger', '- Practitioner of Divination'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section id='about'>
      <h1 className='about__title'>Welcome to My Home</h1>
      <div className='container about__container'>
        <div className='about__left'>
          <div className='about__info'>
            <h2>Patty V. {typeEffect}</h2>
            <p>
              I'm super excited to have you here and that the universe helped us
              cross paths! I hope you take the opportunity to explore our home
              where you can get to know me.
            </p>
            <p>
              You can book appointments, pick up some{' '}
              <em>Magickal Creations</em> for your own{' '}
              <em>Magickal Practices</em>, or purchase some amazing artwork that
              will bring a smile to your face with every glance!
            </p>
          </div>
        </div>
        <div className='about__right'>
          <div className='about__portrait' data-aos='fade-up'>
            <img
              src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D'
              alt=''
              loading='lazy'
              width={300}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
