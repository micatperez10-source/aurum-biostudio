import React, { useState } from 'react';
import {
  FileCheck,
  BarChart3,
  FileText,
  ListOrdered,
  Layers,
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface DeliverablesSectionProps {
  lang: Language;
  onOpenDocs: (initialDocId?: string) => void;
}

export const DeliverablesSection: React.FC<DeliverablesSectionProps> = ({
  lang,
  onOpenDocs,
}) => {
  const t = TRANSLATIONS[lang].deliverables;
  const [activeTab, setActiveTab] = useState<string>(
    t.items[0]?.id || 'results-report',
  );

  const getIcon = (name: string) => {
    switch (name) {
      case 'FileCheck':
        return (
          <FileCheck
            className="h-5 w-5 text-[#2F3E3A]"
            aria-hidden="true"
          />
        );

      case 'BarChart3':
        return (
          <BarChart3
            className="h-5 w-5 text-[#2F3E3A]"
            aria-hidden="true"
          />
        );

      case 'FileText':
        return (
          <FileText
            className="h-5 w-5 text-[#2F3E3A]"
            aria-hidden="true"
          />
        );

      case 'ListOrdered':
        return (
          <ListOrdered
            className="h-5 w-5 text-[#2F3E3A]"
            aria-hidden="true"
          />
        );

      default:
        return (
          <Layers
            className="h-5 w-5 text-[#2F3E3A]"
            aria-hidden="true"
          />
        );
    }
  };

  const activeItem =
    t.items.find((item) => item.id === activeTab) || t.items[0];

  const preview = activeItem
    ? t.previews[activeItem.id]
    : undefined;

  const getFolderLabel = () => {
    if (lang === 'en') {
      return 'Organized in the project deliverables folder.';
    }

    return 'Organizado en la carpeta de entregables del proyecto.';
  };

  const handleOpenDocs = () => {
    if (activeItem) {
      onOpenDocs(activeItem.id);
    } else {
      onOpenDocs();
    }
  };

  return (
    <section
      id="deliverables"
      className="border-t border-[#E6E4DF] bg-[#FFFFFF] py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#E6E4DF] bg-[#D4E8E1] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#2F3E3A]">
            {t.tag}
          </span>

          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-[#1F1F1F] sm:text-4xl">
            {t.title}
          </h2>

          <p className="mt-4 text-base leading-relaxed text-[#5A5A5A] sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((deliverable) => {
            const isSelected = activeTab === deliverable.id;

            return (
              <button
                key={deliverable.id}
                type="button"
                onClick={() => setActiveTab(deliverable.id)}
                aria-pressed={isSelected}
                className={`flex cursor-pointer flex-col justify-between rounded-2xl border p-6 text-left transition-all ${
                  isSelected
                    ? 'border-[#2F3E3A] bg-[#D4E8E1]/40 shadow-sm ring-1 ring-[#2F3E3A]'
                    : 'border-[#E6E4DF] bg-[#F4F2EE] hover:border-[#BFA690] hover:bg-[#FFFFFF]'
                }`}
              >
                <div>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#E6E4DF] bg-[#FFFFFF] shadow-sm">
                    {getIcon(deliverable.iconName)}
                  </div>

                  <h3 className="text-base font-bold text-[#1F1F1F]">
                    {deliverable.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[#5A5A5A] sm:text-sm">
                    {deliverable.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between gap-3 border-t border-[#E6E4DF]/70 pt-4">
                  <span className="max-w-[170px] truncate text-[11px] font-semibold text-[#5A5A5A]">
                    {deliverable.format}
                  </span>

                  <span
                    className={`text-xs font-bold ${
                      isSelected ? 'text-[#2F3E3A]' : 'text-[#5A5A5A]'
                    }`}
                  >
                    {isSelected ? t.selectedBadge : t.viewDetail}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-[#2F3E3A] bg-[#1A1F1D] p-6 font-mono text-xs text-[#E6E4DF] shadow-xl sm:p-8 sm:text-sm">
          <div className="mb-4 flex items-center justify-between border-b border-[#5A5A5A]/40 pb-4 text-[#BFA690]">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#BFA690]" />
              <span className="h-3 w-3 rounded-full bg-[#D4E8E1]" />
              <span className="h-3 w-3 rounded-full bg-[#FFFFFF]" />
              <span className="ml-2 font-sans text-xs text-[#BFA690]">
                {t.previewHeader}
              </span>
            </div>

            <span className="rounded-md bg-[#2F3E3A] px-2.5 py-1 font-sans text-[11px] font-semibold text-[#D4E8E1]">
              {t.previewBadge}
            </span>
          </div>

          {preview ? (
            <div className="space-y-3">
              <p className="text-sm font-bold text-[#D4E8E1] sm:text-base">
                {preview.title}
              </p>

              <p className="text-[#BFA690]">{preview.subtitle}</p>

              <div className="space-y-1.5 py-2 text-[#E6E4DF]">
                <p>{preview.p1}</p>
                <p>{preview.p2}</p>
                <p>{preview.p3}</p>
              </div>

              <div className="border-t border-[#5A5A5A]/40 pt-3 font-sans font-semibold text-[#D4E8E1]">
                {preview.highlight}
              </div>
            </div>
          ) : (
            <p className="text-[#BFA690]">
              {lang === 'en'
                ? 'No preview available for this deliverable.'
                : 'No hay una vista previa disponible para este entregable.'}
            </p>
          )}

          <div className="mt-6 flex flex-col items-start justify-between gap-3 border-t border-[#5A5A5A]/40 pt-4 font-sans sm:flex-row sm:items-center">
            <span className="text-xs text-[#BFA690]">
              {getFolderLabel()}
            </span>

            <button
              id="open-docs-from-preview"
              type="button"
              onClick={handleOpenDocs}
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-[#5A5A5A] bg-[#2F3E3A] px-3 py-1.5 text-xs font-semibold text-[#FFFFFF] transition-colors hover:bg-[#1F1F1F]"
            >
              <span>{t.viewDetail}</span>
            </button>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-[#2F3E3A]/60 bg-[#2F3E3A] p-6 text-white shadow-lg sm:p-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4E8E1]/30 bg-[#D4E8E1]/10 px-2.5 py-1 text-xs font-semibold text-[#D4E8E1]">
                <span>{lang === 'en' ? 'Deliverables' : 'Entregables'}</span>
              </div>

              <h3 className="font-serif text-xl font-bold tracking-tight text-white sm:text-2xl">
                {lang === 'en'
                  ? 'See examples of project outputs'
                  : 'Mirá ejemplos de resultados de proyectos'}
              </h3>

              <p className="max-w-xl text-sm leading-relaxed text-[#E6E4DF]">
                {lang === 'en'
                  ? 'Review examples of reports, figures, tables, analysis notes, and suggested next steps.'
                  : 'Revisá ejemplos de reportes, gráficos, tablas, notas de análisis y próximos pasos sugeridos.'}
              </p>
            </div>

            <button
              id="deliverables-open-docs-btn"
              type="button"
              onClick={() => onOpenDocs()}
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#D4E8E1] px-5 py-3 text-sm font-bold text-[#1A1F1D] shadow-md transition-all hover:bg-[#FFFFFF] md:w-auto"
            >
              <span>
                {lang === 'en'
                  ? 'Open sample deliverables'
                  : 'Abrir entregables de ejemplo'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};