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
  hochzeiten: '/images/Wähle Deinen Anlass/Hochzeiten.png',
  geburtstage: '/images/Wähle Deinen Anlass/Geburtstage.png',
  silvester: '/images/Wähle Deinen Anlass/Silvester.png',
  'gender-reveal': '/images/Wähle Deinen Anlass/Gender Reveal.png',
  hochzeitstanz: '/images/Wähle Deinen Anlass/first dance.jpg',
  firmenevent: '/images/Wähle Deinen Anlass/croprate events.jpg',
  festival: '/images/Wähle Deinen Anlass/Festival.jpg',
  schuetzenfest: '/images/Wähle Deinen Anlass/traditional festivals.jpg'
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
