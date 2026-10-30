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
            'We review how your data are organized, what information is missing, and how to move your project forward.',
          price: 'From US$ 90',
          timeline: '2–3 business days',
          features: [
            'Review of your files and how they are organized',
            'Call to learn about your project and your needs',
            'Identification of missing information and points to clarify',
            'Summary with recommendations and next steps',
          ],
          ctaText: 'See how it works',
        },
        {
          id: 'analysis-report',
          title: 'Analysis + Report',
          badge: 'Most popular',
          description:
            'I analyze your data according to your project goals and deliver graphs, tables, and a brief report to help you understand the results.',
          price: 'From US$ 108',
          timeline: '5–10 business days',
          features: [
            'Initial data review and development of the agreed analysis',
            'Graphs and tables in the agreed formats',
            'A brief report with methods, results, and limitations',
            'Presentation and consultation meetings as agreed',
          ],
          ctaText: 'See deliverables and example',
        },
        {
          id: 'ongoing-support',
          title: 'Ongoing Support',
          description:
            'Monthly support to review data, develop or update analyses, and keep your results organized.',
          price: 'From US$ 300/month',
          timeline: 'Agreed monthly work plan',
          features: [
            'Support with data and analysis according to your project needs',
            'Creation or updating of graphs, tables, and reports',
            'Record of progress, changes, and next steps',
            'Consultation and review sessions as agreed',
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
        'Understand where your data stand and what you need to move forward.',
      price: 'From US$90 · 2–3 business days',
      sampleTitle: 'A sample of what you receive',
      sample: {
        title: 'Example review summary',
        materialLabel: 'Files reviewed',
        materialText:
          'A measurement table and a file with sample information.',
        clarifyLabel: 'Information to complete',
        clarifyText:
          'Measurement units, sample identification, and the distinction between repeated measurements and independent samples.',
        nextLabel: 'Recommended next steps',
        nextText:
          'Complete the sample information and review the project goals to propose an analysis approach.',
        disclaimer:
          'Demonstration example. It does not correspond to a client project.',
      },
      howTitle: 'How I work',
      howSteps: [
        'You tell me about your project and share the files through the agreed channel.',
        'I review how the data are organized and identify missing information and points to clarify.',
        'You receive the review document with observations and next steps.',
      ],
      toolsTitle: 'Tools depending on the project',
      tools: [
        {
          name: 'R',
          text: 'Initial exploration of tables and review of their structure.',
        },
        {
          name: 'Python',
          text: 'Review of files and initial checks when appropriate.',
        },
      ],
      toolsNote:
        'Tools are chosen according to the files and the needs of the project.',
      scopeTitle: 'What this stage includes',
      scopeText:
        'This review includes observations and recommendations, as well as correcting and reorganizing your files. It does not include performing statistical analysis or creating graphs. If you need those services, they are agreed on and quoted separately.',
      ctaBtn: 'Ask about a review',
      ctaNote:
        'Tell me about your project and the data you have, even if you don’t know where to start yet.',
    },

    analysisReport: {
      closeBtn: 'Close',
      title: 'Analysis + Report',
      lead: 'From your data to clear, well-documented results.',
      price: 'From US$ 108 · 5–10 business days',
      sample: {
        label: 'Illustrative report view',
        title: 'Analysis of a biological assay',
        subtitle: 'Simulated data to show the structure of the deliverable.',
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
          'Dot plot with simulated observations from two conditions. Condition A is shown with circles and Condition B with squares. The response values fall in a similar, overlapping range.',
        figureDescription:
          'Condition A is shown with circles and Condition B with squares. Observations from both groups overlap across the displayed range.',
        interpretationLabel: 'Interpretation',
        interpretationText:
          'Measurements from both conditions overlap. The figure allows exploring their distribution, but on its own it does not allow concluding that a statistical difference exists.',
        methodsLabel: 'About this example',
        methodsText:
          'Individual observations from two conditions are shown using simulated data. No statistical test was performed. In a real project, methods and limitations are documented according to the experimental design and the available data.',
        disclaimer:
          'Demonstration example. It does not correspond to a client project.',
      },
      howTitle: 'How I work',
      howSteps: [
        {
          title: 'We talk about your project',
          text: 'We review your goals, the available data, and your analysis needs. We agree on the work and the deliverables.',
        },
        {
          title: 'I develop the analysis',
          text: 'I review the data and carry out the agreed work, documenting the methods and relevant decisions.',
        },
        {
          title: 'We review the results',
          text: 'You receive the report, graphs, and tables. We discuss their interpretation, any questions that come up, and next steps.',
        },
      ],
      toolsTitle: 'Tools depending on the project',
      tools: [
        {
          name: 'R',
          text: 'Statistical analysis and visualization.',
        },
        {
          name: 'Python',
          text: 'Data preparation and automation when the project requires it.',
        },
        {
          name: 'Quarto',
          text: 'Reports that integrate text, code, and results.',
        },
      ],
      toolsNote:
        'Tools are selected according to the data, the project goals, and the delivery format.',
      scopeTitle: 'What we agree on before we begin',
      scopeText:
        'We define the work, deliverables, budget, and timeline according to the available data and the needs of the project. If new analyses, data, or deliverables are later added that expand the agreed work, we review the budget before moving forward.',
      scopeNote:
        'The timeline is confirmed after reviewing the material and defining the work.',
      ctaBtn: 'Ask about my analysis',
      ctaNote:
        'Tell me about your project and what you need to analyze, even if you don’t have everything defined yet.',
    },

    ongoingSupport: {
      closeBtn: 'Close',
      title: 'Ongoing Support',
      lead:
        'Support to move forward with your data as your project grows.',
      price: 'From US$ 300/month · Agreed monthly work plan',
      sample: {
        label: 'Illustrative view of ongoing support',
        title: 'Example of a monthly plan',
        intro:
          'Tasks and deliverables are defined according to the needs of the project.',
        taskLabel: 'Task',
        outcomeLabel: 'Expected deliverable',
        rows: [
          {
            task: 'Review new files.',
            outcome:
              'Observations on the available information and what remains to be completed.',
          },
          {
            task: 'Update an analysis and its figures.',
            outcome: 'Updated results and graphs.',
          },
          {
            task: 'Review the report and record changes.',
            outcome:
              'A new version of the report and a summary of modifications.',
          },
        ],
        disclaimer:
          'Demonstration example. The tasks included are defined in each proposal.',
      },
      howTitle: 'How I work',
      howSteps: [
        {
          title: 'We organize the work',
          text: 'We discuss your needs and define the tasks, deliverables, and priorities for the month.',
        },
        {
          title: 'We move forward with the data',
          text: 'I carry out the agreed tasks and document relevant changes in the analyses and results.',
        },
        {
          title: 'We review progress',
          text: 'We discuss what was done, resolve questions, and adjust priorities for the next steps.',
        },
      ],
      toolsTitle: 'Tools depending on the project',
      tools: [
        {
          name: 'R',
          text: 'Analysis and creation or updating of graphs and tables.',
        },
        {
          name: 'Python',
          text: 'Data preparation and automation of repetitive tasks when appropriate.',
        },
        {
          name: 'Quarto',
          text: 'Reports that integrate methods, code, and results.',
        },
        {
          name: 'Git',
          text: 'History of changes in scripts and documentation.',
        },
      ],
      toolsNote:
        'Not every project requires every tool. Automation, code delivery, and additional development are agreed before they are carried out.',
      scopeTitle: 'What we agree on before we begin',
      scopeText:
        'We define which tasks and deliverables the monthly plan includes, how the deliverables will be organized, and how consultation and follow-up will work.',
      scopeNote:
        'If work comes up that is outside the plan, I propose the corresponding budget adjustment before moving forward.',
      ctaBtn: 'Ask about monthly support',
      ctaNote:
        'Tell me about your project and where you need support.',
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
            'Revisamos cómo están organizados tus datos, qué información falta y cómo avanzar con tu proyecto.',
          price: 'Desde US$ 90',
          timeline: '2–3 días hábiles',
          features: [
            'Revisión de tus archivos y de cómo están organizados.',
            'Llamada para conocer tu proyecto y tus necesidades.',
            'Identificación de información faltante y puntos por aclarar.',
            'Resumen con recomendaciones y próximos pasos.',
          ],
          ctaText: 'Ver cómo funciona',
        },
        {
          id: 'analysis-report',
          title: 'Análisis + Reporte',
          badge: 'Más elegido',
          description:
            'Analizo tus datos según los objetivos de tu proyecto y te entrego gráficos, tablas y un reporte breve para entender los resultados.',
          price: 'Desde US$ 108',
          timeline: '5–10 días hábiles',
          features: [
            'Revisión inicial de los datos y desarrollo del análisis acordado.',
            'Gráficos y tablas en los formatos acordados.',
            'Un reporte breve con métodos, resultados y limitaciones.',
            'Reuniones de presentación y consulta según lo acordado.',
          ],
          ctaText: 'Ver entregables y ejemplo',
        },
        {
          id: 'ongoing-support',
          title: 'Apoyo continuo',
          description:
            'Acompañamiento mensual para revisar datos, desarrollar o actualizar análisis y mantener tus resultados organizados.',
          price: 'Desde US$ 300/mes',
          timeline: 'Plan de trabajo mensual acordado',
          features: [
            'Apoyo con datos y análisis según las necesidades del proyecto.',
            'Elaboración o actualización de gráficos, tablas y reportes.',
            'Registro de avances, cambios y próximos pasos.',
            'Espacios de consulta y revisión según lo acordado.',
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
      lead: 'Entendé cómo están tus datos y qué necesitás para avanzar.',
      price: 'Desde US$90 · 2–3 días hábiles',
      sampleTitle: 'Una muestra de lo que recibís',
      sample: {
        title: 'Ejemplo de resumen de revisión',
        materialLabel: 'Archivos revisados',
        materialText:
          'Una tabla de mediciones y un archivo con información de las muestras.',
        clarifyLabel: 'Información por completar',
        clarifyText:
          'Unidades de medición, identificación de las muestras y distinción entre mediciones repetidas y muestras independientes.',
        nextLabel: 'Próximos pasos recomendados',
        nextText:
          'Completar la información de las muestras y revisar los objetivos del proyecto para proponer un enfoque de análisis.',
        disclaimer:
          'Ejemplo demostrativo. No corresponde a un proyecto de cliente.',
      },
      howTitle: 'Cómo trabajo',
      howSteps: [
        'Me contás sobre tu proyecto y compartís los archivos por el canal acordado.',
        'Reviso cómo están organizados los datos e identifico información faltante y puntos por aclarar.',
        'Recibís el documento de revisión con observaciones y próximos pasos.',
      ],
      toolsTitle: 'Herramientas según el proyecto',
      tools: [
        {
          name: 'R',
          text: 'Exploración inicial de tablas y revisión de su estructura.',
        },
        {
          name: 'Python',
          text: 'Revisión de archivos y comprobaciones iniciales cuando corresponde.',
        },
      ],
      toolsNote:
        'Las herramientas se eligen según los archivos y las necesidades del proyecto.',
      scopeTitle: 'Qué incluye esta etapa',
      scopeText:
        'Esta revisión incluye observaciones y recomendaciones, y también corregir y reorganizar los archivos. No incluye realizar el análisis estadístico ni elaborar gráficos. Si necesitás esos trabajos, se acuerdan y presupuestan por separado.',
      ctaBtn: 'Consultar por una revisión',
      ctaNote:
        'Contame sobre tu proyecto y los datos que tenés, aunque todavía no sepas por dónde empezar.',
    },

    analysisReport: {
      closeBtn: 'Cerrar',
      title: 'Análisis + Reporte',
      lead: 'De tus datos a resultados claros y bien documentados.',
      price: 'Desde US$ 108 · 5–10 días hábiles',
      sample: {
        label: 'Vista ilustrativa de un reporte',
        title: 'Análisis de un ensayo biológico',
        subtitle: 'Datos simulados para mostrar la estructura del entregable.',
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
          'Gráfico de puntos con observaciones simuladas de dos condiciones. La condición A se muestra con círculos y la condición B con cuadrados. Los valores de respuesta se distribuyen en un rango similar y se superponen.',
        figureDescription:
          'La condición A se representa con círculos y la condición B con cuadrados. Las observaciones de ambos grupos se superponen en el rango mostrado.',
        interpretationLabel: 'Interpretación',
        interpretationText:
          'Las mediciones de ambas condiciones se superponen. La figura permite explorar su distribución, pero por sí sola no permite concluir que exista una diferencia estadística.',
        methodsLabel: 'Sobre este ejemplo',
        methodsText:
          'Se muestran observaciones individuales de dos condiciones con datos simulados. No se realizó una prueba estadística. En un proyecto real, los métodos y las limitaciones se documentan según el diseño experimental y los datos disponibles.',
        disclaimer:
          'Ejemplo demostrativo. No corresponde a un proyecto de cliente.',
      },
      howTitle: 'Cómo trabajo',
      howSteps: [
        {
          title: 'Conversamos sobre tu proyecto',
          text: 'Revisamos tus objetivos, los datos disponibles y las necesidades de análisis. Acordamos el trabajo y los entregables.',
        },
        {
          title: 'Desarrollo el análisis',
          text: 'Reviso los datos y realizo el trabajo acordado, documentando los métodos y las decisiones relevantes.',
        },
        {
          title: 'Revisamos los resultados',
          text: 'Recibís el reporte, los gráficos y las tablas. Conversamos sobre su interpretación, las dudas que surjan y los próximos pasos.',
        },
      ],
      toolsTitle: 'Herramientas según el proyecto',
      tools: [
        {
          name: 'R',
          text: 'Análisis estadístico y visualización.',
        },
        {
          name: 'Python',
          text: 'Preparación de datos y automatización cuando el proyecto lo requiere.',
        },
        {
          name: 'Quarto',
          text: 'Elaboración de reportes que integran texto, código y resultados.',
        },
      ],
      toolsNote:
        'Las herramientas se seleccionan según los datos, los objetivos del proyecto y el formato de entrega.',
      scopeTitle: 'Qué se acuerda antes de comenzar',
      scopeText:
        'Definimos el trabajo, los entregables, el presupuesto y el plazo según los datos disponibles y las necesidades del proyecto. Si después se incorporan nuevos análisis, datos o entregables que amplíen el trabajo acordado, revisamos el presupuesto antes de avanzar.',
      scopeNote:
        'El plazo se confirma al revisar el material y definir el trabajo.',
      ctaBtn: 'Consultar por mi análisis',
      ctaNote:
        'Contame sobre tu proyecto y lo que necesitás analizar, aunque todavía no tengas todo definido.',
    },

    ongoingSupport: {
      closeBtn: 'Cerrar',
      title: 'Apoyo continuo',
      lead:
        'Acompañamiento para avanzar con tus datos a medida que crece tu proyecto.',
      price: 'Desde US$ 300/mes · Plan de trabajo mensual acordado',
      sample: {
        label: 'Vista ilustrativa del acompañamiento',
        title: 'Ejemplo de un plan mensual',
        intro:
          'Las tareas y los entregables se definen según las necesidades del proyecto.',
        taskLabel: 'Tarea',
        outcomeLabel: 'Entregable previsto',
        rows: [
          {
            task: 'Revisar nuevos archivos.',
            outcome:
              'Observaciones sobre la información disponible y lo que falta completar.',
          },
          {
            task: 'Actualizar un análisis y sus figuras.',
            outcome: 'Resultados y gráficos actualizados.',
          },
          {
            task: 'Revisar el reporte y registrar cambios.',
            outcome:
              'Nueva versión del reporte y resumen de modificaciones.',
          },
        ],
        disclaimer:
          'Ejemplo demostrativo. Las tareas incluidas se definen en cada propuesta.',
      },
      howTitle: 'Cómo trabajo',
      howSteps: [
        {
          title: 'Organizamos el trabajo',
          text: 'Conversamos sobre tus necesidades y definimos las tareas, los entregables y las prioridades del mes.',
        },
        {
          title: 'Avanzamos con los datos',
          text: 'Realizo las tareas acordadas y documento los cambios relevantes en los análisis y resultados.',
        },
        {
          title: 'Revisamos los avances',
          text: 'Conversamos sobre lo realizado, resolvemos dudas y ajustamos las prioridades para los próximos pasos.',
        },
      ],
      toolsTitle: 'Herramientas según el proyecto',
      tools: [
        {
          name: 'R',
          text: 'Análisis y elaboración o actualización de gráficos y tablas.',
        },
        {
          name: 'Python',
          text: 'Preparación de datos y automatización de tareas repetitivas cuando corresponde.',
        },
        {
          name: 'Quarto',
          text: 'Reportes que integran métodos, código y resultados.',
        },
        {
          name: 'Git',
          text: 'Historial de cambios en scripts y documentación.',
        },
      ],
      toolsNote:
        'No todos los proyectos requieren todas las herramientas. La automatización, la entrega de código y los desarrollos adicionales se acuerdan antes de realizarlos.',
      scopeTitle: 'Qué se acuerda antes de comenzar',
      scopeText:
        'Definimos qué tareas y entregables incluye el plan mensual, cómo se organizarán las entregas y cuál será la modalidad de consulta y seguimiento.',
      scopeNote:
        'Si surge trabajo que queda fuera del plan, te propongo el ajuste de presupuesto correspondiente antes de avanzar.',
      ctaBtn: 'Consultar por apoyo mensual',
      ctaNote:
        'Contame sobre tu proyecto y en qué necesitás acompañamiento.',
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