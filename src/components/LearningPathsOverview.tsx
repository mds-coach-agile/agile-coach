import React from 'react';
import { LEARNING_MODULES } from '../data/agileCoachData';
import { useProgress } from '../context/ProgressContext';
import { BookOpen, Check, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';

interface LearningPathsOverviewProps {
  onNavigateToArticle?: (id: string) => void;
  onNavigateArticles?: () => void;
}

export const LearningPathsOverview: React.FC<LearningPathsOverviewProps> = ({
  onNavigateToArticle,
  onNavigateArticles,
}) => {
  const {
    isArticleCompleted,
    completedCount,
    totalArticlesCount,
    progressPercentage,
    resetProgress,
  } = useProgress();

  const handleOpenArticle = (id: string) => {
    if (onNavigateToArticle) {
      onNavigateToArticle(id);
    } else {
      window.location.hash = `#/articles/${id}`;
    }
  };

  const handleViewAllArticles = () => {
    if (onNavigateArticles) {
      onNavigateArticles();
    } else {
      window.location.hash = '#/articles';
    }
  };

  return (
    <section id="overview" className="py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-1">
              Curriculum Roadmap
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Core Learning Modules
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-sm sm:text-right">
            Structured educational articles with academic sources, practical scenarios, and knowledge checks.
          </p>
        </div>

        {/* Global Progress Bar Banner */}
        <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-2xs mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-2">
              <span className="flex items-center gap-1.5">
                <span>Learning Progress:</span>
                <span className="text-indigo-600 font-bold">
                  {completedCount} of {totalArticlesCount} modules ({progressPercentage}%)
                </span>
              </span>
              {completedCount > 0 && (
                <button
                  onClick={resetProgress}
                  className="text-slate-400 hover:text-rose-600 text-[11px] font-normal transition-colors flex items-center gap-1 cursor-pointer"
                  title="Reset progress"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  progressPercentage === 100 ? 'bg-emerald-500' : 'bg-indigo-600'
                }`}
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          <button
            onClick={handleViewAllArticles}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors shrink-0 cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Browse All Articles</span>
          </button>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {LEARNING_MODULES.map((module) => {
            const isCompleted = isArticleCompleted(module.id);
            return (
              <div
                key={module.id}
                className={`bg-white rounded-2xl p-6 border transition-all flex flex-col justify-between shadow-xs ${
                  isCompleted
                    ? 'border-emerald-200 ring-1 ring-emerald-500/10'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-mono">
                    <span className="px-2 py-0.5 bg-slate-100 font-bold text-slate-900 rounded">
                      Module {module.number}
                    </span>
                    <div className="flex items-center gap-2">
                      <span>{module.readTime}</span>
                      {isCompleted && (
                        <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[11px] font-semibold rounded-full border border-emerald-200 flex items-center gap-1 font-sans">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          Completed
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1 leading-snug">
                    {module.title}
                  </h3>
                  <div className="text-xs text-indigo-600 font-medium mb-3">
                    {module.subtitle}
                  </div>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    {module.description}
                  </p>
                </div>

                <div>
                  <div className="pt-4 border-t border-slate-100 mb-4">
                    <div className="text-xs font-semibold text-slate-700 mb-2">Key Concepts:</div>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {module.keyPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-emerald-500 font-bold shrink-0">·</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">
                      Full Article
                    </span>
                    <button
                      onClick={() => handleOpenArticle(module.id)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors shadow-2xs cursor-pointer"
                    >
                      <span>Read Module</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
