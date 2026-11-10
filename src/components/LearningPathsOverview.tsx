import React from 'react';
import { LEARNING_MODULES } from '../data/agileCoachData';
import { BookOpen, Check } from 'lucide-react';

export const LearningPathsOverview: React.FC = () => {
  return (
    <section className="py-14 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-1">
              Curriculum Roadmap
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Core Learning Modules
            </h2>
          </div>
          <p className="text-xs text-slate-500 max-w-sm sm:text-right">
            Designed for students and practitioners moving from textbook theory to actionable team coaching.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {LEARNING_MODULES.map((module) => (
            <div
              key={module.id}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-slate-300 transition-colors shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-mono">
                  <span className="font-semibold text-slate-900">{module.number}.</span>
                  <span>{module.readTime}</span>
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-1">
                  {module.title}
                </h3>
                <div className="text-xs text-indigo-600 font-medium mb-3">
                  {module.subtitle}
                </div>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {module.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="text-xs font-medium text-slate-700 mb-2">Key concepts:</div>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {module.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold shrink-0">·</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
