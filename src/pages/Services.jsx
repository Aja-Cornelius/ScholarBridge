import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVICES } from '../constants/data';
import { motion } from 'framer-motion';
import { BookOpen, FileText, PenTool, BarChart, MessageSquare } from 'lucide-react';

const icons = {
  BookOpen: <BookOpen className="text-white" size={32} />,
  FileText: <FileText className="text-white" size={32} />,
  PenTool: <PenTool className="text-white" size={32} />,
  BarChart: <BarChart className="text-white" size={32} />,
  MessageSquare: <MessageSquare className="text-white" size={32} />,
};

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-navy py-16 text-white text-center">
        <div className="container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Academic Services
          </motion.h1>
          <p className="text-slate opacity-80 max-w-2xl mx-auto">
            Professional support throughout your academic journey, from initial research proposals to final project documentation.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-light/10 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-navy opacity-[0.03] group-hover:opacity-[0.05] transition-opacity -mr-16 -mt-16 rounded-full"></div>
                <div className="bg-navy w-16 h-16 rounded-xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                  {icons[service.icon] || <BookOpen className="text-white" size={32} />}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-navy">{service.title}</h3>
                <p className="text-slate-grey leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-10 text-sm text-slate-grey opacity-80">
                  <li className="flex items-center gap-2">✓ Professional Quality</li>
                  <li className="flex items-center gap-2">✓ Timely Delivery</li>
                  <li className="flex items-center gap-2">✓ Plagiarism Free</li>
                </ul>
                <button 
                  onClick={() => navigate(`/contact?service=${service.id}`)}
                  className="w-full px-6 py-3 border-2 border-navy text-navy rounded-lg hover:bg-navy hover:text-white transition-all font-bold"
                >
                  Inquire Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-light/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Our Working Process</h2>
            <div className="w-20 h-1 bg-navy mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Discuss your project needs and academic goals.' },
              { step: '02', title: 'Data Gathering', desc: 'We research and compile relevant academic data.' },
              { step: '03', title: 'Drafting', desc: 'Creation of the initial documentation or support.' },
              { step: '04', title: 'Delivery', desc: 'Final review and delivery of high-quality work.' },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl font-black text-navy/10 mb-[-1.5rem] group-hover:text-navy/20 transition-colors">{item.step}</div>
                <h4 className="text-xl font-bold text-navy relative z-10 mb-4">{item.title}</h4>
                <p className="text-sm text-slate-grey">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
