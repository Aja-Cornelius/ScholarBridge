import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

const Modal = ({ isOpen, onClose, title, content, category, date }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden relative"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-light/10 text-navy hover:bg-slate-light/20 transition-colors z-10"
          >
            <X size={20} />
          </button>

          <div className="p-8 md:p-12">
            <div className="mb-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-grey bg-slate-light/20 px-3 py-1 rounded-full">
                {category}
              </span>
            </div>
            
            <h2 className="text-3xl font-bold text-navy mb-4 leading-tight">{title}</h2>
            
            <div className="flex items-center gap-2 mb-8 text-xs text-slate-grey font-medium">
              <span>Published: {date}</span>
              <span className="w-1 h-1 bg-slate-light rounded-full"></span>
              <span>Research Abstract</span>
            </div>

            <div className="prose prose-slate max-w-none">
              <p className="text-slate-grey leading-relaxed text-lg italic">
                "{content}"
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-light/20 flex flex-col md:flex-row gap-4 items-center justify-between">
              <p className="text-xs text-slate-grey opacity-60">
                Interested in this topic or a similar one?
              </p>
              <button 
                onClick={() => {
                  onClose();
                  openWhatsApp(`Hello ScholarBridge! I am interested in learning more about your work on: *${title}*`);
                }}
                className="bg-navy text-white px-8 py-3 rounded-lg hover:bg-navy-light transition-all font-bold"
              >
                Inquire
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Modal;
