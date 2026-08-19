export interface CollectionItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
  highlightCount?: string;
}

export interface FeaturedLook {
  id: string;
  title: string;
  category: string;
  categorySlug: 'women' | 'men' | 'ethnic' | 'occasion' | 'new-arrivals';
  image: string;
  description: string;
  details: string[];
  enquiryMessage: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  aspectRatio?: 'square' | 'portrait';
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  headline: string;
  subheadline: string;
  city: string;
  state: string;
  country: string;
  fullAddress: string;
  addressLines: string[];
  landmarks: string[];
  googleMapsUrl: string;
  instagramUrl: string;
  instagramHandle: string;
  whatsappNumber: string;
  storeTimings: string;
  workingDays: string;
}
