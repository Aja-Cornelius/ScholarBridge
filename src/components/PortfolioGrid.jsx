import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PortfolioCard from './PortfolioCard';
import Modal from './Modal';
import { PORTFOLIO } from '../constants/data';

const PortfolioGrid = ({ limit = null, showCTA = false }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  
  const displayItems = limit ? PORTFOLIO.slice(0, limit) : PORTFOLIO;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-4 font-bold text-navy">Research Portfolio</h2>
          <p className="text-slate-grey max-w-2xl mx-auto">
            A selection of our recently completed academic projects, research papers, and seminar materials across various disciplines.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayItems.map((item) => (
            <PortfolioCard 
              key={item.id} 
              {...item} 
              onViewAbstract={() => setSelectedItem(item)}
            />
          ))}
        </div>

        {showCTA && (
          <div className="mt-16 text-center">
            <Link 
              to="/portfolio" 
              className="px-8 py-4 border-2 border-navy text-navy rounded-full font-bold hover:bg-navy hover:text-white transition-all shadow-lg hover:shadow-xl inline-block"
            >
              View Full Research Gallery
            </Link>
          </div>
        )}

        {/* Abstract Modal */}
        <Modal 
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          title={selectedItem?.title}
          content={selectedItem?.abstract}
          category={selectedItem?.category}
          date={selectedItem?.date}
        />
      </div>
    </section>
  );
};

export default PortfolioGrid;
