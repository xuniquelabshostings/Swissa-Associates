import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Users, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Plane,
  ArrowRight
} from 'lucide-react';
import { COMPANY_DETAILS, TRUST_STATS } from '../data/siteData';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { AnimatedImage } from '../components/common/AnimatedImage';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onOpenEnquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <div className="pt-24 min-h-screen bg-cloud">
      
      {/* Editorial Header */}
      <section className="bg-sky-ink text-cloud py-16 sm:py-20 border-b border-brass/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl reveal-on-scroll">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brass/10 border border-brass/30 text-brass text-xs font-mono uppercase tracking-widest mb-4">
              ABOUT SWISA ASSOCIATES · ESTABLISHED 2012
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-cloud mb-6">
              A Decade of Diplomatic Integrity & Global Mobility.
            </h1>
            <p className="text-base sm:text-lg text-cloud/80 leading-relaxed">
              Founded in New Delhi, Swisa Associates has grown from a specialized Gulf visa consultancy into a recognized leader in international human resource management, embassy attestation, and overseas workforce deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="bg-sky-ink-deep border-b border-brass/30 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 divide-y md:divide-y-0 md:divide-x divide-brass/20 text-center reveal-on-scroll">
            {TRUST_STATS.map((stat, i) => (
              <div key={i} className="pt-3 md:pt-0 md:px-4 first:pl-0 last:pr-0">
                <span className="text-[10px] font-mono text-brass/70 block uppercase">[{stat.code}]</span>
                <div className="font-mono text-2xl font-bold text-brass">{stat.value}</div>
                <div className="text-xs text-cloud/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Narrative */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 reveal-left">
            <h2 className="text-3xl font-bold font-display text-ink leading-tight">
              Bridging Indian Excellence with Global Industrial Needs
            </h2>
            <p className="text-ink-soft leading-relaxed text-sm sm:text-base">
              With over 12 years of recruitment and consular experience, Swisa Associates provides customized manpower solutions to enterprise contractors across Saudi Arabia, Kuwait, the UAE, and the wider GCC region. We understand that finding the right talent requires both cultural sensitivity and technical precision.
            </p>
            <p className="text-ink-soft leading-relaxed text-sm sm:text-base">
              Our New Delhi headquarters serves as an operational bridge between foreign diplomatic missions, Indian state government secretariats, and technical trade test facilities across the country. Through our network of 200+ vetted regional agents, we source qualified candidates from premier industrial pockets across India.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-brass/30 shadow-sm hover-lift">
                <div className="font-bold text-sky-ink font-display text-base mb-1">
                  Diplomatic Consular Liaison
                </div>
                <p className="text-xs text-ink-soft">
                  Direct relationship with Saudi MOFA, Kuwait Embassy, and European consulates for zero-error visa submissions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-brass/30 shadow-sm hover-lift">
                <div className="font-bold text-sky-ink font-display text-base mb-1">
                  Pan-India Trade Testing
                </div>
                <p className="text-xs text-ink-soft">
                  Certified testing workshops for 6G welding, electrical, HVAC, and industrial fabrication.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 reveal-right">
            <div className="bg-sky-ink text-cloud p-8 rounded-2xl border border-brass/40 shadow-xl space-y-6 hover-lift card-shine">
              <div className="border-b border-brass/25 pb-4">
                <span className="text-xs font-mono text-brass uppercase font-bold">CORE VALUES</span>
                <h3 className="font-display font-bold text-2xl text-cloud mt-1">Our Operating Standards</h3>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-brass shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-cloud block text-sm">Transparency & Compliance</strong>
                    <span className="text-cloud/70">100% adherence to Ministry of External Affairs and destination country immigration laws.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-brass shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-cloud block text-sm">Rapid Turnaround</strong>
                    <span className="text-cloud/70">24-hour response guarantee on inquiries and 3–5 day express consular stamping.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-brass shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-cloud block text-sm">Document Integrity</strong>
                    <span className="text-cloud/70">Insured physical passport custody and rigorous fraud screening.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-brass/25">
                <button
                  onClick={onOpenEnquiry}
                  className="w-full py-3 bg-brass hover:bg-brass-soft text-sky-ink font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-all hover-lift"
                >
                  Consult Our Team
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Editorial Photography & Operational Reach */}
      <section className="py-16 bg-white border-y border-brass/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 reveal-on-scroll">
            <span className="text-xs font-mono uppercase tracking-widest text-brass font-bold block mb-2">
              ACCREDITED DEPLOYMENT PIPELINE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-ink">
              12+ Years of Verified Field Operations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden bg-cloud border border-brass/30 shadow-sm group hover-lift reveal-on-scroll stagger-1">
              <div className="h-52 overflow-hidden relative">
                <AnimatedImage
                  src="https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80"
                  fallbackSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80"
                  alt="Consular Document Verification"
                  wrapperClassName="w-full h-full"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-sky-ink-deep/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-brass font-bold uppercase z-20">
                  Embassy Operations
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-base text-ink mb-1">Direct Embassy Liaison</h3>
                <p className="text-xs text-ink-soft leading-relaxed">
                  Daily submissions at the Royal Embassy of Saudi Arabia and Kuwait Consular Mission in New Delhi.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-cloud border border-brass/30 shadow-sm group hover-lift reveal-on-scroll stagger-2">
              <div className="h-52 overflow-hidden relative">
                <AnimatedImage
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80"
                  fallbackSrc="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80"
                  alt="Technical Trade Workshop Assessment"
                  wrapperClassName="w-full h-full"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-sky-ink-deep/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-brass font-bold uppercase z-20">
                  Trade Testing
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-base text-ink mb-1">Practical Skill Evaluation</h3>
                <p className="text-xs text-ink-soft leading-relaxed">
                  Hands-on welding, electrical, HVAC, and mechanical benchmarking across certified Indian test workshops.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-cloud border border-brass/30 shadow-sm group hover-lift reveal-on-scroll stagger-3">
              <div className="h-52 overflow-hidden relative">
                <AnimatedImage
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=80"
                  fallbackSrc="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop&q=80"
                  alt="International Mobilization Flights"
                  wrapperClassName="w-full h-full"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-sky-ink-deep/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-brass font-bold uppercase z-20">
                  Global Deployment
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-base text-ink mb-1">Pre-Departure & Flights</h3>
                <p className="text-xs text-ink-soft leading-relaxed">
                  Coordinated travel ticketing, immigration clearance (POE), and employer arrival reception.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Closing CTA */}
      <section className="py-16 bg-sky-ink text-cloud text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl font-bold font-display">Speak Directly with Our Consular Consultants</h2>
          <p className="text-cloud/75 text-sm sm:text-base">
            Have questions regarding Saudi MOFA Wakala, Kuwait Police Clearance, or manpower quotas? We provide exact answers within 24 hours.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={onOpenEnquiry}
              className="px-6 py-3 rounded-lg bg-brass text-sky-ink font-mono font-bold text-xs uppercase tracking-wider shadow-md"
            >
              Start Visa Consultation
            </button>
            <a
              href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-whatsapp-green text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center space-x-2"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
