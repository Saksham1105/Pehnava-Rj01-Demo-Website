import React, { useEffect, useRef } from 'react';
import { X, MessageCircle, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { FeaturedLook } from '../types';

interface LookModalProps {
  look: FeaturedLook | null;
  onClose: () => void;
  onEnquire: (look: FeaturedLook) => void;
}

export const LookModal: React.FC<LookModalProps> = ({ look, onClose, onEnquire }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (look) {
      triggerElementRef.current = document.activeElement as HTMLElement | null;
      document.body.style.overflow = 'hidden';

      // Focus close button initially
      const timer = setTimeout(() => {
        const closeBtn = modalRef.current?.querySelector<HTMLElement>('#close-look-modal');
        closeBtn?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          onClose();
          return;
        }

        if (e.key === 'Tab' && modalRef.current) {
          const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusableElements.length === 0) return;

          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => {
        clearTimeout(timer);
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
        triggerElementRef.current?.focus();
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [look, onClose]);

  if (!look) return null;

  return (
    <div
      id="look-detail-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="look-modal-title"
      aria-describedby="look-modal-description"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/55 backdrop-blur-xs transition-opacity duration-200 animate-in fade-in"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-3xl bg-[#F8F4EE] rounded-3xl shadow-2xl border border-[#E2D7CA] overflow-hidden grid grid-cols-1 md:grid-cols-2 max-h-[90vh] overflow-y-auto transition-all duration-200 animate-in fade-in zoom-in-98"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-look-modal"
          onClick={onClose}
          aria-label="Close look preview"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#F8F4EE]/90 backdrop-blur-sm text-[#24201F] hover:bg-[#EDE3D6] shadow-2xs border border-[#E2D7CA] transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Look Image */}
        <div className="relative h-72 sm:h-96 md:h-full min-h-[320px] bg-[#EDE3D6]">
          <img
            src={look.image}
            alt={look.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 bg-[#F8F4EE]/90 backdrop-blur-md rounded-full text-xs font-semibold tracking-wider uppercase text-[#641F2B] shadow-2xs border border-[#E2D7CA]">
              {look.category}
            </span>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C92825] mb-2">
              <Sparkles size={13} />
              <span>Pehnava Showcase</span>
            </div>

            <h3 id="look-modal-title" className="text-2xl sm:text-3xl font-serif font-medium text-[#641F2B] mb-3">
              {look.title}
            </h3>

            <p id="look-modal-description" className="text-sm text-[#756B63] leading-relaxed mb-6 font-sans">
              {look.description}
            </p>

            <div className="space-y-2 mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#24201F]">
                Highlights & Details
              </h4>
              <ul className="space-y-1.5">
                {look.details.map((detail, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-[#756B63] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C92825] shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-[#EDE3D6]/70 border border-[#E2D7CA] text-xs text-[#756B63] mb-6">
              <p className="font-semibold text-[#641F2B] mb-1 flex items-center gap-1.5">
                <MapPin size={13} className="text-[#C92825]" />
                Available to experience at our Ajmer Store
              </p>
              <p>
                Interested in this outfit? Enquire with our team on WhatsApp for size fittings, styling details, or custom assistance.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              id="modal-enquire-whatsapp-btn"
              onClick={() => {
                onClose();
                onEnquire(look);
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#641F2B] hover:bg-[#4E1822] text-[#F8F4EE] text-sm font-medium transition-colors duration-150 cursor-pointer shadow-2xs group"
            >
              <MessageCircle size={18} className="text-[#25D366]" />
              <span>Enquire on WhatsApp</span>
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            <p className="text-[11px] text-center text-[#756B63]">
              Direct store communication • Front of Holy Family Hospital, Ajmer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
