import React, { useState, useEffect } from 'react';
import { 
  Layers, 
  BookOpen, 
  CheckCircle2, 
  BarChart3, 
  Sparkles, 
  Menu, 
  X, 
  PhoneCall, 
  ArrowRight,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { PillarType } from '../types';
import { EducaPilotLogo } from './EducaPilotLogo';

interface NavbarProps {
  activePillar: PillarType;
  onSelectPillar: (pillar: PillarType) => void;
  onOpenDemoModal: () => void;
  onOpenTestExSimulator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePillar,
  onSelectPillar,
  onOpenDemoModal,
  onOpenTestExSimulator
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PillarType; label: string; icon: React.ReactNode; isPillar?: boolean }[] = [
    { id: 'erp', label: 'School ERP', icon: <Layers className="w-3.5 h-3.5" />, isPillar: true },
    { id: 'lms', label: 'LMS Platform', icon: <BookOpen className="w-3.5 h-3.5" />, isPillar: true },
    { id: 'testex', label: 'Test-Ex CBT', icon: <CheckCircle2 className="w-3.5 h-3.5" />, isPillar: true },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-900/90 backdrop-blur-xl border-b border-slate-800/80 shadow-xl shadow-slate-950/20 py-2.5' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Official Logo */}
            <a 
              href="#" 
              className="flex items-center group focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-xl"
              aria-label="EducaPilot Home"
            >
              <EducaPilotLogo variant="light" size="md" showTagline={true} />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-950/80 p-1.5 rounded-full border border-slate-800/90 backdrop-blur-md shadow-inner">
              {navItems.map((item) => {
                const isSelected = item.isPillar && activePillar === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (item.isPillar) {
                        onSelectPillar(item.id as PillarType);
                        scrollToSection(item.id);
                      } else {
                        scrollToSection(item.id);
                      }
                    }}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                      isSelected
                        ? 'bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/25'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                    }`}
                  >
                    <span className={isSelected ? 'text-sky-200' : 'text-slate-400'}>
                      {item.icon}
                    </span>
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenTestExSimulator}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-sky-300 bg-sky-950/50 border border-sky-500/30 hover:bg-sky-900/50 hover:border-sky-400/60 transition-all duration-200 group"
              >
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                <span>Live Test-Ex CBT</span>
                <ChevronRight className="w-3.5 h-3.5 text-sky-400 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenDemoModal}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-400 hover:to-purple-500 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/40 active:scale-95 transition-all duration-200"
              >
                <span>Book Campus Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onOpenDemoModal}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow"
              >
                Demo
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-Down Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-3 backdrop-blur-2xl shadow-2xl">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2">
              Platform Modules
            </div>
            <div className="grid grid-cols-3 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectPillar(item.id);
                    scrollToSection(item.id);
                  }}
                  className={`flex flex-col items-center justify-center gap-1.5 p-2.5 rounded-xl text-center text-xs font-medium border transition-all ${
                    activePillar === item.id
                      ? 'bg-indigo-600/20 border-indigo-500/40 text-sky-200'
                      : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <span className="p-1 rounded-lg bg-slate-800 text-sky-400">
                    {item.icon}
                  </span>
                  <span className="text-[11px] font-medium">{item.label}</span>
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTestExSimulator();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold bg-sky-950/60 border border-sky-500/40 text-sky-300"
              >
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                Launch Live Test-Ex Mini Mock
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemoModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30"
              >
                <PhoneCall className="w-4 h-4" />
                Schedule Personalized Demo
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
