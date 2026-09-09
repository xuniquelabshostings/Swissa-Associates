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
    <div className="pt-24 min-h-screen bg-cloud">
      
      {/* Header */}
      <section className="bg-sky-ink text-cloud py-16 sm:py-20 border-b border-brass/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl reveal-on-scroll">
            <span className="text-xs font-mono uppercase tracking-widest text-brass font-bold block mb-2">
              KNOWLEDGE BASE & GUIDELINES
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-display text-cloud mb-6">
              Frequently Asked Questions.
            </h1>
            <p className="text-base sm:text-lg text-cloud/80 leading-relaxed">
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
            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-brass/30 bg-white text-sm text-ink shadow-sm focus:outline-none focus:ring-2 focus:ring-brass transition-all hover-lift"
          />
          <Search className="w-5 h-5 text-brass absolute left-4 top-1/2 -translate-y-1/2" />
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-xl border border-brass/25 overflow-hidden transition-all shadow-sm hover-lift reveal-on-scroll stagger-${(idx % 6) + 1}`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between space-x-4 hover:bg-cloud/40 transition-colors"
                >
                  <span className="font-display font-bold text-base text-ink">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-brass shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-ink-soft leading-relaxed border-t border-dashed border-brass/20 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Closing WhatsApp Prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-sky-ink text-cloud border border-brass/40 flex flex-col sm:flex-row items-center justify-between gap-4 reveal-on-scroll hover-lift card-shine">
          <div>
            <h3 className="font-display font-bold text-lg text-cloud">Have a specific case query?</h3>
            <p className="text-xs text-cloud/70">Our senior consular officers review complex cases on WhatsApp.</p>
          </div>
          <a
            href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hello Swisa Associates, I have a specific question not covered in the FAQ.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-whatsapp-green text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center space-x-2 shrink-0 shadow-md hover-lift transition-all"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
            <span>Chat with Officer</span>
          </a>
        </div>

      </section>

    </div>
  );
};
