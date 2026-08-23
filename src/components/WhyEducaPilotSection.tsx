import React from 'react';
import { ArrowRight, Play, ShoppingCart, Sparkles } from 'lucide-react';

interface WhyEducaPilotSectionProps {
  onOpenDemoModal: () => void;
  onOpenTestExSimulator: () => void;
}

const courseCards = [
  {
    title: 'Branding Design',
    price: '$45.00',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=260&auto=format&fit=crop&q=85',
    className: 'why-course-card--top'
  },
  {
    title: 'Voice of Arts',
    price: '$45.00',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=260&auto=format&fit=crop&q=85',
    className: 'why-course-card--left'
  },
  {
    title: 'Branding Design',
    price: '$45.00',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=260&auto=format&fit=crop&q=85',
    className: 'why-course-card--right'
  }
];

export const WhyEducaPilotSection: React.FC<WhyEducaPilotSectionProps> = ({ onOpenDemoModal, onOpenTestExSimulator }) => {
  return (
    <section id="why-educapilot" className="why-educapilot">
      <div className="why-educapilot__grid" aria-hidden="true" />
      <div className="why-educapilot__glow why-educapilot__glow--left" aria-hidden="true" />
      <div className="why-educapilot__glow why-educapilot__glow--right" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-24">
        <div className="why-educapilot__copy">
          <div className="why-eyebrow"><Sparkles size={14} /> Why EducaPilot</div>
          <h2>One Platform.<br />Every Learning<br />Journey <span>✦</span></h2>
          <p>Bring school operations, engaging courses, competitive exam practice, and real-time student insights together in one simple platform built for better outcomes.</p>
          <div className="why-actions">
            <button type="button" onClick={onOpenDemoModal} className="why-button why-button--primary">See EducaPilot <ArrowRight size={14} /></button>
            <button type="button" onClick={onOpenTestExSimulator} className="why-button why-button--outline">Try Test-Ex</button>
          </div>
          <div className="why-users">
            <div className="why-users__faces">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=85" alt="" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=85" alt="" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&auto=format&fit=crop&q=85" alt="" referrerPolicy="no-referrer" />
            </div>
            <div><strong>850K+</strong><span>Students learning every day</span></div>
          </div>
        </div>

        <div className="why-educapilot__visual" aria-label="EducaPilot learning dashboard preview">
          <div className="why-dashboard">
            <div className="why-dashboard__topline"><span>Today’s learning</span><span className="why-dashboard__dot" /></div>
            <div className="why-dashboard__hero"><span>Keep learning,<br /><strong>keep growing.</strong></span><div className="why-dashboard__chart"><i /><i /><i /><i /><i /></div></div>
            <div className="why-dashboard__schedule"><small>Notice board</small><strong>Virtual STEM Clubs for<br />Gift-a-way...</strong><span>→</span></div>
            <div className="why-dashboard__schedule why-dashboard__schedule--bottom"><small>Today Classes Schedule</small><strong>8:00 AM &nbsp; Biology</strong><span>Live</span></div>
          </div>
          {courseCards.map((card) => (
            <div className={`why-course-card ${card.className}`} key={card.className}>
              <div className="why-course-card__image"><img src={card.image} alt={card.title} referrerPolicy="no-referrer" /><Play size={14} fill="white" /></div>
              <strong>{card.title}</strong>
              <div><span>{card.price}</span><ShoppingCart size={12} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
