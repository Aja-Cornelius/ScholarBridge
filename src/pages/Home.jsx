import React from 'react';
import Hero from '../components/Hero';
import PortfolioGrid from '../components/PortfolioGrid';
import ContactForm from '../components/ContactForm';
import { SERVICES } from '../constants/data';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* Services Overview */}
      <section className="py-20 bg-slate-light/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-navy">Professional Academic Services</h2>
            <p className="text-slate-grey max-w-2xl mx-auto">
              We provide professional academic support tailored to your research needs, from project documentation to expert consultation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <motion.div 
                key={service.id}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-slate-light/20 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl mb-4 text-navy font-bold">{service.title}</h3>
                <p className="text-slate-grey text-sm mb-6 leading-relaxed">{service.description}</p>
                <button className="text-navy font-bold text-sm hover:underline transition-colors">Learn More</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PortfolioGrid limit={6} showCTA={true} />

      {/* Lead Generation Section */}
      <section id="contact" className="py-20 bg-navy text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-5xl mb-6 text-white tracking-tight">Ready to Elevate Your Research?</h2>
            <p className="text-slate-light mb-12 max-w-2xl mx-auto opacity-90 text-lg">
              Submit your project details below and get a free initial consultation on your research methodology or project scope.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
