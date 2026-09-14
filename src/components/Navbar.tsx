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
    <header className="sticky top-0 z-40 border-b border-[#E6E4DF] bg-[#FFFFFF]/95 backdrop-blur-md">
      <div className="border-b border-[#1A1F1D]/10 bg-[#2F3E3A] px-4 py-1.5 text-center text-[12px] text-[#F4F2EE]">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2">
          <CheckCircle
            className="h-3.5 w-3.5 shrink-0 text-[#D4E8E1]"
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
            className="group flex shrink-0 items-center gap-3 text-[#1F1F1F]"
            onClick={(event) => {
              event.preventDefault();
              scrollToTop();
            }}
            aria-label="BioIT Clarity"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2F3E3A] text-white shadow-sm transition-colors group-hover:bg-[#1A1F1D] sm:h-10 sm:w-10">
              <Dna
                className="h-5 w-5 text-[#D4E8E1]"
                aria-hidden="true"
              />
            </div>

            <div className="flex min-w-0 flex-col">
              <span className="whitespace-nowrap font-serif text-xl font-bold tracking-tight text-[#1F1F1F] sm:text-2xl">
                BioIT Clarity
              </span>

              <span className="whitespace-nowrap font-sans text-[11px] font-medium uppercase tracking-wider text-[#5A5A5A]">
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
              className="cursor-pointer whitespace-nowrap text-xs font-semibold text-[#5A5A5A] transition-colors hover:text-[#2F3E3A]"
            >
              {t.nav.services}
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('how-i-work')}
              className="cursor-pointer whitespace-nowrap text-xs font-semibold text-[#5A5A5A] transition-colors hover:text-[#2F3E3A]"
            >
              {t.nav.howIWork}
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('about')}
              className="cursor-pointer whitespace-nowrap text-xs font-semibold text-[#5A5A5A] transition-colors hover:text-[#2F3E3A]"
            >
              {t.nav.about}
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('faq')}
              className="cursor-pointer whitespace-nowrap text-xs font-semibold text-[#5A5A5A] transition-colors hover:text-[#2F3E3A]"
            >
              {t.nav.faq}
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="cursor-pointer whitespace-nowrap text-xs font-semibold text-[#5A5A5A] transition-colors hover:text-[#2F3E3A]"
            >
              {t.nav.contact}
            </button>
          </nav>

          <div className="hidden shrink-0 items-center gap-2 xl:flex">
            <button
              id="nav-open-docs-btn"
              type="button"
              onClick={onOpenDocs}
              className="inline-flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-lg border border-[#E6E4DF] px-3 py-2 text-xs font-semibold text-[#2F3E3A] transition-colors hover:bg-[#E6E4DF]/40"
            >
              <FolderGit2
                className="h-3.5 w-3.5 shrink-0"
                aria-hidden="true"
              />

              <span>{t.nav.docsBtn}</span>
            </button>

            <LanguageToggle
              currentLang={currentLang}
              onToggle={handleLanguageChange}
            />

            <button
              id="nav-contact-btn"
              type="button"
              onClick={() => scrollToSection('contact')}
              className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-xl bg-[#2F3E3A] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-[#1A1F1D]"
            >
              <span>{t.nav.bookCall}</span>

              <ArrowRight
                className="h-3.5 w-3.5 shrink-0 text-[#D4E8E1]"
                aria-hidden="true"
              />
            </button>
          </div>

          <div className="flex shrink-0 items-center gap-2 xl:hidden">
            <LanguageToggle
              currentLang={currentLang}
              onToggle={handleLanguageChange}
            />

            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="cursor-pointer rounded-lg p-2 text-[#1F1F1F] hover:bg-[#E6E4DF]/60"
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
          className="space-y-3 border-b border-[#E6E4DF] bg-[#FFFFFF] px-4 pb-6 pt-3 xl:hidden"
        >
          <div className="flex flex-col space-y-2">
            <button
              type="button"
              onClick={() => scrollToSection('services')}
              className="rounded-lg px-3 py-2 text-left text-sm font-semibold text-[#1F1F1F] hover:bg-[#F4F2EE]"
            >
              {t.nav.services}
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('how-i-work')}
              className="rounded-lg px-3 py-2 text-left text-sm font-semibold text-[#1F1F1F] hover:bg-[#F4F2EE]"
            >
              {t.nav.howIWork}
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('about')}
              className="rounded-lg px-3 py-2 text-left text-sm font-semibold text-[#1F1F1F] hover:bg-[#F4F2EE]"
            >
              {t.nav.about}
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('faq')}
              className="rounded-lg px-3 py-2 text-left text-sm font-semibold text-[#1F1F1F] hover:bg-[#F4F2EE]"
            >
              {t.nav.faq}
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="rounded-lg px-3 py-2 text-left text-sm font-semibold text-[#1F1F1F] hover:bg-[#F4F2EE]"
            >
              {t.nav.contact}
            </button>

            <button
              id="mobile-nav-open-docs-btn"
              type="button"
              onClick={() => {
                setIsOpen(false);
                onOpenDocs();
              }}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-semibold text-[#2F3E3A] hover:bg-[#E6E4DF]/40"
            >
              <FolderGit2
                className="h-4 w-4"
                aria-hidden="true"
              />

              <span>{t.nav.docsBtn}</span>
            </button>
          </div>

          <div className="border-t border-[#E6E4DF] pt-2">
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#2F3E3A] px-4 py-3 font-semibold text-white shadow-sm hover:bg-[#1A1F1D]"
            >
              <span>{t.nav.bookCall}</span>

              <ArrowRight
                className="h-4 w-4 text-[#D4E8E1]"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};