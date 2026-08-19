import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'nav' | 'seal' | 'footer' | 'large';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', variant = 'seal' }) => {
  if (variant === 'footer') {
    return (
      <div className={`inline-flex items-center bg-black rounded-xl p-2 border border-stone-800 shadow-xs ${className}`}>
        <picture>
          <source srcSet="/pehnava-logo.webp" type="image/webp" />
          <img
            src="/pehnava-logo.png"
            alt="PEHNAVA official logo"
            className="h-10 sm:h-12 w-auto object-contain"
            width="160"
            height="90"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </picture>
      </div>
    );
  }

  if (variant === 'large') {
    return (
      <div className={`inline-flex items-center bg-black rounded-2xl p-3 border border-stone-800 shadow-md ${className}`}>
        <picture>
          <source srcSet="/pehnava-logo.webp" type="image/webp" />
          <img
            src="/pehnava-logo.png"
            alt="PEHNAVA official logo"
            className="h-16 sm:h-20 w-auto object-contain"
            width="320"
            height="180"
            loading="eager"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </picture>
      </div>
    );
  }

  // Default: 'seal' / 'nav' header brand signature
  return (
    <div
      className={`inline-flex items-center justify-center bg-black p-0.5 sm:p-1 rounded-md sm:rounded-lg border border-stone-800/80 shadow-2xs shrink-0 ${className}`}
    >
      <picture>
        <source srcSet="/pehnava-logo.webp" type="image/webp" />
        <img
          src="/pehnava-logo.png"
          alt="PEHNAVA official logo"
          className="h-5 sm:h-6 md:h-6.5 w-[50px] sm:w-[60px] md:w-[70px] object-contain aspect-[16/9]"
          width="70"
          height="39"
          loading="eager"
          decoding="async"
          referrerPolicy="no-referrer"
        />
      </picture>
    </div>
  );
};
