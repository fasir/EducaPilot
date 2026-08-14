import React, { useState } from 'react';
import { 
  Calculator, 
  CreditCard, 
  Clock, 
  FileText, 
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Award
} from 'lucide-react';

interface RoiCalculatorSectionProps {
  onOpenDemoModal: () => void;
}

export const RoiCalculatorSection: React.FC<RoiCalculatorSectionProps> = ({ onOpenDemoModal }) => {
  const [students, setStudents] = useState<number>(2000);
  const [teachers, setTeachers] = useState<number>(80);
  const [annualExams, setAnnualExams] = useState<number>(24);
  const [avgFeePerTerm] = useState<number>(35000);

  // Fee leakage recovery: typical 3.5% uncollected without automated ERP reminders
  const feeLeakagePrevented = Math.round(students * avgFeePerTerm * 0.035);
  // Paper & Printing costs saved via Test-Ex & LMS
  const paperPrintingSaved = Math.round(students * annualExams * 8.5);
  // Teacher hours saved: 4.5 hours per teacher/week on manual grading & attendance
  const teacherHoursSavedPerYear = Math.round(teachers * 4.5 * 40);
  // Total economic value
  const totalAnnualSavings = feeLeakagePrevented + paperPrintingSaved;

  return (
    <section id="roi" className="py-20 bg-gradient-to-b from-slate-50 via-emerald-50/20 to-sky-50/20 relative overflow-hidden border-t border-slate-200">
      {/* Background Glassy Accent Orbs */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-emerald-200/30 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-sky-200/30 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-emerald-200/80 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-md">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            <span>Institutional ROI &amp; Time Efficiency</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Calculate Your <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 bg-clip-text text-transparent">Institutional ROI</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            See the exact operational hours and financial leakages EducaPilot saves your school or coaching academy every academic year.
          </p>
        </div>

        <div className="mt-12 rounded-3xl bg-white/85 backdrop-blur-md border border-white/90 p-6 sm:p-8 shadow-2xl shadow-slate-200/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Input Sliders */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-700">
                  <span className="font-semibold">Total Student Strength</span>
                  <span className="font-mono text-sky-600 font-bold text-sm">
                    {students.toLocaleString()} Students
                  </span>
                </div>
                <input
                  type="range"
                  min={300}
                  max={10000}
                  step={100}
                  value={students}
                  onChange={(e) => setStudents(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>300</span>
                  <span>5,000</span>
                  <span>10,000+</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-700">
                  <span className="font-semibold">Faculty &amp; Teaching Staff</span>
                  <span className="font-mono text-indigo-600 font-bold text-sm">
                    {teachers} Educators
                  </span>
                </div>
                <input
                  type="range"
                  min={15}
                  max={400}
                  step={5}
                  value={teachers}
                  onChange={(e) => setTeachers(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>15</span>
                  <span>200</span>
                  <span>400+</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-700">
                  <span className="font-semibold">Annual Competitive &amp; Internal Exams</span>
                  <span className="font-mono text-emerald-600 font-bold text-sm">
                    {annualExams} Exams / Year
                  </span>
                </div>
                <input
                  type="range"
                  min={6}
                  max={60}
                  step={2}
                  value={annualExams}
                  onChange={(e) => setAnnualExams(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>6 Mock Tests</span>
                  <span>30 Standard</span>
                  <span>60 Intensive</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Based on verified statistical benchmarks from 1,200+ partner schools and colleges across India &amp; SE Asia.</span>
              </div>
            </div>

            {/* Calculated Results Summary Card (Rich Dark Anchor Cockpit) */}
            <div className="lg:col-span-5 p-6 sm:p-7 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl space-y-5">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Projected Annual Value
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white mt-1">
                  ₹ {(totalAnnualSavings / 100000).toFixed(2)} Lakhs+
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Direct financial recovery &amp; paperless savings / academic year
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-800 text-xs">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-emerald-400" />
                    <span className="text-slate-300">Fee Leakage Prevented</span>
                  </div>
                  <span className="font-mono font-bold text-emerald-400">
                    ₹ {(feeLeakagePrevented / 100000).toFixed(2)} L
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-sky-400" />
                    <span className="text-slate-300">Paper &amp; Printing Eliminated</span>
                  </div>
                  <span className="font-mono font-bold text-sky-300">
                    ₹ {(paperPrintingSaved / 100000).toFixed(2)} L
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-indigo-400" />
                    <span className="text-slate-300">Faculty Grading Hours Reclaimed</span>
                  </div>
                  <span className="font-mono font-bold text-indigo-300">
                    {teacherHoursSavedPerYear.toLocaleString()} Hours
                  </span>
                </div>
              </div>

              <button
                onClick={onOpenDemoModal}
                className="w-full py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-500 via-teal-600 to-sky-600 hover:from-emerald-400 hover:to-sky-500 shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
              >
                <span>Request Custom Campus Pricing Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
