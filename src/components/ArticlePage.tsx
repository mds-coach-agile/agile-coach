import React, { useEffect, useRef, useState } from 'react';
import { ArticleData, ARTICLES_DATA } from '../data/articlesData';
import { useProgress } from '../context/ProgressContext';
import { MarkdownRenderer } from './MarkdownRenderer';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  BookOpen,
  Share2,
  Bookmark,
  Sparkles,
  HelpCircle,
  ExternalLink,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Award,
} from 'lucide-react';

interface ArticlePageProps {
  article: ArticleData;
  fromQuiz?: boolean;
  questionId?: string;
  onNavigateHome: () => void;
  onNavigateArticles: () => void;
  onNavigateToArticle: (id: string, options?: { fromQuiz?: boolean; questionId?: string }) => void;
  onReturnToQuiz: () => void;
}

export const ArticlePage: React.FC<ArticlePageProps> = ({
  article,
  fromQuiz,
  questionId,
  onNavigateHome,
  onNavigateArticles,
  onNavigateToArticle,
  onReturnToQuiz,
}) => {
  const { isArticleCompleted, markArticleCompleted, toggleArticleCompleted } = useProgress();
  const isCompleted = isArticleCompleted(article.id);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Scroll reading progress (0 - 100%)
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showAutoCompletedToast, setShowAutoCompletedToast] = useState(false);
  const autoMarkedRef = useRef(false);

  useEffect(() => {
    autoMarkedRef.current = false;
    setShowAutoCompletedToast(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [article.id]);

  // Track window scroll percentage
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) return;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article.id]);

  // Auto-mark as read when bottom trigger is reached (Requirement 2)
  useEffect(() => {
    if (isCompleted || autoMarkedRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !autoMarkedRef.current) {
          autoMarkedRef.current = true;
          markArticleCompleted(article.id);
          setShowAutoCompletedToast(true);
          setTimeout(() => setShowAutoCompletedToast(false), 5000);
        }
      },
      { threshold: 0.2 }
    );

    if (bottomRef.current) {
      observer.observe(bottomRef.current);
    }

    return () => observer.disconnect();
  }, [article.id, isCompleted, markArticleCompleted]);

  // Find previous and next articles
  const currentIndex = ARTICLES_DATA.findIndex((a) => a.id === article.id);
  const prevArticle = currentIndex > 0 ? ARTICLES_DATA[currentIndex - 1] : null;
  const nextArticle = currentIndex < ARTICLES_DATA.length - 1 ? ARTICLES_DATA[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Scroll Reading Progress Bar at the very top */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-200 z-50">
        <div
          className="h-full bg-indigo-600 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Auto-completed Notification Toast */}
      {showAutoCompletedToast && (
        <aside
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <div className="text-xs font-semibold text-emerald-400">Module Completed!</div>
            <div className="text-xs text-slate-300">
              Material has been automatically recorded in your learning progress.
            </div>
          </div>
        </aside>
      )}

      {/* Sticky Top Sub-Header with Navigation Breadcrumbs */}
      <nav aria-label="Breadcrumbs and controls" className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-2xs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-600 truncate">
            <button
              onClick={onNavigateHome}
              className="hover:text-slate-900 transition-colors flex items-center gap-1 shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <span className="text-slate-300">/</span>
            <button
              onClick={onNavigateArticles}
              className="hover:text-slate-900 transition-colors shrink-0"
            >
              Articles
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 font-semibold truncate">
              Module {article.module}
            </span>
          </div>

          {/* Quick Mark Completion Status */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => toggleArticleCompleted(article.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                isCompleted
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
              title={isCompleted ? 'Click to unmark as completed' : 'Click to mark as completed'}
            >
              <CheckCircle2
                className={`w-4 h-4 ${isCompleted ? 'text-emerald-600' : 'text-slate-400'}`}
              />
              <span>{isCompleted ? 'Completed' : 'Mark as Read'}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* From-Quiz Remediation Callout Banner */}
      {fromQuiz && (
        <aside aria-label="Quiz remediation notice" className="max-w-4xl mx-auto px-4 sm:px-6 pt-6">
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-amber-900">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold uppercase tracking-wider text-[11px] text-amber-800 block mb-0.5">
                  Reviewing Concept from Quiz
                </span>
                <p className="text-amber-950">
                  You navigated here from a scenario question. Review the concept below and return to test your understanding.
                </p>
              </div>
            </div>
            <button
              onClick={onReturnToQuiz}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-amber-900 hover:bg-amber-950 text-white font-semibold rounded-lg shrink-0 transition-colors shadow-2xs"
            >
              <span>Return to Quiz</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </aside>
      )}

      {/* Main Article Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-10">
        <article className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-10 lg:p-12">
          {/* Article Meta Header */}
          <div className="border-b border-slate-100 pb-8 mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-2.5 py-1 bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-mono font-bold rounded-md">
                Module {article.module}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {article.readingTime}
              </span>
              {isCompleted && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Completed
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
              {article.title}
            </h1>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              {article.subtitle}
            </p>

            {/* Academic Sources Tags */}
            <div className="mt-5 flex flex-wrap items-center gap-1.5 pt-4 border-t border-slate-100">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">
                Sources:
              </span>
              {article.sources.map((source, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[11px] font-mono"
                >
                  {source}
                </span>
              ))}
            </div>
          </div>

          {/* Key Takeaways Callout Box */}
          <div className="p-6 bg-slate-50/80 rounded-xl border border-slate-200/80 mb-10">
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 uppercase tracking-wider mb-3">
              <Bookmark className="w-4 h-4" />
              <span>Key Takeaways</span>
            </div>
            <ul className="space-y-2.5 text-sm text-slate-700">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                  <span className="leading-relaxed font-medium">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Body Content from Markdown */}
          <div className="prose-slate max-w-none">
            <MarkdownRenderer content={article.contentMarkdown} />
          </div>

          {/* Check Your Understanding Self-Assessment Prompts */}
          {article.checkYourUnderstanding && article.checkYourUnderstanding.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="p-6 bg-indigo-50/40 rounded-xl border border-indigo-100">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-800 uppercase tracking-wider mb-3">
                  <HelpCircle className="w-4 h-4 text-indigo-600" />
                  <span>Check Your Understanding</span>
                </div>
                <p className="text-xs text-indigo-950/80 mb-4">
                  Before proceeding, reflect on these questions or discuss them with a peer:
                </p>
                <ol className="space-y-2.5 text-xs sm:text-sm text-slate-800 list-decimal pl-4">
                  {article.checkYourUnderstanding.map((q, idx) => (
                    <li key={idx} className="font-medium leading-relaxed">
                      {q}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          )}

          {/* Academic References Section */}
          {article.references && article.references.length > 0 && (
            <div className="mt-10 pt-8 border-t border-slate-100">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                Academic References & Literature
              </h3>
              <ul className="space-y-2 text-xs text-slate-600 font-mono">
                {article.references.map((ref, idx) => (
                  <li key={idx} className="flex items-start justify-between gap-2">
                    <span className="leading-relaxed">· {ref.citation}</span>
                    {ref.url && (
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-indigo-600 hover:text-indigo-800 inline-flex items-center gap-1 shrink-0 font-sans font-medium"
                      >
                        <span>[free link]</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Bottom Trigger for Auto-Marking Read Progress */}
          <div ref={bottomRef} className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-sm">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                  isCompleted ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'
                }`}
              >
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">
                  {isCompleted ? 'Module Mastered' : 'End of Article Content'}
                </div>
                <div className="text-xs text-slate-500">
                  {isCompleted
                    ? 'Recorded in your learning progress bar.'
                    : 'Reached the end of the page — auto-marking as completed.'}
                </div>
              </div>
            </div>

            <button
              onClick={() => toggleArticleCompleted(article.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-colors shadow-2xs whitespace-nowrap ${
                isCompleted
                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white'
              }`}
            >
              {isCompleted ? 'Unmark as Completed' : 'Mark as Completed ✓'}
            </button>
          </div>
        </article>

        {/* Previous & Next Article Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {prevArticle ? (
            <button
              onClick={() => onNavigateToArticle(prevArticle.id)}
              className="p-5 bg-white rounded-xl border border-slate-200 hover:border-slate-300 text-left transition-all shadow-2xs flex flex-col justify-between group"
            >
              <div className="flex items-center gap-1 text-xs font-semibold text-slate-400 mb-2">
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Previous: Module {prevArticle.module}</span>
              </div>
              <div className="font-bold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors">
                {prevArticle.title}
              </div>
            </button>
          ) : (
            <div />
          )}

          {nextArticle ? (
            <button
              onClick={() => onNavigateToArticle(nextArticle.id)}
              className="p-5 bg-white rounded-xl border border-slate-200 hover:border-slate-300 text-right transition-all shadow-2xs flex flex-col justify-between group sm:col-start-2"
            >
              <div className="flex items-center justify-end gap-1 text-xs font-semibold text-slate-400 mb-2">
                <span>Next: Module {nextArticle.module}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="font-bold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors">
                {nextArticle.title}
              </div>
            </button>
          ) : (
            <button
              onClick={onReturnToQuiz}
              className="p-5 bg-indigo-50/60 rounded-xl border border-indigo-200 hover:border-indigo-300 text-right transition-all shadow-2xs flex flex-col justify-between group sm:col-start-2"
            >
              <div className="flex items-center justify-end gap-1 text-xs font-semibold text-indigo-600 mb-2">
                <span>All Modules Completed</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="font-bold text-indigo-950 text-sm">
                Reinforce learning in Interactive Quiz →
              </div>
            </button>
          )}
        </div>
      </main>
    </div>
  );
};
