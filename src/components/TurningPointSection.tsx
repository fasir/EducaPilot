import React, { useState } from 'react';
import {
  Activity,
  BarChart3,
  CreditCard,
  Globe2,
  LayoutDashboard,
  LockKeyhole,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  AlertTriangle,
  Zap,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Layers,
  ArrowRight
} from 'lucide-react';

interface TurningPointItem {
  id: string;
  label: string;
  category: string;
  icon: React.ElementType;
  painTitle: string;
  pain: string;
  solutionTitle: string;
  solution: string;
  outcome: string;
  metric: string;
  metricLabel: string;
  telemetry: string;
  features: string[];
  image: string;
  imageAlt: string;
  tone: string;
  badgeTone: string;
}

const turningPoints: TurningPointItem[] = [
  {
    id: 'engagement',
    label: 'Student Retention',
    category: 'Engagement',
    icon: Activity,
    painTitle: 'Silent Student Drop-offs',
    pain: 'Disengaged learners slip away unnoticed across fragmented classes until term-end churn is inevitable.',
    solutionTitle: 'Predictive 7-Day Churn Radar',
    solution: 'Real-time AI telemetry flags attendance dips and quiz fatigue 7 days early for proactive mentor intervention.',
    outcome: 'Catch disengagement early',
    metric: '42% Reduction',
    metricLabel: 'in student drop-offs',
    telemetry: 'Dropout Risk Radar Active',
    features: [
      'Automated attendance & score fatigue triggers',
      'Proactive counselor task assignment in 1-click',
      'Continuous cohort health sentiment score'
    ],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=85',
    imageAlt: 'Engaged university students collaborating around a laptop in modern campus',
    tone: 'turning-card--lilac',
    badgeTone: 'bg-purple-100 text-purple-700 border-purple-200'
  },
  {
    id: 'operations',
    label: 'Unified Campus Ops',
    category: 'Operations',
    icon: LayoutDashboard,
    painTitle: 'Fragmented App Chaos',
    pain: 'Admissions, timetables, fee invoices, and attendance live in 5 separate unlinked portals.',
    solutionTitle: 'Single-Pane Orchestration',
    solution: 'One unified campus cockpit syncs timetable clashes, RFID roll calls, and fee collections in real time.',
    outcome: 'One single source of truth',
    metric: '18 hrs / week',
    metricLabel: 'saved per administrator',
    telemetry: '0.4s Biometric Sync',
    features: [
      'Zero-clash automated teacher & hall scheduler',
      'Instant parent push notifications on attendance',
      'Multi-branch consolidated management'
    ],
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=85',
    imageAlt: 'Educators managing digital operations on modern dashboard interfaces',
    tone: 'turning-card--blue',
    badgeTone: 'bg-blue-100 text-blue-700 border-blue-200'
  },
  {
    id: 'analytics',
    label: 'Cohort Intelligence',
    category: 'Analytics',
    icon: BarChart3,
    painTitle: 'Dark Blindspot Reporting',
    pain: 'Static spreadsheets take days to assemble, hiding weak topic comprehension and revenue bottlenecks.',
    solutionTitle: 'Live Multi-Cohort Telemetry',
    solution: 'Live predictive forecasting pinpoints concept mastery gaps down to individual exam sub-questions.',
    outcome: 'Decide with confidence',
    metric: '98.6% Accuracy',
    metricLabel: 'in score projection',
    telemetry: 'Live Exam Analytics On',
    features: [
      'Sub-second item response theory (IRT) analytics',
      'Automated weak-area practice drills for students',
      'Board & executive real-time performance summaries'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=85',
    imageAlt: 'Futuristic data analytics graphs and educational metrics on screen',
    tone: 'turning-card--peach',
    badgeTone: 'bg-amber-100 text-amber-800 border-amber-200'
  },
  {
    id: 'revenue',
    label: 'Predictable Revenue',
    category: 'Revenue',
    icon: CreditCard,
    painTitle: 'Leaky Invoices & Manual Chasing',
    pain: 'Delayed fee collections, manual ledger reconciliations, and failed installment tracking bleed campus revenue.',
    solutionTitle: 'Automated Billing Engine',
    solution: 'Stripe-native auto-invoicing, scheduled installments, and instant UPI/card payment reconciliation.',
    outcome: 'Build predictable revenue',
    metric: '99.4% Collection',
    metricLabel: 'on-time fee rate',
    telemetry: 'Auto-Reconciliation Active',
    features: [
      'Zero-touch automated installment reminders',
      'Instant digital receipts with tax breakdown',
      'Multi-currency subscription & offline cash support'
    ],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=85',
    imageAlt: 'Digital billing and financial transactions on clean tablet interface',
    tone: 'turning-card--mint',
    badgeTone: 'bg-emerald-100 text-emerald-800 border-emerald-200'
  },
  {
    id: 'reach',
    label: 'Global Accessibility',
    category: 'Reach',
    icon: Globe2,
    painTitle: 'Language & Locale Barriers',
    pain: 'High-quality courses stay locked within single language boundaries, limiting global student scale.',
    solutionTitle: '40+ Languages & RTL Native',
    solution: 'Full right-to-left (RTL) localization, instant AI video captions, and localized curriculum delivery.',
    outcome: 'Welcome every learner',
    metric: '40+ Languages',
    metricLabel: 'with full RTL parity',
    telemetry: 'Global Edge CDN Active',
    features: [
      'Native Arabic, Hebrew, & Urdu RTL layouts',
      'Instant AI speech-to-text transcript translation',
      'Sub-50ms global edge video streaming'
    ],
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=85',
    imageAlt: 'Diverse international group of smiling students learning together',
    tone: 'turning-card--butter',
    badgeTone: 'bg-yellow-100 text-yellow-800 border-yellow-200'
  },
  {
    id: 'security',
    label: 'Zero-Trust Security',
    category: 'Security',
    icon: LockKeyhole,
    painTitle: 'Compliance & Leak Vulnerabilities',
    pain: 'Unprotected student personal data, unverified third-party scripts, and risk of regulatory non-compliance.',
    solutionTitle: 'Bank-Grade Fortress Architecture',
    solution: 'SOC 2 Type II certified, GDPR/FERPA compliant, end-to-end data encryption with granular role control.',
    outcome: 'Enterprise trust built in',
    metric: '100% Compliant',
    metricLabel: 'SOC 2 & GDPR certified',
    telemetry: 'Encrypted at Rest & Transit',
    features: [
      'Granular role-based access for staff & parents',
      'Automated daily encrypted geo-redundant backups',
      'Anti-tamper audit logs for every grading action'
    ],
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&auto=format&fit=crop&q=85',
    imageAlt: 'Secure cloud server technology and data protection visualization',
    tone: 'turning-card--rose',
    badgeTone: 'bg-rose-100 text-rose-800 border-rose-200'
  }
];

export const TurningPointSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('engagement');
  const active = turningPoints.find((point) => point.id === activeId) ?? turningPoints[0];
  const ActiveIcon = active.icon;

  return (
    <section id="turning-point" className="turning-point">
      {/* Background Ambience Orbs */}
      <div className="turning-point__orb turning-point__orb--one" aria-hidden="true" />
      <div className="turning-point__orb turning-point__orb--two" aria-hidden="true" />
      <div className="turning-point__orb turning-point__orb--three" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24 relative z-10">
        {/* Section Header */}
        <div className="turning-point__heading">
          {/* <div className="turning-point__eyebrow">
            <span className="turning-point__live-dot" />
            <span>Platform Transformation Hub</span>
            <Sparkles size={14} className="text-purple-600" />
          </div> */}
          <h2>
            From institutional friction<br />
            <span>to intelligent momentum.</span>
          </h2>
          <p>
            Traditional educational platforms create operational bottlenecks. See how EducaPilot replaces friction with automated AI intelligence, turning institutional challenges into unfair competitive advantages.
          </p>
        </div>

        {/* Quick Category Filter Pills */}
        <div className="turning-point__pill-nav" role="tablist" aria-label="Transformation Pillars">
          {turningPoints.map((item) => {
            const Icon = item.icon;
            const isSelected = activeId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveId(item.id)}
                className={`turning-point__nav-btn ${isSelected ? 'is-active' : ''}`}
              >
                <Icon size={16} />
                <span>{item.category}</span>
                {isSelected && <span className="turning-point__nav-dot" />}
              </button>
            );
          })}
        </div>

        {/* Interactive Spotlight Hero Stage */}
        <div className="turning-point__showcase">
          {/* Left Column: Transformation Story */}
          <div className="turning-point__showcase-content">
            <div className="turning-point__showcase-top">
              <div className="flex items-center gap-2">
                <span className={`turning-point__showcase-icon ${active.tone}`}>
                  <ActiveIcon size={22} />
                </span>
                <div>
                  <span className="turning-point__showcase-tag">{active.category} Transformation</span>
                  <h3 className="turning-point__showcase-title">{active.label}</h3>
                </div>
              </div>
              <div className="turning-point__telemetry-badge">
                <span className="turning-point__live-dot" />
                <span>{active.telemetry}</span>
              </div>
            </div>

            {/* Before vs After Split Cards */}
            <div className="turning-point__split-grid">
              {/* Legacy Friction Block */}
              <div className="turning-point__friction-box">
                <div className="turning-point__box-header text-rose-700">
                  <AlertTriangle size={15} className="text-rose-500 shrink-0" />
                  <span>The Legacy Friction</span>
                </div>
                <strong className="text-slate-900 text-sm block mb-1">{active.painTitle}</strong>
                <p className="text-[13.5px] text-slate-600 leading-relaxed">{active.pain}</p>
              </div>

              {/* EducaPilot Momentum Block */}
              <div className="turning-point__momentum-box">
                <div className="turning-point__box-header text-purple-700">
                  <Zap size={15} className="text-purple-600 shrink-0" />
                  <span>EducaPilot Breakthrough</span>
                </div>
                <strong className="text-slate-900 text-sm block mb-1">{active.solutionTitle}</strong>
                <p className="text-[13.5px] text-slate-600 leading-relaxed">{active.solution}</p>
              </div>
            </div>

            {/* Impact Highlights & Bullet Checklist */}
            <div className="turning-point__feature-list">
              <span className="text-[13px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                Key AI Capabilities &amp; Impact
              </span>
              <div className="space-y-2">
                {active.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-[13px] text-slate-700">
                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Spotlight Metric Banner */}
            <div className="turning-point__metric-strip">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-purple-700 font-mono">{active.metric}</span>
                <span className="text-[13px] text-slate-600 font-medium">{active.metricLabel}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[13px] font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80">
                <TrendingUp size={14} />
                <span>{active.outcome}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Match Stage */}
          <div className="turning-point__showcase-media">
            <div className="turning-point__media-wrapper">
              <img
                src={active.image}
                alt={active.imageAlt}
                className="turning-point__media-img"
                referrerPolicy="no-referrer"
              />
              <div className="turning-point__media-overlay" />

              {/* Floating Live AI Badge Top */}
              <div className="turning-point__float-badge turning-point__float-badge--top">
                <div className="turning-point__pulse-ring">
                  <Cpu size={14} className="text-purple-600" />
                </div>
                <div>
                  <span className="block text-[13px] text-slate-500 font-semibold uppercase tracking-wider">
                    Engine Status
                  </span>
                  <span className="block text-[13.5px] font-bold text-slate-900">
                    {active.telemetry}
                  </span>
                </div>
              </div>

              {/* Floating Metric Badge Bottom */}
              <div className="turning-point__float-badge turning-point__float-badge--bottom">
                <div className="flex items-center justify-between gap-3 mb-1">
                  <span className="text-[13px] font-bold text-purple-700 uppercase tracking-wider">
                    Measurable Result
                  </span>
                  <span className="px-2 py-0.5 rounded text-[13px] font-bold bg-emerald-100 text-emerald-800">
                    Verified
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-slate-900 font-mono">{active.metric}</span>
                  <span className="text-[13px] text-slate-600 leading-tight">{active.metricLabel}</span>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

