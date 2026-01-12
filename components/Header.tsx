
import React from 'react';
import { Menu, X, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Send className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold tracking-tight">NexusContact</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
              <a href="#" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
              <a href="#" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-lg hover:shadow-blue-500/20">Get Started</a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-slate-800"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#" className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#" className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium">Get Started</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
