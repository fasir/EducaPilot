import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';
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

interface Slide {
  id: number;
  image: string;
  eyebrow: string;
  headlinePlain: string;
  headlineHighlight: string;
  headlineSuffix: string;
  sub: string;
}

const slides: Slide[] = [
  {
    id: 0,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&auto=format&fit=crop&q=80',
    eyebrow: 'Next-Gen Education Platform',
    headlinePlain: 'Next-Gen School ERP,',
    headlineHighlight: 'Intelligent LMS',
    headlineSuffix: '& Test-Ex Engine',
    sub: 'Empower every learner with smart tools — built for schools, institutes and self-driven students alike.',
  },
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&auto=format&fit=crop&q=80',
    eyebrow: 'Adaptive Learning Management',
    headlinePlain: 'Personalised Learning Paths',
    headlineHighlight: 'That Actually',
    headlineSuffix: 'Work',
    sub: "AI-powered LMS that adapts to each student's pace, style and goals — from classroom to career.",
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1600&auto=format&fit=crop&q=80',
    eyebrow: 'Real-Time Test & Exam Engine',
    headlinePlain: 'Simulate, Practice &',
    headlineHighlight: 'Ace Every',
    headlineSuffix: 'Exam',
    sub: 'Full-featured test-ex simulator with analytics, mock exams and instant performance feedback.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&auto=format&fit=crop&q=80',
    eyebrow: 'Comprehensive School ERP',
    headlinePlain: 'One Platform for',
    headlineHighlight: 'Your Entire',
    headlineSuffix: 'School',
    sub: 'Admissions, attendance, timetables, fees and reports — all seamlessly connected in one dashboard.',
  },
];

const AUTOPLAY_MS = 5000;

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemoModal, onOpenTestExSimulator }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((idx: number, dir: 1 | -1 = 1) => {
    setDirection(dir);
    setCurrent(idx);
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent(c => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(c => (c - 1 + slides.length) % slides.length);
  }, []);

  /* Autoplay */
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, next]);

  const slide = slides[current];

  const bgVariants = {
    enter: (dir: number) => ({ opacity: 0, scale: 1.04, x: dir > 0 ? 40 : -40 }),
    center: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.85, ease: [0.32, 0.72, 0, 1] } },
    exit: (dir: number) => ({ opacity: 0, scale: 0.98, x: dir > 0 ? -40 : 40, transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] } }),
  };

  const copyVariants = {
    enter: { opacity: 0, y: 22 },
    center: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut', delay: 0.18 } },
    exit: { opacity: 0, y: -14, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  return (
    <section
      className="edu-hero relative overflow-hidden md:pt-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Background Image Slider ─────────────────────────── */}
      <div className="hero-bg-slider" aria-hidden="true">
        <AnimatePresence initial={false} custom={direction} mode="sync">
          <motion.div
            key={slide.id}
            className="hero-bg-slide"
            custom={direction}
            variants={bgVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        </AnimatePresence>
        {/* colour-matched overlay — keeps the brand purple palette intact */}
        <div className="hero-bg-overlay" />
      </div>

      {/* Dot-texture layer */}
      <div className="edu-hero__texture" aria-hidden="true" />

      {/* ── Main content ────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-10">
        <div className="hero-copy text-center">

        

          {/* Animated slide copy with equal height wrapper */}
          <div className="hero-slide-wrapper">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={slide.id}
                custom={direction}
                variants={copyVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="hero-slide-copy"
              >
                {/* eyebrow */}
                {/* <p className="hero-eyebrow">{slide.eyebrow}</p> */}

                {/* headline */}
                <h1>
                  {slide.headlinePlain}{' '}
                  <br />
                  <span>{slide.headlineHighlight}</span>{' '}
                  {slide.headlineSuffix}
                </h1>

                {/* subtitle */}
                <p className="hero-sub">{slide.sub}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="hero-actions"
          >
            <button type="button" onClick={onOpenDemoModal} className="hero-button hero-button--light">
              Start for Free
            </button>
            <button type="button" onClick={onOpenTestExSimulator} className="hero-button hero-button--primary">
              Free Demo
            </button>
            <ArrowRight className="hero-arrow" aria-hidden="true" />
          </motion.div>

          {/* Slider controls: prev / dots / next */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="hero-slider-controls"
          >
            <button
              type="button"
              className="hero-slider-btn"
              onClick={prev}
              aria-label="Previous slide"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="hero-dots" role="tablist" aria-label="Slide indicators">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`hero-dot${i === current ? ' hero-dot--active' : ''}`}
                  onClick={() => goTo(i, i > current ? 1 : -1)}
                />
              ))}
            </div>

            <button
              type="button"
              className="hero-slider-btn"
              onClick={next}
              aria-label="Next slide"
            >
              <ChevronRight size={16} />
            </button>
          </motion.div>
        </div>

        {/* ── Portrait gallery row ─────────────────────────── */}

      </div>

      {/* Progress bar */}
      {!paused && (
        <div className="hero-progress-bar" aria-hidden="true">
          <motion.div
            key={current}
            className="hero-progress-fill"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: AUTOPLAY_MS / 1000, ease: 'linear' }}
          />
        </div>
      )}
    </section>
  );
};
