import React from 'react';
import { motion } from 'motion/react';
import { 
  BookMarked, 
  Award, 
  Users, 
  Smartphone, 
  CheckCircle2, 
  Sparkles,
  Wifi,
  Eye,
  ShieldCheck,
  Zap,
  ArrowUpRight
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
      tag: 'Smart LMS Studio',
      tagColor: 'bg-sky-500 text-white',
      title: 'Interactive Video Pedagogy',
      subtitle: 'Auto-timestamped notes, interactive video playback & instant AI doubt solving.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
      badgeText: 'HD 1080p Live Stream',
      icon: <BookMarked className="w-4 h-4 text-sky-600" />,
      metric: '99.8% Engagement',
      status: 'Active Live Stream',
      statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200'
    },
    {
      id: 'cbt-student',
      tag: 'Test-Ex CBT Engine',
      tagColor: 'bg-indigo-600 text-white',
      title: 'High-Stakes NTA CBT Testing',
      subtitle: 'Exact NEET/JEE/SAT replica with sub-second delivery & error analysis.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
      badgeText: '350K+ Tagged Questions',
      icon: <Award className="w-4 h-4 text-indigo-600" />,
      metric: 'AIR 420 Predicted',
      status: 'Anti-Cheat Proctoring On',
      statusColor: 'text-indigo-700 bg-indigo-50 border-indigo-200'
    },
    {
      id: 'erp-campus',
      tag: 'School ERP Hub',
      tagColor: 'bg-purple-600 text-white',
      title: 'Connected Smart Classrooms',
      subtitle: '0.4s RFID roll call, clash-free timetables & automated fee invoicing.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format&fit=crop&q=80',
      badgeText: '0.4s RFID Biometrics',
      icon: <Users className="w-4 h-4 text-purple-600" />,
      metric: '99.4% Fee Collection',
      status: 'Cloud Sync 18ms',
      statusColor: 'text-purple-700 bg-purple-50 border-purple-200'
    },
    {
      id: 'parent-mobile',
      tag: 'Parent & Staff Apps',
      tagColor: 'bg-emerald-600 text-white',
      title: 'Real-Time Parent Transparency',
      subtitle: 'Live GPS bus arrival radar with 1-tap automated fee receipts.',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80',
      badgeText: 'iOS & Android Native',
      icon: <Smartphone className="w-4 h-4 text-emerald-600" />,
      metric: '4.9★ Parent Rating',
      status: 'Live Bus Tracking',
      statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200'
    }
  ];

  return (
    <section className="py-14 sm:py-18 bg-gradient-to-b from-slate-100 via-sky-50/40 to-indigo-50/30 text-slate-900 relative overflow-hidden border-y border-slate-200/80">
      {/* Light Glassy Background Mesh Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-sky-200/50 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-indigo-200/40 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[350px] h-[350px] bg-purple-100/50 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-slate-200 text-sky-700 text-[11px] font-semibold uppercase tracking-wider mb-2.5 shadow-sm backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Real Campus Operations in Action</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
              Live E-Learning &amp; Student Experience Showcase
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              See how over 850,000 students, faculty, and administrators interact with EducaPilot daily across high-speed web and native mobile interfaces.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-700 font-mono bg-white/90 px-3.5 py-1.5 rounded-xl border border-slate-200/90 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>18,420 Active Student Sessions</span>
            </div>
            {onOpenDemoModal && (
              <button
                onClick={onOpenDemoModal}
                className="text-xs font-semibold text-sky-700 hover:text-sky-900 bg-white/90 hover:bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-sm backdrop-blur-md transition-all hover:shadow flex items-center gap-1"
              >
                <span>Schedule Tour</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* 4-Card Responsive Grid with Light Glassy Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {showcaseItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-white/80 backdrop-blur-md border border-white/90 hover:border-sky-300 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-sky-500/10 hover:bg-white transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Badges */}
                <div className="h-44 sm:h-48 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  
                  {/* Top Category Badge */}
                  <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md backdrop-blur-md ${item.tagColor}`}>
                    {item.tag}
                  </span>

                  {/* Status Indicator */}
                  <span className={`absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-medium border backdrop-blur-md flex items-center gap-1 shadow-sm ${item.statusColor}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    <span>{item.status}</span>
                  </span>

                  {/* Bottom Image Overlay Details */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-semibold text-white drop-shadow-sm truncate pr-2">
                      {item.badgeText}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-4 space-y-1.5">
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Footer Strip with Light Glass Texture */}
              <div className="px-4 py-2.5 bg-slate-50/90 backdrop-blur-sm border-t border-slate-100 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5 text-slate-700">
                  {item.icon}
                  <span className="font-mono text-slate-500 text-[10px]">Telemetry</span>
                </div>
                <span className="text-sky-700 font-semibold font-mono text-[11px]">
                  {item.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlights Strip in Glass Container */}
        <div className="mt-8 p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-white/90 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs text-slate-700">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
            <span className="font-medium">ISO 27001 &amp; SOC-2 Certified</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Wifi className="w-4 h-4 text-indigo-600 shrink-0" />
            <span className="font-medium">Offline-Ready Testing Engine</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Eye className="w-4 h-4 text-purple-600 shrink-0" />
            <span className="font-medium">AI Proctoring &amp; Audio Audit</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="font-medium">&lt; 50ms Response Latency</span>
          </div>
        </div>
      </div>
    </section>
  );
};
