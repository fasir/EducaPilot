import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  Layers,
  BookOpen,
  CheckCircle2,
  BarChart3,
  Zap,
  Play,
  Check,
  TrendingUp,
  Timer,
  CreditCard,
  Bus,
  Cpu,
  Users
} from 'lucide-react';
import { PillarType } from '../types';

interface HeroSectionProps {
  onSelectPillar: (pillar: PillarType) => void;
  onOpenDemoModal: () => void;
  onOpenTestExSimulator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectPillar,
  onOpenDemoModal,
  onOpenTestExSimulator
}) => {
  const [activeHeroTab, setActiveHeroTab] = useState<'erp' | 'lms' | 'testex' | 'analytics'>('testex');

  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 text-white">
      {/* Background glow meshes matching brand cyan/indigo/purple gradient */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[520px] bg-gradient-to-tr from-sky-500/15 via-indigo-600/15 to-purple-600/15 blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-sky-500/10 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-purple-600/10 blur-[100px] pointer-events-none -z-10" />

      {/* Subtle geometric dot grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415518_1px,transparent_1px),linear-gradient(to_bottom,#33415518_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_75%,transparent_100%)] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Floating Badge */}
        {/* <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 shadow-inner backdrop-blur-xl group cursor-pointer hover:border-sky-400/50 transition-all"
            onClick={() => {
              const el = document.getElementById('lite-steps');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
            </span>
            <span className="text-xs font-semibold text-slate-200">
              Lite Steps™ Architecture
            </span>
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30">
              48h Go-Live
            </span>
            <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-sky-300 group-hover:translate-x-0.5 transition-all" />
          </motion.div>
        </div> */}

        {/* Main Headline & Value Proposition */}
        <div className="text-center mt-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Next-Gen <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">School ERP</span>, Intelligent LMS &amp; <span className="bg-gradient-to-r from-sky-300 via-indigo-400 to-purple-300 bg-clip-text text-transparent">Test-Ex</span> Engine
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed"
          >
            A unified education operating system built for premier schools and competitive coaching institutes. Manage campus operations, deliver interactive courses, run high-stakes <span className="text-sky-300 font-semibold">NEET/JEE/SAT CBT mocks</span>, and track <span className="text-purple-300 font-semibold">real-time student analytics</span> with frictionless 3-step deployment.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <button
              onClick={onOpenTestExSimulator}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-400 hover:to-purple-500 shadow-xl shadow-indigo-600/30 active:scale-95 transition-all duration-200"
            >
              <Zap className="w-4 h-4 fill-white text-white" />
              <span>Launch Live Test-Ex Mini Mock</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenDemoModal}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700/80 shadow-lg hover:border-sky-500/40 transition-all duration-200"
            >
              <span>Book 1-on-1 Campus Demo</span>
            </button>
          </motion.div>

          {/* Highlights Mini Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-300"
          >
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-sky-400" />
              <span>Zero Fee Leakage Automation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-indigo-400" />
              <span>350,000+ Tagged Exam Questions</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>98.6% Score Prediction Accuracy</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-purple-400" />
              <span>Lite Steps 48-Hour Migration</span>
            </div>
          </motion.div>
        </div>

        {/* Interactive Live Sandbox Preview Window */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 max-w-5xl mx-auto relative"
        >
          {/* Ambient Glow behind Cockpit */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-purple-600/20 rounded-2xl blur-xl opacity-75 -z-10" />

          <div className="relative rounded-2xl p-1 bg-gradient-to-b from-slate-700/80 via-slate-800/60 to-slate-900/90 shadow-2xl shadow-slate-950/80 border border-slate-700/80">
            {/* Device Mockup Header */}
            <div className="bg-slate-950 rounded-xl overflow-hidden">
              {/* Window Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-3 bg-slate-900/95 border-b border-slate-800 gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="hidden sm:inline text-slate-300">app.educapilot.com/hub/live-telemetry</span>
                    <span className="text-slate-500 hidden md:inline">| 18ms latency</span>
                  </div>
                </div>

                {/* Interactive Mode Switcher Tabs */}
                <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
                  <button
                    onClick={() => setActiveHeroTab('erp')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeHeroTab === 'erp'
                        ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow'
                        : 'text-slate-400 hover:text-slate-200'
                      }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>School ERP</span>
                  </button>
                  <button
                    onClick={() => setActiveHeroTab('lms')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeHeroTab === 'lms'
                        ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow'
                        : 'text-slate-400 hover:text-slate-200'
                      }`}
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>LMS</span>
                  </button>
                  <button
                    onClick={() => setActiveHeroTab('testex')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeHeroTab === 'testex'
                        ? 'bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-600 text-white font-bold shadow'
                        : 'text-slate-400 hover:text-slate-200'
                      }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Test-Ex CBT</span>
                  </button>
                  <button
                    onClick={() => setActiveHeroTab('analytics')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeHeroTab === 'analytics'
                        ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow'
                        : 'text-slate-400 hover:text-slate-200'
                      }`}
                  >
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span>Analytics</span>
                  </button>
                </div>
              </div>

              {/* Sandbox Screen Content */}
              <div className="p-4 sm:p-6 min-h-[380px] bg-slate-950/90 relative">
                <AnimatePresence mode="wait">
                  {activeHeroTab === 'erp' && (
                    <motion.div
                      key="erp"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                      {/* Live Fee Stream */}
                      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CreditCard className="w-4 h-4 text-emerald-400" />
                            <span className="text-xs font-semibold text-slate-200">Live Fee Invoicing</span>
                          </div>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono">
                            Auto-Reconciled
                          </span>
                        </div>
                        <div className="text-2xl font-bold text-white font-mono">₹ 14,82,500</div>
                        <div className="text-xs text-slate-400">99.4% term fees collected via 1-tap parent UPI &amp; Cards.</div>
                        <div className="space-y-1.5 pt-2 border-t border-slate-800">
                          <div className="flex justify-between text-[11px] text-slate-300">
                            <span>Aditya Verma (Grade 10-A)</span>
                            <span className="text-emerald-400 font-mono">+₹45,000</span>
                          </div>
                          <div className="flex justify-between text-[11px] text-slate-400">
                            <span>Priya Menon (Grade 12-B)</span>
                            <span className="text-emerald-400 font-mono">+₹58,000</span>
                          </div>
                        </div>
                      </div>

                      {/* GPS Fleet Telemetry */}
                      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Bus className="w-4 h-4 text-sky-400" />
                            <span className="text-xs font-semibold text-slate-200">GPS Fleet Tracking</span>
                          </div>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300">
                            Route 04 Active
                          </span>
                        </div>
                        <div className="h-20 rounded-lg bg-slate-950 border border-slate-800 p-2 relative overflow-hidden flex items-center justify-center">
                          <div className="absolute inset-0 bg-[radial-gradient(#38bdf815_1px,transparent_1px)] [background-size:8px_8px]" />
                          <div className="flex items-center gap-3 z-10">
                            <div className="w-8 h-8 rounded-full bg-sky-500/20 border border-sky-400/50 flex items-center justify-center text-sky-300 animate-pulse">
                              <Bus className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white">ETA: 4 Mins</div>
                              <div className="text-[10px] text-slate-400">Palm Grove Gate (48 km/h)</div>
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-slate-400">Instant parent SMS &amp; app alert sent as bus approaches stop.</div>
                      </div>

                      {/* Biometric & Timetable AI */}
                      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Cpu className="w-4 h-4 text-indigo-400" />
                            <span className="text-xs font-semibold text-slate-200">AI Timetable Matrix</span>
                          </div>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300">
                            0 Clashes
                          </span>
                        </div>
                        <div className="text-xs text-slate-300 space-y-1">
                          <div className="p-2 rounded bg-slate-950 border border-slate-800 flex justify-between items-center text-[11px]">
                            <span>Physics Lab (Prof. Sen)</span>
                            <span className="text-sky-300">Period 2 (10:15 AM)</span>
                          </div>
                          <div className="p-2 rounded bg-slate-950 border border-slate-800 flex justify-between items-center text-[11px]">
                            <span>Bio-Genetics (Dr. Rao)</span>
                            <span className="text-sky-300">Period 3 (11:00 AM)</span>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            onSelectPillar('erp');
                            document.getElementById('erp')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="w-full py-1.5 rounded-lg text-xs font-semibold text-sky-300 bg-sky-950/60 border border-sky-800/60 hover:bg-sky-900/50"
                        >
                          Explore Full ERP Suite →
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {activeHeroTab === 'lms' && (
                    <motion.div
                      key="lms"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      className="grid grid-cols-1 md:grid-cols-12 gap-4"
                    >
                      <div className="md:col-span-7 p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Play className="w-4 h-4 text-sky-400 fill-sky-400" />
                            <span className="text-xs font-semibold text-slate-200">Interactive Lecture: Wave Optics</span>
                          </div>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/20 text-sky-300">
                            1080p HD Live
                          </span>
                        </div>
                        <div className="h-36 rounded-lg bg-slate-950 border border-slate-800 relative flex items-center justify-center group overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80"
                            alt="Lecture slide preview"
                            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform"
                            referrerPolicy="no-referrer"
                          />
                          <div className="text-center space-y-1 relative z-10">
                            <div className="w-10 h-10 rounded-full bg-sky-500/30 border border-sky-400/50 mx-auto flex items-center justify-center text-sky-300">
                              <Play className="w-5 h-5 ml-0.5 fill-sky-300" />
                            </div>
                            <div className="text-xs font-semibold text-slate-200">Young's Double Slit Experiment</div>
                            <div className="text-[10px] text-slate-400">Timestamp 14:20 • Auto-Timestamped Notes</div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-[10px] px-2.5 py-1 rounded-md bg-slate-800 text-slate-300">Concept Map</span>
                          <span className="text-[10px] px-2.5 py-1 rounded-md bg-slate-800 text-slate-300">Formula Cheat Sheet</span>
                          <span className="text-[10px] px-2.5 py-1 rounded-md bg-indigo-900/40 text-indigo-300 border border-indigo-700/40">Embedded MCQ Drill</span>
                        </div>
                      </div>

                      <div className="md:col-span-5 p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Sparkles className="w-4 h-4 text-purple-400" />
                            <span className="text-xs font-semibold text-slate-200">24/7 AI Doubt Copilot</span>
                          </div>
                          <div className="space-y-2 text-xs">
                            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300">
                              <span className="text-purple-400 font-semibold">Student:</span> Why does fringe width increase when screen distance D increases?
                            </div>
                            <div className="p-2.5 rounded-lg bg-purple-950/40 border border-purple-800/40 text-purple-200 text-[11px] leading-relaxed">
                              <span className="text-sky-300 font-semibold">AI Copilot:</span> Fringe width β = λD / d. Since β is directly proportional to D, moving the screen further spreads out the interfering wave-fronts.
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            onSelectPillar('lms');
                            document.getElementById('lms')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="mt-3 w-full py-2 rounded-lg text-xs font-semibold text-sky-300 bg-sky-950/60 border border-sky-800/60 hover:bg-sky-900/50"
                        >
                          Explore LMS Platform Studio →
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {activeHeroTab === 'testex' && (
                    <motion.div
                      key="testex"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      className="grid grid-cols-1 md:grid-cols-12 gap-4"
                    >
                      {/* CBT Question Cockpit */}
                      <div className="md:col-span-8 p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 text-xs font-bold font-mono">
                              NTA CBT SIMULATOR
                            </span>
                            <span className="text-xs text-slate-300 font-medium">NEET/JEE Mock Series #14</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-amber-400 font-mono font-bold bg-amber-950/40 px-2 py-1 rounded border border-amber-800/50">
                            <Timer className="w-3.5 h-3.5 animate-pulse" />
                            <span>02:44:18 Left</span>
                          </div>
                        </div>

                        <div className="text-xs text-slate-200 leading-relaxed">
                          <span className="font-bold text-sky-400 mr-2">Q.04 (Physics):</span>
                          A projectile is launched with velocity <span className="font-mono text-indigo-300">u</span> at an angle <span className="font-mono text-indigo-300">θ</span>. What is the radius of curvature at the trajectory's apex?
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:border-slate-700 cursor-pointer">
                            (A) u² sin²(θ) / g
                          </div>
                          <div className="p-2.5 rounded-lg bg-sky-950/50 border border-sky-500 text-sky-200 font-semibold cursor-pointer shadow-sm shadow-sky-500/20">
                            (B) u² cos²(θ) / g  ✓ Selected
                          </div>
                          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:border-slate-700 cursor-pointer">
                            (C) u² / (g cos θ)
                          </div>
                          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:border-slate-700 cursor-pointer">
                            (D) 2u² cos²(θ) / g
                          </div>
                        </div>
                      </div>

                      {/* Question Palette & Action */}
                      <div className="md:col-span-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between space-y-3">
                        <div>
                          <div className="text-xs font-semibold text-slate-300 mb-2">Question Palette</div>
                          <div className="grid grid-cols-5 gap-1.5">
                            {[1, 2, 3].map((num) => (
                              <div key={num} className="h-7 rounded bg-emerald-500 text-slate-950 font-bold text-[11px] flex items-center justify-center">
                                {num}
                              </div>
                            ))}
                            <div className="h-7 rounded bg-sky-400 text-slate-950 font-bold text-[11px] flex items-center justify-center ring-2 ring-sky-300">
                              4
                            </div>
                            {[5, 6, 7, 8, 9, 10].map((num) => (
                              <div key={num} className="h-7 rounded bg-slate-800 text-slate-400 font-medium text-[11px] flex items-center justify-center">
                                {num}
                              </div>
                            ))}
                          </div>
                          <div className="flex gap-2 text-[10px] text-slate-400 mt-2">
                            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-emerald-500" /> Answered (3)</span>
                            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-sky-400" /> Current</span>
                          </div>
                        </div>

                        <button
                          onClick={onOpenTestExSimulator}
                          className="w-full py-2.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-400 hover:to-purple-500 shadow-md shadow-indigo-600/30"
                        >
                          Open Full Interactive Test Runner →
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {activeHeroTab === 'analytics' && (
                    <motion.div
                      key="analytics"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                      {/* Diagnostic Scorecard */}
                      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Projected AIR Rank</div>
                        <div className="text-3xl font-extrabold text-sky-300 font-mono">AIR 420 - 780</div>
                        <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                          <TrendingUp className="w-3.5 h-3.5" />
                          <span>+84 Percentile gain in 6 weeks</span>
                        </div>
                        <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800 flex items-center gap-2">
                          <img
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                            alt="Ananya Sharma"
                            className="w-5 h-5 rounded-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <span>Ananya Sharma (Grade 12 NEET)</span>
                        </div>
                      </div>

                      {/* Subject Mastery */}
                      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Subject Mastery Level</div>
                        <div className="space-y-2 pt-1">
                          <div>
                            <div className="flex justify-between text-xs text-slate-300 mb-1">
                              <span>Biology</span>
                              <span className="text-emerald-400 font-mono">96%</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                              <div className="h-full bg-emerald-400 rounded-full" style={{ width: '96%' }} />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-xs text-slate-300 mb-1">
                              <span>Physics</span>
                              <span className="text-sky-400 font-mono">88%</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                              <div className="h-full bg-sky-400 rounded-full" style={{ width: '88%' }} />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* AI Remedial Prescription */}
                      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
                        <div>
                          <div className="text-xs font-semibold text-rose-400 flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                            Target Weak Area Detected
                          </div>
                          <div className="text-xs font-bold text-white mt-1">Thermodynamics &amp; Carnot Cycles</div>
                          <div className="text-[11px] text-slate-400 mt-1">
                            34% error rate in step 2 calculations.
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            onSelectPillar('analytics');
                            document.getElementById('analytics')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="mt-2 w-full py-2 rounded-lg text-xs font-semibold text-sky-300 bg-sky-950/60 border border-sky-800/60 hover:bg-sky-900/50"
                        >
                          View Full Diagnostic Suite →
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Metrics Strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono">1,200+</div>
            <div className="text-xs text-slate-300 mt-1">Partner Institutions &amp; Academies</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-sky-300 font-mono">850,000+</div>
            <div className="text-xs text-slate-300 mt-1">Active Students &amp; Aspirants</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-purple-300 font-mono">350,000+</div>
            <div className="text-xs text-slate-300 mt-1">High-Stakes Test Questions</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-400 font-mono">99.99%</div>
            <div className="text-xs text-slate-300 mt-1">Zero-Lag Platform Uptime SLA</div>
          </div>
        </div>
      </div>
    </section>
  );
};
