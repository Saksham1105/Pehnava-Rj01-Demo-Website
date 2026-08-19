import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Copy, Check, ExternalLink, MapPin, Store } from 'lucide-react';
import { getWhatsAppUrl } from '../config/business';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage?: string;
  lookTitle?: string;
  lookImage?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  initialMessage,
  lookTitle,
  lookImage,
}) => {
  const [copied, setCopied] = useState(false);
  const defaultMsg = initialMessage || `Hi Pehnava, I was exploring your website and would like to enquire about your latest collection.`;
  const [message, setMessage] = useState(defaultMsg);
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMessage(initialMessage || `Hi Pehnava, I was exploring your website and would like to enquire about your latest collection.`);
  }, [initialMessage]);

  useEffect(() => {
    if (isOpen) {
      triggerElementRef.current = document.activeElement as HTMLElement | null;
      document.body.style.overflow = 'hidden';

      const timer = setTimeout(() => {
        const textarea = modalRef.current?.querySelector<HTMLTextAreaElement>('#whatsapp-message-input');
        textarea?.focus();
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const { url, isPlaceholder } = getWhatsAppUrl(message);

  const handleCopy = () => {
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenWhatsApp = () => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      // In placeholder mode, give quick feedback and allow copying
      handleCopy();
    }
  };

  return (
    <div
      id="whatsapp-enquiry-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="whatsapp-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-xs transition-opacity duration-200 animate-in fade-in"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-[#F8F4EE] rounded-3xl shadow-2xl border border-[#E2D7CA] overflow-hidden p-6 sm:p-8 text-[#24201F] transition-all duration-200 animate-in fade-in zoom-in-98"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-whatsapp-modal"
          onClick={onClose}
          aria-label="Close enquiry modal"
          className="absolute top-5 right-5 p-2 rounded-full text-[#756B63] hover:text-[#24201F] hover:bg-[#EDE3D6] transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-11 h-11 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0">
            <MessageCircle size={24} className="fill-[#25D366]/20 text-[#25D366]" />
          </div>
          <div>
            <h3 id="whatsapp-modal-title" className="text-xl sm:text-2xl font-serif font-medium text-[#641F2B]">
              Connect with Pehnava
            </h3>
            <p className="text-xs sm:text-sm text-[#756B63]">
              Direct WhatsApp Enquiry & Store Assistance
            </p>
          </div>
        </div>

        {/* Look context if provided */}
        {lookTitle && (
          <div className="mb-4 p-3 bg-[#EDE3D6]/70 rounded-2xl border border-[#E2D7CA] flex items-center gap-3">
            {lookImage && (
              <img
                src={lookImage}
                alt={lookTitle}
                className="w-12 h-14 object-cover rounded-xl shrink-0 border border-[#E2D7CA]"
              />
            )}
            <div className="min-w-0">
              <span className="text-[11px] uppercase tracking-wider text-[#C92825] font-semibold block">
                Enquiring About
              </span>
              <p className="text-sm font-serif font-semibold text-[#24201F] truncate">
                {lookTitle}
              </p>
              <p className="text-xs text-[#756B63]">Pehnava Boutique, Ajmer</p>
            </div>
          </div>
        )}

        {/* Message Editor */}
        <div className="mb-5">
          <label htmlFor="whatsapp-message-input" className="block text-xs font-semibold uppercase tracking-wider text-[#756B63] mb-2">
            Your WhatsApp Message
          </label>
          <textarea
            id="whatsapp-message-input"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full text-sm p-3.5 rounded-xl bg-[#EDE3D6]/30 border border-[#E2D7CA] focus:outline-hidden focus:border-[#C92825] focus:ring-2 focus:ring-[#C92825]/20 text-[#24201F] transition"
            placeholder="Type your question about size, color, or availability..."
          />
        </div>

        {/* Notice for placeholder state if not yet configured */}
        {isPlaceholder && (
          <div className="mb-5 p-3 rounded-xl bg-[#EDE3D6] border border-[#E2D7CA] text-xs text-[#641F2B]">
            <p className="font-semibold mb-1 flex items-center gap-1.5">
              <Store size={14} className="text-[#C92825]" /> Ready for Customer Inquiries
            </p>
            <p className="text-[#756B63]">
              The store WhatsApp link will open directly on your device when connected. You can also copy this message or visit Pehnava on Mayo Link Road, Ajmer.
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <button
            id="btn-open-whatsapp-direct"
            onClick={handleOpenWhatsApp}
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#641F2B] hover:bg-[#4E1822] text-[#F8F4EE] text-sm font-medium transition-colors duration-150 shadow-2xs cursor-pointer"
          >
            <MessageCircle size={18} className="text-[#25D366]" />
            <span>Open in WhatsApp</span>
            <ExternalLink size={14} className="opacity-70" />
          </button>

          <button
            id="btn-copy-whatsapp-text"
            onClick={handleCopy}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#EDE3D6] hover:bg-[#E2D7CA] border border-[#E2D7CA] text-[#24201F] text-sm font-medium transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check size={16} className="text-emerald-600" />
                <span className="text-emerald-700">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={16} className="text-[#756B63]" />
                <span>Copy Text</span>
              </>
            )}
          </button>
        </div>

        {/* Store Address Footer */}
        <div className="mt-5 pt-4 border-t border-[#E2D7CA] flex items-center justify-between text-xs text-[#756B63]">
          <span className="flex items-center gap-1.5 truncate">
            <MapPin size={13} className="shrink-0 text-[#C92825]" />
            <span className="truncate">Nagra, Mayo Link Road, Ajmer</span>
          </span>
          <span className="shrink-0 text-[#641F2B] font-medium">Open 11 AM – 9 PM</span>
        </div>
      </div>
    </div>
  );
};
