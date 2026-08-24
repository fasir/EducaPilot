import React from 'react';
import { ArrowRight, Compass, HeartHandshake, Lightbulb, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutUsProps {
  onOpenDemoModal: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenDemoModal }) => (
  <main className="about-page">
    <section className="about-hero">
      <div className="about-hero__texture" aria-hidden="true" />
      <div className="about-hero__inner mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div className="about-hero__copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="about-eyebrow"><Sparkles className="h-4 w-4" /> About EducaPilot</span>
          <h1>Building the kind of education <em>people remember.</em></h1>
          <p>EducaPilot brings the people, processes, and progress of a learning community into one thoughtful, beautifully simple operating system.</p>
          <button type="button" onClick={onOpenDemoModal} className="about-button">Meet us in a demo <ArrowRight className="h-4 w-4" /></button>
        </motion.div>
        <motion.div className="about-hero__visual" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.12 }}>
          <img src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1200&auto=format&fit=crop&q=85" alt="Students collaborating around a table" referrerPolicy="no-referrer" />
          <div className="about-hero__badge"><strong>400k+</strong><span>learners moving forward</span></div>
        </motion.div>
      </div>
    </section>

    <section className="about-story mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="about-story__image">
        <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000&auto=format&fit=crop&q=85" alt="Teacher guiding students in a classroom" referrerPolicy="no-referrer" />
        <span className="about-story__note">Education is a team sport.</span>
      </div>
      <div className="about-story__copy">
        <span className="about-eyebrow"><HeartHandshake className="h-4 w-4" /> Why we exist</span>
        <h2>Less admin noise. More room for <span>human potential.</span></h2>
        <p>Schools do some of the most important work in the world, yet their best people are often buried under disconnected tools and repetitive tasks. We started EducaPilot to give every school a clear centre of gravity.</p>
        <p>Today, our platform helps educators spend less time chasing information and more time noticing what makes each learner different.</p>
      </div>
    </section>

    <section className="about-pillars px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="about-pillars__intro">
          <div><span className="about-eyebrow"><Lightbulb className="h-4 w-4" /> Our north star</span><h2>Built around what matters.</h2></div>
          <p>Every product decision starts with the experience of the people using it.</p>
        </div>
        <div className="about-pillars__grid">
          <article className="about-pillar about-pillar--mission">
            <div className="about-pillar__icon"><Compass className="h-5 w-5" /></div><span>01 / Mission</span>
            <h3>Make meaningful learning easier to deliver.</h3>
            <p>We connect school operations, teaching, and assessment so educators can focus on outcomes, not obstacles.</p>
          </article>
          <article className="about-pillar about-pillar--vision">
            <div className="about-pillar__icon"><Sparkles className="h-5 w-5" /></div><span>02 / Vision</span>
            <h3>A future where every learner is seen.</h3>
            <p>We imagine education that is intelligent, inclusive, and personal at every scale, from the first classroom to the last mile.</p>
          </article>
        </div>
      </div>
    </section>

    <section className="about-belief mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <div><span className="about-eyebrow">The EducaPilot way</span><h2>Technology should feel like a capable colleague.</h2></div>
      <p>Clear when you need clarity. Powerful when you need scale. Warm enough to keep people at the centre of every decision.</p>
    </section>
  </main>
);