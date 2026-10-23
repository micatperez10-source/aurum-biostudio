import { Language, TranslationContent } from '../types';
import { CONTACT_EMAIL, CALENDAR_URL } from './contact';

export const TRANSLATIONS: Record<Language, TranslationContent> = {
  en: {
    nav: {
      brand: 'Aurum BioStudio',
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
        'and I handle your analysis, start to finish.',
      subtitle:
        'I help research labs and biotech teams analyze their data, create clear visualizations and understand what to do next. No endless reports, just results you can actually use.',
      ctaButton: 'Tell me about your project',
      ctaNote: 'Free call. No commitment required.',
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
            'A first look at your dataset, your questions and the best way to approach the analysis.',
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
            'A focused review to understand your project, the dataset and the best way to approach the analysis.',
          price: 'From US$ 100',
          timeline: '2–3 business days',
          features: [
            'Review of the dataset structure',
            'Call to understand your project',
            'Main questions or missing information',
            'Clear plan for the next analysis',
          ],
          ctaText: 'See how it works',
        },
        {
          id: 'analysis-report',
          title: 'Analysis + Report',
          badge: 'Most popular',
          description:
            'A complete analysis with visualizations, tables, and a concise report explaining the results.',
          price: 'From US$ 250',
          timeline: '5–10 business days',
          features: [
            'Data review and agreed analysis',
            'Graphs and tables ready to use',
            'Reports',
            'Calls to present and discuss the results',
          ],
          ctaText: 'See deliverables and example',
        },
        {
          id: 'ongoing-support',
          title: 'Ongoing Support',
          description:
            'Monthly support to review new data, update analyses, and keep graphs, reports, and documentation current.',
          price: 'From US$ 300 / month',
          timeline: 'Agreed monthly scope',
          features: [
            'Agreed monthly tasks and priorities',
            'Review of new data and updating of results',
            'Updates to graphs, tables, and reports',
            'Follow-up and documentation of the work',
          ],
          ctaText: 'Explore ongoing support',
        },
      ],
      note:
        'Prices are starting points. The final price depends on the dataset, number of samples, type of analysis, and expected deliverables.',
    },

    dataReview: {
      closeBtn: 'Close',
      title: 'Data Review',
      lead:
        'Understand what you have, what is missing, and how to move forward.',
      description:
        'An initial review to understand your project, assess the structure of your data, and define a concrete next step.',
      price: 'From US$100 · 2–3 business days',
      forYouTitle: 'This service is for you if…',
      forYou: [
        'You have data but are not sure where to start.',
        'You need to know what information is missing before analyzing.',
        'You want to define a question and a scope before commissioning a full analysis.',
      ],
      receiveTitle: 'What you would receive',
      receiveIntro: 'A review summary with:',
      receive: [
        'A description of the files and how they are organized.',
        'Observations on structure, sample identification, and missing information.',
        'Questions worth resolving before the analysis.',
        'A plan for next steps.',
      ],
      receiveNote:
        'Includes a call to understand the context of your project.',
      sampleTitle: 'A sample of the deliverable',
      sample: {
        title: 'Example review summary',
        materialLabel: 'Material received',
        materialText:
          'Measurement table and a file with sample information.',
        clarifyLabel: 'Points to clarify',
        clarifyText:
          'Measurement units, replicate identification, and exclusion criteria.',
        nextLabel: 'Proposed next step',
        nextText:
          'Complete the metadata and agree on the primary comparison before starting the analysis.',
        disclaimer:
          'Demonstration example. It does not correspond to a client project.',
      },
      howTitle: 'How I work',
      howSteps: [
        'You share the files and project context through the agreed channel.',
        'We review the data structure and the question you want to answer.',
        'You receive the observations and a proposal for next steps.',
      ],
      toolsTitle: 'Tools depending on the project',
      tools: [
        {
          name: 'R',
          text: 'exploration and review of tables.',
        },
        {
          name: 'Python',
          text: 'review and preparation of files when needed.',
        },
      ],
      scopeTitle: 'Scope',
      scopeText:
        'This stage focuses on reviewing and planning. Extensive cleaning, statistical analysis, and figure preparation are quoted separately.',
      ctaBtn: 'Ask about a review',
      ctaNote:
        'Tell me what data you have and what you would like to solve.',
    },

    analysisReport: {
      closeBtn: 'Close',
      title: 'Analysis + Report',
      lead: 'From a focused question to results you can interpret.',
      description:
        'An analysis agreed for your project, with visualizations, tables, and a concise report explaining the approach, the results, and their limitations.',
      price: 'From US$ 250 · 5–10 business days',
      forYouTitle: 'This service is for you if…',
      forYou: [
        'You already have data and a question you want to answer.',
        'You need to turn results into clear graphs and tables.',
        'You want an explanation of what the data show and what they do not allow you to conclude.',
      ],
      receiveTitle: 'What you would receive',
      receive: [
        'A concise report with the question, the approach used, the results, and their limitations.',
        'Graphs and tables in the agreed formats.',
        'The files corresponding to the deliverables defined for your project.',
        'Agreed calls to present the results and discuss them.',
      ],
      receiveNote:
        'If you need code or editable files, their inclusion is defined when agreeing on the scope.',
      sample: {
        label: 'Illustrative report view',
        title: 'Analysis of a biological assay',
        subtitle: 'Example of structure and presentation of results.',
        questionLabel: 'Question',
        questionText:
          'How does the measured response change between conditions?',
        visualizationLabel: 'Visualization',
        figureSimulatedLabel: 'Simulated data',
        figureTitle: 'Individual observations by condition',
        axisLabel: 'Response — arbitrary units',
        conditionA: 'Condition A',
        conditionB: 'Condition B',
        figureAlt:
          'Dot plot with simulated individual observations from two conditions. Each point is one observation; Condition A is shown with circles and Condition B with squares. The response values fall in a similar, overlapping range. This is an illustration, not an experimental result.',
        figureDescription:
          'Illustration with simulated data. Condition A is shown with circles and Condition B with squares. Observations from both groups overlap across the displayed range.',
        interpretationLabel: 'Interpretation',
        interpretationText:
          'Observations from both conditions fall within overlapping ranges. The figure allows comparison of the position and spread of each group; no statistical test is presented and no difference between conditions is claimed.',
        methodsLabel: 'Methods and limitations',
        methodsText:
          'The sample illustrates how the question, visualization, and interpretation could be organized. In a real project, the approach, tests, and limitations are defined by the experimental design, the number of observations, and the nature of the data.',
        disclaimer:
          'Illustrative example with simulated data. The approach and deliverables are defined for each project.',
      },
      howTitle: 'How I work',
      howSteps: [
        {
          title: 'We define the question',
          text: 'We agree on what you want to resolve, which files are needed, and what the deliverables will be.',
        },
        {
          title: 'I develop the analysis',
          text: 'I review the data and work on the agreed approach.',
        },
        {
          title: 'We review the results',
          text: 'You receive the report, graphs, and tables, and we discuss their interpretation and possible next steps.',
        },
      ],
      toolsTitle: 'Tools depending on the project',
      tools: [
        {
          name: 'R',
          text: 'statistical analysis and visualization.',
        },
        {
          name: 'Python',
          text: 'data preparation and automation when the project requires it.',
        },
        {
          name: 'Quarto',
          text: 'reports that integrate text, code, and results.',
        },
      ],
      toolsNote:
        'Tools are selected according to the data, the question, and the delivery format.',
      scopeTitle: 'Scope',
      scopeText:
        'The final budget depends on the number and state of the files, the complexity of the analysis, and the agreed deliverables. New questions or expansions are quoted separately.',
      scopeNote:
        'The timeline is confirmed when the scope is defined and the available material is reviewed.',
      ctaBtn: 'Ask about my analysis',
      ctaNote:
        'Tell me what you want to investigate and what state your data are in.',
    },

    ongoingSupport: {
      closeBtn: 'Close',
      title: 'Ongoing Support',
      lead:
        'Continuity for your data, your results, and the next steps.',
      description:
        'Monthly support to work on the data needs that come up during your project: reviewing new files, updating analyses, and keeping results and documentation organized.',
      price: 'From US$ 300/month · Agreed monthly scope',
      forYouTitle: 'This service is for you if…',
      forYou: [
        'Your team generates new data regularly.',
        'You need to update analyses, figures, or reports as the project moves forward.',
        'You want continuity in the work and a clear record of what has been done.',
      ],
      receiveTitle: 'What you would receive',
      receive: [
        'Priorities and deliverables defined for each period.',
        'Review of new files and updates to the agreed analyses.',
        'Graphs, tables, or reports updated according to the contracted tasks.',
        'A record of progress, decisions, and pending items.',
        'Consultation and review sessions according to the agreed arrangement.',
      ],
      sample: {
        label: 'Illustrative view of ongoing support',
        title: 'How a working period could be organized',
        intro:
          'Tasks are prioritized according to the needs of the project and the agreed working capacity.',
        taskLabel: 'Agreed task',
        outcomeLabel: 'Expected result',
        rows: [
          {
            task: 'Review new files.',
            outcome: 'Observations on structure and pending information.',
          },
          {
            task: 'Update an analysis and its figures.',
            outcome: 'Updated results using the agreed data.',
          },
          {
            task: 'Update the report and document changes.',
            outcome:
              'A new version of the report and a summary of the changes made.',
          },
        ],
        disclaimer:
          'Illustrative example. It does not represent a fixed number of tasks included in the starting price.',
      },
      howTitle: 'How I work',
      howSteps: [
        {
          title: 'We define the priorities',
          text: 'We agree on the needs for the period, the deliverables, and the working capacity.',
        },
        {
          title: 'We move forward on the tasks',
          text: 'I review new data, update the agreed results, and document relevant changes.',
        },
        {
          title: 'We review continuity',
          text: 'We discuss progress, pending items, and priorities for the next period.',
        },
      ],
      toolsTitle: 'Tools that support continuity',
      toolsIntro:
        'I select tools according to the agreed tasks, aiming to keep analyses organized, results updateable, and changes documented.',
      tools: [
        {
          name: 'R',
          text: 'Analysis and updates to graphs and tables.',
        },
        {
          name: 'Python',
          text: 'Data preparation and automation of repetitive tasks when appropriate.',
        },
        {
          name: 'Quarto',
          text: 'Reports that integrate methods, code, and results, and can be regenerated when the data are updated.',
        },
        {
          name: 'Git',
          text: 'A record of changes in scripts and documentation to maintain a history of the work.',
        },
      ],
      toolsNote:
        'Not every project requires every tool. Automation, deliverable code, and any additional development are defined in the scope.',
      scopeTitle: 'Scope of ongoing support',
      scopeText:
        'The service covers the tasks and working capacity agreed for each period. It does not imply unlimited availability or automatically include all Aurum services. New projects, major expansions, and additional development are quoted separately.',
      scopeNote:
        'Before we begin, we define the priorities, deliverables, and follow-up arrangement.',
      ctaBtn: 'Ask about monthly support',
      ctaNote:
        'Tell me which tasks repeat and what kind of support you need.',
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
            'We discuss your project, your dataset, your questions, your goals, and the result you need.',
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
      title: 'About Aurum BioStudio',
      text:
        'Aurum BioStudio helps labs, researchers, and biotech teams make biological data easier to understand and use. I combine practical data skills with clear communication so you receive results you can actually work with.',
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
      calendarUrl: CALENDAR_URL,
      calendarLinkLabel: 'Or pick a slot directly in my calendar',
      note:
        'No pressure. If I am not the right fit for your project, I will tell you clearly.',
      emailLabel: 'Prefer to start by email?',
      email: CONTACT_EMAIL,
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
      serviceInterestLabel: 'Service of interest',
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
      copyright: '© 2026 Aurum BioStudio. All rights reserved.',
      tagline:
        'Clear biological data analysis for labs, researchers, and biotech teams.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      backToTop: 'Back to top',
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
      brand: 'Aurum BioStudio',
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
        'Y me encargo de tu análisis, de principio a fin.',
      subtitle:
        'Ayudo a laboratorios de investigación y equipos biotech a analizar sus datos, crear visualizaciones claras y entender qué hacer después. Sin reportes interminables, solo resultados que realmente podés usar.',
      ctaButton: 'Contame sobre tu proyecto',
      ctaNote: 'Llamada gratuita. Sin compromiso.',
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
            'Una primera mirada a tu dataset, tus preguntas y la mejor forma de abordar el análisis.',
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
            'Una revisión enfocada para entender tu proyecto, el dataset y la mejor forma de abordar el análisis.',
          price: 'Desde US$ 100',
          timeline: '2–3 días hábiles',
          features: [
            'Revisión de la estructura del dataset',
            'Llamada para entender tu proyecto',
            'Preguntas principales o información faltante',
            'Plan claro para el próximo análisis',
          ],
          ctaText: 'Ver cómo funciona',
        },
        {
          id: 'analysis-report',
          title: 'Análisis + Reporte',
          badge: 'Más elegido',
          description:
            'Un análisis completo con visualizaciones, tablas y un reporte breve que explica los resultados.',
          price: 'Desde US$ 250',
          timeline: '5–10 días hábiles',
          features: [
            'Revisión de datos y análisis acordado',
            'Gráficos y tablas listos para usar',
            'Reportes',
            'Llamadas para presentar y conversar sobre los resultados',
          ],
          ctaText: 'Ver entregables y ejemplo',
        },
        {
          id: 'ongoing-support',
          title: 'Apoyo continuo',
          description:
            'Acompañamiento mensual para revisar nuevos datos, actualizar análisis y mantener gráficos, reportes y documentación al día.',
          price: 'Desde US$ 300 / mes',
          timeline: 'Alcance mensual acordado',
          features: [
            'Tareas y prioridades mensuales acordadas',
            'Revisión de nuevos datos y actualización de resultados',
            'Actualización de gráficos, tablas y reportes',
            'Seguimiento y documentación del trabajo',
          ],
          ctaText: 'Ver el acompañamiento',
        },
      ],
      note:
        'Los precios son iniciales. El precio final depende del dataset, la cantidad de muestras, el tipo de análisis y los entregables necesarios.',
    },

    dataReview: {
      closeBtn: 'Cerrar',
      title: 'Revisión de datos',
      lead: 'Entendé qué tenés, qué falta y cómo avanzar.',
      description:
        'Una revisión inicial para conocer tu proyecto, evaluar la estructura de tus datos y definir un próximo paso concreto.',
      price: 'Desde US$100 · 2–3 días hábiles',
      forYouTitle: 'Este servicio es para vos si…',
      forYou: [
        'Tenés datos, pero no sabés por dónde empezar.',
        'Necesitás saber qué información falta antes de analizar.',
        'Querés definir una pregunta y un alcance antes de encargar un análisis completo.',
      ],
      receiveTitle: 'Qué recibirías',
      receiveIntro: 'Un resumen de revisión con:',
      receive: [
        'Una descripción de los archivos y su organización.',
        'Observaciones sobre estructura, identificación de muestras e información faltante.',
        'Preguntas que conviene resolver antes del análisis.',
        'Un plan de próximos pasos.',
      ],
      receiveNote:
        'Incluye una llamada para entender el contexto de tu proyecto.',
      sampleTitle: 'Una muestra del entregable',
      sample: {
        title: 'Ejemplo de resumen de revisión',
        materialLabel: 'Material recibido',
        materialText:
          'Tabla de mediciones y archivo con información de las muestras.',
        clarifyLabel: 'Puntos por aclarar',
        clarifyText:
          'Unidades de medición, identificación de réplicas y criterios de exclusión.',
        nextLabel: 'Próximo paso propuesto',
        nextText:
          'Completar los metadatos y acordar la comparación principal antes de iniciar el análisis.',
        disclaimer:
          'Ejemplo demostrativo. No corresponde a un proyecto de cliente.',
      },
      howTitle: 'Cómo trabajo',
      howSteps: [
        'Me compartís los archivos y el contexto del proyecto por el canal acordado.',
        'Revisamos la estructura de los datos y la pregunta que querés responder.',
        'Recibís las observaciones y una propuesta de próximos pasos.',
      ],
      toolsTitle: 'Herramientas según el proyecto',
      tools: [
        {
          name: 'R',
          text: 'exploración y revisión de tablas.',
        },
        {
          name: 'Python',
          text: 'revisión y preparación de archivos cuando sea necesario.',
        },
      ],
      scopeTitle: 'Alcance',
      scopeText:
        'Esta etapa se enfoca en revisar y planificar. La limpieza extensa, el análisis estadístico y la elaboración de figuras se presupuestan por separado.',
      ctaBtn: 'Consultar por una revisión',
      ctaNote:
        'Contame qué datos tenés y qué te gustaría resolver.',
    },

    analysisReport: {
      closeBtn: 'Cerrar',
      title: 'Análisis + Reporte',
      lead: 'De una pregunta concreta a resultados que podés interpretar.',
      description:
        'Un análisis acordado según tu proyecto, con visualizaciones, tablas y un reporte breve que explica el enfoque, los resultados y sus limitaciones.',
      price: 'Desde US$ 250 · 5–10 días hábiles',
      forYouTitle: 'Este servicio es para vos si…',
      forYou: [
        'Ya tenés datos y una pregunta que querés responder.',
        'Necesitás transformar resultados en gráficos y tablas claros.',
        'Buscás una explicación de qué muestran los datos y qué no permiten concluir.',
      ],
      receiveTitle: 'Qué recibirías',
      receive: [
        'Un reporte breve con la pregunta, el enfoque utilizado, los resultados y sus limitaciones.',
        'Gráficos y tablas en los formatos acordados.',
        'Los archivos correspondientes a los entregables definidos para tu proyecto.',
        'Llamadas acordadas para presentar los resultados y conversar sobre ellos.',
      ],
      receiveNote:
        'Si necesitás código o archivos editables, su inclusión se define al acordar el alcance.',
      sample: {
        label: 'Vista ilustrativa de un reporte',
        title: 'Análisis de un ensayo biológico',
        subtitle: 'Ejemplo de estructura y presentación de resultados.',
        questionLabel: 'Pregunta',
        questionText:
          '¿Cómo cambia la respuesta medida entre las condiciones?',
        visualizationLabel: 'Visualización',
        figureSimulatedLabel: 'Datos simulados',
        figureTitle: 'Observaciones individuales por condición',
        axisLabel: 'Respuesta — unidades arbitrarias',
        conditionA: 'Condición A',
        conditionB: 'Condición B',
        figureAlt:
          'Gráfico de puntos con observaciones individuales simuladas de dos condiciones. Cada punto representa una observación; la condición A se muestra con círculos y la condición B con cuadrados. Los valores de respuesta se distribuyen en un rango similar y se superponen. Es una ilustración, no un resultado experimental.',
        figureDescription:
          'Ilustración con datos simulados. La condición A se representa con círculos y la condición B con cuadrados. Las observaciones de ambos grupos se superponen en el rango mostrado.',
        interpretationLabel: 'Interpretación',
        interpretationText:
          'Las observaciones de ambas condiciones se distribuyen en rangos que se superponen. La figura permite comparar la posición y la dispersión de cada grupo; no se presenta una prueba estadística ni se afirma una diferencia entre las condiciones.',
        methodsLabel: 'Métodos y limitaciones',
        methodsText:
          'La muestra ilustra cómo se organizarían la pregunta, la visualización y la interpretación. En un proyecto real, el enfoque, las pruebas y las limitaciones se definen según el diseño experimental, la cantidad de observaciones y la naturaleza de los datos.',
        disclaimer:
          'Ejemplo ilustrativo con datos simulados. El enfoque y los entregables se definen según cada proyecto.',
      },
      howTitle: 'Cómo trabajo',
      howSteps: [
        {
          title: 'Definimos la pregunta',
          text: 'Acordamos qué querés resolver, qué archivos se necesitan y cuáles serán los entregables.',
        },
        {
          title: 'Desarrollo el análisis',
          text: 'Reviso los datos y trabajo sobre el enfoque acordado.',
        },
        {
          title: 'Revisamos los resultados',
          text: 'Recibís el reporte, los gráficos y las tablas, y conversamos sobre su interpretación y los próximos pasos.',
        },
      ],
      toolsTitle: 'Herramientas según el proyecto',
      tools: [
        {
          name: 'R',
          text: 'análisis estadístico y visualización.',
        },
        {
          name: 'Python',
          text: 'preparación de datos y automatización cuando el proyecto lo requiere.',
        },
        {
          name: 'Quarto',
          text: 'elaboración de reportes que integran texto, código y resultados.',
        },
      ],
      toolsNote:
        'Las herramientas se seleccionan según los datos, la pregunta y el formato de entrega.',
      scopeTitle: 'Alcance',
      scopeText:
        'El presupuesto final depende de la cantidad y el estado de los archivos, la complejidad del análisis y los entregables acordados. Las nuevas preguntas o ampliaciones se cotizan por separado.',
      scopeNote:
        'El plazo se confirma al definir el alcance y revisar el material disponible.',
      ctaBtn: 'Consultar por mi análisis',
      ctaNote:
        'Contame qué querés investigar y en qué estado están tus datos.',
    },

    ongoingSupport: {
      closeBtn: 'Cerrar',
      title: 'Apoyo continuo',
      lead:
        'Continuidad para tus datos, tus resultados y los próximos pasos.',
      description:
        'Un acompañamiento mensual para trabajar sobre las necesidades de datos que aparecen durante tu proyecto: revisar nuevos archivos, actualizar análisis y mantener los resultados y la documentación organizados.',
      price: 'Desde US$ 300/mes · Alcance mensual acordado',
      forYouTitle: 'Este servicio es para vos si…',
      forYou: [
        'Tu equipo genera nuevos datos de manera recurrente.',
        'Necesitás actualizar análisis, figuras o reportes a medida que avanza el proyecto.',
        'Buscás continuidad en el trabajo y un registro claro de lo realizado.',
      ],
      receiveTitle: 'Qué recibirías',
      receive: [
        'Prioridades y entregables definidos para cada período.',
        'Revisión de nuevos archivos y actualización de los análisis acordados.',
        'Gráficos, tablas o reportes actualizados según las tareas contratadas.',
        'Un registro de avances, decisiones y pendientes.',
        'Instancias de consulta y revisión según la modalidad acordada.',
      ],
      sample: {
        label: 'Vista ilustrativa del acompañamiento',
        title: 'Así podría organizarse un período de trabajo',
        intro:
          'Las tareas se priorizan según las necesidades del proyecto y la capacidad de trabajo acordada.',
        taskLabel: 'Tarea acordada',
        outcomeLabel: 'Resultado previsto',
        rows: [
          {
            task: 'Revisar nuevos archivos.',
            outcome:
              'Observaciones sobre estructura e información pendiente.',
          },
          {
            task: 'Actualizar un análisis y sus figuras.',
            outcome: 'Resultados actualizados con los datos acordados.',
          },
          {
            task: 'Actualizar el reporte y documentar cambios.',
            outcome:
              'Una nueva versión del reporte y un resumen de las modificaciones realizadas.',
          },
        ],
        disclaimer:
          'Ejemplo ilustrativo. No representa una cantidad fija de tareas incluida en el precio inicial.',
      },
      howTitle: 'Cómo trabajo',
      howSteps: [
        {
          title: 'Definimos las prioridades',
          text: 'Acordamos las necesidades del período, los entregables y la capacidad de trabajo.',
        },
        {
          title: 'Avanzamos sobre las tareas',
          text: 'Reviso nuevos datos, actualizo los resultados acordados y documento los cambios relevantes.',
        },
        {
          title: 'Revisamos la continuidad',
          text: 'Conversamos sobre avances, pendientes y prioridades para el siguiente período.',
        },
      ],
      toolsTitle: 'Herramientas para dar continuidad al trabajo',
      toolsIntro:
        'Selecciono las herramientas según las tareas acordadas, buscando mantener los análisis organizados, los resultados actualizables y los cambios documentados.',
      tools: [
        {
          name: 'R',
          text: 'Análisis y actualización de gráficos y tablas.',
        },
        {
          name: 'Python',
          text: 'Preparación de datos y automatización de tareas repetitivas cuando corresponde.',
        },
        {
          name: 'Quarto',
          text: 'Reportes que integran métodos, código y resultados, y pueden volver a generarse al actualizar los datos.',
        },
        {
          name: 'Git',
          text: 'Registro de cambios en scripts y documentación para mantener un historial del trabajo.',
        },
      ],
      toolsNote:
        'No todos los proyectos requieren todas las herramientas. La automatización, el código entregable y cualquier desarrollo adicional se definen en el alcance.',
      scopeTitle: 'Alcance del acompañamiento',
      scopeText:
        'El servicio cubre las tareas y la capacidad de trabajo acordadas para cada período. No implica disponibilidad ilimitada ni incluye automáticamente todos los servicios de Aurum. Los proyectos nuevos, las ampliaciones importantes y los desarrollos adicionales se presupuestan por separado.',
      scopeNote:
        'Antes de comenzar, definimos las prioridades, los entregables y la modalidad de seguimiento.',
      ctaBtn: 'Consultar por apoyo mensual',
      ctaNote:
        'Contame qué tareas se repiten y qué tipo de acompañamiento necesitás.',
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
            'Hablamos sobre tu proyecto, tu dataset, tus dudas, tus objetivos y el resultado que necesitás.',
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
      title: 'Sobre Aurum BioStudio',
      text:
        'Aurum BioStudio ayuda a laboratorios, investigadores y pequeños equipos biotech a hacer que sus datos biológicos sean más fáciles de entender y usar. Combino habilidades prácticas de análisis con una comunicación clara para que recibas resultados con los que realmente puedas trabajar.',
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
      calendarUrl: CALENDAR_URL,
      calendarLinkLabel: 'O elegí un horario directo en mi calendario',
      note:
        'Sin presión. Si no soy la persona indicada para tu proyecto, te lo voy a decir con claridad.',
      emailLabel: '¿Preferís empezar por email?',
      email: CONTACT_EMAIL,
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
      serviceInterestLabel: 'Servicio de interés',
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
      copyright: '© 2026 Aurum BioStudio. Todos los derechos reservados.',
      tagline:
        'Análisis claro de datos biológicos para laboratorios, investigadores y pequeños equipos biotech.',
      privacy: 'Política de privacidad',
      terms: 'Términos del servicio',
      backToTop: 'Volver arriba',
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