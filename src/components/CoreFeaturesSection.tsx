import React from 'react';
import { ClipboardCheck, Layers3, Presentation, ArrowUpRight } from 'lucide-react';

const features = [
  {
    icon: Presentation,
    label: 'Classroom Ready',
    title: 'AI-assisted classrooms',
    description: 'Give teachers an intelligent Podium assistant for lesson planning, live student-view tracking, and instant support throughout every class.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=85',
    imageAlt: 'Abstract artificial intelligence interface',
    tone: 'core-feature--lavender'
  },
  {
    icon: Layers3,
    label: 'Productivity',
    title: 'Smarter learning workflows',
    description: 'Use AI to organize resources, personalize assignments, and collect learner work in real time without breaking the flow of your class.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=85',
    imageAlt: 'Colorful digital AI technology visualization',
    tone: 'core-feature--peach'
  },
  {
    icon: ClipboardCheck,
    label: 'Assessment',
    title: 'AI-powered assessment',
    description: 'Run live quizzes with automated grading, surface learning gaps, and turn every response into clear next-step feedback.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=85',
    imageAlt: 'Analytics dashboard with data visualizations',
    tone: 'core-feature--mint'
  }
];

export const CoreFeaturesSection: React.FC = () => {
  return (
    <section id="features" className="core-features">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="core-features__heading">
          <div className="core-features__eyebrow">Our Features</div>
          <h2>Everything teachers need<br /><span>to help learners thrive.</span></h2>
          <p>Purpose-built tools that make teaching more connected, productive, and measurable from the first class to the final assessment.</p>
        </div>

        <div className="core-features__grid">
          {features.map(({ icon: Icon, label, title, description, image, imageAlt, tone }) => (
            <article className={`core-feature ${tone}`} key={label}>
              <div className="core-feature__image">
                <img src={image} alt={imageAlt} referrerPolicy="no-referrer" />
                <span className="core-feature__image-shade" />
                <span className="core-feature__icon"><Icon size={21} /></span>
                <ArrowUpRight className="core-feature__arrow" size={17} />
              </div>
              <div className="core-feature__topline">
                <span className="core-feature__label">{label}</span>
              </div>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
