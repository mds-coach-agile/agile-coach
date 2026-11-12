import React, { useState } from 'react';
import { CONFLICT_LEVELS_DATA, CONFLICT_SCENARIOS_DATA } from '../data/agileCoachData';
import {
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  AlertCircle,
  ArrowRight,
  RotateCcw,
  BookOpen,
} from 'lucide-react';

export const ConflictLevelsSection: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<number>(2);
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(
    CONFLICT_SCENARIOS_DATA[0].id
  );
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const currentLevelData =
    CONFLICT_LEVELS_DATA.find((c) => c.level === selectedLevel) || CONFLICT_LEVELS_DATA[1];

  const currentScenario =
    CONFLICT_SCENARIOS_DATA.find((s) => s.id === selectedScenarioId) ||
    CONFLICT_SCENARIOS_DATA[0];

  const selectedOption = currentScenario.options.find((opt) => opt.id === selectedOptionId);

  const handleScenarioChange = (scenarioId: string) => {
    setSelectedScenarioId(scenarioId);
    setSelectedOptionId(null);
  };

  const handleNextScenario = () => {
    const currentIndex = CONFLICT_SCENARIOS_DATA.findIndex((s) => s.id === selectedScenarioId);
    const nextIndex = (currentIndex + 1) % CONFLICT_SCENARIOS_DATA.length;
    setSelectedScenarioId(CONFLICT_SCENARIOS_DATA[nextIndex].id);
    setSelectedOptionId(null);
  };

  return (
    <section id="conflict" className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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

        {/* ========================================================================= */}
        {/* US-04: Realistic Team Scenario Practice & Simulator                       */}
        {/* ========================================================================= */}
        <div className="mt-12 pt-10 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                US-04 Scenario Simulator
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                Realistic Team Scenario: Conflict Resolution
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                Practice diagnosing interpersonal tensions and applying appropriate Agile Coach
                responses. Select a scenario, choose an intervention, and observe how team dynamics
                evolve.
              </p>
            </div>
          </div>

          {/* Scenario Selector Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {CONFLICT_SCENARIOS_DATA.map((scenario) => {
              const isActive = scenario.id === selectedScenarioId;
              return (
                <button
                  key={scenario.id}
                  onClick={() => handleScenarioChange(scenario.id)}
                  className={`text-left px-3.5 py-2 rounded-lg text-xs font-medium transition-all border ${
                    isActive
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-900 font-semibold shadow-2xs'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <span className="opacity-70 mr-1.5">Tier {scenario.initialLevel}:</span>
                  {scenario.title}
                </button>
              );
            })}
          </div>

          {/* Active Scenario Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8">
            {/* Scenario Header with Badges */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-200 mb-5">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-slate-900 text-white font-mono">
                  Level {currentScenario.initialLevel} · {currentScenario.levelName}
                </span>
                <span className="text-xs font-medium text-slate-500 bg-slate-200/80 px-2 py-0.5 rounded">
                  {currentScenario.tag}
                </span>
              </div>
              <div className="text-xs text-slate-500">
                Scenario {CONFLICT_SCENARIOS_DATA.findIndex((s) => s.id === selectedScenarioId) + 1} of{' '}
                {CONFLICT_SCENARIOS_DATA.length}
              </div>
            </div>

            {/* Situation & Context */}
            <div className="mb-6">
              <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                {currentScenario.situation}
              </h4>
              <div className="p-4 bg-white border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-700 font-serif italic leading-relaxed">
                "{currentScenario.context}"
              </div>
            </div>

            {/* Challenge Question */}
            <div className="mb-4">
              <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">
                Your Coaching Decision
              </div>
              <p className="text-sm font-semibold text-slate-900">
                {currentScenario.coachChallenge}
              </p>
            </div>

            {/* Options List */}
            <div className="space-y-3 mb-6">
              {currentScenario.options.map((option, idx) => {
                const isSelected = option.id === selectedOptionId;
                let optionStyle =
                  'bg-white border-slate-200 text-slate-800 hover:border-indigo-300 hover:bg-slate-50/80';

                if (selectedOptionId) {
                  if (isSelected) {
                    if (option.isOptimal) {
                      optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-medium ring-1 ring-emerald-400';
                    } else if (option.escalationOutcome === 'escalated') {
                      optionStyle = 'bg-rose-50 border-rose-400 text-rose-950 font-medium ring-1 ring-rose-300';
                    } else {
                      optionStyle = 'bg-amber-50 border-amber-400 text-amber-950 font-medium ring-1 ring-amber-300';
                    }
                  } else {
                    optionStyle = 'bg-white border-slate-200 text-slate-500 opacity-60';
                  }
                }

                return (
                  <button
                    key={option.id}
                    onClick={() => setSelectedOptionId(option.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all text-xs sm:text-sm flex items-start gap-3.5 ${optionStyle}`}
                  >
                    <span
                      className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-mono font-bold shrink-0 mt-0.5 ${
                        isSelected
                          ? option.isOptimal
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-700 text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-relaxed flex-1">{option.actionText}</span>
                  </button>
                );
              })}
            </div>

            {/* Outcome & Explanation Reveal */}
            {selectedOption && (
              <div
                className={`p-5 sm:p-6 rounded-xl border transition-all animate-fadeIn ${
                  selectedOption.isOptimal
                    ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950'
                    : selectedOption.escalationOutcome === 'escalated'
                    ? 'bg-rose-50/90 border-rose-300 text-rose-950'
                    : 'bg-amber-50/90 border-amber-300 text-amber-950'
                }`}
              >
                {/* Outcome Badge & Title */}
                <div className="flex items-center gap-2 mb-2">
                  {selectedOption.isOptimal ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  ) : selectedOption.escalationOutcome === 'escalated' ? (
                    <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
                  )}
                  <div className="font-bold text-sm sm:text-base">
                    {selectedOption.feedbackTitle}
                  </div>
                </div>

                {/* Explanation */}
                <p className="text-xs sm:text-sm leading-relaxed mb-4 text-slate-800">
                  {selectedOption.explanation}
                </p>

                {/* Coaching Takeaway */}
                <div className="p-3.5 bg-white/90 border border-slate-200/80 rounded-lg mb-5 text-xs text-slate-800 leading-relaxed">
                  <span className="font-bold text-slate-900 block mb-0.5">
                    Coaching Takeaway:
                  </span>
                  {selectedOption.coachingTakeaway}
                </div>

                {/* Action Controls */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200/80">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedOptionId(null)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Try Another Response
                    </button>
                    <button
                      onClick={handleNextScenario}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                    >
                      Next Scenario
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      window.location.hash = '#/articles/conflict-dynamics';
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800 hover:underline"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Study Module 04: Conflict & Team Facilitation
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
