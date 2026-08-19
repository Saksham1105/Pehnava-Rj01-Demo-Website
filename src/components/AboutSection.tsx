import React from 'react';
import { Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F8F4EE] border-t border-[#E2D7CA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-[#EDE3D6] border border-[#E2D7CA] shadow-xl aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=75&w=750&auto=format&fit=crop"
                  alt="Pehnava Boutique Aesthetics"
                  width="750"
                  height="1000"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Offset Accent Frame */}
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl sm:rounded-3xl border border-[#D5C7B7] -z-10 hidden sm:block pointer-events-none" />

              {/* Floating Quote Stamp */}
              <div className="absolute -bottom-6 right-4 sm:-right-6 bg-[#F8F4EE]/95 p-4 rounded-2xl border border-[#E2D7CA] shadow-md max-w-[220px]">
                <p className="font-serif italic text-xs text-[#24201F] leading-tight">
                  "Thoughtful clothing that balances Indian heritage with everyday modernity."
                </p>
                <span className="text-[10px] uppercase tracking-wider text-[#C92825] font-bold block mt-2">
                  — Pehnava, Ajmer
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EDE3D6] text-[#C92825] text-xs font-semibold uppercase tracking-[0.25em] mb-4 border border-[#E2D7CA]">
              <Sparkles size={12} className="text-[#C92825]" />
              <span>Our Philosophy</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#641F2B] tracking-tight mb-6">
              PEHNAVA
            </h2>

            <blockquote className="text-xl sm:text-2xl font-serif italic text-[#24201F] border-l-2 border-[#C92825] pl-5 mb-8 leading-snug">
              "Fashion is more than what you wear. It is how you express yourself."
            </blockquote>

            <div className="space-y-4 text-sm sm:text-base text-[#756B63] leading-relaxed font-sans font-light mb-8">
              <p>
                Located in the heart of Ajmer on Mayo Link Road, <strong className="font-semibold text-[#24201F]">Pehnava</strong> is a fashion boutique curated for those who appreciate thoughtful styling, timeless ethnic grace, and effortless contemporary silhouettes.
              </p>
              <p>
                Whether you are selecting a relaxed everyday outfit, an expressive ensemble for festive celebrations, or an occasion-ready statement piece, our collections are chosen with an emphasis on fabric feel, flattering cuts, and versatility.
              </p>
              <p>
                We invite you to discover our collections online, connect with our team on WhatsApp for styling inquiries, and visit our boutique in Ajmer to experience the pieces firsthand.
              </p>
            </div>

            {/* Store Location Pill */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-[#EDE3D6]/70 border border-[#E2D7CA] w-full max-w-lg">
              <div className="w-10 h-10 rounded-full bg-[#F8F4EE] border border-[#E2D7CA] flex items-center justify-center text-[#C92825] shrink-0 shadow-2xs">
                <MapPin size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#24201F]">
                  Store Location
                </h4>
                <p className="text-xs text-[#756B63] truncate">
                  {BUSINESS_CONFIG.fullAddress}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
