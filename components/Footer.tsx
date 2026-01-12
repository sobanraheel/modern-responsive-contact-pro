
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-400 text-sm">
          © 2024 NexusContact Inc. All rights reserved.
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Privacy Policy</a>
          <a href="#" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Terms of Service</a>
          <a href="#" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
};
