import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SignAI from './components/SignAI';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <SignAI />
      <About />
      <Footer />
    </div>
  );
}

export default App;
