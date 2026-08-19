import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Instagram, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenWhatsApp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWhatsApp }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 20;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Collections', href: '#collections' },
    { name: 'Featured Looks', href: '#featured-looks' },
    { name: 'Why Us', href: '#why-pehnava' },
    { name: 'Instagram', href: '#instagram' },
    { name: 'About', href: '#about' },
    { name: 'Visit Us', href: '#visit-us' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 py-2 sm:py-3 transition-colors duration-200 ${
        isScrolled
          ? 'bg-[#F8F4EE]/95 backdrop-blur-xs border-b border-[#E2D7CA]'
          : 'bg-[#F8F4EE]/60 sm:bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4 h-11 sm:h-12 md:h-13">
          {/* Mobile Left: Menu Toggle Button */}
          <div className="flex items-center gap-1.5 sm:gap-3 lg:hidden shrink-0">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-1.5 sm:p-2 rounded-lg text-[#24201F] hover:bg-[#EDE3D6] transition-colors duration-150 focus:outline-hidden shrink-0"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Brand Left: Primary Wordmark + Divider + Official Signature Logo */}
          <a
            href="#home"
            id="brand-logo"
            className="flex items-center gap-2 sm:gap-2.5 md:gap-3 focus:outline-hidden shrink-0 group select-none"
            aria-label="Pehnava Home"
          >
            {/* Primary Wordmark */}
            <span className="font-serif font-normal sm:font-medium text-[#641F2B] text-xl sm:text-2xl md:text-[26px] tracking-tight leading-none group-hover:text-[#4E1822] transition-colors duration-150">
              Pehnava
            </span>

            {/* Subtle Vertical Divider */}
            <span
              className="w-[1px] h-5 sm:h-6 md:h-6.5 bg-[#E2D7CA] shrink-0"
              aria-hidden="true"
            />

            {/* Small Official Signature Logo */}
            <BrandLogo variant="seal" />
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-5 xl:space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs tracking-wider uppercase font-medium text-[#756B63] hover:text-[#641F2B] transition-colors duration-150 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C92825] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: WhatsApp CTA */}
          <div className="flex items-center shrink-0">
            <button
              id="nav-whatsapp-cta"
              onClick={onOpenWhatsApp}
              aria-label="Enquire on WhatsApp"
              className="inline-flex items-center justify-center gap-1.5 p-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full bg-[#641F2B] hover:bg-[#4E1822] text-[#F8F4EE] text-xs font-medium tracking-wide transition-colors duration-150 cursor-pointer active:scale-98 shadow-2xs shrink-0"
            >
              <MessageCircle size={15} className="text-[#25D366] shrink-0" />
              <span className="hidden md:inline">Enquire on</span>
              <span className="hidden sm:inline">WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden fixed inset-x-0 top-[60px] sm:top-[72px] md:top-[76px] bg-[#F8F4EE] border-b border-[#E2D7CA] shadow-md p-5 sm:p-6 transition-all duration-150 animate-in fade-in"
        >
          <nav className="flex flex-col space-y-3 mb-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif text-[#24201F] hover:text-[#641F2B] transition-colors duration-150 py-1.5 border-b border-[#EDE3D6]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-1 space-y-3">
            <button
              id="mobile-drawer-whatsapp-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsApp();
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-full bg-[#641F2B] hover:bg-[#4E1822] text-[#F8F4EE] text-sm font-medium transition-colors duration-150 active:scale-98"
            >
              <MessageCircle size={16} className="text-[#25D366]" />
              <span>Connect on WhatsApp</span>
            </button>

            <div className="flex items-center justify-between text-xs text-[#756B63] pt-2">
              <a
                href={BUSINESS_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#641F2B] transition-colors duration-150"
              >
                <Instagram size={14} />
                <span>{BUSINESS_CONFIG.instagramHandle}</span>
              </a>
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#641F2B] transition-colors duration-150"
              >
                <MapPin size={14} />
                <span>Visit Store</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
