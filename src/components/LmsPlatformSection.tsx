import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  Sparkles, 
  Play, 
  Pause, 
  BrainCircuit, 
  FileCheck, 
  Send, 
  CheckCircle2, 
  Flame, 
  HelpCircle,
  ChevronRight,
  Headphones,
  GraduationCap
} from 'lucide-react';
import { LMS_FEATURES } from '../data/educaPilotData';

export const LmsPlatformSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'video-player' | 'ai-tutor' | 'auto-grade'>('video-player');
  
  // Interactive Video Player State
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [videoTimestamp, setVideoTimestamp] = useState<number>(45);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [activeChapter, setActiveChapter] = useState<string>('Wavefronts & Huygens Principle');

  // Interactive AI Doubt Chat State
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string; time: string }>>([
    {
      sender: 'user',
      text: 'How does Young\'s double slit experiment prove the wave nature of light?',
      time: '10:42 PM'
    },
    {
      sender: 'ai',
      text: 'When monochromatic light passes through two narrow coherent slits, the emerging spherical wavefronts overlap and interfere. Constructive interference produces bright fringes (where path difference Δx = nλ) and destructive produces dark fringes (Δx = (2n-1)λ/2). This alternating interference pattern is a unique wave phenomenon that cannot be explained by particle theory.',
      time: '10:42 PM'
    }
  ]);
  const [inputDoubt, setInputDoubt] = useState<string>('');
  const [isAiTyping, setIsAiTyping] = useState<boolean>(false);

  // Quick doubt questions
  const quickDoubts = [
    'Explain Carnot Cycle efficiency formula',
    'Difference between SN1 and SN2 reaction',
    'Evaluate limit of (sin x)/x as x approaches 0'
  ];

  const handleSendDoubt = (textToSend?: string) => {
    const query = textToSend || inputDoubt;
    if (!query.trim()) return;

    const userMsg = {
      sender: 'user' as const,
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages(prev => [...prev, userMsg]);
    setInputDoubt('');
    setIsAiTyping(true);

    setTimeout(() => {
      let aiResponse = '';
      if (query.toLowerCase().includes('carnot')) {
        aiResponse = 'Carnot Engine Efficiency η = 1 - (T_cold / T_hot). Temperatures must always be in Kelvin (K). The Carnot cycle consists of: 1) Reversible isothermal expansion, 2) Reversible adiabatic expansion, 3) Reversible isothermal compression, and 4) Reversible adiabatic compression.';
      } else if (query.toLowerCase().includes('sn1') || query.toLowerCase().includes('sn2')) {
        aiResponse = 'SN1 is a unimolecular two-step mechanism involving a carbocation intermediate (favored in polar protic solvents & 3° carbons with racemization). SN2 is a bimolecular single-step concerted mechanism with backside attack and complete Walden inversion (favored in 1° carbons & polar aprotic solvents).';
      } else if (query.toLowerCase().includes('limit') || query.toLowerCase().includes('sin x')) {
        aiResponse = 'lim (x→0) [sin(x) / x] = 1. This can be proven geometrically using the Squeeze Theorem (cos x < (sin x)/x < 1) or via L\'Hôpital\'s rule (derivative of sin x is cos x, and cos(0)/1 = 1).';
      } else {
        aiResponse = `Here is the targeted step-by-step explanation for "${query}": The core concept is established through standard first principles. Check textbook Chapter 4 (page 128) and review the 3-minute concept bite in your LMS video locker.`;
      }

      setChatMessages(prev => [
        ...prev,
        {
          sender: 'ai',
          text: aiResponse,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsAiTyping(false);
    }, 900);
  };

  return (
    <section id="lms" className="py-20 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Glow Mesh */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-sky-500/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-600/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-700/50 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Pillar 02 • Intelligent Learning Management</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Digital Pedagogy That <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Sparks Mastery</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Move beyond static PDF uploads. Empower faculty with interactive lecture studios, auto-synced revision flashcards, and 24/7 AI-guided doubt clearing.
          </p>
        </div>

        {/* Interactive LMS Sandbox */}
        <div className="mt-12 rounded-3xl bg-slate-950 border border-slate-800 p-4 sm:p-7 shadow-2xl">
          {/* Sub-nav switch */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">LMS Studio Mode:</span>
              <span className="text-xs font-semibold text-sky-400">Interactive Student Learning Environment</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab('video-player')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'video-player'
                    ? 'bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 text-white font-bold shadow-md shadow-indigo-600/30'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <Play className="w-3.5 h-3.5" />
                <span>Interactive Course Studio</span>
              </button>

              <button
                onClick={() => setActiveTab('ai-tutor')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'ai-tutor'
                    ? 'bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 text-white font-bold shadow-md shadow-indigo-600/30'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <BrainCircuit className="w-3.5 h-3.5" />
                <span>24/7 AI Academic Copilot</span>
              </button>

              <button
                onClick={() => setActiveTab('auto-grade')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'auto-grade'
                    ? 'bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 text-white font-bold shadow-md shadow-indigo-600/30'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <FileCheck className="w-3.5 h-3.5" />
                <span>Auto-Graded Rubrics</span>
              </button>
            </div>
          </div>

          {/* Tab 1: Interactive Course Video Player with Real E-Learning Imagery */}
          {activeTab === 'video-player' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6"
            >
              {/* Video Player Display */}
              <div className="lg:col-span-8 space-y-3">
                <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden relative">
                  {/* Video Stage with live student learning background */}
                  <div className="h-64 sm:h-80 relative flex flex-col justify-between p-4 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop&q=80"
                      alt="Students watching interactive lecture on computer screens"
                      className="absolute inset-0 w-full h-full object-cover opacity-25"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />

                    {/* Video Top Bar */}
                    <div className="flex items-center justify-between z-10">
                      <div className="flex items-center gap-2 bg-slate-950/85 px-3 py-1.5 rounded-lg border border-slate-800 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                        <span className="text-xs font-semibold text-white">Physics 101 • Wave Optics &amp; Interference</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-sky-300 bg-slate-950/85 px-2.5 py-1 rounded-md border border-slate-800 backdrop-blur-md">
                          1080p HD • AI Auto-Notes
                        </span>
                      </div>
                    </div>

                    {/* Center Animated Concept Demonstration */}
                    <div className="text-center z-10 my-auto">
                      <div 
                        className="w-14 h-14 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 mx-auto flex items-center justify-center text-white shadow-xl shadow-indigo-600/40 cursor-pointer hover:scale-110 active:scale-95 transition-transform"
                        onClick={() => setIsPlaying(!isPlaying)}
                      >
                        {isPlaying ? <Pause className="w-6 h-6 fill-white" /> : <Play className="w-6 h-6 ml-1 fill-white" />}
                      </div>
                      <div className="text-sm font-bold text-white mt-3 flex items-center justify-center gap-2">
                        <GraduationCap className="w-4 h-4 text-sky-400" />
                        <span>Chapter 03: {activeChapter}</span>
                      </div>
                      <div className="text-[11px] text-slate-300 mt-0.5">
                        Interactive Lecture by Dr. Rajeshwar Sen (IIT Madras Alum)
                      </div>
                    </div>

                    {/* Player Controls */}
                    <div className="z-10 space-y-2 bg-slate-950/95 p-3 rounded-xl border border-slate-800 backdrop-blur-md">
                      {/* Timeline bar */}
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] font-mono text-slate-400">14:45</span>
                        <input
                          type="range"
                          min={0}
                          max={100}
                          value={videoTimestamp}
                          onChange={(e) => setVideoTimestamp(Number(e.target.value))}
                          className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
                        />
                        <span className="text-[11px] font-mono text-slate-400">32:00</span>
                      </div>

                      <div className="flex items-center justify-between text-xs pt-1">
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="text-slate-300 hover:text-white"
                          >
                            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                          </button>
                          <span className="text-slate-400 text-[11px]">Speed:</span>
                          {[1, 1.25, 1.5, 2].map((spd) => (
                            <button
                              key={spd}
                              onClick={() => setPlaybackSpeed(spd)}
                              className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                                playbackSpeed === spd
                                  ? 'bg-sky-400 text-slate-950 font-bold'
                                  : 'text-slate-400 hover:text-slate-200'
                              }`}
                            >
                              {spd}x
                            </button>
                          ))}
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-[10px] px-2.5 py-1 rounded-md bg-indigo-950/80 text-indigo-300 border border-indigo-800/60">
                            Auto-Sync Flashcards
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Auto-Summarized Key Formulas */}
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-sky-400" />
                    <span className="text-slate-300 font-semibold">AI Formula Bite:</span>
                    <span className="font-mono text-sky-300 font-bold">Fringe Width β = λD / d</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Added to student study deck</span>
                </div>
              </div>

              {/* Course Chapters & Interactive Exercises */}
              <div className="lg:col-span-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-xs font-bold text-slate-200">Course Syllabus &amp; Modules</span>
                    <span className="text-[10px] text-emerald-400 font-semibold">82% Completed</span>
                  </div>

                  <div className="mt-3 space-y-2 text-xs">
                    {[
                      { title: 'Intro to Wave Theory & Light Speed', time: '18m', done: true },
                      { title: 'Wavefronts & Huygens Principle', time: '24m', done: true },
                      { title: 'Young Double Slit Interference', time: '32m', active: true },
                      { title: 'Diffraction & Resolving Power', time: '28m', done: false },
                      { title: 'Polarization & Brewster\'s Angle', time: '22m', done: false }
                    ].map((chap, idx) => (
                      <div
                        key={idx}
                        onClick={() => setActiveChapter(chap.title)}
                        className={`p-2.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                          chap.active
                            ? 'bg-sky-950/50 border-sky-500/50 text-sky-200 font-semibold shadow-inner'
                            : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {chap.done ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          ) : (
                            <div className="w-3.5 h-3.5 rounded-full border border-slate-600 shrink-0" />
                          )}
                          <span className="text-[11px] truncate max-w-[170px]">{chap.title}</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400">{chap.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-amber-400" />
                    <span className="text-slate-200 font-semibold">Daily Study Streak</span>
                  </div>
                  <span className="font-mono text-amber-300 font-bold">14 Days 🔥</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Tab 2: 24/7 AI Doubt Copilot */}
          {activeTab === 'ai-tutor' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6"
            >
              <div className="lg:col-span-8 p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 flex flex-col justify-between min-h-[360px]">
                {/* Chat Log */}
                <div className="space-y-3 overflow-y-auto max-h-72 pr-2">
                  {chatMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-[10px] text-slate-400 font-medium">
                          {msg.sender === 'user' ? 'You (Student)' : 'EducaPilot AI Tutor'}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">{msg.time}</span>
                      </div>
                      <div
                        className={`p-3 rounded-2xl text-xs max-w-xl leading-relaxed ${
                          msg.sender === 'user'
                            ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-tr-none shadow'
                            : 'bg-slate-950 text-slate-200 border border-slate-800 rounded-tl-none shadow'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}

                  {isAiTyping && (
                    <div className="flex items-center gap-2 p-3 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-sky-300">
                      <Sparkles className="w-3.5 h-3.5 animate-spin" />
                      <span>Generating step-by-step conceptual hints...</span>
                    </div>
                  )}
                </div>

                {/* Input Area */}
                <div className="pt-2 border-t border-slate-800">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Ask any academic doubt (Physics, Chemistry, Maths, Biology)..."
                      value={inputDoubt}
                      onChange={(e) => setInputDoubt(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSendDoubt()}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                    />
                    <button
                      onClick={() => handleSendDoubt()}
                      className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 flex items-center gap-1.5 shrink-0 shadow"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Ask AI</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Sample Queries Sidebar */}
              <div className="lg:col-span-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="text-xs font-bold text-slate-200 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-sky-400" />
                  <span>Popular Student Doubts</span>
                </div>
                <div className="space-y-2">
                  {quickDoubts.map((doubt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendDoubt(doubt)}
                      className="w-full text-left p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 hover:text-sky-300 hover:border-sky-500/40 transition-all flex items-center justify-between"
                    >
                      <span className="truncate pr-2">{doubt}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    </button>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-1">
                  <div className="text-slate-200 font-semibold">Teacher Workload Shield</div>
                  <p className="text-[11px]">84% of repetitive midnight student doubts are resolved instantly by the AI copilot.</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Tab 3: Auto-Graded Rubrics & Assignments */}
          {activeTab === 'auto-grade' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6"
            >
              <div className="lg:col-span-7 p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <div className="text-xs font-bold text-white">Student Assignment: Organic Synthesis Essay</div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                    Auto-Graded by AI
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                  <p className="font-semibold text-slate-200">Question: Outline the mechanism for the Aldol condensation of acetaldehyde in dilute NaOH.</p>
                  <p className="text-[11px] text-slate-400 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                    "Step 1: OH⁻ base abstracts the α-hydrogen from acetaldehyde forming a resonance-stabilized enolate ion. Step 2: The nucleophilic enolate attacks the carbonyl carbon of a second acetaldehyde molecule yielding an alkoxide ion. Step 3: Protonation gives 3-hydroxybutanal (aldol)..."
                  </p>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Mechanism Clarity &amp; Enolate Formulation</span>
                    <span className="text-emerald-400 font-mono font-bold">5 / 5 pts</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Identification of Rate Limiting Step</span>
                    <span className="text-emerald-400 font-mono font-bold">3 / 3 pts</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Dehydration Conditions (Crotonaldehyde formation)</span>
                    <span className="text-emerald-400 font-mono font-bold">2 / 2 pts</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-xs font-bold text-slate-200 mb-2">Teacher Evaluation Summary</div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-400">Total Score</span>
                      <span className="text-xl font-bold font-mono text-sky-300">10 / 10 (100%)</span>
                    </div>
                    <div className="text-[11px] text-slate-300">
                      Feedback: Excellent breakdown of resonance delocalization and subsequent proton transfer.
                    </div>
                  </div>
                </div>

                <div className="text-xs text-slate-400">
                  Teachers can accept, override, or annotate AI-graded rubrics with 1 click.
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* LMS Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LMS_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800/40">
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-sky-400 font-semibold">
                ✓ {feature.metrics}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
