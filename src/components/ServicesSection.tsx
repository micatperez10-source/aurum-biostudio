import React from 'react';
import {
  ArrowRight,
  Check,
  Sparkles,
  Info,
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface ServicesSectionProps {
  lang: Language;
  onOpenDataReview: () => void;
  onOpenAnalysisReport: () => void;
  onOpenOngoingSupport: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  lang,
  onOpenDataReview,
  onOpenAnalysisReport,
  onOpenOngoingSupport,
}) => {
  const t = TRANSLATIONS[lang];

  const includesLabel =
    lang === 'en' ? 'Includes:' : 'Incluye:';

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-[#DDD6C9] py-14 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-serif text-xs font-semibold uppercase tracking-[0.18em] text-[#255643] sm:text-sm">
            {t.services.tag}
          </p>

          <h2
            id="services-title"
            className="mt-3 font-serif text-2xl font-bold tracking-tight text-[#3B5745] sm:text-3xl md:text-4xl"
          >
            {t.services.title}
          </h2>

          <p className="mt-3 font-serif font-normal italic text-base leading-relaxed text-[#958965] sm:text-lg">
            {t.services.intro}
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 items-stretch gap-5 sm:mt-12 md:grid-cols-2 xl:grid-cols-3">
          {t.services.packages.map((pkg) => {
            const isFeatured = Boolean(pkg.badge);
            const isDataReview = pkg.id === 'data-review';
            const isAnalysisReport = pkg.id === 'analysis-report';
            const isOngoingSupport = pkg.id === 'ongoing-support';

            const modalTrigger = isDataReview
              ? {
                  id: 'open-data-review-btn',
                  controls: 'data-review-modal',
                  onClick: onOpenDataReview,
                }
              : isAnalysisReport
                ? {
                    id: 'open-analysis-report-btn',
                    controls: 'analysis-report-modal',
                    onClick: onOpenAnalysisReport,
                  }
                : isOngoingSupport
                  ? {
                      id: 'open-ongoing-support-btn',
                      controls: 'ongoing-support-modal',
                      onClick: onOpenOngoingSupport,
                    }
                  : null;

            return (
              <article
                key={pkg.id}
                id={`service-card-${pkg.id}`}
                className={`relative flex h-full flex-col rounded-2xl p-5 sm:p-6 ${
                  isFeatured
                    ? 'border-2 border-[#255643] bg-[#DDD6C9] shadow-xl xl:-translate-y-2'
                    : 'border border-[#E6E4DF] bg-[#DDD6C9] shadow-sm'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#255643] px-3.5 py-1 text-sm font-semibold tracking-wide text-white shadow-sm">
                      <Sparkles
                        className="h-3 w-3 text-[#958965]"
                        aria-hidden="true"
                      />

                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div className="flex flex-1 flex-col">
                  <h3 className="font-serif text-2xl font-bold text-[#3B5745] sm:text-3xl">
                    {pkg.title}
                  </h3>

                  <p className="mt-2.5 text-base font-medium leading-relaxed text-[#958965] sm:text-lg">
                    {pkg.description}
                  </p>

                  <div className="mt-5 border-b border-[#E6E4DF] pb-5">
                    <span className="block font-serif text-2xl font-bold text-[#3B5745] sm:text-3xl">
                      {pkg.price}
                    </span>

                    {pkg.timeline && (
                      <span className="mt-2 block text-sm font-semibold text-[#827D75]">
                        {pkg.timeline}
                      </span>
                    )}
                  </div>

                  <div className="mt-5">
                    <span className="text-sm font-bold uppercase tracking-wider text-[#827D75]">
                      {includesLabel}
                    </span>

                    <ul className="mt-2.5 space-y-2.5 text-base font-medium text-[#807D75]">
                      {pkg.features.map((feature, idx) => (
                        <li
                          key={`${pkg.id}-feature-${idx}`}
                          className="flex items-start gap-2.5"
                        >
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#255643]"
                            aria-hidden="true"
                          />

                          <span className="leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {modalTrigger && pkg.ctaText && (
                    <div className="mt-auto pt-5">
                      <button
                        id={modalTrigger.id}
                        type="button"
                        onClick={modalTrigger.onClick}
                        aria-haspopup="dialog"
                        aria-controls={modalTrigger.controls}
                        className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#255643] px-4 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:brightness-110"
                      >
                        <span>{pkg.ctaText}</span>
                        <ArrowRight
                          className="h-4 w-4"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-6 flex max-w-3xl items-start gap-2.5 rounded-xl border border-[#E6E4DF] bg-[#DDD6C9] p-3.5 text-sm font-medium text-[#827D75] shadow-sm sm:text-base">
          <Info
            className="mt-0.5 h-4 w-4 shrink-0 text-[#255643]"
            aria-hidden="true"
          />

          <span className="leading-relaxed">
            {t.services.note}
          </span>
        </div>
      </div>
    </section>
  );
};