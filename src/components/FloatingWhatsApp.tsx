import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenWhatsApp: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenWhatsApp }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
    >
      {/* Friendly Tooltip Prompt */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#1F1A1B] text-[#F8F4EE] text-xs font-medium shadow-md border border-[#362C2E]">
          <span className="w-2 h-2 rounded-full bg-[#25D366]" />
          <span>Questions? Connect on WhatsApp</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            aria-label="Dismiss tooltip"
            className="text-white/60 hover:text-white ml-1 p-0.5 transition-colors duration-150 cursor-pointer"
          >
            <X size={12} />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        id="floating-whatsapp-btn"
        onClick={onOpenWhatsApp}
        aria-label="Contact Pehnava on WhatsApp"
        className="p-3.5 sm:p-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md hover:shadow-lg sm:hover:scale-[1.02] active:scale-98 transition-transform duration-200 flex items-center justify-center cursor-pointer"
      >
        <MessageCircle size={24} className="fill-white/20 text-white" />
      </button>
    </div>
  );
};
