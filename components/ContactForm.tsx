
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Input, TextArea } from './Input';
import { ContactFormData, FormStatus } from '../types';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<FormStatus>('IDLE');
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const validate = () => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('SUBMITTING');

    // Simulate API Call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus('SUCCESS');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('IDLE'), 5000);
    } catch (err) {
      setStatus('ERROR');
      setTimeout(() => setStatus('IDLE'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-6 md:p-10 border border-slate-100"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Send us a message</h2>
        <p className="text-slate-500 mt-2">Fill out the form below and we'll get back to you shortly.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input 
            label="Full Name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            disabled={status === 'SUBMITTING'}
          />
          <Input 
            label="Email Address"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            disabled={status === 'SUBMITTING'}
          />
        </div>
        
        <Input 
          label="Subject"
          name="subject"
          placeholder="How can we help?"
          value={formData.subject}
          onChange={handleChange}
          error={errors.subject}
          disabled={status === 'SUBMITTING'}
        />

        <TextArea 
          label="Your Message"
          name="message"
          placeholder="Tell us about your project or inquiry..."
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          disabled={status === 'SUBMITTING'}
        />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={status === 'SUBMITTING'}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-all"
          >
            {status === 'SUBMITTING' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </motion.button>

          <AnimatePresence>
            {status === 'SUCCESS' && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="flex items-center gap-2 text-emerald-600 font-medium"
              >
                <CheckCircle className="w-5 h-5" />
                Message sent successfully!
              </motion.div>
            )}
            {status === 'ERROR' && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="flex items-center gap-2 text-red-600 font-medium"
              >
                <AlertCircle className="w-5 h-5" />
                Something went wrong.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </form>
    </motion.div>
  );
};
