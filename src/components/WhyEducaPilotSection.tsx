import React from 'react';
import {
  ArrowRight,
  Sparkles,
  Zap,
  Check
} from 'lucide-react';

interface WhyEducaPilotSectionProps {
  onOpenDemoModal: () => void;
  onOpenTestExSimulator: () => void;
}

export const WhyEducaPilotSection: React.FC<WhyEducaPilotSectionProps> = ({
  onOpenDemoModal,
  onOpenTestExSimulator
}) => {
  return (
    <section id="why-educapilot" className="why-educapilot">
      {/* Background Grid & Decorative Ambience Glows */}
      <div className="why-educapilot__grid" aria-hidden="true" />
      <div className="why-educapilot__glow why-educapilot__glow--left" aria-hidden="true" />
      <div className="why-educapilot__glow why-educapilot__glow--right" aria-hidden="true" />

      <div className="why-educapilot__layout mx-auto max-w-7xl">
        {/* Left Column: Refined Value Proposition */}
        <div className="why-educapilot__copy">
          <div className="why-eyebrow">
            <Sparkles size={14} className="text-violet-600" />
            <span>Why Choose EducaPilot</span>
          </div>

          <h2 className="why-title">
            One Unified Platform.<br />
            <span className="why-title__gradient">Every Learning Milestone.</span>
          </h2>

          <p className="why-description">
            Consolidate institutional ERP, intelligent adaptive LMS, and hyper-realistic Test-Ex simulation into a singular, high-performance ecosystem built for measurable growth.
          </p>

          {/* Key Value Points */}
          <div className="why-highlights">
            <div className="why-highlight-item">
              <div className="why-highlight-item__icon">
                <Check size={14} />
              </div>
              <div className="why-highlight-item__text">
                <strong>Autonomous Campus Operations</strong>
                <p>Automated RFID attendance, instant fee reconciliations, and timetable dispatch.</p>
              </div>
            </div>

            <div className="why-highlight-item">
              <div className="why-highlight-item__icon">
                <Check size={14} />
              </div>
              <div className="why-highlight-item__text">
                <strong>NTA-Standard Test-Ex Engine</strong>
                <p>Realistic CBT exam simulation with psychometric scoring and concept-level diagnostics.</p>
              </div>
            </div>

            <div className="why-highlight-item">
              <div className="why-highlight-item__icon">
                <Check size={14} />
              </div>
              <div className="why-highlight-item__text">
                <strong>AI Adaptive LMS Pathways</strong>
                <p>Tailored practice sets that adjust question difficulty to every student&apos;s comprehension.</p>
              </div>
            </div>
          </div>

          {/* CTA Actions */}
          <div className="why-actions">
            <button
              type="button"
              onClick={onOpenDemoModal}
              className="why-button why-button--primary"
            >
              <span>Explore Platform Demo</span>
              <ArrowRight size={15} />
            </button>
            <button
              type="button"
              onClick={onOpenTestExSimulator}
              className="why-button why-button--outline"
            >
              <Zap size={15} />
              <span>Launch Test-Ex Simulator</span>
            </button>
          </div>

         
        </div>

        {/* Right Column: Clean, High-Impact Image Showcase */}
        <div className="why-image-wrapper" aria-label="EducaPilot student learning preview">
          <div className="why-image-card">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&auto=format&fit=crop&q=85"
              alt="Students collaborating happily with modern digital learning tools"
              className="why-main-image"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
