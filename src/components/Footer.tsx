import React from 'react';
import { Dna, Mail, ArrowUp } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  lang: Language;
  onOpenDocs: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onOpenDocs,
}) => {
  const t = TRANSLATIONS[lang];

  const navigationLabel =
    lang === 'en' ? 'Navigation' : 'Navegación';

  const resourcesLabel =
    lang === 'en' ? 'Resources' : 'Recursos';

  const backToTopLabel =
    lang === 'en' ? 'Back to top' : 'Volver arriba';

  const privacyUnavailableLabel =
    lang === 'en'
      ? 'Privacy policy will be available soon.'
      : 'La política de privacidad estará disponible próximamente.';

  const termsUnavailableLabel =
    lang === 'en'
      ? 'Terms of service will be available soon.'
      : 'Los términos del servicio estarán disponibles próximamente.';

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <footer className="border-t border-[#E6E4DF] bg-[#FFFFFF] font-sans text-xs text-[#5A5A5A]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4 md:col-span-2">
            <button
              type="button"
              onClick={scrollToTop}
              className="group flex cursor-pointer items-center gap-2.5"
              aria-label="BioIT Clarity"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2F3E3A] text-white transition-colors group-hover:bg-[#1A1F1D]">
                <Dna
                  className="h-4 w-4 text-[#D4E8E1]"
                  aria-hidden="true"
                />
              </span>

              <span className="font-serif text-xl font-bold text-[#1F1F1F]">
                BioIT Clarity
              </span>
            </button>

            <p className="max-w-md text-sm leading-relaxed text-[#5A5A5A]">
              {t.footer.tagline}
            </p>

            <div className="flex items-center gap-2 text-xs text-[#5A5A5A]">
              <Mail
                className="h-3.5 w-3.5 text-[#2F3E3A]"
                aria-hidden="true"
              />

              <a
                href={`mailto:${t.contact.email}`}
                className="text-[#1F1F1F] hover:underline"
              >
                {t.contact.email}
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1F1F1F]">
              {navigationLabel}
            </span>

            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('services')}
                  className="cursor-pointer transition-colors hover:text-[#2F3E3A]"
                >
                  {t.nav.services}
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('how-i-work')}
                  className="cursor-pointer transition-colors hover:text-[#2F3E3A]"
                >
                  {t.nav.howIWork}
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('about')}
                  className="cursor-pointer transition-colors hover:text-[#2F3E3A]"
                >
                  {t.nav.about}
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('faq')}
                  className="cursor-pointer transition-colors hover:text-[#2F3E3A]"
                >
                  {t.nav.faq}
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="cursor-pointer transition-colors hover:text-[#2F3E3A]"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1F1F1F]">
              {resourcesLabel}
            </span>

            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={onOpenDocs}
                  className="cursor-pointer font-medium text-[#2F3E3A] transition-colors hover:text-[#1A1F1D]"
                >
                  {t.nav.docsBtn}
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => window.alert(privacyUnavailableLabel)}
                  className="cursor-pointer transition-colors hover:text-[#2F3E3A]"
                >
                  {t.footer.privacy}
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => window.alert(termsUnavailableLabel)}
                  className="cursor-pointer transition-colors hover:text-[#2F3E3A]"
                >
                  {t.footer.terms}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#E6E4DF] pt-8 text-xs sm:flex-row">
          <p>{t.footer.copyright}</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex cursor-pointer items-center gap-1.5 text-xs text-[#5A5A5A] transition-colors hover:text-[#2F3E3A]"
          >
            <span>{backToTopLabel}</span>

            <ArrowUp
              className="h-3.5 w-3.5"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};