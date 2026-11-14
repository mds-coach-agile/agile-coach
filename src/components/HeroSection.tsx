import React from 'react';
import { ArrowDown, HelpCircle, CheckCircle2, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onNavigatePractice?: (anchor?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigatePractice }) => {
  return (
    <section className="relative pt-16 pb-14 border-b border-slate-200/80 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle, unboxed metadata */}
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-4 tracking-wide uppercase">
          <span>Agile Coaching Foundations</span>
          <span aria-hidden="true">·</span>
          <span>Educational Curriculum</span>
          <span aria-hidden="true">·</span>
          <span>Interactive Practice</span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 text-balance leading-tight max-w-3xl">
          What does an Agile Coach really do?
        </h1>

        {/* Succinct description */}
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
          Move beyond abstract jargon. Understand how an Agile Coach differs from a Scrum Master and
          Project Manager, explore the four coaching stances, and practise real team scenarios with
          instant explanatory feedback.
        </p>

        {/* 3-Step Guided Learning Path */}
        <div className="mt-8 p-4 sm:p-5 bg-slate-50 border border-slate-200/90 rounded-2xl max-w-3xl">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Recommended 3-Step Learning Path
            </span>
            <span className="text-[11px] text-indigo-600 font-semibold hidden sm:inline">
              Self-paced · Interactive
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <a
              href="#overview"
              className="flex items-start gap-3 p-3 bg-white hover:bg-indigo-50/50 rounded-xl border border-slate-200/80 hover:border-indigo-300 transition-all group"
            >
              <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold font-mono flex items-center justify-center shrink-0 text-xs group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                1
              </span>
              <div>
                <div className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  Core Modules
                </div>
                <div className="text-slate-500 mt-0.5 leading-snug">
                  4 foundational articles with academic sources
                </div>
              </div>
            </a>

            <a
              href="#roles"
              className="flex items-start gap-3 p-3 bg-white hover:bg-indigo-50/50 rounded-xl border border-slate-200/80 hover:border-indigo-300 transition-all group"
            >
              <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold font-mono flex items-center justify-center shrink-0 text-xs group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                2
              </span>
              <div>
                <div className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  Frameworks
                </div>
                <div className="text-slate-500 mt-0.5 leading-snug">
                  Role matrix & 4 coaching stances
                </div>
              </div>
            </a>

            <a
              href="#practice"
              className="flex items-start gap-3 p-3 bg-white hover:bg-indigo-50/50 rounded-xl border border-slate-200/80 hover:border-indigo-300 transition-all group"
            >
              <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold font-mono flex items-center justify-center shrink-0 text-xs group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                3
              </span>
              <div>
                <div className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  Simulator & Quiz
                </div>
                <div className="text-slate-500 mt-0.5 leading-snug">
                  Speed Leas conflict scenarios & 5-question test
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Action controls */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#overview"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shadow-sm whitespace-nowrap"
          >
            <span>Start Learning (Modules 01–04)</span>
            <ArrowDown className="w-4 h-4 opacity-80" />
          </a>
          <a
            href="#roles"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
          >
            <span>Role Matrix</span>
          </a>
          <button
            onClick={() => (onNavigatePractice ? onNavigatePractice() : (window.location.hash = '#/practice'))}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            <span>Practice & Quiz</span>
            <Sparkles className="w-4 h-4 text-indigo-600" />
          </button>
        </div>

        {/* Quantitative Metrics Strip with Tabular Numerals */}
        <div className="mt-14 pt-8 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
          <div>
            <div className="text-2xl font-bold text-slate-900 font-mono tabular-nums">03</div>
            <div className="text-xs text-slate-500 mt-1 font-medium">Distinct Leadership Roles</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900 font-mono tabular-nums">04</div>
            <div className="text-xs text-slate-500 mt-1 font-medium">Coaching Stances</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900 font-mono tabular-nums">05</div>
            <div className="text-xs text-slate-500 mt-1 font-medium">Conflict Escalation Levels</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-emerald-600 font-mono tabular-nums">100%</div>
            <div className="text-xs text-slate-500 mt-1 font-medium">Scenario-Based Practice</div>
          </div>
        </div>
      </div>
    </section>
  );
};
