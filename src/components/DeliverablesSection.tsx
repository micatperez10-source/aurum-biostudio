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
            className="h-5 w-5 text-[#255643]"
            aria-hidden="true"
          />
        );

      case 'BarChart3':
        return (
          <BarChart3
            className="h-5 w-5 text-[#255643]"
            aria-hidden="true"
          />
        );

      case 'FileText':
        return (
          <FileText
            className="h-5 w-5 text-[#255643]"
            aria-hidden="true"
          />
        );

      case 'ListOrdered':
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
      className="border-t border-[#E6E4DF] bg-[#DDD6C9] py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#E6E4DF] bg-[#255643] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            {t.tag}
          </span>

          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-[#3B5745] sm:text-4xl">
            {t.title}
          </h2>

          <p className="mt-4 text-base leading-relaxed text-[#958965] sm:text-lg">
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
                    ? 'border-[#255643] bg-[#255643]/40 shadow-sm ring-1 ring-[#255643]'
                    : 'border-[#E6E4DF] bg-[#DDD6C9] hover:border-[#BFA690] hover:bg-[#DDD6C9] hover:brightness-95'
                }`}
              >
                <div>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#E6E4DF] bg-[#DDD6C9] shadow-sm">
                    {getIcon(deliverable.iconName)}
                  </div>

                  <h3 className="font-serif text-base font-bold text-[#3B5745]">
                    {deliverable.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[#827D75]">
                    {deliverable.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between gap-3 border-t border-[#E6E4DF]/70 pt-4">
                  <span className="max-w-[170px] truncate text-xs font-semibold text-[#827D75]">
                    {deliverable.format}
                  </span>

                  <span
                    className={`text-xs font-bold ${
                      isSelected ? 'font-serif text-[#255643]' : 'font-serif text-[#958965]'
                    }`}
                  >
                    {isSelected ? t.selectedBadge : t.viewDetail}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-[#255643] bg-[#255643] p-6 font-mono text-xs text-[#E6E4DF] shadow-xl sm:p-8 sm:text-sm">
          <div className="mb-4 flex items-center justify-between border-b border-[#958965]/40 pb-4 text-[#BFA690]">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#BFA690]" />
              <span className="h-3 w-3 rounded-full bg-[#DDD6C9]" />
              <span className="h-3 w-3 rounded-full bg-[#DDD6C9]" />
              <span className="ml-2 font-sans text-xs text-[#BFA690]">
                {t.previewHeader}
              </span>
            </div>

            <span className="rounded-md bg-[#255643] px-2.5 py-1 font-sans text-xs font-semibold text-[#827D75]">
              {t.previewBadge}
            </span>
          </div>

          {preview ? (
            <div className="space-y-3">
              <p className="text-sm font-bold text-[#958965] sm:text-base">
                {preview.title}
              </p>

              <p className="text-[#BFA690]">{preview.subtitle}</p>

              <div className="space-y-1.5 py-2 text-[#E6E4DF]">
                <p>{preview.p1}</p>
                <p>{preview.p2}</p>
                <p>{preview.p3}</p>
              </div>

              <div className="border-t border-[#958965]/40 pt-3 font-sans font-semibold text-[#958965]">
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

          <div className="mt-6 flex flex-col items-start justify-between gap-3 border-t border-[#958965]/40 pt-4 font-sans sm:flex-row sm:items-center">
            <span className="text-xs text-[#BFA690]">
              {getFolderLabel()}
            </span>

            <button
              id="open-docs-from-preview"
              type="button"
              onClick={handleOpenDocs}
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-[#958965] bg-[#255643] px-3 py-1.5 text-xs font-semibold text-[#FFFFFF] transition-colors hover:brightness-110"
            >
              <span>{t.viewDetail}</span>
            </button>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-[#255643]/60 bg-[#255643] p-6 text-white shadow-lg sm:p-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#255643]/30 bg-[#255643]/10 px-2.5 py-1 text-xs font-semibold text-[#827D75]">
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
              className="font-serif inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#DDD6C9] px-5 py-3 text-sm font-bold text-[#255643] shadow-md transition-all hover:bg-[#DDD6C9] hover:brightness-95 md:w-auto"
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