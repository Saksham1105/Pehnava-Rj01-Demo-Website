import React from 'react';
import { ArrowDown, MessageCircle, Sparkles, MapPin, Compass } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

interface HeroProps {
  onOpenWhatsApp: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWhatsApp }) => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 pb-16 lg:py-28 bg-[#F8F4EE] overflow-hidden"
    >
      {/* Subtle Background Warm Tones */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#EDE3D6] rounded-full blur-3xl opacity-70 -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#E2D7CA] rounded-full blur-3xl opacity-50 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start z-10">
            {/* Store Location Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE3D6] border border-[#E2D7CA] text-[#756B63] text-xs font-medium tracking-wide mb-6">
              <MapPin size={13} className="text-[#C92825]" />
              <span>Mayo Link Road, Ajmer</span>
              <span className="w-1 h-1 rounded-full bg-[#641F2B]" />
              <span className="text-[#641F2B] font-semibold">Store Showcase</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif font-normal text-[#24201F] tracking-tight leading-[1.12] mb-6">
              Style That Feels <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#641F2B]">Like You.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-[#756B63] leading-relaxed max-w-xl mb-9 font-sans font-light">
              {BUSINESS_CONFIG.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#collections"
                id="hero-explore-btn"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#641F2B] hover:bg-[#4E1822] text-[#F8F4EE] text-sm font-medium tracking-wide transition-colors duration-150 shadow-sm cursor-pointer group active:scale-98"
              >
                <span>Explore Collections</span>
                <Compass size={17} className="group-hover:rotate-45 transition-transform duration-300" />
              </a>

              <button
                id="hero-whatsapp-btn"
                onClick={onOpenWhatsApp}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#F8F4EE] hover:bg-[#EDE3D6] border border-[#641F2B]/40 text-[#641F2B] text-sm font-medium tracking-wide transition-colors duration-150 cursor-pointer active:scale-98"
              >
                <MessageCircle size={18} className="text-[#25D366]" />
                <span>Connect on WhatsApp</span>
              </button>
            </div>

            {/* Highlights Bar */}
            <div className="pt-6 border-t border-[#E2D7CA] grid grid-cols-3 gap-6 sm:gap-10 w-full max-w-md">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#756B63] block font-medium">Boutique</span>
                <span className="text-sm sm:text-base font-serif font-medium text-[#24201F]">Ajmer, Rajasthan</span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#756B63] block font-medium">Styles</span>
                <span className="text-sm sm:text-base font-serif font-medium text-[#24201F]">Ethnic & Contemporary</span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#756B63] block font-medium">Enquiries</span>
                <span className="text-sm sm:text-base font-serif font-medium text-[#24201F]">Via WhatsApp</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Fashion Imagery */}
          <div className="lg:col-span-6 xl:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Frame */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-[#EDE3D6] border border-[#E2D7CA] aspect-[4/5] sm:aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=75&w=900&auto=format&fit=crop"
                  srcSet="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=75&w=600&auto=format&fit=crop 600w, https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=75&w=1000&auto=format&fit=crop 1000w"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 450px"
                  alt="Pehnava Contemporary & Ethnic Fashion in Ajmer"
                  width="600"
                  height="750"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top sm:hover:scale-[1.01] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                
                {/* Floating Card On Hero Image */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-3.5 sm:p-4 rounded-xl bg-[#F8F4EE]/95 border border-[#E2D7CA] shadow-md text-[#24201F] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#C92825] font-bold block">
                      New Season Edit
                    </span>
                    <p className="text-xs sm:text-sm font-serif font-semibold text-[#641F2B]">
                      Curated Modern Indian Wear
                    </p>
                  </div>
                  <a
                    href="#featured-looks"
                    className="p-2 rounded-full bg-[#641F2B] text-white hover:bg-[#4E1822] transition-colors"
                    aria-label="View featured looks"
                  >
                    <Sparkles size={15} />
                  </a>
                </div>
              </div>

              {/* Offset decorative background frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl sm:rounded-3xl border border-[#D5C7B7] -z-10 hidden sm:block pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden md:flex justify-center mt-12 lg:mt-16">
          <a
            href="#the-edit"
            className="group flex flex-col items-center gap-2 text-xs tracking-widest uppercase text-[#756B63] hover:text-[#641F2B] transition-colors duration-200"
            aria-label="Scroll to discover more"
          >
            <span>Discover</span>
            <ArrowDown size={14} className="text-[#C92825] group-hover:translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
};
