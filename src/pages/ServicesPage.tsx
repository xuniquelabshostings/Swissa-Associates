import React from 'react';
import { CheckCircle2, ChevronRight, Plane, ShieldCheck, ArrowRight } from 'lucide-react';
import { SERVICES_DATA, COMPANY_DETAILS } from '../data/siteData';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
  onOpenEnquiry: (serviceSlug?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-100 via-slate-50 to-white text-slate-900 py-16 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold block mb-2">
              DIPLOMATIC CONSULAR & MOBILITY SERVICES
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-display text-slate-900 mb-6">
              Authorized Visa Stamping, Recruitment & Global Travel.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Backed by over 12 years of diplomatic protocol knowledge in New Delhi, Swisa Associates delivers complete visa solutions, MEA document authentications, pan-India technical manpower sourcing, and corporate travel reservations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((srv, index) => (
            <div
              key={srv.slug}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-lg hover:border-amber-500 transition-all flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {srv.imageUrl && (
                  <div className="h-44 -mx-7 -mt-7 mb-5 overflow-hidden relative border-b border-slate-200">
                    <img
                      src={srv.imageUrl}
                      alt={srv.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 bg-slate-900/90 text-amber-400 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase shadow-sm">
                      SECTOR 0{index + 1}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
                  <span className="text-[11px] font-mono text-slate-500">
                    {srv.departmentEmail}
                  </span>
                  <span className="text-[10px] font-mono text-amber-700 font-semibold">
                    100% MEA COMPLIANT
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-amber-700 transition-colors mb-2">
                  {srv.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {srv.shortDesc}
                </p>

                {/* Key Benefits Preview */}
                <div className="space-y-2 mb-6 text-xs text-slate-600 font-mono">
                  {srv.keyBenefits.slice(0, 3).map((kb, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{kb}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-dashed border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => onNavigate(`/services/${srv.slug}`)}
                  className="text-xs font-mono font-bold text-slate-900 hover:text-amber-700 transition-colors flex items-center space-x-1"
                >
                  <span>Detailed Guidelines</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>

                <button
                  onClick={() => onOpenEnquiry(srv.title)}
                  className="px-3.5 py-1.5 rounded-lg bg-amber-600 text-white font-mono text-xs font-bold uppercase hover:bg-amber-700 transition-colors shadow-sm"
                >
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Support & WhatsApp Banner */}
      <section className="py-16 bg-slate-100 border-t border-slate-200 text-slate-900 text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">Need Immediate Consular Clarification?</h2>
          <p className="text-sm text-slate-600">
            Every visa file is unique. Reach out to our specialized visa officers on WhatsApp for instant guidance.
          </p>
          <div className="pt-2 flex justify-center space-x-4">
            <a
              href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hello Swisa Associates, I need help selecting the right visa service.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center space-x-2 shadow-sm transition-all hover-lift"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
