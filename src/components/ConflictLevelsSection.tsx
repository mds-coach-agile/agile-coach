import React, { useState } from 'react';
import { CONFLICT_LEVELS_DATA } from '../data/agileCoachData';
import { Shield, Flame, Activity } from 'lucide-react';

export const ConflictLevelsSection: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<number>(2);

  const currentLevelData =
    CONFLICT_LEVELS_DATA.find((c) => c.level === selectedLevel) || CONFLICT_LEVELS_DATA[1];

  return (
    <section id="conflict" className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-1">
            Framework: Speed Leas
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            5 Levels of Team Conflict
          </h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Effective coaching requires diagnosing the emotional temperature of a conflict before
            attempting resolution. Misdiagnosing a Level 3 contest as a Level 1 technical problem
            worsens dysfunction.
          </p>
        </div>

        {/* 5-Step Escalation Bar */}
        <div className="grid grid-cols-5 gap-1.5 sm:gap-2 mb-6">
          {CONFLICT_LEVELS_DATA.map((item) => {
            const isSelected = item.level === selectedLevel;
            return (
              <button
                key={item.level}
                onClick={() => setSelectedLevel(item.level)}
                className={`p-3 sm:p-4 rounded-xl text-center border transition-all ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <div className="text-xs font-mono font-semibold opacity-70">Lvl {item.level}</div>
                <div className="text-xs sm:text-sm font-bold truncate mt-0.5">{item.name}</div>
              </button>
            );
          })}
        </div>

        {/* Active Conflict Level Details */}
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-5 border-b border-slate-200">
            <div>
              <span className="text-xs font-mono font-semibold text-slate-500 uppercase">
                Escalation Tier {currentLevelData.level} of 5
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                Level {currentLevelData.level}: {currentLevelData.name}
              </h3>
            </div>
            <div className="text-xs text-slate-500 font-medium">
              Objective: <span className="text-slate-800">Appropriate Coach Intervention</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Symptom & Dynamics
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                {currentLevelData.description}
              </p>
            </div>

            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Typical Language Used
              </div>
              <div className="p-3 bg-white border border-slate-200/80 rounded-lg text-xs italic text-slate-800 font-serif leading-relaxed">
                {currentLevelData.typicalLanguage}
              </div>
            </div>

            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Recommended Coach Action
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                {currentLevelData.coachResponse}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
