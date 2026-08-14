import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Layers, 
  CreditCard, 
  Bus, 
  Fingerprint, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  Send, 
  ShieldCheck, 
  Smartphone, 
  Navigation,
  FileSpreadsheet,
  Check
} from 'lucide-react';
import { ERP_FEATURES } from '../data/educaPilotData';

export const SchoolErpSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'fees' | 'gps' | 'attendance' | 'timetable'>('fees');
  
  // Interactive Fee Simulator State
  const [feeAmount, setFeeAmount] = useState<number>(45000);
  const [scholarshipPercent, setScholarshipPercent] = useState<number>(15);
  const [invoiceSent, setInvoiceSent] = useState<boolean>(false);

  // Interactive GPS Bus State
  const [activeBusRoute, setActiveBusRoute] = useState<string>('Route 04 (North Campus)');
  const [busProgress, setBusProgress] = useState<number>(65);

  // Interactive Attendance State with Live Student Photos
  const [scannedStudents, setScannedStudents] = useState<Array<{ 
    id: string; 
    name: string; 
    avatar: string;
    time: string; 
    status: 'Present' | 'Late'; 
    busRoute: string 
  }>>([
    { 
      id: 'ST-101', 
      name: 'Aarav Mehta', 
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&auto=format&fit=crop&q=80',
      time: '07:54 AM', 
      status: 'Present', 
      busRoute: 'Bus 04' 
    },
    { 
      id: 'ST-102', 
      name: 'Diya Sen', 
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80',
      time: '07:58 AM', 
      status: 'Present', 
      busRoute: 'Bus 02' 
    },
    { 
      id: 'ST-103', 
      name: 'Kabir Roy', 
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
      time: '08:06 AM', 
      status: 'Late', 
      busRoute: 'Self' 
    }
  ]);
  const [lastTapped, setLastTapped] = useState<string | null>(null);

  // Interactive Timetable Matrix
  const [substituteActive, setSubstituteActive] = useState<boolean>(false);

  const discountedFee = Math.round(feeAmount * (1 - scholarshipPercent / 100));

  const handleSimulateScan = () => {
    const studentsPool = [
      { name: 'Ria Kapoor', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80' },
      { name: 'Zaid Khan', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80' },
      { name: 'Sneha Paul', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80' },
      { name: 'Vikram Das', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80' }
    ];
    const randomStudent = studentsPool[Math.floor(Math.random() * studentsPool.length)];
    const newStudent = {
      id: `ST-${Math.floor(104 + Math.random() * 900)}`,
      name: randomStudent.name,
      avatar: randomStudent.avatar,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'Present' as const,
      busRoute: 'Bus 04'
    };
    setScannedStudents(prev => [newStudent, ...prev.slice(0, 3)]);
    setLastTapped(`RFID Card Scanned for ${randomStudent.name}: Instant SMS sent to parent.`);
    setTimeout(() => setLastTapped(null), 4000);
  };

  return (
    <section id="erp" className="py-20 bg-gradient-to-b from-slate-50 via-sky-50/30 to-indigo-50/20 relative overflow-hidden border-t border-slate-200">
      {/* Background subtle light glassy ambient gradient orbs */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-sky-200/40 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-indigo-200/30 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-purple-100/40 rounded-full blur-[110px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Crisp Light Theme */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-sky-200/80 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-md">
            <Layers className="w-3.5 h-3.5 text-sky-600" />
            <span>Pillar 01 • Unified School ERP</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Institutional Administration, <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Zero Friction</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Eliminate fragmented spreadsheets, fee leakages, and chaotic timetables. EducaPilot unifies fee invoicing, GPS transport tracking, biometric check-ins, and staff payroll under one high-speed dashboard.
          </p>
        </div>

        {/* Interactive ERP Sandbox Explorer (Dark Console in Light Container) */}
        <div className="mt-12 rounded-3xl bg-slate-900 border border-slate-800 p-4 sm:p-7 shadow-2xl text-white">
          {/* Sub-tabs Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Live Sandbox:</span>
              <span className="text-xs font-semibold text-sky-400">Interactive Institutional Cockpit</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab('fees')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'fees'
                    ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <CreditCard className="w-3.5 h-3.5" />
                <span>Automated Fees</span>
              </button>

              <button
                onClick={() => setActiveTab('gps')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'gps'
                    ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <Bus className="w-3.5 h-3.5" />
                <span>GPS Fleet &amp; Safety</span>
              </button>

              <button
                onClick={() => setActiveTab('attendance')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'attendance'
                    ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <Fingerprint className="w-3.5 h-3.5" />
                <span>Biometric &amp; RFID</span>
              </button>

              <button
                onClick={() => setActiveTab('timetable')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'timetable'
                    ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>AI Timetable</span>
              </button>
            </div>
          </div>

          {/* Tab 1: Interactive Fee Invoicing */}
          {activeTab === 'fees' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6"
            >
              {/* Controls Column */}
              <div className="lg:col-span-6 space-y-4">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-200">Interactive Tuition Configurator</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                      Auto GST Invoicing
                    </span>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1.5">
                      <span>Base Term Fee (Grade 11 Science)</span>
                      <span className="font-mono text-sky-300 font-bold">₹ {feeAmount.toLocaleString('en-IN')}</span>
                    </div>
                    <input
                      type="range"
                      min={20000}
                      max={120000}
                      step={5000}
                      value={feeAmount}
                      onChange={(e) => {
                        setFeeAmount(Number(e.target.value));
                        setInvoiceSent(false);
                      }}
                      className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1.5">
                      <span>Merit Scholarship Discount</span>
                      <span className="font-mono text-emerald-400 font-bold">{scholarshipPercent}% Waiver</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={50}
                      step={5}
                      value={scholarshipPercent}
                      onChange={(e) => {
                        setScholarshipPercent(Number(e.target.value));
                        setInvoiceSent(false);
                      }}
                      className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                    />
                  </div>

                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-slate-400">Net Payable per Student</div>
                      <div className="text-2xl font-bold text-white font-mono">
                        ₹ {discountedFee.toLocaleString('en-IN')}
                      </div>
                    </div>

                    <button
                      onClick={() => setInvoiceSent(true)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        invoiceSent
                          ? 'bg-emerald-600 text-white'
                          : 'bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 text-white hover:from-sky-400 hover:to-purple-500 shadow-lg shadow-indigo-600/30'
                      }`}
                    >
                      {invoiceSent ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          <span>WhatsApp Invoices Sent!</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Dispatch 1-Tap UPI Links</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="text-slate-400 text-[11px]">Auto Defaulter Reminders</div>
                    <div className="text-white font-bold mt-1">SMS, Email, WhatsApp</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="text-slate-400 text-[11px]">Bank Ledger Sync</div>
                    <div className="text-emerald-400 font-bold mt-1">Direct NEFT/RTGS Match</div>
                  </div>
                </div>
              </div>

              {/* Real-time Ledger Preview */}
              <div className="lg:col-span-6 p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <FileSpreadsheet className="w-4 h-4 text-sky-400" />
                      <span className="text-xs font-semibold text-slate-200">Live Campus Fee Invoicing Stream</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Gateway Online
                    </span>
                  </div>

                  <div className="mt-3 space-y-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <img
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                          alt="Kavya Nair"
                          className="w-8 h-8 rounded-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <div className="font-semibold text-slate-200">Kavya Nair • Grade 11-A</div>
                          <div className="text-[10px] text-slate-400">Invoice #EP-INV-8492 • UPI Pay</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono text-emerald-400 font-bold">₹ {discountedFee.toLocaleString('en-IN')}</div>
                        <div className="text-[10px] text-emerald-300">Paid • Instant e-Receipt</div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <img
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                          alt="Devansh Gupta"
                          className="w-8 h-8 rounded-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <div className="font-semibold text-slate-200">Devansh Gupta • Grade 12-C</div>
                          <div className="text-[10px] text-slate-400">Invoice #EP-INV-8493 • NetBanking</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono text-emerald-400 font-bold">₹ 52,000</div>
                        <div className="text-[10px] text-emerald-300">Auto-Reconciled</div>
                      </div>
                    </div>

                    {invoiceSent && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-3 rounded-xl bg-indigo-950/70 border border-indigo-500/40 text-indigo-200 text-[11px]"
                      >
                        <span className="font-bold text-white">Live Telemetry Update:</span> 248 parents notified via WhatsApp with 1-click Razorpay/Stripe dynamic payment links.
                      </motion.div>
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Annual Fee Collection Efficiency</span>
                  <span className="text-emerald-400 font-bold font-mono">99.4% (Industry Highest)</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Tab 2: GPS Fleet & Child Safety */}
          {activeTab === 'gps' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6"
            >
              <div className="lg:col-span-7 p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-sky-400" />
                    <span className="text-xs font-bold text-white">Live Vehicle Telemetry Grid</span>
                  </div>
                  <div className="flex gap-1.5">
                    {['Route 04 (North Campus)', 'Route 09 (Expressway)', 'Route 12 (South Gate)'].map((route) => (
                      <button
                        key={route}
                        onClick={() => setActiveBusRoute(route)}
                        className={`text-[10px] px-2.5 py-1 rounded-md transition-all ${
                          activeBusRoute === route
                            ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 font-bold'
                            : 'bg-slate-900 text-slate-400 hover:text-white'
                        }`}
                      >
                        {route.split(' ')[0]} {route.split(' ')[1]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Simulated Visual Route Track */}
                <div className="h-44 rounded-xl bg-slate-900/90 border border-slate-800 p-3 relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute inset-0 bg-[radial-gradient(#38bdf815_1px,transparent_1px)] [background-size:12px_12px]" />
                  
                  <div className="z-10 space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-300 font-semibold">{activeBusRoute}</span>
                      <span className="text-sky-300 font-mono font-bold">Speed: 42 km/h • Driver: Mr. Satish (SOS OK)</span>
                    </div>

                    <div className="relative pt-6 pb-2">
                      <div className="h-2 w-full bg-slate-800 rounded-full relative">
                        <div
                          className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full transition-all duration-300"
                          style={{ width: `${busProgress}%` }}
                        />
                      </div>

                      <div 
                        className="absolute top-1 -translate-x-1/2 transition-all duration-300"
                        style={{ left: `${busProgress}%` }}
                      >
                        <div className="w-8 h-8 rounded-full bg-sky-400 text-slate-950 flex items-center justify-center shadow-lg shadow-sky-400/50 animate-bounce">
                          <Bus className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>Stop 1: Central Circle</span>
                      <span>Stop 3: Greenwood St. (Current)</span>
                      <span>Stop 5: School Gate (ETA 12m)</span>
                    </div>
                  </div>

                  <div className="z-10 flex items-center gap-3 pt-2 border-t border-slate-800/80">
                    <span className="text-[11px] text-slate-400 whitespace-nowrap">Simulate Bus Progress:</span>
                    <input
                      type="range"
                      min={10}
                      max={100}
                      value={busProgress}
                      onChange={(e) => setBusProgress(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
                    />
                    <span className="text-[11px] font-mono text-sky-300">{busProgress}%</span>
                  </div>
                </div>

                <div className="text-xs text-slate-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Geo-fence triggers automatically notify parents 500m before arrival.</span>
                </div>
              </div>

              {/* Parent Mobile Notification Mockup */}
              <div className="lg:col-span-5 p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-xs font-bold text-slate-200">Parent Mobile Push Preview</span>
                  <Smartphone className="w-4 h-4 text-sky-400" />
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-sky-500/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-300">EducaPilot School App</span>
                    <span className="text-[10px] text-slate-400 font-mono">Just Now</span>
                  </div>
                  <div className="text-xs text-slate-200">
                    🚌 <span className="font-semibold text-white">Bus 04 Approaching Your Stop:</span> Aarav's school bus is 3 minutes away from Greenwood St. Please be ready at pickup point.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1 text-xs">
                  <div className="text-slate-400 text-[11px]">Child Boarding Verification</div>
                  <div className="flex justify-between items-center text-slate-200 font-semibold">
                    <span>Aarav Mehta (Grade 6)</span>
                    <span className="text-emerald-400 text-[11px] font-mono">Scanned on-board</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Tab 3: Biometric & RFID Attendance */}
          {activeTab === 'attendance' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6"
            >
              <div className="lg:col-span-6 space-y-4">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-200">Biometric &amp; RFID Turnstile Gate</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                      Sub-Second 0.4s
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Hardware-agnostic integration with face scanners, RFID badges, and biometric machines. Absentee triggers dispatch instantly to parents.
                  </p>

                  <button
                    onClick={handleSimulateScan}
                    className="w-full py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-400 hover:to-purple-500 shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2"
                  >
                    <Fingerprint className="w-4 h-4" />
                    <span>Simulate Student RFID Badge Tap</span>
                  </button>

                  {lastTapped && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-medium"
                    >
                      ✓ {lastTapped}
                    </motion.div>
                  )}
                </div>
              </div>

              <div className="lg:col-span-6 p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-xs font-bold text-slate-200">Real-Time Morning Entry Feed</span>
                  <span className="text-xs text-slate-400 font-mono">Today: 98.4% Present</span>
                </div>

                <div className="space-y-2">
                  {scannedStudents.map((st) => (
                    <div key={st.id} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={st.avatar}
                          alt={st.name}
                          className="w-8 h-8 rounded-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <div className="font-semibold text-white">{st.name} ({st.id})</div>
                          <div className="text-[10px] text-slate-400">{st.busRoute} • Logged at {st.time}</div>
                        </div>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                        st.status === 'Present' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'
                      }`}>
                        {st.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Tab 4: AI Clash-Free Timetable */}
          {activeTab === 'timetable' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6"
            >
              <div className="lg:col-span-12 p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
                  <div>
                    <div className="text-xs font-bold text-white">Master Section Timetable Matrix (Grade 12-A)</div>
                    <div className="text-[11px] text-slate-400">Optimized across 42 subject teachers and 6 specialized science laboratories.</div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setSubstituteActive(!substituteActive)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                        substituteActive
                          ? 'bg-amber-950/60 border-amber-500 text-amber-300'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      {substituteActive ? '⚡ Substitute Mode Active (Prof. Verma On Leave)' : 'Simulate Teacher Leave'}
                    </button>

                    <button
                      className="px-3 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-sky-500 to-indigo-600 text-white hover:from-sky-400 hover:to-indigo-500 flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Re-Generate 0 Clashes</span>
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px]">
                        <th className="py-2 px-3">Period</th>
                        <th className="py-2 px-3">Monday</th>
                        <th className="py-2 px-3">Tuesday</th>
                        <th className="py-2 px-3">Wednesday</th>
                        <th className="py-2 px-3">Thursday</th>
                        <th className="py-2 px-3">Friday</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-200">
                      <tr>
                        <td className="py-2.5 px-3 font-mono text-sky-400 font-semibold">P1 (08:30)</td>
                        <td className="py-2.5 px-3 bg-indigo-950/40 font-medium">Physics (Dr. Roy)</td>
                        <td className="py-2.5 px-3">Calculus (Ms. Sen)</td>
                        <td className="py-2.5 px-3 bg-indigo-950/40">Physics (Dr. Roy)</td>
                        <td className="py-2.5 px-3">Organic Chem (Dr. Rao)</td>
                        <td className="py-2.5 px-3">Calculus (Ms. Sen)</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-mono text-sky-400 font-semibold">P2 (09:20)</td>
                        <td className="py-2.5 px-3">Organic Chem (Dr. Rao)</td>
                        <td className="py-2.5 px-3">
                          {substituteActive ? (
                            <span className="text-amber-400 font-semibold">⚡ Ms. Gupta (Proxy Substitution)</span>
                          ) : (
                            <span>Physics (Prof. Verma)</span>
                          )}
                        </td>
                        <td className="py-2.5 px-3">Botany (Dr. Nair)</td>
                        <td className="py-2.5 px-3 bg-sky-950/40 text-sky-300 font-medium">Test-Ex CBT Drill</td>
                        <td className="py-2.5 px-3">Zoology (Dr. Das)</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-mono text-sky-400 font-semibold">P3 (10:15)</td>
                        <td className="py-2.5 px-3 bg-teal-950/40 text-teal-300 font-medium" colSpan={2}>
                          Physics &amp; Electronics Lab (Batch A/B)
                        </td>
                        <td className="py-2.5 px-3">Physical Chem</td>
                        <td className="py-2.5 px-3">Calculus Advanced</td>
                        <td className="py-2.5 px-3">English &amp; Aptitude</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Feature Grid Cards (Glassy White Cards on Light Gradient Canvas) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ERP_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-white/90 hover:border-sky-400/60 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200/80">
                    {feature.category}
                  </span>
                  <span className="text-xs font-mono text-indigo-600 font-bold">
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {feature.description}
                </p>

                <div className="mt-4 space-y-2">
                  {feature.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">{feature.statHighlight.label}</span>
                <span className="font-mono font-bold text-slate-900">{feature.statHighlight.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
