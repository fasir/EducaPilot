export type PillarType = 'erp' | 'lms' | 'testex' | 'analytics';

export type UserRole = 'principal' | 'teacher' | 'student' | 'parent';

export interface ErpFeature {
  id: string;
  title: string;
  category: 'Administration' | 'Finance' | 'Academics' | 'Logistics' | 'Safety';
  description: string;
  badge: string;
  icon: string;
  statHighlight: {
    value: string;
    label: string;
  };
  keyPoints: string[];
}

export interface LmsFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge: string;
  interactivePreviewType: 'video' | 'quiz' | 'ai_assistant' | 'assignment';
  metrics: string;
}

export interface Question {
  id: number;
  subject: 'Physics' | 'Chemistry' | 'Mathematics' | 'Biology' | 'General Aptitude';
  examType: 'NEET' | 'JEE Main' | 'SAT' | 'UPSC';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  conceptTag: string;
  avgTimeSeconds: number;
}

export interface TestExExam {
  id: string;
  title: string;
  category: string;
  totalQuestions: number;
  durationMinutes: number;
  negativeMarking: string;
  questions: Question[];
}

export interface StudentAnalyticsProfile {
  name: string;
  avatar?: string;
  rollNo: string;
  grade: string;
  targetExam: string;
  predictedRank: string;
  overallScorePercentile: number;
  attendanceRate: number;
  retentionRiskScore: 'Low Risk' | 'Moderate' | 'Critical Attention';
  subjectMastery: {
    subject: string;
    score: number;
    benchmarkAvg: number;
    trend: 'up' | 'down' | 'stable';
    color: string;
  }[];
  weakTopics: {
    topic: string;
    subject: string;
    errorRate: number;
    recommendedAction: string;
  }[];
  timeEfficiency: {
    avgTimePerQuestion: string;
    accuracyUnderPressure: string;
    rushMistakes: string;
  };
}

export interface LiteStep {
  step: number;
  title: string;
  badge: string;
  timeline: string;
  headline: string;
  description: string;
  actionItems: string[];
  deliverables: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  institution: string;
  location: string;
  image: string;
  quote: string;
  impactMetrics: string;
  stars: number;
}

export interface FaqItem {
  id: string;
  category: 'General' | 'School ERP' | 'LMS' | 'Test-Ex' | 'Implementation';
  question: string;
  answer: string;
}

export interface RoiCalculatorState {
  studentCount: number;
  teacherCount: number;
  branchCount: number;
  examFrequencyPerYear: number;
}
