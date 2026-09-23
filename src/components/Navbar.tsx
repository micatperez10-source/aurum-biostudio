import React, { useState } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  Dna,
  FolderGit2,
  CheckCircle,
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { LanguageToggle } from './LanguageToggle';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenDocs: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  onOpenDocs,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = TRANSLATIONS[currentLang];

  const handleLanguageChange = (lang: Language) => {
    setIsOpen(false);
    onLanguageChange(lang);
  };

  const scrollToSection = (id: string) => {
    setIsOpen(false);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const scrollToTop = () => {
    setIsOpen(false);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#E6E4DF] bg-[#DDD6C9]/95 backdrop-blur-md">
      <div className="border-b border-[#255643]/10 bg-[#255643] px-4 py-1.5 text-center text-sm text-[#E6E4DF]">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2">
          <CheckCircle
            className="h-3.5 w-3.5 shrink-0 text-[#958965]"
            aria-hidden="true"
          />

          <span className="font-medium tracking-wide">
            {t.nav.badge}
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4 sm:h-20">
          <a
            href="#hero"
            className="group flex shrink-0 items-center gap-3 text-[#807D75]"
            onClick={(event) => {
              event.preventDefault();
              scrollToTop();
            }}
            aria-label="Aurum BioStudio"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#255643] text-white shadow-sm transition-colors group-hover:brightness-110 sm:h-10 sm:w-10">
              <Dna
                className="h-5 w-5 text-[#958965]"
                aria-hidden="true"
              />
            </div>

            <div className="flex min-w-0 flex-col">
              <span className="whitespace-nowrap font-serif text-xl font-bold tracking-tight text-[#3B5745] sm:text-2xl">
                Aurum BioStudio
              </span>

              <span className="whitespace-nowrap font-sans text-xs font-medium uppercase tracking-wider text-[#827D75]">
                {t.nav.subbrand}
              </span>
            </div>
          </a>

          <nav
            className="hidden items-center gap-4 xl:flex"
            aria-label={
              currentLang === 'en'
                ? 'Main navigation'
                : 'Navegación principal'
            }
          >
            <button
              type="button"
              onClick={() => scrollToSection('services')}
              className="font-serif cursor-pointer whitespace-nowrap text-sm font-semibold text-[#827D75] transition-colors hover:text-[#255643]"
            >
              {t.nav.services}
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('how-i-work')}
              className="font-serif cursor-pointer whitespace-nowrap text-sm font-semibold text-[#827D75] transition-colors hover:text-[#255643]"
            >
              {t.nav.howIWork}
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('about')}
              className="font-serif cursor-pointer whitespace-nowrap text-sm font-semibold text-[#827D75] transition-colors hover:text-[#255643]"
            >
              {t.nav.about}
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('faq')}
              className="font-serif cursor-pointer whitespace-nowrap text-sm font-semibold text-[#827D75] transition-colors hover:text-[#255643]"
            >
              {t.nav.faq}
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="font-serif cursor-pointer whitespace-nowrap text-sm font-semibold text-[#827D75] transition-colors hover:text-[#255643]"
            >
              {t.nav.contact}
            </button>
          </nav>

          <div className="hidden shrink-0 items-center gap-2 xl:flex">
            {/* TEMPORALMENTE OCULTO - ENTREGABLES no listo todavía. Descomentar cuando esté listo.
            <button
              id="nav-open-docs-btn"
              type="button"
              onClick={onOpenDocs}
              className="font-serif inline-flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-lg border border-[#E6E4DF] px-3 py-2 text-sm font-semibold text-[#255643] transition-colors hover:bg-[#DDD6C9] hover:brightness-95/40"
            >
              <FolderGit2
                className="h-3.5 w-3.5 shrink-0"
                aria-hidden="true"
              />

              <span>{t.nav.docsBtn}</span>
            </button>
            */}

            <LanguageToggle
              currentLang={currentLang}
              onToggle={handleLanguageChange}
            />

            <a
              id="nav-contact-btn"
              href={t.contact.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-xl bg-[#255643] px-4 py-2.5 text-sm font-semibold text-[#E6E4DF] shadow-sm transition-colors hover:brightness-110"
            >
              <span>{t.nav.bookCall}</span>

              <ArrowRight
                className="h-3.5 w-3.5 shrink-0 text-[#958965]"
                aria-hidden="true"
              />
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-2 xl:hidden">
            <LanguageToggle
              currentLang={currentLang}
              onToggle={handleLanguageChange}
            />

            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="cursor-pointer rounded-lg p-2 text-[#807D75] hover:bg-[#DDD6C9] hover:brightness-95/60"
              aria-label={
                currentLang === 'en'
                  ? 'Toggle navigation menu'
                  : 'Abrir o cerrar menú de navegación'
              }
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="space-y-3 border-b border-[#E6E4DF] bg-[#DDD6C9] px-4 pb-6 pt-3 xl:hidden"
        >
          <div className="flex flex-col space-y-2">
            <button
              type="button"
              onClick={() => scrollToSection('services')}
              className="rounded-lg px-3 py-2 text-left text-sm font-semibold text-[#807D75] hover:bg-[#DDD6C9] hover:brightness-95"
            >
              {t.nav.services}
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('how-i-work')}
              className="rounded-lg px-3 py-2 text-left text-sm font-semibold text-[#807D75] hover:bg-[#DDD6C9] hover:brightness-95"
            >
              {t.nav.howIWork}
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('about')}
              className="rounded-lg px-3 py-2 text-left text-sm font-semibold text-[#807D75] hover:bg-[#DDD6C9] hover:brightness-95"
            >
              {t.nav.about}
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('faq')}
              className="rounded-lg px-3 py-2 text-left text-sm font-semibold text-[#807D75] hover:bg-[#DDD6C9] hover:brightness-95"
            >
              {t.nav.faq}
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="rounded-lg px-3 py-2 text-left text-sm font-semibold text-[#807D75] hover:bg-[#DDD6C9] hover:brightness-95"
            >
              {t.nav.contact}
            </button>

            {/* TEMPORALMENTE OCULTO - ENTREGABLES no listo todavía. Descomentar cuando esté listo.
            <button
              id="mobile-nav-open-docs-btn"
              type="button"
              onClick={() => {
                setIsOpen(false);
                onOpenDocs();
              }}
              className="font-serif flex items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-semibold text-[#255643] hover:bg-[#DDD6C9] hover:brightness-95/40"
            >
              <FolderGit2
                className="h-4 w-4"
                aria-hidden="true"
              />

              <span>{t.nav.docsBtn}</span>
            </button>
            */}
          </div>

          <div className="border-t border-[#E6E4DF] pt-2">
            <a
              href={t.contact.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#255643] px-4 py-3 font-semibold text-[#E6E4DF] shadow-sm hover:brightness-110"
            >
              <span>{t.nav.bookCall}</span>

              <ArrowRight
                className="h-4 w-4 text-[#958965]"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};