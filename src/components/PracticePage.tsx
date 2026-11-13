import React, { useState, useEffect } from 'react';
import { ConflictLevelsSection } from './ConflictLevelsSection';
import { InteractiveQuizWidget } from './InteractiveQuizWidget';
import { ArrowLeft, BookOpen, ShieldAlert, HelpCircle, Layers } from 'lucide-react';

interface PracticePageProps {
  initialAnchor?: string;
  onNavigateHome: () => void;
  onNavigateArticles: () => void;
  onNavigateToArticle: (id: string, options?: { fromQuiz?: boolean; questionId?: string }) => void;
}

export const PracticePage: React.FC<PracticePageProps> = ({
  initialAnchor,
  onNavigateHome,
  onNavigateArticles,
  onNavigateToArticle,
}) => {
  const [activeTab, setActiveTab] = useState<'conflict' | 'quiz' | 'all'>(() => {
    if (initialAnchor === 'quiz') return 'quiz';
    if (initialAnchor === 'conflict') return 'conflict';
    return 'all';
  });

  useEffect(() => {
    if (initialAnchor === 'quiz') {
      setActiveTab('quiz');
    } else if (initialAnchor === 'conflict') {
      setActiveTab('conflict');
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [initialAnchor]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Top Breadcrumbs / Sub-Header */}
      <nav aria-label="Practice navigation" className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
            <button
              onClick={onNavigateHome}
              className="hover:text-slate-900 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Hub</span>
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 font-semibold">Practice & Assessment</span>
          </div>

          <button
            onClick={onNavigateArticles}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Browse Articles</span>
          </button>
        </div>
      </nav>

      {/* Page Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-8">
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-1">
                Interactive Practice Environment
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Agile Coaching Practice & Assessment
              </h1>
              <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
                Test your skills in safe, simulated team environments. Diagnose conflict dynamics with Speed Leas’s 5 levels, or validate your core agile coaching knowledge with our comprehensive quiz.
              </p>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl shrink-0 self-start md:self-center border border-slate-200/70">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'all'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>All Tools</span>
              </button>
              <button
                onClick={() => setActiveTab('conflict')}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'conflict'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Conflict Simulator</span>
              </button>
              <button
                onClick={() => setActiveTab('quiz')}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'quiz'
                    ? 'bg-white text-slate-900 shadow-xs'
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

      {/* Active Tool Content */}
      <div className="space-y-12">
        {(activeTab === 'conflict' || activeTab === 'all') && (
          <div>
            <ConflictLevelsSection />
          </div>
        )}

        {(activeTab === 'quiz' || activeTab === 'all') && (
          <div>
            <InteractiveQuizWidget onNavigateToArticle={onNavigateToArticle} />
          </div>
        )}
      </div>
    </div>
  );
};
