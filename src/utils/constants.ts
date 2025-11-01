import { EventCard, PricingTier, PricingExtra, Testimonial, ProcessStep, TrustBadge, VideoItem, InstagramPost, Announcement } from '../types';
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
    id: 'gender-reveal',
    title: 'Gender Reveal',
    description: 'Magische Enthüllung des Geschlechts',
    icon: '🎊',
    image: EVENT_IMAGES['gender-reveal'],
    accentColor: 'red'
  },
  {
    id: 'hochzeitstanz',
    title: 'Hochzeitstanz',
    description: 'Spektakuläre Effekte für den ersten Tanz',
    icon: '💃',
    image: EVENT_IMAGES.hochzeitstanz,
    accentColor: 'gold'
  },
  {
    id: 'firmenevent',
    title: 'Firmenevent',
    description: 'Professionelle Pyrotechnik für Corporate Events',
    icon: '🏢',
    image: EVENT_IMAGES.firmenevent,
    accentColor: 'red'
  },
  {
    id: 'festival',
    title: 'Festival',
    description: 'Spektakuläre Großfeuerwerke für Veranstaltungen',
    icon: '🎪',
    image: EVENT_IMAGES.festival,
    accentColor: 'gold'
  },
  {
    id: 'schuetzenfest',
    title: 'Schützenfest',
    description: 'Traditionelle Feuerwerke für Volksfeste',
    icon: '🎯',
    image: EVENT_IMAGES.schuetzenfest,
    accentColor: 'red'
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
    id: 'lichterbild',
    name: 'Lichterbild',
    price: '59€',
    description: 'Leuchtende Buchstaben und Zahlen',
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
    id: 'hochzeitstanzeffekte',
    name: 'Hochzeitstanz-Effekte',
    price: '549€',
    description: 'Bodennebel + 4xFontänen',
    icon: '💃'
  },
  {
    id: 'nebelmaschine',
    name: 'Nebelmaschine',
    price: '199€',
    description: 'Dramatische Nebeleffekte',
    icon: '🌫️'
  },
  {
    id: 'sparkular',
    name: 'Sparkular (Fontänen)',
    price: '89€',
    description: 'Majestätische Fontänen-Effekte',
    icon: '✨'
  },
  {
    id: 'flame',
    name: 'Flame',
    price: '119€',
    description: 'Spektakuläre Flammeneffekte',
    icon: '🔥'
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
    id: 'consultation',
    number: '1',
    title: 'BERATUNG',
    description: 'Kostenlose Erstberatung per Telefon',
    icon: '📞'
  },
  {
    id: 'planning',
    number: '2',
    title: 'PLANUNG',
    description: 'Konzept & Individuelles Design',
    icon: '🎨'
  },
  {
    id: 'approval',
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
    id: 'voll-versichert',
    title: 'Voll Versichert',
    description: 'Umfassender Schutz',
    icon: 'ShieldCheck'
  },
  {
    id: 'erfahrung',
    title: 'Professionelle Expertise',
    description: 'Spitzenqualität',
    icon: 'Award'
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
    title: 'Hochzeitsfeuerwerk',
    category: 'Hochzeit',
    thumbnail: VIDEO_THUMBNAILS['hochzeit-video'],
    videoUrl: '1-fokNgAJ8o' // YouTube video ID
  }
];

export const CONTACT_INFO = {
  phone: '+49 160 120 30 77',
  phoneHours: 'Mo-So: 6:00 - 22:00 Uhr',
  whatsapp: '+49 160 120 30 77',
  whatsappHours: 'Rund um die Uhr für Sie da',
  email: 'pyrotechevent@gmx.de',
  emailHours: 'Antwort innerhalb von 24h',
  address: {
    company: 'Pyrotech Event',
    street: 'Arcadiastr.24',
    city: '40472 Düsseldorf'
  }
};

export const EVENT_TYPES = [
  'Hochzeit',
  'Firmenevent',
  'Festival',
  'Geburtstag',
  'Sonstiges'
];

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'promo-1',
    message: '🎆 Sonderangebot: 20% Rabatt auf alle Buchungen bis Ende des Monats!',
    link: '#pricing',
    accentColor: 'gold'
  },
  {
    id: 'promo-2', 
    message: '🎉 Jetzt für Sommer 2025 buchen - Begrenzte Termine verfügbar!',
    link: '#contact',
    accentColor: 'orange'
  },
  {
    id: 'promo-3',
    message: '💝 Kostenlose Beratung für alle Neukunden - Kontaktieren Sie uns heute!',
    link: '#contact',
    accentColor: 'gold'
  }
];

export const STORY_CONTENT = {
  company: {
    name: 'Pyrotech Event',
    tagline: 'Spektakuläre Pyrotechnik auf höchstem Niveau',
    description: 'Pyrotech Event steht für spektakuläre Pyrotechnik auf höchstem Niveau. Wir planen und realisieren beeindruckende Feuerwerkshows für Veranstaltungen jeder Art, von Stadtfesten und Hochzeiten bis zu Großevents.'
  },
  principles: [
    {
      title: 'Sicherheit, Präzision und Kreativität',
      description: 'Sicherheit, Präzision und Kreativität stehen bei uns an erster Stelle. Unsere erfahrenen Pyrotechniker verbinden technisches Know-how mit künstlerischem Gespür, um unvergessliche Momente am Himmel zu schaffen.',
      icon: '🎯'
    },
    {
      title: 'Modernste Technik',
      description: 'Mit modernster Technik und geprüften Materialien garantieren wir eine sichere und professionelle Durchführung für Shows, die begeistern und in Erinnerung bleiben.',
      icon: '⚡'
    }
  ],
  values: [
    {
      title: 'Sicherheit',
      description: 'Sicherheit hat bei uns oberste Priorität – in der Planung, im Aufbau und in der Durchführung jeder Show. Wir arbeiten ausschließlich mit geprüften Materialien und nach den geltenden gesetzlichen Vorschriften.',
      icon: '🛡️'
    },
    {
      title: 'Kreativität',
      description: 'Jedes Feuerwerk ist ein Unikat. Wir kombinieren Licht, Farbe und Musik zu emotionalen Momenten, die in Erinnerung bleiben.',
      icon: '🎨'
    },
    {
      title: 'Professionalität',
      description: 'Von der ersten Idee bis zum letzten Funken – wir arbeiten präzise, zuverlässig und mit höchstem Anspruch an Qualität.',
      icon: '⭐'
    },
    {
      title: 'Zuverlässigkeit',
      description: 'Wir halten, was wir versprechen – pünktlich, transparent und mit voller Verantwortung für unser Handwerk.',
      icon: '✅'
    }
  ]
};

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: '1',
    imageUrl: '/images/instagram/reel-1.jpg',
    postUrl: 'https://www.instagram.com/reel/DPYouoNDb20/',
    caption: 'Spectacular Fireworks Display 🎆',
    isVideo: true,
    views: 1234,
    likes: 245,
    comments: 12
  },
  {
    id: '2',
    imageUrl: '/images/instagram/reel-2.jpg',
    postUrl: 'https://www.instagram.com/reel/DMKxm8rNucP/',
    caption: 'Professional Pyrotechnic Show 💥',
    isVideo: true,
    views: 2156,
    likes: 189,
    comments: 8
  },
  {
    id: '3',
    imageUrl: '/images/instagram/reel-3.jpg',
    postUrl: 'https://www.instagram.com/reel/DMCwgRQNany/',
    caption: 'Amazing Event Fireworks 🎇',
    isVideo: true,
    views: 987,
    likes: 156,
    comments: 5
  },
  {
    id: '4',
    imageUrl: '/images/instagram/reel-4.jpg',
    postUrl: 'https://www.instagram.com/reel/DL7FFQSNm4V/',
    caption: 'Grand Finale Explosion ✨',
    isVideo: true,
    views: 3456,
    likes: 312,
    comments: 18
  },
  {
    id: '5',
    imageUrl: '/images/instagram/reel-5.jpg',
    postUrl: 'https://www.instagram.com/reel/DL4fjrGNE19/',
    caption: 'Hochzeit Feuerwerk Magic 💒',
    isVideo: true,
    views: 1789,
    likes: 98,
    comments: 3
  },
  {
    id: '6',
    imageUrl: '/images/instagram/reel-6.jpg',
    postUrl: 'https://www.instagram.com/reel/DL10Bj6NIMn/',
    caption: 'Festival Pyrotechnik Show 🎊',
    isVideo: true,
    views: 4567,
    likes: 423,
    comments: 25
  }
];
