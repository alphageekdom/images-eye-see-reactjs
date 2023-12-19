import contactIMG from '../../assets/hero/contact.jpg';
import './contact.css';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
  return (
    <section id='contact'>
      <img
        src={contactIMG}
        alt='Contact Hero'
        width={1000}
        height={500}
        style={{ objectFit: 'cover' }}
      />
      <div className='container contact__container'>
        <div className='contact__hero-title'>
          <h1>Contact Us</h1>
        </div>
        <div className='contact__left-content'>
          <ContactInfo />
        </div>
        <div className='contact__right-content'>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
