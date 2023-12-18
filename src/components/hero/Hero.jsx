import './hero.css';

const Hero = ({ url }) => {
  return (
    <img
      src={url}
      alt='Hero'
      className='hero__image'
      width={'100%'}
      height={500}
      loading='lazy'
    />
  );
};

export default Hero;
