import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface BackToTopProps {
  lang: Language;
}

const RING_RADIUS = 20.5;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

export const BackToTop: React.FC<BackToTopProps> = ({ lang }) => {
  const [progress, setProgress] = useState(0);

  const label = TRANSLATIONS[lang].footer.backToTop;

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress(
        scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0,
      );
    };

    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(update);
    };

    update();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <button
      id="back-to-top-btn"
      type="button"
      onClick={scrollToTop}
      aria-label={label}
      className="group fixed right-4 bottom-4 z-30 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#255643] text-[#E6E4DF] shadow-[0_10px_28px_-10px_rgba(37,86,67,0.55)] ring-1 ring-[#BFA690]/40 transition-[transform,box-shadow,background-color] duration-300 ease-out hover:-translate-y-1 hover:bg-[#1E4435] hover:shadow-[0_18px_36px_-12px_rgba(37,86,67,0.65)] hover:ring-[#BFA690]/70 active:translate-y-0 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#255643] focus-visible:ring-offset-2 focus-visible:ring-offset-[#DDD6C9] motion-reduce:transition-none sm:right-7 sm:bottom-7 sm:h-14 sm:w-14"
    >
      <span
        aria-hidden="true"
        className="font-serif pointer-events-none absolute top-1/2 right-full mr-3 hidden -translate-y-1/2 translate-x-2 rounded-full bg-[#255643] px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap text-[#E6E4DF] opacity-0 shadow-[0_8px_20px_-10px_rgba(37,86,67,0.6)] ring-1 ring-[#E6E4DF]/25 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 md:block"
      >
        {label}
      </span>

      <svg
        aria-hidden="true"
        viewBox="0 0 48 48"
        className="pointer-events-none absolute inset-0 h-full w-full -rotate-90"
      >
        <circle
          cx="24"
          cy="24"
          r={RING_RADIUS}
          fill="none"
          stroke="#BFA690"
          strokeOpacity="0.25"
          strokeWidth="2"
        />

        <circle
          cx="24"
          cy="24"
          r={RING_RADIUS}
          fill="none"
          stroke="#BFA690"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={RING_CIRCUMFERENCE}
          strokeDashoffset={RING_CIRCUMFERENCE * (1 - progress)}
          className="transition-[stroke-dashoffset] duration-150 ease-out"
        />
      </svg>

      <ArrowUp
        className="relative h-5 w-5 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 motion-reduce:transition-none"
        aria-hidden="true"
      />
    </button>
  );
};
