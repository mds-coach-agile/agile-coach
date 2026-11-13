import React, { useState } from 'react';
import { ROLES_DATA, ROLE_SCENARIOS } from '../data/agileCoachData';
import { ArrowRight } from 'lucide-react';

export const RoleComparisonSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'matrix' | 'scenarios'>('matrix');
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(ROLE_SCENARIOS[0].id);

  const currentScenario = ROLE_SCENARIOS.find((s) => s.id === selectedScenarioId) || ROLE_SCENARIOS[0];

  return (
    <section id="roles" className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-1">
              Role Demarcation
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Agile Coach vs Scrum Master vs Manager
            </h2>
          </div>

          {/* Interactive view toggle */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg shrink-0 self-start sm:self-auto">
            <button
              onClick={() => setActiveTab('matrix')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'matrix'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Side-by-Side Matrix
            </button>
            <button
              onClick={() => setActiveTab('scenarios')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'scenarios'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Real-World Scenarios
            </button>
          </div>
        </div>

        {/* Tab 1: Side-by-Side Comparative Matrix */}
        {activeTab === 'matrix' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ROLES_DATA.map((role) => {
              const isCoach = role.id === 'agile-coach';
              return (
                <div
                  key={role.id}
                  className={`rounded-xl p-6 flex flex-col justify-between border transition-all ${
                    isCoach
                      ? 'border-indigo-300 bg-indigo-50/20 shadow-xs ring-1 ring-indigo-200/50'
                      : 'border-slate-200 bg-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-slate-900">{role.title}</h3>
                      {isCoach && (
                        <span className="text-[11px] font-semibold text-indigo-600 bg-indigo-100/70 px-2 py-0.5 rounded-sm">
                          Core Focus
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mb-6 font-medium leading-relaxed">
                      {role.tagline}
                    </p>

                    <div className="space-y-4 text-xs">
                      <div>
                        <div className="text-slate-400 font-medium mb-1">Operational Scope</div>
                        <div className="text-slate-800 font-medium">{role.scope}</div>
                      </div>

                      <div>
                        <div className="text-slate-400 font-medium mb-1">Authority Style</div>
                        <div className="text-slate-700 leading-relaxed">{role.authorityStyle}</div>
                      </div>

                      <div>
                        <div className="text-slate-400 font-medium mb-1">Primary Objective</div>
                        <div className="text-slate-700 leading-relaxed">{role.primaryFocus}</div>
                      </div>

                      <div>
                        <div className="text-slate-400 font-medium mb-1">Conflict Approach</div>
                        <div className="text-slate-700 leading-relaxed">{role.conflictResponse}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <div className="text-[11px] text-slate-400 font-medium mb-1">Guiding Question</div>
                    <div className="text-xs italic text-slate-800 font-serif leading-relaxed">
                      "{role.keyQuestion}"
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Interactive Scenario Solver */}
        {activeTab === 'scenarios' && (
          <div className="space-y-6">
            {/* Scenario Selector Pills */}
            <div className="flex flex-wrap gap-2">
              {ROLE_SCENARIOS.map((scenario) => (
                <button
                  key={scenario.id}
                  onClick={() => setSelectedScenarioId(scenario.id)}
                  className={`text-left px-3.5 py-2 rounded-lg text-xs font-medium transition-colors border ${
                    selectedScenarioId === scenario.id
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-900 font-semibold shadow-2xs'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                  }`}
                >
                  {scenario.situation}
                </button>
              ))}
            </div>

            {/* Scenario Detail Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <div className="mb-6">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Team Challenge
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {currentScenario.situation}
                </h3>
                <p className="text-sm text-slate-600 max-w-2xl">
                  {currentScenario.context}
                </p>
              </div>

              {/* 3 responses side by side */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-white rounded-lg p-5 border border-indigo-200 shadow-2xs">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                    <span className="text-xs font-bold text-slate-900">Agile Coach Action</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {currentScenario.agileCoachAction}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-5 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                    <span className="text-xs font-bold text-slate-900">Scrum Master Action</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {currentScenario.scrumMasterAction}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-5 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                    <span className="text-xs font-bold text-slate-900">Project Manager Action</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {currentScenario.projectManagerAction}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step transition guide */}
        <div className="mt-10 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>Understood the role boundaries and accountabilities?</span>
          <a
            href="#stances"
            className="inline-flex items-center gap-1.5 font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            <span>Next: Explore the 4 Coaching Stances Framework</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
