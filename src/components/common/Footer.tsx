import React from 'react';
import { getAssetUrl } from '../../utils/assetHelper';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Plane, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight,
  Send
} from 'lucide-react';
import { COMPANY_DETAILS, SERVICES_DATA } from '../../data/siteData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenEnquiry: (serviceSlug?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnquiry }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sky-ink-deep text-cloud border-t border-brass/30 relative overflow-hidden">
      {/* Runway Strip Marking Motif */}
      <div className="w-full h-3 bg-sky-ink flex items-center justify-around border-b border-brass/20 overflow-hidden">
        {Array.from({ length: 32 }).map((_, i) => (
          <div key={i} className="w-8 h-1 bg-brass/40 transform -skew-x-12" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          
          {/* Brand & Overview Column (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="h-12 w-auto bg-white rounded-lg p-1 border border-brass/40 shadow-brass-sm flex items-center justify-center overflow-hidden">
                <img 
                  src={getAssetUrl('logo.png')} 
                  alt="Swisa Associates Official Logo" 
                  className="h-full w-auto object-contain max-w-[100px]"
                />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-cloud tracking-wide block">
                  SWISA <span className="text-brass font-normal">ASSOCIATES</span>
                </span>
                <p className="text-[10px] font-mono tracking-wider text-brass uppercase">
                  Lic: {COMPANY_DETAILS.licenseNumber}
                </p>
              </div>
            </div>

            <p className="text-sm text-cloud/75 leading-relaxed pr-4">
              With over 12 years of dedicated consular experience, Swisa Associates is New Delhi's premier agency for Saudi Arabia and Kuwait visa stamping, pan-India technical manpower mobilization, certificate attestation, and international travel logistics.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-sky-ink border border-brass/30 text-brass text-xs font-mono">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>1500+ Satisfied Clients</span>
              </div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-sky-ink border border-brass/30 text-brass text-xs font-mono">
                <span>990+ Projects</span>
              </div>
            </div>

            {/* Social & Contact Buttons */}
            <div className="pt-2">
              <div className="text-xs font-mono uppercase text-brass mb-2">Connect Directly:</div>
              <div className="flex items-center space-x-3">
                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-whatsapp-green text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                  aria-label="Chat on WhatsApp"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-white text-white" />
                </a>

                <a
                  href={COMPANY_DETAILS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 px-3.5 rounded-lg bg-sky-ink border border-brass/30 text-cloud/80 hover:text-brass hover:border-brass flex items-center justify-center space-x-1.5 transition-colors text-xs font-bold font-mono"
                  aria-label="Swisa Associates Official Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>

                <a
                  href={COMPANY_DETAILS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 px-3.5 rounded-lg bg-sky-ink border border-brass/30 text-cloud/80 hover:text-brass hover:border-brass flex items-center justify-center space-x-1.5 transition-colors text-xs font-bold font-mono"
                  aria-label="Swisa Associates Official LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-brass border-b border-brass/25 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Services Overview', path: '/services' },
                { label: 'Industries Served', path: '/industries' },
                { label: 'Our Clients', path: '/our-clients' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'FAQ Directory', path: '/faq' },
                { label: 'Support Desk', path: '/support' },
                { label: 'Privacy Policy', path: '/privacy-policy' },
                { label: 'Contact Us', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => onNavigate(item.path)}
                    className="text-cloud/80 hover:text-brass transition-colors flex items-center space-x-1.5 group text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-brass/50 group-hover:text-brass group-hover:translate-x-0.5 transition-all" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Consular Services Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-brass border-b border-brass/25 pb-2">
              Consular Services
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.slug}>
                  <button
                    onClick={() => onNavigate(`/services/${srv.slug}`)}
                    className="text-cloud/80 hover:text-brass transition-colors flex items-center space-x-1.5 group text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-brass/50 group-hover:text-brass group-hover:translate-x-0.5 transition-all" />
                    <span className="truncate">{srv.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-brass border-b border-brass/25 pb-2">
              Department Desk
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-2.5 text-cloud/85">
                <MapPin className="w-4 h-4 text-brass shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY_DETAILS.address}</span>
              </div>

              <div className="space-y-1 pt-1">
                <div className="flex items-center space-x-2 text-cloud/90 font-mono">
                  <Phone className="w-3.5 h-3.5 text-brass shrink-0" />
                  <a href={`tel:${COMPANY_DETAILS.phonePrimary.replace(/\s+/g, '')}`} className="hover:text-brass">
                    {COMPANY_DETAILS.phonePrimary}
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-cloud/90 font-mono">
                  <Phone className="w-3.5 h-3.5 text-brass shrink-0" />
                  <a href={`tel:${COMPANY_DETAILS.phoneSecondary.replace(/\s+/g, '')}`} className="hover:text-brass">
                    {COMPANY_DETAILS.phoneSecondary}
                  </a>
                </div>
              </div>

              {/* Department Directory Mailboxes */}
              <div className="pt-3 border-t border-brass/20 space-y-2 font-mono text-xs sm:text-sm">
                <div className="text-brass text-xs sm:text-sm uppercase tracking-wider font-bold">
                  Department Mailboxes:
                </div>
                <div className="truncate">
                  <a href={`mailto:${COMPANY_DETAILS.emails.general}`} className="text-cloud/90 hover:text-brass transition-colors">
                    <span className="text-brass font-semibold">General:</span> {COMPANY_DETAILS.emails.general}
                  </a>
                </div>
                <div className="truncate">
                  <a href={`mailto:${COMPANY_DETAILS.emails.mofa}`} className="text-cloud/90 hover:text-brass transition-colors">
                    <span className="text-brass font-semibold">MOFA:</span> {COMPANY_DETAILS.emails.mofa}
                  </a>
                </div>
                <div className="truncate">
                  <a href={`mailto:${COMPANY_DETAILS.emails.jobs}`} className="text-cloud/90 hover:text-brass transition-colors">
                    <span className="text-brass font-semibold">Recruitment:</span> {COMPANY_DETAILS.emails.jobs}
                  </a>
                </div>
                <div className="truncate">
                  <a href={`mailto:${COMPANY_DETAILS.emails.visa}`} className="text-cloud/90 hover:text-brass transition-colors">
                    <span className="text-brass font-semibold">Visas:</span> {COMPANY_DETAILS.emails.visa}
                  </a>
                </div>
                <div className="truncate">
                  <a href={`mailto:${COMPANY_DETAILS.emails.emigration}`} className="text-cloud/90 hover:text-brass transition-colors">
                    <span className="text-brass font-semibold">Emigration:</span> {COMPANY_DETAILS.emails.emigration}
                  </a>
                </div>
              </div>

              {/* Quick WhatsApp Link in Footer */}
              <div className="pt-3">
                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 px-3 py-2 rounded-lg bg-whatsapp-green/20 border border-whatsapp-green text-whatsapp-green hover:bg-whatsapp-green hover:text-white transition-colors text-xs font-mono font-bold"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Direct WhatsApp Helpdesk</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Runway Centerline Divider */}
        <div className="runway-line my-8 opacity-60" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-cloud/60 font-mono space-y-3 sm:space-y-0">
          <div>
            © {currentYear} {COMPANY_DETAILS.name}. All Rights Reserved. ISO 9001 & MEA Compliant.
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={() => onNavigate('/privacy-policy')} className="hover:text-brass transition-colors">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('/support')} className="hover:text-brass transition-colors">
              Support Desk
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('/faq')} className="hover:text-brass transition-colors">
              Embassy Guidelines
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
