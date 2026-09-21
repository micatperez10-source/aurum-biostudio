/**
 * BioIT Clarity - Main JavaScript Controller
 * Handles bilingual switching (EN/ES), smooth scrolling, and FAQ accordions.
 */

const TRANSLATIONS = {
  en: {
    nav: {
      badge: "Clear explanations, no unnecessary jargon",
      subbrand: "Clear Bioinformatics for Biotech",
      whatIDo: "What I do",
      services: "Services",
      howIWork: "How I work",
      about: "About",
      faq: "FAQ",
      contact: "Contact",
      bookCall: "Book a call"
    },
    hero: {
      eyebrow: "For labs, startups and researchers",
      title: "Turn biological data into clear results.",
            titleHighlight: "and I handle the analysis end to end — from raw data to your next clear step.",
      subtitle: "I help research labs and biotech teams analyze their data, create clear visualizations and understand what to do next. No endless reports, just results you can actually use.",
      ctaButton: "Tell me about your project",
      ctaNote: "Initial 20-minute call with no cost or commitment."
    },
    whatIDo: {
      title: "What I do",
      intro: "I work with teams that already have biological or experimental data and need help making sense of it.",
      items: [
        {
          id: "exploratory",
          title: "Exploratory data analysis",
          description: "Understanding your data structure, checking quality, distributions, and detecting edge cases early."
        },
        {
          id: "statistical",
          title: "Statistical analysis and interpretation",
          description: "Applying sound statistical models to test hypotheses and explaining what each p-value means."
        },
        {
          id: "visuals",
          title: "Clear graphs and tables",
          description: "Publication-ready volcano plots, boxplots, heatmaps, and clean summary tables ready for your decks."
        },
        {
          id: "documentation",
          title: "Simple, reproducible documentation",
          description: "Clean Python and R scripts with clear comments so your teammates can continue the work anytime."
        }
      ]
    },
    services: {
      title: "Services",
      intro: "Three simple ways to work together. You do not need to fix everything at once.",
      packages: [
        {
          id: "check",
          title: "Data Check",
          description: "For teams that want a quick review before starting a bigger analysis.",
          price: "From US$ 100",
          features: [
            "Review of the dataset",
            "Short call to understand goals",
            "Clear plan of analysis"
          ],
          cta: "Tell me about your data"
        },
        {
          id: "analysis",
          title: "Analysis + Report",
          badge: "Most popular",
          description: "For teams that need actual analysis and clear results.",
          price: "From US$ 500",
          features: [
            "Agreed analysis (exploratory, statistical, visualization)",
            "Graphs and tables ready to use in papers",
            "Simple report explaining the results in plain language",
            "Short call to present the findings"
          ],
          cta: "Tell me about your data"
        },
        {
          id: "ongoing",
          title: "Ongoing Support",
          description: "For teams that want regular help with data and analysis.",
          price: "From US$ 300 / month",
          features: [
            "Monthly support for ongoing analyses",
            "Help with new incoming datasets",
            "Answers to practical analytical questions",
            "Review of lab graphs and reports"
          ],
          cta: "Let's talk"
        }
      ],
      note: "Prices depend on the size and complexity of your data. I will confirm a final price after a short call."
    },
    howIWork: {
      title: "How I work",
      intro: "A collaborative, transparent process designed to give you clarity and peace of mind.",
      steps: [
        {
          step: 1,
          title: "You tell me about your data and goals",
          description: "We schedule a free 20-minute call to discuss your research questions, sample sizes, and deadlines."
        },
        {
          step: 2,
          title: "I analyze the data and create clear outputs",
          description: "I execute the agreed analyses using reproducible Python/R code, validating assumptions and checking outliers."
        },
        {
          step: 3,
          title: "You receive graphs, tables and a simple report",
          description: "Deliverables include high-resolution figures, clear summary tables, and a report in plain language."
        },
        {
          step: 4,
          title: "We review the results together on a call",
          description: "We walk through the takeaways together, answer questions, and discuss logical next steps for your research."
        }
      ]
    },
    about: {
      title: "About BioIT Clarity",
      text: "BioIT Clarity helps  biotech teams and researchers make their data easier to understand and use. I combine practical data skills with clear communication, so you get results you can actually work with.",
      bullets: [
        "Clear language, no unnecessary jargon",
        "Practical outputs, not long technical reports",
        "Focused on , well-defined projects"
      ]
    },
    faq: {
      title: "Frequently asked questions"
    },
    contact: {
      title: "Tell me about your data",
      text: "Book a free 20-minute call. Tell me what data you have and what you need, and I will tell you honestly whether I can help.",
      button: "Book a free call",
      emailLabel: "Or send an email directly to:",
      email: "micaela.bioinformatics@gmail.com"
    },
    footer: {
      copyright: "© 2026 BioIT Clarity. All rights reserved."
    }
  },
  es: {
    nav: {
      badge: "Explicación clara, sin sobrecarga técnica",
      subbrand: "Bioinformática clara para biotech",
      whatIDo: "Qué hago",
      services: "Servicios",
      howIWork: "Cómo trabajo",
      about: "Sobre mí",
      faq: "Preguntas",
      contact: "Contacto",
      bookCall: "Agendar llamada"
    },
    hero: {
      eyebrow: "Para labs, startups e investigadores",
      title: "Convertí datos biológicos en resultados claros.",
      titleHighlight: "Analizo tus datos de principio a fin: del archivo crudo al próximo paso claro.",
      subtitle: "Ayudo a laboratorios de investigación y equipos biotech a analizar sus datos, crear visualizaciones claras y entender cuál es el próximo paso. Nada de reportes interminables, solo resultados que realmente podés usar.",
      ctaNote: "Llamada inicial de 20 minutos sin costo."
    },
    whatIDo: {
      title: "Qué hacemos?",
      intro: "Trabajamos con equipos que ya tienen datos biológicos o experimentales y necesitan ayuda para entenderlos.",
      items: [
        {
          id: "exploratory",
          title: "Análisis exploratorio de datos",
          description: "Entender la estructura de tus datos, evaluar calidad de muestras, distribuciones y detectar casos anómalos."
        },
        {
          id: "statistical",
          title: "Análisis estadístico e interpretación",
          description: "Modelos estadísticos rigurosos para contrastar hipótesis y explicar en palabras simples qué significa cada resultado."
        },
        {
          id: "visuals",
          title: "Gráficos y tablas claros",
          description: "Volcano plots, diagramas de cajas, heatmaps y tablas resumen con calidad para publicación o presentaciones."
        },
        {
          id: "documentation",
          title: "Documentación simple y reproducible",
          description: "Scripts limpios en Python o R con comentarios claros para que tu equipo pueda replicar y continuar el trabajo."
        }
      ]
    },
    services: {
      title: "Servicios",
      intro: "Tres formas simples de trabajar juntos.",
      packages: [
        {
          id: "check",
          title: "Data Check",
          description: "Para equipos que quieren una revisión rápida antes de encarar un análisis más grande.",
          price: "Desde US$ 100",
          features: [
            "Revisión del conjunto de datos",
            "Llamada para entender objetivos",
            "Plan claro de análisis"
          ],
          cta: "Contame sobre tus datos"
        },
        {
          id: "analysis",
          title: "Analysis + Report",
          badge: "Más elegido",
          description: "Para equipos que necesitan análisis concreto y resultados claros.",
          price: "Desde US$ 500",
          features: [
            "Análisis acordado (exploratorio, estadístico, visualización)",
            "Gráficos y tablas listos para usar en publicaciones",
            "Reporte simple explicando los resultados en lenguaje claro",
            "Llamada corta para presentar los hallazgos"
          ],
          cta: "Contame sobre tus datos"
        },
        {
          id: "ongoing",
          title: "Ongoing Support",
          description: "Para equipos que quieren ayuda regular con datos y análisis continuo.",
          price: "Desde US$ 300 / mes",
          features: [
            "Acompañamiento mensual para análisis continuos",
            "Ayuda con nuevos lotes de datos experimentales",
            "Respuestas a consultas analíticas prácticas",
            "Revisión de gráficos y reportes del laboratorio"
          ],
          cta: "Hablemos"
        }
      ],
      note: "Los precios dependen del tamaño y complejidad de tus datos."
    },
    howIWork: {
      title: "Cómo trabajamos",
      intro: "Un proceso colaborativo, transparente y pensado para darte tranquilidad técnica.",
      steps: [
        {
          step: 1,
          title: "Me contás sobre tus datos y objetivos",
          description: "Coordinamos una llamada inicial de 20 minutos sin compromiso para conocer tus preguntas científicas y plazos."
        },
        {
          step: 2,
          title: "Analizamos los datos y creamos resultados claros",
          description: "Ejecutamos el análisis acordado con código reproducible en Python/R, validando supuestos y valores atípicos."
        },
        {
          step: 3,
          title: "Recibís gráficos, tablas y un reporte simple",
          description: "Te entrego figuras en alta resolución listas para tu manuscrito, tablas y un resumen en lenguaje directo."
        },
        {
          step: 4,
          title: "Revisamos los resultados juntos en una llamada",
          description: "Repasamos juntos cada conclusión, respondemos dudas del equipo y definimos los próximos pasos experimentales."
        }
      ]
    },
    about: {
      title: "Sobre BioIT Clarity",
      text: "BioIT Clarity ayuda a laboratorios y equipos biotech a hacer sus datos más fáciles de entender y usar. Combino habilidades prácticas de datos con comunicación clara, para que recibas resultados con los que realmente podés trabajar.",
      bullets: [
        "Lenguaje claro, sin sobrecarga técnica",
        "Resultados prácticos, no reportes técnicos eternos",
        "Enfoque en proyectos pequeños y bien definidos"
      ]
    },
    faq: {
      title: "Preguntas frecuentes"
    },
    contact: {
      title: "Contame sobre tus datos",
      text: "Agendá una llamada gratuita de 20 minutos. Contame qué datos tenés y qué necesitás, y te voy a decir con honestidad si te puedo ayudar.",
      button: "Agendá una llamada gratuita",
      emailLabel: "O escribime directamente por correo a:",
      email: "micaela.bioinformatics@gmail.com"
    },
    footer: {
      copyright: "© 2026 BioIT Clarity. Todos los derechos reservados."
    }
  }
};

let currentLang = 'en';

// Set up language switcher
function setLanguage(lang) {
  if (lang !== 'en' && lang !== 'es') lang = 'en';
  currentLang = lang;
  localStorage.setItem('bioit_clarity_lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Re-render text
  updateTexts();
}

function updateTexts() {
  const t = TRANSLATIONS[currentLang];
  
  // Announcement
  const announcementEl = document.querySelector('.announcement-bar span');
  if (announcementEl) announcementEl.textContent = t.nav.badge;

  // Nav links
  const whatIDoNav = document.getElementById('nav-what-i-do');
  if (whatIDoNav) whatIDoNav.textContent = t.nav.whatIDo;
  const servicesNav = document.getElementById('nav-services');
  if (servicesNav) servicesNav.textContent = t.nav.services;
  const howNav = document.getElementById('nav-how-i-work');
  if (howNav) howNav.textContent = t.nav.howIWork;
  const aboutNav = document.getElementById('nav-about');
  if (aboutNav) aboutNav.textContent = t.nav.about;
  const faqNav = document.getElementById('nav-faq');
  if (faqNav) faqNav.textContent = t.nav.faq;
  const contactNav = document.getElementById('nav-contact');
  if (contactNav) contactNav.textContent = t.nav.contact;

  // Hero
  const eyebrowEl = document.querySelector('.eyebrow-badge span');
  if (eyebrowEl) eyebrowEl.textContent = t.hero.eyebrow;
  const heroTitleEl = document.querySelector('.hero-title-main');
  if (heroTitleEl) heroTitleEl.textContent = t.hero.title;
  const heroHighlightEl = document.querySelector('.hero-title-highlight');
  if (heroHighlightEl) heroHighlightEl.textContent = t.hero.titleHighlight;
  const heroSubEl = document.querySelector('.hero-subtitle');
  if (heroSubEl) heroSubEl.textContent = t.hero.subtitle;
  const heroCtaEl = document.querySelector('#hero-cta-btn span');
  if (heroCtaEl) heroCtaEl.textContent = t.hero.ctaButton;
  const heroNoteEl = document.querySelector('.hero-note span');
  if (heroNoteEl) heroNoteEl.textContent = t.hero.ctaNote;
}

// Setup accordions
function setupFaqAccordions() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(i => i.classList.remove('open'));
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('bioit_clarity_lang') || 'en';
  setLanguage(saved);
  setupFaqAccordions();

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetLang = e.currentTarget.getAttribute('data-lang');
      setLanguage(targetLang);
    });
  });
});
