import React, { useState } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50 animate-slideInDown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0 animate-fadeInLeft">
            <h1 className="text-2xl font-bold text-blue-800 font-heading">
              Aurevia <span className="text-green-600">MedOps</span>
            </h1>
            <p className="text-xs text-gray-600 -mt-1">Transforming Healthcare</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 animate-fadeInUp animate-delay-200">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-800 transition-all duration-300 hover:scale-105 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-800 transition-all duration-300 hover:scale-105 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('why-us')}
              className="text-gray-700 hover:text-blue-800 transition-all duration-300 hover:scale-105 font-medium"
            >
              Why Us
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-800 transition-all duration-300 hover:scale-105 font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 animate-fadeInRight animate-delay-300">
            <a href="tel:8459573193" className="flex items-center text-blue-800 hover:text-blue-600 transition-all duration-300 hover:scale-110">
              <Phone className="w-4 h-4 mr-1" />
              <span className="text-sm">8459573193</span>
            </a>
            <a href="mailto:sanjivanimahadik99@gmail.com" className="flex items-center text-green-600 hover:text-green-500 transition-all duration-300 hover:scale-110">
              <Mail className="w-4 h-4 mr-1" />
              <span className="text-sm">Email</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:scale-110 transition-transform duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fadeInUp">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-800 transition-all duration-300 text-left hover:translate-x-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-800 transition-all duration-300 text-left hover:translate-x-2"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('why-us')}
                className="text-gray-700 hover:text-blue-800 transition-all duration-300 text-left hover:translate-x-2"
              >
                Why Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-800 transition-all duration-300 text-left hover:translate-x-2"
              >
                Contact
              </button>
              <div className="flex flex-col space-y-2 pt-2 border-t">
                <a href="tel:8459573193" className="flex items-center text-blue-800">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>8459573193</span>
                </a>
                <a href="mailto:sanjivanimahadik99@gmail.com" className="flex items-center text-green-600">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>sanjivanimahadik99@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;