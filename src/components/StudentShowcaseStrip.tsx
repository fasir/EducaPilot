import React from 'react';
import { motion } from 'motion/react';
import {
  BookMarked,
  Award,
  Users,
  Smartphone,
  ArrowUpRight,
  TrendingUp,
  Sparkles
} from 'lucide-react';

interface StudentShowcaseStripProps {
  onOpenTestExSimulator?: () => void;
  onOpenDemoModal?: () => void;
}

export const StudentShowcaseStrip: React.FC<StudentShowcaseStripProps> = ({
  onOpenTestExSimulator,
  onOpenDemoModal
}) => {
  const showcaseItems = [
    {
      id: 'lms-student',
      tag: 'Smart LMS',
      tagColor: 'bg-purple-600/90 text-white',
      title: 'Interactive Video Pedagogy',
      subtitle: 'Auto-timestamped notes, interactive video playback & instant AI doubt solving.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
      icon: BookMarked,
      metric: '99.8% Completion',
      tone: 'bg-gradient-to-b from-[#f4f0ff] to-[#eae3ff] border-purple-200/70',
      metricColor: 'text-purple-700 bg-purple-100/80 border-purple-200'
    },
    {
      id: 'cbt-student',
      tag: 'Test-Ex CBT',
      tagColor: 'bg-indigo-600/90 text-white',
      title: 'High-Stakes Exam Practice',
      subtitle: 'Authentic NTA NEET/JEE exam simulation with sub-second delivery & gap analysis.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
      icon: Award,
      metric: 'AIR 420 Predicted',
      tone: 'bg-gradient-to-b from-[#f0f4ff] to-[#e4ecff] border-blue-200/70',
      metricColor: 'text-indigo-700 bg-indigo-100/80 border-indigo-200'
    },
    {
      id: 'erp-campus',
      tag: 'Campus ERP',
      tagColor: 'bg-emerald-600/90 text-white',
      title: 'Connected Smart Classrooms',
      subtitle: '0.4s RFID roll call, clash-free timetables & automated fee collection.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format&fit=crop&q=80',
      icon: Users,
      metric: '99.4% On-Time Fees',
      tone: 'bg-gradient-to-b from-[#edfcf5] to-[#def5eb] border-emerald-200/70',
      metricColor: 'text-emerald-700 bg-emerald-100/80 border-emerald-200'
    },
    {
      id: 'parent-mobile',
      tag: 'Parent App',
      tagColor: 'bg-amber-600/90 text-white',
      title: 'Live Parent Transparency',
      subtitle: 'Real-time GPS bus arrival radar, daily attendance & 1-tap automated fee receipts.',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80',
      icon: Smartphone,
      metric: '4.9★ Parent Rating',
      tone: 'bg-gradient-to-b from-[#fff5ee] to-[#ffebd9] border-amber-200/70',
      metricColor: 'text-amber-800 bg-amber-100/80 border-amber-200'
    }
  ];

  return (
    <section className="py-20 sm:py-24 relative overflow-hidden bg-gradient-to-b from-[#f7f5ff] via-[#f1edff] to-[#fbf9ff] border-t border-purple-900/5">
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-0 right-1/4 w-[460px] h-[460px] bg-purple-200/40 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-[420px] h-[420px] bg-indigo-200/35 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="section-heading text-center max-w-2xl mx-auto">
          <h2>
            Live E-Learning &amp; Student<br /><span>Experience Showcase</span>
          </h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            See how over 850,000 students, faculty, and parents interact with EducaPilot daily across high-speed web and native mobile interfaces.
          </p>
        </div>

        {/* 4-Card Modern Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 md:mt-14">
          {showcaseItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`group rounded-2xl overflow-hidden border ${item.tone} shadow-lg shadow-purple-950/5 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  {/* Image Container with Top Category Badge */}
                  <div className="h-48 sm:h-52 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />

                    {/* Top Category Tag */}
                    <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[13px] font-bold uppercase tracking-wider backdrop-blur-md shadow-sm ${item.tagColor}`}>
                      {item.tag}
                    </span>

                    {/* Floating Icon Pill */}
                    <span className="absolute bottom-3 left-3 w-8 h-8 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-800 shadow-sm">
                      <Icon className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-700 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[13.5px] text-slate-600 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Card Metric Footer */}
                <div className="px-5 py-3.5 bg-white/75 backdrop-blur-sm border-t border-white/80 flex items-center justify-between">
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[13px] font-bold ${item.metricColor}`}>
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{item.metric}</span>
                  </div>

                  <span className="w-7 h-7 rounded-full bg-white/90 border border-slate-200/80 text-slate-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all shadow-2xs">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

