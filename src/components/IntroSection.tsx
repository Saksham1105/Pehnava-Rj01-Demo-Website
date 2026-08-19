import React from 'react';
import { Sparkles, HeartHandshake, Eye } from 'lucide-react';

export const IntroSection: React.FC = () => {
  return (
    <section id="the-edit" className="py-20 lg:py-28 bg-[#F8F4EE] border-t border-[#E2D7CA] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Small Editorial Label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EDE3D6] text-[#C92825] text-xs font-semibold uppercase tracking-[0.25em] mb-5 border border-[#E2D7CA]">
          <Sparkles size={12} className="text-[#C92825]" />
          <span>The Pehnava Edit</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-[#641F2B] tracking-tight leading-tight mb-8">
          Fashion for the moments that matter.
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg md:text-xl text-[#756B63] leading-relaxed max-w-3xl mx-auto font-light font-sans mb-12">
          Discover thoughtfully selected styles for everyday looks, celebrations and special occasions.
          Crafted with care, tailored for comfort, and brought to you directly from our boutique in Ajmer.
        </p>

        {/* Three Micro Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-[#E2D7CA] max-w-4xl mx-auto text-left">
          <div className="p-6 rounded-2xl bg-[#EDE3D6]/70 border border-[#E2D7CA] transition-colors duration-150 hover:bg-[#EDE3D6]">
            <div className="w-10 h-10 rounded-full bg-[#F8F4EE] flex items-center justify-center text-[#641F2B] mb-3.5 shadow-2xs border border-[#E2D7CA]">
              <Sparkles size={17} className="text-[#C92825]" />
            </div>
            <h3 className="text-base font-serif font-medium text-[#24201F] mb-1">
              Thoughtful Curation
            </h3>
            <p className="text-xs sm:text-sm text-[#756B63] leading-normal font-sans">
              Carefully selected silhouettes that balance Indian heritage with contemporary ease.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#EDE3D6]/70 border border-[#E2D7CA] transition-colors duration-150 hover:bg-[#EDE3D6]">
            <div className="w-10 h-10 rounded-full bg-[#F8F4EE] flex items-center justify-center text-[#641F2B] mb-3.5 shadow-2xs border border-[#E2D7CA]">
              <Eye size={17} className="text-[#641F2B]" />
            </div>
            <h3 className="text-base font-serif font-medium text-[#24201F] mb-1">
              In-Store Experience
            </h3>
            <p className="text-xs sm:text-sm text-[#756B63] leading-normal font-sans">
              Touch, feel and try on garments at our welcoming boutique on Mayo Link Road, Ajmer.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#EDE3D6]/70 border border-[#E2D7CA] transition-colors duration-150 hover:bg-[#EDE3D6]">
            <div className="w-10 h-10 rounded-full bg-[#F8F4EE] flex items-center justify-center text-[#641F2B] mb-3.5 shadow-2xs border border-[#E2D7CA]">
              <HeartHandshake size={17} className="text-[#C92825]" />
            </div>
            <h3 className="text-base font-serif font-medium text-[#24201F] mb-1">
              Personalized Guidance
            </h3>
            <p className="text-xs sm:text-sm text-[#756B63] leading-normal font-sans">
              Direct communication on WhatsApp for sizing, styling suggestions, and store availability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
