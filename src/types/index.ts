export interface EventCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  accentColor: 'red' | 'gold';
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isFeatured: boolean;
  ctaText: string;
  ctaVariant: 'primary' | 'secondary';
}

export interface PricingExtra {
  id: string;
  name: string;
  price: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  event: string;
  location: string;
  text: string;
  rating: number;
  image: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface TrustBadge {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  preferredDate: string;
  message: string;
  privacyAccepted: boolean;
}

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
}

export interface ParticleConfig {
  count: number;
  speed: number;
  lifespan: number;
  colors: string[];
  size: number;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  postUrl: string;
  caption: string;
  isVideo: boolean;
  views?: number;
  likes?: number;
  comments?: number;
}

export interface Announcement {
  id: string;
  message: string;
  link: string;
  accentColor: 'gold' | 'orange';
}