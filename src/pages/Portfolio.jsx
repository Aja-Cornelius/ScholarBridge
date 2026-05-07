import React, { useState } from 'react';
import PortfolioCard from '../components/PortfolioCard';
import Modal from '../components/Modal';
import { PORTFOLIO } from '../constants/data';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);
  
  const categories = ['All', ...new Set(PORTFOLIO.map(item => item.category))];
  
  const filteredPortfolio = filter === 'All' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === filter);

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
            Research Portfolio
          </motion.h1>
          <p className="text-slate opacity-80 max-w-2xl mx-auto">
            A comprehensive gallery of our successfully completed academic projects and research documentation across multiple disciplines.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                filter === cat 
                ? 'bg-navy text-white shadow-lg' 
                : 'bg-slate-light/10 text-slate-grey hover:bg-slate-light/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          <AnimatePresence mode="popLayout">
            {filteredPortfolio.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <PortfolioCard 
                  {...item} 
                  onViewAbstract={() => setSelectedItem(item)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredPortfolio.length === 0 && (
          <div className="text-center py-20 text-slate-grey italic">
            No projects found in this category.
          </div>
        )}
      </div>

      {/* Abstract Modal */}
      <Modal 
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.title}
        content={selectedItem?.abstract}
        category={selectedItem?.category}
        date={selectedItem?.date}
      />

      {/* Stats Section */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl md:text-6xl font-black mb-2 opacity-90 tracking-tighter">500+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">Completed Projects</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-6xl font-black mb-2 opacity-90 tracking-tighter">98%</div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">Success Rate</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-6xl font-black mb-2 opacity-90 tracking-tighter">50+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">Disciplines</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-6xl font-black mb-2 opacity-90 tracking-tighter">10+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
