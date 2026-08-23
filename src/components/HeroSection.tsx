import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { PillarType } from '../types';

interface HeroSectionProps {
  onSelectPillar: (pillar: PillarType) => void;
  onOpenDemoModal: () => void;
  onOpenTestExSimulator: () => void;
}

const portraits = [
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=180&auto=format&fit=crop&q=85', className: 'hero-person hero-person--left' },
  { src: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=220&auto=format&fit=crop&q=85', className: 'hero-person hero-person--small-left' },
  { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=240&auto=format&fit=crop&q=85', className: 'hero-person hero-person--center-left' },
  { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=240&auto=format&fit=crop&q=85', className: 'hero-person hero-person--center-right' },
  { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=190&auto=format&fit=crop&q=85', className: 'hero-person hero-person--right' },
  { src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=85', className: 'hero-person hero-person--small-right' },
  { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=110&auto=format&fit=crop&q=85', className: 'hero-person hero-person--far-right' },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemoModal, onOpenTestExSimulator }) => {
  return (
    <section className="edu-hero relative overflow-hidden md:pt-20">
      <div className="edu-hero__texture" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="hero-copy text-center">
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="hero-proof">
            <div className="hero-proof__faces" aria-hidden="true">
              {portraits.slice(1, 4).map((portrait) => <img key={portrait.src} src={portrait.src} alt="" referrerPolicy="no-referrer" />)}
            </div>
            <span><strong>1000+</strong> Top Class Mentors</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}>
           Next-Gen School ERP, Intelligent LMS & Test-Ex Engine
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2 }}>
            Simple, practical courses designed to help you learn at your own<br className="hidden sm:block" />
            pace and grow your career with confidence.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.3 }} className="hero-actions">
            <button type="button" onClick={onOpenDemoModal} className="hero-button hero-button--light">Explore Courses</button>
            <button type="button" onClick={onOpenTestExSimulator} className="hero-button hero-button--primary">Browse Courses</button>
            <ArrowRight className="hero-arrow" aria-hidden="true" />
          </motion.div>
        </div>

        <div className="hero-gallery" aria-label="EducaPilot learners and mentors">
          <GraduationCap className="hero-cap" aria-hidden="true" />
          <span className="hero-spark hero-spark--left" aria-hidden="true">✦</span>
          <span className="hero-spark hero-spark--right" aria-hidden="true">✦</span>
          <span className="hero-spark hero-spark--far" aria-hidden="true">✦</span>
          <div className="hero-doodle hero-doodle--left" aria-hidden="true" />
          <div className="hero-doodle hero-doodle--right" aria-hidden="true" />
          {portraits.map((portrait, index) => (
            <motion.img key={portrait.src} src={portrait.src} alt="" referrerPolicy="no-referrer" className={portrait.className} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.35 + index * 0.07 }} />
          ))}
          <div className="hero-stat hero-stat--students"><strong>400k+</strong><span>Students</span></div>
          <div className="hero-stat hero-stat--tutors"><strong>1000+</strong><span>Expert Tutors</span></div>
        </div>
      </div>
    </section>
  );
};
