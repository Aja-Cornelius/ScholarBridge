import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-navy-dark py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-3/5 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl text-white mb-6 leading-tight">
              Elevating <span className="text-slate-light">Academic Excellence</span> Through Expert Research Support
            </h1>
            <p className="text-slate text-lg md:text-xl mb-10 max-w-2xl mx-auto lg:mx-0">
              Professional project writing, seminar support, and academic consultation services designed for students and researchers who demand precision and quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact" className="btn-primary flex items-center justify-center gap-2">
                Get Started <ArrowRight size={20} />
              </Link>
              <Link to="/portfolio" className="btn-outline border-white text-white hover:bg-white hover:text-navy flex items-center justify-center">
                View Portfolio
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-2/5 mt-12 lg:mt-0 relative"
          >
            <div className="relative z-10 p-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-4">
                  <div className="h-4 w-3/4 bg-white/20 rounded"></div>
                  <div className="h-4 w-1/2 bg-white/20 rounded"></div>
                  <div className="h-4 w-5/6 bg-white/20 rounded"></div>
                  <div className="pt-4 flex gap-4">
                    <img 
                      src={logo} 
                      alt="ScholarBridge Logo" 
                      className="h-12 w-12 rounded-lg object-contain bg-white p-1 shadow-inner" 
                    />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-1/4 bg-white/30 rounded"></div>
                      <div className="h-3 w-1/2 bg-white/10 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-navy-light rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-slate-grey rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
