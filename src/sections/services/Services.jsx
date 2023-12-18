import Service from './Service';

const Services = ({ services }) => {
  return (
    <div className='bookings__services' data-aos='fade-up'>
      {services.map((service) => (
        <Service key={service.id} service={service} />
      ))}
    </div>
  );
};

export default Services;
