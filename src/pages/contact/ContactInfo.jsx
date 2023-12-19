import Card from '../../components/card/Card';
import { CiMail } from 'react-icons/ci';
import './contact.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const ContactInfo = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section id='contactInfo'>
      <div className='contact__info-container'>
        <div data-aos='flip-left'>
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
      </div>
    </section>
  );
};

export default ContactInfo;
