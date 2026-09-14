import { Language, TranslationContent } from '../types';

export const TRANSLATIONS: Record<Language, TranslationContent> = {
  en: {
    nav: {
      brand: 'BioIT Clarity',
      subbrand: 'Clear biological data analysis',
      badge: 'Clear explanations and practical results',
      home: 'Home',
      whatIDo: 'What I do',
      services: 'Services',
      howIWork: 'How I work',
      about: 'About',
      faq: 'FAQ',
      contact: 'Contact',
      bookCall: 'Book a free call',
      docsBtn: 'Sample deliverables',
    },

    hero: {
      eyebrow: 'FOR LABS, STARTUPS AND RESEARCHERS',
      title: 'Turn biological data into clear results.',
      titleHighlight:
        'Make your next paper, presentation, or research decision easier.',
      subtitle:
        'I help labs, researchers, and small biotech teams analyze biological data, create useful visualizations, and understand what to do next.',
      ctaButton: 'Tell me about your project',
      ctaNote: 'Free 20-minute call. No commitment required.',
    },

    whatIDo: {
      tag: 'WHAT I CAN HELP WITH',
      title: 'Clear support for biological data',
      intro:
        'I help you understand your data, answer focused questions, and turn results into useful graphs, tables, and reports.',
      items: [
        {
          id: 'review',
          title: 'Data review',
          description:
            'A first look at your dataset, your question, and the best way to approach the analysis.',
        },
        {
          id: 'analysis',
          title: 'Data analysis',
          description:
            'Exploration, cleaning, and statistical analysis according to the goals of your project.',
        },
        {
          id: 'visualization',
          title: 'Clear visualizations',
          description:
            'Graphs and tables that help your team see patterns and communicate results.',
        },
        {
          id: 'reporting',
          title: 'Reports and next steps',
          description:
            'A concise explanation of what was done, what the results show, and what could come next.',
        },
      ],
    },

    services: {
      tag: 'SERVICES AND PRICING',
      title: 'Choose the support your project needs',
      intro:
        'Choose the level of support that fits your project. We define the scope, timeline, and deliverables before any work begins.',
      packages: [
        {
          id: 'data-review',
          title: 'Data Review',
          description:
            'A focused review to understand your project, your dataset, and the best way to approach the analysis.',
          price: 'From US$ 100',
          timeline: '2–3 business days',
          features: [
            'Review of the dataset structure',
            'Short call to understand your project',
            'Main questions or missing information',
            'Clear plan for the next analysis',
          ],
          ctaText: '',
        },
        {
          id: 'analysis-report',
          title: 'Analysis + Report',
          badge: 'Most popular',
          description:
            'A complete analysis with visualizations, tables, and a concise report explaining the results.',
          price: 'From US$ 500',
          timeline: '5–10 business days',
          features: [
            'Data review and agreed analysis',
            'Graphs and tables ready to use',
            'Three-to-six-page report',
            'Call to present and discuss the results',
          ],
          ctaText: '',
        },
        {
          id: 'ongoing-support',
          title: 'Ongoing Support',
          description:
            'Regular help with new datasets, analysis questions, graphs, and reports.',
          price: 'From US$ 300 / month',
          timeline: 'Flexible monthly support',
          features: [
            'Support for agreed monthly tasks',
            'Help with new datasets',
            'Review of graphs and reports',
            'Monthly call and practical guidance',
          ],
          ctaText: '',
        },
      ],
      note:
        'Prices are starting points. The final price depends on the dataset, number of samples, type of analysis, and expected deliverables.',
    },

    process: {
      tag: 'HOW IT WORKS',
      title: 'A simple way to work together',
      subtitle:
        'You explain your project, what you have, and what you need. I define the work clearly, analyze the data, and walk you through the results.',
      stepPrefix: 'Step',
      ndaNote:
        'A mutual confidentiality agreement is available before sharing sensitive research files.',
      ctaButton: 'Book a free call',
      steps: [
        {
          number: 1,
          time: 'Step 1',
          title: 'You tell me about your project',
          description:
            'We discuss your project, your dataset, your scientific question, your goals, and the result you need.',
        },
        {
          number: 2,
          time: 'Step 2',
          title: 'We agree on the analysis',
          description:
            'I explain what can be done, what you will receive, how long it will take, and the final price.',
        },
        {
          number: 3,
          time: 'Step 3',
          title: 'I analyze and document the work',
          description:
            'I work with the agreed data and prepare clear graphs, tables, notes, and a report when included.',
        },
        {
          number: 4,
          time: 'Step 4',
          title: 'We review the results together',
          description:
            'We meet to discuss the findings, answer questions, and identify possible next steps.',
        },
      ],
    },

    howIWork: {
      title: 'How I work',
      intro:
        'A collaborative process designed to keep the project clear from the first conversation to the final result.',
      steps: [
        {
          step: 1,
          title: 'You share your question and goals',
          description:
            'We discuss the biological question, the available data, and how you plan to use the results.',
        },
        {
          step: 2,
          title: 'I review the data and define the work',
          description:
            'I check the dataset structure and explain the analysis, timeline, and deliverables before we begin.',
        },
        {
          step: 3,
          title: 'I create the analysis and outputs',
          description:
            'I prepare the agreed analysis, graphs, tables, and written explanation in a clear format.',
        },
        {
          step: 4,
          title: 'We discuss the results',
          description:
            'We review the outcome together so you can use it with confidence in your next step.',
        },
      ],
    },

    about: {
      title: 'About BioIT Clarity',
      text:
        'BioIT Clarity helps labs, researchers, and small biotech teams make biological data easier to understand and use. I combine practical data skills with clear communication so you receive results you can actually work with.',
      bullets: [
        'Clear explanations and thoughtful analysis',
        'Practical results for papers, presentations, and research decisions',
        'Focused projects with a clear scope and timeline',
      ],
    },

    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          question: 'What types of data do you work with?',
          answer:
            'I can work with biological and experimental datasets such as qPCR/PCR results, laboratory assays, enzyme kinetics, biomarker panels, gene expression tables, and standard CSV, Excel, or TSV files. We confirm the fit during the initial call.',
        },
        {
          question: 'Do I need to send all of my raw files?',
          answer:
            'Not necessarily. We decide what is needed based on the question and the type of analysis. You only share the relevant files and information required for the agreed work.',
        },
        {
          question: 'Can you work with our existing tools?',
          answer:
            'Yes. We can discuss the tools and formats you already use, including Excel, CSV, R, Python, and other common research files.',
        },
        {
          question: 'Will I receive the code used for the analysis?',
          answer:
            'This depends on the package and the agreed scope. If code is included, it will be organized and documented so the work is easier to review and continue.',
        },
        {
          question: 'Can you guarantee a specific scientific result?',
          answer:
            'No. Scientific results depend on the data and the research question. I can promise careful work, clear communication, and an honest explanation of what the data can and cannot show.',
        },
        {
          question: 'How are project prices calculated?',
          answer:
            'The final price depends on the size and structure of the dataset, the type of analysis, the number of samples, and the outputs you need. You receive a clear proposal before any work begins.',
        },
      ],
    },

    contact: {
      title: 'Ready to move your project forward?',
      text:
        'Book a free 20-minute call. Tell me about your project, what data you have, and what you need. I will tell you honestly whether I can help.',
      button: 'Book a free call',
      calendarUrl: 'https://calendar.google.com/',
      note:
        'No pressure. If I am not the right fit for your project, I will tell you clearly.',
      emailLabel: 'Prefer to start by email?',
      email: 'micaela.bioinformatics@gmail.com',
    },

    contactModal: {
      closeBtn: 'Close',
      title: 'Tell me about your project',
      subtitle:
        'Share a short description of your project, research question, available data, or upcoming deadline.',
      emailLabel: 'Email directly',
      copyEmail: 'Copy email',
      copiedEmail: 'Copied!',
      formTitle: 'Quick inquiry',
      nameLabel: 'Name or institution',
      namePlaceholder: 'Your name or lab/company name',
      messageLabel: 'What project or analysis do you need help with?',
      messagePlaceholder:
        'Briefly describe your project, research question, available data, or deadline.',
      sendBtn: 'Send inquiry',
      securityNote:
        'Your project information is confidential and used only to assess whether the service is a good fit.',
    },

    deliverables: {
      tag: 'WHAT YOU RECEIVE',
      title: 'Useful results you can work with',
      subtitle:
        'The exact outputs depend on the package and project, but every project is defined clearly before work begins.',
      selectedBadge: 'Selected',
      viewDetail: 'View details',
      previewHeader: 'Deliverable preview',
      previewBadge: 'Example',
      items: [
        {
          id: 'results-report',
          iconName: 'FileCheck',
          title: 'Results Report',
          description:
            'A concise explanation of the analysis, main findings, visualizations, and possible next steps.',
          format: 'PDF • Clear summary',
        },
        {
          id: 'figures-tables',
          iconName: 'BarChart3',
          title: 'Graphs and Tables',
          description:
            'Visual outputs prepared for reports, presentations, papers, or internal discussions.',
          format: 'PNG / SVG / CSV or agreed format',
        },
        {
          id: 'analysis-notes',
          iconName: 'FileText',
          title: 'Analysis Notes',
          description:
            'A record of what was done, which data was used, and how the results should be understood.',
          format: 'Notes • Documentation',
        },
        {
          id: 'next-steps',
          iconName: 'ListOrdered',
          title: 'Suggested Next Steps',
          description:
            'A practical list of possible follow-up analyses or actions based on the project results.',
          format: 'Prioritized list',
        },
      ],
      previews: {
        'results-report': {
          title: 'Results Report Example',
          subtitle:
            'A concise summary of the analysis and main findings.',
          p1: '1. Question: Compare the selected biological measurements between two conditions.',
          p2: '2. Work completed: Data review, exploratory analysis, statistical comparison, and visualization.',
          p3: '3. Main finding: Key patterns and relevant differences are presented with context.',
          highlight:
            'The results are organized so the team can discuss them and decide on possible next steps.',
        },
        'figures-tables': {
          title: 'Graphs and Tables Example',
          subtitle:
            'Visual outputs prepared for a report or presentation.',
          p1: 'Graph 1: Distribution of measurements by condition.',
          p2: 'Graph 2: Comparison of the main variables.',
          p3: 'Table 1: Summary of relevant results.',
          highlight:
            'The figures are designed to make the main information easier to see and explain.',
        },
        'analysis-notes': {
          title: 'Analysis Notes Example',
          subtitle: 'A simple record of the work completed.',
          p1: 'Data used: agreed project dataset.',
          p2: 'Steps completed: review, cleaning, analysis, and visualization.',
          p3: 'Notes: assumptions, limitations, and relevant context.',
          highlight:
            'The documentation helps the team understand how the results were produced.',
        },
        'next-steps': {
          title: 'Suggested Next Steps Example',
          subtitle:
            'Possible actions after reviewing the results.',
          p1: 'Immediate: discuss the main findings with the research team.',
          p2: 'Next: confirm whether additional data or validation is needed.',
          p3: 'Later: consider a follow-up analysis based on the research goal.',
          highlight:
            'The next steps depend on the data, the research question, and the decisions ahead.',
        },
      },
    },

    footer: {
      copyright: '© 2026 BioIT Clarity. All rights reserved.',
      tagline:
        'Clear biological data analysis for labs, researchers, and small biotech teams.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },

    docsModal: {
      badge: 'Resources',
      title: 'Sample deliverables',
      subtitle:
        'Examples of reports, graphs, tables, and project documents.',
      closeBtn: 'Close',
      allCategory: 'All files',
      downloadPdf: 'Download PDF',
      viewInBrowser: 'Open in browser',
      noDocs: 'No documents found.',
    },

    attachments: [],
  },

  es: {
    nav: {
      brand: 'BioIT Clarity',
      subbrand: 'Análisis claro de datos biológicos',
      badge: 'Explicaciones claras y resultados prácticos',
      home: 'Inicio',
      whatIDo: 'Qué hago',
      services: 'Servicios',
      howIWork: 'Cómo trabajo',
      about: 'Sobre mí',
      faq: 'Preguntas frecuentes',
      contact: 'Contacto',
      bookCall: 'Agendá una llamada',
      docsBtn: 'Entregables de ejemplo',
    },

    hero: {
      eyebrow: 'PARA LABORATORIOS, STARTUPS E INVESTIGADORES',
      title: 'Convertí datos biológicos en resultados claros.',
      titleHighlight:
        'Hacé más fácil tu próximo paper, presentación o decisión de investigación.',
      subtitle:
        'Ayudo a laboratorios, investigadores y pequeños equipos biotech a analizar datos biológicos, crear visualizaciones útiles y entender cuál es el próximo paso.',
      ctaButton: 'Contame sobre tu proyecto',
      ctaNote: 'Llamada gratuita de 20 minutos. Sin compromiso.',
    },

    whatIDo: {
      tag: 'EN QUÉ TE PUEDO AYUDAR',
      title: 'Ayuda clara para trabajar con datos biológicos',
      intro:
        'Te ayudo a entender tus datos, responder preguntas concretas y convertir los resultados en gráficos, tablas y reportes útiles.',
      items: [
        {
          id: 'review',
          title: 'Revisión de datos',
          description:
            'Una primera mirada a tu dataset, tu pregunta y la mejor forma de abordar el análisis.',
        },
        {
          id: 'analysis',
          title: 'Análisis de datos',
          description:
            'Exploración, limpieza y análisis estadístico según los objetivos de tu proyecto.',
        },
        {
          id: 'visualization',
          title: 'Visualizaciones claras',
          description:
            'Gráficos y tablas que ayudan a tu equipo a ver patrones y comunicar resultados.',
        },
        {
          id: 'reporting',
          title: 'Reportes y próximos pasos',
          description:
            'Una explicación breve de lo que se hizo, qué muestran los resultados y qué podría seguir.',
        },
      ],
    },

    services: {
      tag: 'SERVICIOS Y PRECIOS',
      title: 'Elegí el apoyo que necesita tu proyecto',
      intro:
        'Elegí el nivel de apoyo que mejor se adapta a tu proyecto. Definimos el alcance, los tiempos y los entregables antes de comenzar.',
      packages: [
        {
          id: 'data-review',
          title: 'Revisión de datos',
          description:
            'Una revisión enfocada para entender tu proyecto, tu dataset y la mejor forma de abordar el análisis.',
          price: 'Desde US$ 100',
          timeline: '2–3 días hábiles',
          features: [
            'Revisión de la estructura del dataset',
            'Llamada corta para entender tu proyecto',
            'Preguntas principales o información faltante',
            'Plan claro para el próximo análisis',
          ],
          ctaText: '',
        },
        {
          id: 'analysis-report',
          title: 'Análisis + Reporte',
          badge: 'Más elegido',
          description:
            'Un análisis completo con visualizaciones, tablas y un reporte breve que explica los resultados.',
          price: 'Desde US$ 500',
          timeline: '5–10 días hábiles',
          features: [
            'Revisión de datos y análisis acordado',
            'Gráficos y tablas listos para usar',
            'Reporte de tres a seis páginas',
            'Llamada para presentar y conversar sobre los resultados',
          ],
          ctaText: '',
        },
        {
          id: 'ongoing-support',
          title: 'Apoyo continuo',
          description:
            'Ayuda regular con nuevos datasets, preguntas de análisis, gráficos y reportes.',
          price: 'Desde US$ 300 / mes',
          timeline: 'Apoyo mensual flexible',
          features: [
            'Apoyo para tareas mensuales acordadas',
            'Ayuda con nuevos datasets',
            'Revisión de gráficos y reportes',
            'Llamada mensual y orientación práctica',
          ],
          ctaText: '',
        },
      ],
      note:
        'Los precios son iniciales. El precio final depende del dataset, la cantidad de muestras, el tipo de análisis y los entregables necesarios.',
    },

    process: {
      tag: 'CÓMO TRABAJAMOS',
      title: 'Una forma simple de trabajar juntos',
      subtitle:
        'Me contás sobre tu proyecto, qué tenés y qué necesitás. Defino el trabajo con claridad, analizo los datos y revisamos juntos los resultados.',
      stepPrefix: 'Paso',
      ndaNote:
        'Podemos firmar un acuerdo de confidencialidad antes de compartir archivos sensibles de investigación.',
      ctaButton: 'Agendá una llamada gratuita',
      steps: [
        {
          number: 1,
          time: 'Paso 1',
          title: 'Me contás sobre tu proyecto',
          description:
            'Hablamos sobre tu proyecto, tu dataset, tu pregunta científica, tus objetivos y el resultado que necesitás.',
        },
        {
          number: 2,
          time: 'Paso 2',
          title: 'Acordamos el análisis',
          description:
            'Te explico qué se puede hacer, qué vas a recibir, cuánto tiempo llevará y cuál será el precio final.',
        },
        {
          number: 3,
          time: 'Paso 3',
          title: 'Analizo y documento el trabajo',
          description:
            'Trabajo con los datos acordados y preparo gráficos, tablas, notas y un reporte cuando corresponda.',
        },
        {
          number: 4,
          time: 'Paso 4',
          title: 'Revisamos juntos los resultados',
          description:
            'Nos reunimos para conversar sobre los hallazgos, responder preguntas y pensar posibles próximos pasos.',
        },
      ],
    },

    howIWork: {
      title: 'Cómo trabajo',
      intro:
        'Un proceso colaborativo para mantener claro el proyecto desde la primera conversación hasta el resultado final.',
      steps: [
        {
          step: 1,
          title: 'Compartís tu pregunta y tus objetivos',
          description:
            'Hablamos sobre la pregunta biológica, los datos disponibles y el uso que querés darle a los resultados.',
        },
        {
          step: 2,
          title: 'Reviso los datos y defino el trabajo',
          description:
            'Reviso la estructura del dataset y explico el análisis, los tiempos y los entregables antes de comenzar.',
        },
        {
          step: 3,
          title: 'Creo el análisis y los resultados',
          description:
            'Preparo el análisis acordado, los gráficos, las tablas y la explicación escrita en un formato claro.',
        },
        {
          step: 4,
          title: 'Conversamos sobre los resultados',
          description:
            'Revisamos juntos el resultado para que puedas usarlo con confianza en tu próximo paso.',
        },
      ],
    },

    about: {
      title: 'Sobre BioIT Clarity',
      text:
        'BioIT Clarity ayuda a laboratorios, investigadores y pequeños equipos biotech a hacer que sus datos biológicos sean más fáciles de entender y usar. Combino habilidades prácticas de análisis con una comunicación clara para que recibas resultados con los que realmente puedas trabajar.',
      bullets: [
        'Explicaciones claras y análisis cuidadoso',
        'Resultados prácticos para papers, presentaciones y decisiones de investigación',
        'Proyectos enfocados, con alcance y tiempos claros',
      ],
    },

    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          question: '¿Con qué tipo de datos trabajás?',
          answer:
            'Puedo trabajar con datos biológicos y experimentales como resultados de qPCR/PCR, ensayos de laboratorio, cinética enzimática, paneles de biomarcadores, tablas de expresión génica y archivos CSV, Excel o TSV. Confirmamos si el proyecto encaja durante la llamada inicial.',
        },
        {
          question: '¿Necesito enviarte todos mis archivos crudos?',
          answer:
            'No necesariamente. Definimos qué hace falta según la pregunta y el tipo de análisis. Solo compartís los archivos y la información relevantes para el trabajo acordado.',
        },
        {
          question: '¿Podés trabajar con las herramientas que ya usamos?',
          answer:
            'Sí. Podemos conversar sobre las herramientas y formatos que ya utilizan, como Excel, CSV, R, Python y otros archivos habituales de investigación.',
        },
        {
          question: '¿Voy a recibir el código usado para el análisis?',
          answer:
            'Depende del paquete y del alcance acordado. Si el código está incluido, va a estar organizado y documentado para que sea más fácil revisarlo y continuar el trabajo.',
        },
        {
          question: '¿Podés garantizar un resultado científico específico?',
          answer:
            'No. Los resultados científicos dependen de los datos y de la pregunta de investigación. Sí puedo ofrecer un trabajo cuidadoso, una comunicación clara y una explicación honesta de lo que los datos pueden y no pueden mostrar.',
        },
        {
          question: '¿Cómo se calcula el precio del proyecto?',
          answer:
            'El precio final depende del tamaño y la estructura del dataset, el tipo de análisis, la cantidad de muestras y los resultados que necesitás. Recibís una propuesta clara antes de comenzar.',
        },
      ],
    },

    contact: {
      title: '¿Listo para avanzar con tu proyecto?',
      text:
        'Agendá una llamada gratuita de 20 minutos. Contame sobre tu proyecto, qué datos tenés y qué necesitás, y te voy a decir con honestidad si puedo ayudarte.',
      button: 'Agendá una llamada gratuita',
      calendarUrl: 'https://calendar.google.com/',
      note:
        'Sin presión. Si no soy la persona indicada para tu proyecto, te lo voy a decir con claridad.',
      emailLabel: '¿Preferís empezar por email?',
      email: 'micaela.bioinformatics@gmail.com',
    },

    contactModal: {
      closeBtn: 'Cerrar',
      title: 'Contame sobre tu proyecto',
      subtitle:
        'Compartí una breve descripción de tu proyecto, tu pregunta de investigación, los datos disponibles o tu próximo plazo.',
      emailLabel: 'Escribir directamente',
      copyEmail: 'Copiar email',
      copiedEmail: '¡Copiado!',
      formTitle: 'Consulta rápida',
      nameLabel: 'Nombre o institución',
      namePlaceholder: 'Tu nombre o el de tu laboratorio/empresa',
      messageLabel: '¿En qué proyecto o análisis necesitás ayuda?',
      messagePlaceholder:
        'Describí brevemente tu proyecto, pregunta de investigación, datos disponibles o plazo.',
      sendBtn: 'Enviar consulta',
      securityNote:
        'La información de tu proyecto es confidencial y se utiliza únicamente para evaluar si el servicio encaja con lo que necesitás.',
    },

    deliverables: {
      tag: 'LO QUE RECIBÍS',
      title: 'Resultados útiles para seguir trabajando',
      subtitle:
        'Los resultados exactos dependen del paquete y del proyecto, pero definimos todo con claridad antes de comenzar.',
      selectedBadge: 'Seleccionado',
      viewDetail: 'Ver detalle',
      previewHeader: 'Vista previa del entregable',
      previewBadge: 'Ejemplo',
      items: [
        {
          id: 'results-report',
          iconName: 'FileCheck',
          title: 'Reporte de resultados',
          description:
            'Una explicación breve del análisis, los hallazgos principales, las visualizaciones y los posibles próximos pasos.',
          format: 'PDF • Resumen claro',
        },
        {
          id: 'figures-tables',
          iconName: 'BarChart3',
          title: 'Gráficos y tablas',
          description:
            'Resultados visuales preparados para reportes, presentaciones, papers o reuniones internas.',
          format: 'PNG / SVG / CSV u otro formato acordado',
        },
        {
          id: 'analysis-notes',
          iconName: 'FileText',
          title: 'Notas del análisis',
          description:
            'Un registro de lo que se hizo, qué datos se usaron y cómo interpretar los resultados.',
          format: 'Notas • Documentación',
        },
        {
          id: 'next-steps',
          iconName: 'ListOrdered',
          title: 'Próximos pasos sugeridos',
          description:
            'Una lista práctica de posibles análisis o acciones a partir de los resultados del proyecto.',
          format: 'Lista priorizada',
        },
      ],
      previews: {
        'results-report': {
          title: 'Ejemplo de reporte de resultados',
          subtitle:
            'Un resumen breve del análisis y de los hallazgos principales.',
          p1: '1. Pregunta: Comparar las mediciones biológicas seleccionadas entre dos condiciones.',
          p2: '2. Trabajo realizado: Revisión de datos, análisis exploratorio, comparación estadística y visualización.',
          p3: '3. Hallazgo principal: Los patrones y diferencias relevantes se presentan con su contexto.',
          highlight:
            'Los resultados quedan organizados para que el equipo pueda conversarlos y decidir posibles próximos pasos.',
        },
        'figures-tables': {
          title: 'Ejemplo de gráficos y tablas',
          subtitle:
            'Resultados visuales preparados para un reporte o presentación.',
          p1: 'Gráfico 1: Distribución de las mediciones por condición.',
          p2: 'Gráfico 2: Comparación de las variables principales.',
          p3: 'Tabla 1: Resumen de los resultados relevantes.',
          highlight:
            'Las figuras están pensadas para que la información principal sea más fácil de ver y explicar.',
        },
        'analysis-notes': {
          title: 'Ejemplo de notas del análisis',
          subtitle: 'Un registro simple del trabajo realizado.',
          p1: 'Datos utilizados: dataset acordado para el proyecto.',
          p2: 'Pasos realizados: revisión, limpieza, análisis y visualización.',
          p3: 'Notas: supuestos, limitaciones y contexto relevante.',
          highlight:
            'La documentación ayuda al equipo a entender cómo se obtuvieron los resultados.',
        },
        'next-steps': {
          title: 'Ejemplo de próximos pasos',
          subtitle:
            'Posibles acciones después de revisar los resultados.',
          p1: 'Inmediato: conversar los hallazgos principales con el equipo.',
          p2: 'Siguiente: confirmar si hace falta información o validación adicional.',
          p3: 'Más adelante: considerar un análisis complementario según el objetivo.',
          highlight:
            'Los próximos pasos dependen de los datos, la pregunta de investigación y las decisiones que sigan.',
        },
      },
    },

    footer: {
      copyright: '© 2026 BioIT Clarity. Todos los derechos reservados.',
      tagline:
        'Análisis claro de datos biológicos para laboratorios, investigadores y pequeños equipos biotech.',
      privacy: 'Política de privacidad',
      terms: 'Términos del servicio',
    },

    docsModal: {
      badge: 'Recursos',
      title: 'Entregables de ejemplo',
      subtitle:
        'Ejemplos de reportes, gráficos, tablas y documentos de proyectos.',
      closeBtn: 'Cerrar',
      allCategory: 'Todos los archivos',
      downloadPdf: 'Descargar PDF',
      viewInBrowser: 'Abrir en el navegador',
      noDocs: 'No se encontraron documentos.',
    },

    attachments: [],
  },
};