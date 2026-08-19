import React from 'react';
import { Sparkles, MessageCircle, Shirt, Store } from 'lucide-react';
import { WHY_PEHNAVA_POINTS } from '../data/fashionData';

export const WhyPehnava: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles size={22} className="text-[#C92825]" />;
      case 'MessageCircle':
        return <MessageCircle size={22} className="text-[#641F2B]" />;
      case 'Shirt':
        return <Shirt size={22} className="text-[#C92825]" />;
      case 'Store':
        return <Store size={22} className="text-[#641F2B]" />;
      default:
        return <Sparkles size={22} className="text-[#C92825]" />;
    }
  };

  return (
    <section id="why-pehnava" className="py-20 lg:py-28 bg-[#F8F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EDE3D6] text-[#C92825] text-xs font-semibold uppercase tracking-[0.25em] mb-4 border border-[#E2D7CA]">
            <Sparkles size={12} className="text-[#C92825]" />
            <span>The Boutique Promise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#641F2B] tracking-tight mb-4">
            Why Pehnava?
          </h2>
          <p className="text-sm sm:text-base text-[#756B63] font-sans font-light">
            Rooted in Ajmer, dedicated to helping you discover styles that reflect your individuality and bring comfort to every occasion.
          </p>
        </div>

        {/* 4 Clean Value Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_PEHNAVA_POINTS.map((point, index) => (
            <div
              key={point.id}
              id={`why-pehnava-${point.id}`}
              className="p-8 rounded-2xl bg-[#EDE3D6]/70 border border-[#E2D7CA] shadow-2xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F8F4EE] border border-[#E2D7CA] flex items-center justify-center mb-6 shadow-2xs">
                  {getIcon(point.icon)}
                </div>

                <h3 className="text-xl font-serif font-semibold text-[#24201F] mb-3">
                  {point.title}
                </h3>

                <p className="text-sm text-[#756B63] leading-relaxed font-sans font-light">
                  {point.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E2D7CA] flex items-center justify-between text-xs text-[#756B63]">
                <span className="uppercase tracking-widest text-[10px] font-medium">0{index + 1}</span>
                <span className="text-[#641F2B] font-serif italic">Pehnava Ajmer</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
