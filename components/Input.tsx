
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-slate-700 mb-1.5">
        {label}
      </label>
      <input
        {...props}
        className={`
          w-full px-4 py-2.5 rounded-lg border bg-white transition-all outline-none
          ${error 
            ? 'border-red-500 focus:ring-4 focus:ring-red-500/10' 
            : 'border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'
          }
          placeholder:text-slate-400 text-slate-900
        `}
      />
      {error && (
        <p className="mt-1.5 text-xs text-red-500 font-medium">
          {error}
        </p>
      )}
    </div>
  );
};

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, error, ...props }) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-slate-700 mb-1.5">
        {label}
      </label>
      <textarea
        {...props}
        className={`
          w-full px-4 py-2.5 rounded-lg border bg-white transition-all outline-none min-h-[150px] resize-y
          ${error 
            ? 'border-red-500 focus:ring-4 focus:ring-red-500/10' 
            : 'border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'
          }
          placeholder:text-slate-400 text-slate-900
        `}
      />
      {error && (
        <p className="mt-1.5 text-xs text-red-500 font-medium">
          {error}
        </p>
      )}
    </div>
  );
};
