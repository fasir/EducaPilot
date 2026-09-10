import React, { useState } from 'react';
import {
  Building2,
  GraduationCap,
  FileEdit,
  Baby,
  Bot,
  Globe,
  Users,
  UserCheck,
  ScanFace,
  ShieldCheck,
  CreditCard,
  Wallet,
  Bus,
  HeartHandshake,
  BookOpenCheck,
  BellRing,
  FileCheck2,
  Contact,
  Video,
  PlaySquare,
  Radio,
  FileSpreadsheet,
  BookMarked,
  Boxes,
  FileCode2,
  Sparkles,
  ClipboardList,
  Laptop2,
  HelpCircle,
  Calculator,
  CalendarCheck2,
  Smile,
  LineChart,
  MessageCircleHeart,
  ClipboardCheck,
  Cpu,
  BrainCircuit,
  Workflow,
  LayoutTemplate,
  Layers,
  UserCheck2,
  Briefcase,
  Network,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

interface SubFeature {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface FeatureCategory {
  id: string;
  title: string;
  shortTitle: string;
  badge: string;
  icon: React.ElementType;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  telemetry: string;
  metric: string;
  metricLabel: string;
  accentColor: string;
  items: SubFeature[];
}

const featureCategories: FeatureCategory[] = [
  {
    id: 'institutional-management',
    title: 'Institutional Management & Administration',
    shortTitle: 'Institutional Management',
    badge: '12 Core Modules',
    icon: Building2,
    tagline: 'Streamlined Campus Governance',
    description: 'Comprehensive administrative backbone to unify students, faculty, operations, and finance in a single integrated workflow.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=85',
    imageAlt: 'School administration team collaborating in modern smart campus office',
    telemetry: 'Real-Time Campus Sync Active',
    metric: '100% Unified',
    metricLabel: 'campus operations coverage',
    accentColor: 'features-accent--purple',
    items: [
      {
        title: 'Student & Academic Management',
        description: 'Complete student lifecycle tracking from admissions, classroom allocations, and grades to graduation records.',
        icon: Users
      },
      {
        title: 'Staff Management & Attendance',
        description: 'Centralized faculty directory, automated shift logs, leave management, and teaching workload scheduling.',
        icon: UserCheck
      },
      {
        title: 'Face Recognition Attendance',
        description: 'AI-driven biometric and facial recognition check-ins ensuring rapid, contactless verification for students and staff.',
        icon: ScanFace
      },
      {
        title: 'Visitor Management',
        description: 'Secure front-desk registration, instant visitor photo badges, host notifications, and campus entry logs.',
        icon: ShieldAlert
      },
      {
        title: 'Fee Collection & Management',
        description: 'Automated digital invoicing, flexible installment plans, instant online payments, and real-time reconciliation.',
        icon: CreditCard
      },
      {
        title: 'Payroll Management',
        description: 'Automated salary calculation, deductions, allowances, statutory compliance, and digital pay slip generation.',
        icon: Wallet
      },
      {
        title: 'Transportation Management',
        description: 'Live GPS fleet tracking, automated route planning, driver assignments, and instant parent safety notifications.',
        icon: Bus
      },
      {
        title: 'Daily Care & Student Accounting',
        description: 'Student welfare tracking, health records, cafeteria debit accounts, and itemized day-to-day accounting.',
        icon: HeartHandshake
      },
      {
        title: 'Lesson Planning',
        description: 'Structured curriculum mapping, digital syllabus builders, lesson plans, and teaching milestone tracking.',
        icon: BookOpenCheck
      },
      {
        title: 'Daily Updates & School Activities',
        description: 'Instant multi-channel broadcasts for daily homework, activity announcements, and institutional calendars.',
        icon: BellRing
      },
      {
        title: 'Advanced Notices & Acknowledgements',
        description: 'Digital circulars with verified parent delivery status, digital signatures, and read-receipt acknowledgements.',
        icon: FileCheck2
      },
      {
        title: 'CRM & Relationship Management',
        description: 'End-to-end prospective student inquiry pipeline, follow-up automation, and admission campaign analytics.',
        icon: Contact
      }
    ]
  },
  {
    id: 'digital-learning',
    title: 'Digital Learning & Virtual Classrooms',
    shortTitle: 'Digital Learning',
    badge: '8 Interactive Tools',
    icon: GraduationCap,
    tagline: 'Next-Gen Hybrid E-Learning',
    description: 'Empower educators with dynamic virtual classrooms, built-in video engines, interactive coursework, and AI study tools.',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&auto=format&fit=crop&q=85',
    imageAlt: 'Students and teacher engaged with modern laptops and digital classroom tools',
    telemetry: 'Sub-50ms Video Engine Ready',
    metric: '99.9% Uptime',
    metricLabel: 'live video streaming reliability',
    accentColor: 'features-accent--blue',
    items: [
      {
        title: 'Live Virtual Classes',
        description: 'High-definition interactive live classes with screen sharing, multi-user audio/video, and dynamic whiteboards.',
        icon: Video
      },
      {
        title: 'Built-in Video Learning Engine',
        description: 'Native video streaming infrastructure with adaptive bitrate, secure DRM protection, and speed controls.',
        icon: PlaySquare
      },
      {
        title: 'Zoom Integration',
        description: 'One-click Zoom classroom creation, automated student attendance synchronization, and cloud recording access.',
        icon: Radio
      },
      {
        title: 'Homework & Assignments',
        description: 'Frictionless digital homework distribution, rich file submission dropboxes, and structured rubric grading.',
        icon: FileSpreadsheet
      },
      {
        title: 'LMS Course Management',
        description: 'Modular course authoring with chapters, downloadable study material, interactive quizzes, and progress bars.',
        icon: BookMarked
      },
      {
        title: 'Course Bundles',
        description: 'Curate multi-course skill tracks and specialized subject packages with unified access control.',
        icon: Boxes
      },
      {
        title: 'Digital Learning Content',
        description: 'Interactive multimedia study materials, digital flashcards, downloadable e-books, and curated reference libraries.',
        icon: FileCode2
      },
      {
        title: 'AI-Powered Learning Assistance',
        description: 'Context-aware AI tutor delivering real-time doubt clearing, personalized hints, and concept summaries.',
        icon: Sparkles
      }
    ]
  },
  {
    id: 'examination-assessment',
    title: 'Examination & Assessment Management',
    shortTitle: 'Examination & Assessment',
    badge: '5 Assessment Engines',
    icon: FileEdit,
    tagline: 'High-Scale Anti-Cheat Testing',
    description: 'Effortlessly conduct institutional exams, CBT tests, and auto-evaluated assessments with deep analytical scorecards.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=85',
    imageAlt: 'Student taking structured computerized examination test',
    telemetry: 'Anti-Cheat Proctor Engine Live',
    metric: '100k+ Tests',
    metricLabel: 'concurrent exam capability',
    accentColor: 'features-accent--peach',
    items: [
      {
        title: 'Advanced Examination Management',
        description: 'Holistic examination lifecycle orchestration from seating arrangements and hall tickets to invigilator rosters.',
        icon: ClipboardList
      },
      {
        title: 'High-Scale Online Examinations',
        description: 'Rock-solid CBT engine built to handle tens of thousands of concurrent examinees with anti-cheat protection.',
        icon: Laptop2
      },
      {
        title: 'Question & Assessment Management',
        description: 'Categorized central question banks supporting MCQs, coding prompts, descriptive essays, and difficulty tiers.',
        icon: HelpCircle
      },
      {
        title: 'Automated Evaluation',
        description: 'Instant scoring for objective assessments and AI-assisted rubric grading for descriptive responses.',
        icon: Calculator
      },
      {
        title: 'Exam Scheduling & Results',
        description: 'Clash-free exam timetable generator, automated report card compilation, and instant publishing to parent portals.',
        icon: CalendarCheck2
      }
    ]
  },
  {
    id: 'early-learning',
    title: 'Early Learning & Kindergarten',
    shortTitle: 'Early Learning & Kindergarten',
    badge: '5 Childcare Systems',
    icon: Baby,
    tagline: 'Nurturing Young Learners',
    description: 'Specialized early childhood workflows designed for kindergarten, preschools, activity tracking, and close parent connection.',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&auto=format&fit=crop&q=85',
    imageAlt: 'Happy young children learning creatively with teacher in kindergarten classroom',
    telemetry: 'Live Childcare Telemetry On',
    metric: '100% Connected',
    metricLabel: 'daily parent-teacher trust score',
    accentColor: 'features-accent--butter',
    items: [
      {
        title: 'Kindergarten Management',
        description: 'Custom-built administrative workflows specifically tailored for nursery, preschool, and daycare environments.',
        icon: Baby
      },
      {
        title: 'Daily Care Management',
        description: 'Careful real-time logging of meals, nap schedules, hydration, medication, and mood patterns throughout the day.',
        icon: HeartHandshake
      },
      {
        title: 'Child Activity & Progress Tracking',
        description: 'Visual milestone tracking, fine motor skill observations, and joyful multimedia progress scrapbooks.',
        icon: LineChart
      },
      {
        title: 'Parent Communication',
        description: 'Private 1-on-1 direct channels and photo feed updates connecting teachers and parents instantly.',
        icon: MessageCircleHeart
      },
      {
        title: 'Daily Updates & Acknowledgements',
        description: 'Structured end-of-day summary reports with one-touch digital parent acknowledgement receipts.',
        icon: ClipboardCheck
      }
    ]
  },
  {
    id: 'ai-assistance',
    title: 'AI-Powered Assistance',
    shortTitle: 'AI-Powered Assistance',
    badge: '4 Intelligence Engines',
    icon: Bot,
    tagline: 'Intelligent Campus Co-Pilots',
    description: 'Transform institutional productivity with next-generation conversational AI helpers, personalized learning, and workflow automation.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=85',
    imageAlt: 'Abstract futuristic AI technology visualization and intelligence flows',
    telemetry: 'Cognitive AI Engine Active',
    metric: '10x Faster',
    metricLabel: 'inquiry resolution & workflow speed',
    accentColor: 'features-accent--mint',
    items: [
      {
        title: 'AI Assistant for Students & Staff',
        description: '24/7 intelligent conversational bot answering queries regarding timetables, fees, assignments, and campus guidelines.',
        icon: Bot
      },
      {
        title: 'AI-Powered Learning Assistance',
        description: 'Personalized learning companion providing step-by-step guidance, concept simplifications, and practice drills.',
        icon: Cpu
      },
      {
        title: 'Intelligent Information & Support',
        description: 'Instant knowledge search and automated helpdesk routing for institutional policies, circulars, and support tickets.',
        icon: BrainCircuit
      },
      {
        title: 'AI-Enabled Academic Workflows',
        description: 'Smart auto-generation of lesson outlines, assessment question drafts, and customized student feedback summaries.',
        icon: Workflow
      }
    ]
  },
  {
    id: 'dedicated-digital-presence',
    title: 'Dedicated Digital Presence',
    shortTitle: 'Dedicated Digital Presence',
    badge: '5 Portal Ecosystems',
    icon: Globe,
    tagline: 'Your School Brand Everywhere',
    description: 'Custom-tailored school websites and dedicated role-based portals that build a world-class digital identity for your institution.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=85',
    imageAlt: 'Digital website and portals interface on modern screens and devices',
    telemetry: 'Custom Domain & CDN Active',
    metric: 'Custom Branded',
    metricLabel: 'school-specific digital identity',
    accentColor: 'features-accent--rose',
    items: [
      {
        title: 'Dedicated Website for Every School',
        description: 'High-speed, SEO-optimized public website showcasing campus achievements, facilities, faculty, and admissions.',
        icon: LayoutTemplate
      },
      {
        title: 'Branded School Portal',
        description: 'Fully personalized web experience featuring your institution’s logo, colors, custom subdomain, and brand styling.',
        icon: Layers
      },
      {
        title: 'Student & Parent Portals',
        description: 'Dedicated self-service hubs for grades, real-time attendance, fee receipts, timetables, and teacher chats.',
        icon: UserCheck2
      },
      {
        title: 'Staff & Administration Portals',
        description: 'Secure, role-based control centers tailored for principals, teachers, accountants, and transport managers.',
        icon: Briefcase
      },
      {
        title: 'School-Specific Digital Ecosystem',
        description: 'A unified, private institutional ecosystem securely connecting students, parents, alumni, and administrators.',
        icon: Network
      }
    ]
  }
];

export const FeaturesSection: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('institutional-management');
  const activeCategory = featureCategories.find((cat) => cat.id === activeCategoryId) ?? featureCategories[0];
  const ActiveIcon = activeCategory.icon;

  return (
    <section id="features" className="features-hub">
      {/* Background Ambient Glow Orbs */}
      <div className="features-hub__orb features-hub__orb--one" aria-hidden="true" />
      <div className="features-hub__orb features-hub__orb--two" aria-hidden="true" />
      <div className="features-hub__orb features-hub__orb--three" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16 relative z-10">
        {/* Section Heading */}
        <div className="features-hub__heading">
          <h2>
            Features<br />
            <span>Built for Institutional Excellence</span>
          </h2>
        </div>

        {/* Interactive Category Tabs / Pill Nav */}
        <div className="features-hub__nav" role="tablist" aria-label="Platform Feature Categories">
          {featureCategories.map((cat) => {
            const CatIcon = cat.icon;
            const isSelected = activeCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`features-hub__nav-btn ${isSelected ? 'is-active' : ''}`}
              >
                <CatIcon size={16} />
                <span>{cat.shortTitle}</span>
                {isSelected && <span className="features-hub__nav-dot" />}
              </button>
            );
          })}
        </div>

        {/* Dynamic Showcase Stage */}
        <div className="features-hub__showcase">
          {/* Top Category Info Bar */}
          <div className="features-hub__showcase-header">
            <div className="flex items-center gap-3">
              <span className={`features-hub__showcase-icon ${activeCategory.accentColor}`}>
                <ActiveIcon size={24} />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="features-hub__showcase-tag">{activeCategory.tagline}</span>
                  <span className="features-hub__showcase-badge">{activeCategory.badge}</span>
                </div>
                <h3 className="features-hub__showcase-title">{activeCategory.title}</h3>
              </div>
            </div>

            <div className="features-hub__telemetry-badge">
              <span className="features-hub__live-dot" />
              <span>{activeCategory.telemetry}</span>
            </div>
          </div>

          <p className="features-hub__showcase-intro">{activeCategory.description}</p>

          {/* Two-Column Stage: Spotlight Media + Feature Cards Grid */}
          <div className="features-hub__stage-grid">
            {/* Left Column: Visual Media Card with Live Badges */}
            <div className="features-hub__media-col">
              <div className="features-hub__media-wrapper">
                <img
                  src={activeCategory.image}
                  alt={activeCategory.imageAlt}
                  className="features-hub__media-img"
                  referrerPolicy="no-referrer"
                />
                <div className="features-hub__media-overlay" />

                {/* Floating Top Badge */}
                <div className="features-hub__float-badge features-hub__float-badge--top">
                  <div className="features-hub__pulse-ring">
                    <ActiveIcon size={14} className="text-purple-600" />
                  </div>
                  <div>
                    <span className="block text-[12px] text-slate-500 font-semibold uppercase tracking-wider">
                      Module Status
                    </span>
                    <span className="block text-[13px] font-bold text-slate-900">
                      {activeCategory.telemetry}
                    </span>
                  </div>
                </div>

                {/* Floating Bottom Metric Badge */}
                <div className="features-hub__float-badge features-hub__float-badge--bottom">
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <span className="text-[12px] font-bold text-purple-700 uppercase tracking-wider">
                      {activeCategory.shortTitle}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800">
                      Verified
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-slate-900 font-mono">{activeCategory.metric}</span>
                    <span className="text-[12px] text-slate-600 leading-tight">{activeCategory.metricLabel}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Feature Cards Grid (Image/Icon -> Short Heading -> Description) */}
            <div className="features-hub__cards-col">
              <div className="features-hub__cards-grid">
                {activeCategory.items.map((item, index) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={index} className="features-hub__item-card">
                      <div className="features-hub__item-icon-box">
                        <ItemIcon size={19} />
                      </div>
                      <div className="features-hub__item-content">
                        <h4 className="features-hub__item-heading">{item.title}</h4>
                        <p className="features-hub__item-desc">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
