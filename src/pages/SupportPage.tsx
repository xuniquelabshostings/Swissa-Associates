import React from 'react';
import { Headphones, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/siteData';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';

export const SupportPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-100 via-slate-50 to-white text-slate-900 py-16 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl reveal-on-scroll">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs font-mono font-bold tracking-widest uppercase mb-4">
              CLIENT SUPPORT & HELP DESK
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-display text-slate-900 mb-6">
              24-Hour Consular & Travel Support.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Whether you need live tracking on your passport submission or emergency flight assistance, our dedicated support team is available via direct telephone, email, or WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Support Channels Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover-lift card-shine reveal-on-scroll stagger-1">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <WhatsAppIcon className="w-6 h-6 fill-current" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                WhatsApp Live Helpdesk
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
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

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover-lift card-shine reveal-on-scroll stagger-2">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 animate-bounce-subtle" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                Consular Telephony
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Speak directly with our senior operations desk during official business hours (Mon–Sat 09:30–19:00 IST).
              </p>
            </div>
            <div className="space-y-2">
              <a
                href={`tel:${COMPANY_DETAILS.phonePrimary.replace(/\s+/g, '')}`}
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-bold uppercase rounded-lg text-center block transition-all hover-lift"
              >
                {COMPANY_DETAILS.phonePrimary}
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover-lift card-shine reveal-on-scroll stagger-3">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                Email Ticketing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Official written correspondence, formal receipts, Wakala authorizations, and corporate master contracts.
              </p>
            </div>
            <a
              href={`mailto:${COMPANY_DETAILS.emails.general}`}
              className="w-full py-2.5 bg-slate-50 border border-slate-200 text-slate-900 font-mono text-xs font-bold rounded-lg text-center block hover:bg-slate-100 transition-all hover-lift"
            >
              {COMPANY_DETAILS.emails.general}
            </a>
          </div>

        </div>

        {/* Operating Hours Note */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 flex items-center space-x-4 reveal-on-scroll hover-lift shadow-sm">
          <Clock className="w-6 h-6 text-amber-600 shrink-0 animate-spin-slow" />
          <div className="text-xs sm:text-sm text-slate-600">
            <strong className="text-slate-900 font-semibold block">Official Working Hours:</strong>
            Monday to Saturday: 09:30 AM to 07:00 PM (Indian Standard Time). Inquiries received outside working hours are cued for immediate review on the next working morning.
          </div>
        </div>
      </section>

    </div>
  );
};
