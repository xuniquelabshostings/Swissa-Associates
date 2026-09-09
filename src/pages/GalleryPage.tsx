import React from 'react';
import { Camera, Plane, ShieldCheck, MapPin, Award } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const galleryItems = [
    {
      tag: 'CONSULAR DESK',
      title: 'Diplomatic Dossier Verification',
      desc: 'Our New Delhi operations room cross-verifying biometric forms and medical reports before embassy lodgement.',
      code: 'DEL-OPS-01',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80',
    },
    {
      tag: 'TRADE TESTING',
      title: 'Technical Skills Workshop Assessment',
      desc: 'Candidates undergoing practical 6G pipe welding and electrical circuit evaluations in accredited centers.',
      code: 'TRD-TEST-02',
      image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=80',
    },
    {
      tag: 'SAUDI ARABIA',
      title: 'Riyadh Infrastructure Mobilization',
      desc: 'Batch of 120 skilled civil and mechanical tradesmen arriving for metro and utility contracts.',
      code: 'RUH-MOB-03',
      image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=800&auto=format&fit=crop&q=80',
    },
    {
      tag: 'KUWAIT EMBASSY',
      title: 'Article 18 Visa Handover',
      desc: 'Verified stamped passports with authentic Kuwait consular endorsements ready for courier dispatch.',
      code: 'KWI-PAS-04',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=80',
    },
    {
      tag: 'AIR MOBILIZATION',
      title: 'Pre-Departure Airport Briefing',
      desc: 'Our airport representative guiding outbound workers through check-in and customs clearance at IGI Airport DEL.',
      code: 'IGI-DEP-05',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=80',
    },
    {
      tag: 'DOCUMENT ATTESTATION',
      title: 'MEA Apostille & Legalization Archive',
      desc: 'Carefully sealed and logged degree certificates following Central Government Ministry of External Affairs seals.',
      code: 'MEA-ATS-06',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-100 via-slate-50 to-white text-slate-900 py-16 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs font-mono font-bold tracking-widest uppercase mb-4">
              OPERATIONS & ARCHIVES
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-display text-slate-900 mb-6">
              Field Operations & Client Journeys.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A visual glimpse into our daily consular processing, technical trade evaluation workshops, and pre-departure airport mobilizations.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <span className="text-[10px] font-mono font-bold text-amber-800 uppercase bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                    {item.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-500">{item.code}</span>
                </div>

                <div className="h-48 rounded-xl overflow-hidden mb-4 border border-slate-200 relative shadow-inner">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-3 right-3 text-white text-xs font-mono font-semibold truncate">
                    {item.title}
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-dashed border-slate-200 text-[11px] font-mono text-amber-700 flex items-center justify-between">
                <span>✓ Verified Operations Log</span>
                <span className="text-[10px] text-slate-500 font-mono">DELHI HQ</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
