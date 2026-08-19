import React from 'react';
import { MessageCircle, CheckCheck, ArrowRight, Store, Sparkles, Clock } from 'lucide-react';

interface WhatsAppSectionProps {
  onOpenWhatsApp: (customMessage?: string) => void;
}

export const WhatsAppSection: React.FC<WhatsAppSectionProps> = ({ onOpenWhatsApp }) => {
  return (
    <section id="whatsapp-experience" className="py-20 lg:py-28 bg-[#EDE3D6] border-y border-[#E2D7CA] relative overflow-hidden">
      {/* Decorative Warm Shapes */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#E2D7CA] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#F8F4EE] rounded-full blur-3xl opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Information & CTA */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F4EE] border border-[#E2D7CA] text-[#641F2B] text-xs font-semibold uppercase tracking-wider mb-5 shadow-2xs">
              <MessageCircle size={14} className="text-[#25D366]" />
              <span>Direct Store Communication</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#641F2B] tracking-tight leading-tight mb-5">
              Found a look <br className="hidden sm:inline" />
              <span className="italic text-[#C92825]">you love?</span>
            </h2>

            <p className="text-base sm:text-lg text-[#756B63] leading-relaxed mb-8 font-sans font-light">
              Have a question about a style, size or availability? Connect with Pehnava directly on WhatsApp.
              We are delighted to assist you with real-time photographs, styling suggestions, or reserving a piece for your visit.
            </p>

            {/* Benefit Checkpoints */}
            <div className="space-y-3.5 mb-8 w-full">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#F8F4EE] border border-[#E2D7CA] flex items-center justify-center text-[#C92825] shrink-0 mt-0.5 shadow-2xs">
                  <Sparkles size={12} />
                </div>
                <p className="text-sm text-[#24201F]">
                  <strong className="font-semibold text-[#641F2B]">Instant Outfit Enquiries:</strong> Share screenshot or style name to check color options and fits.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#F8F4EE] border border-[#E2D7CA] flex items-center justify-center text-[#641F2B] shrink-0 mt-0.5 shadow-2xs">
                  <Clock size={12} />
                </div>
                <p className="text-sm text-[#24201F]">
                  <strong className="font-semibold text-[#641F2B]">Prompt Store Responses:</strong> Our team replies during boutique hours (11:00 AM – 9:00 PM).
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#F8F4EE] border border-[#E2D7CA] flex items-center justify-center text-[#C92825] shrink-0 mt-0.5 shadow-2xs">
                  <Store size={12} />
                </div>
                <p className="text-sm text-[#24201F]">
                  <strong className="font-semibold text-[#641F2B]">In-Store Trial Preparation:</strong> Ask to hold a style before you visit our Ajmer boutique.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button
              id="whatsapp-section-cta"
              onClick={() => onOpenWhatsApp("Hi Pehnava, I was exploring your website and would love to ask about some outfits.")}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#641F2B] hover:bg-[#4E1822] text-[#F8F4EE] text-sm font-medium tracking-wide transition-colors duration-150 shadow-sm cursor-pointer active:scale-98 group"
            >
              <MessageCircle size={18} className="text-[#25D366]" />
              <span>Chat on WhatsApp</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column: Visual Conversation Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md bg-[#F8F4EE] rounded-3xl p-6 sm:p-7 shadow-lg border border-[#E2D7CA] relative">
              {/* Mockup WhatsApp Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-[#E2D7CA] mb-5">
                <div className="w-10 h-10 rounded-full bg-[#641F2B] text-[#F8F4EE] font-serif font-bold flex items-center justify-center text-sm">
                  P
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-[#24201F] truncate">
                      Pehnava Boutique
                    </h3>
                    <span className="text-[10px] text-emerald-700 font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Active
                    </span>
                  </div>
                  <p className="text-xs text-[#756B63] truncate">Mayo Link Road, Ajmer</p>
                </div>
              </div>

              {/* Chat Message Bubble 1: Customer */}
              <div className="space-y-4 font-sans text-xs sm:text-sm">
                <div className="flex justify-end">
                  <div className="max-w-[85%] bg-[#DCF8C6] text-[#24201F] p-3.5 rounded-2xl rounded-tr-xs shadow-2xs">
                    <p className="leading-relaxed">
                      Hi, I liked this outfit from your showcase. Is it available in another colour?
                    </p>
                    <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-[#756B63]">
                      <span>12:30 PM</span>
                      <CheckCheck size={13} className="text-[#34B7F1]" />
                    </div>
                  </div>
                </div>

                {/* Chat Message Bubble 2: Pehnava */}
                <div className="flex justify-start">
                  <div className="max-w-[85%] bg-[#EDE3D6] text-[#24201F] p-3.5 rounded-2xl rounded-tl-xs shadow-2xs border border-[#E2D7CA]">
                    <p className="leading-relaxed">
                      Yes! We currently have it in Wine Red, Sage Green, and Ivory Gold. Please share your preferred size or visit us to try it on.
                    </p>
                    <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-[#756B63]">
                      <span>12:32 PM</span>
                    </div>
                  </div>
                </div>

                {/* Chat Message Bubble 3: Customer */}
                <div className="flex justify-end">
                  <div className="max-w-[85%] bg-[#DCF8C6] text-[#24201F] p-3.5 rounded-2xl rounded-tr-xs shadow-2xs">
                    <p className="leading-relaxed">
                      Wonderful, I will visit your store today around 5 PM!
                    </p>
                    <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-[#756B63]">
                      <span>12:33 PM</span>
                      <CheckCheck size={13} className="text-[#34B7F1]" />
                    </div>
                  </div>
                </div>

                {/* Chat Message Bubble 4: Pehnava */}
                <div className="flex justify-start">
                  <div className="max-w-[85%] bg-[#EDE3D6] text-[#24201F] p-3.5 rounded-2xl rounded-tl-xs shadow-2xs border border-[#E2D7CA]">
                    <p className="leading-relaxed">
                      We look forward to welcoming you! We are right in front of Holy Family Hospital on Mayo Link Road. ✨
                    </p>
                    <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-[#756B63]">
                      <span>12:34 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Input Visual Bar */}
              <div
                onClick={() => onOpenWhatsApp()}
                className="mt-6 pt-3 border-t border-[#E2D7CA] flex items-center justify-between bg-[#EDE3D6]/70 p-2.5 rounded-xl border border-[#E2D7CA] cursor-pointer hover:bg-[#EDE3D6] transition-colors text-xs text-[#756B63]"
              >
                <span>Tap to start a conversation...</span>
                <span className="p-1.5 rounded-full bg-[#641F2B] text-white">
                  <MessageCircle size={14} className="text-[#25D366]" />
                </span>
              </div>

              {/* Subtitle disclaimer */}
              <p className="mt-3 text-[11px] text-center text-[#756B63]">
                Visual demonstration • Connects directly with our store team
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
