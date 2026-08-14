import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StudentShowcaseStrip } from './components/StudentShowcaseStrip';
import { SchoolErpSection } from './components/SchoolErpSection';
import { LmsPlatformSection } from './components/LmsPlatformSection';
import { TestExSection } from './components/TestExSection';
import { AnalyticsSection } from './components/AnalyticsSection';
import { LiteStepsSection } from './components/LiteStepsSection';
import { RoiCalculatorSection } from './components/RoiCalculatorSection';
import { RoleExperienceSection } from './components/RoleExperienceSection';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { TrustTestimonials } from './components/TrustTestimonials';
import { InteractiveFaq } from './components/InteractiveFaq';
import { DemoModal } from './components/DemoModal';
import { Footer } from './components/Footer';
import { PillarType } from './types';
import {
  Layers,
  BookOpen,
  CheckCircle2,
  BarChart3,
  PhoneCall
} from 'lucide-react';

export default function App() {
  const [activePillar, setActivePillar] = useState<PillarType>('testex');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState<boolean>(false);

  const handleSelectPillar = (pillar: PillarType) => {
    setActivePillar(pillar);
  };

  const handleOpenDemoModal = () => {
    setIsDemoModalOpen(true);
  };

  const handleOpenTestExSimulator = () => {
    setActivePillar('testex');
    const el = document.getElementById('testex');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-sky-500 selection:text-white pb-16 sm:pb-0">
      {/* Top Navbar */}
      <Navbar
        activePillar={activePillar}
        onSelectPillar={handleSelectPillar}
        onOpenDemoModal={handleOpenDemoModal}
        onOpenTestExSimulator={handleOpenTestExSimulator}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero with interactive live cockpit */}
        <HeroSection
          onSelectPillar={handleSelectPillar}
          onOpenDemoModal={handleOpenDemoModal}
          onOpenTestExSimulator={handleOpenTestExSimulator}
        />

        {/* Live E-Learning Students Visual Showcase Strip */}
        <StudentShowcaseStrip
          onOpenDemoModal={handleOpenDemoModal}
          onOpenTestExSimulator={handleOpenTestExSimulator}
        />

        {/* Pillar 01: School ERP (Light Canvas) */}
        <SchoolErpSection />

        {/* Pillar 02: LMS Platform (Dark Ambient Cockpit) */}
        <LmsPlatformSection />

        {/* Pillar 03: Test-Ex High-Stakes Competitive Exam Engine (Light Canvas) */}
        <TestExSection onOpenDemoModal={handleOpenDemoModal} />

        {/* Pillar 04: Real-Time Student Performance Analytics (Dark Ambient Cockpit) */}
        <AnalyticsSection />

        {/* Lite Steps Zero-Downtime Migration Framework (Light Canvas) */}
        <LiteStepsSection onOpenDemoModal={handleOpenDemoModal} />

        {/* Role-Based Stakeholder Experience Selector (Dark Ambient Cockpit) */}
        <RoleExperienceSection />

        {/* Interactive ROI & Efficiency Calculator (Light Canvas) */}
        <RoiCalculatorSection onOpenDemoModal={handleOpenDemoModal} />

        {/* Market Benchmark Comparison Matrix (Dark Ambient Cockpit) */}
        <ComparisonMatrix />

        {/* Trust & Testimonials (Light Canvas) */}
        <TrustTestimonials />

        {/* Searchable FAQ Accordion (Light Canvas) */}
        <InteractiveFaq />
      </main>

      {/* Footer */}
      <Footer
        onSelectPillar={handleSelectPillar}
        onOpenDemoModal={handleOpenDemoModal}
        onOpenTestExSimulator={handleOpenTestExSimulator}
      />

      {/* Interactive Personalized Demo Walkthrough Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      {/* Mobile Sticky Quick-Dock for Touch-Friendly Navigation */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/90 border-t border-slate-800 p-2.5 backdrop-blur-xl flex items-center justify-around gap-1">
        <button
          onClick={() => {
            setActivePillar('erp');
            document.getElementById('erp')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center gap-1 p-1 text-[10px] text-slate-400 hover:text-sky-300"
        >
          <Layers className="w-4 h-4" />
          <span>ERP</span>
        </button>

        <button
          onClick={() => {
            setActivePillar('lms');
            document.getElementById('lms')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center gap-1 p-1 text-[10px] text-slate-400 hover:text-sky-300"
        >
          <BookOpen className="w-4 h-4" />
          <span>LMS</span>
        </button>

        <button
          onClick={handleOpenTestExSimulator}
          className="flex flex-col items-center gap-1 p-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold text-[10px] shadow-lg shadow-indigo-600/30"
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>Test-Ex</span>
        </button>

        <button
          onClick={() => {
            setActivePillar('analytics');
            document.getElementById('analytics')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center gap-1 p-1 text-[10px] text-slate-400 hover:text-sky-300"
        >
          <BarChart3 className="w-4 h-4" />
          <span>Analytics</span>
        </button>

        <button
          onClick={handleOpenDemoModal}
          className="flex flex-col items-center gap-1 p-1 text-[10px] text-sky-400 font-semibold"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Demo</span>
        </button>
      </div>
    </div>
  );
}
