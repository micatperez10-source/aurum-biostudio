import React, { useEffect, useRef, useState } from 'react';
import {
  X,
  Copy,
  Check,
  Send,
  ShieldCheck,
  Sparkles,
  Calendar,
  AlertCircle,
  CheckCircle2,
  Info,
  Loader2,
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import {
  CONTACT_EMAIL,
  CALENDAR_URL,
  FORMSPREE_ENDPOINT,
  buildPlainMailto,
} from '../data/contact';
import { useModalA11y } from '../hooks/useModalA11y';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  serviceInterestId?: string | null;
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error' | 'uncertain';

interface FieldErrors {
  email?: string;
  message?: string;
}

interface FormspreeResponse {
  ok?: boolean;
  errors?: Array<{ field?: string }>;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  lang,
  serviceInterestId,
}) => {
  const [copied, setCopied] = useState(false);
  const [nameCompany, setNameCompany] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [announcement, setAnnouncement] = useState('');
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);
  const requestIdRef = useRef(0);

  const translations = TRANSLATIONS[lang];
  const t = translations.contactModal;
  const targetEmail = CONTACT_EMAIL;
  const calendarLinkLabel = translations.contact.calendarLinkLabel;
  const serviceName = serviceInterestId
    ? translations.services.packages.find(
        (pkg) => pkg.id === serviceInterestId,
      )?.title
    : undefined;
  const isSubmitting = status === 'submitting';

  useModalA11y({
    isOpen,
    onClose,
    dialogRef,
    initialFocusRef: closeButtonRef,
  });

  useEffect(() => {
    requestIdRef.current += 1;
    setStatus('idle');
    setFieldErrors({});
    setAnnouncement('');
    setCopied(false);
  }, [isOpen]);

  useEffect(
    () => () => {
      requestIdRef.current += 1;
    },
    [],
  );

  useEffect(() => {
    if (
      status === 'success' ||
      status === 'error' ||
      status === 'uncertain'
    ) {
      feedbackRef.current?.focus();
    }
  }, [status]);

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const trimmedName = nameCompany.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    const nextErrors: FieldErrors = {};

    if (!EMAIL_PATTERN.test(trimmedEmail)) {
      nextErrors.email = t.emailValidationError;
    }

    if (!trimmedMessage) {
      nextErrors.message = t.messageValidationError;
    }

    if (nextErrors.email || nextErrors.message) {
      setFieldErrors(nextErrors);
      setStatus('idle');
      setAnnouncement(
        [nextErrors.email, nextErrors.message].filter(Boolean).join(' '),
      );

      if (nextErrors.email) {
        emailInputRef.current?.focus();
      } else if (nextErrors.message) {
        messageInputRef.current?.focus();
      }

      return;
    }

    setFieldErrors({});
    setStatus('submitting');
    setAnnouncement(t.sendingBtn);

    const requestId = requestIdRef.current;

    const formData = new FormData();
    formData.append('name', trimmedName);
    formData.append('email', trimmedEmail);
    formData.append('message', trimmedMessage);

    if (serviceName) {
      formData.append('service', serviceName);
    }

    const honeypot = formRef.current?.querySelector<HTMLInputElement>(
      'input[name="_gotcha"]',
    );
    formData.append('_gotcha', honeypot?.value ?? '');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (requestId !== requestIdRef.current) {
        return;
      }

      let result: FormspreeResponse | null = null;

      try {
        result = (await response.json()) as FormspreeResponse;
      } catch {
        result = null;
      }

      if (requestId !== requestIdRef.current) {
        return;
      }

      if (response.ok && result?.ok === true) {
        setNameCompany('');
        setEmail('');
        setMessage('');
        setFieldErrors({});
        setStatus('success');
        setAnnouncement(t.successMessage);
        return;
      }

      if (!response.ok) {
        const serverErrors: FieldErrors = {};

        if (Array.isArray(result?.errors)) {
          result.errors.forEach((error) => {
            if (error.field === 'email') {
              serverErrors.email = t.emailValidationError;
            }

            if (error.field === 'message') {
              serverErrors.message = t.messageValidationError;
            }
          });
        }

        setFieldErrors(serverErrors);
        setStatus('error');
        setAnnouncement(t.errorMessage);
        return;
      }

      setStatus('uncertain');
      setAnnouncement(t.uncertainMessage);
    } catch {
      if (requestId !== requestIdRef.current) {
        return;
      }

      setStatus('error');
      setAnnouncement(t.errorMessage);
    }
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

        <div
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        >
          {announcement}
        </div>

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

        {status === 'success' ? (
          <div
            ref={feedbackRef}
            tabIndex={-1}
            role="group"
            aria-labelledby="contact-success-message"
            className="mt-6 flex items-start gap-3 rounded-xl border border-[#255643]/40 bg-[#E6E4DF]/60 p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#255643] focus-visible:ring-offset-2 focus-visible:ring-offset-[#DDD6C9]"
          >
            <CheckCircle2
              className="mt-0.5 h-5 w-5 shrink-0 text-[#255643]"
              aria-hidden="true"
            />

            <p
              id="contact-success-message"
              className="text-base font-semibold leading-relaxed text-[#3B5745]"
            >
              {t.successMessage}
            </p>
          </div>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            className="mt-6 rounded-2xl border border-[#BFA690]/60 bg-[#E6E4DF]/50 p-5 shadow-sm sm:p-6"
          >
            <div className="flex items-start gap-3 border-b border-[#BFA690]/40 pb-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#255643] text-[#E6E4DF] shadow-sm">
                <Send className="h-5 w-5" aria-hidden="true" />
              </span>

              <div className="min-w-0">
                <span className="font-serif block text-2xl font-bold text-[#3B5745]">
                  {t.formTitle}
                </span>

                <p className="mt-1 text-sm leading-relaxed text-[#827D75]">
                  {t.formHint}
                </p>
              </div>
            </div>

            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 h-0 w-0 overflow-hidden opacity-0"
            />

            <div className="mt-4 space-y-4">
              <div>
                <label
                  htmlFor="modal-name-company"
                  className="mb-1.5 block text-base font-semibold text-[#3B5745]"
                >
                  {t.nameLabel}
                </label>

                <input
                  id="modal-name-company"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={nameCompany}
                  onChange={(event) => setNameCompany(event.target.value)}
                  placeholder={t.namePlaceholder}
                  className="w-full rounded-xl border border-[#BFA690]/50 bg-[#DDD6C9] px-3.5 py-3 text-base text-[#807D75] placeholder-[#958965] transition-colors hover:border-[#BFA690] focus:border-[#255643] focus:bg-[#DDD6C9] focus:outline-none focus:ring-2 focus:ring-[#255643]/15"
                />
              </div>

              <div>
                <label
                  htmlFor="modal-email"
                  className="mb-1.5 block text-base font-semibold text-[#3B5745]"
                >
                  {t.emailFieldLabel}
                  <span
                    className="ml-0.5 text-[#8B3A2E]"
                    aria-hidden="true"
                  >
                    *
                  </span>
                </label>

                <input
                  ref={emailInputRef}
                  id="modal-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  required
                  aria-required="true"
                  aria-invalid={fieldErrors.email ? true : undefined}
                  aria-describedby={
                    fieldErrors.email ? 'contact-email-error' : undefined
                  }
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={t.emailPlaceholder}
                  className="w-full rounded-xl border border-[#BFA690]/50 bg-[#DDD6C9] px-3.5 py-3 text-base text-[#807D75] placeholder-[#958965] transition-colors hover:border-[#BFA690] focus:border-[#255643] focus:bg-[#DDD6C9] focus:outline-none focus:ring-2 focus:ring-[#255643]/15"
                />

                {fieldErrors.email && (
                  <p
                    id="contact-email-error"
                    className="mt-1.5 flex items-start gap-1.5 text-sm font-medium text-[#8B3A2E]"
                  >
                    <AlertCircle
                      className="mt-0.5 h-4 w-4 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{fieldErrors.email}</span>
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="modal-message"
                  className="mb-1.5 block text-base font-semibold text-[#3B5745]"
                >
                  {t.messageLabel}
                  <span
                    className="ml-0.5 text-[#8B3A2E]"
                    aria-hidden="true"
                  >
                    *
                  </span>
                </label>

                <textarea
                  ref={messageInputRef}
                  id="modal-message"
                  name="message"
                  rows={5}
                  required
                  aria-required="true"
                  aria-invalid={fieldErrors.message ? true : undefined}
                  aria-describedby={
                    fieldErrors.message ? 'contact-message-error' : undefined
                  }
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder={t.messagePlaceholder}
                  className="w-full resize-y rounded-xl border border-[#BFA690]/50 bg-[#DDD6C9] px-3.5 py-3 text-base leading-relaxed text-[#807D75] placeholder-[#958965] transition-colors hover:border-[#BFA690] focus:border-[#255643] focus:bg-[#DDD6C9] focus:outline-none focus:ring-2 focus:ring-[#255643]/15"
                />

                {fieldErrors.message && (
                  <p
                    id="contact-message-error"
                    className="mt-1.5 flex items-start gap-1.5 text-sm font-medium text-[#8B3A2E]"
                  >
                    <AlertCircle
                      className="mt-0.5 h-4 w-4 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{fieldErrors.message}</span>
                  </p>
                )}
              </div>

              <p className="text-xs font-medium text-[#827D75]">
                {t.requiredNote}
              </p>
            </div>

            {(status === 'error' || status === 'uncertain') && (
              <div
                ref={feedbackRef}
                tabIndex={-1}
                className="mt-4 flex items-start gap-2.5 rounded-xl border border-[#8B3A2E]/40 bg-[#8B3A2E]/5 p-4 text-sm font-medium leading-relaxed text-[#8B3A2E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B3A2E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#DDD6C9]"
              >
                <AlertCircle
                  className="mt-0.5 h-4 w-4 shrink-0"
                  aria-hidden="true"
                />

                <p>
                  {status === 'uncertain'
                    ? t.uncertainMessage
                    : t.errorMessage}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
              className="mt-4 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#255643] px-4 py-3.5 text-base font-bold text-white shadow-md transition-colors hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:brightness-100"
            >
              {isSubmitting ? (
                <Loader2
                  className="h-5 w-5 animate-spin"
                  aria-hidden="true"
                />
              ) : (
                <Send className="h-5 w-5" aria-hidden="true" />
              )}

              <span>{isSubmitting ? t.sendingBtn : t.sendBtn}</span>
            </button>
          </form>
        )}

        <div className="mt-5 space-y-2 border-t border-[#E6E4DF] pt-4 text-sm leading-relaxed text-[#827D75]">
          <p className="flex items-start gap-2.5">
            <ShieldCheck
              className="mt-0.5 h-4 w-4 shrink-0 text-[#255643]"
              aria-hidden="true"
            />
            <span>{t.privacyNote}</span>
          </p>

          <p className="flex items-start gap-2.5">
            <Info
              className="mt-0.5 h-4 w-4 shrink-0 text-[#255643]"
              aria-hidden="true"
            />
            <span>{t.formspreeNote}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
