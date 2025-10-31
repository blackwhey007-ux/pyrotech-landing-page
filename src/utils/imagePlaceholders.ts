// Image placeholder utility for development
// In production, replace with actual image URLs

export const getImagePlaceholder = (_category: string, name: string, width: number = 400, height: number = 300): string => {
  // Use local SVG data URL instead of external placeholder service
  // This avoids ERR_NAME_NOT_RESOLVED errors
  try {
    const svg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#1a1a1a"/>
        <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" fill="#FFD700" text-anchor="middle" dy=".3em">${name}</text>
      </svg>
    `;
    return `data:image/svg+xml;base64,${btoa(svg)}`;
  } catch (error) {
    console.warn('Error generating placeholder:', error);
    // Ultimate fallback - solid dark background
    return `data:image/svg+xml;base64,${btoa(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#1a1a1a"/></svg>`)}`;
  }
};

export const EVENT_IMAGES = {
  hochzeiten: '/images/events/hochzeiten.png', // Real wedding fireworks image
  geburtstage: '/images/events/geburtstage.png', // Real birthday sparkler image
  silvester: '/images/events/silvester.png', // Real New Year fireworks image
  'gender-reveal': '/images/events/gender-reveal.png', // Real gender reveal image
  hochzeitstanz: getImagePlaceholder('events', 'Hochzeitstanz', 380, 280),
  firmenevent: getImagePlaceholder('events', 'Firmenevent', 380, 280),
  festival: getImagePlaceholder('events', 'Festival', 380, 280),
  schuetzenfest: getImagePlaceholder('events', 'Schützenfest', 380, 280),
  firmenfeiern: getImagePlaceholder('events', 'Firmenfeiern', 380, 280),
  festivals: getImagePlaceholder('events', 'Festivals', 380, 280),
  stadtfeste: getImagePlaceholder('events', 'Stadtfeste', 380, 280),
  jahrestage: getImagePlaceholder('events', 'Jahrestage', 380, 280),
  produktlaunches: getImagePlaceholder('events', 'Produktlaunches', 380, 280),
  konzerte: getImagePlaceholder('events', 'Konzerte', 380, 280),
  sportevents: getImagePlaceholder('events', 'Sportevents', 380, 280),
  hochzeitstaenze: getImagePlaceholder('events', 'Hochzeitstänze', 380, 280),
  heiratsantraege: getImagePlaceholder('events', 'Heiratsanträge', 380, 280),
};

export const TESTIMONIAL_IMAGES = {
  'anna-michael': getImagePlaceholder('testimonials', 'Anna & Michael', 100, 100),
  'thomas-mueller': getImagePlaceholder('testimonials', 'Thomas Müller', 100, 100),
  'sarah-weber': getImagePlaceholder('testimonials', 'Sarah Weber', 100, 100),
};

export const VIDEO_THUMBNAILS = {
  'hochzeit-video': getImagePlaceholder('videos', 'Hochzeits-Feuerwerk', 400, 225),
  'festival-video': getImagePlaceholder('videos', 'Festival-Spektakel', 400, 225),
  'firmen-video': getImagePlaceholder('videos', 'Firmen-Event', 400, 225),
  'silvester-video': getImagePlaceholder('videos', 'Silvester-Show', 400, 225),
};
