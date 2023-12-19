import Card from '../../components/card/Card';
import { CiMail } from 'react-icons/ci';
import './contact.css';

const ContactInfo = () => {
  return (
    <section id='contactInfo'>
      <div className='contact__info-container'>
        <Card className='infoCard'>
          <div className='contact__info-content'>
            <div className='contact__info-title'>
              <h2>Email</h2>
              <CiMail className='icon' />
            </div>
            <a
              href='mailto:patty@imageseyesee.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              patty@imageseyesee.com
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactInfo;
