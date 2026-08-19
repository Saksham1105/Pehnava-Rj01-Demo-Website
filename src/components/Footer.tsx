import React from 'react';
import { Instagram, MessageCircle, MapPin, ArrowUp, Navigation } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onOpenWhatsApp: (customMessage?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhatsApp }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#1F1A1B] text-[#F8F4EE] pt-16 pb-12 border-t border-[#362C2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-[#362C2E]">
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <a href="#home" className="flex flex-col items-start mb-5" aria-label="Pehnava Home">
              <BrandLogo variant="footer" />
              <span className="text-[10px] tracking-[0.35em] text-[#C92825] uppercase font-medium mt-2">
                Ajmer • Rajasthan
              </span>
            </a>

            <p className="text-sm font-serif italic text-[#EDE3D6] max-w-sm mb-6">
              "{BUSINESS_CONFIG.tagline}"
            </p>

            <p className="text-xs text-[#A89F9E] leading-relaxed max-w-md font-sans mb-8">
              A fashion and clothing store in Ajmer, presenting thoughtfully selected contemporary and ethnic styles for daily wear, family celebrations, and milestone occasions.
            </p>

            {/* Social & WhatsApp Buttons */}
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#2E2527] hover:bg-[#423538] text-[#F8F4EE] flex items-center justify-center transition-colors"
              >
                <Instagram size={18} />
              </a>

              <button
                onClick={() => onOpenWhatsApp()}
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-[#2E2527] hover:bg-[#423538] text-[#25D366] flex items-center justify-center transition-colors cursor-pointer"
              >
                <MessageCircle size={18} />
              </button>

              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps"
                className="w-10 h-10 rounded-full bg-[#2E2527] hover:bg-[#423538] text-[#EA4335] flex items-center justify-center transition-colors"
              >
                <Navigation size={17} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#C92825] font-semibold mb-6">
              Navigation
            </h3>
            <ul className="space-y-3 text-xs tracking-wider uppercase font-medium">
              <li>
                <a href="#home" className="text-[#D5CCCB] hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#editorial-edits" className="text-[#D5CCCB] hover:text-white transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="#featured-looks" className="text-[#D5CCCB] hover:text-white transition-colors">
                  Featured Looks
                </a>
              </li>
              <li>
                <a href="#why-pehnava" className="text-[#D5CCCB] hover:text-white transition-colors">
                  Why Pehnava
                </a>
              </li>
              <li>
                <a href="#instagram" className="text-[#D5CCCB] hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#D5CCCB] hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#visit-us" className="text-[#D5CCCB] hover:text-white transition-colors">
                  Visit Us
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Contact Info */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h3 className="text-xs uppercase tracking-[0.25em] text-[#C92825] font-semibold mb-6">
                Store Location
              </h3>
              <div className="space-y-2 text-xs text-[#A89F9E] leading-relaxed font-sans mb-6">
                <p className="text-white font-medium flex items-start gap-2">
                  <MapPin size={15} className="shrink-0 text-[#C92825] mt-0.5" />
                  <span>Pehnava Boutique</span>
                </p>
                <p className="pl-6">{BUSINESS_CONFIG.fullAddress}</p>
                <p className="pl-6 text-[#EDE3D6]">Open All 7 Days: 11:00 AM – 9:00 PM</p>
              </div>
            </div>

            <div>
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#EDE3D6] hover:text-white transition-colors"
              >
                <span>View on Google Maps</span>
                <Navigation size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E9493]">
          <p>© 2026 Pehnava. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Ajmer, Rajasthan, India</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
