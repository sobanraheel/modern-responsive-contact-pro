
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Twitter, Github, Linkedin } from 'lucide-react';

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; content: string; delay: number }> = ({ icon, title, content, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 transition-all hover:shadow-md cursor-pointer"
  >
    <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-slate-900">{title}</h3>
      <p className="text-slate-500 text-sm mt-1">{content}</p>
    </div>
  </motion.div>
);

export const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-6">
      <InfoCard 
        icon={<Mail className="w-6 h-6" />}
        title="Email"
        content="info@example.com"
        delay={0.5}
      />
      <InfoCard 
        icon={<Phone className="w-6 h-6" />}
        title="Phone"
        content="+1 (555) 000-0000"
        delay={0.6}
      />
      <InfoCard 
        icon={<MapPin className="w-6 h-6" />}
        title="Office"
        content="123 Innovation Drive, SF, CA"
        delay={0.7}
      />
      
      <div className="bg-slate-900 p-8 rounded-2xl text-white overflow-hidden relative shadow-lg">
        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <p className="text-slate-400 text-sm mb-6">Stay updated with our latest news and announcements on social media.</p>
          <div className="flex gap-4">
            <motion.a whileHover={{ y: -3 }} href="#" className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors">
              <Twitter className="w-5 h-5" />
            </motion.a>
            <motion.a whileHover={{ y: -3 }} href="#" className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors">
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a whileHover={{ y: -3 }} href="#" className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors">
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};
