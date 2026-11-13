import React from 'react';
import { ShieldAlert, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';

interface PracticeGatewaySectionProps {
  onNavigatePractice?: (targetAnchor?: string) => void;
}

export const PracticeGatewaySection: React.FC<PracticeGatewaySectionProps> = ({
  onNavigatePractice,
}) => {
  const handleLaunch = (target: string) => {
    if (onNavigatePractice) {
      onNavigatePractice(target);
    } else {
      window.location.hash = `#/practice#${target}`;
    }
  };

  return (
    <section id="practice" className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Interactive Practice & Assessment Hub</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Put Your Knowledge into Practice
          </h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Move from theory to practical application. Experience realistic team conflicts and validate your agile coaching competence in a dedicated practice environment.
          </p>
        </div>

        {/* 2 Dedicated Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Conflict Simulator */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-indigo-300 transition-all shadow-2xs group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
                Speed Leas Framework
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">
                Conflict Dynamics Simulator
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Diagnose 5 escalation levels in real-world software teams. Choose coaching interventions and analyze whether team conflict de-escalates or intensifies.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">5 Realistic Scenarios</span>
              <button
                onClick={() => handleLaunch('conflict')}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer shadow-2xs"
              >
                <span>Launch Simulator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Knowledge Assessment Quiz */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-indigo-300 transition-all shadow-2xs group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <HelpCircle className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
                Knowledge Check
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">
                Agile Coach Assessment Quiz
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Test your mastery of role boundaries, coaching stances, and conflict models with interactive questions, instant rationales, and article remediation.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">Self-Paced Assessment</span>
              <button
                onClick={() => handleLaunch('quiz')}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer shadow-sm"
              >
                <span>Take Knowledge Quiz</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
