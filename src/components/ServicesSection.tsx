import React from 'react';
import {
  Check,
  Sparkles,
  Info,
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface ServicesSectionProps {
  lang: Language;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  lang,
}) => {
  const t = TRANSLATIONS[lang];

  const includesLabel =
    lang === 'en' ? 'Includes:' : 'Incluye:';

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-[#F4F2EE] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2F3E3A] sm:text-sm">
            {t.services.tag}
          </p>

          <h2
            id="services-title"
            className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#1F1F1F] sm:text-4xl md:text-5xl"
          >
            {t.services.title}
          </h2>

          <p className="mt-4 font-sans text-base leading-relaxed text-[#5A5A5A] sm:text-lg">
            {t.services.intro}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 items-stretch gap-6 sm:mt-16 md:grid-cols-3">
          {t.services.packages.map((pkg) => {
            const isFeatured = Boolean(pkg.badge);

            return (
              <article
                key={pkg.id}
                id={`service-card-${pkg.id}`}
                className={`relative flex h-full flex-col rounded-2xl p-6 sm:p-7 ${
                  isFeatured
                    ? 'border-2 border-[#2F3E3A] bg-[#FFFFFF] shadow-xl md:-translate-y-2'
                    : 'border border-[#E6E4DF] bg-[#FFFFFF] shadow-sm'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2F3E3A] px-3.5 py-1 text-xs font-semibold tracking-wide text-white shadow-sm">
                      <Sparkles
                        className="h-3 w-3 text-[#D4E8E1]"
                        aria-hidden="true"
                      />

                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div className="flex flex-1 flex-col">
                  <h3 className="font-serif text-2xl font-bold text-[#1F1F1F]">
                    {pkg.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#5A5A5A]">
                    {pkg.description}
                  </p>

                  <div className="mt-6 border-b border-[#E6E4DF] pb-6">
                    <span className="block text-3xl font-serif font-bold text-[#1F1F1F] sm:text-4xl">
                      {pkg.price}
                    </span>

                    {pkg.timeline && (
                      <span className="mt-2 block text-xs text-[#5A5A5A]">
                        {pkg.timeline}
                      </span>
                    )}
                  </div>

                  <div className="mt-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#5A5A5A]">
                      {includesLabel}
                    </span>

                    <ul className="mt-3 space-y-3 text-sm text-[#1F1F1F]">
                      {pkg.features.map((feature, idx) => (
                        <li
                          key={`${pkg.id}-feature-${idx}`}
                          className="flex items-start gap-2.5"
                        >
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#2F3E3A]"
                            aria-hidden="true"
                          />

                          <span className="leading-snug">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-8 flex max-w-3xl items-start gap-2.5 rounded-xl border border-[#E6E4DF] bg-[#FFFFFF] p-4 text-xs text-[#5A5A5A] shadow-sm">
          <Info
            className="mt-0.5 h-4 w-4 shrink-0 text-[#2F3E3A]"
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