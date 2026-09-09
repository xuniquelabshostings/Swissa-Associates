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
    <div className="pt-24 min-h-screen bg-slate-50">
      
      {/* Header & 3D Micro-Moment Banner */}
      <section className="bg-gradient-to-b from-slate-100 via-slate-50 to-white text-slate-900 py-12 sm:py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <button
            onClick={() => onNavigate('/services')}
            className="inline-flex items-center space-x-1.5 text-amber-700 font-mono text-xs font-semibold mb-6 hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Services</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
                ACCREDITED CONSULAR PROTOCOL
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold font-display text-slate-900 leading-tight">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-amber-700 font-mono font-medium">
                {service.heroTagline}
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                {service.overview}
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => onOpenEnquiry(service.title)}
                  className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow-md"
                >
                  Start {service.title} Enquiry
                </button>

                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center space-x-2 transition-all shadow-sm hover-lift"
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
                <div key={i} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                  <h2 className="text-2xl font-bold font-display text-slate-900 mb-3">
                    {sec.heading}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {sec.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Process Steps (Numbered Sequential List) */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="mb-6 border-b border-slate-100 pb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold block">
                  CLEAR WORKFLOW
                </span>
                <h3 className="text-2xl font-bold font-display text-slate-900 mt-1">
                  Step-by-Step Processing Stages
                </h3>
              </div>

              <div className="space-y-4">
                {service.processSteps.map((step) => (
                  <div
                    key={step.step}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-4"
                  >
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center font-mono font-bold text-sm shrink-0 mt-0.5">
                      {step.step}
                    </span>
                    <div>
                      <h4 className="font-display font-bold text-base text-slate-900 mb-1">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing WhatsApp Band */}
            <div className="bg-slate-900 text-white p-8 rounded-2xl border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <div className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                  RAPID CONSULAR SUPPORT
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  {service.title} questions?
                </h3>
                <p className="text-sm text-slate-300">
                  Get a same-day answer directly from our consular desk on WhatsApp.
                </p>
              </div>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center space-x-2"
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
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block">
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
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="border-b border-slate-100 pb-3 mb-4">
                <span className="text-xs font-mono uppercase text-amber-700 font-bold">
                  WHY CHOOSE SWISA
                </span>
                <h4 className="font-display font-bold text-lg text-slate-900">
                  Guaranteed Standards
                </h4>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                {service.keyBenefits.map((b, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-dashed border-slate-200">
                <button
                  onClick={() => onOpenEnquiry(service.title)}
                  className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  Start Assessment Form
                </button>
              </div>
            </div>

            {/* Department Liaison Box */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-md">
              <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block mb-1">
                ASSIGNED DEPARTMENT
              </span>
              <h4 className="font-display font-bold text-base text-white mb-3">
                Direct Consular Officers
              </h4>
              <div className="space-y-2 text-xs font-mono text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Desk Email:</span>
                  <span className="text-amber-400 font-semibold">{service.departmentEmail}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Office Line:</span>
                  <span className="text-white">{COMPANY_DETAILS.phoneSecondary}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Turnaround:</span>
                  <span className="text-white">24 Hours SLA</span>
                </div>
              </div>
            </div>

            {/* Related Services Cross-Links */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-display font-bold text-base text-slate-900 mb-4 border-b border-slate-100 pb-2">
                Related Services
              </h4>
              <div className="space-y-3">
                {relatedServices.map((rel) => (
                  <button
                    key={rel.slug}
                    onClick={() => onNavigate(`/services/${rel.slug}`)}
                    className="w-full text-left p-3 rounded-lg bg-slate-50 hover:bg-amber-50/50 border border-slate-200 hover:border-amber-400 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-display font-semibold text-xs text-slate-900 group-hover:text-amber-700">
                        {rel.title}
                      </div>
                      <div className="text-[10px] font-mono text-slate-500 line-clamp-1">
                        {rel.shortDesc}
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-amber-600 shrink-0 group-hover:translate-x-0.5 transition-transform" />
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
