import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles, 
  UserCheck, 
  Target, 
  Activity, 
  ShieldCheck,
  Award
} from 'lucide-react';
import { MOCK_STUDENT_ANALYTICS } from '../data/educaPilotData';
import { StudentAnalyticsProfile } from '../types';

export const AnalyticsSection: React.FC = () => {
  const [selectedStudentIndex, setSelectedStudentIndex] = useState<number>(0);
  const [remedialAssigned, setRemedialAssigned] = useState<Record<string, boolean>>({});

  const currentStudent: StudentAnalyticsProfile = MOCK_STUDENT_ANALYTICS[selectedStudentIndex];

  const handleAssignRemedial = (topic: string) => {
    setRemedialAssigned(prev => ({
      ...prev,
      [topic]: true
    }));
  };

  return (
    <section id="analytics" className="py-20 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background radial */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-sky-500/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-700/50 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Pillar 04 • Real-Time Performance Analytics</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Diagnostic Telemetry, <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Predictive Outcomes</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Turn raw test scores into actionable academic roadmaps. Track concept mastery heatmaps, detect speed-accuracy traps, project competitive ranks with 98.4% precision, and assign targeted micro-remedials.
          </p>
        </div>

        {/* Student Selector Tabs with Live Avatars */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">
            Switch Student Profile:
          </span>
          {MOCK_STUDENT_ANALYTICS.map((student, idx) => (
            <button
              key={student.rollNo}
              onClick={() => setSelectedStudentIndex(idx)}
              className={`flex items-center gap-3 px-4 py-2 rounded-2xl text-xs font-semibold transition-all ${
                selectedStudentIndex === idx
                  ? 'bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              {student.avatar ? (
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="w-6 h-6 rounded-full object-cover border border-white/30"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
              )}
              <span>{student.name}</span>
              <span className="text-[10px] opacity-75 font-mono">({student.targetExam.split(' ')[0]})</span>
            </button>
          ))}
        </div>

        {/* Interactive Analytics Dashboard */}
        <div className="mt-8 rounded-3xl bg-slate-950 border border-slate-800 p-4 sm:p-7 shadow-2xl space-y-6">
          {/* Top KPI Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Projected Rank */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Predicted Rank / Score</span>
                <Target className="w-4 h-4 text-sky-400" />
              </div>
              <div className="text-xl font-extrabold font-mono text-sky-300">
                {currentStudent.predictedRank}
              </div>
              <div className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium">
                <TrendingUp className="w-3 h-3" />
                <span>98.4% Confidence Model</span>
              </div>
            </div>

            {/* Percentile */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>All-India Percentile</span>
                <Award className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-xl font-extrabold font-mono text-emerald-400">
                {currentStudent.overallScorePercentile}%ile
              </div>
              <div className="text-[10px] text-slate-400">
                Top 1.4% Cohort in Batch
              </div>
            </div>

            {/* Attendance & Engagement */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Biometric Attendance</span>
                <UserCheck className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="text-xl font-extrabold font-mono text-indigo-300">
                {currentStudent.attendanceRate}%
              </div>
              <div className="text-[10px] text-slate-400">
                Regular (0 Unexcused Leaves)
              </div>
            </div>

            {/* Retention Risk Score */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Academic Retention Risk</span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-xl font-extrabold font-mono text-emerald-400">
                {currentStudent.retentionRiskScore}
              </div>
              <div className="text-[10px] text-emerald-300">
                Safe from dropout/burnout
              </div>
            </div>
          </div>

          {/* Main Analytics Content: Subject Mastery vs Weak Topics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Subject Mastery Radar & Progress Bars */}
            <div className="lg:col-span-7 p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                    Subject-Wise Mastery vs All-India Benchmark
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Real-time score distribution calibrated against 40,000+ test attempts.
                  </p>
                </div>
                <div className="flex items-center gap-3 text-[10px]">
                  <span className="flex items-center gap-1 text-slate-300">
                    <span className="w-2.5 h-2.5 rounded bg-sky-400" /> Student Score
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <span className="w-2.5 h-2.5 rounded bg-slate-700" /> National Avg
                  </span>
                </div>
              </div>

              <div className="space-y-4 pt-1">
                {currentStudent.subjectMastery.map((item, idx) => (
                  <div key={idx} className="space-y-1.5 text-xs">
                    <div className="flex justify-between items-center text-slate-200">
                      <span className="font-semibold">{item.subject}</span>
                      <div className="flex items-center gap-2 font-mono">
                        <span className="text-sky-300 font-bold">{item.score}%</span>
                        <span className="text-slate-500 text-[11px]">vs {item.benchmarkAvg}% avg</span>
                        <span className={`text-[10px] font-bold ${
                          item.trend === 'up' ? 'text-emerald-400' : item.trend === 'down' ? 'text-rose-400' : 'text-slate-400'
                        }`}>
                          {item.trend === 'up' ? '▲ Up' : item.trend === 'down' ? '▼ Down' : '• Stable'}
                        </span>
                      </div>
                    </div>

                    <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden relative">
                      <div
                        className="absolute top-0 bottom-0 w-0.5 bg-slate-400 z-10"
                        style={{ left: `${item.benchmarkAvg}%` }}
                      />
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${item.score}%`,
                          backgroundColor: item.color
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Time Telemetry Box */}
              <div className="mt-5 p-3.5 rounded-xl bg-slate-950 border border-slate-800 grid grid-cols-3 gap-2 text-center text-xs">
                <div>
                  <div className="text-[10px] text-slate-400">Avg Pace / Question</div>
                  <div className="font-mono font-bold text-white mt-0.5">{currentStudent.timeEfficiency.avgTimePerQuestion}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">Pressure Accuracy</div>
                  <div className="font-mono font-bold text-emerald-400 mt-0.5">{currentStudent.timeEfficiency.accuracyUnderPressure}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">Rush Mistakes</div>
                  <div className="font-mono font-bold text-indigo-300 mt-0.5">{currentStudent.timeEfficiency.rushMistakes}</div>
                </div>
              </div>
            </div>

            {/* AI Weak Topic Diagnosis & Remedial Action Planner */}
            <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                      Targeted Weak Topics Identified
                    </h3>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">
                    AI Diagnostic
                  </span>
                </div>

                <div className="mt-3 space-y-3">
                  {currentStudent.weakTopics.map((weak, idx) => {
                    const isAssigned = remedialAssigned[weak.topic];
                    return (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-white">{weak.topic}</span>
                          <span className="text-[10px] font-mono text-rose-400 bg-rose-950/60 px-2 py-0.5 rounded border border-rose-800/40">
                            {weak.errorRate}% Error Rate
                          </span>
                        </div>

                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          {weak.recommendedAction}
                        </p>

                        <button
                          onClick={() => handleAssignRemedial(weak.topic)}
                          className={`w-full py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                            isAssigned
                              ? 'bg-emerald-950 text-emerald-300 border border-emerald-700/50'
                              : 'bg-gradient-to-r from-sky-500/20 to-indigo-600/20 border border-sky-500/40 text-sky-200 hover:from-sky-500/30 hover:to-indigo-600/30'
                          }`}
                        >
                          {isAssigned ? (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Remedial Drill Assigned to Student Locker</span>
                            </>
                          ) : (
                            <>
                              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                              <span>1-Click Assign 15-Min Remedial Drill</span>
                            </>
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
                <Activity className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Parent mobile app receives instant weekly progress digests with these micro-remedials.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
