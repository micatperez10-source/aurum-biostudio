import React, { useEffect, useState } from 'react';
import {
  X,
  Mail,
  Copy,
  Check,
  Send,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [copied, setCopied] = useState(false);
  const [nameCompany, setNameCompany] = useState('');
  const [message, setMessage] = useState('');

  const t = TRANSLATIONS[lang].contactModal;
  const targetEmail = TRANSLATIONS[lang].contact.email;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

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
        ? `Consulta sobre análisis de datos - BioIT Clarity (${nameCompany || 'Consulta'})`
        : `Biological data analysis inquiry - BioIT Clarity (${nameCompany || 'Inquiry'})`,
    );

    const bodyText =
      lang === 'es'
        ? `Hola Micaela / BioIT Clarity,

Nombre o institución: ${nameCompany || '[Nombre o institución]'}

Necesito ayuda con los siguientes datos o análisis:
${
  message ||
  'Me gustaría agendar una llamada de 20 minutos para conversar sobre mi proyecto.'
}

Saludos,
${nameCompany || '[Nombre]'}`
        : `Hello Micaela / BioIT Clarity,

Name or institution: ${nameCompany || '[Name or institution]'}

I need help with the following data or analysis:
${
  message ||
  'I would like to schedule a 20-minute call to discuss my project.'
}

Best regards,
${nameCompany || '[Name]'}`;

    const body = encodeURIComponent(bodyText);

    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#255643]/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-[#E6E4DF] bg-[#DDD6C9] p-6 text-[#807D75] shadow-2xl sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 cursor-pointer rounded-lg p-2 text-[#958965] transition-colors hover:bg-[#DDD6C9] hover:brightness-95 hover:text-[#807D75]"
          aria-label={t.closeBtn}
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="pr-8">
          <div className="font-serif mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#255643] bg-[#255643]/40 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-[#255643]">
            <Sparkles
              className="h-3.5 w-3.5 text-[#255643]"
              aria-hidden="true"
            />
            <span>BioIT Clarity</span>
          </div>

          <h3
            id="modal-title"
            className="font-serif text-xl font-bold tracking-tight text-[#3B5745] sm:text-2xl"
          >
            {t.title}
          </h3>

          <p className="mt-1 text-sm text-[#958965]">{t.subtitle}</p>
        </div>

        <div className="mt-5 rounded-xl border border-[#E6E4DF] bg-[#DDD6C9] p-4">
          <span className="mb-1 block text-sm font-semibold text-[#827D75]">
            {t.emailLabel}
          </span>

          <div className="flex flex-wrap items-center justify-between gap-2 sm:flex-nowrap">
            <a
              href={`mailto:${targetEmail}`}
              className="font-serif break-all text-sm font-bold text-[#255643] hover:underline"
            >
              {targetEmail}
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-lg border border-[#E6E4DF] bg-[#DDD6C9] px-2.5 py-1.5 text-xs font-semibold text-[#807D75] shadow-sm transition-colors hover:bg-[#DDD6C9] hover:brightness-95"
            >
              {copied ? (
                <Check
                  className="h-3.5 w-3.5 text-[#255643]"
                  aria-hidden="true"
                />
              ) : (
                <Copy className="h-3.5 w-3.5" aria-hidden="true" />
              )}

              <span>{copied ? t.copiedEmail : t.copyEmail}</span>
            </button>
          </div>
        </div>

        <form onSubmit={handleSendMail} className="mt-5 space-y-3.5">
          <span className="block text-xs font-bold uppercase tracking-wider text-[#827D75]">
            {t.formTitle}
          </span>

          <div>
            <label
              htmlFor="modal-name-company"
              className="mb-1 block text-sm font-medium text-[#807D75]"
            >
              {t.nameLabel}
            </label>

            <input
              id="modal-name-company"
              type="text"
              value={nameCompany}
              onChange={(event) => setNameCompany(event.target.value)}
              placeholder={t.namePlaceholder}
              className="w-full rounded-lg border border-[#E6E4DF] bg-[#DDD6C9] px-3 py-2 text-sm text-[#807D75] placeholder-[#827D75] transition-colors focus:border-[#255643] focus:bg-[#DDD6C9] focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="modal-message"
              className="mb-1 block text-sm font-medium text-[#807D75]"
            >
              {t.messageLabel}
            </label>

            <textarea
              id="modal-message"
              rows={4}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder={t.messagePlaceholder}
              className="w-full resize-y rounded-lg border border-[#E6E4DF] bg-[#DDD6C9] px-3 py-2 text-sm text-[#807D75] placeholder-[#827D75] transition-colors focus:border-[#255643] focus:bg-[#DDD6C9] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#255643] px-4 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:brightness-110"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            <span>{t.sendBtn}</span>
          </button>
        </form>

        <div className="mt-4 flex items-start gap-2 border-t border-[#E6E4DF] pt-3 text-xs text-[#827D75]">
          <ShieldCheck
            className="mt-0.5 h-4 w-4 shrink-0 text-[#255643]"
            aria-hidden="true"
          />
          <span>{t.securityNote}</span>
        </div>
      </div>
    </div>
  );
};