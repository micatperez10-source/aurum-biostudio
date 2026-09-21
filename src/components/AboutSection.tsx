import React from 'react';
import { CheckCircle2, UserCheck, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const collaborationLabel =
    lang === 'en'
      ? 'Direct & Personal Collaboration'
      : 'Colaboración directa y personal';

  const principlesLabel =
    lang === 'en' ? 'Guiding principles:' : 'Principios de trabajo:';

  const confidentialityText =
    lang === 'en'
      ? 'All data is treated as confidential. A mutual NDA is available before sharing sensitive files.'
      : 'Todos los datos son tratados con confidencialidad. Podemos firmar un NDA mutuo antes de compartir archivos sensibles.';

  return (
    <section id="about" className="bg-[#DDD6C9] py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#E6E4DF] bg-[#DDD6C9] p-8 shadow-sm sm:p-12">
          <div className="font-serif mb-6 inline-flex items-center gap-2 rounded-full border border-[#255643] bg-[#255643]/40 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#255643]">
            <UserCheck
              className="h-3.5 w-3.5 text-[#255643]"
              aria-hidden="true"
            />
            <span>{collaborationLabel}</span>
          </div>

          <h2 className="font-serif text-3xl font-bold tracking-tight text-[#3B5745] sm:text-4xl">
            {t.about.title}
          </h2>

          <p className="mt-6 font-sans text-lg font-medium leading-relaxed text-[#958965] sm:text-xl">
            {t.about.text}
          </p>

          <div className="mt-8 border-t border-[#E6E4DF] pt-8">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#827D75]">
              {principlesLabel}
            </h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {t.about.bullets.map((bullet, idx) => (
                <div
                  key={`${idx}-${bullet}`}
                  className="flex items-start gap-3 rounded-xl border border-[#E6E4DF] bg-[#DDD6C9] p-4"
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#255643]"
                    aria-hidden="true"
                  />

                  <span className="text-sm font-medium leading-relaxed text-[#807D75] sm:text-base">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#E6E4DF]/60 pt-6 text-sm font-medium text-[#827D75]">
            <div className="flex items-start gap-2">
              <ShieldCheck
                className="mt-0.5 h-4 w-4 shrink-0 text-[#255643]"
                aria-hidden="true"
              />

              <span>{confidentialityText}</span>
            </div>

            <span className="font-serif text-[11px] text-[#255643]">
              Aurum BioStudio
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};