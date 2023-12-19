import Services from '../../sections/services/Services';
import { useState, useEffect } from 'react';
import bookingIMG from '../../assets/hero/bookings.jpg';
import data from './data';
import './booking.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Booking = () => {
  const [bookings] = useState(data);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id='bookings'>
      <img
        src={bookingIMG}
        alt='Contact Hero'
        width={1000}
        height={500}
        style={{ objectFit: 'cover' }}
      />
      <div className='booking__hero-title'>
        <h1>Services Available</h1>
      </div>
      <div className='container bookings__container' data-aos='fade-in'>
        <Services services={bookings} />
      </div>
    </section>
  );
};

export default Booking;
