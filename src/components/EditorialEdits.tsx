import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface EditorialEditsProps {
  onSelectCategory: (categoryId: string) => void;
}

export const EditorialEdits: React.FC<EditorialEditsProps> = ({ onSelectCategory }) => {
  const handleNavigate = (category: 'women' | 'men') => {
    onSelectCategory(category);
    const element = document.getElementById('featured-looks');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="collections"
      className="py-20 lg:py-28 bg-[#EDE3D6] border-y border-[#E2D7CA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F8F4EE] text-[#C92825] text-xs font-semibold uppercase tracking-[0.25em] mb-4 shadow-2xs border border-[#E2D7CA]">
            <Sparkles size={12} className="text-[#C92825]" />
            <span>The Pehnava Collection</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#641F2B] tracking-tight mb-4">
            Made for every expression of style.
          </h2>

          <p className="text-sm sm:text-base text-[#756B63] max-w-2xl mx-auto font-sans leading-relaxed">
            Explore distinct edits for her and him, curated around contemporary style, Indian elegance and the moments that matter.
          </p>
        </div>

        {/* Two Large Visual Editorial Campaign Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* WOMEN'S EDITORIAL PANEL */}
          <div
            id="panel-women-edit"
            className="group relative rounded-3xl overflow-hidden bg-[#F8F4EE] border border-[#E2D7CA] shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
          >
            {/* Image Container */}
            <div
              onClick={() => handleNavigate('women')}
              className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] overflow-hidden bg-[#EDE3D6] cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=75&w=900&auto=format&fit=crop"
                alt="Pehnava Women's Edit - Contemporary Indian & Festive Silhouettes"
                width="900"
                height="675"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top sm:group-hover:scale-[1.018] transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

              {/* Tag Badge */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F8F4EE]/95 text-[#641F2B] text-xs font-semibold uppercase tracking-[0.2em] shadow-xs border border-white/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C92825]" />
                  For Her
                </span>
              </div>

              {/* Floating Action Arrow */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 rounded-full bg-[#F8F4EE]/95 text-[#641F2B] flex items-center justify-center group-hover:bg-[#641F2B] group-hover:text-white transition-colors duration-200 shadow-xs">
                <ArrowUpRight size={18} />
              </div>

              {/* On-Image Editorial Caption for Visual Punch */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#EDE3D6] font-medium block mb-1">
                  Contemporary & Ethnic
                </span>
                <p className="text-2xl sm:text-3xl font-serif font-medium text-white tracking-normal">
                  Her Edit
                </p>
              </div>
            </div>

            {/* Panel Details & CTA */}
            <div className="p-6 sm:p-8 bg-[#F8F4EE] flex flex-col justify-between flex-1">
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.25em] text-[#C92825] font-semibold mb-1.5">
                  FOR HER
                </p>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#641F2B] mb-2">
                  Her Edit
                </h3>
                <p className="text-sm text-[#756B63] leading-relaxed font-sans">
                  Contemporary silhouettes, Indian elegance and occasion-ready looks.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2D7CA]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs font-medium text-[#756B63] tracking-wide">
                  Daily Casuals • Festive Drapes • Celebrations
                </span>

                <button
                  id="btn-explore-women-edit"
                  onClick={() => handleNavigate('women')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#641F2B] hover:bg-[#4E1822] text-[#F8F4EE] text-xs font-medium tracking-wide transition-colors duration-150 cursor-pointer shadow-xs active:scale-98"
                >
                  <span>Explore Women's Edit</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </div>
          </div>

          {/* MEN'S EDITORIAL PANEL */}
          <div
            id="panel-men-edit"
            className="group relative rounded-3xl overflow-hidden bg-[#EDE3D6] border border-[#D5C7B7] shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
          >
            {/* Image Container */}
            <div
              onClick={() => handleNavigate('men')}
              className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] overflow-hidden bg-[#D5C7B7] cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=75&w=900&auto=format&fit=crop"
                alt="Pehnava Men's Edit - Refined Kurtas, Nehru Jackets & Tailored Fits"
                width="900"
                height="675"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top sm:group-hover:scale-[1.018] transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

              {/* Tag Badge */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F8F4EE]/95 text-[#24201F] text-xs font-semibold uppercase tracking-[0.2em] shadow-xs border border-white/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#641F2B]" />
                  For Him
                </span>
              </div>

              {/* Floating Action Arrow */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 rounded-full bg-[#F8F4EE]/95 text-[#24201F] flex items-center justify-center group-hover:bg-[#641F2B] group-hover:text-white transition-colors duration-200 shadow-xs">
                <ArrowUpRight size={18} />
              </div>

              {/* On-Image Editorial Caption */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#EDE3D6] font-medium block mb-1">
                  Modern Tailoring & Classics
                </span>
                <p className="text-2xl sm:text-3xl font-serif font-medium text-white tracking-normal">
                  His Edit
                </p>
              </div>
            </div>

            {/* Panel Details & CTA */}
            <div className="p-6 sm:p-8 bg-[#EDE3D6] flex flex-col justify-between flex-1">
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.25em] text-[#641F2B] font-semibold mb-1.5">
                  FOR HIM
                </p>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#24201F] mb-2">
                  His Edit
                </h3>
                <p className="text-sm text-[#756B63] leading-relaxed font-sans">
                  Refined styles for everyday confidence and special occasions.
                </p>
              </div>

              <div className="pt-4 border-t border-[#D5C7B7]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs font-medium text-[#756B63] tracking-wide">
                  Structured Kurtas • Festive Jackets • Modern Fits
                </span>

                <button
                  id="btn-explore-men-edit"
                  onClick={() => handleNavigate('men')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#641F2B] hover:bg-[#4E1822] text-[#F8F4EE] text-xs font-medium tracking-wide transition-colors duration-150 cursor-pointer shadow-xs active:scale-98"
                >
                  <span>Explore Men's Edit</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
