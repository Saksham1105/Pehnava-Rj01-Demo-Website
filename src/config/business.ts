import { BusinessConfig } from '../types';

/**
 * Replace this with the actual WhatsApp number when available (e.g., "919876543210")
 * Do not invent or fabricate random numbers.
 */
export const WHATSAPP_NUMBER = 'REPLACE_WITH_REAL_NUMBER';

export const BUSINESS_CONFIG: BusinessConfig = {
  name: 'PEHNAVA',
  tagline: 'Style That Feels Like You.',
  headline: 'Style That Feels Like You.',
  subheadline: 'Discover contemporary fashion for every occasion at Pehnava, Ajmer.',
  city: 'Ajmer',
  state: 'Rajasthan',
  country: 'India',
  fullAddress: 'Front of Holy Family Hospital, Mayo Link Road, near 9 No. Petrol Pump, Nagra, Ajmer, Rajasthan 305007, India',
  addressLines: [
    'Front of Holy Family Hospital',
    'Mayo Link Road',
    'Near 9 No. Petrol Pump',
    'Nagra, Ajmer, Rajasthan 305007',
  ],
  landmarks: [
    'Front of Holy Family Hospital',
    'Mayo Link Road',
    'Near 9 No. Petrol Pump',
    'Nagra, Ajmer',
  ],
  googleMapsUrl: 'https://maps.app.goo.gl/1boS74EE8uDHqX3PA',
  instagramUrl: 'https://www.instagram.com/pehnavarj01/',
  instagramHandle: '@pehnavarj01',
  whatsappNumber: WHATSAPP_NUMBER,
  // VERIFY WITH PEHNAVA OWNER BEFORE PRODUCTION
  storeTimings: '11:00 AM – 9:00 PM',
  workingDays: 'Open All 7 Days',
};

/**
 * Generates a WhatsApp web/app link if a real phone number is provided.
 * If WHATSAPP_NUMBER is still a placeholder, returns null so the UI can open a friendly modal/toast.
 */
export function getWhatsAppUrl(message?: string): { url: string | null; isPlaceholder: boolean; text: string } {
  const defaultText = "Hi Pehnava, I was exploring your website and would like to enquire about your collection.";
  const encodedText = encodeURIComponent(message || defaultText);
  const isPlaceholder = !WHATSAPP_NUMBER || WHATSAPP_NUMBER === 'REPLACE_WITH_REAL_NUMBER';

  if (isPlaceholder) {
    return {
      url: null,
      isPlaceholder: true,
      text: message || defaultText,
    };
  }

  // Sanitize number (remove spaces, plus, hyphens)
  const cleanNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, '');
  return {
    url: `https://wa.me/${cleanNumber}?text=${encodedText}`,
    isPlaceholder: false,
    text: message || defaultText,
  };
}
