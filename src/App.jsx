import React from 'react';
import HeroSection from './pages/HeroSection';
import BigText from './pages/BigText'
import Header from './components/Header';
import About from './pages/About';
import TheWorq from './pages/TheWorq';
import Projects from './pages/Projects.jsx';
import Call from './pages/Call';
import Experience from './pages/Experience';


const App = () => {
  return (
    <>
    <Header />
    <HeroSection />
    <BigText />
    <About />
    <Experience />
    <TheWorq />
    <Projects />
    <Call />
    </>
  );
}

export default App;