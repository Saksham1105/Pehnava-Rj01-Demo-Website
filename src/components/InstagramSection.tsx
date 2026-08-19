import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { INSTAGRAM_GRID_DATA } from '../data/fashionData';

export const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="py-20 lg:py-28 bg-[#EDE3D6] border-t border-[#E2D7CA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#C92825] mb-3">
              <Instagram size={14} />
              <span>{BUSINESS_CONFIG.instagramHandle}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#641F2B] tracking-tight">
              Follow the Pehnava Edit.
            </h2>
            <p className="text-sm sm:text-base text-[#756B63] mt-3 max-w-xl font-sans font-light">
              Discover the latest looks, styling inspiration and updates from Pehnava.
            </p>
          </div>

          <a
            href={BUSINESS_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="instagram-follow-cta"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#641F2B] hover:bg-[#4E1822] text-[#F8F4EE] text-xs font-medium tracking-wide uppercase transition-colors duration-150 shadow-xs group"
          >
            <Instagram size={16} />
            <span>Follow on Instagram</span>
            <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* 6-Image Editorial Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTAGRAM_GRID_DATA.map((post) => (
            <a
              key={post.id}
              href={BUSINESS_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#E2D7CA] border border-[#E2D7CA] shadow-2xs cursor-pointer block"
            >
              <img
                src={post.image}
                alt={post.caption}
                width="600"
                height="600"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover sm:group-hover:scale-[1.018] transition-transform duration-300"
              />

              {/* Hover Overlay with Instagram Icon & Caption */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-3 text-center text-white">
                <Instagram size={22} className="mb-2 text-white/90" />
                <p className="text-[11px] line-clamp-3 text-white/90 font-sans leading-tight">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom handle highlight */}
        <div className="mt-10 text-center">
          <p className="text-xs text-[#756B63]">
            Tag us in your moments with <span className="font-semibold text-[#641F2B]">#PehnavaAjmer</span>
          </p>
        </div>
      </div>
    </section>
  );
};
