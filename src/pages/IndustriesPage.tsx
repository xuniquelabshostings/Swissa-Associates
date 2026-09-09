import React from 'react';
import { CheckCircle2, ArrowRight, Building2, Factory } from 'lucide-react';
import { INDUSTRIES_DATA, COMPANY_DETAILS } from '../data/siteData';
import { TicketCard } from '../components/common/TicketCard';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { AnimatedImage } from '../components/common/AnimatedImage';

interface IndustriesPageProps {
  onNavigate: (path: string) => void;
  onOpenEnquiry: (serviceSlug?: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      
      {/* Editorial Header */}
      <section className="bg-gradient-to-b from-slate-100 via-slate-50 to-white text-slate-900 py-16 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold block mb-2">
              SECTOR RECRUITMENT & SOURCING
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-display text-slate-900 mb-6">
              Industries We Power Across the Middle East & Beyond.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              With an accredited pan-India network of 200+ partner agents and technical trade testing workshops, Swisa Associates provides certified skilled, semi-skilled, and executive manpower for 13 critical industrial sectors.
            </p>
          </div>
        </div>
      </section>

      {/* 13 Industry Divisions Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES_DATA.map((ind, idx) => (
            <div
              key={ind.id}
              className={`bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-amber-500 transition-all flex flex-col justify-between group overflow-hidden hover-lift card-shine reveal-on-scroll stagger-${(idx % 6) + 1}`}
            >
              <div>
                {/* Clean Card Image Banner */}
                <div className="h-48 w-full overflow-hidden relative border-b border-slate-100 bg-slate-100">
                  <AnimatedImage
                    src={ind.imageUrl}
                    fallbackSrc="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80"
                    alt={ind.name}
                    wrapperClassName="w-full h-full"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-amber-700 font-bold uppercase tracking-wider">
                      [{ind.code}]
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 truncate max-w-[200px]">
                      {ind.shortTag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-amber-700 transition-colors mb-3">
                    {ind.name}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {ind.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100">
                    <div className="text-[10px] font-mono text-amber-700 font-bold uppercase mb-2">
                      Key Roles Supplied:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.rolesSupplied.map((role, rIdx) => (
                        <span
                          key={rIdx}
                          className="px-2.5 py-1 rounded-md bg-slate-50 text-[11px] font-mono text-slate-800 border border-slate-200"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => onOpenEnquiry(`Manpower Recruitment - ${ind.name}`)}
                  className="w-full py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-sm hover-lift"
                >
                  <span>Source {ind.name.split(' ')[0]} Talent</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Turnkey Recruitment Process for Employers */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold">
                ENTERPRISE WORKFORCE SOURCING
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                Are You Sourcing Technical Crews for an Overseas Project?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We handle employer job order registrations, client delegation interview setups in Delhi, certified trade testing, GAMCA medical clearance, and Protector of Emigrants (POE) flight mobilization.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => onOpenEnquiry('Enterprise Manpower Request')}
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-colors text-center shadow-sm"
              >
                Submit Demand Letter
              </button>
              <a
                href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hello Swisa Associates, we are an employer looking to source skilled manpower.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors text-center shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
                <span>Corporate Recruitment Desk</span>
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
