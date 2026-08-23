import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhyEducaPilotSection } from './components/WhyEducaPilotSection';
import { CoreFeaturesSection } from './components/CoreFeaturesSection';
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
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-200 selection:text-slate-900 pb-16 sm:pb-0">
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

        <WhyEducaPilotSection
          onOpenDemoModal={handleOpenDemoModal}
          onOpenTestExSimulator={handleOpenTestExSimulator}
        />

        <CoreFeaturesSection />

        {/* Live E-Learning Students Visual Showcase Strip */}
        <StudentShowcaseStrip
          onOpenDemoModal={handleOpenDemoModal}
          onOpenTestExSimulator={handleOpenTestExSimulator}
        />

       

      
       


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
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 border-t border-slate-200 p-2.5 backdrop-blur-xl flex items-center justify-around gap-1 shadow-lg shadow-slate-200/50">
        <button
          onClick={() => {
            setActivePillar('erp');
            document.getElementById('erp')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center gap-1 p-1 text-[10px] text-slate-500 hover:text-blue-600"
        >
          <Layers className="w-4 h-4" />
          <span>ERP</span>
        </button>

        <button
          onClick={() => {
            setActivePillar('lms');
            document.getElementById('lms')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center gap-1 p-1 text-[10px] text-slate-500 hover:text-blue-600"
        >
          <BookOpen className="w-4 h-4" />
          <span>LMS</span>
        </button>

        <button
          onClick={handleOpenTestExSimulator}
          className="flex flex-col items-center gap-1 p-1.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-[10px] shadow-lg shadow-indigo-500/25"
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>Test-Ex</span>
        </button>

        <button
          onClick={() => {
            setActivePillar('analytics');
            document.getElementById('analytics')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center gap-1 p-1 text-[10px] text-slate-500 hover:text-blue-600"
        >
          <BarChart3 className="w-4 h-4" />
          <span>Analytics</span>
        </button>

        <button
          onClick={handleOpenDemoModal}
          className="flex flex-col items-center gap-1 p-1 text-[10px] text-blue-600 font-semibold"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Demo</span>
        </button>
      </div>
    </div>
  );
}
