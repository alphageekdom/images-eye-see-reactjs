import Card from '../../components/card/Card';
import './contact.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const ContactForm = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section id='contactForm'>
      <div className='contact__form-container'>
        <div data-aos='flip-left'>
          <Card className='contactCard'>
            <h2>Contact Form</h2>
            <div className='contactCardContainer'>
              <div className='contact__form'>
                <div className='formControlGroup'>
                  <label htmlFor='fullName' className='formLabel'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    id='fullName'
                    className='formControl'
                    placeholder='Full Name'
                  />
                </div>
                <div className='formControlGroup'>
                  <label htmlFor='email' className='formLabel'>
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    className='formControl'
                    placeholder='Email'
                  />
                </div>
                <div className='formControlGroup'>
                  <label htmlFor='message' className='formLabel'>
                    Message
                  </label>
                  <textarea
                    name='message'
                    id='message'
                    cols='50'
                    rows='10'
                    className='formControl'
                    placeholder='Message...'
                  ></textarea>
                </div>
                <div className='formControlGroup'>
                  <button className='formBtn'>Send</button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
