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
  messageLabel: string;
  messagePlaceholder: string;
  sendBtn: string;
  securityNote: string;
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
  deliverables: DeliverablesContent;
  footer: FooterContent;
  docsModal: DocsModalContent;
  attachments: Attachment[];
}