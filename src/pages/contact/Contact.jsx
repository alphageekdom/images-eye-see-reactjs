import Hero from '../../components/hero/Hero';
import './contact.css';

const Contact = () => {
  return (
    <section id='contact'>
      <Hero url='https://images.unsplash.com/photo-1563906267088-b029e7101114?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <div className='container contact__container'></div>
    </section>
  );
};

export default Contact;
