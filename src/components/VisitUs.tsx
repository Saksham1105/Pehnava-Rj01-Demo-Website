import React from 'react';
import { MapPin, Navigation, MessageCircle, Clock, Calendar, ExternalLink, Sparkles, Building2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

interface VisitUsProps {
  onOpenWhatsApp: (customMessage?: string) => void;
}

export const VisitUs: React.FC<VisitUsProps> = ({ onOpenWhatsApp }) => {
  return (
    <section id="visit-us" className="py-20 lg:py-28 bg-[#EDE3D6] border-t border-[#E2D7CA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F8F4EE] border border-[#E2D7CA] text-[#C92825] text-xs font-semibold uppercase tracking-[0.25em] mb-4 shadow-2xs">
            <MapPin size={12} className="text-[#C92825]" />
            <span>Store Location</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#641F2B] tracking-tight mb-4">
            Come Visit Us.
          </h2>
          <p className="text-sm sm:text-base text-[#756B63] font-sans font-light">
            Explore the collection in person at our Ajmer boutique. Touch the fabrics, find your perfect fit, and experience personal styling service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address Card & Timings */}
          <div className="lg:col-span-6 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#F8F4EE] border border-[#E2D7CA] shadow-2xs">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#EDE3D6] border border-[#E2D7CA] text-[#641F2B] flex items-center justify-center shadow-2xs">
                  <Building2 size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-[#24201F]">
                    Pehnava Boutique
                  </h3>
                  <p className="text-xs text-[#756B63]">Ajmer, Rajasthan, India</p>
                </div>
              </div>

              {/* Formatted Address */}
              <div className="space-y-1.5 p-5 rounded-2xl bg-[#EDE3D6]/70 border border-[#E2D7CA] mb-8 font-sans">
                <span className="text-[11px] uppercase tracking-wider text-[#C92825] font-bold block mb-1">
                  Full Store Address
                </span>
                {BUSINESS_CONFIG.addressLines.map((line, idx) => (
                  <p key={idx} className="text-sm text-[#24201F] font-medium">
                    {line}
                  </p>
                ))}
              </div>

              {/* Landmarks */}
              <div className="mb-8">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#756B63] mb-3">
                  Nearby Landmarks
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-lg bg-[#EDE3D6] text-xs text-[#24201F] font-medium border border-[#E2D7CA]">
                    🏥 Front of Holy Family Hospital
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-[#EDE3D6] text-xs text-[#24201F] font-medium border border-[#E2D7CA]">
                    🛣️ Mayo Link Road
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-[#EDE3D6] text-xs text-[#24201F] font-medium border border-[#E2D7CA]">
                    ⛽ Near 9 No. Petrol Pump
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-[#EDE3D6] text-xs text-[#24201F] font-medium border border-[#E2D7CA]">
                    📍 Nagra, Ajmer
                  </span>
                </div>
              </div>

              {/* Store Hours */}
              <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-[#EDE3D6]/70 border border-[#E2D7CA] mb-8">
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-[#641F2B] shrink-0" />
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#756B63] block">Timings</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#24201F]">{BUSINESS_CONFIG.storeTimings}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={18} className="text-[#641F2B] shrink-0" />
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#756B63] block">Open</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#24201F]">{BUSINESS_CONFIG.workingDays}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="get-directions-btn"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#641F2B] hover:bg-[#4E1822] text-[#F8F4EE] text-xs font-medium tracking-wide uppercase transition-colors duration-150 shadow-xs cursor-pointer"
              >
                <Navigation size={15} />
                <span>Get Directions</span>
                <ExternalLink size={13} className="opacity-75" />
              </a>

              <button
                id="visit-us-whatsapp-btn"
                onClick={() => onOpenWhatsApp("Hi Pehnava, I am planning to visit your store in Ajmer today. Could you share directions or confirm your timings?")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#F8F4EE] hover:bg-[#EDE3D6] border border-[#641F2B]/40 text-[#641F2B] text-xs font-medium tracking-wide uppercase transition-colors duration-150 cursor-pointer"
              >
                <MessageCircle size={16} className="text-[#25D366]" />
                <span>WhatsApp Us</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Map Card & Location Atmosphere */}
          <div className="lg:col-span-6 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#F8F4EE] border border-[#E2D7CA] relative overflow-hidden shadow-2xs">
            {/* Visual Store Atmosphere Shot */}
            <div className="relative rounded-2xl overflow-hidden bg-[#EDE3D6] border border-[#E2D7CA] aspect-[16/10] mb-6">
              <img
                src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=75&w=800&auto=format&fit=crop"
                alt="Pehnava Store Experience Ajmer"
                width="800"
                height="500"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2 text-xs text-[#EDE3D6] uppercase tracking-wider mb-1 font-semibold">
                  <Sparkles size={13} className="text-[#C92825]" />
                  <span>Welcome to Pehnava</span>
                </div>
                <h4 className="text-lg sm:text-xl font-serif font-medium">
                  Experience Rajasthan's Warmth & Style
                </h4>
              </div>
            </div>

            {/* Quick directions helper */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#756B63]">
                How to Reach Pehnava
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#756B63]">
                <div className="p-3.5 rounded-xl bg-[#EDE3D6]/70 border border-[#E2D7CA]">
                  <p className="font-semibold text-[#24201F] mb-1">From Mayo College</p>
                  <p>Conveniently accessible along the Mayo Link Road corridor.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#EDE3D6]/70 border border-[#E2D7CA]">
                  <p className="font-semibold text-[#24201F] mb-1">From Central Ajmer</p>
                  <p>Drive toward Nagra landmarked directly opposite Holy Family Hospital.</p>
                </div>
              </div>

              {/* Direct Open in Google Maps Link Card */}
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#EDE3D6]/70 border border-[#E2D7CA] hover:border-[#641F2B] transition-colors flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#EA4335]/15 text-[#EA4335] flex items-center justify-center shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#24201F]">Open in Google Maps</p>
                    <p className="text-[11px] text-[#756B63]">Navigate via live GPS</p>
                  </div>
                </div>
                <ExternalLink size={16} className="text-[#756B63] group-hover:text-[#641F2B] transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
