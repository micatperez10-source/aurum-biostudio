import React from 'react';
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  Sparkles,
  Clock,
  Shield,
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const scrollToContact = () => {
    const el = document.getElementById('contact');

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const previewCopy =
    lang === 'en'
      ? {
          header: 'What you get: Clear & reproducible deliverables',
          figuresTitle: 'Figures & Plots',
          figuresText:
            'High-resolution figures ready for publication or slide decks.',
          summaryTitle: 'Plain Language Summary',
          summaryText:
            'Every number and p-value explained in practical terms.',
          codeTitle: 'Reproducible Code',
          codeText: 'Clean scripts so your lab can rerun the work anytime.',
        }
      : {
          header: 'Lo que recibís: Entregables claros y reproducibles',
          figuresTitle: 'Gráficos y figuras',
          figuresText:
            'Figuras en alta resolución listas para publicaciones o presentaciones.',
          summaryTitle: 'Resumen en lenguaje claro',
          summaryText:
            'Cada número y p-valor explicado en términos prácticos.',
          codeTitle: 'Código reproducible',
          codeText:
            'Scripts limpios para que tu equipo pueda repetir el trabajo.',
        };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#F4F2EE] pt-12 pb-20 sm:pt-16 sm:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#D4E8E1] blur-3xl" />
        <div className="absolute -left-32 top-1/2 h-80 w-80 rounded-full bg-[#BFA690]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E6E4DF] bg-[#FFFFFF] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#2F3E3A] shadow-xs">
          <Sparkles
            className="h-3.5 w-3.5 text-[#BFA690]"
            aria-hidden="true"
          />
          <span>{t.hero.eyebrow}</span>
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-serif font-bold leading-[1.1] tracking-tight text-[#1F1F1F] sm:text-5xl md:text-6xl lg:text-7xl">
          {t.hero.title}{' '}
          <span className="mt-1 block font-normal italic text-[#2F3E3A]">
            {t.hero.titleHighlight}
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-[#5A5A5A] sm:text-lg md:text-xl">
          {t.hero.subtitle}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10">
          <button
            id="hero-cta-btn"
            type="button"
            onClick={scrollToContact}
            className="inline-flex transform cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-[#2F3E3A] px-8 py-4 text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#1A1F1D] hover:shadow-lg"
          >
            <span>{t.hero.ctaButton}</span>
            <ArrowRight
              className="h-5 w-5 text-[#D4E8E1]"
              aria-hidden="true"
            />
          </button>

          <p className="flex items-center justify-center gap-1.5 text-xs font-medium text-[#5A5A5A] sm:text-sm">
            <Clock
              className="inline-block h-4 w-4 text-[#BFA690]"
              aria-hidden="true"
            />
            <span>{t.hero.ctaNote}</span>
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-[#E6E4DF] bg-[#FFFFFF] p-4 text-left shadow-sm sm:mt-16 sm:p-6">
          <div className="flex items-center justify-between border-b border-[#E6E4DF] pb-4 text-xs text-[#5A5A5A]">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#2F3E3A]" />
              <span className="font-semibold text-[#1F1F1F]">
                {previewCopy.header}
              </span>
            </div>

            <span className="hidden font-mono text-[11px] text-[#5A5A5A] sm:inline">
              BioIT Clarity • Data Analysis
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 pt-4 text-xs md:grid-cols-3">
            <div className="space-y-1.5 rounded-xl border border-[#E6E4DF]/60 bg-[#F4F2EE] p-3.5">
              <div className="flex items-center gap-1.5 font-semibold text-[#1F1F1F]">
                <BarChart3
                  className="h-4 w-4 text-[#2F3E3A]"
                  aria-hidden="true"
                />
                <span>{previewCopy.figuresTitle}</span>
              </div>

              <p className="text-[11px] leading-relaxed text-[#5A5A5A]">
                {previewCopy.figuresText}
              </p>
            </div>

            <div className="space-y-1.5 rounded-xl border border-[#E6E4DF]/60 bg-[#F4F2EE] p-3.5">
              <div className="flex items-center gap-1.5 font-semibold text-[#1F1F1F]">
                <CheckCircle
                  className="h-4 w-4 text-[#2F3E3A]"
                  aria-hidden="true"
                />
                <span>{previewCopy.summaryTitle}</span>
              </div>

              <p className="text-[11px] leading-relaxed text-[#5A5A5A]">
                {previewCopy.summaryText}
              </p>
            </div>

            <div className="space-y-1.5 rounded-xl border border-[#E6E4DF]/60 bg-[#F4F2EE] p-3.5">
              <div className="flex items-center gap-1.5 font-semibold text-[#1F1F1F]">
                <Shield
                  className="h-4 w-4 text-[#2F3E3A]"
                  aria-hidden="true"
                />
                <span>{previewCopy.codeTitle}</span>
              </div>

              <p className="text-[11px] leading-relaxed text-[#5A5A5A]">
                {previewCopy.codeText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};