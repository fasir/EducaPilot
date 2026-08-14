import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  GraduationCap, 
  UserCheck, 
  HeartHandshake, 
  Check, 
  Sparkles,
  Smartphone
} from 'lucide-react';
import { UserRole } from '../types';

export const RoleExperienceSection: React.FC = () => {
  const [activeRole, setActiveRole] = useState<UserRole>('principal');

  const rolesData: Record<UserRole, {
    label: string;
    badge: string;
    icon: React.ReactNode;
    headline: string;
    subheadline: string;
    personaImage: string;
    personaName: string;
    personaTitle: string;
    benefits: string[];
    snapshotHeadline: string;
    snapshotDetails: { label: string; value: string }[];
  }> = {
    principal: {
      label: 'Principals & Management',
      badge: 'Institutional Command',
      icon: <Building2 className="w-4 h-4" />,
      headline: '360° Real-Time Institutional Oversight',
      subheadline: 'Command multi-branch finances, teacher outcome appraisals, compliance records, and admissions growth in a unified executive cockpit.',
      personaImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
      personaName: 'Dr. Radhika Sen',
      personaTitle: 'Director & Trustee, Global Academy',
      benefits: [
        'Live financial ledger: Fee collections, overheads, and automated bank reconciliations',
        'Staff KPI appraisals based on student outcomes and syllabus completion rates',
        'Centralized multi-campus governance with customizable role-based permissions',
        'Zero regulatory compliance panic: Auto-generated CBSE/ICSE/Board audit reports'
      ],
      snapshotHeadline: 'Executive Governance Cockpit',
      snapshotDetails: [
        { label: 'Campus Enrollment Growth', value: '+28% YoY' },
        { label: 'Fee Collection Efficiency', value: '99.4%' },
        { label: 'Staff Attendance Rate', value: '98.2%' },
        { label: 'Multi-Branch Sync', value: '8 Campuses Live' }
      ]
    },
    teacher: {
      label: 'Educators & Examiners',
      badge: 'Academic Efficiency',
      icon: <GraduationCap className="w-4 h-4" />,
      headline: 'Reclaim 18+ Hours Every Week',
      subheadline: 'Eliminate tedious manual attendance registers and exam grading. Spend more time inspiring students with AI-assisted teaching studios.',
      personaImage: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&auto=format&fit=crop&q=80',
      personaName: 'Prof. Arvind Menon',
      personaTitle: 'Senior Physics Faculty & HOD',
      benefits: [
        '1-tap digital roll call synced with morning RFID gate punches',
        'AI Question Paper Generator: Build NEET/JEE mock sets in 60 seconds with LaTeX',
        'Auto-graded subjective and objective homework rubrics with instant feedback',
        'Seamless substitute proxy alerts delivered to your mobile app'
      ],
      snapshotHeadline: 'Educator Daily Assistant',
      snapshotDetails: [
        { label: 'Grading Time Slashed', value: '70% Saved' },
        { label: 'Question Bank Access', value: '350K+ Tagged' },
        { label: 'Timetable Clashes', value: '0 Conflicts' },
        { label: 'Parent Message Filter', value: 'Quiet Hours Protected' }
      ]
    },
    student: {
      label: 'Students & Aspirants',
      badge: 'Competitive Edge',
      icon: <UserCheck className="w-4 h-4" />,
      headline: 'The Ultimate Competitive Exam Launchpad',
      subheadline: 'Ace your NEET, JEE, SAT, and Board examinations with exact CBT test engines, 24/7 AI doubt clearing, and personalized topic remediation.',
      personaImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&auto=format&fit=crop&q=80',
      personaName: 'Ananya Sharma & Peers',
      personaTitle: 'Grade 12 Aspirant • Target: JEE Advanced',
      benefits: [
        'Exact NTA-style CBT test environment with question palette & countdown timer',
        '24/7 AI Academic Copilot: Instant step-by-step guidance whenever you get stuck',
        'Personalized error log: Practice only the concepts where you lose marks',
        'Gamified learning streaks and All-India percentile leaderboards'
      ],
      snapshotHeadline: 'Student Aspirant Portal',
      snapshotDetails: [
        { label: 'Predicted AIR Rank', value: 'Top 0.8%ile' },
        { label: 'AI Doubt Speed', value: 'Under 2s' },
        { label: 'Mocks Completed', value: '42 Exams' },
        { label: 'Study Streak', value: '18 Days 🔥' }
      ]
    },
    parent: {
      label: 'Parents & Guardians',
      badge: 'Peace of Mind',
      icon: <HeartHandshake className="w-4 h-4" />,
      headline: 'Real-Time Transparency & Child Safety',
      subheadline: 'Stay connected to your child\'s education. Track live school buses, pay fees in 1 tap, and monitor academic growth in real-time.',
      personaImage: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&auto=format&fit=crop&q=80',
      personaName: 'Vikram & Priya Kapoor',
      personaTitle: 'Parents of Rohan (Grade 9)',
      benefits: [
        'Live GPS bus tracking with speed monitors and 5-min arrival ETA alerts',
        'Instant gate biometric entry/exit push notifications on your phone',
        '1-Tap UPI/Card fee payment with instant downloadable GST receipts',
        'Weekly academic diagnostics and teacher feedback reports'
      ],
      snapshotHeadline: 'Parent Guardian App',
      snapshotDetails: [
        { label: 'Bus Proximity Alert', value: '3 Mins Away' },
        { label: 'Gate Scan Verified', value: '07:54 AM' },
        { label: 'Term Fee Status', value: 'Paid (e-Receipt #849)' },
        { label: 'Weekly Test Avg', value: '94% (Grade A)' }
      ]
    }
  };

  const currentRoleData = rolesData[activeRole];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-700/50 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored Stakeholder Portals</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Designed for <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Every Stakeholder</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            EducaPilot delivers dedicated, high-speed interfaces custom tailored for administrators, teachers, students, and parents.
          </p>
        </div>

        {/* Role Selectors */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {(Object.keys(rolesData) as UserRole[]).map((roleKey) => {
            const role = rolesData[roleKey];
            const isSelected = activeRole === roleKey;

            return (
              <button
                key={roleKey}
                onClick={() => setActiveRole(roleKey)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30 scale-105'
                    : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                <span className={isSelected ? 'text-white' : 'text-slate-400'}>
                  {role.icon}
                </span>
                <span>{role.label}</span>
              </button>
            );
          })}
        </div>

        {/* Role Content Card */}
        <div className="mt-10 rounded-3xl bg-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRole}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Value proposition */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-sky-950/80 text-sky-300 border border-sky-800/50 text-xs font-mono">
                  <span>{currentRoleData.badge}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {currentRoleData.headline}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {currentRoleData.subheadline}
                </p>

                <div className="space-y-2.5 pt-2">
                  {currentRoleData.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Snapshot & Persona Card */}
              <div className="lg:col-span-5 space-y-4">
                {/* Persona Header Image Card */}
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-4">
                  <img
                    src={currentRoleData.personaImage}
                    alt={currentRoleData.personaName}
                    className="w-16 h-16 rounded-2xl object-cover border border-sky-400/40 shrink-0 shadow-md"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="text-sm font-bold text-white">{currentRoleData.personaName}</div>
                    <div className="text-xs text-sky-300 font-medium">{currentRoleData.personaTitle}</div>
                    <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>Active educaPilot User</span>
                    </div>
                  </div>
                </div>

                {/* Key Metric Tiles */}
                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <div className="text-xs font-bold text-white">
                      {currentRoleData.snapshotHeadline}
                    </div>
                    <span className="text-[10px] text-sky-400 font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                      Live Portal
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {currentRoleData.snapshotDetails.map((item, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                        <div className="text-[10px] text-slate-400">{item.label}</div>
                        <div className="text-base font-bold font-mono text-sky-300 mt-1">
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-sky-500/20 text-xs text-slate-300 flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Available as native Web, iOS, and Android mobile apps with zero lag.</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
