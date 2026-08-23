import React from 'react';
import { Star, ShieldCheck, Lock, Award, CheckCircle2, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/educaPilotData';

export const TrustTestimonials: React.FC = () => {
  const cardTones = [
    {
      cardBg: 'bg-gradient-to-b from-[#f5f1ff] to-[#ebe4ff] border-purple-200/80',
      tagBg: 'bg-purple-100/80 text-purple-700 border-purple-200',
      avatarBorder: 'border-purple-300'
    },
    {
      cardBg: 'bg-gradient-to-b from-[#f0f5ff] to-[#e5edff] border-blue-200/80',
      tagBg: 'bg-blue-100/80 text-blue-700 border-blue-200',
      avatarBorder: 'border-blue-300'
    },
    {
      cardBg: 'bg-gradient-to-b from-[#edfbf4] to-[#def5eb] border-emerald-200/80',
      tagBg: 'bg-emerald-100/80 text-emerald-800 border-emerald-200',
      avatarBorder: 'border-emerald-300'
    }
  ];

  return (
    <section className="py-20 sm:py-24 relative overflow-hidden bg-gradient-to-b from-[#f9f7ff] via-[#f2edff] to-[#f8f5ff] border-t border-purple-900/5">
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-[480px] h-[480px] bg-purple-200/40 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[440px] h-[440px] bg-indigo-200/35 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="section-heading text-center max-w-3xl mx-auto">
          <h2>
            Trusted by<br /><span>1,200+ Leaders</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm leading-relaxed">
            See how top international K-12 institutions and competitive coaching academies transform student outcomes and operations with EducaPilot.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, index) => {
            const tone = cardTones[index % cardTones.length];
            return (
              <div
                key={item.id}
                className={`p-7 rounded-2xl border ${tone.cardBg} shadow-lg shadow-purple-950/5 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group backdrop-blur-md`}
              >
                <div className="space-y-4">
                  {/* Top Row: 5 Stars & Quote Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(item.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="w-8 h-8 rounded-full bg-white/80 border border-white/90 flex items-center justify-center text-purple-600 shadow-2xs">
                      <Quote className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Quote Body */}
                  <p className="text-[13.5px] sm:text-sm text-slate-700 leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>

                {/* Card Footer: Profile Info & Impact Metric */}
                <div className="pt-5 mt-5 border-t border-purple-900/10 space-y-3.5">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className={`w-11 h-11 rounded-full object-cover border-2 ${tone.avatarBorder} shadow-xs shrink-0`}
                      referrerPolicy="no-referrer"
                    />
                    <div className="min-w-0">
                      <div className="text-[13.5px] font-bold text-slate-900 group-hover:text-purple-700 transition-colors truncate">
                        {item.name}
                      </div>
                      <div className="text-[13px] text-slate-500 truncate">{item.designation}</div>
                      <div className="text-[13px] text-purple-700 font-semibold truncate">{item.institution}</div>
                    </div>
                  </div>

                  {/* Impact Metric Pill */}
                  <div className={`px-3 py-1.5 rounded-xl border text-[13px] font-bold text-center ${tone.tagBg}`}>
                    {item.impactMetrics}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security & Compliance Strip */}
        <div className="mt-14 p-5 sm:p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-white/90 grid grid-cols-2 md:grid-cols-4 gap-5 items-center text-center shadow-lg shadow-purple-950/5 text-slate-800">
          <div className="flex flex-col items-center space-y-1">
            <ShieldCheck className="w-5 h-5 text-purple-600" />
            <span className="text-[13.5px] font-bold text-slate-900">ISO 27001 Certified</span>
            <span className="text-[13px] text-slate-500">Bank-Grade Encryption</span>
          </div>

          <div className="flex flex-col items-center space-y-1">
            <Lock className="w-5 h-5 text-indigo-600" />
            <span className="text-[13.5px] font-bold text-slate-900">FERPA &amp; GDPR Compliant</span>
            <span className="text-[13px] text-slate-500">100% Student Privacy Guard</span>
          </div>

          <div className="flex flex-col items-center space-y-1">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span className="text-[13.5px] font-bold text-slate-900">99.99% Uptime SLA</span>
            <span className="text-[13px] text-slate-500">Zero-Lag Cloud Architecture</span>
          </div>

          <div className="flex flex-col items-center space-y-1">
            <Award className="w-5 h-5 text-amber-600" />
            <span className="text-[13.5px] font-bold text-slate-900">24/7 Dedicated Support</span>
            <span className="text-[13px] text-slate-500">&lt; 5-Min Priority Response</span>
          </div>
        </div>
      </div>
    </section>
  );
};

