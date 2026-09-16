import React from 'react';
import {
  PhoneCall,
  SearchCode,
  Presentation,
  ShieldCheck,
  Users,
  ArrowRight,
  FolderOpen,
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface ProcessSectionProps {
  lang: Language;
  onOpenContact?: () => void;
  onOpenDocs: (initialDocId?: string) => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  lang,
  onOpenDocs,
}) => {
  const t = TRANSLATIONS[lang].process;
  const calendarUrl = TRANSLATIONS[lang].contact.calendarUrl;

  const viewDeliverablesLabel =
    lang === 'en'
      ? 'View sample deliverables'
      : 'Ver entregables de ejemplo';

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return (
          <PhoneCall
            className="h-6 w-6 text-[#2F3E3A]"
            aria-hidden="true"
          />
        );

      case 1:
        return (
          <SearchCode
            className="h-6 w-6 text-[#2F3E3A]"
            aria-hidden="true"
          />
        );

      case 2:
        return (
          <Presentation
            className="h-6 w-6 text-[#2F3E3A]"
            aria-hidden="true"
          />
        );

      case 3:
        return (
          <Users
            className="h-6 w-6 text-[#2F3E3A]"
            aria-hidden="true"
          />
        );

      default:
        return (
          <PhoneCall
            className="h-6 w-6 text-[#2F3E3A]"
            aria-hidden="true"
          />
        );
    }
  };

  return (
    <section
      id="how-i-work"
      aria-labelledby="how-i-work-title"
      className="border-t border-[#E6E4DF] bg-[#FFFFFF] py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex whitespace-nowrap rounded-full border border-[#E6E4DF] bg-[#D4E8E1] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#2F3E3A]">
            {t.tag}
          </span>

          <h2
            id="how-i-work-title"
            className="mt-4 font-serif text-3xl font-bold tracking-tight text-[#1F1F1F] sm:text-4xl"
          >
            {t.title}
          </h2>

          <p className="mt-4 text-base leading-relaxed text-[#5A5A5A] sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 xl:grid-cols-4">
          {t.steps.map((step, idx) => (
            <article
              key={step.number}
              className="relative flex flex-col justify-between rounded-2xl border border-[#E6E4DF] bg-[#F4F2EE] p-7 shadow-sm transition-colors hover:border-[#BFA690]"
            >
              <div>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#E6E4DF] bg-[#FFFFFF] shadow-sm">
                    {getStepIcon(idx)}
                  </div>

                  <span className="whitespace-nowrap rounded-md bg-[#D4E8E1] px-2.5 py-1 text-xs font-bold text-[#2F3E3A]">
                    {step.time}
                  </span>
                </div>

                <div className="mb-2 flex items-center gap-2">
                  <span className="whitespace-nowrap text-xs font-extrabold uppercase tracking-wider text-[#2F3E3A]">
                    {t.stepPrefix} {step.number}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#1F1F1F]">
                  {step.title}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-[#5A5A5A] sm:text-sm">
                  {step.description}
                </p>
              </div>

              {idx === 0 && (
                <div className="mt-6 flex items-start gap-1.5 border-t border-[#E6E4DF] pt-3 text-xs font-semibold text-[#2F3E3A]">
                  <ShieldCheck
                    className="mt-0.5 h-4 w-4 shrink-0"
                    aria-hidden="true"
                  />

                  <span>{t.ndaNote}</span>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#2F3E3A] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#1A1F1D] sm:w-auto"
          >
            <span>{t.ctaButton}</span>

            <ArrowRight
              className="h-4 w-4 shrink-0 text-[#D4E8E1]"
              aria-hidden="true"
            />
          </a>

          <button
            type="button"
            onClick={() => onOpenDocs()}
            className="inline-flex w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-[#E6E4DF] bg-[#F4F2EE] px-7 py-3.5 text-sm font-semibold text-[#2F3E3A] transition-colors hover:border-[#BFA690] hover:bg-[#D4E8E1] sm:w-auto"
          >
            <FolderOpen
              className="h-4 w-4 shrink-0"
              aria-hidden="true"
            />

            <span>{viewDeliverablesLabel}</span>
          </button>
        </div>
      </div>
    </section>
  );
};