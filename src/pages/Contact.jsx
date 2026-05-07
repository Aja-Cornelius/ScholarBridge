import React from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants/data';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <section className="bg-navy py-16 text-white text-center">
        <div className="container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight"
          >
            Get In Touch
          </motion.h1>
          <p className="text-slate opacity-80 max-w-2xl mx-auto">
            Have a project in mind? We're here to provide the academic support you need to succeed.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-light/10 p-3 rounded-lg text-navy">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">Email Us</h4>
                    <p className="text-slate-grey transition-colors hover:text-navy cursor-pointer">{CONTACT_INFO.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-slate-light/10 p-3 rounded-lg text-navy">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">WhatsApp</h4>
                    <p className="text-slate-grey transition-colors hover:text-navy cursor-pointer">{CONTACT_INFO.whatsapp}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-slate-light/10 p-3 rounded-lg text-navy">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">Office Location</h4>
                    <p className="text-slate-grey">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-slate-light/10 p-3 rounded-lg text-navy">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">Business Hours</h4>
                    <p className="text-slate-grey">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-navy rounded-2xl text-white shadow-xl">
              <h4 className="text-xl font-bold mb-4 italic text-slate-light">Academic Integrity First</h4>
              <p className="text-sm opacity-80 leading-relaxed">
                We strictly adhere to academic integrity guidelines. Our services are intended as research support and developmental guidance to help students learn and produce their own original work.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-slate-light/5 p-1 rounded-3xl">
              <div className="bg-white p-10 rounded-[1.4rem] shadow-2xl border border-slate-light/10">
                <h3 className="text-2xl font-bold text-navy mb-8">Send an Inquiry</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
