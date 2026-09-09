import React from 'react';
import { Headphones, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/siteData';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';

export const SupportPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-cloud">
      
      {/* Header */}
      <section className="bg-sky-ink text-cloud py-16 sm:py-20 border-b border-brass/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl reveal-on-scroll">
            <span className="text-xs font-mono uppercase tracking-widest text-brass font-bold block mb-2">
              CLIENT SUPPORT & HELP DESK
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-display text-cloud mb-6">
              24-Hour Consular & Travel Support.
            </h1>
            <p className="text-base sm:text-lg text-cloud/80 leading-relaxed">
              Whether you need live tracking on your passport submission or emergency flight assistance, our dedicated support team is available via direct telephone, email, or WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Support Channels Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-white p-6 rounded-2xl border border-brass/30 shadow-sm flex flex-col justify-between hover-lift card-shine reveal-on-scroll stagger-1">
            <div>
              <div className="w-12 h-12 rounded-xl bg-whatsapp-green/15 text-whatsapp-green flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <WhatsAppIcon className="w-6 h-6 fill-current" />
              </div>
              <h3 className="font-display font-bold text-xl text-ink mb-2">
                WhatsApp Live Helpdesk
              </h3>
              <p className="text-xs sm:text-sm text-ink-soft leading-relaxed mb-4">
                Fastest response for passport tracking, biometric slot confirmations, and emergency travel date shifts.
              </p>
            </div>
            <a
              href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-whatsapp-green hover:bg-emerald-600 text-white font-mono text-xs font-bold uppercase rounded-lg text-center shadow-md transition-all hover-lift"
            >
              Open Live Chat
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-brass/30 shadow-sm flex flex-col justify-between hover-lift card-shine reveal-on-scroll stagger-2">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-ink text-brass flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 animate-bounce-subtle" />
              </div>
              <h3 className="font-display font-bold text-xl text-ink mb-2">
                Consular Telephony
              </h3>
              <p className="text-xs sm:text-sm text-ink-soft leading-relaxed mb-4">
                Speak directly with our senior operations desk during official business hours (Mon–Sat 09:30–19:00 IST).
              </p>
            </div>
            <div className="space-y-2">
              <a
                href={`tel:${COMPANY_DETAILS.phonePrimary.replace(/\s+/g, '')}`}
                className="w-full py-2 bg-sky-ink hover:bg-sky-ink-deep text-cloud font-mono text-xs font-bold uppercase rounded-lg text-center block transition-all hover-lift"
              >
                {COMPANY_DETAILS.phonePrimary}
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-brass/30 shadow-sm flex flex-col justify-between hover-lift card-shine reveal-on-scroll stagger-3">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brass/15 text-brass flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-ink mb-2">
                Email Ticketing
              </h3>
              <p className="text-xs sm:text-sm text-ink-soft leading-relaxed mb-4">
                Official written correspondence, formal receipts, Wakala authorizations, and corporate master contracts.
              </p>
            </div>
            <a
              href={`mailto:${COMPANY_DETAILS.emails.general}`}
              className="w-full py-2.5 bg-cloud border border-brass/30 text-sky-ink font-mono text-xs font-bold rounded-lg text-center block hover:bg-brass/10 transition-all hover-lift"
            >
              {COMPANY_DETAILS.emails.general}
            </a>
          </div>

        </div>

        {/* Operating Hours Note */}
        <div className="p-6 rounded-2xl bg-white border border-brass/25 flex items-center space-x-4 reveal-on-scroll hover-lift">
          <Clock className="w-6 h-6 text-brass shrink-0 animate-spin-slow" />
          <div className="text-xs sm:text-sm text-ink-soft">
            <strong className="text-ink font-semibold block">Official Working Hours:</strong>
            Monday to Saturday: 09:30 AM to 07:00 PM (Indian Standard Time). Inquiries received outside working hours are cued for immediate review on the next working morning.
          </div>
        </div>
      </section>

    </div>
  );
};
