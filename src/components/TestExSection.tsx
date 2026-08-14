import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  Timer, 
  RotateCcw, 
  Zap, 
  ShieldCheck, 
  Brain, 
  ChevronRight,
  Flag,
  BarChart2,
  Lock,
  UserCheck
} from 'lucide-react';
import { TEST_EX_QUESTIONS } from '../data/educaPilotData';
import { Question } from '../types';

interface TestExSectionProps {
  onOpenDemoModal: () => void;
}

export const TestExSection: React.FC<TestExSectionProps> = ({ onOpenDemoModal }) => {
  const [questions] = useState<Question[]>(TEST_EX_QUESTIONS);
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<number, boolean>>({});
  const [testSubmitted, setTestSubmitted] = useState<boolean>(false);
  const [timeRemaining, setTimeRemaining] = useState<number>(180); // 3 mins for mini test

  // Timer countdown
  useEffect(() => {
    if (testSubmitted) return;
    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleFinishTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [testSubmitted]);

  const currentQuestion = questions[currentQIndex];

  const handleSelectOption = (optIndex: number) => {
    if (testSubmitted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optIndex
    }));
  };

  const handleToggleReview = () => {
    if (testSubmitted) return;
    setMarkedForReview((prev) => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id]
    }));
  };

  const handleClearAnswer = () => {
    if (testSubmitted) return;
    setUserAnswers((prev) => {
      const next = { ...prev };
      delete next[currentQuestion.id];
      return next;
    });
  };

  const handleFinishTest = () => {
    setTestSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleResetTest = () => {
    setUserAnswers({});
    setMarkedForReview({});
    setTestSubmitted(false);
    setTimeRemaining(180);
    setCurrentQIndex(0);
  };

  // Score computation
  const totalQuestions = questions.length;
  let correctCount = 0;
  let incorrectCount = 0;
  let unattemptedCount = 0;

  questions.forEach((q) => {
    const ans = userAnswers[q.id];
    if (ans === undefined) {
      unattemptedCount++;
    } else if (ans === q.correctAnswer) {
      correctCount++;
    } else {
      incorrectCount++;
    }
  });

  const rawScore = correctCount * 4 - incorrectCount * 1; // Standard +4 / -1 marking
  const maxScore = totalQuestions * 4;
  const percentile = Math.min(99.8, Math.max(45, Math.round(((correctCount * 1.5 + 2) / (totalQuestions * 1.5 + 2)) * 100 * 10) / 10));

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section id="testex" className="py-20 bg-gradient-to-b from-slate-50 via-sky-50/30 to-indigo-50/20 relative overflow-hidden border-t border-slate-200">
      {/* Background Glassy Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[400px] bg-sky-200/40 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[400px] bg-indigo-200/40 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-2/3 right-1/4 w-[400px] h-[300px] bg-purple-100/40 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-sky-200/80 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-md">
            <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
            <span>Pillar 03 • High-Stakes Competitive Exam Engine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Test-Ex: <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">CBT Mock Simulator</span> &amp; Exam Bank
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Eliminate exam anxiety with exact replicas of NTA (NEET / JEE Main &amp; Advanced), Digital SAT, and Olympiad CBT testing interfaces. Featuring sub-second question delivery, anti-cheat AI proctoring, and instant diagnostic scorecards.
          </p>
        </div>

        {/* Live Interactive CBT Test Sandbox (Dark Console in Light Container) */}
        <div className="mt-12 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden text-white">
          {/* Test Engine Top Header */}
          <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="px-2.5 py-1 rounded bg-sky-500/20 text-sky-300 border border-sky-500/40 text-xs font-mono font-bold">
                TEST-EX ENGINE v4.2
              </div>
              <div className="text-xs sm:text-sm font-bold text-white">
                All-India Mock Series (Physics, Chemistry &amp; Biology / Math)
              </div>
            </div>

            <div className="flex items-center gap-3">
              {!testSubmitted ? (
                <div className="flex items-center gap-2 bg-amber-950/40 border border-amber-800/60 px-3 py-1.5 rounded-xl text-amber-300 font-mono font-bold text-xs">
                  <Timer className="w-4 h-4 animate-pulse text-amber-400" />
                  <span>Time Left: {formatTimer(timeRemaining)}</span>
                </div>
              ) : (
                <button
                  onClick={handleResetTest}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-slate-200 hover:text-white"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Simulator</span>
                </button>
              )}

              {!testSubmitted && (
                <button
                  onClick={handleFinishTest}
                  className="px-4 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-400 hover:to-purple-500 shadow-md shadow-indigo-600/30"
                >
                  Submit Mock Test
                </button>
              )}
            </div>
          </div>

          {!testSubmitted ? (
            /* Active Test Stage */
            <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Question Screen */}
              <div className="lg:col-span-8 space-y-4">
                {/* Meta info bar */}
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sky-400 font-mono">
                      Question {currentQIndex + 1} of {totalQuestions}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-300 font-medium">{currentQuestion.subject}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                      {currentQuestion.examType}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-slate-400 font-mono">Marking: +4 / -1</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-semibold ${
                      currentQuestion.difficulty === 'Hard' ? 'bg-rose-500/20 text-rose-300' : 'bg-amber-500/20 text-amber-300'
                    }`}>
                      {currentQuestion.difficulty}
                    </span>
                  </div>
                </div>

                {/* Question Statement */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-slate-100 text-sm leading-relaxed font-medium">
                  {currentQuestion.text}
                </div>

                {/* Concept Tag */}
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <Brain className="w-3.5 h-3.5 text-sky-400" />
                  <span>Syllabus Concept: <strong className="text-slate-300">{currentQuestion.conceptTag}</strong></span>
                </div>

                {/* Options List */}
                <div className="space-y-2.5">
                  {currentQuestion.options.map((option, idx) => {
                    const isSelected = userAnswers[currentQuestion.id] === idx;
                    const letter = String.fromCharCode(65 + idx);

                    return (
                      <div
                        key={idx}
                        onClick={() => handleSelectOption(idx)}
                        className={`p-3.5 rounded-xl border text-xs sm:text-sm cursor-pointer transition-all duration-200 flex items-center justify-between ${
                          isSelected
                            ? 'bg-sky-950/40 border-sky-400 text-sky-200 shadow-md shadow-sky-500/10 font-semibold'
                            : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900/80'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-6 h-6 rounded-lg text-xs font-mono font-bold flex items-center justify-center ${
                            isSelected ? 'bg-sky-400 text-slate-950' : 'bg-slate-800 text-slate-300'
                          }`}>
                            {letter}
                          </span>
                          <span>{option}</span>
                        </div>

                        {isSelected && (
                          <span className="text-sky-400 text-xs font-mono">Selected ✓</span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Navigation & Question Controls */}
                <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex gap-2">
                    <button
                      onClick={handleToggleReview}
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                        markedForReview[currentQuestion.id]
                          ? 'bg-purple-950/60 border-purple-500 text-purple-300'
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-900'
                      }`}
                    >
                      <Flag className="w-3.5 h-3.5" />
                      <span>{markedForReview[currentQuestion.id] ? 'Marked for Review' : 'Mark for Review'}</span>
                    </button>

                    <button
                      onClick={handleClearAnswer}
                      className="px-3 py-2 rounded-xl text-xs font-semibold bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"
                    >
                      Clear Response
                    </button>
                  </div>

                  <div className="flex gap-2">
                    <button
                      disabled={currentQIndex === 0}
                      onClick={() => setCurrentQIndex(prev => Math.max(0, prev - 1))}
                      className="px-3 py-2 rounded-xl text-xs font-semibold bg-slate-950 border border-slate-800 text-slate-300 disabled:opacity-40"
                    >
                      Previous
                    </button>

                    <button
                      onClick={() => {
                        if (currentQIndex < totalQuestions - 1) {
                          setCurrentQIndex(prev => prev + 1);
                        } else {
                          handleFinishTest();
                        }
                      }}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-sky-500 to-indigo-600 text-white hover:from-sky-400 hover:to-indigo-500 shadow-md shadow-indigo-600/30"
                    >
                      <span>{currentQIndex === totalQuestions - 1 ? 'Finish & View Scorecard' : 'Save & Next'}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Question Palette Sidebar */}
              <div className="lg:col-span-4 p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs font-bold text-slate-200 mb-3 pb-2 border-b border-slate-800">
                    Live Question Matrix Palette
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {questions.map((q, idx) => {
                      const isAnswered = userAnswers[q.id] !== undefined;
                      const isReviewed = markedForReview[q.id];
                      const isCurrent = currentQIndex === idx;

                      let statusClass = 'bg-slate-900 border-slate-800 text-slate-400';
                      if (isAnswered && isReviewed) {
                        statusClass = 'bg-purple-600 text-white font-bold';
                      } else if (isAnswered) {
                        statusClass = 'bg-emerald-500 text-slate-950 font-bold';
                      } else if (isReviewed) {
                        statusClass = 'bg-purple-950 text-purple-300 border-purple-500 font-bold';
                      } else if (isCurrent) {
                        statusClass = 'bg-sky-950 text-sky-300 border-sky-400 font-bold ring-1 ring-sky-400';
                      }

                      return (
                        <button
                          key={q.id}
                          onClick={() => setCurrentQIndex(idx)}
                          className={`h-9 rounded-lg border text-xs transition-all flex items-center justify-center ${statusClass}`}
                        >
                          {idx + 1}
                        </button>
                      );
                    })}
                  </div>

                  {/* Legend */}
                  <div className="mt-4 space-y-1.5 text-[11px] text-slate-400 border-t border-slate-800 pt-3">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded bg-emerald-500" />
                      <span>Answered ({Object.keys(userAnswers).length})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded bg-purple-600" />
                      <span>Marked for Review ({Object.values(markedForReview).filter(Boolean).length})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded bg-slate-900 border border-slate-700" />
                      <span>Unattempted ({totalQuestions - Object.keys(userAnswers).length})</span>
                    </div>
                  </div>
                </div>

                {/* Candidate Proctoring Preview */}
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-sky-400 font-semibold text-xs">
                      <ShieldCheck className="w-4 h-4" />
                      <span>AI Proctoring Active</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono">Camera 1 • OK</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
                        alt="Proctored Student"
                        className="w-10 h-10 rounded-lg object-cover border border-emerald-500/60"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-slate-900 rounded-full" />
                    </div>
                    <div className="text-[11px] text-slate-300">
                      <div className="font-semibold text-white">Ananya Sharma</div>
                      <div className="text-slate-400">Roll: #2026-JEE-8841</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Instant Diagnostic Scorecard after Submission */
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 space-y-6"
            >
              {/* Scorecard Hero Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-sky-950/80 via-slate-900 to-indigo-950/80 border border-sky-500/40 grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-400">Diagnostic Result</span>
                  <h3 className="text-2xl font-extrabold text-white">Mock Test Scorecard</h3>
                  <p className="text-xs text-slate-400">Generated instantaneously via EducaPilot AI Analytics</p>
                </div>

                <div className="text-center p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-xs text-slate-400">Total Raw Score</div>
                  <div className="text-2xl font-extrabold font-mono text-sky-300">
                    {rawScore} / {maxScore}
                  </div>
                  <div className="text-[10px] text-slate-400">Formula: (+4 Correct, -1 Wrong)</div>
                </div>

                <div className="text-center p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-xs text-slate-400">Estimated Percentile</div>
                  <div className="text-2xl font-extrabold font-mono text-emerald-400">
                    {percentile}%ile
                  </div>
                  <div className="text-[10px] text-emerald-300 font-medium">Top Tier Performance</div>
                </div>

                <div className="text-center p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-xs text-slate-400">Accuracy Rate</div>
                  <div className="text-2xl font-extrabold font-mono text-indigo-300">
                    {totalQuestions > unattemptedCount ? Math.round((correctCount / (totalQuestions - unattemptedCount)) * 100) : 0}%
                  </div>
                  <div className="text-[10px] text-slate-400">{correctCount} Correct • {incorrectCount} Incorrect</div>
                </div>
              </div>

              {/* Question-by-Question Diagnostic & Solutions */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <BarChart2 className="w-4 h-4 text-sky-400" />
                    <span>Detailed Solutions &amp; Step-by-Step AI Explanations</span>
                  </h4>
                  <button
                    onClick={onOpenDemoModal}
                    className="text-xs text-sky-400 hover:text-sky-300 underline font-medium"
                  >
                    Deploy Test-Ex for your Academy →
                  </button>
                </div>

                <div className="space-y-3">
                  {questions.map((q, idx) => {
                    const chosen = userAnswers[q.id];
                    const isCorrect = chosen === q.correctAnswer;
                    const isSkipped = chosen === undefined;

                    return (
                      <div
                        key={q.id}
                        className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 text-xs"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white font-mono">Q.{idx + 1} ({q.subject})</span>
                            <span className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                              {q.conceptTag}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            {isCorrect && (
                              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold font-mono">
                                +4 Marks (Correct)
                              </span>
                            )}
                            {!isCorrect && !isSkipped && (
                              <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-semibold font-mono">
                                -1 Mark (Incorrect)
                              </span>
                            )}
                            {isSkipped && (
                              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                                0 Marks (Skipped)
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="text-slate-200 font-medium">{q.text}</div>

                        <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800/80 space-y-1.5">
                          <div className="text-slate-400 text-[11px]">
                            <span className="text-sky-300 font-semibold">Correct Answer:</span> Option ({String.fromCharCode(65 + q.correctAnswer)}) - {q.options[q.correctAnswer]}
                          </div>
                          <div className="text-slate-300 text-[11px] leading-relaxed">
                            <span className="text-indigo-300 font-semibold">Step-by-step Solution:</span> {q.explanation}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Highlights Pillars on Glassy Light Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-white/90 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:bg-white transition-all space-y-2 group">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">350,000+ Curated Question Bank</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pre-loaded with verified past-year questions, video solutions, formula tags, and adaptive difficulty ratings for NEET, JEE, SAT, and UPSC.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-white/90 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:bg-white transition-all space-y-2 group">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">AI Proctoring &amp; Lockdown Browser</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Full-screen lockdown, dual-camera video feeds, audio anomaly tracking, and instant flag triggers during remote competitive exams.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-white/90 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:bg-white transition-all space-y-2 group">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-600 transition-colors">Time-per-Question Telemetry</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Detect students rushing through physics problems or getting stuck on chemistry calculations to personalize exam pacing strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
