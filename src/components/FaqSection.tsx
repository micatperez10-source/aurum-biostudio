import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FaqSectionProps {
  lang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#DDD6C9] border-y border-[#E6E4DF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="font-serif inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#DDD6C9] border border-[#E6E4DF] text-[#255643] text-sm font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#255643]" />
            <span>FAQ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#3B5745] tracking-tight">
            {t.faq.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#958965] font-sans font-medium">
            {lang === 'en'
              ? 'Honest, straightforward answers about data requirements, formats, and scope.'
              : 'Respuestas directas y honestas sobre requisitos de datos, formatos y alcance.'}
          </p>
        </div>

        <div className="space-y-3">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                id={`faq-item-${idx}`}
                className="rounded-2xl border border-[#E6E4DF] bg-[#DDD6C9] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg sm:text-xl font-serif font-bold text-[#3B5745] leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#DDD6C9] border border-[#E6E4DF] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#255643] text-white border-[#255643]' : 'text-[#255643]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-base sm:text-lg text-[#827D75] font-sans font-medium leading-relaxed border-t border-[#E6E4DF]/60 animate-in fade-in duration-150">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
