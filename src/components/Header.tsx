import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex items-center">
            <img 
              src={isScrolled ? "/LOGO EMPRESA.png" : "/aq.png"}
              alt="Aquila" 
              className={`h-8 w-auto lg:h-10 ${
                isScrolled ? '' : 'filter brightness-100'
              }`}
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#signai" className={`font-medium transition-colors hover:text-[#030067] ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              SignAI
            </a>
            <a href="#about" className={`font-medium transition-colors hover:text-[#030067] ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              About
            </a>
            <a href="https://front.signai.fdiaznem.com.ar" target="_blank" rel="noopener noreferrer" className="bg-[#030067] text-white px-6 py-2 rounded-full font-medium hover:bg-[#020045] transition-colors inline-block text-center">
              Try SignAI
            </a>
          </nav>

          <button 
            className={`md:hidden p-2 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-6 space-y-4">
            <a href="#signai" className="block text-gray-900 font-medium">SignAI</a>
            <a href="#about" className="block text-gray-900 font-medium">About</a>
            <a href="https://front.signai.fdiaznem.com.ar" target="_blank" rel="noopener noreferrer" className="block w-full bg-[#030067] text-white px-6 py-2 rounded-full font-medium text-center">
              Try SignAI
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
