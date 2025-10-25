import { EventCard, PricingTier, PricingExtra, Testimonial, ProcessStep, TrustBadge, VideoItem } from '../types';
import { EVENT_IMAGES, TESTIMONIAL_IMAGES, VIDEO_THUMBNAILS } from './imagePlaceholders';

export const EVENT_CARDS: EventCard[] = [
  {
    id: 'hochzeiten',
    title: 'Hochzeiten',
    description: 'Romantische Feuerwerk-Shows für den schönsten Tag',
    icon: '💒',
    image: EVENT_IMAGES.hochzeiten,
    accentColor: 'red'
  },
  {
    id: 'firmenfeiern',
    title: 'Firmenfeiern',
    description: 'Professionelle Pyrotechnik für Corporate Events',
    icon: '🏢',
    image: EVENT_IMAGES.firmenfeiern,
    accentColor: 'gold'
  },
  {
    id: 'festivals',
    title: 'Festivals',
    description: 'Spektakuläre Großfeuerwerke für Veranstaltungen',
    icon: '🎪',
    image: EVENT_IMAGES.festivals,
    accentColor: 'red'
  },
  {
    id: 'stadtfeste',
    title: 'Stadtfeste',
    description: 'Große Veranstaltungen mit beeindruckenden Shows',
    icon: '🎉',
    image: EVENT_IMAGES.stadtfeste,
    accentColor: 'gold'
  },
  {
    id: 'geburtstage',
    title: 'Geburtstage',
    description: 'Besondere Momente mit personalisierten Effekten',
    icon: '🎂',
    image: EVENT_IMAGES.geburtstage,
    accentColor: 'red'
  },
  {
    id: 'silvester',
    title: 'Silvester',
    description: 'Countdown-Feuerwerk für den Jahreswechsel',
    icon: '🎆',
    image: EVENT_IMAGES.silvester,
    accentColor: 'gold'
  },
  {
    id: 'jahrestage',
    title: 'Jahrestage',
    description: 'Romantische Effekte für besondere Anlässe',
    icon: '💝',
    image: EVENT_IMAGES.jahrestage,
    accentColor: 'red'
  },
  {
    id: 'produktlaunches',
    title: 'Produktlaunches',
    description: 'Brand-Events mit spektakulären Effekten',
    icon: '🚀',
    image: EVENT_IMAGES.produktlaunches,
    accentColor: 'gold'
  },
  {
    id: 'konzerte',
    title: 'Konzerte',
    description: 'Musik-synchronisierte Pyrotechnik-Shows',
    icon: '🎵',
    image: EVENT_IMAGES.konzerte,
    accentColor: 'red'
  },
  {
    id: 'sportevents',
    title: 'Sportevents',
    description: 'Stadion-Shows für große Sportveranstaltungen',
    icon: '⚽',
    image: EVENT_IMAGES.sportevents,
    accentColor: 'gold'
  },
  {
    id: 'hochzeitstaenze',
    title: 'Hochzeitstänze',
    description: 'Indoor Sparklers für den ersten Tanz',
    icon: '💃',
    image: EVENT_IMAGES.hochzeitstaenze,
    accentColor: 'red'
  },
  {
    id: 'heiratsantraege',
    title: 'Heiratsanträge',
    description: 'Magische Momente mit speziellen Effekten',
    icon: '💍',
    image: EVENT_IMAGES.heiratsantraege,
    accentColor: 'gold'
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'einsteiger',
    name: 'EINSTEIGERPAKET',
    price: '699€',
    description: 'Perfekt für den Einstieg',
    features: [
      'Dauer: ca. 4-5 Minuten',
      'Abschusspositionen: 1',
      'Pyrotechniker inklusive',
      'Servicepaket inklusive',
      'Sicherheitscheck',
      'Genehmigungs-Support'
    ],
    isFeatured: false,
    ctaText: 'Paket wählen',
    ctaVariant: 'secondary'
  },
  {
    id: 'standard',
    name: 'STANDARDPAKET',
    price: '1.199€',
    description: 'Bestseller',
    features: [
      'Dauer: ca. 5-6 Minuten',
      'Abschusspositionen: 2',
      'Pyrotechniker inklusive',
      'Servicepaket inklusive',
      'Erweiterte Effekte',
      'Volle Genehmigung'
    ],
    isFeatured: true,
    ctaText: 'Jetzt buchen ⚡',
    ctaVariant: 'primary'
  },
  {
    id: 'premium',
    name: 'PREMIUMPAKET',
    price: '1.799€',
    description: 'Für besondere Anlässe',
    features: [
      'Dauer: ca. 6-7 Minuten',
      'Abschusspositionen: 3',
      'Pyrotechniker inklusive',
      'Servicepaket inklusive',
      'Premium Effekte',
      'Individuelle Beratung'
    ],
    isFeatured: false,
    ctaText: 'Paket wählen',
    ctaVariant: 'secondary'
  },
  {
    id: 'grand-feuerwerk',
    name: 'GRAND FEUERWERK',
    price: 'ab 2.799€',
    description: 'Das ultimative Spektakel',
    features: [
      'Dauer: ab 7 Minuten',
      'Abschusspositionen: Mehrere (mind. 4)',
      'Pyrotechniker inklusive',
      'Servicepaket inklusive',
      'Spezialeffekte',
      'Custom Choreografie'
    ],
    isFeatured: false,
    ctaText: 'Beratung anfragen',
    ctaVariant: 'secondary'
  }
];

export const PRICING_EXTRAS: PricingExtra[] = [
  {
    id: 'musik-synchronisation',
    name: 'Musik-Synchronisation',
    price: '149€',
    description: 'Feuerwerk perfekt zur Musik',
    icon: '🎵'
  },
  {
    id: 'lichterbilder',
    name: 'Lichterbilder',
    price: '59€',
    description: 'Spezielle Lichteffekte',
    icon: '💡'
  },
  {
    id: 'feuerschalen',
    name: 'Feuerschalen',
    price: '49€',
    description: 'Romantische Feuerschalen',
    icon: '🔥'
  },
  {
    id: 'grand-finale',
    name: 'Grand Finale',
    price: '189€',
    description: 'Spektakulärer Abschluss',
    icon: '🎆'
  },
  {
    id: 'spezialeffekte',
    name: 'Spezialeffekte',
    price: '199€',
    description: 'Einzigartige Effekte',
    icon: '✨'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'anna-michael',
    name: 'Anna & Michael Schmidt',
    event: 'Hochzeit',
    location: 'München, Juli 2024',
    text: 'Das Team von Pyrotech hat unsere Hochzeit in ein magisches Erlebnis verwandelt. Professionell, pünktlich und einfach atemberaubend! Unsere Gäste sprechen heute noch davon.',
    rating: 5,
    image: TESTIMONIAL_IMAGES['anna-michael']
  },
  {
    id: 'thomas-mueller',
    name: 'Thomas Müller',
    event: 'Firmenfeier',
    location: 'Düsseldorf, September 2024',
    text: 'Für unser 25-jähriges Firmenjubiläum wollten wir etwas Besonderes. Pyrotech hat eine unvergessliche Show geliefert, die alle unsere Kunden und Partner begeistert hat.',
    rating: 5,
    image: TESTIMONIAL_IMAGES['thomas-mueller']
  },
  {
    id: 'sarah-weber',
    name: 'Sarah Weber',
    event: 'Geburtstag',
    location: 'Berlin, August 2024',
    text: 'Mein 30. Geburtstag war dank Pyrotech ein absolutes Highlight! Die Show war perfekt auf meine Wünsche abgestimmt und hat alle meine Freunde zum Staunen gebracht.',
    rating: 5,
    image: TESTIMONIAL_IMAGES['sarah-weber']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'beratung',
    number: '1',
    title: 'BERATUNG',
    description: 'Kostenlose Erstberatung per Telefon',
    icon: '📞'
  },
  {
    id: 'planung',
    number: '2',
    title: 'PLANUNG',
    description: 'Konzept & Individuelles Design',
    icon: '🎨'
  },
  {
    id: 'genehmigung',
    number: '3',
    title: 'GENEHMIGUNG',
    description: 'Alle Genehmigungen werden von uns übernommen',
    icon: '📋'
  },
  {
    id: 'show',
    number: '4',
    title: 'SHOW',
    description: 'Spektakuläre Durchführung am Event-Tag',
    icon: '🎆'
  }
];

export const TRUST_BADGES: TrustBadge[] = [
  {
    id: 'tuv-zertifiziert',
    title: 'TÜV Zertifiziert',
    description: 'Qualitätssicherung',
    icon: 'Shield'
  },
  {
    id: 'voll-versichert',
    title: 'Voll Versichert',
    description: 'Umfassender Schutz',
    icon: 'ShieldCheck'
  },
  {
    id: '15-jahre-erfahrung',
    title: '15 Jahre Erfahrung',
    description: 'Langjährige Expertise',
    icon: 'Award'
  },
  {
    id: '500-plus-events',
    title: '500+ Events',
    description: 'Erfolgreiche Projekte',
    icon: 'Trophy'
  },
  {
    id: 'bundesweit',
    title: 'Bundesweit',
    description: 'Deutschlandweite Verfügbarkeit',
    icon: 'MapPin'
  },
  {
    id: '24-7-support',
    title: '24/7 Support',
    description: 'Rund um die Uhr',
    icon: 'Headphones'
  }
];

export const VIDEO_ITEMS: VideoItem[] = [
  {
    id: 'hochzeit-video',
    title: 'Hochzeits-Feuerwerk',
    category: 'Hochzeit',
    thumbnail: VIDEO_THUMBNAILS['hochzeit-video'],
    videoUrl: '/videos/hochzeit.mp4'
  },
  {
    id: 'festival-video',
    title: 'Festival-Spektakel',
    category: 'Festival',
    thumbnail: VIDEO_THUMBNAILS['festival-video'],
    videoUrl: '/videos/festival.mp4'
  },
  {
    id: 'firmen-video',
    title: 'Firmen-Event',
    category: 'Firmen',
    thumbnail: VIDEO_THUMBNAILS['firmen-video'],
    videoUrl: '/videos/firmen.mp4'
  },
  {
    id: 'silvester-video',
    title: 'Silvester-Show',
    category: 'Silvester',
    thumbnail: VIDEO_THUMBNAILS['silvester-video'],
    videoUrl: '/videos/silvester.mp4'
  }
];

export const CONTACT_INFO = {
  phone: '+49 (0)211 999 88 77',
  phoneHours: 'Mo-Fr: 9:00 - 18:00 Uhr',
  whatsapp: '+49 176 1234 5678',
  whatsappHours: '24/7 Schnelle Antworten',
  email: 'info@pyrotech.de',
  emailHours: 'Antwort innerhalb 24h',
  address: {
    company: 'Pyrotech GmbH',
    street: 'Feuerwerk-Straße 15',
    city: '40213 Düsseldorf'
  }
};

export const EVENT_TYPES = [
  'Hochzeit',
  'Firmenevent',
  'Festival',
  'Geburtstag',
  'Sonstiges'
];
