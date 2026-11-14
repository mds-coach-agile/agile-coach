import React from 'react';
import { ARTICLES_DATA } from '../data/articlesData';
import { useProgress } from '../context/ProgressContext';
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Clock,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Award,
} from 'lucide-react';

interface ArticlesCatalogProps {
  onNavigateHome: () => void;
  onNavigateToArticle: (id: string) => void;
  onReturnToQuiz: () => void;
}

export const ArticlesCatalog: React.FC<ArticlesCatalogProps> = ({
  onNavigateHome,
  onNavigateToArticle,
  onReturnToQuiz,
}) => {
  const {
    isArticleCompleted,
    toggleArticleCompleted,
    resetProgress,
    completedCount,
    totalArticlesCount,
    progressPercentage,
  } = useProgress();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Top Navigation */}
      <nav aria-label="Navigation" className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <button
            onClick={onNavigateHome}
            className="hover:text-slate-900 transition-colors flex items-center gap-1.5 text-xs font-semibold text-slate-600 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Hub</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-slate-500 hidden sm:inline">
              Completed: <strong className="text-slate-900">{completedCount}</strong> of {totalArticlesCount}
            </span>
            <button
              onClick={onReturnToQuiz}
              className="px-3.5 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Practice Quiz
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10">
        {/* Header with Progress Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 mb-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-1">
                Curriculum Modules
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Agile Coach Learning Articles
              </h1>
              <p className="text-sm text-slate-600 mt-1 max-w-xl">
                4 foundational modules on Agile Coach identity, role boundaries, coaching stances, and conflict facilitation.
              </p>
            </div>

            {/* Progress Card */}
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 min-w-[240px]">
              <div className="flex items-center justify-between text-xs font-medium text-slate-600 mb-2">
                <span>Overall Progress:</span>
                <span className="font-bold font-mono text-indigo-600">{progressPercentage}%</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mb-2">
                <div
                  className="bg-indigo-600 h-full rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-500">
                <span>{completedCount} of {totalArticlesCount} completed</span>
                {completedCount > 0 && (
                  <button
                    onClick={resetProgress}
                    className="text-slate-400 hover:text-rose-600 transition-colors flex items-center gap-1 cursor-pointer"
                    title="Reset progress"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ARTICLES_DATA.map((article) => {
            const isCompleted = isArticleCompleted(article.id);
            return (
              <div
                key={article.id}
                className={`bg-white rounded-2xl border transition-all p-6 sm:p-7 flex flex-col justify-between shadow-xs ${
                  isCompleted
                    ? 'border-emerald-200 ring-1 ring-emerald-500/10'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="px-2.5 py-1 bg-slate-100 font-mono font-bold text-slate-900 rounded-md">
                      Module {article.module}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {article.readingTime}
                      </span>
                      {isCompleted && (
                        <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          Completed
                        </span>
                      )}
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 mb-1 leading-snug">
                    {article.title}
                  </h2>
                  <div className="text-xs font-medium text-indigo-600 mb-3">
                    {article.subtitle}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {article.summary}
                  </p>

                  <div className="pt-4 border-t border-slate-100 mb-6">
                    <div className="text-xs font-semibold text-slate-700 mb-2">Key Concepts:</div>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {article.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-emerald-500 font-bold shrink-0">·</span>
                          <span className="line-clamp-2">{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => toggleArticleCompleted(article.id)}
                    className="text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <CheckCircle2
                      className={`w-4 h-4 ${isCompleted ? 'text-emerald-600' : 'text-slate-300'}`}
                    />
                    <span>{isCompleted ? 'Unmark' : 'Mark as Read'}</span>
                  </button>

                  <button
                    onClick={() => onNavigateToArticle(article.id)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors shadow-2xs cursor-pointer"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
