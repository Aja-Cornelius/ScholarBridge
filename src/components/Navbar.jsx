import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white shadow-sm border-b border-slate-light border-opacity-20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-navy font-bold text-2xl tracking-tighter group">
          <img 
            src={logo} 
            alt="ScholarBridge Logo" 
            className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
          />
          <span className="hidden sm:inline">Scholar<span className="text-slate-grey font-medium">Bridge</span></span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="text-slate-grey hover:text-navy transition-colors duration-200 font-medium">
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => openWhatsApp()}
            className="bg-navy text-white px-6 py-2 rounded-lg hover:bg-navy-light transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 font-bold"
          >
            Inquire Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-navy" aria-label="Toggle Menu" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-light border-opacity-20 py-6 px-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block text-lg font-medium text-slate-grey hover:text-navy"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              openWhatsApp();
            }}
            className="w-full bg-navy text-white text-center py-3 rounded-lg font-bold"
          >
            Inquire Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
