import React from 'react';
import { MessageCircle, Eye, Sparkles } from 'lucide-react';
import { FEATURED_LOOKS_DATA } from '../data/fashionData';
import { FeaturedLook } from '../types';

interface FeaturedLooksProps {
  selectedCategoryFilter: string;
  onSelectCategoryFilter: (filter: string) => void;
  onOpenLookModal: (look: FeaturedLook) => void;
  onEnquireWhatsApp: (look: FeaturedLook) => void;
}

export const FeaturedLooks: React.FC<FeaturedLooksProps> = ({
  selectedCategoryFilter,
  onSelectCategoryFilter,
  onOpenLookModal,
  onEnquireWhatsApp,
}) => {
  const filterTabs = [
    { id: 'all', label: 'All' },
    { id: 'women', label: 'Women' },
    { id: 'men', label: 'Men' },
    { id: 'ethnic', label: 'Ethnic' },
    { id: 'occasion', label: 'Occasion' },
    { id: 'new-arrivals', label: 'New Arrivals' },
  ];

  const filteredLooks = FEATURED_LOOKS_DATA.filter((look) => {
    if (selectedCategoryFilter === 'all' || !selectedCategoryFilter) return true;
    if (selectedCategoryFilter === 'ethnic-wear') return look.categorySlug === 'ethnic';
    if (selectedCategoryFilter === 'occasion-wear') return look.categorySlug === 'occasion';
    return look.categorySlug === selectedCategoryFilter;
  });

  return (
    <section id="featured-looks" className="py-20 lg:py-28 bg-[#F8F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EDE3D6] text-[#C92825] text-xs font-semibold uppercase tracking-[0.25em] mb-4 border border-[#E2D7CA]">
            <Sparkles size={12} className="text-[#C92825]" />
            <span>The Lookbook</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#641F2B] tracking-tight mb-4">
            Featured Looks
          </h2>
          <p className="text-sm sm:text-base text-[#756B63] font-sans font-light">
            A visual curation of silhouettes, colors, and designs available at Pehnava.
            Connect with us on WhatsApp for tailored sizing or styling enquiries.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-2.5 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {filterTabs.map((tab) => {
            const isActive =
              selectedCategoryFilter === tab.id ||
              (tab.id === 'ethnic' && selectedCategoryFilter === 'ethnic-wear') ||
              (tab.id === 'occasion' && selectedCategoryFilter === 'occasion-wear');

            return (
              <button
                key={tab.id}
                id={`filter-tab-${tab.id}`}
                onClick={() => onSelectCategoryFilter(tab.id)}
                className={`relative px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-medium tracking-wide uppercase whitespace-nowrap transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-[#641F2B] text-[#F8F4EE] shadow-xs'
                    : 'bg-[#EDE3D6] text-[#756B63] hover:bg-[#E2D7CA] hover:text-[#641F2B]'
                }`}
              >
                {tab.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#C92825]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Looks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredLooks.map((look) => (
            <div
              key={look.id}
              id={`featured-look-${look.id}`}
              className="group flex flex-col bg-[#F8F4EE] rounded-2xl overflow-hidden border border-[#E2D7CA] shadow-2xs hover:shadow-md transition-shadow duration-300"
            >
              {/* Image Container with Hover Quick View */}
              <div
                className="relative h-80 sm:h-96 w-full bg-[#EDE3D6] overflow-hidden cursor-pointer"
                onClick={() => onOpenLookModal(look)}
              >
                <img
                  src={look.image}
                  alt={look.title}
                  width="750"
                  height="900"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover sm:group-hover:scale-[1.018] transition-transform duration-300"
                />

                {/* Category Chip */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="inline-block px-3 py-1 bg-[#F8F4EE]/95 rounded-full text-[11px] font-semibold uppercase tracking-wider text-[#641F2B] shadow-xs border border-white/60">
                    {look.category}
                  </span>
                </div>

                {/* Hover Quick View Overlay Button */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8F4EE] text-[#641F2B] text-xs font-medium shadow-md">
                    <Eye size={14} className="text-[#C92825]" />
                    <span>Quick View Look</span>
                  </span>
                </div>
              </div>

              {/* Look Info & Actions */}
              <div className="p-5 flex flex-col justify-between flex-1 bg-[#F8F4EE] border-t border-[#E2D7CA]">
                <div className="mb-4">
                  <h3
                    onClick={() => onOpenLookModal(look)}
                    className="text-xl font-serif font-medium text-[#24201F] hover:text-[#641F2B] transition-colors cursor-pointer mb-1"
                  >
                    {look.title}
                  </h3>
                  <p className="text-xs text-[#756B63] line-clamp-2 leading-relaxed font-sans">
                    {look.description}
                  </p>
                </div>

                {/* WhatsApp Action Button */}
                <button
                  id={`enquire-look-${look.id}`}
                  onClick={() => onEnquireWhatsApp(look)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#EDE3D6] hover:bg-[#E2D7CA] border border-[#E2D7CA] text-[#641F2B] text-xs font-medium transition-colors duration-150 cursor-pointer group-hover:border-[#641F2B]"
                >
                  <MessageCircle size={15} className="text-[#25D366]" />
                  <span>Enquire on WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote on Visual Showcase */}
        <div className="mt-12 text-center text-xs text-[#756B63]">
          <p>
            * These curated looks represent current styles and collections in our store. Visit Pehnava on Mayo Link Road, Ajmer to experience textures, trial fits, and matching accessories.
          </p>
        </div>
      </div>
    </section>
  );
};
