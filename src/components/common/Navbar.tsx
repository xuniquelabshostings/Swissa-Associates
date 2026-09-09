import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  ChevronDown, 
  Menu, 
  X, 
  Plane, 
  ShieldCheck, 
  Clock, 
  MapPin,
  ExternalLink
} from 'lucide-react';
import { COMPANY_DETAILS, SERVICES_DATA } from '../../data/siteData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenEnquiry: (serviceSlug?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 35);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services', hasDropdown: true },
    { label: 'Industries', path: '/industries' },
    { label: 'Our Clients', path: '/our-clients' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Utility Bar */}
      <div className={`bg-sky-ink-deep border-b border-line-gold/30 text-cloud text-xs transition-all duration-300 ${isScrolled ? 'py-1 hidden sm:block' : 'py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-brass">
              <Clock className="w-3.5 h-3.5" />
              <span className="font-mono text-[11px] text-cloud/80">Mon–Sat: 09:30 – 19:00 IST</span>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-cloud/70 font-mono text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-brass" />
              <span>New Friends Colony, New Delhi</span>
            </div>
            <div className="hidden lg:flex items-center space-x-2 text-cloud/70 font-mono text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-brass" />
              <span>12+ Years Embassy Accredited</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href={`tel:${COMPANY_DETAILS.phoneSecondary.replace(/\s+/g, '')}`}
              className="flex items-center space-x-1.5 text-cloud/90 hover:text-brass transition-colors font-mono"
            >
              <Phone className="w-3 h-3 text-brass" />
              <span>{COMPANY_DETAILS.phoneSecondary}</span>
            </a>

            <span className="text-line-gold/40">|</span>

            <a
              href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hello Swisa Associates, I would like to inquire about visa and immigration services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-whatsapp-green hover:underline font-mono text-[11px] font-semibold"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-whatsapp-green" />
              <span className="hidden sm:inline">WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Primary Sticky Nav */}
      <nav className={`transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-sky-ink-deep shadow-2xl py-3 border-b border-brass/30' 
          : 'bg-sky-ink-deep md:bg-gradient-to-b md:from-sky-ink/90 md:to-sky-ink/50 backdrop-blur-md py-4 border-b border-brass/20 md:border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button 
            onClick={() => onNavigate('/')}
            className="flex items-center space-x-3 group text-left focus:outline-none"
          >
            <div className="h-11 sm:h-12 w-auto bg-white rounded-lg p-1 border border-brass/40 shadow-brass-sm flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden">
              <img 
                src="/logo.png" 
                alt="Swisa Associates Official Logo" 
                className="h-full w-auto object-contain max-w-[90px] sm:max-w-[100px]"
              />
            </div>
            <div>
              <div className="font-display font-bold text-base sm:text-lg text-cloud tracking-wide group-hover:text-brass transition-colors flex items-center space-x-1.5">
                <span>SWISA</span>
                <span className="text-brass font-normal">ASSOCIATES</span>
              </div>
              <div className="text-[10px] font-mono tracking-wider text-cloud/70 uppercase">
                Lic: {COMPANY_DETAILS.licenseNumber}
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.path} 
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      onClick={() => onNavigate(link.path)}
                      className={`px-3.5 py-2 rounded-md font-medium text-sm transition-colors flex items-center space-x-1 ${
                        currentPath.startsWith('/services')
                          ? 'text-brass bg-sky-ink-deep border border-brass/30'
                          : 'text-cloud/90 hover:text-brass hover:bg-white/5'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-brass' : ''}`} />
                    </button>

                    {/* Services Dropdown */}
                    {servicesOpen && (
                      <div className="absolute top-full left-0 w-80 pt-2 z-50">
                        <div className="bg-sky-ink-deep border border-brass/30 rounded-xl shadow-2xl p-2 backdrop-blur-xl">
                          <div className="px-3 py-2 border-b border-brass/20 text-xs font-mono uppercase tracking-wider text-brass flex justify-between items-center">
                            <span>Consular & Travel Services</span>
                            <span className="text-[10px] text-cloud/50">9 Sectors</span>
                          </div>
                          <div className="mt-1 max-h-96 overflow-y-auto py-1">
                            {SERVICES_DATA.map((srv) => (
                              <button
                                key={srv.slug}
                                onClick={() => {
                                  onNavigate(`/services/${srv.slug}`);
                                  setServicesOpen(false);
                                }}
                                className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-cloud/85 hover:text-brass hover:bg-white/5 transition-all flex items-center justify-between group"
                              >
                                <span className="truncate pr-2">{srv.title}</span>
                                <span className="text-[10px] font-mono text-cloud/40 group-hover:text-brass">→</span>
                              </button>
                            ))}
                          </div>
                          <div className="mt-2 pt-2 border-t border-brass/15 px-2">
                            <button
                              onClick={() => {
                                onNavigate('/services');
                                setServicesOpen(false);
                              }}
                              className="w-full text-center py-1.5 text-xs text-brass font-mono hover:underline"
                            >
                              View All Services Overview
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => onNavigate(link.path)}
                  className={`px-3.5 py-2 rounded-md font-medium text-sm transition-colors ${
                    isActive
                      ? 'text-brass bg-sky-ink-deep border border-brass/30'
                      : 'text-cloud/90 hover:text-brass hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={() => onOpenEnquiry()}
              className="bg-brass hover:bg-brass-soft text-sky-ink-deep font-semibold text-xs px-4 py-2.5 rounded-lg transition-all shadow-sm hover:shadow-brass-sm uppercase tracking-wide font-mono"
            >
              Free Visa Enquiry
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-cloud hover:text-brass hover:bg-white/5 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Full-Screen Overlay Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-sky-ink-deep border-t border-brass/30 px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl">
            <div className="space-y-1">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div key={link.path}>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className={`w-full text-left py-2.5 px-3 rounded-lg text-base font-medium flex justify-between items-center transition-colors ${
                          currentPath.startsWith('/services') ? 'text-brass bg-white/5 font-semibold' : 'text-cloud hover:text-brass'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className={`w-4 h-4 text-brass transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {mobileServicesOpen && (
                        <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-brass/30 ml-3 mt-1 mb-2 animate-fade-in">
                          <button
                            onClick={() => {
                              onNavigate('/services');
                              setMobileMenuOpen(false);
                            }}
                            className="w-full text-left py-1.5 px-2 text-xs font-mono font-bold text-brass hover:underline block"
                          >
                            All Services Overview →
                          </button>
                          {SERVICES_DATA.map((srv) => (
                            <button
                              key={srv.slug}
                              onClick={() => {
                                onNavigate(`/services/${srv.slug}`);
                                setMobileMenuOpen(false);
                              }}
                              className="w-full text-left py-1.5 px-2 text-xs text-cloud/80 hover:text-brass truncate block transition-colors"
                            >
                              {srv.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <div key={link.path}>
                    <button
                      onClick={() => {
                        onNavigate(link.path);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full text-left py-2.5 px-3 rounded-lg text-base font-medium flex justify-between items-center transition-colors ${
                        currentPath === link.path ? 'text-brass bg-white/5 font-semibold' : 'text-cloud hover:text-brass'
                      }`}
                    >
                      <span>{link.label}</span>
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-brass/20 space-y-3">
              <button
                onClick={() => {
                  onOpenEnquiry();
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-brass text-sky-ink-deep font-semibold py-3 rounded-lg text-sm uppercase tracking-wider font-mono shadow-md"
              >
                Free Visa Enquiry
              </button>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-2">
                <a
                  href={`tel:${COMPANY_DETAILS.phoneSecondary.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center space-x-1.5 py-2.5 px-2 bg-sky-ink rounded-lg border border-brass/25 text-cloud"
                >
                  <Phone className="w-3.5 h-3.5 text-brass" />
                  <span className="truncate">Call Now</span>
                </a>
                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1.5 py-2.5 px-2 bg-whatsapp-green/15 rounded-lg border border-whatsapp-green/40 text-whatsapp-green font-semibold"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-whatsapp-green" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
