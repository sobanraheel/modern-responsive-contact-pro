
import React from 'react';
import { ContactForm } from './components/ContactForm';
import { ContactInfo } from './components/ContactInfo';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white pt-32 pb-24 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Let's build something <span className="text-blue-400">extraordinary</span>.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto"
            >
              Have a question or a project in mind? We'd love to hear from you. 
              Our team usually responds within 24 hours.
            </motion.p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Info Column */}
              <div className="lg:col-span-1 space-y-6">
                <ContactInfo />
              </div>

              {/* Form Column */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
