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
      className="relative overflow-hidden bg-[#DDD6C9] pt-12 pb-20 sm:pt-16 sm:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#255643]/30 blur-3xl" />
        <div className="absolute -left-32 top-1/2 h-80 w-80 rounded-full bg-[#BFA690]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E6E4DF] bg-[#DDD6C9] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#827D75] shadow-xs">
          <Sparkles
            className="h-3.5 w-3.5 text-[#BFA690]"
            aria-hidden="true"
          />
          <span>{t.hero.eyebrow}</span>
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-serif font-medium leading-[1.1] tracking-tight text-[#3B5745] sm:text-5xl md:text-6xl lg:text-7xl">
          {t.hero.title}{' '}
          <span className="mt-1 block font-normal italic text-[#958965]">
            {t.hero.titleHighlight}
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-[#827D75] sm:text-lg md:text-xl">
          {t.hero.subtitle}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10">
          <button
            id="hero-cta-btn"
            type="button"
            onClick={scrollToContact}
            className="inline-flex transform cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-[#255643] px-8 py-4 text-base font-semibold text-[#E6E4DF] shadow-md transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg"
          >
            <span>{t.hero.ctaButton}</span>
            <ArrowRight
              className="h-5 w-5 text-[#958965]"
              aria-hidden="true"
            />
          </button>

          <p className="flex items-center justify-center gap-1.5 text-xs font-medium text-[#827D75] sm:text-sm">
            <Clock
              className="inline-block h-4 w-4 text-[#BFA690]"
              aria-hidden="true"
            />
            <span>{t.hero.ctaNote}</span>
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-[#E6E4DF] bg-[#DDD6C9] p-4 text-left shadow-sm sm:mt-16 sm:p-6">
          <div className="flex items-center justify-between border-b border-[#E6E4DF] pb-4 text-xs text-[#827D75]">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#255643]" />
              <span className="font-sans font-semibold text-[#827D75]">
                {previewCopy.header}
              </span>
            </div>

            <span className="hidden font-sans text-xs text-[#827D75] sm:inline">
              BioIT Clarity • Data Analysis
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 pt-4 text-xs md:grid-cols-3">
            <div className="space-y-1.5 rounded-xl border border-[#E6E4DF]/60 bg-[#DDD6C9] p-3.5">
              <div className="flex items-center gap-1.5 font-sans font-semibold text-[#827D75]">
                <BarChart3
                  className="h-4 w-4 text-[#255643]"
                  aria-hidden="true"
                />
                <span>{previewCopy.figuresTitle}</span>
              </div>

              <p className="font-sans text-xs leading-relaxed text-[#827D75]">
                {previewCopy.figuresText}
              </p>
            </div>

            <div className="space-y-1.5 rounded-xl border border-[#E6E4DF]/60 bg-[#DDD6C9] p-3.5">
              <div className="flex items-center gap-1.5 font-sans font-semibold text-[#827D75]">
                <CheckCircle
                  className="h-4 w-4 text-[#255643]"
                  aria-hidden="true"
                />
                <span>{previewCopy.summaryTitle}</span>
              </div>

              <p className="font-sans text-xs leading-relaxed text-[#827D75]">
                {previewCopy.summaryText}
              </p>
            </div>

            <div className="space-y-1.5 rounded-xl border border-[#E6E4DF]/60 bg-[#DDD6C9] p-3.5">
              <div className="flex items-center gap-1.5 font-sans font-semibold text-[#827D75]">
                <Shield
                  className="h-4 w-4 text-[#255643]"
                  aria-hidden="true"
                />
                <span>{previewCopy.codeTitle}</span>
              </div>

              <p className="font-sans text-xs leading-relaxed text-[#827D75]">
                {previewCopy.codeText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};