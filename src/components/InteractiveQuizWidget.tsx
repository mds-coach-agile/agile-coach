import React from 'react';
import { useQuiz } from '../context/QuizContext';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  Award,
  ChevronRight,
} from 'lucide-react';

export const InteractiveQuizWidget: React.FC = () => {
  const {
    questions,
    currentQuestionIndex,
    activeFilter,
    selectedAnswers,
    revealedQuestions,
    score,
    answeredCount,
    isComplete,
    selectAnswer,
    submitAnswer,
    nextQuestion,
    prevQuestion,
    jumpToQuestion,
    setCategoryFilter,
    resetQuiz,
    setFullAssessmentModalOpen,
  } = useQuiz();

  const currentQ = questions[currentQuestionIndex];
  if (!currentQ) return null;

  const selectedOptId = selectedAnswers[currentQ.id];
  const isRevealed = revealedQuestions[currentQ.id] || false;
  const selectedOption = currentQ.options.find((opt) => opt.id === selectedOptId);
  const correctOption = currentQ.options.find((opt) => opt.isCorrect);
  const isUserCorrect = isRevealed && selectedOption?.isCorrect;

  return (
    <section id="quiz" className="py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-1">
              Reactive Knowledge Check
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Interactive Scenario Practice
            </h2>
          </div>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-white border border-slate-200 rounded-lg">
            {[
              { id: 'all', label: 'All Topics' },
              { id: 'roles', label: 'Roles' },
              { id: 'stances', label: 'Stances' },
              { id: 'conflict', label: 'Conflict' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  activeFilter === cat.id
                    ? 'bg-slate-900 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Quiz Progress & Stats Bar */}
        <div className="bg-white rounded-xl border border-slate-200 p-4 mb-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
            <span className="text-xs text-slate-400 font-mono">·</span>
            <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-md">
              {currentQ.categoryLabel}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium text-slate-600 font-mono">
            <div className="flex items-center gap-1.5">
              <span>Score:</span>
              <span className="text-slate-900 font-bold tabular-nums">
                {score} / {answeredCount}
              </span>
            </div>
            {answeredCount > 0 && (
              <button
                onClick={resetQuiz}
                className="inline-flex items-center gap-1 text-slate-400 hover:text-slate-700 transition-colors"
                title="Reset answers"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Progress Bar Line */}
        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mb-6">
          <div
            className="bg-indigo-600 h-full transition-all duration-300 rounded-full"
            style={{
              width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
            }}
          />
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          {/* Scenario Context */}
          <div className="mb-6 pb-5 border-b border-slate-100">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Team Scenario
            </div>
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal bg-slate-50 p-4 rounded-lg border border-slate-100">
              {currentQ.scenario}
            </p>
          </div>

          {/* The Specific Question */}
          <div className="mb-6">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              {currentQ.question}
            </h3>
          </div>

          {/* Options List */}
          <div className="space-y-3 mb-6">
            {currentQ.options.map((option) => {
              const isSelected = selectedOptId === option.id;
              let optionStyle = 'border-slate-200 bg-white hover:border-slate-300 text-slate-800';

              if (isRevealed) {
                if (option.isCorrect) {
                  optionStyle = 'border-emerald-500 bg-emerald-50/40 text-emerald-950 font-medium';
                } else if (isSelected && !option.isCorrect) {
                  optionStyle = 'border-rose-400 bg-rose-50/40 text-rose-950';
                } else {
                  optionStyle = 'border-slate-100 bg-slate-50/50 text-slate-400 opacity-70';
                }
              } else if (isSelected) {
                optionStyle = 'border-indigo-600 bg-indigo-50/30 text-indigo-950 ring-1 ring-indigo-500/20';
              }

              return (
                <button
                  key={option.id}
                  disabled={isRevealed}
                  onClick={() => selectAnswer(currentQ.id, option.id)}
                  className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex items-start justify-between gap-3 ${optionStyle}`}
                >
                  <div className="flex items-start gap-3 flex-1">
                    <span
                      className={`w-5 h-5 rounded-full border text-xs font-medium flex items-center justify-center shrink-0 mt-0.5 ${
                        isSelected
                          ? 'border-indigo-600 bg-indigo-600 text-white'
                          : 'border-slate-300 text-slate-500'
                      }`}
                    >
                      {option.id.replace('opt', '')}
                    </span>
                    <span className="leading-relaxed">{option.text}</span>
                  </div>

                  {/* Feedback icon when revealed */}
                  {isRevealed && option.isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  )}
                  {isRevealed && isSelected && !option.isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Submit or Navigation Controls */}
          {!isRevealed ? (
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <span className="text-xs text-slate-400">
                {selectedOptId ? 'Ready to check your thinking' : 'Select an option to proceed'}
              </span>
              <button
                disabled={!selectedOptId}
                onClick={() => submitAnswer(currentQ.id)}
                className={`px-5 py-2.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shadow-2xs ${
                  selectedOptId
                    ? 'bg-slate-900 hover:bg-slate-800 text-white cursor-pointer'
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                }`}
              >
                Submit Answer
              </button>
            </div>
          ) : (
            <div className="space-y-4 pt-4 border-t border-slate-100">
              {/* Detailed Rationale Callout */}
              <div
                className={`p-4 rounded-xl border ${
                  isUserCorrect
                    ? 'bg-emerald-50/60 border-emerald-200 text-emerald-950'
                    : 'bg-slate-50 border-slate-200 text-slate-800'
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5 font-bold text-xs uppercase tracking-wider">
                  {isUserCorrect ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-800">Excellent Coaching Intuition</span>
                    </>
                  ) : (
                    <>
                      <HelpCircle className="w-4 h-4 text-slate-600" />
                      <span className="text-slate-800">Learning Insight</span>
                    </>
                  )}
                </div>
                <p className="text-xs sm:text-sm leading-relaxed mb-3">
                  {selectedOption?.rationale || correctOption?.rationale}
                </p>

                <div className="pt-2.5 border-t border-black/5 text-xs leading-relaxed">
                  <span className="font-semibold text-slate-900">Coaching takeaway: </span>
                  <span className="text-slate-700">{currentQ.coachingTakeaway}</span>
                </div>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center justify-between pt-2">
                <button
                  disabled={currentQuestionIndex === 0}
                  onClick={prevQuestion}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg border transition-colors ${
                    currentQuestionIndex === 0
                      ? 'border-slate-100 text-slate-300 cursor-not-allowed'
                      : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>

                {currentQuestionIndex < questions.length - 1 ? (
                  <button
                    onClick={nextQuestion}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shadow-2xs"
                  >
                    <span>Next Question</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={() => setFullAssessmentModalOpen(true)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-2xs"
                  >
                    <span>Finish & Review Full Assessment</span>
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Quick Question Selector Dots */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {questions.map((q, idx) => {
            const isQAnswered = revealedQuestions[q.id];
            const isQCurrent = idx === currentQuestionIndex;
            return (
              <button
                key={q.id}
                onClick={() => jumpToQuestion(idx)}
                className={`w-7 h-7 rounded-md text-xs font-medium transition-all ${
                  isQCurrent
                    ? 'bg-slate-900 text-white font-bold ring-2 ring-slate-900/20'
                    : isQAnswered
                    ? 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                    : 'bg-white border border-slate-200 text-slate-500 hover:bg-slate-100'
                }`}
                title={`Go to question ${idx + 1}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>

        {/* Gateway Card for Future Full Quiz Integration */}
        <div className="mt-12 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs">
          <div className="max-w-xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-1">
              Next Step in Learning Path
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              Ready for the Full Agile Coach Knowledge Check?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Explore the full curriculum: 20+ comprehensive scenarios covering team facilitation,
              executive stakeholder coaching, and advanced retrospective dynamics.
            </p>
          </div>

          <button
            onClick={() => setFullAssessmentModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs"
          >
            <span>Explore Full Assessment</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
