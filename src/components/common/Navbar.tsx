import React, { useState, useEffect } from 'react';
import { getAssetUrl } from '../../utils/assetHelper';
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
      <div className={`bg-slate-900 border-b border-slate-800 text-slate-200 text-xs transition-all duration-300 ${isScrolled ? 'py-1 hidden sm:block' : 'py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-amber-400">
              <Clock className="w-3.5 h-3.5" />
              <span className="font-mono text-[11px] text-slate-300">Mon–Sat: 09:30 – 19:00 IST</span>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-slate-300 font-mono text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>New Friends Colony, New Delhi</span>
            </div>
            <div className="hidden lg:flex items-center space-x-2 text-slate-300 font-mono text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>12+ Years Embassy Accredited</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href={`tel:${COMPANY_DETAILS.phoneSecondary.replace(/\s+/g, '')}`}
              className="flex items-center space-x-1.5 text-slate-200 hover:text-amber-400 transition-colors font-mono"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{COMPANY_DETAILS.phoneSecondary}</span>
            </a>

            <span className="text-slate-700">|</span>

            <a
              href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hello Swisa Associates, I would like to inquire about visa and immigration services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-emerald-400 hover:underline font-mono text-[11px] font-semibold"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-400" />
              <span className="hidden sm:inline">WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Primary Sticky Nav */}
      <nav className={`transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200' 
          : 'bg-white/90 md:bg-white/80 backdrop-blur-md py-4 border-b border-slate-200/80 shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button 
            onClick={() => onNavigate('/')}
            className="flex items-center space-x-3 group text-left focus:outline-none"
          >
            <div className="h-11 sm:h-12 w-auto bg-white rounded-lg p-1 border border-slate-200 shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden">
              <img 
                src={getAssetUrl('logo.png')} 
                alt="Swisa Associates Official Logo" 
                className="h-full w-auto object-contain max-w-[90px] sm:max-w-[100px]"
              />
            </div>
            <div>
              <div className="font-display font-bold text-base sm:text-lg text-slate-900 tracking-wide group-hover:text-amber-700 transition-colors flex items-center space-x-1.5">
                <span>SWISA</span>
                <span className="text-amber-700 font-normal">ASSOCIATES</span>
              </div>
              <div className="text-[10px] font-mono tracking-wider text-slate-500 uppercase">
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
                      className={`px-3.5 py-2 rounded-lg font-medium text-sm transition-colors flex items-center space-x-1 ${
                        currentPath.startsWith('/services')
                          ? 'text-amber-800 bg-amber-50 border border-amber-200 font-semibold'
                          : 'text-slate-700 hover:text-amber-700 hover:bg-slate-100/70'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-amber-700' : ''}`} />
                    </button>

                    {/* Services Dropdown */}
                    {servicesOpen && (
                      <div className="absolute top-full left-0 w-80 pt-2 z-50">
                        <div className="bg-white border border-slate-200 rounded-xl shadow-xl p-2">
                          <div className="px-3 py-2 border-b border-slate-100 text-xs font-mono uppercase tracking-wider text-amber-700 font-bold flex justify-between items-center">
                            <span>Consular & Travel Services</span>
                            <span className="text-[10px] text-slate-400 font-normal">9 Sectors</span>
                          </div>
                          <div className="mt-1 max-h-96 overflow-y-auto py-1">
                            {SERVICES_DATA.map((srv) => (
                              <button
                                key={srv.slug}
                                onClick={() => {
                                  onNavigate(`/services/${srv.slug}`);
                                  setServicesOpen(false);
                                }}
                                className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-750 hover:text-amber-800 hover:bg-amber-50/60 transition-all flex items-center justify-between group"
                              >
                                <span className="truncate pr-2 text-slate-700 group-hover:text-amber-800 font-medium">{srv.title}</span>
                                <span className="text-[10px] font-mono text-slate-400 group-hover:text-amber-700">→</span>
                              </button>
                            ))}
                          </div>
                          <div className="mt-2 pt-2 border-t border-slate-100 px-2">
                            <button
                              onClick={() => {
                                onNavigate('/services');
                                setServicesOpen(false);
                              }}
                              className="w-full text-center py-1.5 text-xs text-amber-700 font-mono font-semibold hover:underline"
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
                  className={`px-3.5 py-2 rounded-lg font-medium text-sm transition-colors ${
                    isActive
                      ? 'text-amber-800 bg-amber-50 border border-amber-200 font-semibold'
                      : 'text-slate-700 hover:text-amber-700 hover:bg-slate-100/70'
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
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs px-4 py-2.5 rounded-lg transition-all shadow-sm hover:shadow-md uppercase tracking-wide font-mono"
            >
              Free Visa Enquiry
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-amber-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Full-Screen Overlay Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl">
            <div className="space-y-1">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div key={link.path}>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className={`w-full text-left py-2.5 px-3 rounded-lg text-base font-medium flex justify-between items-center transition-colors ${
                          currentPath.startsWith('/services') ? 'text-amber-800 bg-amber-50 font-semibold' : 'text-slate-750 hover:text-amber-700'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className={`w-4 h-4 text-amber-700 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {mobileServicesOpen && (
                        <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-amber-300 ml-3 mt-1 mb-2 animate-fade-in">
                          <button
                            onClick={() => {
                              onNavigate('/services');
                              setMobileMenuOpen(false);
                            }}
                            className="w-full text-left py-1.5 px-2 text-xs font-mono font-bold text-amber-700 hover:underline block"
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
                              className="w-full text-left py-1.5 px-2 text-xs text-slate-600 hover:text-amber-700 truncate block transition-colors"
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
                        currentPath === link.path ? 'text-amber-800 bg-amber-50 font-semibold' : 'text-slate-750 hover:text-amber-700'
                      }`}
                    >
                      <span>{link.label}</span>
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-200 space-y-3">
              <button
                onClick={() => {
                  onOpenEnquiry();
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-lg text-sm uppercase tracking-wider font-mono shadow-sm"
              >
                Free Visa Enquiry
              </button>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-2">
                <a
                  href={`tel:${COMPANY_DETAILS.phoneSecondary.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center space-x-1.5 py-2.5 px-2 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 text-slate-800 font-semibold"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span className="truncate">Call Now</span>
                </a>
                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1.5 py-2.5 px-2 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-300 text-emerald-700 font-semibold"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-emerald-600" />
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
