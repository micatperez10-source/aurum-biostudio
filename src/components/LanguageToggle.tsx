import React from 'react';
import { Globe } from 'lucide-react';
import { Language } from '../types';

interface LanguageToggleProps {
  currentLang: Language;
  onToggle: (lang: Language) => void;
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  currentLang,
  onToggle,
  className = '',
}) => {
  return (
    <div
      className={`inline-flex items-center bg-[#DDD6C9]/60 hover:bg-[#DDD6C9] hover:brightness-95 p-0.5 rounded-lg border border-[#E6E4DF] text-xs font-semibold transition-colors ${className}`}
      role="group"
      aria-label="Language selector / Selector de idioma"
    >
      <div className="flex items-center pl-2 pr-1 text-[#958965]">
        <Globe className="w-3.5 h-3.5" aria-hidden="true" />
      </div>

      <button
        type="button"
        onClick={() => onToggle('en')}
        aria-label="Switch to English"
        aria-pressed={currentLang === 'en'}
        className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
          currentLang === 'en'
            ? 'bg-[#255643] text-white shadow-xs font-bold'
            : 'text-[#958965] hover:text-[#807D75]'
        }`}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => onToggle('es')}
        aria-label="Cambiar a español"
        aria-pressed={currentLang === 'es'}
        className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
          currentLang === 'es'
            ? 'bg-[#255643] text-white shadow-xs font-bold'
            : 'text-[#958965] hover:text-[#807D75]'
        }`}
      >
        ES
      </button>
    </div>
  );
};