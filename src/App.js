import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection.js';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection />
      <WhyChooseUs />
      <HowItWorks />
      <Footer/>
    </div>
  );
}

export default App;
