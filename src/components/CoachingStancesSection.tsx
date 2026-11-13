import React, { useState } from 'react';
import { COACHING_STANCES_DATA } from '../data/agileCoachData';
import { StanceType } from '../types';
import { AlertTriangle, ArrowRight } from 'lucide-react';

export const CoachingStancesSection: React.FC = () => {
  const [activeStanceId, setActiveStanceId] = useState<StanceType>('coach');

  const currentStance =
    COACHING_STANCES_DATA.find((s) => s.id === activeStanceId) || COACHING_STANCES_DATA[3];

  return (
    <section id="stances" className="py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-1">
            Framework: Lyssa Adkins
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            The 4 Coaching Stances
          </h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            An Agile Coach shifts fluidly between four distinct postures depending on the team’s
            maturity and immediate need.
          </p>
        </div>

        {/* 4 Stance Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
          {COACHING_STANCES_DATA.map((stance) => {
            const isSelected = stance.id === activeStanceId;
            return (
              <button
                key={stance.id}
                onClick={() => setActiveStanceId(stance.id)}
                className={`p-4 rounded-xl text-left border transition-all ${
                  isSelected
                    ? 'bg-white border-indigo-600 shadow-xs ring-1 ring-indigo-500/30'
                    : 'bg-white/60 border-slate-200 hover:bg-white text-slate-700'
                }`}
              >
                <div
                  className={`text-sm font-bold mb-1 ${
                    isSelected ? 'text-indigo-600' : 'text-slate-900'
                  }`}
                >
                  {stance.title}
                </div>
                <div className="text-xs text-slate-500 line-clamp-1">{stance.subtitle}</div>
              </button>
            );
          })}
        </div>

        {/* Active Stance Detailed Display Card */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-semibold tracking-wider text-indigo-600 uppercase">
                Active Stance
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                The {currentStance.title} Stance
              </h3>
            </div>
            <div className="text-xs text-slate-500 font-medium">
              Posture: <span className="text-slate-800">{currentStance.stancePosture}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
            {/* Left Column: Definition & When to use */}
            <div className="space-y-5">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Definition & Purpose
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {currentStance.definition}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  When to Step Into This Stance
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {currentStance.idealSituation}
                </p>
              </div>

              <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-lg">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 mb-1">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                  <span>The Anti-Pattern Trap</span>
                </div>
                <p className="text-xs text-amber-800 leading-relaxed">
                  {currentStance.antiPatternTrap}
                </p>
              </div>
            </div>

            {/* Right Column: Powerful Questions & Example */}
            <div className="space-y-5">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Sample Powerful Questions
                </h4>
                <div className="space-y-2">
                  {currentStance.powerfulQuestions.map((q, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-slate-50 border border-slate-200/80 rounded-lg text-xs text-slate-800 italic font-serif leading-relaxed"
                    >
                      "{q}"
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Applied Example in Team Life
                </h4>
                <div className="text-xs text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100 leading-relaxed">
                  {currentStance.realWorldExample}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step transition guide */}
        <div className="mt-10 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>Ready to diagnose team conflicts using Speed Leas's framework?</span>
          <a
            href="#conflict"
            className="inline-flex items-center gap-1.5 font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            <span>Next: Speed Leas Conflict Simulator</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
