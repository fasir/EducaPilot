import React, { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  X, 
  Building2, 
  Mail, 
  User, 
  Phone, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck
} from 'lucide-react';
import { EducaPilotLogo } from './EducaPilotLogo';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institutionName: '',
    institutionType: 'K-12 School (CBSE/ICSE/IB)',
    studentCount: '1,000 - 3,000 Students',
    primaryInterest: 'All Pillars (Unified ERP + LMS + Test-Ex)',
    preferredDate: '2026-08-18',
    preferredTime: '11:00 AM'
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 }
    });
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="w-full max-w-xl rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden my-8"
      >
        {/* Modal Header */}
        <div className="p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <EducaPilotLogo variant="dark" />

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900">Schedule 1-on-1 Campus Walkthrough</h3>
                <p className="text-slate-500 text-[11px]">Personalized live demo for your school, college, or test academy.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-slate-700 font-semibold flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-blue-600" />
                    <span>Your Full Name *</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Dr. Ramesh Gupta"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-700 font-semibold flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-blue-600" />
                    <span>Official Email ID *</span>
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="principal@school.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-slate-700 font-semibold flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-blue-600" />
                    <span>Mobile Phone / WhatsApp *</span>
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-700 font-semibold flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>Institution Name *</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Greenwood International School"
                    value={formData.institutionName}
                    onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-slate-700 font-semibold">Total Student Strength</label>
                  <select
                    value={formData.studentCount}
                    onChange={(e) => setFormData({ ...formData, studentCount: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  >
                    <option>Under 500 Students</option>
                    <option>500 - 1,500 Students</option>
                    <option>1,500 - 4,000 Students</option>
                    <option>4,000 - 10,000+ Students</option>
                    <option>Multi-Branch Group (10,000+)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-700 font-semibold">Primary Focus Area</label>
                  <select
                    value={formData.primaryInterest}
                    onChange={(e) => setFormData({ ...formData, primaryInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  >
                    <option>All Pillars (Unified ERP + LMS + Test-Ex)</option>
                    <option>School ERP (Fees, Transport, Biometrics)</option>
                    <option>Test-Ex (NEET/JEE CBT Simulator Engine)</option>
                    <option>LMS &amp; AI Doubt Solver</option>
                    <option>Student Analytics &amp; Rank Predictor</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 hover:from-blue-400 hover:to-purple-500 shadow-xl shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <Sparkles className="w-4 h-4 fill-white" />
                  <span>Confirm Demo Booking &amp; Request Proposal</span>
                </button>
              </div>

              <div className="text-center text-[10px] text-slate-500 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Strictly confidential. Zero spam. Includes custom ROI calculation for your board.</span>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 mx-auto flex items-center justify-center text-emerald-600 animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-lg font-extrabold text-slate-900">
                  Demo Walkthrough Confirmed!
                </h4>
                <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
                  Thank you, <strong className="text-blue-600">{formData.name}</strong>. A calendar invitation and personalized sandbox access link have been sent to <strong className="text-blue-600">{formData.email}</strong>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-left space-y-1.5 max-w-md mx-auto">
                <div className="text-slate-500 text-[11px]">Appointment Details:</div>
                <div className="font-semibold text-slate-900">• Institution: {formData.institutionName}</div>
                <div className="text-slate-700">• Module Package: {formData.primaryInterest}</div>
                <div className="text-slate-700">• Dedicated Senior Solutions Architect assigned</div>
              </div>

              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              >
                Close &amp; Return to Platform
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
