# Implementation Plan — ELOQVENT 2K26 Official Event Website

A high-performance, editorial, and deeply engaging official web platform for **ELOQVENT 2K26** featuring dual-track experiences (**ELOCUTION** & **INNOVEX**), interactive design-thinking timelines, eligibility check widget, evaluation rubrics, multi-step registration portal with mock API integration hooks, and responsive design adhering strictly to the PRD specifications.

---

## User Review Required

> [!IMPORTANT]
> - **Zero Fabricated Event Data**: All unconfirmed details (dates, times, venue locations, organizer names, contact details, exact scoring percentage breakdowns) strictly utilize the official `[TO BE PROVIDED]` placeholder or designated status badges as instructed by the PRD.
> - **Architecture Choice**: Built with **React 18 + Vite + TypeScript + React Router DOM + Lucide Icons + Custom Modern Design System (Vanilla CSS / CSS Variables)** for maximum performance, crisp typography, clean responsive layouts, and zero heavy bloated framework lock-in.

---

## Technical & Design Direction

### 1. Visual Identity & Brand System
- **Core Themes**: Communication, Innovation, Human-Centred Design, Social Impact, Entrepreneurship, Sustainability.
- **Aesthetic**: Modern, bold, editorial, youth-inspired, high-contrast dark theme with curated accent palettes:
  - *Elocution Accent*: Electric Cobalt & Royal Azure (`#38bdf8`, `#2563eb`) representing voice, articulation, and clarity.
  - *Innovex Accent*: Cyber Emerald & Neon Lime (`#10b981`, `#059669`) representing growth, innovation, sustainability, and human impact.
  - *Neutrals*: Deep charcoal canvas (`#0b0f17`, `#111827`, `#1e293b`), crisp typography (`#f8fafc`), subtle borders (`#334155`), and elevated surface cards (`#161f30`).
- **Typography**: `Plus Jakarta Sans` / `Inter` for ultra-clean UI, `Syne` / `Cabinet Grotesk` for bold editorial titles, and `JetBrains Mono` for badges, tags, and phase markers.
- **Motion & Micro-interactions**: Smooth layout transitions, horizontal scrollable steps for desktop with vertical mobile adaptation, active accordion physics, and reduced-motion support.

---

## Information Architecture & Pages

| Route | Page | Key Content & Features |
|---|---|---|
| `/` | **Home** | Editorial Hero ("Two Tracks. One Experience."), Track Highlights, The 7-Step Innovex Teaser, The 6-Phase Elocution Teaser, Stats/Key Pillars, Quick Schedule Snapshot, Sticky Registration CTA. |
| `/about` | **About** | Vision, Philosophy of Expression & Social Innovation, Why ELOQVENT 2K26, Impact Manifesto, Organizers & Institutional Context. |
| `/tracks` | **Tracks Overview** | Side-by-side comparative matrix of Elocution vs. Innovex, Track selection helper, Who should apply to which track. |
| `/elocution` | **Elocution Track** | 6-Phase progression (Inauguration to Final Assessment), 6 core pillars (Public speaking, Articulation, Critical thinking, Debate, Storytelling, Persuasive communication), Guidelines & speech format. |
| `/innovex` | **Innovex Track** | 5 Core Challenge Themes (Healthcare, Sustainable Agriculture, Water & Sanitation, Waste Management & Circular Economy, Inclusive Learning), 11-step innovation pipeline (Empathy to Final Pitch), Deliverables. |
| `/journey` | **Interactive Journey** | Unified interactive timeline toggleable between Innovex (7-Step Human-Centred Flow) and Elocution (6-Phase Growth Track) with detailed deliverables and method toolkits. |
| `/evaluation` | **Evaluation & Rubrics** | Distinct evaluation cards for both tracks, judging pillars, scoring criteria grid (`SCORING DETAILS — TO BE PROVIDED` status). |
| `/eligibility` | **Eligibility & Rules** | Eligibility requirements, team composition rules, code of conduct, plus an **Interactive Eligibility Verification Widget**. |
| `/schedule` | **Event Schedule** | Day 1 & Day 2 chronological program, track-specific breakdown, filter by track/all, timing indicators (`[TIME TO BE PROVIDED]`). |
| `/faq` | **FAQ** | Categorized accordion FAQ (General, Innovex, Elocution, Submissions, Logistics) with instant search filtering. |
| `/register` | **Registration Portal** | Track selection, multi-step dynamic form (Individual / Team), field validation, local draft backup, submission summary with mock reference pass generation & backend integration hook. |
| `/contact` | **Contact & Venue** | Contact coordinators (`[ORGANIZER NAME]`, `[EMAIL TO BE PROVIDED]`, `[PHONE TO BE PROVIDED]`), Venue guidance (`[VENUE TO BE PROVIDED]`), Inquiry submission form. |

---

## Proposed Project Structure

```
ELOQVENT2.0/
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
│   ├── favicon.svg
│   └── og-image.png
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── types/
    │   └── index.ts                 # Shared TypeScript interfaces (Tracks, Phases, FAQ, Registration, etc.)
    ├── data/
    │   ├── eventData.ts             # Static structured content for tracks, themes, phases, schedule, FAQ
    │   └── eligibilityRules.ts      # Eligibility criteria & checker rule logic
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx           # Responsive navigation with desktop & mobile drawer
    │   │   ├── Footer.tsx           # Full sitemap footer with metadata and placeholders
    │   │   └── PageHeader.tsx       # Standardized editorial hero header for inner pages
    │   ├── common/
    │   │   ├── Badge.tsx            # Tag and pill components
    │   │   ├── Button.tsx           # Reusable accessible button system
    │   │   ├── PlaceholderTag.tsx   # Consistent styled [TO BE PROVIDED] indicator
    │   │   └── SectionHeading.tsx   # Editorial section headers with subheads
    │   ├── home/
    │   │   ├── Hero.tsx             # Bold hero with dual track teaser & quick badges
    │   │   ├── TrackComparison.tsx  # Interactive dual track split section
    │   │   ├── InnovexJourneyTeaser.tsx # 7-step visual snapshot
    │   │   ├── ElocutionPhasesTeaser.tsx # 6-phase journey preview
    │   │   ├── KeyStats.tsx         # Event pillars & ethos
    │   │   └── HomeCTA.tsx          # High-conversion registration callout
    │   ├── tracks/
    │   │   ├── TrackCard.tsx        # Track presentation cards
    │   │   ├── ThemeCard.tsx        # 5 Innovex themes card grid
    │   │   └── PhaseTimeline.tsx    # Interactive horizontal/vertical step timeline
    │   ├── evaluation/
    │   │   └── EvaluationGrid.tsx   # Rubric scoring & judging criteria cards
    │   ├── schedule/
    │   │   └── ScheduleTimeline.tsx # Day 1 / Day 2 filterable schedule
    │   ├── eligibility/
    │   │   └── EligibilityChecker.tsx # Interactive quiz to test eligibility
    │   ├── faq/
    │   │   └── FAQAccordion.tsx     # Searchable accordion
    │   └── register/
    │       ├── RegistrationForm.tsx # Multi-step track-aware validated form
    │       ├── RegistrationSuccess.tsx # Confirmation pass with reference ID
    │       └── apiIntegration.ts    # Clear backend hook specification
    └── pages/
        ├── HomePage.tsx
        ├── AboutPage.tsx
        ├── TracksPage.tsx
        ├── ElocutionPage.tsx
        ├── InnovexPage.tsx
        ├── JourneyPage.tsx
        ├── EvaluationPage.tsx
        ├── EligibilityPage.tsx
        ├── SchedulePage.tsx
        ├── FAQPage.tsx
        ├── RegisterPage.tsx
        └── ContactPage.tsx
```

---

## Verification Plan

### Automated / Build Checks
1. **TypeScript Type Check**: Run `npx tsc --noEmit` to ensure zero compilation or type errors.
2. **Production Build**: Run `npm run build` to verify Vite bundle optimization without errors.

### Functional & UX Verification in Browser
1. **Navigation & Routing**: Test all routes (`/`, `/about`, `/tracks`, `/elocution`, `/innovex`, `/journey`, `/evaluation`, `/eligibility`, `/schedule`, `/faq`, `/register`, `/contact`) including mobile menu toggle.
2. **Interactive Elements**:
   - Innovex 7-step journey stepper & Elocution 6-phase tabs
   - Eligibility interactive checker with real-time feedback
   - FAQ live search and accordion collapse/expand
   - Schedule Day 1 / Day 2 filter tabs
3. **Registration Portal**:
   - Complete multi-step form flow with track switching
   - Verify validation rules (required fields, emails, team members)
   - Test mock submission producing generated pass ID (`ELQ-2026-XXXXX`)
4. **Content Audit**: Verify all unknown items strictly display `[TO BE PROVIDED]` or `[TIME TO BE PROVIDED]` with zero fabricated data.
5. **Responsive & Accessibility Testing**: Test desktop (1440px), tablet (768px), and mobile (375px) to ensure no horizontal overflow and full touch-friendliness.
