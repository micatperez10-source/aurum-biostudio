import React, { useEffect, useState } from 'react';
import {
  X,
  FileText,
  Download,
  ExternalLink,
  ShieldCheck,
  FileCheck,
  BarChart3,
  ListOrdered,
  Layers,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { Attachment, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface DocsModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialDocId?: string | null;
}

export const DocsModal: React.FC<DocsModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialDocId,
}) => {
  const t = TRANSLATIONS[lang];
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [downloadedDoc, setDownloadedDoc] = useState<string | null>(null);

  const docs = t.attachments;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    if (initialDocId) {
      const targetDoc = docs.find((doc) => doc.id === initialDocId);

      if (targetDoc) {
        setSelectedCategory(targetDoc.category);
      }
    }
  }, [docs, initialDocId, isOpen]);

  if (!isOpen) {
    return null;
  }

  const filteredDocs =
    selectedCategory === 'all'
      ? docs
      : docs.filter((doc) => doc.category === selectedCategory);

  const categories = Array.from(
    new Set(docs.map((doc) => doc.category)),
  );

  const getDocIcon = (doc: Attachment) => {
    switch (doc.category) {
      case 'informes':
        return (
          <FileCheck
            className="h-5 w-5 text-[#255643]"
            aria-hidden="true"
          />
        );

      case 'figuras':
        return (
          <BarChart3
            className="h-5 w-5 text-[#255643]"
            aria-hidden="true"
          />
        );

      case 'notas':
        return (
          <FileText
            className="h-5 w-5 text-[#255643]"
            aria-hidden="true"
          />
        );

      case 'proximos-pasos':
        return (
          <ListOrdered
            className="h-5 w-5 text-[#255643]"
            aria-hidden="true"
          />
        );

      default:
        return (
          <Layers
            className="h-5 w-5 text-[#255643]"
            aria-hidden="true"
          />
        );
    }
  };

  const handleDownloadClick = (filename: string) => {
    setDownloadedDoc(filename);

    window.setTimeout(() => {
      setDownloadedDoc(null);
    }, 2500);
  };

  const categoryLabel = (category: string) => {
    const labels: Record<string, string> =
      lang === 'en'
        ? {
            informes: 'Reports',
            figuras: 'Figures',
            notas: 'Notes',
            'proximos-pasos': 'Next steps',
          }
        : {
            informes: 'Reportes',
            figuras: 'Figuras',
            notas: 'Notas',
            'proximos-pasos': 'Próximos pasos',
          };

    return labels[category] || category;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#255643]/70 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="docs-modal-title"
    >
      <div
        id="docs-modal-container"
        className="my-auto flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[#E6E4DF] bg-[#DDD6C9] shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="shrink-0 border-b border-[#255643] bg-[#255643] p-6 text-white sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#DDD6C9]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#827D75]">
                <Sparkles
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                />
                <span>{t.docsModal.badge}</span>
              </div>

              <h2
                id="docs-modal-title"
                className="font-serif text-2xl font-bold tracking-tight text-white sm:text-3xl"
              >
                {t.docsModal.title}
              </h2>

              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-[#958965]/90">
                {t.docsModal.subtitle}
              </p>
            </div>

            <button
              id="close-docs-modal-btn"
              type="button"
              onClick={onClose}
              className="cursor-pointer rounded-xl p-2 text-[#958965] transition-colors hover:bg-[#DDD6C9]/10 hover:text-white"
              aria-label={t.docsModal.closeBtn}
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-white/15 pt-4 text-xs">
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/20 px-3 py-1.5 font-mono text-[#827D75]">
              <span className="text-[#BFA690]">
                {lang === 'en' ? 'Folder:' : 'Carpeta:'}
              </span>
              <span className="font-semibold text-white">
                /public/docs/
              </span>
            </div>

            <span className="text-[#958965]/80">
              {lang === 'en'
                ? 'Examples of reports, figures, notes, and next steps.'
                : 'Ejemplos de reportes, figuras, notas y próximos pasos.'}
            </span>
          </div>
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-2 border-b border-[#E6E4DF] bg-[#DDD6C9] px-6 py-3 text-xs sm:text-sm">
          <span className="mr-1 font-medium text-[#958965]">
            {lang === 'en' ? 'Category:' : 'Categoría:'}
          </span>

          <button
            id="filter-all-docs"
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`cursor-pointer rounded-lg px-3 py-1.5 font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-[#255643] text-white shadow-sm'
                : 'border border-[#E6E4DF] bg-[#DDD6C9] text-[#807D75] hover:bg-[#DDD6C9] hover:brightness-95'
            }`}
          >
            {t.docsModal.allCategory} ({docs.length})
          </button>

          {categories.map((category) => (
            <button
              key={category}
              id={`filter-${category}-docs`}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer rounded-lg px-3 py-1.5 font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-[#255643] text-white shadow-sm'
                  : 'border border-[#E6E4DF] bg-[#DDD6C9] text-[#807D75] hover:bg-[#DDD6C9] hover:brightness-95'
              }`}
            >
              {categoryLabel(category)}
            </button>
          ))}
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto p-6">
          {filteredDocs.map((doc: Attachment) => {
            const isTargeted = initialDocId === doc.id;
            const isDownloaded = downloadedDoc === doc.filename;

            return (
              <article
                key={doc.id}
                id={`doc-card-${doc.id}`}
                className={`rounded-xl border p-5 transition-all duration-200 ${
                  isTargeted
                    ? 'border-[#255643] bg-[#255643]/30 shadow-md ring-2 ring-[#255643]/20'
                    : 'border-[#E6E4DF] hover:border-[#BFA690] hover:bg-[#DDD6C9] hover:brightness-95/60'
                }`}
              >
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#E6E4DF] bg-[#DDD6C9] shadow-sm">
                      {getDocIcon(doc)}
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-[#255643] bg-[#255643] px-2.5 py-0.5 text-xs font-semibold text-white">
                          {doc.badge}
                        </span>

                        <span className="rounded border border-[#E6E4DF] bg-[#DDD6C9] px-2 py-0.5 font-mono text-xs font-semibold text-[#827D75]">
                          {doc.folderPath}
                        </span>

                        <span className="font-mono text-xs text-[#827D75]">
                          {doc.fileSize}
                        </span>
                      </div>

                      <h3 className="font-serif text-base font-bold leading-snug text-[#3B5745] sm:text-lg">
                        {doc.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-[#958965]">
                        {doc.description}
                      </p>

                      <div className="mt-3 grid grid-cols-1 gap-1 border-t border-[#E6E4DF] pt-2.5 text-xs text-[#827D75]">
                        {doc.previewSummary.map((point, idx) => (
                          <div
                            key={`${doc.id}-point-${idx}`}
                            className="flex items-center gap-1.5"
                          >
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#255643]" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-1 text-xs font-mono text-[#827D75]">
                        {lang === 'en' ? 'File:' : 'Archivo:'}{' '}
                        <code className="font-serif rounded bg-[#DDD6C9] px-1.5 py-0.5 font-bold text-[#255643]">
                          {doc.folderPath}
                          {doc.filename}
                        </code>
                      </div>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-stretch gap-2 sm:w-44 sm:flex-col">
                    <a
                      id={`download-doc-${doc.id}`}
                      href={doc.webPath}
                      download={doc.filename}
                      onClick={() => handleDownloadClick(doc.filename)}
                      className={`inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold shadow-sm transition-all ${
                        isDownloaded
                          ? 'bg-[#255643] text-white'
                          : 'bg-[#255643] text-white hover:brightness-110 active:scale-[0.98]'
                      }`}
                    >
                      {isDownloaded ? (
                        <>
                          <CheckCircle2
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
                          <span>
                            {lang === 'en' ? 'Downloaded!' : '¡Descargado!'}
                          </span>
                        </>
                      ) : (
                        <>
                          <Download
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
                          <span>{t.docsModal.downloadPdf}</span>
                        </>
                      )}
                    </a>

                    <a
                      id={`view-doc-${doc.id}`}
                      href={doc.webPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-[#E6E4DF] bg-[#DDD6C9] px-3 py-2 text-xs font-medium text-[#807D75] transition-colors hover:bg-[#DDD6C9] hover:brightness-95"
                    >
                      <ExternalLink
                        className="h-3.5 w-3.5"
                        aria-hidden="true"
                      />
                      <span>{t.docsModal.viewInBrowser}</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}

          {filteredDocs.length === 0 && (
            <div className="py-12 text-center text-sm text-[#958965]">
              {t.docsModal.noDocs}
            </div>
          )}
        </div>

        <div className="flex shrink-0 flex-wrap items-center justify-between gap-4 border-t border-[#E6E4DF] bg-[#DDD6C9] px-6 py-4">
          <p className="flex items-start gap-1.5 text-xs text-[#827D75]">
            <ShieldCheck
              className="mt-0.5 h-4 w-4 shrink-0 text-[#255643]"
              aria-hidden="true"
            />
            <span>
              {lang === 'en'
                ? 'Sample files are provided only to illustrate the type of deliverables available.'
                : 'Los archivos de muestra sirven únicamente para ilustrar el tipo de entregables disponibles.'}
            </span>
          </p>

          <button
            id="footer-close-docs-modal-btn"
            type="button"
            onClick={onClose}
            className="ml-auto cursor-pointer rounded-xl border border-[#E6E4DF] bg-[#DDD6C9] px-5 py-2 text-xs font-semibold text-[#807D75] transition-colors hover:bg-[#DDD6C9] hover:brightness-95"
          >
            {t.docsModal.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};