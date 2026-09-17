import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProcessSection } from './components/ProcessSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { DocsModal } from './components/DocsModal';
import { Language } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('bioit_clarity_lang');

    if (saved === 'en' || saved === 'es') {
      return saved;
    }

    if (
      typeof navigator !== 'undefined' &&
      navigator.language?.toLowerCase().startsWith('es')
    ) {
      return 'es';
    }

    return 'en';
  });

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isDocsOpen, setIsDocsOpen] = useState(false);
  const [activeDocId, setActiveDocId] = useState<string | null>(null);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('bioit_clarity_lang', newLang);
    document.documentElement.lang = newLang;
  };

  const handleOpenContact = () => {
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  const handleOpenDocs = (docId?: string) => {
    setActiveDocId(docId || null);
    setIsDocsOpen(true);
  };

  const handleCloseDocs = () => {
    setIsDocsOpen(false);
    setActiveDocId(null);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#DDD6C9] font-sans text-[#807D75] selection:bg-[#255643] selection:text-white">
      <Navbar
        currentLang={lang}
        onLanguageChange={handleLanguageChange}
        onOpenDocs={() => handleOpenDocs()}
      />

      <main>
        <Hero lang={lang} />

        <ProcessSection
          lang={lang}
          onOpenContact={handleOpenContact}
          onOpenDocs={handleOpenDocs}
        />

        <ServicesSection lang={lang} />

        <AboutSection lang={lang} />

        <FaqSection lang={lang} />

        <ContactSection lang={lang} />
      </main>

      <Footer
        lang={lang}
        onOpenDocs={() => handleOpenDocs()}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        lang={lang}
      />

      <DocsModal
        isOpen={isDocsOpen}
        onClose={handleCloseDocs}
        lang={lang}
        initialDocId={activeDocId}
      />
    </div>
  );
}