import React, { useState, useEffect } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { EnquiryModal } from './components/common/EnquiryModal';
import { ScrollProgressBar } from './components/common/ScrollProgressBar';
import { ScrollRevealManager } from './components/common/ScrollReveal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { OurClientsPage } from './pages/OurClientsPage';
import { ContactPage } from './pages/ContactPage';
import { GalleryPage } from './pages/GalleryPage';
import { FAQPage } from './pages/FAQPage';
import { SupportPage } from './pages/SupportPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';

export function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [enquiryModalOpen, setEnquiryModalOpen] = useState<boolean>(false);
  const [enquiryService, setEnquiryService] = useState<string>('');

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiry = (serviceSlugOrTitle?: string) => {
    setEnquiryService(serviceSlugOrTitle || '');
    setEnquiryModalOpen(true);
  };

  // Render active page view
  const renderCurrentPage = () => {
    // Check if it is a service detail page
    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '').replace(/\/$/, '');
      return (
        <ServiceDetailPage
          slug={slug}
          onNavigate={navigate}
          onOpenEnquiry={handleOpenEnquiry}
        />
      );
    }

    switch (currentPath) {
      case '/':
      case '':
        return (
          <HomePage
            onNavigate={navigate}
            onOpenEnquiry={handleOpenEnquiry}
          />
        );

      case '/about':
        return (
          <AboutPage
            onNavigate={navigate}
            onOpenEnquiry={() => handleOpenEnquiry('General Consultation')}
          />
        );

      case '/services':
        return (
          <ServicesPage
            onNavigate={navigate}
            onOpenEnquiry={handleOpenEnquiry}
          />
        );

      case '/industries':
        return (
          <IndustriesPage
            onNavigate={navigate}
            onOpenEnquiry={handleOpenEnquiry}
          />
        );

      case '/our-clients':
        return (
          <OurClientsPage
            onNavigate={navigate}
            onOpenEnquiry={handleOpenEnquiry}
          />
        );

      case '/contact':
        return <ContactPage />;

      case '/gallery':
        return <GalleryPage />;

      case '/faq':
        return <FAQPage />;

      case '/support':
        return <SupportPage />;

      case '/privacy-policy':
        return <PrivacyPolicyPage />;

      default:
        return (
          <HomePage
            onNavigate={navigate}
            onOpenEnquiry={handleOpenEnquiry}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-cloud text-ink font-body selection:bg-brass selection:text-sky-ink relative">
      {/* Top Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Global Scroll Observer Manager */}
      <ScrollRevealManager currentPath={currentPath} />

      {/* Global Sticky Navigation */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* Main Viewport Content with Smooth Page Transitions */}
      <main key={currentPath} className="flex-grow page-fade-in">
        {renderCurrentPage()}
      </main>

      {/* Runway Strip Themed Footer */}
      <Footer
        onNavigate={navigate}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Global Persistent Floating WhatsApp Action */}
      <FloatingWhatsApp currentContext={currentPath} />

      {/* Global Free Visa Assessment Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        defaultService={enquiryService}
      />
    </div>
  );
}

export default App;
