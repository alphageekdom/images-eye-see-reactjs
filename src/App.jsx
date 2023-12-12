import React from 'react';
import About from './sections/about/About';
import Contact from './sections/contact/Contact';
import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import Footer from './sections/footer/Footer';
import Services from './sections/services/Services';

const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
