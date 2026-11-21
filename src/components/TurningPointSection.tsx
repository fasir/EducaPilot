import React from 'react';
import {
  Activity,
  BarChart3,
  CreditCard,
  LayoutDashboard,
  LockKeyhole,
  Globe2,
  Sparkles
} from 'lucide-react';

interface TurningPointItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  tone: string;
}

const turningPoints: TurningPointItem[] = [
  {
    id: 'retention',
    title: 'Student Retention',
    description: 'Real-time AI telemetry flags attendance dips and quiz fatigue early for proactive intervention before dropouts occur.',
    icon: Activity,
    tone: 'turning-card--purple'
  },
  {
    id: 'operations',
    title: 'Campus Operations',
    description: 'A single-pane cockpit synchronizing admissions, timetables, RFID attendance, and staff rosters in real time.',
    icon: LayoutDashboard,
    tone: 'turning-card--blue'
  },
  {
    id: 'analytics',
    title: 'Exam Intelligence',
    description: 'Live psychometric scoring and IRT analytics that diagnose concept comprehension down to specific questions.',
    icon: BarChart3,
    tone: 'turning-card--indigo'
  },
  {
    id: 'finance',
    title: 'Fee & Billing Automation',
    description: 'Automated digital invoicing, flexible installment scheduling, and instant multi-gateway payment reconciliation.',
    icon: CreditCard,
    tone: 'turning-card--emerald'
  },
  {
    id: 'security',
    title: 'Institutional Security',
    description: 'Enterprise cloud fortress with SOC 2 Type II, GDPR, and FERPA certification and granular role-based permissions.',
    icon: LockKeyhole,
    tone: 'turning-card--amber'
  },
  {
    id: 'reach',
    title: 'Global Accessibility',
    description: 'Multi-language delivery with native RTL localization, AI video captions, and low-latency global edge streaming.',
    icon: Globe2,
    tone: 'turning-card--rose'
  }
];

export const TurningPointSection: React.FC = () => {
  return (
    <section id="turning-point" className="turning-point">
      {/* Background Ambience Orbs */}
      <div className="turning-point__orb turning-point__orb--one" aria-hidden="true" />
      <div className="turning-point__orb turning-point__orb--two" aria-hidden="true" />
      <div className="turning-point__orb turning-point__orb--three" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24 relative z-10">
        {/* Section Header */}
        <div className="turning-point__heading text-center">
          <div className="turning-point__eyebrow">
            <Sparkles size={13} className="text-purple-600" />
            <span>Core Pillars</span>
          </div>
          <h2>
            From institutional friction<br />
            <span>to intelligent momentum.</span>
          </h2>
          <p>
            Purpose-built intelligence to eliminate bottlenecks and empower every campus department.
          </p>
        </div>

        {/* Column Card Grid */}
        <div className="turning-point__card-grid">
          {turningPoints.map(({ id, title, description, icon: Icon, tone }) => (
            <div key={id} className={`turning-item-card ${tone}`}>
              <div className="turning-item-card__icon-wrapper">
                <Icon size={24} />
              </div>
              <h3 className="turning-item-card__title">{title}</h3>
              <p className="turning-item-card__desc">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
