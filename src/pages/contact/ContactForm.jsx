import Card from '../../components/card/Card';
import './contact.css';

const ContactForm = () => {
  return (
    <section id='contactForm'>
      <div className='contact__form-container'>
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
    </section>
  );
};

export default ContactForm;
