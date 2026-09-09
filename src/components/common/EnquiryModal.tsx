import React, { useState } from 'react';
import { getAssetUrl } from '../../utils/assetHelper';
import { X, CheckCircle, Send, Shield, Clock } from 'lucide-react';
import { COMPANY_DETAILS, SERVICES_DATA, DESTINATION_COUNTRIES } from '../../data/siteData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultService = '',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('Saudi Arabia');
  const [service, setService] = useState(defaultService || 'Saudi Arabia Visa Stamping');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3 seconds on submit
      // In real scenario, would POST to server
    }, 3000);
  };

  const handleWhatsAppSubmit = () => {
    const text = `*NEW VISA INQUIRY*\nName: ${name || 'N/A'}\nPhone: ${phone || 'N/A'}\nEmail: ${email || 'N/A'}\nCountry: ${country}\nService: ${service}\nMessage: ${message || 'Please guide me on the visa process.'}`;
    window.open(`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-xl max-h-[92vh] flex flex-col bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header styled as Flight Pass Header */}
        <div className="bg-slate-900 px-4 sm:px-6 py-3.5 sm:py-4 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center space-x-2.5 sm:space-x-3">
            <div className="h-9 sm:h-10 w-auto bg-white rounded-md p-1 border border-slate-200 flex items-center justify-center shrink-0">
              <img src={getAssetUrl('logo.png')} alt="Swisa Logo" className="h-full w-auto object-contain max-w-[70px] sm:max-w-[80px]" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold">
                  Consular Assessment Desk
                </span>
              </div>
              <h3 className="text-sm sm:text-lg font-bold font-display mt-0.5 text-white leading-tight">
                Free Visa & Immigration Assessment
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-6 sm:py-8 text-center space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                Application Dossier Received
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{name}</strong>. Our designated visa officer will review your requirements and respond within <strong>24 business hours</strong>.
              </p>
              <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-3">
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-slate-900 text-white font-mono text-xs font-semibold hover:bg-slate-800 transition-colors"
                >
                  Close Window
                </button>
                <button
                  onClick={handleWhatsAppSubmit}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-whatsapp-green text-white font-mono text-xs font-semibold flex items-center justify-center space-x-1.5 hover:bg-emerald-600 transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-white text-white" />
                  <span>Send on WhatsApp</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-600 font-bold mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-base sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-600 font-bold mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98110 84530"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-base sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-600 font-bold mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-base sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-600 font-bold mb-1">
                    Destination Country
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-base sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-colors"
                  >
                    {DESTINATION_COUNTRIES.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name} ({c.code})
                      </option>
                    ))}
                    <option value="Other Country">Other Global Destination</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-600 font-bold mb-1">
                  Required Service
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-base sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-colors"
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-600 font-bold mb-1">
                  Message / Case Details
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Mention visa category (employment, family, visitor), current status, or trade details..."
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-200 bg-slate-50 text-base sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white resize-none transition-colors"
                />
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row gap-1 sm:items-center sm:justify-between text-[11px] text-slate-500 font-mono py-1 border-t border-slate-200">
                <div className="flex items-center space-x-1">
                  <Shield className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Confidential Embassy Audited</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>24-Hour Guaranteed Turnaround</span>
                </div>
              </div>

              {/* Dual Submission CTAs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 active:scale-[0.99] text-white rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-sm"
                >
                  <Send className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Submit Inquiry Form</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="w-full py-3 px-4 bg-whatsapp-green hover:bg-emerald-600 active:scale-[0.99] text-white rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white text-white shrink-0" />
                  <span>Instant WhatsApp Direct</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
