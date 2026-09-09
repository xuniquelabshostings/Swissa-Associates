import React, { useState } from 'react';
import { ChevronDown, Search, Phone } from 'lucide-react';
import { FAQ_DATA, COMPANY_DETAILS } from '../data/siteData';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';

export const FAQPage: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const additionalFaqs = [
    ...FAQ_DATA,
    {
      q: 'What is the minimum passport validity required for Gulf visa stamping?',
      a: 'Most Gulf and European embassies require a minimum of 6 months validity remaining on your original passport from your scheduled date of travel, along with at least 2 consecutive blank visa pages.',
    },
    {
      q: 'Can family visit visas be converted to permanent work permits in Saudi Arabia or Kuwait?',
      a: 'As per current Saudi and Kuwait immigration regulations, visit visas cannot be directly converted to local employment permits within the country. An applicant must exit and apply afresh through an official employer Wakala and work visa stamping procedure.',
    },
    {
      q: 'What is the procedure for degree attestation from the Ministry of External Affairs (MEA)?',
      a: 'The educational document must first be verified by the State Regional Authentication Center (HRD) or Sub-Divisional Magistrate (SDM), followed by official apostille / attestation by the MEA in New Delhi, and finally stamped by the target country’s embassy.',
    },
    {
      q: 'Do you provide airport transit assistance and flight ticket rebooking?',
      a: 'Yes, our corporate travel desk handles 24/7 flight rebooking, emergency ticket rescheduling, pre-departure airport briefing at IGI Delhi, and extra baggage allowances on major Gulf airlines.',
    },
  ];

  const filteredFaqs = additionalFaqs.filter(
    (f) =>
      f.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-100 via-slate-50 to-white text-slate-900 py-16 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl reveal-on-scroll">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs font-mono font-bold tracking-widest uppercase mb-4">
              KNOWLEDGE BASE & GUIDELINES
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-display text-slate-900 mb-6">
              Frequently Asked Questions.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Find authoritative answers regarding Saudi Wakala, Kuwait PCC, GAMCA medicals, degree attestation, and processing timelines.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search Bar */}
        <div className="relative mb-10 reveal-on-scroll">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search keywords (e.g. Wakala, Medical, GAMCA, Kuwait PCC, Attestation)..."
            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all hover-lift"
          />
          <Search className="w-5 h-5 text-amber-600 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-xl border border-slate-200 overflow-hidden transition-all shadow-sm hover:border-slate-300 hover-lift reveal-on-scroll stagger-${(idx % 6) + 1}`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between space-x-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-display font-bold text-base text-slate-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-amber-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Closing WhatsApp Prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 reveal-on-scroll hover-lift shadow-lg">
          <div>
            <h3 className="font-display font-bold text-lg text-white">Have a specific case query?</h3>
            <p className="text-xs text-slate-400">Our senior consular officers review complex cases on WhatsApp.</p>
          </div>
          <a
            href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hello Swisa Associates, I have a specific question not covered in the FAQ.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-whatsapp-green hover:bg-emerald-600 text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center space-x-2 shrink-0 shadow-md hover-lift transition-all"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
            <span>Chat with Officer</span>
          </a>
        </div>

      </section>

    </div>
  );
};
