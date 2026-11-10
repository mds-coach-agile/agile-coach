import React from 'react';
import { ArrowDown, HelpCircle, CheckCircle2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="overview" className="relative pt-16 pb-14 border-b border-slate-200/80 bg-white">
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

        {/* Action controls */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#quiz"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shadow-sm whitespace-nowrap"
          >
            <span>Take Knowledge Check</span>
            <HelpCircle className="w-4 h-4 opacity-80" />
          </a>
          <a
            href="#roles"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
          >
            <span>Compare Roles</span>
            <ArrowDown className="w-4 h-4 text-slate-500" />
          </a>
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
