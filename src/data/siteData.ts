export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  heroTagline: string;
  overview: string;
  detailedSections: {
    heading: string;
    content: string;
  }[];
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  keyBenefits: string[];
  departmentEmail: string;
  iconName: string;
  imageUrl?: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  code: string;
  shortTag: string;
  description: string;
  rolesSupplied: string[];
  imageUrl?: string;
}

export interface DestinationCountry {
  id: string;
  name: string;
  code: string;
  flightCode: string;
  region: string;
  processingDays: string;
  popularVisas: string[];
  lat: number;
  lng: number;
  summary: string;
  requirements: string[];
  imageUrl?: string;
}

export interface StatMetric {
  value: string;
  label: string;
  code: string;
}

export interface TeamMember {
  name: string;
  role: string;
  badge: string;
  bio: string;
  experience: string;
}

export const COMPANY_DETAILS = {
  name: 'Swisa Associates',
  tagline: 'Immigration, Visa Stamping & Global Manpower Consultancy',
  address: '53, Third Floor, Bharat Nagar, New Friends Colony, New Delhi-110025',
  phonePrimary: '+91 9811084530',
  phoneSecondary: '+91 1140051276',
  whatsappNumber: '919811084530',
  licenseNumber: 'B-2330/DEL/PER/1000+/5/10860/2024',
  foundedYear: 2012,
  yearsOfExcellence: '12+',
  clientsSatisfied: '1500+',
  projectsCompleted: '990+',
  teamMembers: '8+',
  agentNetwork: '200+',
  responseTime: '24 hours guaranteed on business days',
  emails: {
    general: 'info@swisaassociates.com',
    applications: 'swissaassociates05@gmail.com',
    mofa: 'mofa@swisaassociates.com',
    jobs: 'jobs@swisaassociates.com',
    visa: 'visa@swisaassociates.com',
    emigration: 'emigration@swisaassociates.com',
  },
  facebook: 'https://www.facebook.com/swisaassociates',
  linkedin: 'https://in.linkedin.com/in/asad-ullah-3294a1a7'
};

export const TRUST_STATS: StatMetric[] = [
  { value: '1,500+', label: 'Clients Satisfied', code: 'PAX-1500' },
  { value: '990+', label: 'Projects Completed', code: 'PRJ-990' },
  { value: '12+', label: 'Years in the Field', code: 'EXP-12Y' },
  { value: '200+', label: 'Verified Global Agents', code: 'AGT-200' },
  { value: '8+', label: 'Dedicated Consular Officers', code: 'OPS-008' },
];

export const VISA_TYPES = [
  { id: 'work', title: 'Work Permit & Employment', code: 'WP-01', desc: 'Sponsorship-backed work authorizations for Gulf and global destinations.' },
  { id: 'family', title: 'Family & Dependent Visa', code: 'FAM-02', desc: 'Reuniting spouses, children, and parents with verified embassy documentation.' },
  { id: 'visitor', title: 'Visitor & Tourist Visa', code: 'VIS-03', desc: 'Expedited processing for short-term tourism, family visits, and cultural travel.' },
  { id: 'student', title: 'Student & Academic Visa', code: 'STU-04', desc: 'University offer verification, consular interview guidance, and visa clearance.' },
  { id: 'business', title: 'Business & Commercial Visa', code: 'BIZ-05', desc: 'Single & multiple-entry commercial invitations and business delegation visas.' },
  { id: 'personal', title: 'Personal Travel Visa', code: 'PER-06', desc: 'Tailored visa filing for private travel, medical visits, and personal affairs.' },
  { id: 'freelance', title: 'Freelance & Green Visa', code: 'FLC-07', desc: 'Independent residency and self-sponsored remote work permit pathways.' },
  { id: 'migrate', title: 'Permanent Residency & Migration', code: 'MIG-08', desc: 'Skilled migration, points-tested pathways, and long-term residency advice.' },
];

export const FOUR_STEPS = [
  {
    step: '01',
    title: 'Complete Online Assessment',
    description: 'Submit your personal details, travel purpose, and destination requirements through our digital inquiry system or WhatsApp intake.',
    detail: 'Our officers review your eligibility profile within 2 hours.'
  },
  {
    step: '02',
    title: 'Document Verification & Fee Lodgement',
    description: 'Provide your original passport, photographs, police clearance (PCC), medical records (GAMCA/Wafid), and apostille certifications.',
    detail: 'We audit every document for 100% embassy compliance.'
  },
  {
    step: '03',
    title: 'Consular Submission & Biometrics',
    description: 'We lodge your dossier directly with authorized embassy channels (Saudi MOFA / Kuwait VFS / Consulates) and coordinate biometrics.',
    detail: 'Full tracking status provided at each verification checkpoint.'
  },
  {
    step: '04',
    title: 'Visa Stamped & Secure Handover',
    description: 'Your passport with the official endorsed visa sticker is collected, counter-checked against government registries, and delivered to you.',
    detail: 'Complete pre-departure briefing and flight ticketing assistance.'
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'saudi-visa-stamping',
    slug: 'saudi-visa-stamping',
    title: 'Saudi Arabia Visa Stamping',
    shortDesc: 'Official consular visa endorsement via Saudi MOFA for employment, family visit, commercial, and residence categories.',
    heroTagline: 'Direct Embassy Protocol & Authorized Saudi Consular Endorsement',
    overview: 'Swisa Associates delivers end-to-end Saudi Arabia Visa Stamping services with meticulous compliance under current Saudi Ministry of Foreign Affairs (MOFA) regulations. We handle Wakala authorization, medical GAMCA verification, Chamber of Commerce approvals, and express passport submission.',
    iconName: 'Stamp',
    departmentEmail: 'mofa@swisaassociates.com',
    imageUrl: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=800&auto=format&fit=crop&q=80',
    detailedSections: [
      {
        heading: 'Comprehensive Embassy & Enjaz/KSA Visa Support',
        content: 'Whether you are an individual travel applicant or an enterprise deploying a batch workforce to Riyadh, Jeddah, or Dammam, Swisa Associates guarantees zero documentation errors. We interface directly with embassy-accredited channels to ensure your electronic visa authorizations (Enjaz) match physical passport records perfectly.'
      },
      {
        heading: 'Employment, Family & Commercial Categories',
        content: 'From technical work visas requiring degree HRD/MEA attestations to family visit visas and commercial investor entries, we audit salary contracts, company CR records, and police clearances before submission to minimize turnaround times.'
      },
      {
        heading: 'Expedited Consular Turnaround',
        content: 'Through our dedicated Delhi consular liaison desk, we manage token allocations, biometric scheduling, and passport collection directly from the Royal Embassy of Saudi Arabia and authorized Visa Centers.'
      }
    ],
    processSteps: [
      { step: '1', title: 'Wakala & MOFA Audit', description: 'Verification of Saudi sponsor invitation number and electronic power of attorney.' },
      { step: '2', title: 'Medical (Wafid) & PCC', description: 'Review of authorized clinic fit report and state police clearance certificate.' },
      { step: '3', title: 'Document Attestation', description: 'Apostille, HRD, and MEA seals for degrees or marriage/birth certificates.' },
      { step: '4', title: 'Consular Submission', description: 'Physical passport lodgement at New Delhi / Mumbai consulate.' },
      { step: '5', title: 'Verification & Delivery', description: 'Endorsement inspection and insured dispatch to client.' }
    ],
    keyBenefits: [
      'Official MOFA & Enjaz electronic registration assistance',
      'Wakala verification with Saudi sponsor CR check',
      'GAMCA / Wafid medical fit assistance & guidance',
      'Priority emergency stamping pathways available',
      'Live tracking updates via WhatsApp and consular portal'
    ]
  },
  {
    id: 'kuwait-visa-stamping',
    slug: 'kuwait-visa-stamping',
    title: 'Kuwait Visa Stamping',
    shortDesc: 'Authorized Kuwait embassy visa stamping, PCC attestation, and medical verification for work and residence permits.',
    heroTagline: 'Precision Kuwait Embassy Submission & Verified Consular Clearances',
    overview: 'Navigating Kuwaiti immigration demands precise procedural adherence. Swisa Associates manages complete Kuwait Visa Stamping for work permits (Article 18), family visit visas (Article 22), and commercial entries, backed by direct embassy coordination in New Delhi.',
    iconName: 'FileCheck',
    departmentEmail: 'visa@swisaassociates.com',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=80',
    detailedSections: [
      {
        heading: 'End-to-End Kuwait Work Permit Processing',
        content: 'Securing an Article 18 work permit requires aligning your Kuwait Ministry of Social Affairs and Labour (MOSAL) work permit with an authentic GAMCA medical clearance and MEA-attested Police Clearance Certificate (PCC). Our senior consultants review every document line-by-line.'
      },
      {
        heading: 'Embassy Appointment Scheduling & Submission',
        content: 'Securing slots at the Embassy of the State of Kuwait or its designated visa centers can be challenging. Swisa Associates manages all appointment logistics, fees remittance, and physical dossier presentation.'
      },
      {
        heading: 'Continuous Consular Updates',
        content: 'We maintain continuous communication with applicants throughout the verification cycle, ensuring rapid resolution of any embassy inquiries.'
      }
    ],
    processSteps: [
      { step: '1', title: 'Document Verification', description: 'Thorough review of original work permit, passport validity, and educational credentials.' },
      { step: '2', title: 'Application Assistance', description: 'Accurate completion of bilingual embassy forms and electronic registration.' },
      { step: '3', title: 'Appointment Logistics', description: 'Scheduling slots at the Kuwait Embassy consular section and biometric centers.' },
      { step: '4', title: 'Submission & Stamping', description: 'Physical presentation of the application and fee reconciliation.' },
      { step: '5', title: 'Collection & Follow-up', description: 'Final passport collection, stamp audit, and post-endorsement briefing.' }
    ],
    keyBenefits: [
      'Specialized handling of Kuwait Article 18 & 22 permits',
      'PCC MEA & Kuwait Embassy legalization support',
      'Medical testing coordination with approved centers',
      'Direct courier and tracking for corporate clients',
      'Dedicated consular specialist assigned to your file'
    ]
  },
  {
    id: 'air-ticketing',
    slug: 'air-ticketing',
    title: 'Air Ticketing Services',
    shortDesc: 'Corporate and personal flight reservations with competitive group fares, flexible baggage allowances, and rebooking support.',
    heroTagline: 'Strategic Global Routing & Preferred Airline Rates for Gulf and International Travel',
    overview: 'Swisa Associates operates a dedicated travel desk specializing in Gulf-bound passenger transit, corporate manpower mobilization flights, and international leisure itineraries. We negotiate directly with top carriers to secure preferential fares and generous baggage allowances.',
    iconName: 'PlaneTakeoff',
    departmentEmail: 'info@swisaassociates.com',
    imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=80',
    detailedSections: [
      {
        heading: 'Corporate & Mass Workforce Deployment Flights',
        content: 'Mobilizing hundreds of technical personnel requires reliable charter coordination, blocked seating, and coordinated arrival schedules. We provide industrial clients with single-invoice ticketing and flexible name-change policies.'
      },
      {
        heading: 'Baggage Allowance & Gulf Route Specialization',
        content: 'Overseas workers and long-term expatriates need extra luggage flexibility. We secure enhanced 30kg–40kg allowances on Saudia, Kuwait Airways, Emirates, Qatar Airways, Air India Express, and Gulf Air.'
      },
      {
        heading: '24/7 Rebooking & Emergency Flight Changes',
        content: 'Flight delays or embassy rescheduling shouldn’t cause lost tickets. Our dedicated agents provide immediate rebooking, rerouting, and visa-aligned travel date adjustments.'
      }
    ],
    processSteps: [
      { step: '1', title: 'Itinerary Consultation', description: 'Assessing preferred dates, layovers, transit visa needs, and budget.' },
      { step: '2', title: 'Fare Comparison', description: 'Benchmarking real-time airline inventory for best rates and baggage limits.' },
      { step: '3', title: 'Instant Confirmation', description: 'Issuing verifiable PNR and e-tickets with clear baggage allowances.' },
      { step: '4', title: 'Travel Briefing', description: 'Guidance on airport arrival, web check-in, customs rules, and arrival transit.' }
    ],
    keyBenefits: [
      'Special marine, migrant labor, and expatriate baggage allowances',
      'Instant ticket issuance across 120+ international airlines',
      'Corporate credit accounts and group mobilization rates',
      'Zero-delay flight change and cancellation processing'
    ]
  },
  {
    id: 'manpower-services',
    slug: 'manpower-services',
    title: 'Manpower & Recruitment Services',
    shortDesc: 'Over 12 years connecting blue-collar, technical, and executive talent with major Gulf and domestic industrial contractors.',
    heroTagline: 'Connecting Skilled Indian Talent with Leading Global Industrial Projects',
    overview: 'With an extensive pan-India network of 200+ partner agents and technical trade test facilities, Swisa Associates provides end-to-end workforce recruitment across 13 key industries. We handle candidate sourcing, trade screening, medical tests, and emigration clearance (ECNR/POE).',
    iconName: 'Users',
    departmentEmail: 'jobs@swisaassociates.com',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80',
    detailedSections: [
      {
        heading: 'Pan-India Talent Sourcing & Trade Testing',
        content: 'Our recruitment pipelines span Punjab, Uttar Pradesh, Bihar, Rajasthan, Kerala, and Andhra Pradesh. Candidates undergo practical skills evaluations in certified trade test workshops for welding, pipefitting, HVAC, and electrical engineering.'
      },
      {
        heading: 'End-to-End Mobilization & Emigration Compliance',
        content: 'We manage the complete deployment lifecycle: employer job order registration, candidate trade interviews, GAMCA medical clearance, embassy visa stamping, Protector of Emigrants (POE) clearance, and departure flights.'
      },
      {
        heading: 'Workforce Planning & Retention',
        content: 'We partner with enterprise HR and procurement managers to ensure replacement guarantees, fair labor compliance, and transparent employment contracts.'
      }
    ],
    processSteps: [
      { step: '1', title: 'Demand Letter & Wakala', description: 'Reviewing employer job specifications and required labor quotas.' },
      { step: '2', title: 'Candidate Shortlisting', description: 'Screening CVs and executing trade tests at authorized workshops.' },
      { step: '3', title: 'Client Interview Session', description: 'Facilitating video or in-person delegation interviews in Delhi.' },
      { step: '4', title: 'Medical & Emigration', description: 'GAMCA testing, insurance, and POE clearance.' },
      { step: '5', title: 'Deployment Flight', description: 'Coordinated flight departure and employer reception confirmation.' }
    ],
    keyBenefits: [
      'Access to 50,000+ pre-vetted skilled and semi-skilled worker database',
      'Certified trade testing workshops for technical validation',
      '100% compliance with Ministry of External Affairs recruitment norms',
      'Zero replacement cost within 90-day probationary guarantee'
    ]
  },
  {
    id: 'document-attestation',
    slug: 'document-attestation',
    title: 'Document Attestation Services',
    shortDesc: 'Official authentication for educational degrees, marriage/birth certificates, and commercial documents from HRD, MEA, and Embassies.',
    heroTagline: 'Government-Certified Legalization for International Recognition',
    overview: 'Document attestation is mandatory for foreign work permits, university admissions, and business expansions abroad. Swisa Associates manages the entire legalization chain from State Departments (HRD/Home) to the Ministry of External Affairs (MEA Apostille) and destination foreign embassies.',
    iconName: 'Award',
    departmentEmail: 'emigration@swisaassociates.com',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80',
    detailedSections: [
      {
        heading: 'Educational, Personal & Commercial Certification',
        content: 'We process engineering degrees, diplomas, nursing certificates, marriage certificates, birth certificates, power of attorney, board resolutions, and commercial invoices across state and national authorities.'
      },
      {
        heading: 'State HRD, Home Dept & MEA Apostille',
        content: 'Our specialized runners coordinate directly with state secretariats across India, ensuring genuine verification before submitting documents for the central Ministry of External Affairs stamp or Hague Apostille sticker.'
      },
      {
        heading: 'Strict Security & Confidentiality',
        content: 'Original documents are irreplaceable. We employ insured courier tracking, tamper-evident envelopes, and strict custody logs throughout the multi-week attestation chain.'
      }
    ],
    processSteps: [
      { step: '1', title: 'Document Intake & Audit', description: 'Examining originals for prior verifications and university records.' },
      { step: '2', title: 'State Level Authentication', description: 'HRD / Home Department / Sub-Divisional Magistrate (SDM) seal.' },
      { step: '3', title: 'MEA Legalization', description: 'Central Ministry of External Affairs attestation or Hague Apostille.' },
      { step: '4', title: 'Embassy Legalization', description: 'Destination country embassy stamp (Saudi, Kuwait, UAE, etc.).' },
      { step: '5', title: 'Secure Dispatch', description: 'Insured return of original attested dossiers to applicant.' }
    ],
    keyBenefits: [
      'Direct liaison with MEA CPV division and State Secretariats',
      'Hague Apostille Convention compliant certification',
      'Chamber of Commerce legalization for commercial trade papers',
      'Express timeline tracking with verified security custody'
    ]
  },
  {
    id: 'immigration-services',
    slug: 'immigration-services',
    title: 'Immigration & Citizenship Consulting',
    shortDesc: 'Comprehensive advisory for skilled worker residency, investment migration, and family relocation to top global destinations.',
    heroTagline: 'Strategic Global Mobility, Skilled Migration & Family Settlement',
    overview: 'Relocating to another country represents a life-defining milestone. Swisa Associates delivers structured immigration consulting for Canada (Express Entry, PNP), the United Kingdom, Australia (General Skilled Migration), and European destinations, giving your application the best possible approval probability.',
    iconName: 'Compass',
    departmentEmail: 'visa@swisaassociates.com',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
    detailedSections: [
      {
        heading: 'Points Assessment & Profile Optimization',
        content: 'Our experienced immigration counselors evaluate your Comprehensive Ranking System (CRS) score, credentials assessment (ECA through WES/IQAS), language test requirements (IELTS/PTE), and occupational demand lists.'
      },
      {
        heading: 'Dossier Assembly & Legal Representation',
        content: 'We assemble verifiable reference letters, police background clearances, and financial proof of funds, presenting an airtight case file to national immigration authorities.'
      },
      {
        heading: 'Post-Landing Settlement Advisory',
        content: 'Beyond the visa grant, we provide practical guidance on tax registrations, healthcare enrollment, housing search, and schooling to ease your transition into your new home country.'
      }
    ],
    processSteps: [
      { step: '1', title: 'Eligibility Screening', description: 'Evaluating age, education, work history, and target country thresholds.' },
      { step: '2', title: 'Credential Assessment', description: 'Initiating ECA/skills assessment with designated evaluating bodies.' },
      { step: '3', title: 'Expression of Interest (EOI)', description: 'Filing state or federal profiles and managing pool rankings.' },
      { step: '4', title: 'Invitation to Apply (ITA)', description: 'Final document submission and medical/biometric appointments.' },
      { step: '5', title: 'Confirmation of PR', description: 'Visa grant notification and pre-departure settlement briefing.' }
    ],
    keyBenefits: [
      'Honest CRS score audits and strategic pathways planning',
      'Comprehensive preparation for consular and visa interviews',
      'Family accompaniment and dependent visa management',
      'Transparent milestones with no hidden government or filing fees'
    ]
  },
  {
    id: 'visa-stamping-services',
    slug: 'visa-stamping-services',
    title: 'General Visa Stamping Services',
    shortDesc: 'Consular passport endorsement across 20+ countries for business, tourist, employment, and diplomatic passports.',
    heroTagline: 'Flawless Consular Dossiers & Multi-Country Embassy Endorsements',
    overview: 'Whether traveling for multinational corporate meetings, short-term contract assignments, or personal leisure, Swisa Associates handles the detailed physical submission of your passport to embassies and consulates across New Delhi and Mumbai.',
    iconName: 'Stamp',
    departmentEmail: 'visa@swisaassociates.com',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=80',
    detailedSections: [
      {
        heading: 'Tailored Consular Filing for 20+ Embassies',
        content: 'Every foreign mission maintains unique requirements regarding photo dimensions, financial statements, sponsor guarantees, and travel insurance. We ensure your submission package meets the exact standards of the receiving embassy.'
      },
      {
        heading: 'Interview Preparation & Biometric Escort',
        content: 'For missions requiring personal biometric appointments or consular interviews, our officers provide thorough mock questionnaires, itinerary documentation, and on-site briefing.'
      },
      {
        heading: 'Diplomatic & Urgent Express Queues',
        content: 'We prioritize time-sensitive corporate travel, coordinating urgent submissions with embassy consular attaches wherever fast-track options exist.'
      }
    ],
    processSteps: [
      { step: '1', title: 'Jurisdiction Review', description: 'Determining correct consular jurisdiction based on passport address.' },
      { step: '2', title: 'Application Dossier', description: 'Compiling financial statements, cover letters, and hotel/flight vouchers.' },
      { step: '3', title: 'Consular Submission', description: 'Lodging papers through accredited travel agent channels.' },
      { step: '4', title: 'Tracking & Retrieval', description: 'Monitoring visa status and secure courier delivery upon collection.' }
    ],
    keyBenefits: [
      'Direct representation before diplomatic missions in New Delhi',
      'Error-free verification of bank statements and employer cover letters',
      'High first-time approval rate across both Gulf and Western destinations',
      'Urgent express handling for corporate emergency travel'
    ]
  },
  {
    id: 'tour-travel-services',
    slug: 'tour-travel-services',
    title: 'Tour & Travel Services',
    shortDesc: 'Customized international holiday packages, flight bookings, hotel reservations, and visa-backed leisure itineraries.',
    heroTagline: 'Unforgettable Journeys, Seamless Travel Logistics & Curated Global Experiences',
    overview: 'Travel should be an inspiring, restorative adventure. Swisa Associates curates bespoke travel itineraries, taking complete care of flights, 4- and 5-star hotel bookings, ground transfers, travel insurance, and consular visas so you can focus on making memories.',
    iconName: 'Globe',
    departmentEmail: 'info@swisaassociates.com',
    imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=80',
    detailedSections: [
      {
        heading: 'Bespoke Itineraries for Families & Groups',
        content: 'From desert safaris in Dubai to alpine exploration in Switzerland and cultural tours across Turkey, we construct balanced itineraries tailored to your pace, dining preferences, and family requirements.'
      },
      {
        heading: 'Full Visa-Integrated Travel Logistics',
        content: 'Unlike standalone booking engines, our tour packages include guaranteed visa filing assistance, verified hotel booking vouchers acceptable to embassies, and comprehensive travel insurance.'
      },
      {
        heading: '24/7 On-Trip Concierge Support',
        content: 'Our travelers are backed by round-the-clock emergency support. If a flight changes or an emergency arises, our travel coordinators resolve it immediately.'
      }
    ],
    processSteps: [
      { step: '1', title: 'Destination Discovery', description: 'Understanding your desired style of travel, dates, and group size.' },
      { step: '2', title: 'Curated Itinerary', description: 'Designing flights, handpicked hotels, and private tours.' },
      { step: '3', title: 'Visa & Logistics Prep', description: 'Filing tourist visas and securing travel medical insurance.' },
      { step: '4', title: 'Bon Voyage Handover', description: 'Issuing detailed vouchers, guide contacts, and local SIM advice.' }
    ],
    keyBenefits: [
      'Handpicked accommodations with verified traveler reviews',
      'Integrated visa documentation guaranteed to meet consular requirements',
      'Competitive group rates and flexible installment options',
      'Dedicated travel manager reachable anytime during your trip'
    ]
  },
  {
    id: 'hajj-umrah',
    slug: 'hajj-umrah',
    title: 'Hajj & Umrah Pilgrimage Services',
    shortDesc: 'Spiritual, dignified, and hassle-free Umrah & Hajj visa processing, luxury hotel bookings near Haram, and coordinated group transit.',
    heroTagline: 'Dignified, Seamless & Transparent Sacred Journeys to Makkah & Madinah',
    overview: 'Embarking on the sacred pilgrimage of Hajj or Umrah requires peace of mind and impeccable logistical arrangements. Swisa Associates provides official Nusuk and Saudi MOFA visa processing, verified hotels within walking distance of the Holy Mosques, and dedicated ground support.',
    iconName: 'HeartHandshake',
    departmentEmail: 'mofa@swisaassociates.com',
    imageUrl: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&auto=format&fit=crop&q=80',
    detailedSections: [
      {
        heading: 'Direct Nusuk & Saudi Ministry Visa Issuance',
        content: 'We manage electronic Umrah tourist and pilgrimage visa issuance with rapid approvals, ensuring full compliance with the latest Saudi Ministry of Hajj & Umrah guidelines.'
      },
      {
        heading: 'Hotels in Makkah & Madinah Clock Towers / Haram Front',
        content: 'We provide confirmed accommodation options ranging from premium 5-star clock tower suites with direct Haram views to comfortable, verified 3- and 4-star family hotels with regular shuttle connections.'
      },
      {
        heading: 'Guided Ziyarat & VIP Ground Transport',
        content: 'Air-conditioned private coaches and high-speed Haramain train ticketing connecting Jeddah, Makkah, and Madinah, paired with respectful, knowledgeable local guides.'
      }
    ],
    processSteps: [
      { step: '1', title: 'Pilgrim Registration', description: 'Collection of passport copies, photos, and preferred travel dates.' },
      { step: '2', title: 'Nusuk Visa Generation', description: 'Direct issuance of Saudi Umrah e-visa with mandatory insurance.' },
      { step: '3', title: 'Hotel & Transport Confirmation', description: 'Confirmed hotel vouchers and Haramain railway ticketing.' },
      { step: '4', title: 'Pre-Departure Guidance', description: 'Spiritual guidelines, packing checklist, and airport reception instructions.' }
    ],
    keyBenefits: [
      'Instant electronic Umrah visa processing with official insurance',
      'Direct hotel contracts near the Holy Mosques in Makkah and Madinah',
      'VIP Haramain high-speed train ticketing between holy cities',
      'Experienced on-ground support teams stationed in the Kingdom'
    ]
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'power-utility',
    name: 'Power and Utility',
    code: 'IND-01',
    shortTag: 'High-voltage grid, power generation, substations & solar distribution',
    description: 'Supplying certified electrical engineers, high-voltage linesmen, transformer technicians, and substation operators for mega-infrastructure and renewable utility contracts across the GCC.',
    rolesSupplied: ['Electrical Site Engineers', 'HV Cable Jointers', 'Substation Technicians', 'Grid Protection Specialists'],
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'constructions',
    name: 'Constructions & Civil Infrastructure',
    code: 'IND-02',
    shortTag: 'High-rise towers, civil engineering, airports & smart cities',
    description: 'Mobilizing large-scale civil workforces including site supervisors, steel fixers, shuttering carpenters, masons, and heavy equipment operators for tier-1 contracting consortiums.',
    rolesSupplied: ['Project Civil Engineers', 'Site Foremen', 'Steel Fixers', 'Tower Crane Operators'],
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'engineering',
    name: 'Engineering & Design Consultancy',
    code: 'IND-03',
    shortTag: 'Structural, mechanical, electrical, and FEED design services',
    description: 'Recruiting degreed professionals with proficiency in CAD, Revit, Primavera, and BIM modeling for international architectural and infrastructure consultancies.',
    rolesSupplied: ['BIM / CAD Designers', 'Planning Engineers (Primavera)', 'QA/QC Inspectors', 'Structural Designers'],
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'oil-gas',
    name: 'Oil & Gas (Upstream & Downstream)',
    code: 'IND-04',
    shortTag: 'Drilling rigs, offshore platforms, pipeline networks & terminals',
    description: 'Providing rigorously vetted professionals with offshore certifications (BOSIET), ASME coding qualifications, and Aramco-approved safety credentials for drilling and extraction assets.',
    rolesSupplied: ['Petroleum Engineers', 'Rig Crews & Roustabouts', '6G Pipe Welders', 'Safety (HSE) Officers'],
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'fabrication-erection',
    name: 'Fabrication & Erection',
    code: 'IND-05',
    shortTag: 'Structural steel, pre-engineered buildings, pressure vessels & piping',
    description: 'Deploying certified fabricators, structural riggers, blast-and-paint operators, and certified welding inspectors for heavy engineering plants and shipyard yards.',
    rolesSupplied: ['Structural Fabricators', 'Pipe Fitters', 'Certified Riggers', 'Grit Blasting Specialists'],
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'air-conditioning',
    name: 'HVAC & Air Conditioning Systems',
    code: 'IND-06',
    shortTag: 'Chillers, central ventilation, ducting & district cooling plants',
    description: 'Supplying specialized technicians capable of assembling, testing, and balancing high-tonnage centrifugal chillers, air handling units, and industrial ductwork in extreme desert climates.',
    rolesSupplied: ['Chiller Technicians', 'HVAC Controls Engineers', 'Duct Fabricators', 'BMS Operators'],
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Industrial Production',
    code: 'IND-07',
    shortTag: 'Automated assembly, FMCG, plastics, and precision machinery',
    description: 'Connecting manufacturing plants with production supervisors, CNC machinists, tool-and-die makers, and packaging line operators to keep plant output operating at peak productivity.',
    rolesSupplied: ['Plant Supervisors', 'CNC / VMC Operators', 'Maintenance Millwrights', 'Production Technicians'],
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'petrochemical',
    name: 'Petrochemical Industry',
    code: 'IND-08',
    shortTag: 'Polymer plants, catalytic cracking units & chemical processing',
    description: 'Sourcing process operators, instrumentation calibration technicians, and hazardous-area certified specialists for SABIC, KNPC, and global petrochemical operators.',
    rolesSupplied: ['Chemical Process Operators', 'Instrumentation Technicians', 'DCS Controllers', 'Hazardous Materials Specialists'],
    imageUrl: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'mechanical-plumbing',
    name: 'Mechanical Plumbing & Firefighting',
    code: 'IND-09',
    shortTag: 'Hydraulic piping, NFPA fire suppression & municipal sanitation',
    description: 'Deploying commercial plumbing specialists, pump station mechanics, fire sprinkler installers, and drainage engineers for industrial complexes and commercial properties.',
    rolesSupplied: ['Master Plumbers', 'Fire Protection Technicians', 'Pump Mechanics', 'Piping Supervisors'],
    imageUrl: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'services-maintenance',
    name: 'Facility Services & Maintenance (FM)',
    code: 'IND-10',
    shortTag: 'Commercial facilities management, MEP maintenance & camp operations',
    description: 'Delivering comprehensive MEP facility maintenance crews, housekeeping supervisors, catering personnel, and emergency service technicians for large commercial installations.',
    rolesSupplied: ['MEP Supervisors', 'Multi-skilled Technicians', 'Facility Coordinators', 'Camp Administrators'],
    imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'oilfields-refineries',
    name: 'Oil Fields & Refineries',
    code: 'IND-11',
    shortTag: 'Hydrocracker units, distillation columns, storage tanks & turnarounds',
    description: 'Supplying shutdown and turnaround crews with speed and precision, providing hydro-jetters, flange management technicians, and turnaround safety observers.',
    rolesSupplied: ['Turnaround Planners', 'Hydro-jetting Operators', 'Flange Technicians', 'Refinery Operators'],
    imageUrl: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Tourism',
    code: 'IND-12',
    shortTag: '5-star luxury hotels, resorts, cruise lines & banquet operations',
    description: 'Recruiting multilingual guest relations staff, executive chefs, culinary commis, F&B service captains, and front desk concierges for world-renowned international hotel brands.',
    rolesSupplied: ['Sous Chefs & Commis', 'F&B Service Captains', 'Front Office Executives', 'Housekeeping Supervisors'],
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'medical-pharmacy',
    name: 'Medical, Healthcare & Pharmacy',
    code: 'IND-13',
    shortTag: 'Government hospitals, private clinic chains & clinical laboratories',
    description: 'Assisting healthcare networks in recruiting Dataflow-verified nurses, medical laboratory technicians, radiology technologists, and pharmacists for Gulf Ministry of Health systems.',
    rolesSupplied: ['Staff Nurses (B.Sc / GNM)', 'Medical Lab Technicians', 'Pharmacy Specialists', 'Radiology Technicians'],
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80'
  }
];

export const DESTINATION_COUNTRIES: DestinationCountry[] = [
  {
    id: 'saudi-arabia',
    name: 'Kingdom of Saudi Arabia',
    code: 'KSA',
    flightCode: 'RUH / JED',
    region: 'Gulf Cooperation Council',
    processingDays: '3–5 Business Days',
    popularVisas: ['Work Visa (Amil)', 'Family Visit Visa', 'Business Visa', 'Tourist & Umrah'],
    lat: 23.8859,
    lng: 45.0792,
    summary: 'Direct MOFA Enjaz electronic clearance and embassy stamping for Riyadh, Jeddah, and Eastern Province opportunities.',
    requirements: ['Wakala authorization', 'GAMCA / Wafid medical fit slip', 'Degree MEA & Saudi cultural attestation', 'Police Clearance (PCC)'],
    imageUrl: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'kuwait',
    name: 'State of Kuwait',
    code: 'KWT',
    flightCode: 'KWI',
    region: 'Gulf Cooperation Council',
    processingDays: '5–7 Business Days',
    popularVisas: ['Work Visa (Article 18)', 'Family Visa (Article 22)', 'Commercial Entry'],
    lat: 29.3759,
    lng: 47.9774,
    summary: 'Accredited Kuwait Embassy submission in Delhi with full biometric and PCC legalization coordination.',
    requirements: ['Original MOSAL work permit', 'PCC with MEA and Kuwait Embassy seal', 'GAMCA medical certificate', 'Original passport (2+ blank pages)'],
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'dubai-uae',
    name: 'United Arab Emirates (Dubai)',
    code: 'UAE',
    flightCode: 'DXB / AUH',
    region: 'Middle East',
    processingDays: '2–4 Business Days',
    popularVisas: ['Employment Green Visa', 'Golden Visa Advisory', '30/60 Days Tourist', 'Partner Visa'],
    lat: 25.2048,
    lng: 55.2708,
    summary: 'Fast-track electronic entry permits, MoHRE employment contract verification, and consular attestation.',
    requirements: ['High-resolution passport copy', 'Passport-size white background photo', 'Educational certificate attestation (MOFA UAE)', 'Entry permit issuance'],
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'oman',
    name: 'Sultanate of Oman',
    code: 'OMN',
    flightCode: 'MCT',
    region: 'Gulf Cooperation Council',
    processingDays: '4–6 Business Days',
    popularVisas: ['Employment Visa', 'Investor Visa', 'Express Tourist Visa', 'Family Joining'],
    lat: 21.4735,
    lng: 55.9754,
    summary: 'Royal Oman Police (ROP) electronic work permit validation and consular attestation support.',
    requirements: ['ROP Visa clearance notice', 'Wafid medical examination report', 'PCC clearance', 'Attested qualification certificates'],
    imageUrl: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'canada',
    name: 'Canada',
    code: 'CAN',
    flightCode: 'YYZ / YVR',
    region: 'North America',
    processingDays: '3–6 Weeks (Category dependent)',
    popularVisas: ['Express Entry PR', 'Provincial Nominee (PNP)', 'Study Permit', 'LMIA Work Permit'],
    lat: 56.1304,
    lng: -106.3468,
    summary: 'Complete legal assistance with CRS optimization, ECA evaluation, and IRCC consular submissions.',
    requirements: ['WES / IQAS educational credential assessment', 'IELTS / CELPIP score sheet', 'Biometrics & medical examination', 'Verifiable settlement funds'],
    imageUrl: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'united-kingdom',
    name: 'United Kingdom',
    code: 'GBR',
    flightCode: 'LHR / MAN',
    region: 'Europe',
    processingDays: '15 Business Days',
    popularVisas: ['Skilled Worker Visa (CoS)', 'Health & Care Visa', 'Student Route', 'Standard Visitor'],
    lat: 55.3781,
    lng: -3.4360,
    summary: 'Points-based system advice, Certificate of Sponsorship (CoS) verification, and VFS biometric appointment guidance.',
    requirements: ['Valid Certificate of Sponsorship (CoS)', 'UKVI approved TB test certificate', 'English language proficiency (SELT)', 'Maintenance funds bank statement'],
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'australia',
    name: 'Australia',
    code: 'AUS',
    flightCode: 'SYD / MEL',
    region: 'Oceania',
    processingDays: '4–8 Weeks',
    popularVisas: ['Subclass 189 / 190 PR', 'Subclass 482 TSS Work', 'Subclass 500 Student', 'Visitor 600'],
    lat: -25.2744,
    lng: 133.7751,
    summary: 'Comprehensive skills assessment (Engineers Australia, ACS, TRA) and Department of Home Affairs filings.',
    requirements: ['Positive skills assessment outcome', 'PTE / IELTS academic or general scorecard', 'Department of Home Affairs EOI filing', 'Health check (HAP ID)'],
    imageUrl: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'france',
    name: 'France (Schengen)',
    code: 'FRA',
    flightCode: 'CDG',
    region: 'European Union',
    processingDays: '10–15 Business Days',
    popularVisas: ['Short-Stay Schengen (Business/Tourism)', 'Talent Passport', 'Long-Stay Student'],
    lat: 46.2276,
    lng: 2.2137,
    summary: 'Schengen zone visa processing with verified travel insurance, cover letter formulation, and VFS slots.',
    requirements: ['Confirmed flight itinerary & hotel vouchers', '3-year ITR & 6-month bank statements', 'Overseas travel insurance (€30,000 minimum)', 'Employer leave sanction letter'],
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'germany',
    name: 'Germany (Schengen)',
    code: 'DEU',
    flightCode: 'FRA / MUC',
    region: 'European Union',
    processingDays: '15 Business Days',
    popularVisas: ['EU Blue Card', 'Opportunity Card (Chancenkarte)', 'Business Visa', 'National Student'],
    lat: 51.1657,
    lng: 10.4515,
    summary: 'Opportunity Card point calculation, ZAB degree recognition, and consular appointment booking.',
    requirements: ['Anabin / ZAB statement of comparability', 'Blocked account or employment contract', 'Consular biometric appointment', 'Schengen medical insurance'],
    imageUrl: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&auto=format&fit=crop&q=80'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Alex Sam Martin',
    role: 'Managing Director & Strategic Lead',
    badge: 'LEADERSHIP',
    bio: 'Guiding Swisa Associates for over 12 years, Alex spearheads government relations, international bilateral partnerships, and enterprise corporate recruitment strategy across the Gulf and Europe.',
    experience: '15+ Years International Mobility'
  },
  {
    name: 'David Coper',
    role: 'Senior Consular & Embassy Operations Officer',
    badge: 'CONSULAR DESK',
    bio: 'Oversees daily physical dossier lodgements with the Saudi Royal Embassy, Embassy of Kuwait, and European consulates in New Delhi, ensuring pristine document accuracy.',
    experience: '12+ Years Embassy Protocol'
  },
  {
    name: 'Melika Fonals',
    role: 'Global Manpower & Placement Agent',
    badge: 'RECRUITMENT',
    bio: 'Coordinates our 200+ partner network across India, orchestrating trade testing, medical fitness clearances, and overseas passenger mobilization for industrial clients.',
    experience: '10+ Years Workforce Logistics'
  }
];

export const FAQ_DATA = [
  {
    q: 'How long does Saudi Visa Stamping take through Swisa Associates?',
    a: 'Normal processing through the Royal Embassy of Saudi Arabia in New Delhi takes approximately 3 to 5 business days once the electronic Wakala, GAMCA medical fit slip, and police clearance (PCC) are lodged. We offer express tracking and daily status updates.'
  },
  {
    q: 'What is a Wakala and why is it needed for Saudi visas?',
    a: 'A Wakala is an electronic Power of Attorney issued by the Saudi Ministry of Foreign Affairs (MOFA) through your Saudi employer or sponsor authorizing Swisa Associates as an accredited visa agency in New Delhi to lodge your passport on their behalf.'
  },
  {
    q: 'What is GAMCA / Wafid medical testing, and is it mandatory?',
    a: 'Yes, all foreign applicants traveling to GCC countries (Saudi Arabia, Kuwait, Oman, Bahrain, UAE) on employment or long-term residence visas must obtain a "Fit" report from an authorized GAMCA (now known as Wafid) medical center.'
  },
  {
    q: 'How do you handle document attestation for foreign countries?',
    a: 'We manage the full chain: State HRD / Home Department verification → Ministry of External Affairs (MEA) Apostille or Central Stamp → destination Embassy legalization. Dossiers are tracked with insured handling.'
  },
  {
    q: 'What if my visa application receives an embassy query or delay?',
    a: 'Our consular officers physically visit embassy counters and contact consular attaches directly to clarify discrepancies, update employer registrations, or submit supplemental documents within 24 hours.'
  },
  {
    q: 'Can corporate clients hire entire project teams through Swisa Associates?',
    a: 'Yes. Over our 12+ years, we have mobilized full turnkey workforces (up to 300+ tradesmen and engineers at once) with certified trade testing, medicals, tickets, and POE clearance.'
  }
];
