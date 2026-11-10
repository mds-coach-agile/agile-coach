import React, { useState } from 'react';
import { useQuiz } from '../context/QuizContext';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { setFullAssessmentModalOpen } = useQuiz();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-indigo-600 transition-colors"
          >
            Agile Coach Hub
          </a>

          {/* Zone 2: 4 clean single-line navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a
              href="#overview"
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              Overview
            </a>
            <a
              href="#roles"
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              Role Matrix
            </a>
            <a
              href="#stances"
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              Coaching Stances
            </a>
            <a
              href="#conflict"
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              Conflict Model
            </a>
            <a
              href="#quiz"
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              Knowledge Check
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={() => setFullAssessmentModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              <span>Full Assessment</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 py-4 space-y-3">
          <nav className="flex flex-col space-y-2.5 text-sm font-medium text-slate-600">
            <a
              href="#overview"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-slate-900"
            >
              Overview
            </a>
            <a
              href="#roles"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-slate-900"
            >
              Role Matrix
            </a>
            <a
              href="#stances"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-slate-900"
            >
              Coaching Stances
            </a>
            <a
              href="#conflict"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-slate-900"
            >
              Conflict Model
            </a>
            <a
              href="#quiz"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-slate-900"
            >
              Knowledge Check
            </a>
          </nav>
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setFullAssessmentModalOpen(true);
              }}
              className="w-full flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg"
            >
              <span>Full Assessment</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
