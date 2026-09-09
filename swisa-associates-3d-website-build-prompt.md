# Build Prompt: Swisa Associates — Immersive 3D Website

Use this document as a complete build brief for an AI coding agent (or human dev team) to generate a modern, fully 3D-enhanced marketing website for **Swisa Associates**, a Delhi-based visa stamping, immigration, manpower, and travel consultancy. Follow it section by section. Where a decision isn't specified, make the most opinionated choice consistent with the design system below rather than defaulting to generic patterns.

---

## 1. Project Overview

**Company:** Swisa Associates
**Industry:** Visa stamping (Saudi Arabia, Kuwait), immigration consultancy, manpower/recruitment services, document attestation, air ticketing, tour & travel
**Location:** 53, Third Floor, Bharat Nagar, New Friends Colony, New Delhi-110025
**Experience:** 12+ years in the field, 1500+ clients served, 990+ projects completed, 8-person team, 200+ agent network
**Primary audience:** Job-seekers and families applying for Gulf work/family visas, HR/procurement managers sourcing manpower for industrial projects, and individuals/groups booking travel or pilgrimage services
**Primary goal of the site:** Build immediate trust and credibility, communicate global reach and mobility, and convert visitors into WhatsApp/phone/form inquiries as fast as possible

**Core creative concept:** The entire site is built around the emotional register of *departure* — passports, boarding passes, visa stamps, flight paths across a globe, and the moment a plane leaves the runway. Every 3D element should reinforce this metaphor rather than being generic decoration. Do not use generic "floating abstract shapes" or stock low-poly mountains — every 3D object must be traceable to something concrete in the company's actual work (a plane, a passport, a visa stamp, a globe with flight arcs, a boarding pass, a skyline silhouette of a destination country).

---

## 2. Design System

### 2.1 Color Palette
Use these as CSS custom properties. Do not substitute a warm-cream/terracotta palette or a near-black/neon-accent palette — both are overused AI-generated defaults and do not fit this brand.

```css
:root {
  --sky-ink: #0B2545;      /* primary background — deep dusk/high-altitude navy */
  --sky-ink-deep: #071A33; /* darker variant for depth/gradients in 3D scenes */
  --brass: #C89B3C;        /* primary accent — visa-stamp foil / passport gold */
  --brass-soft: #E0BE72;   /* hover/lighter accent state */
  --cloud: #F5F4EF;        /* light surface background, cool off-white, NOT warm cream */
  --dune: #D8C7A1;         /* secondary accent — desert sand, used sparingly for Gulf-destination sections */
  --ink: #10161F;          /* primary text on light surfaces, near-black but not pure black */
  --ink-soft: #4A5568;     /* secondary/muted text */
  --whatsapp-green: #25D366; /* reserved ONLY for WhatsApp button/elements — never used decoratively elsewhere */
  --line: rgba(200, 155, 60, 0.25); /* hairline dividers, brass-tinted, low opacity */
}
```

Usage rules:
- Dark sections (hero, footer, full-bleed 3D globe section) use `--sky-ink` as background with `--cloud` text and `--brass` accents.
- Light sections (service detail, about, industries) use `--cloud` as background with `--ink` text and `--brass` accents.
- `--dune` is used only in sections referencing specific Gulf destinations (country cards, Saudi/Kuwait service pages) — not globally.
- `--whatsapp-green` appears **only** on the WhatsApp button/icon itself. Never use it for other CTAs, links, or decoration — this keeps it instantly recognizable and prevents color dilution.

### 2.2 Typography
```css
--font-display: 'Space Grotesk', sans-serif;   /* headlines — geometric, technical, departure-board character */
--font-body: 'Inter', sans-serif;              /* body copy, UI text */
--font-mono: 'JetBrains Mono', monospace;      /* stat numbers, flight-number-style labels, form field labels, boarding-pass details */
```

Rules:
- Load via Google Fonts or self-hosted variable fonts.
- Type scale (desktop): H1 `clamp(2.75rem, 5vw, 4.5rem)` / H2 `clamp(2rem, 3.5vw, 3rem)` / H3 `1.5rem` / body `1.0625rem` / small `0.875rem`. Tighten line-height on display type (1.05–1.15), give body text 1.6 line-height.
- Line length: cap body paragraphs at ~72 characters.
- Do NOT: put a single word of every headline in italic/color for "accent"; do NOT use ALL-CAPS tracked-out eyebrows above every section (use them only on the homepage sections where the original IA already has a label like "WHO WE ARE" — keep those specific, don't invent new ones elsewhere); do NOT append arrows (→) to every button/link automatically — only use an arrow where it indicates real forward navigation (e.g., "Continue to application" not "Learn more →").
- Numbered markers (01/02/03/04) are used **only** for the genuinely sequential "4 Steps to Your Visa" process. Do not add numbering to the services grid, industries grid, or team section — those are not sequences.

### 2.3 Layout System — "Boarding Pass" Motif
- **Grid:** 12-column, max content width 1280px, generous 96–140px vertical rhythm between sections on desktop, collapsing to 56–72px on mobile.
- **Alignment:** Left-align all text blocks and headlines (not centered) — this reflects a boarding-pass/document layout rather than a centered marketing template.
- **Ticket-stub cards:** Service cards, industry cards, and team cards use a "torn ticket stub" visual treatment — a subtle perforated/dashed edge on one side (achievable via a repeating dashed border or an SVG mask), a small circular cutout notch top-left and bottom-left (like a real ticket stub), and a thin brass hairline divider inside the card separating an "icon/number zone" from a "content zone."
- **Flight path connector:** A single continuous dotted/dashed curved line (SVG or WebGL-rendered) visually threads from the hero through the services section, connecting each service "stop" like a route line on a flight map. This is the one signature structural device of the site — do not repeat it as decoration elsewhere.
- **Hero layout:** Asymmetric split — left 45% headline + subhead + dual CTA (Free Visa Enquiry / WhatsApp Us), right 55% full 3D scene (plane + globe, see Section 3).
- **Footer:** Styled as a "runway strip" — a dark navy section with a thin dashed horizontal line motif (like runway markings) separating the footer nav columns.

### 2.4 Motion Principles
- One orchestrated moment per page, not scattered hover effects everywhere.
- Homepage: on load, the 3D plane animates in from off-screen, banks, and settles into a looping flight path around the globe — this is the signature moment. Do not also add fade-slide-up animations to every subsequent section; let sections appear with a single subtle fade (200–300ms) as they enter viewport, nothing more elaborate.
- Scroll-linked motion: as the user scrolls past the hero, the 3D scene should subtly parallax/rotate in response to scroll position (not mouse position) so it feels connected to the page, not just a video loop.
- All non-essential motion must respect `prefers-reduced-motion`: when set, disable the looping plane animation, camera drift, and parallax — replace with a single static hero illustration/render frame.
- Hover states: buttons and cards get a restrained transform (2–4px lift, brass border brightening) — no bouncing, no scale-up-and-glow effects.

---

## 3. 3D Elements — Technical Specification

### 3.1 Stack
- **Renderer:** Three.js via **React Three Fiber** (if the site is React/Next.js) with **@react-three/drei** for helpers (OrbitControls disabled for user camera control on marketing pages — camera should be scripted/locked, not draggable, to keep the experience controlled and performant).
- **Scroll-linking:** GSAP ScrollTrigger or Framer Motion's `useScroll`, driving 3D object position/rotation/camera FOV as the user scrolls.
- **Models:** Low-poly, stylized (not photorealistic) glTF/GLB models — this keeps file size small and fits a clean, confident brand feel rather than trying to be a flight simulator. Style reference: flat-shaded or soft-gradient-shaded low-poly, brass/navy/cloud color palette applied to the models themselves so they feel native to the brand rather than generic stock 3D assets.
- **Fallback:** On low-power devices / when WebGL is unavailable, detect via feature check and serve a pre-rendered high-quality static image or a lightweight Lottie/CSS animation of the same scene instead of blocking render or showing a broken canvas.
- **Performance budget:** Total 3D asset payload under 3–4MB per page; lazy-load 3D canvases below the fold (only the hero 3D scene loads eagerly); use `<Suspense>` with a branded loading state (see Section 3.6).

### 3.2 Homepage Hero — "Departure" Scene
The signature 3D moment of the entire site.
- A stylized low-poly commercial jet, banking and flying in a slow, continuous elliptical path around a minimalist 3D globe (globe rendered as a translucent wireframe sphere in brass over navy, with subtle glowing dotted arcs marking the 9 destination countries: Saudi Arabia, Dubai, Oman, Kuwait, Canada, UK, Australia, France, Germany).
- As the plane passes near each destination arc, a small pulsing dot lights up briefly (ambient detail, not clickable).
- Camera is fixed at a three-quarter angle, slowly drifting in on page load (2–3 second ease-in), then settling into the idle loop.
- Scroll interaction: as the user scrolls down past the hero, the globe scales down and moves toward the top-right corner, becoming a persistent small "orbiting" element that stays subtly visible/pinned near the nav for the next 1–2 sections before fading out — visually suggesting "your journey continues as you explore."

### 3.3 Country Section — "Choose Your Country" 3D Map
- Replace the flat country-flag grid with a stylized 3D low-poly world map/terrain (not a literal globe this time — a flattened isometric-style relief map) with the 9 destination countries rendered as raised, brass-highlighted landmasses.
- On hover/tap of a country landmass, it lifts slightly (8–12px), a thin dotted flight-path arc draws itself from Delhi (marked with a small plane icon as the origin point) to that country, and a card slides up showing the country name + relevant visa CTA.
- Mobile: convert to a horizontally swipeable carousel of individual country cards, each with a small static 3D-rendered isometric icon (pre-rendered image, not live WebGL, to protect mobile performance) instead of the full interactive map.

### 3.4 Service Pages — "Passport Stamp" Micro-Interaction
- Each individual service page (Saudi Visa Stamping, Kuwait Visa Stamping, Air Ticketing, Manpower, Document Attestation, Immigration, Visa Stamping, Tour & Travel) opens with a small 3D hero moment specific to that service:
  - **Saudi/Kuwait Visa Stamping:** a 3D passport model that flips open and a brass visa-stamp object animates down and "stamps" the page (a satisfying single squash-and-settle motion, triggered once on page load, not looping).
  - **Air Ticketing:** the same low-poly plane model from the homepage, now shown taking off from a small stylized runway strip, camera tracking alongside it briefly before it exits frame — a boarding pass card 3D-flips into view below.
  - **Manpower Services:** a set of small abstract low-poly figures/silhouettes arranged in a subtle formation (representing workforce) with a soft brass connecting-line network between them, gently rotating.
  - **Document Attestation:** a stack of 3D document/paper sheets with a wax-seal/stamp brass object that presses down onto the top sheet on load.
  - **Immigration Services:** a 3D globe fragment with a single glowing path leading to a stylized open door/gateway shape.
  - **Tour & Travel:** a simplified 3D landscape silhouette (mountains/coastline/desert, non-specific/abstract, avoiding any single real monument) with the plane model flying past.
- Each of these is a **single triggered moment on scroll-into-view or page load**, not a continuous ambient animation — keep it calm once settled, so it doesn't distract from reading the service copy.

### 3.5 Cultural/Religious Sensitivity Note
The site references Hajj & Umrah services and Saudi Arabia. Do **not** render any 3D depiction of the Kaaba, Masjid al-Haram, or any specific religious site/monument — this is inappropriate for a generic stylized 3D asset and could read as disrespectful if rendered in a cartoonish low-poly style. For the Saudi Arabia country card and any Hajj/Umrah-related section, use respectful, non-iconographic visual cues instead (a stylized geometric pattern motif inspired by Islamic geometric art, a plane/passport motif, or simply typography and the brass/navy palette) rather than a 3D model of a holy site.

### 3.6 Loading States
- Branded loading state for all `<Suspense>` boundaries: a minimal animated brass boarding-pass ticket icon with a subtle pulse, plus a one-line status label in `--font-mono` (e.g., "Preparing your route…"). No generic spinner.
- Never show a blank/white flash while 3D assets load — always show the branded loading state or a low-res placeholder image (LQIP) of the scene.

---

## 4. WhatsApp Integration (Site-Wide)

WhatsApp must be the most persistent, frictionless contact method across the entire site.

1. **Floating WhatsApp button:** Fixed position, bottom-right corner, on every single page (including all service subpages), always visible while scrolling, above all other content (highest z-index). Circular button, `--whatsapp-green` background, white WhatsApp glyph icon, subtle idle pulse ring animation (slow, non-distracting, respects `prefers-reduced-motion`). On click, opens `https://wa.me/[COMPANY_WHATSAPP_NUMBER]` with a pre-filled message relevant to context if possible (e.g., on the Kuwait Visa page, pre-fill "Hi, I'd like to know more about Kuwait Visa Stamping services").
   - **Action item:** the current site links to `wa.me/97853`, which is an invalid/incomplete number — get the correct full WhatsApp Business number (with country code) from the client before launch.
2. **Header WhatsApp CTA:** Alongside the phone number in the top utility bar, add a small WhatsApp icon + "Chat with us" label, same click behavior as above.
3. **Hero section CTA:** Every hero across the site (homepage and all service pages) includes a secondary button "Chat on WhatsApp" next to the primary CTA (e.g., "Free Visa Enquiry").
4. **Contact page:** WhatsApp is offered as a prominent alternative alongside the contact form and phone numbers — e.g., a "Prefer WhatsApp? Message us directly" card with the same button treatment.
5. **Footer:** WhatsApp icon included alongside the other social icons in the "Get In Touch" column, and it should be the visually most prominent of the social icons (correct brand color vs. the monochrome/outline treatment used for Facebook/Instagram/Twitter/LinkedIn).
6. **Service detail pages:** End each service page with a closing CTA band: "[Service name] questions? Get a same-day answer on WhatsApp" — reinforces urgency and speed.

---

## 5. Full Sitemap & Page-by-Page Content Brief

Use the actual company content already extracted (see the companion file `swisa-associates-full-content-scrape.md` for full source copy) as the factual basis for every page. Do not invent new services, stats, or claims. Where the existing copy is duplicated/garbled/thin (flagged in that document's Section 15), rewrite it in clean, non-repetitive language that preserves the same facts and tone, following the writing principles in Section 6 below.

### 5.1 Home (`/`)
- Nav (sticky, transparent-over-hero transitioning to solid navy on scroll)
- Hero: "Departure" 3D scene (3.2) + headline + subhead + dual CTA (Free Visa Enquiry / WhatsApp Us)
- Trust bar: 1500+ Clients · 990+ Projects · 8+ Team Members · 12+ Years — styled as a boarding-pass stub strip, `--font-mono` for numbers
- "Choose Your Visa Type" — ticket-stub card grid: Visitor / Family / Work Permit / Student / Business / Personal / Freelance / Migrate Visa (icon + label, link to relevant service or a general enquiry anchor)
- "Welcome to Swisa Associates" — company intro paragraph (rewritten, non-duplicated) + "12+ Years of Experience" sub-block
- "Immigration Services from Experienced Agents" — Job Visa / Business Visa / Student Visa / Free Visa Enquiry as four distinct, non-duplicated blurbs (this requires writing 4 actually-different short paragraphs, since the source content repeats the same two blurbs across all four — see Section 6)
- "Choose Your Country" — 3D map section (3.3)
- "Visa Categories We Handle" — Employment Work Visa / Diplomatic Official Visa / Family Visa / Visit Visa, sequential numbering (01–04) is appropriate here since the original treats it as a stepped list — but only if the final copy still frames it as a sequence; otherwise drop the numbering
- Air Ticketing feature callout (short, links to full service page)
- "Industries We Serve" — full 13-industry ticket-stub grid, linking to `/industries`
- "4 Steps to Your Visa" — Complete Online Form → Documents & Payment → Direct Interview → Receive Visa (numbered, genuinely sequential, use this as the site's other 3D moment: a small 3D boarding-pass or stamp icon advances/lights up at each step as the user scrolls through this section)
- Services grid — Kuwait Visa Stamping / Immigration Services / Visa Stamping Services / Document Attestation / Hajj & Umrah / Tour & Travel — each linking to its full page (fix the nav/footer inconsistency flagged earlier: Hajj & Umrah should get a proper URL and be added consistently to nav + footer, or clearly folded under an existing service if the client prefers not to list it separately)
- Manpower Services band (rewritten, de-duplicated single paragraph, not three repetitions of "manpower services")
- Client logos strip (get real client names/logos from the business — do not reuse the generic "our client 6.png"-style files)
- Team section — Director / Officer / Agent cards (verify these are the real current team before launch; if not, replace with actual staff)
- Footer (Section 7)

### 5.2 About Us (`/about`)
The current site has no real unique About Us content — this page needs new copy, still following the brief:
- Company story: when founded, how it grew to 12+ years, what the "Swisa Associates" name/mission stands for
- Mission/values block
- Reuse of the trust-stat bar (1500+/990+/8+/12+)
- "Why choose us" — 3–4 concrete differentiators (e.g., direct embassy partnerships, dedicated consultants, 24-hour enquiry response as mentioned on Contact page)
- Team section (can be the fuller version of the homepage team cards, with individual bios if available)
- CTA band to Contact/WhatsApp

### 5.3 Services (`/services`) — overview + 8 subpages
Overview page: services grid linking out to each subpage (same 6–8 services as footer/nav, made consistent).

Each subpage (`/services/saudi-visa-stamping`, `/services/kuwait-visa-stamping`, `/services/air-ticketing`, `/services/manpower-services`, `/services/document-attestation`, `/services/immigration-services`, `/services/visa-stamping-services`, `/services/tour-travel-services`) follows the same template:
- Service-specific 3D hero moment (3.4)
- Full body copy (use the real extracted copy, lightly cleaned of the duplication/typos flagged earlier — e.g., fix "USwisa Associates" typo, remove the duplicated paragraph on the Immigration Services page, convert Visa Stamping Services from third-person to first-person to match the rest)
- Where the source content includes a numbered process (Kuwait Visa Stamping's 5-step list: Document Verification / Application Assistance / Appointment Scheduling / Submission & Collection / Follow-up & Support), render it as a clean numbered step list, not a wall of text
- Closing WhatsApp CTA band (Section 4.6)
- Related services cross-links (3 cards)

### 5.4 Industries (`/industries`)
Currently just a repeated list with no descriptions — expand with a real 2–3 sentence description per industry (Power & Utility, Constructions, Engineering, Oil & Gas, Fabrication & Erection, Air Conditioning, Manufacturing, Petrochemical, Mechanical Plumbing, Services & Maintenance, Oil Fields & Refineries, Hospitality, Medical & Pharmacy), explaining what manpower/visa support Swisa Associates provides for that sector specifically. Ticket-stub card grid, same visual system as homepage.

### 5.5 Our Clients (`/our-clients`)
Currently just a logo grid — get real client names and (with permission) short testimonial quotes or case-study snippets from the business to add substance. Logo grid styled as a clean, evenly-spaced trust wall; if no testimonials are available at launch, keep the page focused and honest rather than inventing quotes.

### 5.6 Contact (`/contact`)
- "Contact Us" intro + 24-hour response promise (from existing copy)
- Address, phone numbers, and **all six** email addresses surfaced clearly — the current site hides 4 department emails (mofa@, jobs@, visa@, emigration@swisaassociates.com) only on this page; present them as a clean department directory (General / MOFA / Jobs / Visa / Emigration) so visitors reach the right team faster
- Contact form: Name, Email, Phone, Message, subject/department dropdown (optional improvement over the current single generic form)
- "Prefer WhatsApp?" card (Section 4.4)
- Embedded map of the New Delhi office location
- Footer

### 5.7 Additional pages referenced in the footer but missing on the current site — build these out properly rather than leaving them as `#` placeholders:
- **Gallery** (`/gallery`) — photos of the office, team, and/or client success moments if available
- **Privacy Policy** (`/privacy-policy`) — standard policy content (data handling, form submissions, WhatsApp contact consent)
- **Support** (`/support`) — FAQ-adjacent page or redirect to Contact/WhatsApp
- **FAQ** (`/faq`) — answer common visa/manpower/travel questions (processing times, required documents, etc. — gather real answers from the client)

---

## 6. Copywriting Rules for This Rebuild

Apply these when rewriting any of the flagged duplicated/thin content:
- Write from the applicant's/client's perspective: what they need to know and do next, not just what the company is proud of.
- Every service page should answer, in order: what the service is, who it's for, what the process looks like, why choose Swisa Associates specifically for it, and what to do next (CTA).
- Never repeat the same paragraph twice on one page (fix the Immigration Services page duplication).
- Keep first-person "we/our" voice consistent across all service pages (fix the third-person Visa Stamping Services page).
- Where four items are presented as distinct (e.g., Job Visa / Business Visa / Student Visa / Free Visa Enquiry), each must have genuinely distinct copy — do not reuse one blurb for two different labeled items.
- Avoid generic filler like "seamless," "hassle-free," and "world-class" appearing more than once or twice sitewide — vary the language.
- CTAs are active and specific: "Get your Saudi visa started" rather than "Learn more"; "Chat on WhatsApp" rather than "Contact us."

---

## 7. Global Components

### 7.1 Navigation
- Logo (left) — Home / About Us / Services (dropdown, 8 items) / Industries / Our Clients / Contact Us (right)
- Utility bar above/beside nav: phone number + WhatsApp chat link + social icons
- Mobile: hamburger menu with full-screen overlay nav, WhatsApp floating button remains visible even with menu open

### 7.2 Footer ("Runway Strip")
- Dark navy background, dashed horizontal divider motif
- Company blurb (rewritten, concise)
- Social icons (real working links — fix the current `<>` placeholder links), WhatsApp icon visually distinct in brand green
- Navigation column: About Us / Contact Us / Gallery / Our Clients / Privacy Policy / Support / FAQ
- Services column: all 8 services, consistent with nav dropdown (fix the Hajj & Umrah inconsistency)
- Get In Touch column: address, both phone numbers, all relevant email addresses, embedded WhatsApp CTA
- Copyright line, current year

### 7.3 Forms
- Consistent styling across Contact page and any "Free Visa Enquiry" modal/section: Name, Email, Phone, Message minimum; department/service dropdown where relevant
- Clear success/error states in the interface's voice (e.g., "Message sent — we'll respond within 24 hours" / "Something went wrong — try again or message us on WhatsApp" with the WhatsApp button offered directly in the error state)

---

## 8. Technical & Accessibility Requirements
- Fully responsive: desktop, tablet, and mobile — all 3D scenes must have a defined mobile behavior (simplified/static fallback per Section 3), not just a scaled-down version of the desktop canvas.
- Visible keyboard focus states on all interactive elements, including custom 3D-adjacent UI (buttons over the 3D scenes).
- `prefers-reduced-motion` respected sitewide (Section 2.4).
- Performance: Lighthouse performance score target 85+ on mobile despite the 3D content — achieved via lazy-loading below-the-fold 3D, compressed low-poly assets, and static-image fallbacks (Section 3.1, 3.6).
- SEO: clean semantic URLs (no spaces/commas in paths — replace the current `SAUDI VISA STAMPING,2.php`-style URLs with `/services/saudi-visa-stamping`), proper meta titles/descriptions per page, alt text on all images including 3D scene fallback images.
- WCAG AA color contrast maintained between text and background colors in the palette above (verify `--ink-soft` on `--cloud` and `--cloud` on `--sky-ink` meet 4.5:1 for body text).

---

## 9. What NOT to Do
- Do not use a warm cream + terracotta palette, or a near-black + neon-accent palette — both are generic AI-design defaults that don't fit this brand.
- Do not add floating abstract 3D shapes/blobs unrelated to the aviation/passport/visa concept.
- Do not depict any specific religious site or monument in 3D (Section 3.5).
- Do not add ALL-CAPS tracked eyebrow labels above every section, numbered markers on non-sequential content, or `→` arrows on every link.
- Do not leave the footer's Gallery/Privacy Policy/Support/FAQ links pointing to `#` — build real pages or remove the links.
- Do not invent client testimonials, team bios, or statistics not present in the source content or provided by the client.
- Do not make WhatsApp one option among many equally-weighted contact methods — it should be visually the fastest, most obvious path to contact on every page, per Section 4.

---

## 10. Deliverable Checklist
- [ ] Design token system implemented as CSS variables (Section 2)
- [ ] 3D hero scene on homepage with scroll-linked behavior (3.2)
- [ ] 3D country map section (3.3)
- [ ] Unique 3D micro-interaction on all 8 service pages (3.4)
- [ ] Mobile fallbacks for every 3D element (3.1, 3.3)
- [ ] `prefers-reduced-motion` support verified
- [ ] Floating WhatsApp button on all pages + contextual WhatsApp CTAs sitewide (Section 4)
- [ ] All pages in Section 5 built, including the previously-missing Gallery/Privacy Policy/Support/FAQ
- [ ] All flagged content issues (duplication, typos, inconsistent voice, broken links, hidden emails) resolved
- [ ] Clean semantic URL structure sitewide
- [ ] Lighthouse mobile performance 85+
- [ ] Real client logos/testimonials, real team info, and correct WhatsApp number confirmed with the client before launch
