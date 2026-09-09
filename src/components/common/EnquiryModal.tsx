import React, { useState } from 'react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-sky-ink-deep/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-xl bg-cloud border border-brass/40 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header styled as Flight Pass Header */}
        <div className="bg-sky-ink px-6 py-4 text-cloud flex items-center justify-between border-b border-brass/30">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-auto bg-white rounded-md p-1 border border-brass/40 flex items-center justify-center shrink-0">
              <img src="/logo.png" alt="Swisa Logo" className="h-full w-auto object-contain max-w-[80px]" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-brass animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-brass font-bold">
                  Consular Assessment Desk
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold font-display mt-0.5">
                Free Visa & Immigration Assessment
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-cloud/70 hover:text-cloud hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold font-display text-sky-ink">
                Application Dossier Received
              </h4>
              <p className="text-sm text-ink-soft max-w-md mx-auto">
                Thank you, <strong className="text-ink">{name}</strong>. Our designated visa officer will review your requirements and respond within <strong>24 business hours</strong>.
              </p>
              <div className="pt-4 flex justify-center space-x-3">
                <button
                  onClick={onClose}
                  className="px-6 py-2 rounded-lg bg-sky-ink text-cloud font-mono text-xs font-semibold"
                >
                  Close Window
                </button>
                <button
                  onClick={handleWhatsAppSubmit}
                  className="px-6 py-2 rounded-lg bg-whatsapp-green text-white font-mono text-xs font-semibold flex items-center space-x-1.5"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-white text-white" />
                  <span>Send on WhatsApp</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-ink-soft font-bold mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-brass/30 bg-white text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brass"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-ink-soft font-bold mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98110 84530"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-brass/30 bg-white text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brass"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-ink-soft font-bold mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-brass/30 bg-white text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brass"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-ink-soft font-bold mb-1">
                    Destination Country
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-brass/30 bg-white text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brass"
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
                <label className="block text-xs font-mono uppercase text-ink-soft font-bold mb-1">
                  Required Service
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-brass/30 bg-white text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brass"
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-ink-soft font-bold mb-1">
                  Message / Case Details
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Mention visa category (employment, family, visitor), current status, or trade details..."
                  className="w-full px-3.5 py-2 rounded-lg border border-brass/30 bg-white text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brass resize-none"
                />
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-between text-[11px] text-ink-soft font-mono py-1 border-t border-brass/15">
                <div className="flex items-center space-x-1">
                  <Shield className="w-3.5 h-3.5 text-brass" />
                  <span>Confidential Embassy Audited</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-brass" />
                  <span>24-Hour Guaranteed Turnaround</span>
                </div>
              </div>

              {/* Dual Submission CTAs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-sky-ink hover:bg-sky-ink-deep text-cloud rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-md"
                >
                  <Send className="w-4 h-4 text-brass" />
                  <span>Submit Inquiry Form</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="w-full py-3 bg-whatsapp-green hover:bg-emerald-600 text-white rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-md"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
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
