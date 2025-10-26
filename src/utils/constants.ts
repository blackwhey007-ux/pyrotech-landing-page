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
    image: EVENT_IMAGES.hochzeiten, // Using existing image as placeholder
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
    videoUrl: '_bpIyM5yHcM' // YouTube video ID
  }
];

export const CONTACT_INFO = {
  phone: '+49 160 120 30 77',
  phoneHours: 'Mo-Fr: 9:00 - 18:00 Uhr',
  whatsapp: '+49 160 120 30 77',
  whatsappHours: '24/7 Schnelle Antworten',
  email: 'pyrotechevent@gmx.de',
  emailHours: 'Antwort innerhalb 24h',
  address: {
    company: 'Pyrotech GmbH',
    street: '40472 Rath',
    city: ''
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
  founder: {
    name: 'Marcus Weber',
    title: 'Gründer & Chef-Pyrotechniker',
    image: '/images/founder-marcus.jpg',
    quote: '"Ich war 8 Jahre alt, als ich das erste Mal Feuerwerk sah. In diesem Moment wusste ich: Das ist Magie, und ich will diese Magie zu den Menschen bringen."'
  },
  story: {
    beginning: 'Es begann mit einem kleinen Jungen, der fasziniert auf die Sterne blickte. Marcus war 8 Jahre alt, als er bei einem Stadtfest zum ersten Mal ein professionelles Feuerwerk erlebte. "Ich erinnere mich noch genau", erzählt er mit leuchtenden Augen, "wie die Raketen in den Himmel stiegen und die ganze Familie zum Staunen brachten. In diesem Moment wusste ich: Das ist Magie, und ich will diese Magie zu den Menschen bringen."',
    
    turningPoint: 'Nach 15 Jahren in der Pyrotechnik-Branche und über 500 erfolgreichen Events hatte Marcus eine Erkenntnis: "Ich merkte, dass die meisten Anbieter nur Feuerwerk verkaufen. Aber wir verkaufen nicht nur Feuerwerk – wir verkaufen unvergessliche Momente, Tränen der Freude und Erinnerungen fürs Leben."',
    
    philosophy: 'Heute steht bei Pyrotech nicht die Technik im Vordergrund, sondern die Menschen. "Jede Hochzeit ist anders, jede Familie hat ihre eigene Geschichte", erklärt Marcus. "Wir hören zu, verstehen die Träume unserer Kunden und schaffen dann ein Feuerwerk, das perfekt zu ihrer Geschichte passt."',
    
    memorableMoment: 'Ein besonderer Moment bleibt Marcus für immer in Erinnerung: "Es war eine Hochzeit, bei der die Braut Tränen in den Augen hatte, als unser Feuerwerk zu ihrer Lieblingsmusik explodierte. Ihr Vater kam nach der Show zu mir und sagte: \'Das war der schönste Moment meines Lebens.\' Solche Momente machen alles wert."',
    
    challenge: 'Der größte Wendepunkt kam, als Marcus erkannte, dass Skalierung nicht bedeutet, mehr Events zu machen, sondern bessere. "Wir haben gelernt, dass es wichtiger ist, 50 perfekte Events zu haben als 200 durchschnittliche. Jeder Kunde verdient unsere volle Aufmerksamkeit und Leidenschaft."',
    
    favorite: 'Am liebsten arbeitet Marcus an intimen Hochzeiten. "Da passiert die echte Magie", sagt er. "Wenn ein Paar zum ersten Mal als Eheleute unter dem Feuerwerk steht, das extra für sie choreografiert wurde – das sind die Momente, für die wir leben."'
  },
  values: [
    {
      title: 'Leidenschaft für Details',
      description: 'Jedes Feuerwerk wird individuell geplant und auf die Musik des Paares abgestimmt.',
      icon: '🎵'
    },
    {
      title: 'Sicherheit an erster Stelle',
      description: '15 Jahre Erfahrung und TÜV-Zertifizierung garantieren höchste Sicherheitsstandards.',
      icon: '🛡️'
    },
    {
      title: 'Persönliche Betreuung',
      description: 'Von der ersten Beratung bis zum Event-Tag – wir sind immer für Sie da.',
      icon: '🤝'
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
