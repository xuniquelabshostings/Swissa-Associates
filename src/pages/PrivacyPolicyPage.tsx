import React from 'react';
import { ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/siteData';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-cloud">
      
      {/* Header */}
      <section className="bg-sky-ink text-cloud py-16 sm:py-20 border-b border-brass/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brass font-bold block mb-2">
              COMPLIANCE & DATA INTEGRITY
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-display text-cloud mb-6">
              Privacy Policy & Document Custody.
            </h1>
            <p className="text-base sm:text-lg text-cloud/80 leading-relaxed">
              How Swisa Associates protects your personal data, biometric files, original passports, and communication consent.
            </p>
          </div>
        </div>
      </section>

      {/* Main Legal Content */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-brass/30 shadow-sm space-y-8 text-sm text-ink-soft leading-relaxed">
          
          <div>
            <h2 className="text-xl font-bold font-display text-ink mb-3">
              1. Overview & Commitment
            </h2>
            <p>
              Swisa Associates ("we", "us", or "our"), located at 53, Third Floor, Bharat Nagar, New Friends Colony, New Delhi-110025, recognizes the sensitive nature of original government documents, identity papers, and travel itineraries. We are committed to safeguarding your privacy in full compliance with the Information Technology Act (India) and international consular handling standards.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-display text-ink mb-3">
              2. Data We Collect
            </h2>
            <p className="mb-2">
              To process visa stamping, emigration clearance, and recruitment services, we collect:
            </p>
            <ul className="list-disc pl-5 space-y-1 font-mono text-xs text-ink">
              <li>Original passport details, nationality, and biometric photographs.</li>
              <li>Academic degrees, diplomas, and birth/marriage certificates for attestation.</li>
              <li>Police Clearance Certificates (PCC) and GAMCA/Wafid medical fitness reports.</li>
              <li>Contact details (phone number, WhatsApp handle, email, physical delivery address).</li>
              <li>Employer invitation letters, employment contracts, and Saudi Wakala records.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold font-display text-ink mb-3">
              3. Purpose of Processing & Embassy Disclosures
            </h2>
            <p>
              Your personal data is solely utilized to execute your chosen consular and travel services:
            </p>
            <ul className="list-disc pl-5 space-y-1 font-mono text-xs text-ink mt-2">
              <li>Lodging visa applications with the Royal Embassy of Saudi Arabia, Embassy of Kuwait, and diplomatic consulates.</li>
              <li>Verifying documents with State HRD, Sub-Divisional Magistrates (SDM), and the Ministry of External Affairs (MEA).</li>
              <li>Booking flight reservations and issuing airline PNRs.</li>
              <li>Submitting candidate dossiers to prospective employers under legal recruitment mandates.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold font-display text-ink mb-3">
              4. Physical Document Custody & Courier Security
            </h2>
            <p>
              Original passports and degrees entrusted to Swisa Associates are held in fireproof, secure storage units at our New Delhi facility. Physical transport to embassy counters is conducted by authorized, bonded consular liaisons. For domestic return dispatch, we utilize premium, insured courier services with live tracking codes provided to the client.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-display text-ink mb-3">
              5. WhatsApp & Digital Communications Consent
            </h2>
            <p>
              By submitting an inquiry on our website or initiating a conversation on WhatsApp, you grant explicit consent for Swisa Associates consular officers to communicate case updates, appointment confirmations, and regulatory notices via WhatsApp, phone, or email. We never sell or distribute your contact details to third-party marketing entities.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-display text-ink mb-3">
              6. Grievance Officer & Contact
            </h2>
            <p>
              For data protection questions, rectification requests, or custody inquiries, contact our legal desk:
            </p>
            <div className="mt-3 p-4 rounded-xl bg-cloud border border-brass/20 font-mono text-xs text-ink space-y-1">
              <div><strong>Company:</strong> Swisa Associates</div>
              <div><strong>Email:</strong> {COMPANY_DETAILS.emails.general}</div>
              <div><strong>Phone:</strong> {COMPANY_DETAILS.phoneSecondary}</div>
              <div><strong>Address:</strong> {COMPANY_DETAILS.address}</div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
