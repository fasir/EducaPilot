import { ErpFeature, LmsFeature, Question, StudentAnalyticsProfile, LiteStep, Testimonial, FaqItem } from '../types';

export const ERP_FEATURES: ErpFeature[] = [
  {
    id: 'fee-management',
    title: 'Automated Fee Invoicing & Reconciliation',
    category: 'Finance',
    description: 'Zero fee leakages with automated multi-tier fee structures, auto-generated GST invoices, payment gateway routing, and instant SMS/WhatsApp reminders.',
    badge: '99.4% Collection Rate',
    icon: 'CreditCard',
    statHighlight: {
      value: '₹4.2 Cr+',
      label: 'Fee Processed Automatically / Term'
    },
    keyPoints: [
      'Multi-installment & custom scholarship discounts',
      'Real-time bank ledger sync and auto-reconciliation',
      'One-tap parent UPI & card payments with instant e-receipts',
      'Automated defaulter notifications & penalty waivers'
    ]
  },
  {
    id: 'smart-attendance',
    title: 'Biometric, RFID & Geo-Fenced Attendance',
    category: 'Safety',
    description: 'Instant student and faculty check-ins with AI face-recognition or smart RFID cards. Instant absentee alerts sent directly to guardian mobiles.',
    badge: 'Sub-Second Scan',
    icon: 'Fingerprint',
    statHighlight: {
      value: '0.4s',
      label: 'Average check-in speed per student'
    },
    keyPoints: [
      'Hardware-agnostic integration with any biometric machine',
      'Automated morning roll-call with teacher app sync',
      'Real-time SMS & Push triggers to parents on gate scan',
      'Seamless leave application and approval workflow'
    ]
  },
  {
    id: 'gps-transport',
    title: 'Live GPS Fleet & Child Safety Tracking',
    category: 'Logistics',
    description: 'Real-time bus tracking with speed monitors, dynamic route optimization, geo-fence entry/exit triggers, and live parent tracking map on mobile.',
    badge: '100% Zero Delay Tracking',
    icon: 'Bus',
    statHighlight: {
      value: '35 mins',
      label: 'Average parent commute wait time saved'
    },
    keyPoints: [
      'Live bus telemetry: Speed, fuel status, driver SOS',
      'Proximity ETA alerts (5 mins before stop arrival)',
      'Digital student bus boarding/de-boarding verification',
      'Dynamic route re-assignment during road disruptions'
    ]
  },
  {
    id: 'timetable-clash',
    title: 'AI Clash-Free Master Timetable Builder',
    category: 'Academics',
    description: 'Generate complete school and college timetables in seconds. Optimizes teacher workload, classroom room capacity, lab equipment, and proxy substitutions.',
    badge: 'Generated in 12s',
    icon: 'Calendar',
    statHighlight: {
      value: '100%',
      label: 'Clash-free schedule guarantee'
    },
    keyPoints: [
      'Automated proxy teacher assignment during sudden leaves',
      'Subject weightage and teacher preference optimization',
      'Room, lab, and sports ground resource allocation',
      'Exportable to PDF, Google Calendar, and parent portal'
    ]
  },
  {
    id: 'smart-admissions',
    title: 'Digital Admissions & CRM Pipeline',
    category: 'Administration',
    description: 'From enquiry lead capture to entrance test scoring and document verification. Transform prospective students into enrolled candidates effortlessly.',
    badge: '3.8x Conversion Lift',
    icon: 'UserPlus',
    statHighlight: {
      value: '8,400+',
      label: 'Paperless applications processed'
    },
    keyPoints: [
      'Multi-channel enquiry capture (Website, Walk-ins, Ads)',
      'Automated merit list generation and seat allotment',
      'Digital document vault with AI OCR validation',
      'Custom registration fee payment links'
    ]
  },
  {
    id: 'staff-payroll',
    title: 'Staff HR, Biometric Payroll & Appraisals',
    category: 'Administration',
    description: 'Comprehensive staff management with salary slips, tax deductions, EPF/ESI compliance, leaves ledger, and 360-degree student feedback appraisals.',
    badge: '1-Click Payroll',
    icon: 'Briefcase',
    statHighlight: {
      value: '15 mins',
      label: 'Monthly payroll run for 400+ staff'
    },
    keyPoints: [
      'Direct bank NEFT/RTGS batch file export',
      'Automated salary computation based on biometric punch',
      'KPI and student outcome tracking for teacher appraisals',
      'Tax projection and form 16 document generation'
    ]
  }
];

export const LMS_FEATURES: LmsFeature[] = [
  {
    id: 'ai-courseware',
    title: 'Adaptive Interactive Course Studio',
    description: 'Create multi-modal video lectures, interactive slide decks, embedded quizzes, and downloadable resources with drag-and-drop simplicity.',
    icon: 'Sparkles',
    badge: 'AI Powered',
    interactivePreviewType: 'video',
    metrics: '4x faster lesson preparation'
  },
  {
    id: 'live-classroom',
    title: 'Integrated HD Interactive Virtual Classes',
    description: 'Low-latency live classrooms with multi-cursor whiteboards, student breakout rooms, automated attendance logs, and cloud recordings.',
    icon: 'Video',
    badge: 'Sub-100ms Latency',
    interactivePreviewType: 'video',
    metrics: '99.8% streaming reliability'
  },
  {
    id: 'ai-doubt-copilot',
    title: '24/7 AI Academic Doubt Solver',
    description: 'Students get instant step-by-step conceptual hints, formula derivations, and video timestamps whenever they get stuck on assignments.',
    icon: 'BrainCircuit',
    badge: 'Real-time AI',
    interactivePreviewType: 'ai_assistant',
    metrics: 'Instant help at 11 PM or 6 AM'
  },
  {
    id: 'smart-homework',
    title: 'Auto-Graded Assignments & Code Labs',
    description: 'Automated rubrics for subjective questions, instant feedback for MCQs, and embedded coding sandboxes for computer science curricula.',
    icon: 'FileCheck',
    badge: 'Instant Feedback',
    interactivePreviewType: 'assignment',
    metrics: '70% teacher grading time saved'
  }
];

export const TEST_EX_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: 'Physics',
    examType: 'JEE Main',
    difficulty: 'Hard',
    text: 'A projectile is fired with velocity u at an angle θ with the horizontal. What is the radius of curvature of the trajectory at the highest point of its flight?',
    options: [
      'u² sin²(θ) / g',
      'u² cos²(θ) / g',
      'u² / (g cos(θ))',
      '2u² cos²(θ) / g'
    ],
    correctAnswer: 1,
    explanation: 'At the highest point, the velocity of the projectile is purely horizontal: v = u cos(θ). The only acceleration acting on the projectile is vertical downwards due to gravity: a_n = g. The radius of curvature is given by R = v² / a_n = (u cos(θ))² / g = u² cos²(θ) / g.',
    conceptTag: 'Projectile Motion & Kinematics',
    avgTimeSeconds: 48
  },
  {
    id: 2,
    subject: 'Biology',
    examType: 'NEET',
    difficulty: 'Medium',
    text: 'During DNA replication in prokaryotes, which enzyme removes RNA primers and fills the gaps with complementary deoxyribonucleotides?',
    options: [
      'DNA Polymerase III',
      'DNA Ligase',
      'DNA Polymerase I',
      'RNA Helicase'
    ],
    correctAnswer: 2,
    explanation: 'DNA Polymerase I possesses 5\' to 3\' exonuclease activity which enables it to degrade and remove the RNA primer, followed by 5\' to 3\' polymerase activity to fill in the resulting gap with DNA nucleotides.',
    conceptTag: 'Molecular Basis of Inheritance',
    avgTimeSeconds: 25
  },
  {
    id: 3,
    subject: 'Chemistry',
    examType: 'NEET',
    difficulty: 'Medium',
    text: 'Which of the following coordination complexes exhibits optical isomerism?',
    options: [
      'trans-[Co(en)₂Cl₂]⁺',
      'cis-[Co(en)₂Cl₂]⁺',
      '[Co(NH₃)₄Cl₂]⁺',
      '[Pt(NH₃)₂Cl₂]'
    ],
    correctAnswer: 1,
    explanation: 'cis-[Co(en)₂Cl₂]⁺ lacks a plane of symmetry as well as a center of inversion, rendering it non-superimposable on its mirror image (chiral), and therefore optically active.',
    conceptTag: 'Coordination Chemistry & Isomerism',
    avgTimeSeconds: 38
  },
  {
    id: 4,
    subject: 'Mathematics',
    examType: 'JEE Main',
    difficulty: 'Hard',
    text: 'Evaluate the definite integral ∫₀^(π/2) (sin³(x)) / (sin³(x) + cos³(x)) dx:',
    options: [
      'π / 2',
      'π / 4',
      '1',
      'π / 8'
    ],
    correctAnswer: 1,
    explanation: 'Using King\'s property of definite integrals, ∫₀ᵃ f(x)dx = ∫₀ᵃ f(a - x)dx. Adding the original integral to the transformed integral yields 2I = ∫₀^(π/2) 1 dx = π/2. Therefore, I = π / 4.',
    conceptTag: 'Definite Integration & Properties',
    avgTimeSeconds: 42
  }
];

export const MOCK_STUDENT_ANALYTICS: StudentAnalyticsProfile[] = [
  {
    name: 'Ananya Sharma',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
    rollNo: 'EP-2026-NEET-084',
    grade: 'Grade 12 (Target: NEET-UG)',
    targetExam: 'NEET Medical (720 Marks)',
    predictedRank: 'AIR 420 - 780 (Predicted: 685/720)',
    overallScorePercentile: 98.6,
    attendanceRate: 97.2,
    retentionRiskScore: 'Low Risk',
    subjectMastery: [
      { subject: 'Biology (Zoology & Botany)', score: 96, benchmarkAvg: 72, trend: 'up', color: '#10b981' },
      { subject: 'Physics (Mechanics & Electrodynamics)', score: 88, benchmarkAvg: 58, trend: 'up', color: '#6366f1' },
      { subject: 'Organic Chemistry', score: 92, benchmarkAvg: 64, trend: 'up', color: '#06b6d4' },
      { subject: 'Physical Chemistry', score: 82, benchmarkAvg: 61, trend: 'stable', color: '#f59e0b' }
    ],
    weakTopics: [
      { topic: 'Thermodynamics & Carnot Cycles', subject: 'Physics', errorRate: 34, recommendedAction: 'Review 3 conceptual video bites and attempt 15 targeted drill questions.' },
      { topic: 'Ionic Equilibrium & Buffer Solutions', subject: 'Chemistry', errorRate: 28, recommendedAction: 'Solve practice worksheet #4 on pH calculations.' }
    ],
    timeEfficiency: {
      avgTimePerQuestion: '38s (Ideal: 45s)',
      accuracyUnderPressure: '94.2%',
      rushMistakes: '3% (Very Low)'
    }
  },
  {
    name: 'Rohan Patel',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=80',
    rollNo: 'EP-2026-JEE-119',
    grade: 'Grade 12 (Target: JEE Advanced)',
    targetExam: 'IIT JEE (Advanced)',
    predictedRank: 'AIR 850 - 1,200 (Predicted: 99.1%ile)',
    overallScorePercentile: 99.1,
    attendanceRate: 95.8,
    retentionRiskScore: 'Low Risk',
    subjectMastery: [
      { subject: 'Mathematics (Calculus & Vectors)', score: 94, benchmarkAvg: 54, trend: 'up', color: '#6366f1' },
      { subject: 'Physics (Modern Physics & Optics)', score: 91, benchmarkAvg: 62, trend: 'up', color: '#06b6d4' },
      { subject: 'Physical & Organic Chemistry', score: 86, benchmarkAvg: 60, trend: 'up', color: '#10b981' },
      { subject: 'Inorganic Chemistry Coordination', score: 79, benchmarkAvg: 58, trend: 'down', color: '#ef4444' }
    ],
    weakTopics: [
      { topic: 'p-Block Elements & Qualitative Analysis', subject: 'Inorganic Chem', errorRate: 42, recommendedAction: 'Use AI Flashcards for memorizing reaction conditions.' },
      { topic: 'Rotational Dynamics Rigid Bodies', subject: 'Physics', errorRate: 26, recommendedAction: 'Watch advanced problem-solving session on Moment of Inertia.' }
    ],
    timeEfficiency: {
      avgTimePerQuestion: '78s (Ideal: 90s)',
      accuracyUnderPressure: '91.8%',
      rushMistakes: '6%'
    }
  },
  {
    name: 'Maya Sen',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop&q=80',
    rollNo: 'EP-2026-SAT-022',
    grade: 'Grade 11 (Target: SAT & APs)',
    targetExam: 'Digital SAT (1600 Scale)',
    predictedRank: 'Projected: 1540 / 1600',
    overallScorePercentile: 97.8,
    attendanceRate: 98.4,
    retentionRiskScore: 'Low Risk',
    subjectMastery: [
      { subject: 'SAT Math (Advanced & Algebra)', score: 98, benchmarkAvg: 68, trend: 'up', color: '#10b981' },
      { subject: 'Reading & Writing Syntax', score: 92, benchmarkAvg: 70, trend: 'up', color: '#6366f1' },
      { subject: 'Vocabulary in Context', score: 89, benchmarkAvg: 65, trend: 'stable', color: '#06b6d4' },
      { subject: 'Cross-Text Connections', score: 85, benchmarkAvg: 62, trend: 'up', color: '#f59e0b' }
    ],
    weakTopics: [
      { topic: 'Inference in Scientific Passages', subject: 'Reading', errorRate: 22, recommendedAction: 'Attempt SAT Module 2 Hard Practice set #8.' }
    ],
    timeEfficiency: {
      avgTimePerQuestion: '52s (Ideal: 60s)',
      accuracyUnderPressure: '96.5%',
      rushMistakes: '2%'
    }
  }
];

export const LITE_STEPS: LiteStep[] = [
  {
    step: 1,
    title: 'One-Click Data Ingestion & Setup',
    badge: '15 Minutes',
    timeline: 'Day 1: Zero Friction Setup',
    headline: 'Import entire student, teacher, and fee records effortlessly',
    description: 'No manual data entry. Upload your legacy Excel sheets, CSVs, or connect directly to your previous SIS database. Our intelligent schema parser automatically cleans, deduplicates, and maps all historical records.',
    actionItems: [
      'Automatic schema detection for students, guardians & staff',
      'Historical academic marks and fee ledger migration',
      'Single sign-on (SSO) with Google Workspace & Microsoft 365',
      'Role-based access security provisioning in seconds'
    ],
    deliverables: 'Complete campus database live with 100% data integrity.',
    icon: 'UploadCloud'
  },
  {
    step: 2,
    title: 'AI Curriculum Sync & Exam Bank Config',
    badge: 'Under 24 Hours',
    timeline: 'Day 2: Academic Alignment',
    headline: 'Pre-loaded with 350,000+ verified competitive exam questions',
    description: 'Select your state board, CBSE, ICSE, IB, Cambridge, or competitive syllabus (NEET/JEE/SAT/UPSC). EducaPilot auto-configures timetables, grading rubrics, question banks, and teacher lesson plans.',
    actionItems: [
      'Instant access to 350K+ tagged questions with video solutions',
      'Automatic grading scheme & report card template design',
      'One-click teacher timetable generator with zero scheduling clashes',
      'Pre-configured parent communication channels'
    ],
    deliverables: 'Fully calibrated academic engine tailored to your institution.',
    icon: 'Sparkles'
  },
  {
    step: 3,
    title: 'Campus Go-Live & White-Labeled Apps',
    badge: 'Day 3 Launch',
    timeline: 'Day 3: 100% Stakeholder Adoption',
    headline: 'Deploy native iOS, Android, and Web portals with your school branding',
    description: 'Launch with confidence. Teachers get one-tap attendance and assignment grading; parents get live GPS tracking and instant fee receipts; students get competitive Test-Ex mock tests and AI doubt solving.',
    actionItems: [
      'Custom branded Android & iOS apps on App Store / Play Store',
      'Live onboarding session for teachers & administrative staff',
      'Automated parent welcome WhatsApp & SMS with login credentials',
      'Dedicated 24/7 priority implementation engineer on standby'
    ],
    deliverables: 'Your entire school ecosystem running on EducaPilot effortlessly.',
    icon: 'Rocket'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Dr. Alok Vardhan',
    designation: 'Managing Director & Academic Dean',
    institution: 'Apex International Schools & NEET Academy',
    location: 'Bangalore & Hyderabad (8 Campuses)',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    quote: 'Replacing 4 disconnected software systems with EducaPilot was the best operational decision we made. Our fee defaults dropped to near zero, and our NEET top-1000 selections grew by 38% thanks to the Test-Ex analytics engine.',
    impactMetrics: '₹1.8 Cr Saved / Year • 38% NEET Score Gain',
    stars: 5
  },
  {
    id: 't2',
    name: 'Sister Margaret D\'Souza',
    designation: 'Principal',
    institution: 'St. Xavier\'s High School',
    location: 'Mumbai',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    quote: 'The Lite Steps onboarding is genuine. We uploaded our 3,200 student database on a Friday afternoon and by Monday morning, our teachers were taking attendance and parents were tracking buses in real-time.',
    impactMetrics: '100% Parent Adoption • 3-Day Go-Live',
    stars: 5
  },
  {
    id: 't3',
    name: 'Prof. Rajeshwar Sen',
    designation: 'Head of Competitive Examinations',
    institution: 'Kolkata Science & Tech Prep Institute',
    location: 'Kolkata',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    quote: 'The Test-Ex simulator mirrors the exact NTA exam interface. Our students experience zero exam panic because they have already taken 50+ proctored mocks with real-time time-per-question analytics.',
    impactMetrics: '4.9/5 Student Rating • 99.4% Exam Uptime',
    stars: 5
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'f1',
    category: 'General',
    question: 'How is EducaPilot different from other School ERP or LMS platforms?',
    answer: 'Traditional vendors provide fragmented, outdated software where the ERP cannot talk to the LMS, and competitive test prep is outsourced to third-party test engines. EducaPilot is the first unified operating system that combines School Administration (ERP), smart digital pedagogy (LMS), high-stakes competitive CBT testing (Test-Ex), and predictive student analytics under one unified interface with sub-second response times.'
  },
  {
    id: 'f2',
    category: 'Implementation',
    question: 'How quickly can our school transition to EducaPilot with the "Lite Steps" framework?',
    answer: 'Most institutions go live in 3 lightweight steps over 48 to 72 hours. Step 1: 1-click import of your existing student & fee Excel/CSV data. Step 2: Auto-syncing of curriculum and question banks. Step 3: Deployment of branded mobile apps for parents, teachers, and students. Zero technical downtime guaranteed.'
  },
  {
    id: 'f3',
    category: 'Test-Ex',
    question: 'What exam types does the Test-Ex engine support out of the box?',
    answer: 'Test-Ex comes pre-loaded with over 350,000+ curated questions with video solutions for NEET, JEE Main & Advanced, BITSAT, SAT, UPSC Prelims, NDA, Olympiads, and K-12 board exams (CBSE, ICSE, State Boards). You can also upload your own proprietary question bank in Word, PDF, or LaTeX with 1-click AI question parsing.'
  },
  {
    id: 'f4',
    category: 'School ERP',
    question: 'Can EducaPilot integrate with our existing Biometric machines and GPS hardware?',
    answer: 'Yes! EducaPilot is completely hardware-agnostic. We integrate with any standard TCP/IP or Wi-Fi biometric device (ZKTeco, Realtime, eSSL, Matrix) and any GPS tracker protocols used in school transport buses.'
  },
  {
    id: 'f5',
    category: 'LMS',
    question: 'Is there a mobile app for teachers, students, and parents?',
    answer: 'Yes, EducaPilot provides high-performance, native iOS and Android mobile apps, fully customized with your institution\'s logo and color theme. Push notifications, offline homework access, live fee payment, and GPS tracking are all supported.'
  },
  {
    id: 'f6',
    category: 'General',
    question: 'Is student data secure and compliant with data privacy regulations?',
    answer: 'Absolutely. All student and financial data is encrypted at rest (AES-256) and in transit (TLS 1.3). We are ISO 27001 certified, SOC-2 compliant, and fully adhere to global student privacy standards (FERPA, GDPR, and DPDP).'
  }
];
