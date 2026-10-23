import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProcessSection } from './components/ProcessSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { ContactModal } from './components/ContactModal';
import { DataReviewModal } from './components/DataReviewModal';
import { AnalysisReportModal } from './components/AnalysisReportModal';
import { OngoingSupportModal } from './components/OngoingSupportModal';
// TEMPORALMENTE OCULTO - ENTREGABLES no listo todavía. Descomentar cuando esté listo.
// import { DocsModal } from './components/DocsModal';
// import { DeliverablesSection } from './components/DeliverablesSection';
import { Language } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('aurum_biostudio_lang');

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
  const [contactServiceInterest, setContactServiceInterest] = useState<
    string | null
  >(null);
  const [isDataReviewOpen, setIsDataReviewOpen] = useState(false);
  const [isAnalysisReportOpen, setIsAnalysisReportOpen] = useState(false);
  const [isOngoingSupportOpen, setIsOngoingSupportOpen] = useState(false);
  const [isDocsOpen, setIsDocsOpen] = useState(false);
  const [activeDocId, setActiveDocId] = useState<string | null>(null);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('aurum_biostudio_lang', newLang);
    document.documentElement.lang = newLang;
  };

  const handleOpenContact = () => {
    setContactServiceInterest(null);
    setIsContactOpen(true);
  };

  const handleOpenContactForService = (serviceId: string) => {
    setContactServiceInterest(serviceId);
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
    setContactServiceInterest(null);
  };

  const handleOpenDataReview = () => {
    setIsAnalysisReportOpen(false);
    setIsOngoingSupportOpen(false);
    setIsDataReviewOpen(true);
  };

  const handleCloseDataReview = () => {
    setIsDataReviewOpen(false);
  };

  const handleOpenAnalysisReport = () => {
    setIsDataReviewOpen(false);
    setIsOngoingSupportOpen(false);
    setIsAnalysisReportOpen(true);
  };

  const handleCloseAnalysisReport = () => {
    setIsAnalysisReportOpen(false);
  };

  const handleOpenOngoingSupport = () => {
    setIsDataReviewOpen(false);
    setIsAnalysisReportOpen(false);
    setIsOngoingSupportOpen(true);
  };

  const handleCloseOngoingSupport = () => {
    setIsOngoingSupportOpen(false);
  };

  const openContactForServiceAfterNavigation = (serviceId: string) => {
    window.setTimeout(() => {
      const contactSection = document.getElementById('contact');
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;

      contactSection?.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });

      handleOpenContactForService(serviceId);
    }, 50);
  };

  const handleDataReviewContact = () => {
    setIsDataReviewOpen(false);
    openContactForServiceAfterNavigation('data-review');
  };

  const handleAnalysisReportContact = () => {
    setIsAnalysisReportOpen(false);
    openContactForServiceAfterNavigation('analysis-report');
  };

  const handleOngoingSupportContact = () => {
    setIsOngoingSupportOpen(false);
    openContactForServiceAfterNavigation('ongoing-support');
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

        <ServicesSection
          lang={lang}
          onOpenDataReview={handleOpenDataReview}
          onOpenAnalysisReport={handleOpenAnalysisReport}
          onOpenOngoingSupport={handleOpenOngoingSupport}
        />

        {/* TEMPORALMENTE OCULTO - ENTREGABLES no listo todavía. Descomentar cuando esté listo.
        <DeliverablesSection
          lang={lang}
          onOpenDocs={handleOpenDocs}
        />
        */}

        <AboutSection lang={lang} />

        <FaqSection lang={lang} />

        <ContactSection lang={lang} />
      </main>

      <Footer
        lang={lang}
        onOpenDocs={() => handleOpenDocs()}
      />

      <DataReviewModal
        isOpen={isDataReviewOpen}
        onClose={handleCloseDataReview}
        onContact={handleDataReviewContact}
        lang={lang}
      />

      <AnalysisReportModal
        isOpen={isAnalysisReportOpen}
        onClose={handleCloseAnalysisReport}
        onContact={handleAnalysisReportContact}
        lang={lang}
      />

      <OngoingSupportModal
        isOpen={isOngoingSupportOpen}
        onClose={handleCloseOngoingSupport}
        onContact={handleOngoingSupportContact}
        lang={lang}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        lang={lang}
        serviceInterestId={contactServiceInterest}
      />

      <BackToTop lang={lang} />

      {/* TEMPORALMENTE OCULTO - ENTREGABLES no listo todavía. Descomentar cuando esté listo.
      <DocsModal
        isOpen={isDocsOpen}
        onClose={handleCloseDocs}
        lang={lang}
        initialDocId={activeDocId}
      />
      */}
    </div>
  );
}