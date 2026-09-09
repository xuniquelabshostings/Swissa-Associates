import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Send, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { COMPANY_DETAILS, SERVICES_DATA } from '../data/siteData';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('mofa@swisaassociates.com');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `*CONTACT INQUIRY*\nName: ${name || 'N/A'}\nPhone: ${phone || 'N/A'}\nEmail: ${email || 'N/A'}\nDepartment: ${department}\nMessage: ${message || 'I have a visa / attestation inquiry.'}`;
    window.open(`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-100 via-slate-50 to-white text-slate-900 py-16 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl reveal-on-scroll">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold block mb-2">
              CONTACT & DIPLOMATIC LIAISON DESK
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-display text-slate-900 mb-6">
              Connect Directly with Our Consular Officers.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Give us a call or visit our New Delhi office anytime. We endeavor to answer all inquiries within <strong className="text-amber-700">24 hours on business days</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Container */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Form & Prefer WhatsApp Card (7 cols) */}
          <div className="lg:col-span-7 space-y-8 reveal-left">
            
            {/* Contact Form Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover-lift card-shine">
              <div className="border-b border-slate-100 pb-4 mb-6">
                <span className="text-xs font-mono uppercase text-amber-700 font-bold block">
                  READY TO GET STARTED?
                </span>
                <h2 className="text-2xl font-bold font-display text-slate-900 mt-1">
                  Send an Official Inquiry
                </h2>
                <p className="text-xs text-slate-500 mt-1 font-mono">
                  Required fields are marked *. All inquiries protected under privacy policy.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-slate-900">
                    Inquiry Transmitted Successfully
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900">{name}</strong>. A copy of your dossier has been routed to our consular desk. Expect a call or email within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-amber-700 font-bold hover:underline pt-2 block mx-auto hover-lift"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-600 font-bold mb-1">
                        Enter Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Mohd. Tariq"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-600 font-bold mb-1">
                        Enter Your Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98110 84530"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-600 font-bold mb-1">
                        Enter Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-600 font-bold mb-1">
                        Target Department Desk
                      </label>
                      <select
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                      >
                        <option value="mofa@swisaassociates.com">MOFA & Saudi Stamping Desk</option>
                        <option value="visa@swisaassociates.com">Kuwait & Consular Visa Desk</option>
                        <option value="jobs@swisaassociates.com">Manpower Recruitment & Jobs</option>
                        <option value="emigration@swisaassociates.com">Emigration & Attestation Desk</option>
                        <option value="info@swisaassociates.com">General Inquiries & Ticketing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-600 font-bold mb-1">
                      Your Message / Case Requirements *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please mention destination country, visa category (employment, visit, attestation), or number of candidates..."
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-sm hover-lift"
                    >
                      <Send className="w-4 h-4 text-amber-400" />
                      <span>Transmit Message</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-sm hover-lift"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
                      <span>Send Direct via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* "Prefer WhatsApp?" Card */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 hover-lift card-shine">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold block">
                  SPEED & CONVENIENCE
                </span>
                <h3 className="font-display font-bold text-lg text-white">
                  Prefer WhatsApp? Message Us Directly
                </h3>
                <p className="text-xs text-slate-300">
                  Skip the form entirely and start a real-time conversation with our visa counselor right now.
                </p>
              </div>

              <a
                href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hello Swisa Associates, I am messaging directly from the Contact page.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center space-x-2 hover-lift"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
                <span>Open WhatsApp Desk</span>
              </a>
            </div>

          </div>

          {/* Right Column: Complete Department Directory & Location (5 cols) */}
          <div className="lg:col-span-5 space-y-6 reveal-right">
            
            {/* Department Email Directory */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover-lift card-shine">
              <div className="border-b border-slate-100 pb-3 mb-4">
                <span className="text-xs font-mono uppercase text-amber-700 font-bold block">
                  DEPARTMENT DIRECTORY
                </span>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  Direct Mailbox Access
                </h3>
              </div>

              <div className="space-y-3 text-xs font-mono">
                {[
                  { dept: 'General Desk', email: COMPANY_DETAILS.emails.general, desc: 'Corporate & general inquiries' },
                  { dept: 'Applications Intake', email: COMPANY_DETAILS.emails.applications, desc: 'Document submissions' },
                  { dept: 'MOFA Stamping', email: COMPANY_DETAILS.emails.mofa, desc: 'Saudi Arabia Enjaz & Wakala' },
                  { dept: 'Recruitment / Jobs', email: COMPANY_DETAILS.emails.jobs, desc: 'Candidate CVs & employer demand' },
                  { dept: 'Consular Visas', email: COMPANY_DETAILS.emails.visa, desc: 'Kuwait & international stamping' },
                  { dept: 'Emigration & Attestation', email: COMPANY_DETAILS.emails.emigration, desc: 'MEA, HRD & POE clearances' },
                ].map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 hover:border-amber-400 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900">{item.dept}</span>
                      <a href={`mailto:${item.email}`} className="text-amber-700 hover:underline truncate ml-2 font-medium">
                        {item.email}
                      </a>
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Address & Phone Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover-lift card-shine">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-mono uppercase text-amber-700 font-bold block">
                  HEADQUARTERS LOCATION
                </span>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  New Delhi Operational Office
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5 animate-bounce-subtle" />
                  <div>
                    <strong className="text-slate-900 block">Physical Address:</strong>
                    <span>{COMPANY_DETAILS.address}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Direct Lines:</strong>
                    <div className="space-y-0.5 font-mono">
                      <div>
                        <a href={`tel:${COMPANY_DETAILS.phonePrimary.replace(/\s+/g, '')}`} className="text-slate-900 hover:text-amber-700 font-semibold">
                          {COMPANY_DETAILS.phonePrimary}
                        </a> (Mobile / WhatsApp)
                      </div>
                      <div>
                        <a href={`tel:${COMPANY_DETAILS.phoneSecondary.replace(/\s+/g, '')}`} className="text-slate-900 hover:text-amber-700 font-semibold">
                          {COMPANY_DETAILS.phoneSecondary}
                        </a> (Landline Desk)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Working Hours:</strong>
                    <span>Monday through Saturday: 09:30 AM to 07:00 PM IST</span>
                  </div>
                </div>
              </div>

              {/* Real Google Map Embed Container */}
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-inner bg-slate-50 relative">
                <iframe
                  title="Swisa Associates Google Map Location"
                  src="https://maps.google.com/maps?q=168%2F2+Ground+Floor,+Shop+No.+04,+Bharat+Nagar,+New+Friends+Colony,+New+Delhi,+Delhi+110025&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-56 filter contrast-105"
                />
                <div className="p-3 bg-slate-900 text-white flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center space-x-1.5 truncate mr-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 animate-bounce-subtle" />
                    <span className="truncate text-[11px] text-slate-300">Bharat Nagar, New Friends Colony, New Delhi</span>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=168/2+Ground+Floor,+Shop+No.+04,+Bharat+Nagar,+New+Friends+Colony,+New+Delhi,+Delhi+110025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:underline font-bold text-[11px] shrink-0 flex items-center space-x-1"
                  >
                    <span>View Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Social & Digital Presence Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover-lift card-shine">
              <span className="text-xs font-mono uppercase text-amber-700 font-bold block mb-1">
                OFFICIAL SOCIAL NETWORK
              </span>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-3">
                Follow Swisa Associates
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                Stay updated on latest Gulf visa regulations, job openings, embassy alerts, and candidate success stories.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={COMPANY_DETAILS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono font-bold flex items-center space-x-2 border border-slate-800 transition-all hover:border-amber-400 hover-lift shadow-sm"
                >
                  <span>Facebook: @swisaassociates</span>
                  <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                </a>

                <a
                  href={COMPANY_DETAILS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono font-bold flex items-center space-x-2 border border-slate-800 transition-all hover:border-amber-400 hover-lift shadow-sm"
                >
                  <span>LinkedIn: Asad Ullah</span>
                  <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
