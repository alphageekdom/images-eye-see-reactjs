import Card from '../../components/card/Card';
import { MdAttachMoney } from 'react-icons/md';
import { CiClock2 } from 'react-icons/ci';

const Service = ({ service }) => {
  return (
    <Card>
      <img
        src={service.img}
        className='booking__service-img'
        alt='Reading Service'
        title='Reading Service'
        loading='eager'
      />

      <div className='booking__service-body'>
        <div className='booking__service-content'>
          <h1 className='booking__service-title'>{service.title}</h1>
          <div className='booking__service-specs'>
            <p>
              <MdAttachMoney /> {service.price}
            </p>
            <p>
              <CiClock2 /> {service.time}
            </p>
          </div>
          <div className='booking__service-platform'>
            <p>Platform: {service.platform}</p>
          </div>
          <div className='booking__service-desc'>
            <p>{service.desc}</p>
          </div>
          <div className='booking__service-schedule'>
            <a
              href='https://www.example.com'
              target='_blank'
              rel='noreferrer'
              className='btn white'
            >
              Book
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Service;
