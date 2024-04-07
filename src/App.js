import { useEffect } from 'react';
import About from './About/About';
import './App.css';
import Navbar from './Header/Navbar';
import Home from './Home_file/Home';

import Project from './Project/Project';

function App() {


  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Project />
    </>
  );
}

export default App;
