import React from 'react';
import { Star, ShieldCheck, Lock, Award, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/educaPilotData';

export const TrustTestimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 via-sky-50/20 to-indigo-50/20 relative overflow-hidden border-t border-slate-200">
      {/* Background Glassy Glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-sky-200/30 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-indigo-200/30 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-sky-200/80 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-md">
            <Award className="w-3.5 h-3.5 text-sky-600" />
            <span>Proven Institutional Impact</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Trusted by <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">1,200+ Leaders</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            See how top international K-12 institutions and competitive NEET/JEE coaching academies transform student outcomes and campus operations with EducaPilot.
          </p>
        </div>

        {/* Testimonials Grid (Glassy High-Contrast Cards) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-white/80 backdrop-blur-md border border-white/90 hover:border-indigo-400/60 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                {/* Star rating */}
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-indigo-100 shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {item.name}
                    </div>
                    <div className="text-[11px] text-slate-500">{item.designation}</div>
                    <div className="text-[10px] text-indigo-600 font-semibold">{item.institution}, {item.location}</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] font-mono text-indigo-700 font-semibold text-center">
                  🎯 {item.impactMetrics}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security & Compliance Badges Strip */}
        <div className="mt-16 p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center shadow-lg">
          <div className="flex flex-col items-center space-y-1">
            <ShieldCheck className="w-6 h-6 text-sky-400" />
            <span className="text-xs font-bold text-white">ISO 27001 Certified</span>
            <span className="text-[10px] text-slate-400">Bank-Grade Data Encryption</span>
          </div>

          <div className="flex flex-col items-center space-y-1">
            <Lock className="w-6 h-6 text-indigo-400" />
            <span className="text-xs font-bold text-white">FERPA &amp; GDPR Compliant</span>
            <span className="text-[10px] text-slate-400">100% Student Privacy Guard</span>
          </div>

          <div className="flex flex-col items-center space-y-1">
            <CheckCircle2 className="w-6 h-6 text-emerald-400" />
            <span className="text-xs font-bold text-white">99.99% Uptime SLA</span>
            <span className="text-[10px] text-slate-400">Zero-Lag Exam Hosting</span>
          </div>

          <div className="flex flex-col items-center space-y-1">
            <Award className="w-6 h-6 text-purple-400" />
            <span className="text-xs font-bold text-white">24/7 Dedicated Support</span>
            <span className="text-[10px] text-slate-400">Under 5-Min Response Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};
