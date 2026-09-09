import React, { useState } from 'react';
import { X } from 'lucide-react';
import { COMPANY_DETAILS } from '../../data/siteData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FloatingWhatsAppProps {
  currentContext?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ currentContext }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  // Generate contextual message
  const getContextMessage = () => {
    if (currentContext && currentContext.includes('saudi')) {
      return 'Hello Swisa Associates, I need information regarding Saudi Arabia Visa Stamping and Wakala verification.';
    }
    if (currentContext && currentContext.includes('kuwait')) {
      return 'Hello Swisa Associates, I need assistance with Kuwait Visa Stamping and PCC attestation.';
    }
    if (currentContext && currentContext.includes('manpower')) {
      return 'Hello Swisa Associates, I am inquiring about industrial manpower recruitment and technical candidate sourcing.';
    }
    if (currentContext && currentContext.includes('attestation')) {
      return 'Hello Swisa Associates, I would like to get my degree / commercial documents attested from MEA and Embassy.';
    }
    if (currentContext && currentContext.includes('air-ticketing')) {
      return 'Hello Swisa Associates, I would like to book international flight tickets with extra baggage allowance.';
    }
    return 'Hello Swisa Associates, I would like to enquire about visa, immigration, or manpower services.';
  };

  const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(getContextMessage())}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col select-none">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="mb-3 w-72 bg-sky-ink-deep text-cloud p-4 rounded-xl border border-brass/40 shadow-2xl backdrop-blur-md animate-fade-in relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-cloud/50 hover:text-cloud text-xs p-1"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center space-x-2.5 mb-2">
            <div className="w-3 h-3 rounded-full bg-whatsapp-green animate-ping" />
            <span className="text-xs font-mono text-brass font-bold uppercase">Online Consular Desk</span>
          </div>
          <p className="text-xs text-cloud/90 mb-3 leading-snug">
            Need fast-track visa stamping or manpower consultation? We reply within minutes on business hours.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center space-x-2 bg-whatsapp-green hover:bg-emerald-500 text-white py-2 rounded-lg text-xs font-semibold shadow-md transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
            <span>Open WhatsApp Chat</span>
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="relative group">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          className="w-14 h-14 rounded-full bg-whatsapp-green text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform whatsapp-pulse focus:outline-none focus:ring-4 focus:ring-whatsapp-green/40"
          aria-label="Chat directly on WhatsApp with Swisa Associates"
        >
          <WhatsAppIcon className="w-7 h-7 fill-white text-white" />
        </a>

        {/* Hover Pill Label */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-sky-ink-deep border border-brass/30 text-cloud text-xs font-mono font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          Chat on WhatsApp
        </span>
      </div>
    </div>
  );
};
