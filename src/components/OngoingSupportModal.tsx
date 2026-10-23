import React, { useCallback, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Calendar,
  Check,
  Info,
  X,
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { useModalA11y } from '../hooks/useModalA11y';

interface OngoingSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContact: () => void;
  lang: Language;
}

export const OngoingSupportModal: React.FC<OngoingSupportModalProps> = ({
  isOpen,
  onClose,
  onContact,
  lang,
}) => {
  const t = TRANSLATIONS[lang].ongoingSupport;
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#255643]/70 p-3 backdrop-blur-sm sm:p-6"
      onClick={onClose}
      role="presentation"
    >
      <div
        id="ongoing-support-modal"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="ongoing-support-title"
        aria-describedby="ongoing-support-lead"
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
                id="ongoing-support-title"
                className="mt-1 font-serif text-3xl font-bold tracking-tight text-[#3B5745] sm:text-4xl"
              >
                {t.title}
              </h2>

              <p
                id="ongoing-support-lead"
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
          <p className="max-w-3xl text-base leading-relaxed text-[#807D75] sm:text-lg">
            {t.description}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-10">
            <div className="order-2 min-w-0 space-y-8 lg:order-1">
              <section aria-labelledby="ongoing-support-for-you">
                <h3
                  id="ongoing-support-for-you"
                  className="font-serif text-2xl font-bold text-[#3B5745]"
                >
                  {t.forYouTitle}
                </h3>

                <ul className="mt-3 space-y-3 text-base font-medium leading-relaxed text-[#807D75]">
                  {t.forYou.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check
                        className="mt-1 h-4 w-4 shrink-0 text-[#255643]"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="ongoing-support-receive">
                <h3
                  id="ongoing-support-receive"
                  className="font-serif text-2xl font-bold text-[#3B5745]"
                >
                  {t.receiveTitle}
                </h3>

                <ul className="mt-3 space-y-3 text-base font-medium leading-relaxed text-[#807D75]">
                  {t.receive.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check
                        className="mt-1 h-4 w-4 shrink-0 text-[#255643]"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="ongoing-support-how">
                <h3
                  id="ongoing-support-how"
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

              <section aria-labelledby="ongoing-support-tools">
                <h3
                  id="ongoing-support-tools"
                  className="font-serif text-2xl font-bold text-[#3B5745]"
                >
                  {t.toolsTitle}
                </h3>

                <p className="mt-2 text-base leading-relaxed text-[#807D75]">
                  {t.toolsIntro}
                </p>

                <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {t.tools.map((tool) => (
                    <li
                      key={tool.name}
                      className="rounded-xl border border-[#E6E4DF] bg-[#E6E4DF]/40 px-4 py-3.5"
                    >
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#255643]">
                        {tool.name}
                      </span>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#807D75]">
                        {tool.text}
                      </p>
                    </li>
                  ))}
                </ul>

                <p className="mt-4 border-l-2 border-[#BFA690] pl-4 text-sm leading-relaxed text-[#827D75]">
                  {t.toolsNote}
                </p>
              </section>

              <section aria-labelledby="ongoing-support-scope">
                <h3
                  id="ongoing-support-scope"
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

            <div className="order-1 min-w-0 lg:order-2">
              <section
                aria-labelledby="ongoing-support-sample-title"
                className="overflow-hidden rounded-xl border border-[#BFA690] bg-[#E6E4DF] shadow-sm"
              >
                <div className="border-b border-[#BFA690]/70 bg-[#DDD6C9] px-5 py-4">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#827D75]">
                    {t.sample.label}
                  </p>
                  <h3
                    id="ongoing-support-sample-title"
                    className="mt-1 font-serif text-2xl font-bold leading-snug text-[#3B5745]"
                  >
                    {t.sample.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#827D75]">
                    {t.sample.intro}
                  </p>
                </div>

                <table className="hidden w-full table-fixed border-collapse text-left md:table">
                  <caption className="sr-only">
                    {t.sample.title}
                  </caption>
                  <thead>
                    <tr className="border-b border-[#BFA690]/70">
                      <th
                        scope="col"
                        className="w-1/2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#827D75]"
                      >
                        {t.sample.taskLabel}
                      </th>
                      <th
                        scope="col"
                        className="w-1/2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#827D75]"
                      >
                        {t.sample.outcomeLabel}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#BFA690]/50">
                    {t.sample.rows.map((row) => (
                      <tr key={row.task}>
                        <th
                          scope="row"
                          className="px-5 py-4 align-top text-sm font-semibold leading-relaxed text-[#3B5745]"
                        >
                          {row.task}
                        </th>
                        <td className="px-5 py-4 align-top text-sm leading-relaxed text-[#807D75]">
                          {row.outcome}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <dl className="divide-y divide-[#BFA690]/50 md:hidden">
                  {t.sample.rows.map((row) => (
                    <div key={row.task} className="px-5 py-4">
                      <dt className="text-xs font-bold uppercase tracking-wider text-[#827D75]">
                        {t.sample.taskLabel}
                      </dt>
                      <dd className="mt-1 text-sm font-semibold leading-relaxed text-[#3B5745]">
                        {row.task}
                      </dd>
                      <dt className="mt-3 text-xs font-bold uppercase tracking-wider text-[#827D75]">
                        {t.sample.outcomeLabel}
                      </dt>
                      <dd className="mt-1 text-sm leading-relaxed text-[#807D75]">
                        {row.outcome}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="flex items-start gap-2 border-t border-[#BFA690]/70 bg-[#DDD6C9] px-5 py-3 text-xs leading-relaxed text-[#827D75]">
                  <Info
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#255643]"
                    aria-hidden="true"
                  />
                  <p>{t.sample.disclaimer}</p>
                </div>
              </section>
            </div>
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
