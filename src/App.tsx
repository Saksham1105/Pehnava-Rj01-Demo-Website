import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { EditorialEdits } from './components/EditorialEdits';
import { FeaturedLooks } from './components/FeaturedLooks';
import { WhatsAppSection } from './components/WhatsAppSection';
import { WhyPehnava } from './components/WhyPehnava';
import { InstagramSection } from './components/InstagramSection';
import { AboutSection } from './components/AboutSection';
import { VisitUs } from './components/VisitUs';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { WhatsAppModal } from './components/WhatsAppModal';
import { LookModal } from './components/LookModal';
import { FeaturedLook } from './types';

export default function App() {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [whatsAppCustomMessage, setWhatsAppCustomMessage] = useState<string>('');
  const [selectedEnquiryLook, setSelectedEnquiryLook] = useState<FeaturedLook | null>(null);

  const [activeLookModal, setActiveLookModal] = useState<FeaturedLook | null>(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');

  // Handle smooth scrolling specifically for anchor click navigation while keeping native wheel/trackpad scrolling
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      
      const href = target.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', href);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const handleOpenWhatsApp = (customMessage?: string, look?: FeaturedLook) => {
    setWhatsAppCustomMessage(
      customMessage ||
        (look
          ? look.enquiryMessage
          : 'Hi Pehnava, I was exploring your website and would like to enquire about your collection.')
    );
    setSelectedEnquiryLook(look || null);
    setIsWhatsAppModalOpen(true);
  };

  const handleSelectCategoryFromEdits = (categoryId: string) => {
    let target = 'all';
    if (categoryId === 'women') target = 'women';
    else if (categoryId === 'men') target = 'men';
    else if (categoryId === 'ethnic-wear') target = 'ethnic';
    else if (categoryId === 'occasion-wear') target = 'occasion';
    else if (categoryId === 'new-arrivals') target = 'new-arrivals';
    
    setSelectedCategoryFilter(target);
  };

  return (
    <div className="min-h-screen bg-[#F8F4EE] text-[#24201F] flex flex-col selection:bg-[#EDE3D6] selection:text-[#641F2B]">
      {/* Sticky Header Navigation */}
      <Navbar onOpenWhatsApp={() => handleOpenWhatsApp()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Editorial Hero */}
        <Hero onOpenWhatsApp={() => handleOpenWhatsApp()} />

        {/* The Pehnava Edit Introduction */}
        <IntroSection />

        {/* Major Editorial Section: Women & Men Edits */}
        <EditorialEdits onSelectCategory={handleSelectCategoryFromEdits} />

        {/* Featured Looks / Lookbook Gallery */}
        <FeaturedLooks
          selectedCategoryFilter={selectedCategoryFilter}
          onSelectCategoryFilter={setSelectedCategoryFilter}
          onOpenLookModal={(look) => setActiveLookModal(look)}
          onEnquireWhatsApp={(look) => handleOpenWhatsApp(look.enquiryMessage, look)}
        />

        {/* WhatsApp Experience Section (Conversation Showcase) */}
        <WhatsAppSection onOpenWhatsApp={(msg) => handleOpenWhatsApp(msg)} />

        {/* Why Pehnava Value Cards */}
        <WhyPehnava />

        {/* Instagram Grid Showcase */}
        <InstagramSection />

        {/* Authentic About Section */}
        <AboutSection />

        {/* Visit Us / Store Location Details */}
        <VisitUs onOpenWhatsApp={(msg) => handleOpenWhatsApp(msg)} />
      </main>

      {/* Minimalist Editorial Footer */}
      <Footer onOpenWhatsApp={(msg) => handleOpenWhatsApp(msg)} />

      {/* Floating Action Button for WhatsApp */}
      <FloatingWhatsApp onOpenWhatsApp={() => handleOpenWhatsApp()} />

      {/* WhatsApp Enquiry Modal */}
      <WhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => {
          setIsWhatsAppModalOpen(false);
          setSelectedEnquiryLook(null);
        }}
        initialMessage={whatsAppCustomMessage}
        lookTitle={selectedEnquiryLook?.title}
        lookImage={selectedEnquiryLook?.image}
      />

      {/* Look Detail Quick View Modal */}
      <LookModal
        look={activeLookModal}
        onClose={() => setActiveLookModal(null)}
        onEnquire={(look) => {
          setActiveLookModal(null);
          handleOpenWhatsApp(look.enquiryMessage, look);
        }}
      />
    </div>
  );
}
