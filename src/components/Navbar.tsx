import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { Menu, X, BookOpen, Sparkles } from 'lucide-react';

interface NavbarProps {
  onNavigateHome?: (anchor?: string) => void;
  onNavigateArticles?: () => void;
  onNavigatePractice?: (anchor?: string) => void;
  currentView?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigateHome,
  onNavigateArticles,
  onNavigatePractice,
  currentView = 'home',
}) => {
  const { completedCount, totalArticlesCount, progressPercentage } = useProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (anchor?: string) => {
    setMobileMenuOpen(false);
    if (onNavigateHome) {
      onNavigateHome(anchor);
    } else if (anchor) {
      window.location.hash = `#${anchor}`;
    } else {
      window.location.hash = '#/';
    }
  };

  const handleArticlesClick = () => {
    setMobileMenuOpen(false);
    if (onNavigateArticles) {
      onNavigateArticles();
    } else {
      window.location.hash = '#/articles';
    }
  };

  const handlePracticeClick = (anchor?: string) => {
    setMobileMenuOpen(false);
    if (onNavigatePractice) {
      onNavigatePractice(anchor);
    } else if (anchor) {
      window.location.hash = `#/practice#${anchor}`;
    } else {
      window.location.hash = '#/practice';
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Row 1: Logo & Progress Bar */}
        <div className="flex items-center justify-between gap-6 h-16">
          <button
            onClick={() => handleNavClick()}
            className="text-left group flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
              Agile Coach Hub
            </span>
          </button>

          {/* Progress Bar */}
          <div className="hidden sm:flex flex-1" />
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            {/* Navbar Progress Indicator */}
            <div
              onClick={handleArticlesClick}
              className="flex items-center gap-2.5 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200/90 rounded-xl cursor-pointer transition-colors"
              title="Click to view articles and progress"
            >
              <div className="flex flex-col text-right">
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  Progress
                </span>
                <span className="text-xs font-mono font-bold text-slate-800">
                  {progressPercentage}% ({completedCount}/{totalArticlesCount})
                </span>
              </div>
              <div className="w-14 bg-slate-200 h-2 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    progressPercentage === 100 ? 'bg-emerald-500' : 'bg-indigo-600'
                  }`}
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={handleArticlesClick}
              className="px-2.5 py-1 text-xs font-semibold bg-slate-100 rounded-md text-slate-700 flex items-center gap-1"
            >
              <span>{progressPercentage}%</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Row 2: Navigation Links (full width, desktop only) */}
        <nav className="hidden lg:flex items-center justify-between gap-6 h-12 border-t border-slate-200/80 text-sm font-medium text-slate-600 whitespace-nowrap">
          <button
            onClick={() => handleNavClick('overview')}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            Overview
          </button>
          <button
            onClick={handleArticlesClick}
            className={`hover:text-slate-900 transition-colors flex items-center gap-1.5 cursor-pointer ${
              currentView === 'articles' || currentView === 'article-detail'
                ? 'text-indigo-600 font-semibold'
                : ''
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Articles</span>
            <span className="px-1.5 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-mono rounded font-semibold">
              {completedCount}/{totalArticlesCount}
            </span>
          </button>
          <button
            onClick={() => handleNavClick('roles')}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            Role Matrix
          </button>
          <button
            onClick={() => handleNavClick('stances')}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            Coaching Stances
          </button>
          <button
            onClick={() => handlePracticeClick()}
            className={`flex items-center gap-1.5 cursor-pointer px-3 py-1 rounded-lg text-sm font-semibold transition-all ${
              currentView === 'practice'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-indigo-600 hover:bg-indigo-50 border border-indigo-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Practice & Quiz</span>
          </button>
        </nav>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 py-4 space-y-3">
          {/* Mobile Progress Bar */}
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl mb-2">
            <div className="flex items-center justify-between text-xs font-medium text-slate-700 mb-1.5">
              <span>Learning Progress:</span>
              <span className="font-bold font-mono text-indigo-600">{progressPercentage}%</span>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-indigo-600 h-full rounded-full transition-all"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
            <button
              onClick={() => handleNavClick('overview')}
              className="text-left py-1.5 hover:text-indigo-600 transition-colors"
            >
              Overview
            </button>
            <button
              onClick={handleArticlesClick}
              className="text-left py-1.5 hover:text-indigo-600 transition-colors flex items-center justify-between"
            >
              <span>Articles & Curriculum</span>
              <span className="text-xs bg-slate-100 px-2 py-0.5 rounded font-mono">
                {completedCount}/{totalArticlesCount}
              </span>
            </button>
            <button
              onClick={() => handleNavClick('roles')}
              className="text-left py-1.5 hover:text-indigo-600 transition-colors"
            >
              Role Matrix
            </button>
            <button
              onClick={() => handleNavClick('stances')}
              className="text-left py-1.5 hover:text-indigo-600 transition-colors"
            >
              Coaching Stances
            </button>
            <button
              onClick={() => handlePracticeClick()}
              className={`text-left py-2 px-3 rounded-lg flex items-center gap-2 font-semibold transition-colors ${
                currentView === 'practice'
                  ? 'bg-indigo-600 text-white'
                  : 'text-indigo-600 bg-indigo-50 border border-indigo-200'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Practice & Quiz</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
