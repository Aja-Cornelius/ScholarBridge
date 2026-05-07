import React from 'react';
import { motion } from 'framer-motion';

const PortfolioCard = ({ title, category, abstract, date, onViewAbstract }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card flex flex-col h-full bg-white p-6 rounded-xl shadow-md border border-slate-light border-opacity-30 hover:shadow-xl transition-shadow duration-300 group"
    >
      <div className="mb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-grey bg-slate-light/20 px-3 py-1 rounded-full group-hover:bg-navy group-hover:text-white transition-colors">
          {category}
        </span>
      </div>
      <h3 className="text-xl mb-3 text-navy font-bold group-hover:text-navy-light transition-colors">{title}</h3>
      <p className="text-slate-grey text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
        {abstract}
      </p>
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-light/20">
        <span className="text-xs text-slate-grey font-medium">{date}</span>
        <button 
          onClick={onViewAbstract}
          className="text-navy text-sm font-bold hover:underline transition-colors hover:text-navy-light flex items-center gap-1"
        >
          Read Abstract 
        </button>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
