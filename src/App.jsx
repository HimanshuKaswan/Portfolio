import React from 'react';
import HeroSection from './pages/HeroSection';
import BigText from './pages/BigText'
import Header from './components/Header';
import About from './pages/About';
import TheFocus from './pages/TheFocus';
import Elegant from './pages/Elegant';
import Mordern from './pages/Mordern';
import Minimal from './pages/Minimal';
import TheWorq from './pages/TheWorq';
import Projects from './pages/Projects';
import Call from './pages/Call';

const App = () => {
  return (
    <>
    <Header />
    <HeroSection />
    <BigText />
    <About />
    <TheFocus />
    <Elegant />
    <Mordern />
    <Minimal />
    <TheWorq />
    <Projects />
    <Call />
    </>
  );
}

export default App;