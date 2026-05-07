import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <section className="bg-navy py-20 text-white text-center">
        <div className="container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight uppercase"
          >
            Empowering <span className="text-slate-light">Academic Success</span>
          </motion.h1>
          <p className="text-slate opacity-80 max-w-2xl mx-auto text-lg leading-relaxed">
            ScholarBridge is dedicated to providing high-quality research assistance and academic consultation to students and professionals worldwide.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="mb-4 flex items-center gap-4">
                <div className="w-12 h-1 bg-navy"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-grey">Our Mission & Vision</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-navy leading-tight">Elevating Global Academic Standards</h2>
              <div className="space-y-6 text-slate-grey leading-relaxed">
                <p>
                  At ScholarBridge, we believe that academic excellence should be accessible to every student. Our mission is to bridge the gap between complex research requirements and student success by providing professional guidance and high-quality documentation support.
                </p>
                <p>
                  We aim to be the most trusted academic support platform, known for our integrity, precision, and commitment to student growth. We don't just provide answers; we provide the foundation for deeper academic exploration and lifelong learning.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-slate-light/10 p-8 rounded-2xl border border-slate-light/20 shadow-sm">
                <h4 className="text-2xl font-bold text-navy mb-2">Integrity</h4>
                <p className="text-[10px] text-slate-grey uppercase tracking-widest font-bold opacity-60">Core Value</p>
              </div>
              <div className="bg-navy text-white p-8 rounded-2xl shadow-xl">
                <h4 className="text-2xl font-bold mb-2 text-white">Excellence</h4>
                <p className="text-[10px] text-slate-light uppercase tracking-widest font-bold opacity-60">Our Standard</p>
              </div>
              <div className="bg-slate-light/20 p-8 rounded-2xl border border-slate-light/10">
                <h4 className="text-2xl font-bold text-navy mb-2">Innovation</h4>
                <p className="text-[10px] text-slate-grey uppercase tracking-widest font-bold opacity-60">Our Method</p>
              </div>
              <div className="bg-slate-light/10 p-8 rounded-2xl border border-slate-light/20">
                <h4 className="text-2xl font-bold text-navy mb-2">Empathy</h4>
                <p className="text-[10px] text-slate-grey uppercase tracking-widest font-bold opacity-60">Our Culture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent)] pointer-events-none"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight">Decades of Cumulative Expertise</h2>
          <div className="max-w-4xl mx-auto text-slate-light opacity-90 leading-relaxed text-xl font-medium italic">
            "Our team consists of seasoned academic consultants, researchers, and writers with deep expertise across various fields, including STEM, Humanities, Social Sciences, and Business. We bring rigorous methodology and professional formatting to every project we touch."
          </div>
          <div className="mt-16 flex justify-center gap-12 opacity-60">
            <div className="h-8 w-px bg-white/30 hidden md:block"></div>
            <span className="text-xs uppercase tracking-[0.3em] font-bold">Rigorous Methodology</span>
            <div className="h-8 w-px bg-white/30 hidden md:block"></div>
            <span className="text-xs uppercase tracking-[0.3em] font-bold">Peer Reviewed Standards</span>
            <div className="h-8 w-px bg-white/30 hidden md:block"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
