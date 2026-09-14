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
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1F1D]/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-[#E6E4DF] bg-[#FFFFFF] p-6 text-[#1F1F1F] shadow-2xl sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 cursor-pointer rounded-lg p-2 text-[#5A5A5A] transition-colors hover:bg-[#F4F2EE] hover:text-[#1F1F1F]"
          aria-label={t.closeBtn}
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="pr-8">
          <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#D4E8E1] bg-[#D4E8E1]/40 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-[#2F3E3A]">
            <Sparkles
              className="h-3.5 w-3.5 text-[#2F3E3A]"
              aria-hidden="true"
            />
            <span>BioIT Clarity</span>
          </div>

          <h3
            id="modal-title"
            className="font-serif text-xl font-bold tracking-tight text-[#1F1F1F] sm:text-2xl"
          >
            {t.title}
          </h3>

          <p className="mt-1 text-sm text-[#5A5A5A]">{t.subtitle}</p>
        </div>

        <div className="mt-5 rounded-xl border border-[#E6E4DF] bg-[#F4F2EE] p-4">
          <span className="mb-1 block text-xs font-semibold text-[#5A5A5A]">
            {t.emailLabel}
          </span>

          <div className="flex flex-wrap items-center justify-between gap-2 sm:flex-nowrap">
            <a
              href={`mailto:${targetEmail}`}
              className="break-all text-sm font-bold text-[#2F3E3A] hover:underline"
            >
              {targetEmail}
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-lg border border-[#E6E4DF] bg-[#FFFFFF] px-2.5 py-1.5 text-xs font-semibold text-[#1F1F1F] shadow-sm transition-colors hover:bg-[#E6E4DF]"
            >
              {copied ? (
                <Check
                  className="h-3.5 w-3.5 text-emerald-600"
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
          <span className="block text-xs font-bold uppercase tracking-wider text-[#5A5A5A]">
            {t.formTitle}
          </span>

          <div>
            <label
              htmlFor="modal-name-company"
              className="mb-1 block text-xs font-medium text-[#1F1F1F]"
            >
              {t.nameLabel}
            </label>

            <input
              id="modal-name-company"
              type="text"
              value={nameCompany}
              onChange={(event) => setNameCompany(event.target.value)}
              placeholder={t.namePlaceholder}
              className="w-full rounded-lg border border-[#E6E4DF] bg-[#F4F2EE] px-3 py-2 text-sm text-[#1F1F1F] placeholder-[#5A5A5A] transition-colors focus:border-[#2F3E3A] focus:bg-[#FFFFFF] focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="modal-message"
              className="mb-1 block text-xs font-medium text-[#1F1F1F]"
            >
              {t.messageLabel}
            </label>

            <textarea
              id="modal-message"
              rows={4}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder={t.messagePlaceholder}
              className="w-full resize-y rounded-lg border border-[#E6E4DF] bg-[#F4F2EE] px-3 py-2 text-sm text-[#1F1F1F] placeholder-[#5A5A5A] transition-colors focus:border-[#2F3E3A] focus:bg-[#FFFFFF] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#2F3E3A] px-4 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#1A1F1D]"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            <span>{t.sendBtn}</span>
          </button>
        </form>

        <div className="mt-4 flex items-start gap-2 border-t border-[#E6E4DF] pt-3 text-xs text-[#5A5A5A]">
          <ShieldCheck
            className="mt-0.5 h-4 w-4 shrink-0 text-[#2F3E3A]"
            aria-hidden="true"
          />
          <span>{t.securityNote}</span>
        </div>
      </div>
    </div>
  );
};