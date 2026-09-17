import React, { useState } from 'react';
import {
  Calendar,
  Mail,
  ExternalLink,
  Clock,
  Copy,
  Check,
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [copied, setCopied] = useState(false);

  const scheduleCallUrl = t.contact.calendarUrl;

  const consultationLabel =
    lang === 'en'
      ? 'Free initial consultation'
      : 'Consulta inicial gratuita';

  const copiedLabel =
    lang === 'en'
      ? 'Email copied to clipboard!'
      : '¡Email copiado al portapapeles!';

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(t.contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="bg-[#DDD6C9] py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#E6E4DF] bg-[#DDD6C9] p-8 shadow-md sm:p-14">
          <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-[#255643]/30 blur-2xl" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <div className="font-serif mb-6 inline-flex items-center gap-2 rounded-full border border-[#E6E4DF] bg-[#DDD6C9] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#255643]">
              <Calendar
                className="h-3.5 w-3.5 text-[#255643]"
                aria-hidden="true"
              />
              <span>{consultationLabel}</span>
            </div>

            <h2 className="font-serif text-3xl font-bold tracking-tight text-[#3B5745] sm:text-4xl md:text-5xl">
              {t.contact.title}
            </h2>

            <p className="mt-5 font-serif font-normal italic text-base leading-relaxed text-[#958965] sm:text-lg">
              {t.contact.text}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10">
              <a
                id="book-call-btn"
                href={scheduleCallUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full transform cursor-pointer items-center justify-center gap-3 rounded-xl bg-[#255643] px-8 py-4 text-base font-semibold text-[#E6E4DF] shadow-md transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg sm:w-auto"
              >
                <Calendar
                  className="h-5 w-5 text-[#958965]"
                  aria-hidden="true"
                />
                <span>{t.contact.button}</span>
                <ExternalLink
                  className="h-4 w-4 text-[#958965]/70"
                  aria-hidden="true"
                />
              </a>

              <p className="flex items-center justify-center gap-1.5 font-sans text-xs text-[#827D75] sm:text-sm">
                <Clock
                  className="h-4 w-4 text-[#BFA690]"
                  aria-hidden="true"
                />
                <span>{t.contact.note}</span>
              </p>
            </div>

            <div className="mt-10 border-t border-[#E6E4DF] pt-8 text-xs text-[#827D75] sm:text-sm">
              <p className="mb-3 font-medium">{t.contact.emailLabel}</p>

              <div className="inline-flex max-w-full items-center gap-2 rounded-xl border border-[#E6E4DF] bg-[#DDD6C9] px-4 py-2 font-mono text-sm text-[#807D75]">
                <Mail
                  className="h-3.5 w-3.5 shrink-0 text-[#255643]"
                  aria-hidden="true"
                />

                <a
                  href={`mailto:${t.contact.email}`}
                  className="font-serif break-all font-semibold text-[#255643] hover:underline"
                >
                  {t.contact.email}
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="ml-1 rounded p-1 text-[#958965] transition-colors hover:bg-[#DDD6C9] hover:brightness-95 hover:text-[#807D75]"
                  title={lang === 'en' ? 'Copy email' : 'Copiar email'}
                  aria-label={lang === 'en' ? 'Copy email' : 'Copiar email'}
                >
                  {copied ? (
                    <Check
                      className="h-3.5 w-3.5 text-[#255643]"
                      aria-hidden="true"
                    />
                  ) : (
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                  )}
                </button>
              </div>

              {copied && (
                <span className="font-serif mt-1.5 block text-xs font-semibold text-[#255643]">
                  {copiedLabel}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};