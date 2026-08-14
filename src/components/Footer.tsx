import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp
} from 'lucide-react';
import { PillarType } from '../types';
import { EducaPilotLogo } from './EducaPilotLogo';

interface FooterProps {
  onSelectPillar: (pillar: PillarType) => void;
  onOpenDemoModal: () => void;
  onOpenTestExSimulator: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectPillar,
  onOpenDemoModal,
  onOpenTestExSimulator
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Overview with Exact Official Logo */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="inline-block">
              <EducaPilotLogo variant="light" />
            </a>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Empowering 1,200+ schools, colleges, and competitive coaching academies worldwide with Next-Gen ERP, Intelligent LMS, Test-Ex CBT Exam Simulation, and Real-Time Student Diagnostic Analytics.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational • 99.99% SLA</span>
            </div>
          </div>

          {/* Col 2: Core Pillars */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Core Modules
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    onSelectPillar('erp');
                    document.getElementById('erp')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-sky-300 transition-colors"
                >
                  School ERP Suite
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectPillar('lms');
                    document.getElementById('lms')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-sky-300 transition-colors"
                >
                  Intelligent LMS
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTestExSimulator}
                  className="hover:text-sky-300 transition-colors text-sky-400 font-semibold"
                >
                  Test-Ex CBT Mock Engine ↗
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectPillar('analytics');
                    document.getElementById('analytics')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-sky-300 transition-colors"
                >
                  Real-Time Analytics
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    document.getElementById('lite-steps')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-sky-300 transition-colors"
                >
                  Lite Steps™ Framework
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Competitive Exams */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Test-Ex Syllabus Banks
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>NEET-UG Medical Bank (720 Scale)</li>
              <li>IIT-JEE Main &amp; Advanced</li>
              <li>Digital SAT &amp; AP Exams</li>
              <li>UPSC Civil Services Prelims</li>
              <li>CBSE &amp; ICSE Board Question Banks</li>
              <li>Olympiads &amp; KVPY Series</li>
            </ul>
          </div>

          {/* Col 4: Contact & Demo */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Institutional Advisory
            </div>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <span>institutions@educapilot.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>+91 (800) 420-EDUCA</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>Global HQ: Bengaluru &amp; Singapore</span>
              </div>
            </div>

            <button
              onClick={onOpenDemoModal}
              className="mt-2 w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-400 hover:to-purple-500 transition-all shadow-md shadow-indigo-600/30"
            >
              Book School Demo
            </button>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} EducaPilot Inc. All rights reserved. ISO 27001 &amp; SOC-2 Certified.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-200">Privacy Policy</a>
            <a href="#" className="hover:text-slate-200">Terms of Service</a>
            <a href="#" className="hover:text-slate-200">FERPA &amp; GDPR Compliance</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
