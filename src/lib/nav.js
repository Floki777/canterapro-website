// Shared navigation + footer labels for both languages, keyed by page slug.
// Slug '' means the language's home page (/en/ or /es/).
// Keep this list in sync with the folders under src/pages/en/ and src/pages/es/ —
// it drives the header nav, the footer links, and the hreflang alternate tags.
export const SLUGS = [
  '',
  'features',
  'pricing',
  'how-it-works',
  'about',
  'download',
  'support',
  'privacy',
  'terms',
];

export const NAV_LABELS = {
  en: {
    '': 'Home',
    features: 'Features',
    pricing: 'Pricing',
    'how-it-works': 'How It Works',
    about: 'About',
    download: 'Download',
    support: 'Support',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
  },
  es: {
    '': 'Inicio',
    features: 'Funciones',
    pricing: 'Precios',
    'how-it-works': 'Cómo Funciona',
    about: 'Nosotros',
    download: 'Descargar',
    support: 'Soporte',
    privacy: 'Política de Privacidad',
    terms: 'Términos de Servicio',
  },
};

// Slugs shown in the primary header nav (privacy/terms live in the footer only).
export const PRIMARY_NAV_SLUGS = ['', 'features', 'pricing', 'how-it-works', 'about', 'support'];
