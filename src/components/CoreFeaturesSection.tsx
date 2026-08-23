import React from 'react';
import {
  ClipboardCheck,
  Layers3,
  Presentation,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

interface FeatureItem {
  icon: React.ElementType;
  label: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tone: string;
  metric: string;
  metricLabel: string;
  capabilities: string[];
}

const features: FeatureItem[] = [
  {
    icon: Presentation,
    label: 'Classroom AI',
    badge: 'Live Podium HUD',
    title: 'AI-assisted classrooms',
    description: 'Give teachers an intelligent Podium assistant for real-time lecture pacing, live student-view tracking, and instant AI doubt clearing.',
    capabilities: [
      'Live lecture transcription & AI summaries',
      'Real-time student comprehension radar',
      '1-Click interactive in-class quizzes'
    ],
    metric: '10x Faster',
    metricLabel: 'lesson planning speed',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=85',
    imageAlt: 'Dynamic teacher interacting with active students in modern classroom',
    tone: 'core-feature--lavender'
  },
  {
    icon: Layers3,
    label: 'Productivity',
    badge: 'Smart Workflow',
    title: 'Smarter learning workflows',
    description: 'Organize multi-tier resources seamlessly, generate adaptive homework with AI, and collect submissions without administrative friction.',
    capabilities: [
      'Auto-indexed resource repositories',
      'Personalized student practice sheets',
      'Clash-free assignment scheduling'
    ],
    metric: '+3.5 hrs/wk',
    metricLabel: 'saved per educator',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=85',
    imageAlt: 'Collaborative educational team working with modern digital workspace software',
    tone: 'core-feature--peach'
  },
  {
    icon: ClipboardCheck,
    label: 'Assessment',
    badge: 'Sub-Second IRT',
    title: 'AI-powered assessment',
    description: 'Run live quizzes and CBT exams with automated rubric grading, surface granular topic gaps, and turn every submission into clear feedback.',
    capabilities: [
      'Sub-second automated scoring & ranking',
      'Item Response Theory (IRT) diagnostics',
      'Instant personalized remedy feedback'
    ],
    metric: '99.8% Accuracy',
    metricLabel: 'automated evaluation rate',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=85',
    imageAlt: 'High-tech analytics dashboard interface with data visualization graphs',
    tone: 'core-feature--mint'
  }
];

export const CoreFeaturesSection: React.FC = () => {
  return (
    <section id="features" className="core-features">
      {/* Brand Glowing Ambient Orbs */}
      <div className="core-features__orb core-features__orb--one" aria-hidden="true" />
      <div className="core-features__orb core-features__orb--two" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24 relative z-10">
        {/* Section Heading with Brand Eyebrow */}
        <div className="core-features__heading">

          <h2>
            Everything teachers need<br />
            <span>to help learners thrive.</span>
          </h2>
          <p>
            Purpose-built tools that make teaching more connected, productive, and measurable from the first class to the final assessment.
          </p>
        </div>

        {/* 3-Column Enhanced Card Grid */}
        <div className="core-features__grid">
          {features.map(({
            icon: Icon,
            label,
            badge,
            title,
            description,
            image,
            imageAlt,
            tone,
            metric,
            metricLabel,
            capabilities
          }) => (
            <article className={`core-feature ${tone}`} key={label}>
              {/* High-Impact Image Banner */}
              <div className="core-feature__image">
                <img src={image} alt={imageAlt} referrerPolicy="no-referrer" />
                <span className="core-feature__image-shade" />



                {/* Floating Icon Base */}
                <span className="core-feature__icon">
                  <Icon size={22} />
                </span>


              </div>

              {/* Card Body */}
              <div className="core-feature__body">
                <div>
                  <h3 className="core-feature__title">{title}</h3>
                  <p className="core-feature__description">{description}</p>
                </div>

                {/* Capabilities Feature Checklist */}
                <div className="core-feature__capabilities">
                  {capabilities.map((cap, idx) => (
                    <div key={idx} className="core-feature__capability-item">
                      <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>

                {/* Metric & Footer Action Strip */}
                <div className="core-feature__footer">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <TrendingUp size={14} className="text-purple-600" />
                      <strong className="core-feature__metric-value">{metric}</strong>
                    </div>
                    <span className="core-feature__metric-label">{metricLabel}</span>
                  </div>

                  <div className="core-feature__action-link">
                    <span>Explore</span>
                    <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

