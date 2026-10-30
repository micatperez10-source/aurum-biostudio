import React, { useCallback, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Calendar,
  Info,
  X,
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { useModalA11y } from '../hooks/useModalA11y';

interface AnalysisReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContact: () => void;
  lang: Language;
}

const OBSERVATIONS = {
  A: [42, 47, 51, 54, 58, 61, 65],
  B: [39, 44, 49, 53, 56, 60, 64, 67],
} as const;

const JITTER = {
  A: [-9, 6, -4, 9, 0, -7, 5],
  B: [-8, 7, -3, 8, 0, -6, 4, 6],
} as const;

const CHART = {
  width: 360,
  height: 224,
  left: 60,
  right: 340,
  top: 24,
  bottom: 164,
  max: 80,
  centers: {
    A: 135,
    B: 265,
  },
  ticks: [0, 20, 40, 60, 80],
} as const;

const scaleY = (value: number) =>
  CHART.bottom -
  (value / CHART.max) * (CHART.bottom - CHART.top);

export const AnalysisReportModal: React.FC<AnalysisReportModalProps> = ({
  isOpen,
  onClose,
  onContact,
  lang,
}) => {
  const t = TRANSLATIONS[lang].analysisReport;
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const skipFocusRestoreRef = useRef(false);

  const shouldRestoreFocus = useCallback(
    () => !skipFocusRestoreRef.current,
    [],
  );

  useModalA11y({
    isOpen,
    onClose,
    dialogRef,
    initialFocusRef: closeButtonRef,
    shouldRestoreFocus,
  });

  useEffect(() => {
    if (isOpen) {
      skipFocusRestoreRef.current = false;
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleContact = () => {
    skipFocusRestoreRef.current = true;
    onContact();
  };

  const groups = [
    {
      id: 'A',
      label: t.sample.conditionA,
      values: OBSERVATIONS.A,
      jitter: JITTER.A,
    },
    {
      id: 'B',
      label: t.sample.conditionB,
      values: OBSERVATIONS.B,
      jitter: JITTER.B,
    },
  ] as const;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#255643]/70 p-3 backdrop-blur-sm sm:p-6"
      onClick={onClose}
      role="presentation"
    >
      <div
        id="analysis-report-modal"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="analysis-report-title"
        aria-describedby="analysis-report-lead"
        tabIndex={-1}
        className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-[#E6E4DF] bg-[#DDD6C9] text-[#807D75] shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="shrink-0 border-b border-[#E6E4DF] bg-[#DDD6C9] px-5 py-5 sm:px-7 sm:py-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#827D75]">
                Aurum BioStudio
              </p>

              <h2
                id="analysis-report-title"
                className="mt-1 font-serif text-3xl font-bold tracking-tight text-[#3B5745] sm:text-4xl"
              >
                {t.title}
              </h2>

              <p
                id="analysis-report-lead"
                className="mt-2 font-serif text-lg font-normal italic leading-relaxed text-[#958965] sm:text-xl"
              >
                {t.lead}
              </p>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="shrink-0 cursor-pointer rounded-xl p-2.5 text-[#958965] transition-colors hover:bg-[#E6E4DF] hover:text-[#807D75]"
              aria-label={t.closeBtn}
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-4 inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-[#E6E4DF] bg-[#E6E4DF]/50 px-3 py-1.5 text-sm font-semibold text-[#827D75]">
            <Calendar
              className="h-4 w-4 shrink-0 text-[#255643]"
              aria-hidden="true"
            />
            <span>{t.price}</span>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-6 sm:px-7 sm:py-8">
          <div className="space-y-8">
            <section aria-labelledby="analysis-report-how">
              <h3
                id="analysis-report-how"
                className="font-serif text-2xl font-bold text-[#3B5745]"
              >
                {t.howTitle}
              </h3>

              <ol className="mt-3 space-y-4 text-base font-medium leading-relaxed text-[#807D75]">
                {t.howSteps.map((step, index) => (
                  <li key={step.title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#255643] text-xs font-bold text-[#255643]">
                      {index + 1}
                    </span>
                    <span>
                      <span className="block font-semibold text-[#3B5745]">
                        {step.title}
                      </span>
                      <span className="mt-0.5 block">{step.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </section>

            <div className="min-w-0 max-w-3xl">
              <figure
                className="overflow-hidden rounded-xl border border-[#BFA690] bg-[#E6E4DF] shadow-sm"
                aria-labelledby="analysis-report-sample-title"
                aria-describedby="analysis-report-figure-description"
              >
                <div className="border-b border-[#BFA690]/70 bg-[#DDD6C9] px-5 py-4">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#827D75]">
                    {t.sample.label}
                  </p>
                  <h3
                    id="analysis-report-sample-title"
                    className="mt-1 font-serif text-2xl font-bold leading-snug text-[#3B5745]"
                  >
                    {t.sample.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#827D75]">
                    {t.sample.subtitle}
                  </p>
                </div>

                <div className="divide-y divide-[#BFA690]/50">
                  <section className="px-5 py-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#827D75]">
                      {t.sample.questionLabel}
                    </p>
                    <p className="mt-1.5 font-serif text-lg font-semibold italic leading-snug text-[#3B5745]">
                      {t.sample.questionText}
                    </p>
                  </section>

                  <section className="px-5 py-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#827D75]">
                        {t.sample.visualizationLabel}
                      </p>
                      <span className="rounded-full border border-[#BFA690] bg-[#DDD6C9] px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-[#827D75]">
                        {t.sample.figureSimulatedLabel}
                      </span>
                    </div>

                    <p className="mt-2 text-sm font-semibold text-[#3B5745]">
                      {t.sample.figureTitle}
                    </p>

                    <svg
                      viewBox={`0 0 ${CHART.width} ${CHART.height}`}
                      role="img"
                      aria-label={t.sample.figureAlt}
                      className="mt-3 h-auto w-full"
                    >
                      <title>{t.sample.figureAlt}</title>
                      <desc>{t.sample.figureDescription}</desc>

                      {CHART.ticks.map((tick) => {
                        const y = scaleY(tick);

                        return (
                          <g key={tick}>
                            <line
                              x1={CHART.left}
                              x2={CHART.right}
                              y1={y}
                              y2={y}
                              stroke="#BFA690"
                              strokeOpacity="0.5"
                              strokeWidth="1"
                            />
                            <text
                              x={CHART.left - 8}
                              y={y + 3.5}
                              textAnchor="end"
                              fontSize="10"
                              fill="#827D75"
                            >
                              {tick}
                            </text>
                          </g>
                        );
                      })}

                      <line
                        x1={CHART.left}
                        x2={CHART.left}
                        y1={CHART.top}
                        y2={CHART.bottom}
                        stroke="#958965"
                        strokeWidth="1"
                      />

                      <text
                        x="16"
                        y={(CHART.top + CHART.bottom) / 2}
                        textAnchor="middle"
                        fontSize="10"
                        fill="#827D75"
                        transform={`rotate(-90 16 ${
                          (CHART.top + CHART.bottom) / 2
                        })`}
                      >
                        {t.sample.axisLabel}
                      </text>

                      {groups.map((group) => (
                        <g key={group.id}>
                          {group.values.map((value, index) => {
                            const x =
                              CHART.centers[group.id] +
                              group.jitter[index % group.jitter.length];
                            const y = scaleY(value);

                            return group.id === 'A' ? (
                              <circle
                                key={`${group.id}-${index}`}
                                cx={x}
                                cy={y}
                                r="4"
                                fill="#255643"
                                stroke="#DDD6C9"
                                strokeWidth="1.2"
                              />
                            ) : (
                              <rect
                                key={`${group.id}-${index}`}
                                x={x - 3.6}
                                y={y - 3.6}
                                width="7.2"
                                height="7.2"
                                fill="#958965"
                                stroke="#3B5745"
                                strokeWidth="1"
                              />
                            );
                          })}

                          {group.id === 'A' ? (
                            <circle
                              cx={CHART.centers[group.id]}
                              cy="188"
                              r="4"
                              fill="#255643"
                              aria-hidden="true"
                            />
                          ) : (
                            <rect
                              x={CHART.centers[group.id] - 3.6}
                              y="184.4"
                              width="7.2"
                              height="7.2"
                              fill="#958965"
                              stroke="#3B5745"
                              strokeWidth="1"
                              aria-hidden="true"
                            />
                          )}

                          <text
                            x={CHART.centers[group.id] + 10}
                            y="193"
                            fontSize="11"
                            fill="#807D75"
                          >
                            {group.label}
                          </text>
                        </g>
                      ))}
                    </svg>

                    <p
                      id="analysis-report-figure-description"
                      className="mt-2 text-xs leading-relaxed text-[#827D75]"
                    >
                      {t.sample.figureDescription}
                    </p>
                  </section>

                  <section className="px-5 py-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#827D75]">
                      {t.sample.interpretationLabel}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#807D75]">
                      {t.sample.interpretationText}
                    </p>
                  </section>

                  <section className="px-5 py-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#827D75]">
                      {t.sample.methodsLabel}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#807D75]">
                      {t.sample.methodsText}
                    </p>
                  </section>
                </div>

                <figcaption className="flex items-start gap-2 border-t border-[#BFA690]/70 bg-[#DDD6C9] px-5 py-3 text-xs leading-relaxed text-[#827D75]">
                  <Info
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#255643]"
                    aria-hidden="true"
                  />
                  <span>{t.sample.disclaimer}</span>
                </figcaption>
              </figure>
            </div>

            <section aria-labelledby="analysis-report-tools">
              <h3
                id="analysis-report-tools"
                className="font-serif text-2xl font-bold text-[#3B5745]"
              >
                {t.toolsTitle}
              </h3>

              <ul className="mt-3 space-y-3 text-base leading-relaxed text-[#807D75]">
                {t.tools.map((tool) => (
                  <li
                    key={tool.name}
                    className="flex flex-wrap items-baseline gap-x-2 gap-y-1"
                  >
                    <span className="rounded-full border border-[#E6E4DF] bg-[#E6E4DF]/60 px-2.5 py-0.5 font-mono text-xs font-semibold text-[#255643]">
                      {tool.name}
                    </span>
                    <span className="font-medium">{tool.text}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-3 text-sm leading-relaxed text-[#827D75] sm:text-base">
                {t.toolsNote}
              </p>
            </section>

            <section aria-labelledby="analysis-report-scope">
              <h3
                id="analysis-report-scope"
                className="font-serif text-2xl font-bold text-[#3B5745]"
              >
                {t.scopeTitle}
              </h3>

              <div className="mt-3 flex items-start gap-2.5 rounded-xl border border-[#E6E4DF] bg-[#E6E4DF]/40 p-4 text-sm font-medium leading-relaxed text-[#827D75] sm:text-base">
                <Info
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#255643]"
                  aria-hidden="true"
                />
                <span>
                  <span className="block">{t.scopeText}</span>
                  <span className="mt-2 block font-serif italic text-[#958965]">
                    {t.scopeNote}
                  </span>
                </span>
              </div>
            </section>
          </div>
        </div>

        <footer className="shrink-0 border-t border-[#E6E4DF] bg-[#DDD6C9] px-5 py-4 sm:px-7 sm:py-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-sm leading-relaxed text-[#827D75]">
              {t.ctaNote}
            </p>

            <button
              type="button"
              onClick={handleContact}
              className="inline-flex w-full shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#255643] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-colors hover:brightness-110 sm:w-auto"
            >
              <span>{t.ctaBtn}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};
