import React from 'react';
import { 
  CheckCircle2, 
  ArrowLeft, 
  Clock, 
  ShieldCheck, 
  FileText, 
  ChevronRight,
  Send,
  Plane
} from 'lucide-react';
import { ServiceMicroCanvas } from '../components/3d/ServiceMicroCanvas';
import { SERVICES_DATA, COMPANY_DETAILS, ServiceItem } from '../data/siteData';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenEnquiry: (serviceSlug?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenEnquiry,
}) => {
  const service = SERVICES_DATA.find((s) => s.slug === slug) || SERVICES_DATA[0];

  // Related 3 other services
  const relatedServices = SERVICES_DATA.filter((s) => s.slug !== service.slug).slice(0, 3);

  const whatsappInquiryUrl = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(`Hi, I'd like to know more about ${service.title} services.`)}`;

  return (
    <div className="pt-24 min-h-screen bg-cloud">
      
      {/* Header & 3D Micro-Moment Banner */}
      <section className="bg-sky-ink text-cloud py-12 sm:py-16 border-b border-brass/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <button
            onClick={() => onNavigate('/services')}
            className="inline-flex items-center space-x-1.5 text-brass font-mono text-xs font-semibold mb-6 hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Services</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brass/10 border border-brass/30 text-brass text-xs font-mono uppercase tracking-widest">
                ACCREDITED CONSULAR PROTOCOL
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold font-display text-cloud leading-tight">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-brass-soft font-mono font-medium">
                {service.heroTagline}
              </p>
              <p className="text-sm sm:text-base text-cloud/80 leading-relaxed max-w-2xl">
                {service.overview}
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => onOpenEnquiry(service.title)}
                  className="px-6 py-3 rounded-xl bg-brass hover:bg-brass-soft text-sky-ink font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-brass-sm"
                >
                  Start {service.title} Enquiry
                </button>

                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-whatsapp-green text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center space-x-2 transition-all shadow-md"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
                  <span>WhatsApp Specialist</span>
                </a>
              </div>
            </div>

            {/* Service 3D Micro-Scene (Passport Stamp / Runway / Workforce / Seal) */}
            <div className="lg:col-span-5">
              <ServiceMicroCanvas serviceId={service.id} />
            </div>

          </div>

        </div>
      </section>

      {/* Main Content & Process Steps */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Body (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Detailed Explanations */}
            <div className="space-y-8">
              {service.detailedSections.map((sec, i) => (
                <div key={i} className="bg-white p-6 sm:p-8 rounded-2xl border border-brass/25 shadow-sm">
                  <h2 className="text-2xl font-bold font-display text-ink mb-3">
                    {sec.heading}
                  </h2>
                  <p className="text-sm sm:text-base text-ink-soft leading-relaxed">
                    {sec.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Process Steps (Numbered Sequential List) */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-brass/25 shadow-sm">
              <div className="mb-6 border-b border-brass/20 pb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-brass font-bold block">
                  CLEAR WORKFLOW
                </span>
                <h3 className="text-2xl font-bold font-display text-ink mt-1">
                  Step-by-Step Processing Stages
                </h3>
              </div>

              <div className="space-y-4">
                {service.processSteps.map((step) => (
                  <div
                    key={step.step}
                    className="p-4 rounded-xl bg-cloud border border-brass/20 flex items-start space-x-4"
                  >
                    <span className="w-8 h-8 rounded-full bg-sky-ink text-brass flex items-center justify-center font-mono font-bold text-sm shrink-0 mt-0.5">
                      {step.step}
                    </span>
                    <div>
                      <h4 className="font-display font-bold text-base text-ink mb-1">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing WhatsApp Band (Section 4.6 of prompt) */}
            <div className="bg-sky-ink text-cloud p-8 rounded-2xl border-2 border-brass/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <div className="text-xs font-mono text-brass font-bold uppercase tracking-wider">
                  RAPID CONSULAR SUPPORT
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-cloud">
                  {service.title} questions?
                </h3>
                <p className="text-sm text-cloud/75">
                  Get a same-day answer directly from our consular desk on WhatsApp.
                </p>
              </div>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-6 py-3.5 bg-whatsapp-green hover:bg-emerald-500 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center space-x-2"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
                <span>Chat on WhatsApp Now</span>
              </a>
            </div>

          </div>

          {/* Right Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Service Photography Feature Card */}
            {service.imageUrl && (
              <div className="rounded-2xl overflow-hidden border border-brass/30 shadow-md bg-white">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-ink-deep/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-cloud">
                    <span className="text-[10px] font-mono text-brass font-bold uppercase tracking-wider block">
                      OFFICIAL OPERATION
                    </span>
                    <span className="font-display font-bold text-sm">
                      {service.title}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Key Benefits Card */}
            <div className="bg-white p-6 rounded-2xl border border-brass/30 shadow-sm">
              <div className="border-b border-brass/20 pb-3 mb-4">
                <span className="text-xs font-mono uppercase text-brass font-bold">
                  WHY CHOOSE SWISA
                </span>
                <h4 className="font-display font-bold text-lg text-ink">
                  Guaranteed Standards
                </h4>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-ink-soft">
                {service.keyBenefits.map((b, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-brass shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-dashed border-brass/20">
                <button
                  onClick={() => onOpenEnquiry(service.title)}
                  className="w-full py-3 bg-sky-ink hover:bg-sky-ink-deep text-cloud rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Start Assessment Form
                </button>
              </div>
            </div>

            {/* Department Liaison Box */}
            <div className="bg-sky-ink-deep text-cloud p-6 rounded-2xl border border-brass/30">
              <span className="text-[10px] font-mono uppercase text-brass font-bold block mb-1">
                ASSIGNED DEPARTMENT
              </span>
              <h4 className="font-display font-bold text-base text-cloud mb-3">
                Direct Consular Officers
              </h4>
              <div className="space-y-2 text-xs font-mono text-cloud/80">
                <div className="flex justify-between py-1 border-b border-white/10">
                  <span className="text-cloud/50">Desk Email:</span>
                  <span className="text-brass font-semibold">{service.departmentEmail}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/10">
                  <span className="text-cloud/50">Office Line:</span>
                  <span className="text-cloud">{COMPANY_DETAILS.phoneSecondary}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/10">
                  <span className="text-cloud/50">Turnaround:</span>
                  <span className="text-cloud">24 Hours SLA</span>
                </div>
              </div>
            </div>

            {/* Related Services Cross-Links (Section 5.3) */}
            <div className="bg-white p-6 rounded-2xl border border-brass/30 shadow-sm">
              <h4 className="font-display font-bold text-base text-ink mb-4 border-b border-brass/20 pb-2">
                Related Services
              </h4>
              <div className="space-y-3">
                {relatedServices.map((rel) => (
                  <button
                    key={rel.slug}
                    onClick={() => onNavigate(`/services/${rel.slug}`)}
                    className="w-full text-left p-3 rounded-lg bg-cloud hover:bg-brass/10 border border-brass/20 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-display font-semibold text-xs text-ink group-hover:text-brass">
                        {rel.title}
                      </div>
                      <div className="text-[10px] font-mono text-ink-soft line-clamp-1">
                        {rel.shortDesc}
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-brass shrink-0" />
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
