import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Plane, 
  CheckCircle2, 
  Users, 
  Globe2, 
  Clock, 
  Award, 
  FileText, 
  ChevronRight,
  Send,
  Building2,
  Sparkles
} from 'lucide-react';
import { MainScrollCanvas } from '../components/3d/MainScrollCanvas';
import { TicketCard } from '../components/common/TicketCard';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { 
  COMPANY_DETAILS, 
  TRUST_STATS, 
  VISA_TYPES, 
  FOUR_STEPS, 
  SERVICES_DATA, 
  INDUSTRIES_DATA, 
  DESTINATION_COUNTRIES, 
  FAQ_DATA
} from '../data/siteData';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenEnquiry: (serviceSlug?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [selectedCountry, setSelectedCountry] = useState<string>('saudi-arabia');

  const activeCountryData = DESTINATION_COUNTRIES.find((c) => c.id === selectedCountry) || DESTINATION_COUNTRIES[0];

  return (
    <div className="relative">
      
      {/* ========================================================================= */}
      {/* SECTION 1: HERO "DEPARTURE" SCENE (Section 3.2) */}
      {/* ========================================================================= */}
      <section className="relative min-h-[92vh] sm:min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-100/70 text-slate-900 flex items-center pt-36 sm:pt-32 lg:pt-36 pb-16 overflow-hidden">
        
        {/* Full Interactive 3D WebGL Flight Canvas Background */}
        <MainScrollCanvas 
          selectedCountryId={selectedCountry}
          onSelectCountry={(cid) => setSelectedCountry(cid)}
        />

        {/* Content Container (Left 50% Asymmetric Split) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-none">
          <div className="max-w-2xl pointer-events-auto">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-100/95 sm:bg-amber-50 border border-amber-400 sm:border-amber-300 text-amber-950 sm:text-amber-800 text-xs font-mono font-bold uppercase tracking-wider mt-3 sm:mt-0 mb-6 shadow-sm backdrop-blur-sm sm:backdrop-blur-none">
              <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
              <span>EMBASSY ACCREDITED CONSULAR SERVICES</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold sm:font-bold font-display tracking-tight text-slate-950 sm:text-slate-900 leading-[1.12] mb-6 drop-shadow-sm sm:drop-shadow-none">
              Your Clear Corridor to the <span className="text-amber-700">Gulf & Beyond</span>.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-900 sm:text-slate-700 font-medium sm:font-normal leading-relaxed mb-8 max-w-xl bg-white/85 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none p-3.5 sm:p-0 rounded-xl sm:rounded-none border border-slate-200/80 sm:border-none shadow-sm sm:shadow-none">
              Accredited consular visa stamping for <strong className="text-black sm:text-slate-900 font-bold sm:font-semibold">Saudi Arabia & Kuwait</strong>, pan-India industrial manpower deployment, MEA document attestation, and seamless international travel. 12+ years of diplomatic precision from New Delhi.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-10">
              <button
                onClick={() => onOpenEnquiry()}
                className="px-7 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-mono font-bold text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 group"
              >
                <span>Free Visa Enquiry</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hello Swisa Associates, I would like to begin a visa inquiry.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 font-mono font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center space-x-2.5 backdrop-blur-md shadow-sm hover:border-slate-400"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                <span className="text-emerald-700 font-semibold">Chat on WhatsApp</span>
              </a>
            </div>

            {/* Hero Quick Trust Markers */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-slate-300 sm:border-slate-200 max-w-lg font-mono text-xs text-slate-900 sm:text-slate-600 bg-white/80 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none p-3 sm:p-0 rounded-xl sm:rounded-none border border-slate-200/80 sm:border-none shadow-sm sm:shadow-none">
              <div>
                <div className="text-amber-800 sm:text-amber-700 font-bold text-sm">100% MOFA</div>
                <div className="text-[11px] text-slate-900 sm:text-slate-600 font-semibold sm:font-normal">Enjaz Authorized</div>
              </div>
              <div>
                <div className="text-amber-800 sm:text-amber-700 font-bold text-sm">3–5 Days</div>
                <div className="text-[11px] text-slate-900 sm:text-slate-600 font-semibold sm:font-normal">Express Stamping</div>
              </div>
              <div>
                <div className="text-amber-800 sm:text-amber-700 font-bold text-sm">24 Hours</div>
                <div className="text-[11px] text-slate-900 sm:text-slate-600 font-semibold sm:font-normal">Response SLA</div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none opacity-70">
          <span className="text-[10px] font-mono text-amber-700 uppercase tracking-widest mb-1">Scroll Route</span>
          <div className="w-5 h-8 rounded-full border-2 border-amber-600/40 flex items-start justify-center p-1">
            <div className="w-1.5 h-2.5 bg-amber-600 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: TRUST STATS BAR (Boarding-Pass Stub Strip) */}
      {/* ========================================================================= */}
      <section className="bg-white border-y border-slate-200 py-6 relative z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200 reveal-on-scroll">
            {TRUST_STATS.map((stat, i) => (
              <div key={i} className={`pt-3 md:pt-0 md:px-4 text-center first:pl-0 last:pr-0 reveal-scale stagger-${i + 1}`}>
                <span className="text-[10px] font-mono text-amber-700/80 uppercase tracking-widest block mb-1">
                  [{stat.code}]
                </span>
                <div className="font-mono text-2xl sm:text-3xl font-bold text-amber-700 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-600 font-medium mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: CHOOSE YOUR VISA TYPE (8 Ticket-Stub Grid) */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-cloud">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 reveal-on-scroll">
            <span className="text-xs font-mono uppercase tracking-widest text-brass font-bold block mb-2">
              HOW WE HELP CLIENTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-ink leading-tight mb-4">
              Choose Your Immigration & Visa Category
            </h2>
            <p className="text-ink-soft text-base leading-relaxed">
              We guide applicants through government regulations, sponsor invitations, medical fitness verifications, and consular interviews with zero guesswork.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VISA_TYPES.map((vt, idx) => (
              <div key={vt.id} className={`reveal-on-scroll stagger-${(idx % 4) + 1}`}>
                <TicketCard
                  codeTag={vt.code}
                  subtitle="Consular Track"
                  title={vt.title}
                  actionText="Enquire Now"
                  onAction={() => onOpenEnquiry(vt.title)}
                >
                  <p className="min-h-[48px]">{vt.desc}</p>
                </TicketCard>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: WELCOME TO SWISA ASSOCIATES & 12+ YEARS HERITAGE */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-y border-brass/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 reveal-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-brass/10 border border-brass/30 text-brass text-xs font-mono font-bold uppercase tracking-wider">
                WE MAKE A DIFFERENCE
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-display text-ink leading-tight">
                Welcome to Swisa Associates
              </h2>

              <p className="text-base text-ink-soft leading-relaxed">
                Swisa Associates is a leading human resources consultancy and diplomatic visa service provider headquartered in New Delhi. With over <strong className="text-ink font-semibold">12 years of specialized recruitment and visa stamping experience</strong>, we work closely with multinational contractors and individual applicants across India.
              </p>

              <p className="text-base text-ink-soft leading-relaxed">
                By leveraging our extensive pan-India network of <strong className="text-ink font-semibold">200+ authorized partner agents</strong>, state-of-the-art trade testing workshops, and direct embassy liaison desks, we eliminate bureaucratic bottlenecks and deliver rapid, compliant results.
              </p>

              {/* Differentiator Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover-lift shadow-sm">
                  <div className="text-amber-700 font-mono text-sm font-bold mb-1">✓ 12+ Years Embassy Protocols</div>
                  <p className="text-xs text-slate-600">Direct lodgement at Royal Embassy of Saudi Arabia & Embassy of Kuwait.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover-lift shadow-sm">
                  <div className="text-amber-700 font-mono text-sm font-bold mb-1">✓ 200+ Pan-India Agent Network</div>
                  <p className="text-xs text-slate-600">Candidate sourcing across Punjab, UP, Bihar, Rajasthan, and Kerala.</p>
                </div>
              </div>

              <div className="pt-2 flex items-center space-x-4">
                <button
                  onClick={() => onNavigate('/about')}
                  className="px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono font-bold uppercase tracking-wider transition-all hover-lift shadow-sm"
                >
                  Explore Company Story
                </button>
                <button
                  onClick={() => onOpenEnquiry()}
                  className="text-xs font-mono font-bold text-amber-700 hover:underline"
                >
                  Meet Our Consultants →
                </button>
              </div>

            </div>

            {/* Visual Boarding Pass Card */}
            <div className="lg:col-span-5 reveal-right">
              <div className="bg-slate-900 text-white p-8 rounded-2xl border border-slate-800 shadow-xl relative hover-lift">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <div>
                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">EMBASSY ACCREDITED</span>
                    <span className="font-display font-bold text-lg text-white">Swisa Associates Hub</span>
                  </div>
                  <Plane className="w-6 h-6 text-amber-400 -rotate-45" />
                </div>

                <div className="space-y-4 font-mono text-xs">
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-400">ESTABLISHED</span>
                    <span className="text-slate-100 font-semibold">2012 (12+ Years)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-400">HEADQUARTERS</span>
                    <span className="text-slate-100 font-semibold">New Friends Colony, New Delhi</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-400">CONSULAR SCOPE</span>
                    <span className="text-slate-100 font-semibold">GCC / UK / EU / Canada / Australia</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-400">RESPONSE COMMITMENT</span>
                    <span className="text-amber-400 font-bold">24 Hours Guaranteed</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-dashed border-slate-800 text-center">
                  <a
                    href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-emerald-400 font-mono text-xs font-bold hover:underline"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                    <span>Speak with Managing Director on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: IMMIGRATION SERVICES FROM EXPERIENCED AGENTS (4 Distinct Blurbs) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 reveal-on-scroll">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold block mb-2">
              CHOOSE YOUR VISA
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 leading-tight mb-4">
              Immigration Services from Experienced Agents
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Every travel intent requires distinct legal documentation, financial proofs, and embassy verification. Here is how our certified consultants assist you:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-amber-500 transition-all flex flex-col justify-between hover-lift card-shine reveal-on-scroll stagger-1">
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center font-mono font-bold mb-4">
                  01
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2">Job & Employment Visa</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Grants authorization to accept contracted employment abroad. We handle sponsor Wakala validation, labor ministry approvals, trade certifications, and biometric submissions.
                </p>
              </div>
              <button
                onClick={() => onNavigate('/services/saudi-visa-stamping')}
                className="mt-6 text-xs font-mono font-bold text-amber-700 hover:underline flex items-center space-x-1"
              >
                <span>View Stamping Protocols</span>
                <span>→</span>
              </button>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-amber-500 transition-all flex flex-col justify-between hover-lift card-shine reveal-on-scroll stagger-2">
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center font-mono font-bold mb-4">
                  02
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2">Business & Investor Visa</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Engineered for entrepreneurs, delegates, and corporate executives attending bilateral meetings, signing contracts, or establishing foreign enterprise subsidiaries.
                </p>
              </div>
              <button
                onClick={() => onNavigate('/services/visa-stamping-services')}
                className="mt-6 text-xs font-mono font-bold text-amber-700 hover:underline flex items-center space-x-1"
              >
                <span>Commercial Guidelines</span>
                <span>→</span>
              </button>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-amber-500 transition-all flex flex-col justify-between hover-lift card-shine reveal-on-scroll stagger-3">
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center font-mono font-bold mb-4">
                  03
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2">Student & Academic Visa</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Tailored for students entering accredited international colleges and universities. Includes CAS/I-20 audits, financial statement verification, and mock interview training.
                </p>
              </div>
              <button
                onClick={() => onNavigate('/services/immigration-services')}
                className="mt-6 text-xs font-mono font-bold text-amber-700 hover:underline flex items-center space-x-1"
              >
                <span>University Guidance</span>
                <span>→</span>
              </button>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-amber-500 transition-all flex flex-col justify-between hover-lift card-shine reveal-on-scroll stagger-4">
              <div>
                <div className="w-10 h-10 rounded-lg bg-amber-600 text-white flex items-center justify-center font-mono font-bold mb-4">
                  04
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2">Free Visa Assessment</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Submit your passport details and case history for a zero-cost review by our consular officers. We calculate your approval probability and provide an honest document roadmap.
                </p>
              </div>
              <button
                onClick={() => onOpenEnquiry()}
                className="mt-6 text-xs font-mono font-bold text-amber-700 hover:underline flex items-center space-x-1"
              >
                <span>Request Assessment</span>
                <span>→</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: CHOOSE YOUR COUNTRY (Section 3.3 Interactive 3D Map Corridor) */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-slate-100/70 border-y border-slate-200 text-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 reveal-on-scroll">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold block mb-2">
                WHO WE ARE · GLOBAL CONSULAR CORRIDORS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 leading-tight">
                Immigration & Citizenship: Choose Your Country
              </h2>
            </div>
            <div className="text-xs font-mono text-slate-500 mt-3 md:mt-0">
              * Select a destination to inspect consular prerequisites
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Country Selector Tabs (5 cols) */}
            <div className="lg:col-span-5 space-y-2 max-h-[500px] overflow-y-auto pr-2 reveal-left">
              {DESTINATION_COUNTRIES.map((country) => {
                const isSelected = country.id === selectedCountry;
                return (
                  <button
                    key={country.id}
                    onClick={() => setSelectedCountry(country.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all border flex items-center justify-between group ${
                      isSelected
                        ? 'bg-slate-900 border-slate-900 text-white shadow-md scale-[1.02]'
                        : 'bg-white border-slate-200 hover:border-amber-400 text-slate-700 hover:translate-x-1 shadow-sm'
                    }`}
                  >
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className={`text-[11px] font-mono px-1.5 py-0.5 rounded ${
                          isSelected ? 'bg-amber-400 text-slate-900 font-bold' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {country.flightCode}
                        </span>
                        <span className="font-display font-semibold text-sm sm:text-base">
                          {country.name}
                        </span>
                      </div>
                      <span className={`text-[11px] font-mono mt-1 block ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                        Processing: {country.processingDays}
                      </span>
                    </div>

                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-amber-400 translate-x-1' : 'text-slate-400 group-hover:text-amber-600'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Active Country Dossier Card (7 cols) */}
            <div className="lg:col-span-7 reveal-right">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xl relative overflow-hidden">
                
                {activeCountryData.imageUrl && (
                  <div className="h-48 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 overflow-hidden relative border-b border-slate-200">
                    <img
                      src={activeCountryData.imageUrl}
                      alt={activeCountryData.name}
                      key={activeCountryData.id}
                      loading="lazy"
                      className="w-full h-full object-cover animate-fade-in"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
                    <div className="absolute top-4 left-4 bg-slate-900/90 text-amber-400 backdrop-blur-md px-3 py-1 rounded text-xs font-mono font-bold uppercase shadow-sm">
                      DEL ➔ {activeCountryData.flightCode}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4 mb-6">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-amber-700 font-bold block">
                      INTERNATIONAL CORRIDOR
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mt-0.5">
                      {activeCountryData.name}
                    </h3>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs font-mono font-bold">
                    {activeCountryData.processingDays}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {activeCountryData.summary}
                </p>

                {/* Popular Visas */}
                <div className="mb-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-amber-700 font-bold mb-2">
                    Popular Visa Categories:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeCountryData.popularVisas.map((visa, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 font-mono font-medium"
                      >
                        {visa}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mandatory Pre-requisites */}
                <div className="mb-8">
                  <div className="text-xs font-mono uppercase tracking-wider text-amber-700 font-bold mb-2">
                    Mandatory Consular Checkpoints:
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 font-mono">
                    {activeCountryData.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 pt-4 border-t border-slate-200">
                  <button
                    onClick={() => onOpenEnquiry(activeCountryData.name)}
                    className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                  >
                    Start {activeCountryData.name} Application
                  </button>
                  <a
                    href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(`Hello Swisa Associates, I would like to inquire about visa stamping for ${activeCountryData.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-700 font-mono font-bold text-xs uppercase tracking-wider hover:bg-emerald-600 hover:text-white transition-colors flex items-center justify-center space-x-2"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp Visa Desk</span>
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: VISA CATEGORIES WE HANDLE (01 - 04 Sequential List) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 reveal-on-scroll">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold block mb-2">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 leading-tight mb-4">
              We Create High Value for Core Visa Categories
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Our consular processing workflow covers every stage of official diplomatic authorization:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'Employment Work Visa',
                desc: 'Authorizes foreign nationals to engage in contractual work for a designated sponsor. We manage MOFA registration, Wakala verification, and GAMCA clearance.',
              },
              {
                num: '02',
                title: 'Diplomatic & Official Visa',
                desc: 'Expedited consular endorsements for government delegates, embassy personnel, and inter-governmental missions traveling on diplomatic credentials.',
              },
              {
                num: '03',
                title: 'Family & Dependent Visa',
                desc: 'Allows working residents to bring spouses and children abroad. Includes marriage/birth certificate MEA attestation and sponsor salary verification.',
              },
              {
                num: '04',
                title: 'Visit & Commercial Visa',
                desc: 'Electronic and physical consular visas enabling temporary stays for business negotiations, trade conferences, or personal family visits.',
              },
            ].map((cat, idx) => (
              <div 
                key={cat.num}
                className={`bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-amber-500 transition-all flex flex-col justify-between hover-lift card-shine reveal-on-scroll stagger-${idx + 1}`}
              >
                <div>
                  <div className="font-mono text-3xl font-bold text-amber-700 mb-3">
                    {cat.num}
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-dashed border-slate-200 text-xs font-mono text-amber-700 font-semibold">
                  Accredited Protocol
                </div>
              </div>
            ))}
          </div>

          {/* Air Ticketing Callout Banner */}
          <div className="mt-12 bg-slate-900 text-white p-8 rounded-2xl border border-slate-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 reveal-on-scroll hover-lift">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 text-amber-400 font-mono text-xs font-bold uppercase">
                <Plane className="w-4 h-4 animate-bounce-subtle" />
                <span>Dedicated Corporate Travel Desk</span>
              </div>
              <h3 className="text-2xl font-bold font-display text-white">
                Air Ticketing Services & Mass Workforce Deployment Flights
              </h3>
              <p className="text-sm text-slate-300 max-w-2xl">
                Catering to corporate project mobilization and personal flights. Special migrant baggage allowances (30–40kg) on Saudia, Kuwait Airways, Emirates, and Gulf Air.
              </p>
            </div>
            <div className="shrink-0 flex items-center space-x-3">
              <button
                onClick={() => onNavigate('/services/air-ticketing')}
                className="px-6 py-3 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all hover-lift shadow-sm"
              >
                View Ticketing Services
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: 4 STEPS TO YOUR VISA (3D Waypoint Sequence) */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold block mb-2">
              STREAMLINED DEPARTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 leading-tight mb-4">
              Your Visa Sorted in Just 4 Simple Steps
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We replace bureaucratic confusion with clear, sequential milestones from initial submission to final stamped passport handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {FOUR_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className={`relative bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-between group hover:border-amber-500 transition-all shadow-sm hover-lift card-shine reveal-on-scroll stagger-${idx + 1}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-3">
                    <span className="w-10 h-10 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center font-mono font-bold text-base shadow-sm group-hover:scale-110 transition-transform">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">
                      Checkpoint {idx + 1}/4
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-dashed border-slate-200 text-[11px] font-mono text-amber-700 font-medium">
                  {step.detail}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center reveal-on-scroll">
            <button
              onClick={() => onOpenEnquiry()}
              className="px-8 py-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-mono font-bold text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover-lift"
            >
              Initiate Step 01: Complete Online Assessment
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: SERVICES OVERVIEW GRID (All 9 Services) */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 reveal-on-scroll">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold block mb-2">
                OUR CORE SERVICES
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 leading-tight">
                Specialized Services Across Global Sectors
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/services')}
              className="mt-4 md:mt-0 text-xs font-mono font-bold text-amber-700 hover:underline flex items-center space-x-1"
            >
              <span>View Complete Services Portfolio</span>
              <span>→</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((srv, idx) => (
              <div
                key={srv.slug}
                className={`bg-white rounded-2xl p-6 border border-slate-200 hover:border-amber-500 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group hover-lift card-shine reveal-on-scroll stagger-${(idx % 6) + 1}`}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                    <span className="text-xs font-mono text-amber-700 uppercase font-bold">
                      {srv.slug.replace('-', ' ').toUpperCase()}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      {srv.departmentEmail}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-amber-700 transition-colors mb-2">
                    {srv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {srv.shortDesc}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-6 text-xs text-slate-600 font-mono">
                    {srv.keyBenefits.slice(0, 2).map((b, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-dashed border-slate-200 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate(`/services/${srv.slug}`)}
                    className="text-xs font-mono font-bold text-slate-900 hover:text-amber-700 transition-colors flex items-center space-x-1"
                  >
                    <span>Read Full Brief</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>

                  <button
                    onClick={() => onOpenEnquiry(srv.title)}
                    className="text-xs font-mono text-amber-700 font-semibold hover:underline"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10: INDUSTRIES WE SERVE (13-Industry Grid) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 reveal-on-scroll">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold block mb-2">
                WORKFORCE RECRUITMENT
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 leading-tight">
                Industries We Serve
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/industries')}
              className="mt-4 md:mt-0 text-xs font-mono font-bold text-amber-700 hover:underline"
            >
              Browse 13 Industry Divisions →
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {INDUSTRIES_DATA.map((ind, idx) => (
              <button
                key={ind.id}
                onClick={() => onNavigate('/industries')}
                className={`text-left p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-amber-50/40 transition-all group hover-lift shadow-sm reveal-on-scroll stagger-${(idx % 8) + 1}`}
              >
                <span className="text-[10px] font-mono text-amber-700 font-bold uppercase block mb-1">
                  [{ind.code}]
                </span>
                <h3 className="font-display font-semibold text-sm text-slate-900 group-hover:text-amber-700 transition-colors">
                  {ind.name}
                </h3>
                <p className="text-[11px] text-slate-500 line-clamp-2 mt-1">
                  {ind.shortTag}
                </p>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 12: FAQ PREVIEW & IMMEDIATE CONTACT BANNER */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-100/70 border-t border-slate-200 text-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6 reveal-left">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold block">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 leading-tight">
                Clear Answers to Vital Visa Inquiries
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Whether you need clarity on Saudi Wakala authorization, GAMCA medical center allocations, or Kuwait PCC legalization, our officers provide transparent advice.
              </p>

              <div className="space-y-4">
                {FAQ_DATA.slice(0, 3).map((faq, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover-lift transition-all">
                    <h3 className="font-display font-semibold text-sm text-amber-800 mb-1.5">
                      Q: {faq.q}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>

              <div>
                <button
                  onClick={() => onNavigate('/faq')}
                  className="text-xs font-mono font-bold text-amber-700 hover:underline flex items-center space-x-1"
                >
                  <span>Read All Visa & Attestation FAQs</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Fast Action Card */}
            <div className="lg:col-span-6 reveal-right">
              <div className="bg-white text-slate-900 p-8 rounded-2xl border border-slate-200 shadow-xl hover-lift card-shine">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-6">
                  <div>
                    <span className="text-[10px] font-mono text-amber-700 font-bold uppercase">FAST TRACK</span>
                    <h3 className="font-display font-bold text-xl text-slate-900">
                      Ready to Start Your Journey?
                    </h3>
                  </div>
                  <Plane className="w-5 h-5 text-amber-600 -rotate-45 animate-bounce-subtle" />
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Call our New Delhi consular desk or message us directly on WhatsApp. We answer all inquiries within <strong>24 business hours</strong>.
                </p>

                <div className="space-y-3 font-mono text-xs mb-6">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200 hover-lift transition-all">
                    <span className="text-slate-500">Primary Phone:</span>
                    <a href={`tel:${COMPANY_DETAILS.phonePrimary.replace(/\s+/g, '')}`} className="font-bold text-slate-900 hover:text-amber-700">
                      {COMPANY_DETAILS.phonePrimary}
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200 hover-lift transition-all">
                    <span className="text-slate-500">Desk Landline:</span>
                    <a href={`tel:${COMPANY_DETAILS.phoneSecondary.replace(/\s+/g, '')}`} className="font-bold text-slate-900 hover:text-amber-700">
                      {COMPANY_DETAILS.phoneSecondary}
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200 hover-lift transition-all">
                    <span className="text-slate-500">Office Location:</span>
                    <span className="text-slate-900 font-semibold">Bharat Nagar, New Delhi</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => onOpenEnquiry()}
                    className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-mono text-xs font-bold uppercase tracking-wider shadow-sm transition-all hover-lift"
                  >
                    Open Assessment
                  </button>

                  <a
                    href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hello Swisa Associates, I am ready to get started.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-mono text-xs font-bold uppercase tracking-wider shadow-sm transition-all hover-lift flex items-center justify-center space-x-1.5"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
