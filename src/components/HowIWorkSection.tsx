import React from 'react';
import { MessageSquare, Cpu, FileCheck, PhoneCall } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface HowIWorkSectionProps {
  lang: Language;
}

export const HowIWorkSection: React.FC<HowIWorkSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const stepIcons = [
    <MessageSquare className="w-5 h-5 text-[#2F3E3A]" key="msg" />,
    <Cpu className="w-5 h-5 text-[#2F3E3A]" key="cpu" />,
    <FileCheck className="w-5 h-5 text-[#2F3E3A]" key="report" />,
    <PhoneCall className="w-5 h-5 text-[#2F3E3A]" key="call" />
  ];

  return (
    <section id="how-i-work" className="py-16 sm:py-24 bg-[#FFFFFF] border-y border-[#E6E4DF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1F1F1F] tracking-tight">
            {t.howIWork.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A5A5A] font-sans leading-relaxed">
            {t.howIWork.intro}
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.howIWork.steps.map((st, idx) => (
            <div
              key={st.step}
              id={`how-i-work-step-${st.step}`}
              className="p-6 rounded-2xl bg-[#F4F2EE] border border-[#E6E4DF] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#FFFFFF] border border-[#E6E4DF] flex items-center justify-center shadow-xs">
                    {stepIcons[idx % stepIcons.length]}
                  </div>
                  <span className="font-serif text-2xl font-bold text-[#BFA690]">
                    0{st.step}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-[#1F1F1F] leading-snug">
                  {st.title}
                </h3>

                <p className="mt-3 text-sm text-[#5A5A5A] font-sans leading-relaxed">
                  {st.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E6E4DF]/80 text-[11px] font-mono text-[#5A5A5A]">
                {lang === 'en' ? `Step ${st.step} of 4` : `Paso ${st.step} de 4`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
