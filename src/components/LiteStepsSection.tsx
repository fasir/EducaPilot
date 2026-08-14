import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  UploadCloud, 
  CheckCircle2, 
  ArrowRight, 
  Smartphone, 
  Database,
  Rocket
} from 'lucide-react';
import { LITE_STEPS } from '../data/educaPilotData';

interface LiteStepsSectionProps {
  onOpenDemoModal: () => void;
}

export const LiteStepsSection: React.FC<LiteStepsSectionProps> = ({ onOpenDemoModal }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  
  // Interactive Migration Time Estimator
  const [studentInputCount, setStudentInputCount] = useState<number>(2500);
  const [uploadedSampleFile, setUploadedSampleFile] = useState<boolean>(false);

  const activeStep = LITE_STEPS[activeStepIndex];

  // Calculate estimated migration speed
  const estimatedHours = studentInputCount <= 1000 ? 24 : studentInputCount <= 5000 ? 48 : 72;

  return (
    <section id="lite-steps" className="py-20 bg-gradient-to-b from-slate-50 via-purple-50/20 to-sky-50/20 relative overflow-hidden border-t border-slate-200">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[350px] bg-purple-200/30 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-sky-200/30 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-purple-200/80 text-purple-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Lite Steps™ Zero-Downtime Migration</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Go Live in <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">3 Lightweight Steps</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Switching school software used to take months of painful disruptions. With EducaPilot's proprietary Lite Steps™ engine, your entire campus transitions seamlessly in under 72 hours with guaranteed zero data loss.
          </p>
        </div>

        {/* 3 Step Interactive Timeline Tabs (Glassy White Cards) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {LITE_STEPS.map((item, idx) => {
            const isSelected = activeStepIndex === idx;
            return (
              <div
                key={item.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 relative flex flex-col justify-between backdrop-blur-md ${
                  isSelected
                    ? 'bg-white border-indigo-500 shadow-xl shadow-indigo-500/10 ring-2 ring-indigo-500/20'
                    : 'bg-white/80 border-white/90 hover:border-slate-300 hover:bg-white shadow-lg shadow-slate-200/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`w-8 h-8 rounded-xl font-mono font-extrabold text-xs flex items-center justify-center ${
                      isSelected ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      0{item.step}
                    </span>
                    <span className="text-[11px] font-mono text-indigo-700 font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs text-slate-500">
                    {item.timeline}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className={isSelected ? 'text-indigo-600 font-semibold' : 'text-slate-500'}>
                    {isSelected ? 'Viewing Interactive Workflow' : 'Click to View Step Details'}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-indigo-600' : 'text-slate-400'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Interactive Sandbox (Dark/Slate Cockpit in Light Canvas) */}
        <div className="mt-8 rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Step Description & Action Checklist */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-sky-950/80 text-sky-300 border border-sky-800/50 text-xs font-mono">
                  <span>Step {activeStep.step} of 3</span>
                  <span>•</span>
                  <span>{activeStep.timeline}</span>
                </div>

                <h3 className="text-2xl font-extrabold text-white">
                  {activeStep.headline}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {activeStep.description}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    Automated Actions in this Step:
                  </div>
                  {activeStep.actionItems.map((action, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{action}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                  <span className="font-bold text-sky-300">Guaranteed Milestone Deliverable: </span>
                  <span className="text-slate-300">{activeStep.deliverables}</span>
                </div>
              </div>

              {/* Step Interactive Visual Simulator */}
              <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                {activeStep.step === 1 && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                      <span className="text-xs font-bold text-white">Interactive CSV / SIS Data Parser</span>
                      <Database className="w-4 h-4 text-sky-400" />
                    </div>

                    <div
                      onClick={() => setUploadedSampleFile(true)}
                      className={`p-6 rounded-xl border-2 border-dashed text-center cursor-pointer transition-all ${
                        uploadedSampleFile
                          ? 'border-emerald-500 bg-emerald-950/20 text-emerald-300'
                          : 'border-slate-700 bg-slate-900/60 text-slate-400 hover:border-sky-500 hover:text-sky-300'
                      }`}
                    >
                      <UploadCloud className="w-8 h-8 mx-auto mb-2 text-sky-400" />
                      <div className="text-xs font-bold">
                        {uploadedSampleFile ? '✓ Students_Roster_2026.csv Uploaded' : 'Click to Simulate 1-Click Excel Upload'}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1">
                        Auto-detects names, roll numbers, fees, and guardian contacts.
                      </div>
                    </div>

                    {uploadedSampleFile && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300 space-y-1"
                      >
                        <div className="text-emerald-400 font-bold">Schema Successfully Mapped:</div>
                        <div>• 2,840 Student records parsed (0 duplicates)</div>
                        <div>• 148 Faculty biometric IDs linked</div>
                        <div>• Previous year fee ledger reconciled</div>
                      </motion.div>
                    )}
                  </div>
                )}

                {activeStep.step === 2 && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                      <span className="text-xs font-bold text-white">AI Academic &amp; Exam Bank Sync</span>
                      <Sparkles className="w-4 h-4 text-sky-400" />
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
                        <span className="text-slate-200">CBSE / ICSE / State Board Syllabi</span>
                        <span className="text-sky-400 font-mono font-bold">✓ Synced</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
                        <span className="text-slate-200">NEET / JEE 350K+ Question Bank</span>
                        <span className="text-sky-400 font-mono font-bold">✓ Activated</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
                        <span className="text-slate-200">Clash-Free Master Timetable</span>
                        <span className="text-emerald-400 font-mono font-bold">0 Clashes</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-sky-950/40 border border-sky-800/40 text-[11px] text-sky-200">
                      Everything tailored to your school's exact period timings and grading scales.
                    </div>
                  </div>
                )}

                {activeStep.step === 3 && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                      <span className="text-xs font-bold text-white">White-Labeled Apps Go-Live</span>
                      <Smartphone className="w-4 h-4 text-emerald-400" />
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                        <span className="text-slate-200">Parent Mobile Apps (iOS &amp; Android)</span>
                        <span className="text-emerald-400 font-bold">Published</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                        <span className="text-slate-200">Teacher Digital Register</span>
                        <span className="text-emerald-400 font-bold">Ready</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                        <span className="text-slate-200">Student Test-Ex CBT Portal</span>
                        <span className="text-emerald-400 font-bold">100% Live</span>
                      </div>
                    </div>

                    <button
                      onClick={onOpenDemoModal}
                      className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-400 hover:to-purple-500 shadow-md shadow-indigo-600/30 flex items-center justify-center gap-2"
                    >
                      <Rocket className="w-4 h-4" />
                      <span>Start 3-Day Institutional Migration →</span>
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dynamic Migration Time Estimator */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Lite Steps™ Speed Calculator
            </div>
            <h4 className="text-lg font-bold text-slate-900">
              Estimate your school's transition timeframe:
            </h4>
            <div className="text-xs text-slate-500">
              Enter your approximate student enrollment count below.
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <div className="space-y-1 w-full sm:w-48">
              <div className="flex justify-between text-xs text-slate-600">
                <span>Students:</span>
                <span className="font-mono text-indigo-600 font-bold">{studentInputCount.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={500}
                max={10000}
                step={500}
                value={studentInputCount}
                onChange={(e) => setStudentInputCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900 text-white border border-slate-800 text-center min-w-[140px] shadow-md">
              <div className="text-[10px] text-slate-400">Estimated Go-Live</div>
              <div className="text-xl font-extrabold font-mono text-sky-400">
                {estimatedHours} Hours
              </div>
              <div className="text-[10px] text-emerald-400 font-semibold">Zero Downtime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
