import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';
import { QuizContextValue, QuizQuestion } from '../types';
import { QUIZ_QUESTIONS } from '../data/agileCoachData';

const QuizContext = createContext<QuizContextValue | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [revealedQuestions, setRevealedQuestions] = useState<Record<string, boolean>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [isFullAssessmentModalOpen, setFullAssessmentModalOpen] = useState<boolean>(false);

  // Filtered questions based on active category
  const filteredQuestions = useMemo(() => {
    if (activeFilter === 'all') return QUIZ_QUESTIONS;
    return QUIZ_QUESTIONS.filter((q) => q.category === activeFilter);
  }, [activeFilter]);

  // Safe question index
  const safeIndex = Math.min(currentQuestionIndex, Math.max(0, filteredQuestions.length - 1));

  // Compute reactive score and answered count
  const { score, answeredCount, isComplete } = useMemo(() => {
    let currentScore = 0;
    let answered = 0;

    filteredQuestions.forEach((q) => {
      const selectedOptionId = selectedAnswers[q.id];
      const isRevealed = revealedQuestions[q.id];

      if (isRevealed && selectedOptionId) {
        answered += 1;
        const correctOpt = q.options.find((opt) => opt.isCorrect);
        if (correctOpt && correctOpt.id === selectedOptionId) {
          currentScore += 1;
        }
      }
    });

    const complete = filteredQuestions.length > 0 && answered === filteredQuestions.length;

    return {
      score: currentScore,
      answeredCount: answered,
      isComplete: complete,
    };
  }, [filteredQuestions, selectedAnswers, revealedQuestions]);

  const selectAnswer = useCallback((questionId: string, optionId: string) => {
    // If answer already revealed, allow inspecting but keep submitted state
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  }, []);

  const submitAnswer = useCallback((questionId: string) => {
    setRevealedQuestions((prev) => ({
      ...prev,
      [questionId]: true,
    }));
  }, []);

  const nextQuestion = useCallback(() => {
    setCurrentQuestionIndex((prev) => Math.min(prev + 1, filteredQuestions.length - 1));
  }, [filteredQuestions.length]);

  const prevQuestion = useCallback(() => {
    setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const jumpToQuestion = useCallback(
    (index: number) => {
      if (index >= 0 && index < filteredQuestions.length) {
        setCurrentQuestionIndex(index);
      }
    },
    [filteredQuestions.length]
  );

  const setCategoryFilter = useCallback((category: string) => {
    setActiveFilter(category);
    setCurrentQuestionIndex(0);
  }, []);

  const resetQuiz = useCallback(() => {
    setSelectedAnswers({});
    setRevealedQuestions({});
    setCurrentQuestionIndex(0);
  }, []);

  const value: QuizContextValue = {
    questions: filteredQuestions,
    currentQuestionIndex: safeIndex,
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
    isFullAssessmentModalOpen,
    setFullAssessmentModalOpen,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export const useQuiz = (): QuizContextValue => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
