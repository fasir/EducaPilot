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
  ChevronRight,
  House,
  Info,
  Mail
} from 'lucide-react';
import { PillarType } from '../types';
import { EducaPilotLogo } from './EducaPilotLogo';

interface NavbarProps {
  activeView: 'home' | 'about' | 'lms' | 'erp' | 'contact';
  onNavigate: (view: 'home' | 'about' | 'lms' | 'erp' | 'contact') => void;
  activePillar: PillarType;
  onSelectPillar: (pillar: PillarType) => void;
  onOpenDemoModal: () => void;
  onOpenTestExSimulator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  onNavigate,
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
        className={`site-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-lg shadow-slate-200/30 py-2.5'
          : 'bg-white/80 backdrop-blur-md py-4'
          }`}
      >
        <div className="site-header__inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Official Logo */}
            <a
              href="#home"
              onClick={(event) => { event.preventDefault(); onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl"
              aria-label="EducaPilot Home"
            >
              <EducaPilotLogo variant="dark" size="md" showTagline={true} />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="site-header__nav hidden md:flex items-center gap-1 bg-slate-100 p-1.5 rounded-full backdrop-blur-md shadow-inner">
              <button onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-200 ${activeView === 'home' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-white'}`}><House className="w-3.5 h-3.5" /> Home</button>
              {navItems.map((item) => {
                const isSelected = item.id === 'lms' ? activeView === 'lms' : item.id === 'erp' ? activeView === 'erp' : item.isPillar && activePillar === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (item.id === 'lms') {
                        onNavigate('lms');
                        setMobileMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        return;
                      }
                      if (item.id === 'erp') {
                        onNavigate('erp');
                        setMobileMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        return;
                      }
                      onNavigate('home');
                      if (item.isPillar) {
                        onSelectPillar(item.id as PillarType);
                        scrollToSection(item.id);
                      } else {
                        scrollToSection(item.id);
                      }
                    }}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-200 ${isSelected
                      ? 'bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/25'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                      }`}
                  >
                    <span className={isSelected ? 'text-blue-200' : 'text-slate-400'}>
                      {item.icon}
                    </span>
                    {item.label}
                  </button>
                );
              })}
              <button onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-200 ${activeView === 'about' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-white'}`}><Info className="w-3.5 h-3.5" /> About Us</button>
              <button onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-200 ${activeView === 'contact' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-white'}`}><Mail className="w-3.5 h-3.5" /> Contact Us</button>
            </nav>

            {/* Desktop Action Buttons */}
            <div className="site-header__actions hidden lg:flex items-center gap-3">
              <button
                onClick={onOpenTestExSimulator}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-[13px] font-semibold text-blue-700 bg-blue-50 border border-blue-200 hover:bg-blue-100 hover:border-blue-300 transition-all duration-200 group"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                <span>Live Test-Ex </span>
                <ChevronRight className="w-3.5 h-3.5 text-blue-500 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenDemoModal}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-semibold text-white bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 hover:from-blue-400 hover:to-purple-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/35 active:scale-95 transition-all duration-200"
              >
                <span>Book A Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="site-header__mobile-actions flex md:hidden items-center gap-2">
              <button
                onClick={onOpenDemoModal}
                className="px-3 py-1.5 rounded-lg text-[13px] font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 shadow"
              >
                Demo
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Slide-Down Drawer */}
        {mobileMenuOpen && (
          <div className="site-header__drawer sm:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 mt-3 space-y-3 shadow-2xl">
            <div className="text-[13px] font-semibold text-slate-400 uppercase tracking-wider px-2">
              Platform Modules
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button onClick={() => { onNavigate('home'); setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="col-span-3 flex items-center justify-center gap-2 p-2.5 rounded-xl text-center text-[13px] font-semibold border border-blue-200 bg-blue-50 text-blue-700"><House className="h-4 w-4" /> Home</button>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate('home');
                    if (item.id === 'lms') {
                      onNavigate('lms');
                      setMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      return;
                    }
                    if (item.id === 'erp') {
                      onNavigate('erp');
                      setMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      return;
                    }
                    onSelectPillar(item.id);
                    scrollToSection(item.id);
                  }}
                  className={`flex flex-col items-center justify-center gap-1.5 p-2.5 rounded-xl text-center text-[13px] font-medium border transition-all ${(item.id === 'lms' ? activeView === 'lms' : item.id === 'erp' ? activeView === 'erp' : activePillar === item.id)
                    ? 'bg-blue-50 border-blue-300 text-blue-700'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                >
                  <span className="p-1 rounded-lg bg-white text-blue-600 shadow-sm">
                    {item.icon}
                  </span>
                  <span className="text-[13px] font-medium">{item.label}</span>
                </button>
              ))}
              <button onClick={() => { onNavigate('about'); setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="col-span-3 flex items-center justify-center gap-2 p-2.5 rounded-xl text-center text-[13px] font-semibold border border-slate-200 bg-slate-50 text-slate-700"><Info className="h-4 w-4" /> About Us</button>
              <button onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="col-span-3 flex items-center justify-center gap-2 p-2.5 rounded-xl text-center text-[13px] font-semibold border border-blue-200 bg-blue-50 text-blue-700"><Mail className="h-4 w-4" /> Contact Us</button>
            </div>

            <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTestExSimulator();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-[13px] font-semibold bg-blue-50 border border-blue-200 text-blue-700"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-500" />
                Launch Live Test-Ex Mini Mock
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemoModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-[13px] font-semibold bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25"
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
