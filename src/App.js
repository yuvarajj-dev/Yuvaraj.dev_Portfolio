import { useEffect } from 'react';
import About from './About/About';
import './App.css';
import Navbar from './Header/Navbar';
import Home from './Home_file/Home';

import Project from './Project/Project';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import ThreeD from './About/3D spline/ThreeD';

function App() {


  return (
    <>
      <Navbar />
      <Home />
      <About />
      <ThreeD />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
