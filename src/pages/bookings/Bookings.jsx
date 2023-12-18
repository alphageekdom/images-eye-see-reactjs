import Services from '../../sections/services/Services';
import Hero from '../../components/hero/Hero';
import { useState } from 'react';
import data from './data';
import './booking.css';

const Booking = () => {
  const [bookings] = useState(data);

  return (
    <section id='bookings'>
      <Hero
        url='https://images.unsplash.com/photo-1435527173128-983b87201f4d?q=80&w=3267&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='Services'
        title='Services'
      />
      <div className='booking__hero-title'>
        <h1>Services Available</h1>
      </div>
      <div className='container bookings__container'>
        <Services services={bookings} />
      </div>
    </section>
  );
};

export default Booking;
