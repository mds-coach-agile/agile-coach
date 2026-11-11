/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { QuizProvider } from './context/QuizContext';
import { ProgressProvider } from './context/ProgressContext';
import { useHashRouter } from './hooks/useHashRouter';
import { ARTICLES_DATA } from './data/articlesData';

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { LearningPathsOverview } from './components/LearningPathsOverview';
import { RoleComparisonSection } from './components/RoleComparisonSection';
import { CoachingStancesSection } from './components/CoachingStancesSection';
import { ConflictLevelsSection } from './components/ConflictLevelsSection';
import { InteractiveQuizWidget } from './components/InteractiveQuizWidget';
import { FullAssessmentModal } from './components/FullAssessmentModal';
import { ArticlePage } from './components/ArticlePage';
import { ArticlesCatalog } from './components/ArticlesCatalog';
import { Footer } from './components/Footer';

const AppContent: React.FC = () => {
  const {
    route,
    navigateToHome,
    navigateToArticles,
    navigateToArticle,
    returnToQuiz,
  } = useHashRouter();

  // If on article details view
  if (route.view === 'article-detail' && route.articleId) {
    const article = ARTICLES_DATA.find((a) => a.id === route.articleId);
    if (article) {
      return (
        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
          <Navbar
            currentView="article-detail"
            onNavigateHome={navigateToHome}
            onNavigateArticles={navigateToArticles}
          />
          <main className="flex-1">
            <ArticlePage
              article={article}
              fromQuiz={route.fromQuiz}
              questionId={route.questionId}
              onNavigateHome={() => navigateToHome()}
              onNavigateArticles={navigateToArticles}
              onNavigateToArticle={navigateToArticle}
              onReturnToQuiz={returnToQuiz}
            />
          </main>
          <Footer />
          <FullAssessmentModal
            onNavigateToArticle={navigateToArticle}
            onNavigateArticles={navigateToArticles}
          />
        </div>
      );
    }
  }

  // If on full articles catalog view
  if (route.view === 'articles') {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <Navbar
          currentView="articles"
          onNavigateHome={navigateToHome}
          onNavigateArticles={navigateToArticles}
        />
        <main className="flex-1">
          <ArticlesCatalog
            onNavigateHome={() => navigateToHome()}
            onNavigateToArticle={navigateToArticle}
            onReturnToQuiz={returnToQuiz}
          />
        </main>
        <Footer />
        <FullAssessmentModal
          onNavigateToArticle={navigateToArticle}
          onNavigateArticles={navigateToArticles}
        />
      </div>
    );
  }

  // Default: Main Hub View
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar
        currentView="home"
        onNavigateHome={navigateToHome}
        onNavigateArticles={navigateToArticles}
      />
      <main className="flex-1">
        <HeroSection />
        <LearningPathsOverview
          onNavigateToArticle={navigateToArticle}
          onNavigateArticles={navigateToArticles}
        />
        <RoleComparisonSection />
        <CoachingStancesSection />
        <ConflictLevelsSection />
        <InteractiveQuizWidget onNavigateToArticle={navigateToArticle} />
      </main>
      <Footer />
      <FullAssessmentModal
        onNavigateToArticle={navigateToArticle}
        onNavigateArticles={navigateToArticles}
      />
    </div>
  );
};

export default function App() {
  return (
    <ProgressProvider>
      <QuizProvider>
        <AppContent />
      </QuizProvider>
    </ProgressProvider>
  );
}
