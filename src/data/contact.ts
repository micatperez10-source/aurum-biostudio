import { Language } from '../types';

export const CONTACT_EMAIL = 'aurum.biostudio@gmail.com';

export const CALENDAR_URL = 'https://calendar.app.google/WYif7SfN72mDywPE7';

export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mdeedrnk';

const buildMailto = (email: string, subject: string, body: string) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const buildPlainMailto = (lang: Language): string =>
  lang === 'es'
    ? buildMailto(
        CONTACT_EMAIL,
        'Consulta sobre análisis de datos - Aurum BioStudio',
        `Hola Micaela / Aurum BioStudio,

Necesito ayuda con un proyecto de análisis de datos.

Para agendar una llamada y reservar un horario:
${CALENDAR_URL}

Saludos,`,
      )
    : buildMailto(
        CONTACT_EMAIL,
        'Biological data analysis inquiry - Aurum BioStudio',
        `Hello Micaela / Aurum BioStudio,

I need help with a data analysis project.

To book a call and reserve a slot:
${CALENDAR_URL}

Best regards,`,
      );
