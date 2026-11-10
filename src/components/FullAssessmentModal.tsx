import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { X, CheckCircle2, Clock, BookOpen, ArrowRight, ShieldCheck } from 'lucide-react';

export const FullAssessmentModal: React.FC = () => {
  const { isFullAssessmentModalOpen, setFullAssessmentModalOpen, score, answeredCount } = useQuiz();

  if (!isFullAssessmentModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-xl w-full border border-slate-200 shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between gap-4">
          <div>
            <div className="text-xs font-semibold tracking-wider text-indigo-600 uppercase mb-1">
              Upcoming Release Module
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Full Agile Coach Certification Check
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Part of Sprint 2: Comprehensive 20-scenario assessment with personalized coaching gap analysis.
            </p>
          </div>
          <button
            onClick={() => setFullAssessmentModalOpen(false)}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body content */}
        <div className="p-6 space-y-6 text-sm">
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div className="text-lg font-bold text-slate-900 font-mono">20</div>
              <div className="text-[11px] text-slate-500 font-medium">Scenarios</div>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div className="text-lg font-bold text-slate-900 font-mono">15m</div>
              <div className="text-[11px] text-slate-500 font-medium">Est. Time</div>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div className="text-lg font-bold text-emerald-600 font-mono">80%</div>
              <div className="text-[11px] text-slate-500 font-medium">Pass Target</div>
            </div>
          </div>

          {/* Module Breakdown */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Assessment Domain Breakdown
            </h4>
            <div className="space-y-2.5 text-xs text-slate-700">
              <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                <span className="font-medium text-slate-900">01. Role Boundaries & Authority</span>
                <span className="text-slate-500 font-mono">5 Questions</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                <span className="font-medium text-slate-900">02. Lyssa Adkins 4 Stances</span>
                <span className="text-slate-500 font-mono">6 Questions</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                <span className="font-medium text-slate-900">03. Speed Leas 5 Levels of Conflict</span>
                <span className="text-slate-500 font-mono">5 Questions</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                <span className="font-medium text-slate-900">04. Continuous Improvement & Flow</span>
                <span className="text-slate-500 font-mono">4 Questions</span>
              </div>
            </div>
          </div>

          {/* Current Progress Callout */}
          <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100 text-xs">
            <div className="font-semibold text-indigo-950 mb-1">
              Your Current Practice Session
            </div>
            <p className="text-indigo-800 leading-relaxed">
              You have completed {answeredCount} mini-practice scenarios with a current score of{' '}
              <strong className="font-bold">{score}</strong>. All progress will sync automatically into your final score report.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3">
          <button
            onClick={() => setFullAssessmentModalOpen(false)}
            className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-lg transition-colors"
          >
            Back to Hub
          </button>
          <button
            onClick={() => {
              setFullAssessmentModalOpen(false);
              const quizEl = document.getElementById('quiz');
              quizEl?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-2xs"
          >
            <span>Continue Practice</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
