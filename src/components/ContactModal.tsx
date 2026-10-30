import React, { useRef, useState } from 'react';
import {
  X,
  Mail,
  Copy,
  Check,
  Send,
  ShieldCheck,
  Sparkles,
  Calendar,
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import {
  CONTACT_EMAIL,
  CALENDAR_URL,
  buildPlainMailto,
} from '../data/contact';
import { useModalA11y } from '../hooks/useModalA11y';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  serviceInterestId?: string | null;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  lang,
  serviceInterestId,
}) => {
  const [copied, setCopied] = useState(false);
  const [nameCompany, setNameCompany] = useState('');
  const [message, setMessage] = useState('');
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const translations = TRANSLATIONS[lang];
  const t = translations.contactModal;
  const targetEmail = CONTACT_EMAIL;
  const calendarLinkLabel = translations.contact.calendarLinkLabel;
  const serviceName = serviceInterestId
    ? translations.services.packages.find(
        (pkg) => pkg.id === serviceInterestId,
      )?.title
    : undefined;
  const serviceLine = serviceName
    ? `${
        lang === 'es' ? 'Servicio de interés' : 'Service of interest'
      }: ${serviceName}\n\n`
    : '';

  useModalA11y({
    isOpen,
    onClose,
    dialogRef,
    initialFocusRef: closeButtonRef,
  });

  if (!isOpen) {
    return null;
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(targetEmail);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleSendMail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      lang === 'es'
        ? `Consulta sobre análisis de datos - Aurum BioStudio (${nameCompany || 'Consulta'})`
        : `Biological data analysis inquiry - Aurum BioStudio (${nameCompany || 'Inquiry'})`,
    );

    const bodyText =
      lang === 'es'
        ? `Hola Micaela / Aurum BioStudio,

${serviceLine}Nombre o institución: ${nameCompany || '[Nombre o institución]'}

Necesito ayuda con los siguientes datos o análisis:
${
  message ||
  'Me gustaría agendar una llamada de 20 minutos para conversar sobre mi proyecto.'
}

Para reservar el horario de la llamada, elegí día y hora disponible en el calendario:
${CALENDAR_URL}

Saludos,
${nameCompany || '[Nombre]'}`
        : `Hello Micaela / Aurum BioStudio,

${serviceLine}Name or institution: ${nameCompany || '[Name or institution]'}

I need help with the following data or analysis:
${
  message ||
  'I would like to schedule a 20-minute call to discuss my project.'
}

To reserve a call slot, pick an available date and time in the calendar:
${CALENDAR_URL}

Best regards,
${nameCompany || '[Name]'}`;

    const body = encodeURIComponent(bodyText);

    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#255643]/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#E6E4DF] bg-[#DDD6C9] p-6 text-base text-[#807D75] shadow-2xl sm:p-10"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 cursor-pointer rounded-lg p-2 text-[#958965] transition-colors hover:bg-[#DDD6C9] hover:brightness-95 hover:text-[#807D75]"
          aria-label={t.closeBtn}
        >
          <X className="h-6 w-6" aria-hidden="true" />
        </button>

        <div className="pr-10">
          <div className="font-serif mb-3 inline-flex items-center gap-2 rounded-full border border-[#255643] bg-[#255643]/40 px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-[#255643]">
            <Sparkles
              className="h-4 w-4 text-[#255643]"
              aria-hidden="true"
            />
            <span>Aurum BioStudio</span>
          </div>

          <h3
            id="modal-title"
            className="font-serif text-2xl font-bold tracking-tight text-[#3B5745] sm:text-3xl"
          >
            {t.title}
          </h3>

          <p className="mt-2 text-base leading-relaxed text-[#958965] sm:text-lg">
            {t.subtitle}
          </p>

          {serviceName && (
            <div className="mt-4 inline-flex flex-wrap items-center gap-2 rounded-full border border-[#255643] bg-[#E6E4DF]/60 px-3.5 py-1.5 text-sm font-semibold text-[#255643]">
              <span>{t.serviceInterestLabel}:</span>
              <span>{serviceName}</span>
            </div>
          )}
        </div>

        <div className="mt-6 rounded-xl border border-[#E6E4DF] bg-[#DDD6C9] p-5">
          <span className="mb-2 block text-base font-semibold text-[#827D75]">
            {t.emailLabel}
          </span>

          <div className="flex flex-wrap items-center justify-between gap-3 sm:flex-nowrap">
            <a
              href={buildPlainMailto(lang)}
              className="font-serif break-all text-base font-bold text-[#255643] hover:underline sm:text-lg"
            >
              {targetEmail}
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg border border-[#E6E4DF] bg-[#DDD6C9] px-3 py-2 text-sm font-semibold text-[#807D75] shadow-sm transition-colors hover:bg-[#DDD6C9] hover:brightness-95"
            >
              {copied ? (
                <Check
                  className="h-4 w-4 text-[#255643]"
                  aria-hidden="true"
                />
              ) : (
                <Copy className="h-4 w-4" aria-hidden="true" />
              )}

              <span>{copied ? t.copiedEmail : t.copyEmail}</span>
            </button>
          </div>

          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif mt-4 inline-flex items-center gap-1.5 text-base font-semibold text-[#255643] hover:underline"
          >
            <Calendar className="h-4 w-4 shrink-0" aria-hidden="true" />

            <span>{calendarLinkLabel}</span>
          </a>
        </div>

        <form onSubmit={handleSendMail} className="mt-6 space-y-4">
          <span className="block text-sm font-bold uppercase tracking-wider text-[#827D75]">
            {t.formTitle}
          </span>

          <div>
            <label
              htmlFor="modal-name-company"
              className="mb-1.5 block text-base font-semibold text-[#807D75]"
            >
              {t.nameLabel}
            </label>

            <input
              id="modal-name-company"
              type="text"
              value={nameCompany}
              onChange={(event) => setNameCompany(event.target.value)}
              placeholder={t.namePlaceholder}
              className="w-full rounded-xl border border-[#E6E4DF] bg-[#DDD6C9] px-3.5 py-3 text-base text-[#807D75] placeholder-[#827D75] transition-colors focus:border-[#255643] focus:bg-[#DDD6C9] focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="modal-message"
              className="mb-1.5 block text-base font-semibold text-[#807D75]"
            >
              {t.messageLabel}
            </label>

            <textarea
              id="modal-message"
              rows={5}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder={t.messagePlaceholder}
              className="w-full resize-y rounded-xl border border-[#E6E4DF] bg-[#DDD6C9] px-3.5 py-3 text-base leading-relaxed text-[#807D75] placeholder-[#827D75] transition-colors focus:border-[#255643] focus:bg-[#DDD6C9] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#255643] px-4 py-3.5 text-base font-bold text-white shadow-sm transition-colors hover:brightness-110"
          >
            <Send className="h-5 w-5" aria-hidden="true" />
            <span>{t.sendBtn}</span>
          </button>
        </form>

        <div className="mt-5 flex items-start gap-2.5 border-t border-[#E6E4DF] pt-4 text-sm leading-relaxed text-[#827D75]">
          <ShieldCheck
            className="mt-0.5 h-5 w-5 shrink-0 text-[#255643]"
            aria-hidden="true"
          />
          <span>{t.securityNote}</span>
        </div>
      </div>
    </div>
  );
};