export type Language = 'en' | 'es';

export interface NavContent {
  brand: string;
  subbrand: string;
  badge: string;
  home: string;
  whatIDo: string;
  services: string;
  howIWork: string;
  about: string;
  faq: string;
  contact: string;
  bookCall: string;
  docsBtn: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  ctaButton: string;
  ctaNote: string;
}

export interface WhatIDoItem {
  id: string;
  title: string;
  description: string;
}

export interface WhatIDoContent {
  tag: string;
  title: string;
  intro: string;
  items: WhatIDoItem[];
}

export interface ServicePackage {
  id: string;
  title: string;
  description: string;
  price: string;
  timeline?: string;
  badge?: string;
  features: string[];
  ctaText: string;
}

export interface ServicesContent {
  tag: string;
  title: string;
  intro: string;
  packages: ServicePackage[];
  note: string;
}

export interface ProcessStep {
  number: number;
  time: string;
  title: string;
  description: string;
}

export interface ProcessContent {
  tag: string;
  title: string;
  subtitle: string;
  stepPrefix: string;
  ndaNote: string;
  ctaButton: string;
  steps: ProcessStep[];
}

export interface HowIWorkStep {
  step: number;
  title: string;
  description: string;
}

export interface HowIWorkContent {
  title: string;
  intro: string;
  steps: HowIWorkStep[];
}

export interface AboutContent {
  title: string;
  text: string;
  bullets: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQContent {
  title: string;
  items: FAQItem[];
}

export interface ContactContent {
  title: string;
  text: string;
  button: string;
  calendarUrl: string;
  calendarLinkLabel: string;
  note: string;
  emailLabel: string;
  email: string;
}

export interface ContactModalContent {
  closeBtn: string;
  title: string;
  subtitle: string;
  emailLabel: string;
  copyEmail: string;
  copiedEmail: string;
  formTitle: string;
  nameLabel: string;
  namePlaceholder: string;
  emailFieldLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  sendBtn: string;
  sendingBtn: string;
  successMessage: string;
  errorMessage: string;
  uncertainMessage: string;
  emailValidationError: string;
  messageValidationError: string;
  privacyNote: string;
  formspreeNote: string;
  serviceInterestLabel: string;
}

export interface DataReviewTool {
  name: string;
  text: string;
}

export interface DataReviewSampleContent {
  title: string;
  materialLabel: string;
  materialText: string;
  clarifyLabel: string;
  clarifyText: string;
  nextLabel: string;
  nextText: string;
  disclaimer: string;
}

export interface DataReviewContent {
  closeBtn: string;
  title: string;
  lead: string;
  price: string;
  sampleTitle: string;
  sample: DataReviewSampleContent;
  howTitle: string;
  howSteps: string[];
  toolsTitle: string;
  tools: DataReviewTool[];
  toolsNote: string;
  scopeTitle: string;
  scopeText: string;
  ctaBtn: string;
  ctaNote: string;
}

export interface AnalysisReportSampleContent {
  label: string;
  title: string;
  subtitle: string;
  questionLabel: string;
  questionText: string;
  visualizationLabel: string;
  figureSimulatedLabel: string;
  figureTitle: string;
  axisLabel: string;
  conditionA: string;
  conditionB: string;
  figureAlt: string;
  figureDescription: string;
  interpretationLabel: string;
  interpretationText: string;
  methodsLabel: string;
  methodsText: string;
  disclaimer: string;
}

export interface AnalysisReportStep {
  title: string;
  text: string;
}

export interface AnalysisReportContent {
  closeBtn: string;
  title: string;
  lead: string;
  price: string;
  sample: AnalysisReportSampleContent;
  howTitle: string;
  howSteps: AnalysisReportStep[];
  toolsTitle: string;
  tools: DataReviewTool[];
  toolsNote: string;
  scopeTitle: string;
  scopeText: string;
  scopeNote: string;
  ctaBtn: string;
  ctaNote: string;
}

export interface OngoingSupportSampleRow {
  task: string;
  outcome: string;
}

export interface OngoingSupportSampleContent {
  label: string;
  title: string;
  intro: string;
  taskLabel: string;
  outcomeLabel: string;
  rows: OngoingSupportSampleRow[];
  disclaimer: string;
}

export interface OngoingSupportContent {
  closeBtn: string;
  title: string;
  lead: string;
  price: string;
  sample: OngoingSupportSampleContent;
  howTitle: string;
  howSteps: AnalysisReportStep[];
  toolsTitle: string;
  tools: DataReviewTool[];
  toolsNote: string;
  scopeTitle: string;
  scopeText: string;
  scopeNote: string;
  ctaBtn: string;
  ctaNote: string;
}

export interface DeliverableItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  format: string;
}

export interface DeliverablePreview {
  title: string;
  subtitle: string;
  p1: string;
  p2: string;
  p3: string;
  highlight: string;
}

export interface DeliverablesContent {
  tag: string;
  title: string;
  subtitle: string;
  selectedBadge: string;
  viewDetail: string;
  previewHeader: string;
  previewBadge: string;
  items: DeliverableItem[];
  previews: Record<string, DeliverablePreview>;
}

export interface FooterContent {
  copyright: string;
  tagline: string;
  privacy: string;
  terms: string;
  backToTop: string;
}

export interface DocsModalContent {
  badge: string;
  title: string;
  subtitle: string;
  closeBtn: string;
  allCategory: string;
  downloadPdf: string;
  viewInBrowser: string;
  noDocs: string;
}

export interface Attachment {
  id: string;
  title: string;
  filename: string;
  fileSize: string;
  category: string;
  categoryLabel: string;
  folderPath: string;
  webPath: string;
  badge: string;
  description: string;
  previewSummary: string[];
}

export interface TranslationContent {
  nav: NavContent;
  hero: HeroContent;
  whatIDo: WhatIDoContent;
  services: ServicesContent;
  process: ProcessContent;
  howIWork: HowIWorkContent;
  about: AboutContent;
  faq: FAQContent;
  contact: ContactContent;
  contactModal: ContactModalContent;
  dataReview: DataReviewContent;
  analysisReport: AnalysisReportContent;
  ongoingSupport: OngoingSupportContent;
  deliverables: DeliverablesContent;
  footer: FooterContent;
  docsModal: DocsModalContent;
  attachments: Attachment[];
}