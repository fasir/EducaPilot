import React from 'react';
import { Check, X, Zap } from 'lucide-react';

export const ComparisonMatrix: React.FC = () => {
  const comparisonData = [
    {
      feature: 'Unified School ERP + LMS + Test-Ex Engine',
      educaPilot: true,
      legacyErp: false,
      standaloneLms: false
    },
    {
      feature: 'Lite Steps™ Rapid 48-Hour Zero-Downtime Migration',
      educaPilot: true,
      legacyErp: false,
      standaloneLms: false
    },
    {
      feature: 'Exact NTA CBT Exam Interface (NEET / JEE / SAT)',
      educaPilot: true,
      legacyErp: false,
      standaloneLms: false
    },
    {
      feature: '350,000+ Verified Questions with Video Solutions',
      educaPilot: true,
      legacyErp: false,
      standaloneLms: false
    },
    {
      feature: 'Automated 1-Tap UPI Fee Collection & GST Invoicing',
      educaPilot: true,
      legacyErp: true,
      standaloneLms: false
    },
    {
      feature: 'Live GPS Fleet Tracking & Child Gate Biometrics',
      educaPilot: true,
      legacyErp: true,
      standaloneLms: false
    },
    {
      feature: 'Real-Time Rank Prediction & Weak Concept Heatmaps',
      educaPilot: true,
      legacyErp: false,
      standaloneLms: false
    },
    {
      feature: '24/7 AI Academic Doubt Copilot for Students',
      educaPilot: true,
      legacyErp: false,
      standaloneLms: false
    },
    {
      feature: 'White-Labeled Native Mobile Apps (iOS & Android)',
      educaPilot: true,
      legacyErp: false,
      standaloneLms: false
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-700/50 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Market Benchmark Comparison</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Why Modern Institutions <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Choose EducaPilot</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Stop stitching together 4 expensive, disconnected software subscriptions. EducaPilot unifies everything under one seamless operating system.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-12 overflow-x-auto">
          <div className="inline-block min-w-full rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl p-4 sm:p-6">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="py-4 px-4 text-sm font-bold text-white w-2/5">
                    Platform Capability
                  </th>
                  <th className="py-4 px-4 text-center bg-sky-950/60 border-x border-sky-500/30 rounded-t-2xl w-1/5">
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-extrabold text-sky-300">EducaPilot</span>
                      <span className="text-[10px] text-sky-400 font-mono">Unified OS</span>
                    </div>
                  </th>
                  <th className="py-4 px-4 text-center text-slate-400 font-medium w-1/5">
                    Legacy School ERPs
                  </th>
                  <th className="py-4 px-4 text-center text-slate-400 font-medium w-1/5">
                    Standalone LMS / Quiz Tools
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/50 transition-colors">
                    <td className="py-3.5 px-4 font-medium text-slate-200">
                      {row.feature}
                    </td>

                    {/* EducaPilot Column */}
                    <td className="py-3.5 px-4 text-center bg-sky-950/30 border-x border-sky-500/20">
                      {row.educaPilot ? (
                        <div className="inline-flex p-1 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 text-slate-950 shadow-sm shadow-sky-500/30">
                          <Check className="w-4 h-4 font-extrabold" />
                        </div>
                      ) : (
                        <X className="w-4 h-4 text-slate-600 mx-auto" />
                      )}
                    </td>

                    {/* Legacy ERP Column */}
                    <td className="py-3.5 px-4 text-center text-slate-400">
                      {row.legacyErp ? (
                        <Check className="w-4 h-4 text-slate-400 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-rose-500/60 mx-auto" />
                      )}
                    </td>

                    {/* Standalone LMS Column */}
                    <td className="py-3.5 px-4 text-center text-slate-400">
                      {row.standaloneLms ? (
                        <span className="text-[11px] text-amber-400/90 font-mono">Partial Only</span>
                      ) : (
                        <X className="w-4 h-4 text-rose-500/60 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
