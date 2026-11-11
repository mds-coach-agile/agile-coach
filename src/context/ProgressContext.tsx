import React, { createContext, useContext, useState, useEffect } from 'react';
import { ProgressContextValue } from '../types';
import { ARTICLES_DATA } from '../data/articlesData';

const LOCAL_STORAGE_KEY = 'agile_coach_learning_progress';

const ProgressContext = createContext<ProgressContextValue | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completedArticles, setCompletedArticles] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to parse completed articles from localStorage', e);
    }
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(completedArticles));
    } catch (e) {
      console.warn('Failed to persist completed articles to localStorage', e);
    }
  }, [completedArticles]);

  const isArticleCompleted = (articleId: string): boolean => {
    return completedArticles.includes(articleId);
  };

  const markArticleCompleted = (articleId: string) => {
    setCompletedArticles((prev) => {
      if (prev.includes(articleId)) return prev;
      return [...prev, articleId];
    });
  };

  const unmarkArticleCompleted = (articleId: string) => {
    setCompletedArticles((prev) => prev.filter((id) => id !== articleId));
  };

  const toggleArticleCompleted = (articleId: string) => {
    setCompletedArticles((prev) =>
      prev.includes(articleId) ? prev.filter((id) => id !== articleId) : [...prev, articleId]
    );
  };

  const resetProgress = () => {
    setCompletedArticles([]);
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch (e) {
      console.warn('Failed to clear progress from localStorage', e);
    }
  };

  const totalArticlesCount = ARTICLES_DATA.length;
  const completedCount = completedArticles.length;
  const progressPercentage =
    totalArticlesCount > 0 ? Math.round((completedCount / totalArticlesCount) * 100) : 0;

  return (
    <ProgressContext.Provider
      value={{
        completedArticles,
        isArticleCompleted,
        markArticleCompleted,
        unmarkArticleCompleted,
        toggleArticleCompleted,
        resetProgress,
        completedCount,
        totalArticlesCount,
        progressPercentage,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = (): ProgressContextValue => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

