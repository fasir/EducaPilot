import React from 'react';
import { ArrowRight, BarChart3, BusFront, CalendarCheck2, CreditCard, Fingerprint, Layers, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface SchoolErpProps {
  onOpenDemoModal: () => void;
}

const modules = [
  { icon: CreditCard, title: 'Fees without friction', text: 'Automated invoicing, payments, reminders, and reconciliation in one clear finance flow.' },
  { icon: Fingerprint, title: 'Attendance that cares', text: 'Connect biometric, RFID, and parent alerts so every arrival is accounted for.' },
  { icon: BarChart3, title: 'Decisions with context', text: 'See attendance, outcomes, and operations together, ready for your next decision.' },
  { icon: BusFront, title: 'Safer school journeys', text: 'Live fleet visibility and smart route alerts that keep families informed.' }
];

export const SchoolErp: React.FC<SchoolErpProps> = ({ onOpenDemoModal }) => (
  <main className="erp-page">
    <section className="erp-hero">
      <div className="erp-hero__grid" aria-hidden="true" />
      <div className="erp-hero__inner mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div className="erp-hero__copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
          <span className="erp-eyebrow"><Layers className="h-4 w-4" /> School ERP Suite</span>
          <h1>The calm behind every <span>great school day.</span></h1>
          <p>One intelligent command centre for school operations, staff, families, and the moments that matter most.</p>
          <button type="button" onClick={onOpenDemoModal} className="erp-button">Book a campus demo <ArrowRight className="h-4 w-4" /></button>
          <div className="erp-hero__trust"><ShieldCheck className="h-4 w-4" /><span>Secure, connected, ready for every campus</span></div>
        </motion.div>
        <motion.div className="erp-dashboard" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .12 }}>
          <div className="erp-dashboard__top"><span className="erp-dashboard__brand"><i /> Campus command centre</span><span>Monday, 24 Aug</span></div>
          <div className="erp-dashboard__heading"><div><small>Good morning, Principal Mehta</small><strong>Campus at a glance</strong></div><div className="erp-dashboard__avatar">PM</div></div>
          <div className="erp-dashboard__metrics"><div><span>Attendance today</span><strong>96.8%</strong><i>+2.4%</i></div><div><span>Fee collection</span><strong>₹42.8L</strong><i>On track</i></div><div><span>Open requests</span><strong>18</strong><i>4 urgent</i></div></div>
          <div className="erp-dashboard__activity"><div className="erp-dashboard__activity-head"><strong>Live campus activity</strong><span>View all <ArrowRight className="h-3 w-3" /></span></div><div><CalendarCheck2 /><span><strong>Grade 8 timetable published</strong><small>Academic office · 2 mins ago</small></span><b>Done</b></div><div><BusFront /><span><strong>Route 04 reached campus</strong><small>Transport desk · 8 mins ago</small></span><b>Live</b></div></div>
          <span className="erp-dashboard__float">99.99% uptime</span>
        </motion.div>
      </div>
    </section>

    <section className="erp-story mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="erp-story__image"><img src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=1100&auto=format&fit=crop&q=85" alt="Teacher working with students in a bright classroom" referrerPolicy="no-referrer" /><span>Every detail, connected.</span></div>
      <div className="erp-story__copy"><span className="erp-eyebrow">One campus. One source of truth.</span><h2>Give your team back their <em>headspace.</em></h2><p>EducaPilot turns the daily tangle of schedules, fees, attendance, transport, and communication into one beautifully legible operating rhythm.</p><div className="erp-story__stats"><div><strong>3.8x</strong><span>admission conversion lift</span></div><div><strong>0.4s</strong><span>average check-in speed</span></div></div></div>
    </section>

    <section className="erp-modules px-5 py-20 sm:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><div className="erp-section-heading"><div><span className="erp-eyebrow">The everyday advantage</span><h2>Operations, with a human pulse.</h2></div><p>Purpose-built modules that help every role move with more confidence.</p></div><div className="erp-modules__grid">{modules.map(({ icon: Icon, title, text }, index) => <article className="erp-module" key={title}><span className="erp-module__number">0{index + 1}</span><div className="erp-module__icon"><Icon className="h-5 w-5" /></div><h3>{title}</h3><p>{text}</p><ArrowRight className="erp-module__arrow h-4 w-4" /></article>)}</div></div></section>

    <section className="erp-bottom mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"><div><span className="erp-eyebrow">Designed for progress</span><h2>A school that runs smoothly makes more room for learning.</h2></div><button type="button" onClick={onOpenDemoModal} className="erp-button erp-button--dark">See the full platform <ArrowRight className="h-4 w-4" /></button></section>
  </main>
);