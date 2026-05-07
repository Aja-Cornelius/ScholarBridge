import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants/data';
import logo from '../assets/logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 text-white font-bold text-2xl tracking-tighter group">
              <img 
                src={logo} 
                alt="ScholarBridge Logo" 
                className="h-14 w-auto rounded-lg object-contain group-hover:scale-105 transition-transform" 
              />
              Scholar<span className="font-medium opacity-80">Bridge</span>
            </Link>
            <p className="text-slate opacity-80 text-sm">
              Professional academic support and research assistance connecting students with professional project writing and consultation services.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4 opacity-80 text-sm">
              <li><Link to="/" className="hover:text-slate-light transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-slate-light transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-slate-light transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-slate-light transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-slate-light transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-4 opacity-80 text-sm">
              <li>Seminar Writing</li>
              <li>Project Documentation</li>
              <li>Proposal Development</li>
              <li>Academic Consultation</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4 opacity-80 text-sm">
              <li className="flex items-center gap-3"><Mail size={18} className="text-slate-light" /> {CONTACT_INFO.email}</li>
              <li className="flex items-center gap-3"><Phone size={18} className="text-slate-light" /> {CONTACT_INFO.whatsapp}</li>
              <li className="flex items-center gap-3"><MapPin size={18} className="text-slate-light" /> {CONTACT_INFO.address}</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-sm opacity-60 font-medium">
          <p>&copy; {new Date().getFullYear()} ScholarBridge Academic Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
