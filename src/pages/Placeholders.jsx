import React from 'react';
import { SERVICES } from '../constants/data';

const PagePlaceholder = ({ title, subtitle }) => (
  <div className="py-20 animate-fade-in">
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy tracking-tight">{title}</h1>
      <p className="text-slate-grey text-lg max-w-2xl mx-auto mb-12">{subtitle}</p>
      <div className="h-64 bg-slate-light/10 border-2 border-dashed border-slate-light rounded-2xl flex items-center justify-center text-slate-grey italic">
        Section content placeholder - To be implemented in full during Execution phase.
      </div>
    </div>
  </div>
);

export const Services = () => (
  <PagePlaceholder 
    title="Our Academic Services" 
    subtitle="Expert support across various academic disciplines and research levels."
  />
);

export const Portfolio = () => (
  <PagePlaceholder 
    title="Portfolio Showcase" 
    subtitle="Exploring the impact and quality of our previous academic collaborations."
  />
);

export const About = () => (
  <PagePlaceholder 
    title="About ScholarBridge" 
    subtitle="Our mission is to empower students through high-quality research assistance and consultation."
  />
);

export const Contact = () => (
  <PagePlaceholder 
    title="Contact Us" 
    subtitle="Let's discuss your project. We are here to help you achieve academic excellence."
  />
);
