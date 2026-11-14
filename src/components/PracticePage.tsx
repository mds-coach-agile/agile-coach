import React, { useEffect } from 'react';
import { ConflictLevelsSection } from './ConflictLevelsSection';
import { InteractiveQuizWidget } from './InteractiveQuizWidget';
import { PracticeSubView } from '../hooks/useHashRouter';
import {
  ArrowLeft,
  BookOpen,
  ShieldAlert,
  HelpCircle,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Flame,
  GraduationCap,
} from 'lucide-react';

interface PracticePageProps {
  subView?: PracticeSubView;
  initialAnchor?: string;
  onNavigateHome: () => void;
  onNavigateArticles: () => void;
  onNavigatePractice: (subView?: PracticeSubView | string) => void;
  onNavigateToArticle: (id: string, options?: { fromQuiz?: boolean; questionId?: string }) => void;
}

export const PracticePage: React.FC<PracticePageProps> = ({
  subView = 'hub',
  initialAnchor,
  onNavigateHome,
  onNavigateArticles,
  onNavigatePractice,
  onNavigateToArticle,
}) => {
  const currentSubView: PracticeSubView =
    subView !== 'hub'
      ? subView
      : initialAnchor === 'quiz'
      ? 'quiz'
      : initialAnchor === 'conflict'
      ? 'conflict'
      : 'hub';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentSubView]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Top Breadcrumbs / Sub-Header */}
      <nav aria-label="Practice navigation breadcrumbs" className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-600 truncate">
            <button
              onClick={onNavigateHome}
              className="hover:text-slate-900 transition-colors flex items-center gap-1 cursor-pointer shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <span className="text-slate-300">/</span>

            {currentSubView === 'hub' ? (
              <span className="text-slate-900 font-semibold truncate">Practice Hub</span>
            ) : (
              <>
                <button
                  onClick={() => onNavigatePractice('hub')}
                  className="hover:text-slate-900 transition-colors cursor-pointer shrink-0"
                >
                  Practice
                </button>
                <span className="text-slate-300">/</span>
                <span className="text-slate-900 font-semibold truncate">
                  {currentSubView === 'conflict' ? 'Conflict Simulator' : 'Knowledge Quiz'}
                </span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {currentSubView !== 'hub' && (
              <button
                onClick={() => onNavigatePractice('hub')}
                className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-2.5 py-1 rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
              >
                All Practice Tools
              </button>
            )}
            <button
              onClick={onNavigateArticles}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Browse Articles</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-6">
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                <span>
                  {currentSubView === 'conflict'
                    ? 'Dedicated Subpage · Scenario Simulator'
                    : currentSubView === 'quiz'
                    ? 'Dedicated Subpage · Assessment'
                    : 'Practice Hub & Tool Directory'}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {currentSubView === 'conflict'
                  ? 'Speed Leas Conflict Dynamics Simulator'
                  : currentSubView === 'quiz'
                  ? 'Agile Coaching Knowledge Quiz & Assessment'
                  : 'Agile Coaching Practice & Assessment Hub'}
              </h1>

              <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
                {currentSubView === 'conflict'
                  ? 'Experience real team conflicts across 5 escalation levels. Choose your coaching interventions and examine their consequences on team dynamics.'
                  : currentSubView === 'quiz'
                  ? 'Validate your understanding of role boundaries, 4 coaching stances, and conflict models with scenario-based questions and curriculum remediation.'
                  : 'Choose a dedicated interactive exercise below to move from theoretical knowledge to applied decision-making in a safe practice environment.'}
              </p>
            </div>

            {/* Subpage Switcher Pills */}
            <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-xl shrink-0 self-start md:self-center border border-slate-200/70">
              <button
                onClick={() => onNavigatePractice('hub')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  currentSubView === 'hub'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Hub Overview
              </button>
              <button
                onClick={() => onNavigatePractice('conflict')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  currentSubView === 'conflict'
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Conflict Simulator</span>
              </button>
              <button
                onClick={() => onNavigatePractice('quiz')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  currentSubView === 'quiz'
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Knowledge Quiz</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Subpage Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* SUBPAGE 1: HUB DIRECTORY */}
        {currentSubView === 'hub' && (
          <div className="space-y-8 mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Simulator Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between hover:border-indigo-300 transition-all shadow-xs group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
                    Subpage 01 · Interactive Simulator
                  </span>
                  <h2 className="text-xl font-bold text-slate-900 mt-1 mb-2">
                    Speed Leas Conflict Dynamics Simulator
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    Step into software engineering team scenarios. Diagnose conflict intensity across Speed Leas’s 5 levels (Problem to Solve $\to$ World War) and test your intervention instincts.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>5 realistic software engineering team scenarios</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Immediate escalation/de-escalation outcome feedback</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Coaching takeaways & reflection questions</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">Dedicated Full Page</span>
                  <button
                    onClick={() => onNavigatePractice('conflict')}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer shadow-2xs"
                  >
                    <span>Open Conflict Simulator</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Quiz Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between hover:border-indigo-300 transition-all shadow-xs group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
                    Subpage 02 · Assessment Test
                  </span>
                  <h2 className="text-xl font-bold text-slate-900 mt-1 mb-2">
                    Agile Coaching Knowledge Quiz
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    Validate your theoretical grasp of role boundaries (Coach vs SM vs PM), Lyssa Adkins’ 4 coaching stances, and conflict resolution tactics with immediate rationale feedback.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Topic filtering: Roles, Stances, and Conflict</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Clear explanations for right & wrong choices</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Direct 1-click remediation linking to core articles</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">Self-Paced Assessment</span>
                  <button
                    onClick={() => onNavigatePractice('quiz')}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer shadow-sm"
                  >
                    <span>Open Knowledge Quiz</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Back to theory banner */}
            <div className="p-5 bg-white border border-slate-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-indigo-600 shrink-0" />
                <span>
                  Need to review foundational concepts before testing? Read our 4 academic curriculum modules.
                </span>
              </div>
              <button
                onClick={onNavigateArticles}
                className="inline-flex items-center gap-1.5 font-semibold text-indigo-600 hover:text-indigo-700 whitespace-nowrap cursor-pointer"
              >
                <span>Read Articles</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* SUBPAGE 2: DEDICATED CONFLICT SIMULATOR */}
        {currentSubView === 'conflict' && (
          <div className="space-y-8">
            <ConflictLevelsSection />

            {/* Bottom Subpage Transition Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-0.5">
                  Next Exercise
                </div>
                <div className="text-sm font-bold text-slate-900">
                  Ready to test your knowledge with the Agile Coach Quiz?
                </div>
                <div className="text-xs text-slate-500">
                  Answer 5 scenario questions on role boundaries, stances, and facilitation.
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => onNavigatePractice('hub')}
                  className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                >
                  Practice Hub
                </button>
                <button
                  onClick={() => onNavigatePractice('quiz')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer shadow-sm"
                >
                  <span>Open Knowledge Quiz</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* SUBPAGE 3: DEDICATED KNOWLEDGE QUIZ */}
        {currentSubView === 'quiz' && (
          <div className="space-y-8">
            <InteractiveQuizWidget onNavigateToArticle={onNavigateToArticle} />

            {/* Bottom Subpage Transition Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-0.5">
                  Complementary Exercise
                </div>
                <div className="text-sm font-bold text-slate-900">
                  Want to practice resolving realistic team conflicts?
                </div>
                <div className="text-xs text-slate-500">
                  Diagnose 5 escalation levels and test coach intervention outcomes.
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => onNavigatePractice('hub')}
                  className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                >
                  Practice Hub
                </button>
                <button
                  onClick={() => onNavigatePractice('conflict')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer shadow-2xs"
                >
                  <span>Open Conflict Simulator</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
