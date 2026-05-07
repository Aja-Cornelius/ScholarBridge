import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

import { CONTACT_INFO } from '../constants/data';

const ContactForm = () => {
  const [searchParams] = useSearchParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    service: searchParams.get('service') || '',
    message: '',
  });

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      setFormData(prev => ({ ...prev, service: serviceParam }));
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const text = `Hello ScholarBridge! %0A%0AMy name is *${formData.name}* from the *${formData.department}* department.%0A%0AI am interested in your *${formData.service}* service.%0A%0A*Inquiry Detail:* %0A${formData.message}%0A%0AMy Email: ${formData.email}`;
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}?text=${text}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card p-12 text-center space-y-6 shadow-2xl border-2 border-navy/10"
      >
        <div className="w-20 h-20 bg-navy text-white rounded-full flex items-center justify-center mx-auto shadow-lg mb-4">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-navy">Redirecting to Chat...</h3>
        <p className="text-slate-grey text-lg">
          Thank you, <span className="font-bold text-navy">{formData.name}</span>! We've opened a direct inquiry channel for you. <br/>
          If it didn't open automatically, please check your browser's popup blocker or click the button below.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="btn-outline mt-8"
        >
          Send Another Inquiry
        </button>
      </motion.div>
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="card space-y-6 max-w-2xl mx-auto shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-navy mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-light focus:ring-2 focus:ring-navy focus:border-transparent transition-all outline-none"
            placeholder="John Doe"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-light focus:ring-2 focus:ring-navy focus:border-transparent transition-all outline-none"
            placeholder="john@example.com"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-navy mb-2">Department</label>
          <input
            type="text"
            name="department"
            className="w-full px-4 py-3 rounded-lg border border-slate-light focus:ring-2 focus:ring-navy focus:border-transparent transition-all outline-none"
            placeholder="Computer Science"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy mb-2">Service Needed</label>
          <select
            name="service"
            value={formData.service}
            className="w-full px-4 py-3 rounded-lg border border-slate-light focus:ring-2 focus:ring-navy focus:border-transparent transition-all outline-none bg-white"
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            <option value="project-writing">Project Writing</option>
            <option value="seminar-writing">Seminar Writing</option>
            <option value="proposal-development">Proposal Development</option>
            <option value="report-writing">Report Writing</option>
            <option value="academic-consultation">Consultation</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-navy mb-2">Message</label>
        <textarea
          name="message"
          rows="4"
          required
          className="w-full px-4 py-3 rounded-lg border border-slate-light focus:ring-2 focus:ring-navy focus:border-transparent transition-all outline-none"
          placeholder="Tell us about your research topic or project requirements..."
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2 py-4 text-lg">
        Send Inquiry <Send size={20} />
      </button>
      <p className="text-center text-xs text-slate-grey">
        By submitting, you agree to our terms of service regarding academic integrity and research support.
      </p>
    </form>
  );
};

export default ContactForm;
