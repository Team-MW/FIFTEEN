import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Menu from './components/Menu';
import Story from './components/Story';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Marquee text="★ 100% VIANDE FRAÎCHE ★ SMASHÉ À LA PERFECTION ★ SAUCE SECRÈTE MAISON ★ PREMIUM FRIED CHICKEN ★" />
      <Menu />
      <Story />
      <Footer />
    </div>
  );
}

export default App;
