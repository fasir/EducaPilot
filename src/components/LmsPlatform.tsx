import React from 'react';
import { ArrowRight, BrainCircuit, CheckCircle2, Play, Sparkles, Video, Zap } from 'lucide-react';
import { motion } from 'motion/react';

interface LmsPlatformProps {
  onOpenDemoModal: () => void;
}

const capabilities = [
  { icon: BrainCircuit, title: 'Adaptive learning paths', text: 'Every learner gets the right next step, shaped by their pace and progress.' },
  { icon: Video, title: 'Live, human classrooms', text: 'Bring lessons, recordings, whiteboards, and discussion into one calm workspace.' },
  { icon: Zap, title: 'Instant feedback loops', text: 'Turn every quiz and assignment into a clear moment for growth.' }
];

export const LmsPlatform: React.FC<LmsPlatformProps> = ({ onOpenDemoModal }) => (
  <main className="lms-page">
    <section className="lms-hero">
      <div className="lms-hero__wash" aria-hidden="true" />
      <div className="lms-hero__inner mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div className="lms-hero__copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
          <span className="lms-eyebrow"><Sparkles className="h-4 w-4" /> Intelligent LMS</span>
          <h1>Learning that moves at the speed of <span>curiosity.</span></h1>
          <p>One connected learning studio for teachers, students, and the ideas that take them further.</p>
          <div className="lms-hero__actions">
            <button type="button" onClick={onOpenDemoModal} className="lms-button lms-button--primary">See it in action <ArrowRight className="h-4 w-4" /></button>
            <span className="lms-hero__proof"><CheckCircle2 className="h-4 w-4" /> Built for 400k+ learners</span>
          </div>
        </motion.div>

        <motion.div className="lms-hero__workspace" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .12 }}>
          <div className="lms-workspace__top"><span className="lms-workspace__status"><i /> Live learning studio</span><span>Today, 09:41</span></div>
          <div className="lms-workspace__welcome"><div><span>Good morning, Ananya</span><strong>Your learning pulse</strong></div><div className="lms-workspace__score">98.6<small> percentile</small></div></div>
          <div className="lms-workspace__chart"><div className="lms-chart__labels"><span>Weekly momentum</span><strong>+24%</strong></div><div className="lms-chart__bars"><i /><i /><i /><i /><i /><i /><i /></div></div>
          <div className="lms-workspace__lesson"><div className="lms-lesson__play"><Play className="h-4 w-4 fill-current" /></div><div><span>Continue lesson</span><strong>Thermodynamics &amp; Energy</strong></div><ArrowRight className="h-4 w-4 ml-auto text-indigo-500" /></div>
          <div className="lms-workspace__tag">AI coach active <Sparkles className="h-3 w-3" /></div>
        </motion.div>
      </div>
    </section>

    <section className="lms-intro mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="lms-intro__image"><img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1100&auto=format&fit=crop&q=85" alt="A collaborative learning team reviewing ideas" referrerPolicy="no-referrer" /><span>Make space for better questions.</span></div>
      <div className="lms-intro__copy"><span className="lms-eyebrow">More than a content library</span><h2>A learning experience people want to return to.</h2><p>From the first live class to the final assessment, EducaPilot makes progress visible and participation feel natural.</p><div className="lms-stat-row"><div><strong>4x</strong><span>faster lesson prep</span></div><div><strong>70%</strong><span>less grading time</span></div></div></div>
    </section>

    <section className="lms-capabilities px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl"><div className="lms-section-heading"><div><span className="lms-eyebrow">One flow, every learner</span><h2>Everything a great lesson needs.</h2></div><p>Purposeful tools that stay out of the way until they make a difference.</p></div><div className="lms-capabilities__grid">{capabilities.map(({ icon: Icon, title, text }, index) => <article className="lms-capability" key={title}><div className="lms-capability__number">0{index + 1}</div><div className="lms-capability__icon"><Icon className="h-5 w-5" /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div>
    </section>

    <section className="lms-quote mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"><div><span className="lms-eyebrow">The outcome</span><h2>More engaged minds.<br /><em>More confident futures.</em></h2></div><button type="button" onClick={onOpenDemoModal} className="lms-button lms-button--dark">Bring this to your campus <ArrowRight className="h-4 w-4" /></button></section>
  </main>
);