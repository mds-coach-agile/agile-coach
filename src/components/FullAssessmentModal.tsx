import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { useProgress } from '../context/ProgressContext';
import { ARTICLES_DATA } from '../data/articlesData';
import { X, CheckCircle2, Clock, BookOpen, ArrowRight, ShieldCheck } from 'lucide-react';

interface FullAssessmentModalProps {
  onNavigateToArticle?: (id: string) => void;
  onNavigateArticles?: () => void;
}

export const FullAssessmentModal: React.FC<FullAssessmentModalProps> = ({
  onNavigateToArticle,
  onNavigateArticles,
}) => {
  const {
    isFullAssessmentModalOpen,
    setFullAssessmentModalOpen,
    score,
    answeredCount,
    questions,
    revealedQuestions,
    selectedAnswers,
  } = useQuiz();
  const { completedCount, totalArticlesCount } = useProgress();

  if (!isFullAssessmentModalOpen) return null;

  const handleOpenArticle = (id: string) => {
    setFullAssessmentModalOpen(false);
    if (onNavigateToArticle) {
      onNavigateToArticle(id);
    } else {
      window.location.hash = `#/articles/${id}`;
    }
  };

  const handleOpenAllArticles = () => {
    setFullAssessmentModalOpen(false);
    if (onNavigateArticles) {
      onNavigateArticles();
    } else {
      window.location.hash = '#/articles';
    }
  };

  // Find missed questions to recommend specific review articles
  const missedQuestionArticleIds = new Set<string>();
  questions.forEach((q) => {
    if (revealedQuestions[q.id]) {
      const selectedId = selectedAnswers[q.id];
      const selectedOpt = q.options.find((o) => o.id === selectedId);
      if (selectedOpt && !selectedOpt.isCorrect && q.relatedArticleId) {
        missedQuestionArticleIds.add(q.relatedArticleId);
      }
    }
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-xl w-full border border-slate-200 shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between gap-4">
          <div>
            <div className="text-xs font-semibold tracking-wider text-indigo-600 uppercase mb-1">
              Assessment & Curriculum Hub
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Full Agile Coach Certification Check
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Comprehensive 20-scenario assessment with personalized coaching gap analysis.
            </p>
          </div>
          <button
            onClick={() => setFullAssessmentModalOpen(false)}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body content */}
        <div className="p-6 space-y-6 text-sm max-h-[75vh] overflow-y-auto">
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div className="text-lg font-bold text-slate-900 font-mono">20</div>
              <div className="text-[11px] text-slate-500 font-medium">Scenarios</div>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div className="text-lg font-bold text-indigo-600 font-mono">
                {completedCount}/{totalArticlesCount}
              </div>
              <div className="text-[11px] text-slate-500 font-medium">Articles Read</div>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div className="text-lg font-bold text-emerald-600 font-mono">80%</div>
              <div className="text-[11px] text-slate-500 font-medium">Pass Target</div>
            </div>
          </div>

          {/* Remediation Recommendations if user missed questions */}
          {missedQuestionArticleIds.size > 0 && (
            <div className="p-4 bg-amber-50/80 rounded-xl border border-amber-200 text-xs">
              <div className="font-bold text-amber-950 mb-1.5 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-amber-700" />
                <span>Recommended Review Based on Your Answers:</span>
              </div>
              <p className="text-amber-900 mb-2 leading-relaxed">
                You missed some scenario questions. We recommend brushing up on these concepts:
              </p>
              <div className="space-y-1.5">
                {Array.from(missedQuestionArticleIds).map((artId) => {
                  const article = ARTICLES_DATA.find((a) => a.id === artId);
                  if (!article) return null;
                  return (
                    <button
                      key={artId}
                      onClick={() => handleOpenArticle(artId)}
                      className="w-full text-left p-2 bg-white rounded-lg border border-amber-200/80 hover:border-amber-400 font-medium text-amber-950 flex items-center justify-between transition-colors cursor-pointer"
                    >
                      <span>Module {article.module}: {article.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-700" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Module Breakdown */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Curriculum Learning Modules
              </h4>
              <button
                onClick={handleOpenAllArticles}
                className="text-xs text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer"
              >
                All Articles ({totalArticlesCount}) →
              </button>
            </div>
            <div className="space-y-2 text-xs text-slate-700">
              {ARTICLES_DATA.map((article) => (
                <div
                  key={article.id}
                  onClick={() => handleOpenArticle(article.id)}
                  className="flex items-center justify-between p-2.5 bg-slate-50 hover:bg-indigo-50/50 rounded-lg border border-slate-100 hover:border-indigo-200 transition-colors cursor-pointer"
                >
                  <span className="font-medium text-slate-900">
                    {article.module}. {article.title}
                  </span>
                  <span className="text-slate-500 font-mono text-[11px] flex items-center gap-1">
                    <span>{article.readingTime}</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Current Progress Callout */}
          <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100 text-xs">
            <div className="font-semibold text-indigo-950 mb-1">
              Your Current Practice Session
            </div>
            <p className="text-indigo-800 leading-relaxed">
              You have answered {answeredCount} questions with a score of <strong className="font-bold">{score}</strong>.
              All progress across articles and quizzes is saved automatically.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={handleOpenAllArticles}
            className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-lg transition-colors cursor-pointer"
          >
            Browse Articles
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFullAssessmentModalOpen(false)}
              className="px-3.5 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                setFullAssessmentModalOpen(false);
                const quizEl = document.getElementById('quiz');
                quizEl?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-2xs cursor-pointer"
            >
              <span>Continue Quiz</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
