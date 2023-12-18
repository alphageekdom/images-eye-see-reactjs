import React from 'react';
import Contact from './pages/contact/Contact';
import Navbar from './sections/navbar/Navbar';
import Footer from './sections/footer/Footer';
import Toolbar from './sections/toolbar/Toolbar';
import Home from './pages/home/Home';
// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import TOS from './pages/tos/TOS';
import Booking from './pages/bookings/Bookings';
import ScrollButton from './components/scroll/ScrollButton';

const App = () => {
  return (
    <>
      <main>
        <Router>
          <Toolbar />
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/tos' element={<TOS />} />
            <Route path='/bookings' element={<Booking />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
          <ScrollButton />
          <Footer />
        </Router>
      </main>
    </>
  );
};

export default App;
