import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200/80 py-12 text-xs text-slate-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-slate-100">
          <div>
            <div className="text-sm font-bold text-slate-900 mb-1">
              Agile Coach Learning Hub
            </div>
            <p className="text-xs text-slate-500 max-w-md leading-relaxed">
              An educational project designed to bridge Agile theory and practical team coaching behaviors.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-medium text-slate-600">
            <a href="#overview" className="hover:text-slate-900 transition-colors">
              Overview
            </a>
            <a href="#roles" className="hover:text-slate-900 transition-colors">
              Role Matrix
            </a>
            <a href="#stances" className="hover:text-slate-900 transition-colors">
              4 Stances
            </a>
            <a href="#conflict" className="hover:text-slate-900 transition-colors">
              Conflict Model
            </a>
            <a href="#quiz" className="hover:text-slate-900 transition-colors">
              Knowledge Check
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-slate-400">
          <div>
            Based on Agile Coaching research, Lyssa Adkins' Coaching Agile Teams framework, and Speed Leas conflict models.
          </div>
          <div className="flex items-center gap-2">
            <span>Agile Coach Learning Hub</span>
            <span aria-hidden="true">·</span>
            <span>2026 Academic Release</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
