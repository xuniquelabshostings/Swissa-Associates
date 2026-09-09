import React from 'react';
import { ShieldCheck, Building2, Award, Users, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/siteData';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { AnimatedImage } from '../components/common/AnimatedImage';

interface OurClientsPageProps {
  onNavigate: (path: string) => void;
  onOpenEnquiry: (serviceSlug?: string) => void;
}

// Dynamically load all 22 client logo images from src/assets/clients
const clientModules: Record<string, { default: string }> = (import.meta as any).glob('../assets/clients/*.{png,jpg,jpeg,webp}', { eager: true });
const clientLogos: string[] = Object.values(clientModules).map((m) => m.default);

export const OurClientsPage: React.FC<OurClientsPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const corporateSectors = [
    {
      title: 'Tier-1 GCC Infrastructure Contractors',
      scope: 'Over 4,500+ civil, MEP, and structural steel tradesmen deployed to projects across Riyadh, Dammam, Kuwait City, and Doha.',
      metrics: '350+ Work Orders Fulfilled',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=800&auto=format&fit=crop&q=80',
    },
    {
      title: 'Oil & Gas Upstream & Refinery Operators',
      scope: 'Certified 6G TIG/ARC pipe welders, hydro-jetters, rigging supervisors, and safety (HSE) officers deployed for refinery turnarounds.',
      metrics: 'Zero-Safety Incident Track Record',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80',
    },
    {
      title: 'Commercial Facility Management Groups',
      scope: 'Turnkey staffing for high-tonnage HVAC maintenance, electrical distribution systems, and hospital facility operations.',
      metrics: '12+ Years Long-Term Retention',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80',
    },
    {
      title: 'Global Healthcare & Hospital Networks',
      scope: 'Recruitment of MOH-registered nurses, laboratory technicians, and pharmaceutical specialists with Dataflow primary source verification.',
      metrics: '100% Credential Authenticity',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-cloud">
      
      {/* Editorial Header */}
      <section className="bg-sky-ink text-cloud py-16 sm:py-20 border-b border-brass/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl reveal-on-scroll">
            <span className="text-xs font-mono uppercase tracking-widest text-brass font-bold block mb-2">
              CLIENTS & TRUST CORRIDORS
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-display text-cloud mb-6">
              Trusted by 1,500+ Individuals & Global Contractors.
            </h1>
            <p className="text-base sm:text-lg text-cloud/80 leading-relaxed">
              Over the last 12 years, Swisa Associates has completed 990+ projects, delivering consular visa stamping for individual families and mobilizing turnkey workforces for renowned industrial contractors.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CLIENT LOGOS HORIZONTAL MARQUEE SECTION */}
      {/* ========================================================================= */}
      <section className="py-14 bg-white border-b border-brass/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center reveal-on-scroll">
          <span className="text-xs font-mono uppercase tracking-widest text-brass font-bold block mb-1">
            VERIFIED CORPORATE PORTFOLIO
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-ink">
            Our Esteemed Clients & Recruitment Partners
          </h2>
          <p className="text-xs sm:text-sm text-ink-soft mt-1">
            Serving leading EPC contractors, oilfield operators, and facility management conglomerates across the Middle East.
          </p>
        </div>

        {/* Infinite Running Marquee Track */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient Edge Masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          <div className="flex overflow-hidden py-4">
            <div className="animate-marquee flex items-center space-x-6 shrink-0">
              {clientLogos.concat(clientLogos).concat(clientLogos).map((src, i) => (
                <div
                  key={i}
                  className="w-40 sm:w-48 h-24 sm:h-28 bg-cloud/70 rounded-2xl border border-brass/25 shadow-sm p-4 flex items-center justify-center hover-lift transition-all shrink-0 hover:border-brass hover:bg-white"
                >
                  <img
                    src={src}
                    alt={`Swisa Associates client partner ${i + 1}`}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain filter contrast-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {corporateSectors.map((sector, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-8 border border-brass/30 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group overflow-hidden hover-lift card-shine reveal-on-scroll stagger-${idx + 1}`}
            >
              <div>
                <div className="h-52 -mx-8 -mt-8 mb-6 overflow-hidden relative border-b border-brass/20 bg-sky-ink-deep">
                  <AnimatedImage
                    src={sector.image}
                    fallbackSrc="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=800&auto=format&fit=crop&q=80"
                    alt={sector.title}
                    wrapperClassName="w-full h-full"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-ink-deep/85 via-transparent to-transparent z-10 pointer-events-none" />
                  <div className="absolute top-3 left-4 bg-sky-ink-deep/90 backdrop-blur-md px-3 py-1 rounded text-[10px] font-mono text-brass font-bold uppercase border border-brass/30 z-20">
                    DEPLOYMENT PROGRAM 0{idx + 1}
                  </div>
                  <div className="absolute bottom-3 right-4 bg-brass text-sky-ink-deep px-3 py-1 rounded text-[11px] font-mono font-bold shadow-md z-20">
                    {sector.metrics}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-ink mb-3 group-hover:text-brass transition-colors">
                  {sector.title}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  {sector.scope}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-dashed border-brass/20 flex items-center justify-between text-xs font-mono">
                <span className="text-ink-soft">Consular Certified</span>
                <span className="text-brass font-bold">Verified Reference</span>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Trust Protocol */}
        <div className="bg-sky-ink-deep text-cloud rounded-2xl border border-brass/40 p-8 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 reveal-on-scroll hover-lift card-shine">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase text-brass font-bold">
              CORPORATE PARTNERSHIP
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-cloud">
              Looking for a Reliable Consular & Recruitment Partner in India?
            </h3>
            <p className="text-sm text-cloud/75 max-w-2xl leading-relaxed">
              We provide enterprise procurement managers and HR executives with dedicated service-level agreements, transparent compliance reporting, and guaranteed candidate replacements.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onOpenEnquiry('Corporate Client Partnership')}
              className="px-6 py-3.5 bg-brass hover:bg-brass-soft text-sky-ink font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-brass-sm hover-lift"
            >
              Request Corporate Profile
            </button>
            <a
              href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hello Swisa Associates, we would like to discuss corporate consular partnership.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-whatsapp-green hover:bg-emerald-600 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center space-x-2 hover-lift"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
              <span>WhatsApp Director</span>
            </a>
          </div>
        </div>

      </section>

    </div>
  );
};

